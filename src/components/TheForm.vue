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
                rounded
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
                rounded
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
                rounded
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
                rounded
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
                rounded
              "
            />
          </div>
        </div>
      </div>
      <the-file-uploader></the-file-uploader>
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
              rounded
            "
          ></textarea>
        </div>
      </div>
      <the-date-picker></the-date-picker>
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
// import { ref } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import TheDatePicker from "./TheDatePicker";
import TheFileUploader from "./TheFileUploader";
// import DateRangePicker from "@themesberg/tailwind-datepicker/js/DateRangePicker";

export default {
  name: "TheForm",
  components: {TheFileUploader, TheDatePicker},
  setup() {
    // Define a validation schema
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

<style scoped>

</style>
