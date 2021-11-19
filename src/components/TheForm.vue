<template>
  <form @submit.prevent="submitForm">
    <div class="py-5 bg-white text-left">
      <div class="form-block mt-0">
        <div>
          <h5 class="font-semibold text-lg text-left">
            Информация об организаторе
          </h5>
          <div class="mt-8">
            <label for="arranger" class="block font-semibold"
              >Организатор</label
            >
            <input
              v-model="arranger"
              type="text"
              name="arranger"
              id="arranger"
              autocomplete="arranger"
              class="
                mt-2
                h-14
                focus:ring-heliotrope focus:border-heliotrope
                block
                w-full
                shadow-sm
                sm:text-sm
                border-perfume
                rounded-md
              "
            />
            <span>{{ arrangerError }}</span>
          </div>
        </div>
      </div>
      <div class="form-block mt-10">
        <div class="grid grid-cols-6 gap-6">
          <h5 class="font-semibold text-lg text-left col-span-6">
            Контактные данные
          </h5>
          <div class="col-span-2">
            <label for="phoneNumber" class="block font-semibold">Телефон</label>
            <input
              v-model="phoneNumber"
              v-maska="'+7 (###) ###-##-##'"
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              autocomplete="false"
              class="
                mt-2
                h-14
                focus:ring-heliotrope focus:border-heliotrope
                font-medium
                block
                w-full
                shadow-sm
                sm:text-sm
                border-perfume
                rounded-md
              "
            />
            <span>{{ phoneNumberError }}</span>
          </div>
          <div class="col-span-2">
            <label for="email" class="block font-semibold">E-mail</label>
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="
                mt-2
                h-14
                focus:ring-heliotrope focus:border-heliotrope
                block
                w-full
                shadow-sm
                sm:text-sm
                border-perfume
                rounded-md
              "
            />
            <span>{{ emailError }}</span>
          </div>
          <div class="col-span-2">
            <label for="city" class="block font-semibold"
              >Город организатора</label
            >
            <input
              v-model="city"
              type="text"
              name="city"
              id="city"
              autocomplete="city"
              class="
                mt-2
                h-14
                focus:ring-heliotrope focus:border-heliotrope
                block
                w-full
                shadow-sm
                sm:text-sm
                border-perfume
                rounded-md
              "
            />
            <span>{{ cityError }}</span>
          </div>
        </div>
      </div>
      <div class="form-block mt-10">
        <div>
          <h5 class="font-semibold text-lg text-left">Общая информация</h5>
          <div class="mt-6">
            <label for="event-name" class="block font-semibold">Название</label>
            <input
              v-model="eventName"
              type="text"
              name="eventName"
              id="event-name"
              class="
                mt-2
                h-14
                focus:ring-heliotrope focus:border-heliotrope
                block
                w-full
                shadow-sm
                sm:text-sm
                border-perfume
                rounded-md
              "
            />
          </div>
        </div>
      </div>
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
                rounded-md
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
                <img
                  :src="img.image"
                  class="w-full h-full object-cover rounded-md"
                />
                <button
                  @click="removeImage(img)"
                  class="absolute -top-3 -right-3"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="15" cy="15" r="15" fill="#351767" />
                    <path
                      d="M9.16663 9.16666L20.6571 20.6571M20.9857 9.16666L9.4952 20.6571"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </button>
              </div>
              <span class="text-xxs font-normal -ml-4 inline-block"
                >Главная фотография <br />
                (обложка мероприятия)</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="form-block mt-10">
        <div class="mt-6">
          <label for="event-name" class="block font-semibold"
            >Подробное описание</label
          >
          <textarea
            v-model="description"
            name="description"
            id="description"
            class="
              resize-none
              mt-2
              h-48
              focus:ring-heliotrope focus:border-heliotrope
              block
              w-full
              shadow-sm
              sm:text-sm
              border-perfume
              rounded-md
            "
          ></textarea>
        </div>
      </div>
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
export default {
  name: "TheForm",
  setup() {
    // Define a validation schema
    const images = ref([
      {
        image: false,
      },
      {
        image: false,
      },
      {
        image: false,
      },
      {
        image: false,
      },
      {
        image: false,
      },
      {
        image: false,
      },
    ]);
    function onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      const item = images.value.find((el) => !el.image);
      this.createImage(item, files[0]);
    }
    function createImage(item, file) {
      // const image = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        item.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    function removeImage(item) {
      item.image = false;
    }
    const schema = yup.object({
      arranger: yup.string().required("Поле необходимо заполнить"),
      phoneNumber: yup
        .string()
        .required("Поле необходимо заполнить")
        .min(18, "Введен неверный номер телефона"),
      email: yup
        .string()
        .required("Поле необходимо заполнить")
        .email("Введен неверный Email"),
      city: yup
        .string()
        .required("Поле необходимо заполнить")
        .min("Введен неверный Email"),
      eventName: yup.string().required("Поле необходимо заполнить"),
    });
    // Create a form context with the validation schema
    useForm({
      validationSchema: schema,
    });
    // No need to define rules for fields
    const { value: arranger, errorMessage: arrangerError } =
      useField("arranger");
    const { value: email, errorMessage: emailError } = useField("email");
    const { value: phoneNumber, errorMessage: phoneNumberError } =
      useField("phoneNumber");
    const { value: city, errorMessage: cityError } = useField("city");
    const { value: eventName, errorMessage: eventNameError } =
      useField("eventName");

    const submitForm = (values) => {
      // display form values on success
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));
    };

    return {
      images,
      onFileChange,
      createImage,
      removeImage,
      arranger,
      arrangerError,
      email,
      emailError,
      phoneNumber,
      phoneNumberError,
      city,
      cityError,
      eventName,
      eventNameError,
      submitForm,
    };
  },
};
</script>

<style scoped></style>
