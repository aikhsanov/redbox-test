<template>
  <div class="form-block mt-10">
    <h5 class="font-semibold text-lg text-left">Фотография</h5>
    <div class="grid grid-cols-7 gap-7 px-4 mt-2">
      <div class="file-upload-wrap">
        <div
          class="
            h-36
            flex
            justify-center
            col-span-1
            border-4 border-perfume border-solid
            rounded
            bg-selago
            mb-2
          "
        >
          <label
            for="file-upload"
            class="
              w-full
              h-full
              relative
              cursor-pointer
              flex
              justify-center
              items-center
            "
            ><svg
              width="47"
              height="41"
              viewBox="0 0 47 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_194_17" fill="white">
                <path
                  d="M35.0735 6.83337H44.389C45.8288 6.83337 47.0001 8.11061 47 9.68054V38.1528C47 39.7228 45.8287 41 44.3889 41H2.61108C1.17133 41 0 39.7228 0 38.1527V9.68054C0 8.11061 1.17133 6.83337 2.61108 6.83337H11.926L13.9428 1.09677C14.1752 0.436226 14.7565 0 15.4056 0H31.5945C32.2431 0 32.8249 0.436226 33.0578 1.09677L35.0735 6.83337Z"
                />
              </mask>
              <path
                d="M35.0735 6.83337H44.389C45.8288 6.83337 47.0001 8.11061 47 9.68054V38.1528C47 39.7228 45.8287 41 44.3889 41H2.61108C1.17133 41 0 39.7228 0 38.1527V9.68054C0 8.11061 1.17133 6.83337 2.61108 6.83337H11.926L13.9428 1.09677C14.1752 0.436226 14.7565 0 15.4056 0H31.5945C32.2431 0 32.8249 0.436226 33.0578 1.09677L35.0735 6.83337Z"
                stroke="#9B63F8"
                stroke-width="6"
                mask="url(#path-1-inside-1_194_17)"
              />
              <path
                d="M13.5 23.0153C13.5 17.2169 18.2133 12.5 24 12.5C29.7868 12.5 34.5 17.2165 34.5 23.0153C34.5 28.8143 29.7868 33.5311 24 33.5311C18.2132 33.5311 13.5 28.8143 13.5 23.0153Z"
                stroke="#9B63F8"
                stroke-width="3"
              />
              <path
                d="M22.6803 17.1377H25.5093V29.641H22.6803V17.1377Z"
                fill="#9B63F8"
              />
              <path
                d="M18.4369 24.9523V21.8264H29.7528V24.9523H18.4369Z"
                fill="#9B63F8"
              />
            </svg>
            <input
              id="file-upload"
              name="fileUpload"
              type="file"
              class="sr-only"
              @change="onFileChange($event)"
            />
          </label>
        </div>
        <span class="text-xxs font-normal -ml-4 inline-block"
          >Главная фотография <br />
          (обложка мероприятия)</span
        >
      </div>

      <div v-for="img in images" :key="img">
        <div v-if="img.image" class="relative col-span-1">
          <div class="uploaded-img-wrap h-36 mb-2">
            <img :src="img.image" class="w-full h-full object-cover rounded" />
            <remove-button @click="removeImage"></remove-button>
          </div>
          <span class="text-xxs font-normal -ml-4 inline-block"
            >Главная фотография <br />
            (обложка мероприятия)</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRef, watch } from "vue";
import RemoveButton from "../UI/RemoveButton";

export default {
  name: "TheFileUploader",
  props: ["modelValue"],
  components: { RemoveButton },
  setup(props, { emit }) {
    const images = toRef(props, "modelValue");
    const newImages = ref([]);
    function onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      if (images.value.length >= 1) {
        throw new Error("Превышен лимит допустимых загрузок");
      }
      const item = {};
      this.createImage(item, files[0]);
    }
    function createImage(item, file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        item.image = e.target.result;
        newImages.value.push(item);
      };
      reader.readAsDataURL(file);
      emit("update:modelValue", newImages.value);
    }
    function removeImage() {
      newImages.value = [];
      emit("update:modelValue", newImages.value);
    }

    watch(images, (imagesNewVal, imagesPrevVal) => {
      if (imagesPrevVal.length > 0 && imagesNewVal.length === 0) {
        newImages.value = [];
      }
    });
    return {
      images,
      onFileChange,
      createImage,
      removeImage,
      newImages,
    };
  },
};
</script>

<style scoped></style>
