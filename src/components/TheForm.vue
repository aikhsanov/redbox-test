<template>
  <Form
    @submit="submitForm"
    :validation-schema="schema"
    v-slot="{ handleReset, errors }"
  >
    <div class="py-5 bg-white text-left">
      <div class="form-block">
        <div>
          <h5 class="font-semibold text-lg text-left">
            Информация об организаторе
          </h5>
          <div class="mt-8">
            <label for="arranger" class="block font-semibold"
              >Организатор</label
            >
            <Field
              type="text"
              name="arranger"
              id="arranger"
              autocomplete="arranger"
              :class="{ 'is-invalid': errors.arranger }"
              class="
                form-control
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
            <span class="invalid-feedback">{{ errors.arranger }}</span>
          </div>
        </div>
      </div>
      <div class="form-block mt-10">
        <h5 class="font-semibold text-lg text-left">Контактные данные</h5>
        <div class="grid md:grid-cols-6 sm:grid-cols-1 gap-6">
          <div class="md:col-span-2 md:col-span-1">
            <label for="phoneNumber" class="block font-semibold">Телефон</label>
            <Field
              v-maska="'+7 (###) ###-##-##'"
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              autocomplete="false"
              :class="{ 'is-invalid': errors.phoneNumber }"
              class="
                form-control
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
            <span class="invalid-feedback">{{ errors.phoneNumber }}</span>
          </div>
          <div class="md:col-span-2 sm:col-span-1">
            <label for="email" class="block font-semibold">E-mail</label>
            <Field
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              :class="{ 'is-invalid': errors.email }"
              class="
                form-control
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
            <span class="invalid-feedback">{{ errors.email }}</span>
          </div>
          <div class="md:col-span-2 sm:col-span-1">
            <label for="city" class="block font-semibold"
              >Город организатора</label
            >
            <Field
              type="text"
              name="city"
              id="city"
              autocomplete="city"
              :class="{ 'is-invalid': errors.city }"
              class="
                form-control
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
            <span class="invalid-feedback">{{ errors.city }}</span>
          </div>
        </div>
      </div>
      <div class="form-block mt-10">
        <div>
          <h5 class="font-semibold text-lg text-left">Общая информация</h5>
          <div class="mt-6">
            <label for="event-name" class="block font-semibold">Название</label>
            <Field
              type="text"
              name="eventName"
              id="event-name"
              :class="{ 'is-invalid': errors.eventName }"
              class="
                form-control
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
            <span class="invalid-feedback">{{ errors.eventName }}</span>
          </div>
        </div>
      </div>

      <the-file-uploader v-model="mainPhoto"></the-file-uploader>
      <!--        <span class="invalid-feedback">{{ errors.mainPhoto }}</span>-->
      <div class="form-block mt-10">
        <div class="mt-6">
          <label for="event-name" class="block font-semibold"
            >Подробное описание</label
          >
          <Field
            as="textarea"
            name="description"
            id="description"
            :class="{ 'is-invalid': errors.eventName }"
            class="
              form-control
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
          ></Field>
          <span class="invalid-feedback">{{ errors.description }}</span>
        </div>
      </div>
      <the-date-picker v-model="eventDates"></the-date-picker>

      <!--        <span class="invalid-feedback">{{ errors.eventDates }}</span>-->
      <div class="form-block">
        <div>
          <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <div class="mt-6 col-span-1">
              <label for="event-rating" class="block font-semibold"
                >Рейтинг мероприятия</label
              >
              <Field
                as="select"
                @click.once="fetchData"
                name="eventRating"
                id="event-rating"
                :class="{ 'is-invalid': errors.eventRating }"
                class="
                  form-control
                  appearance-none
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
              >
                <option
                  class="py-4 px-5 my-4"
                  v-for="option in ratingOptions"
                  :key="option.id"
                  :value="option.title"
                >
                  {{ option.title }}
                </option>
              </Field>
              <span class="invalid-feedback">{{ errors.eventRating }}</span>
            </div>
            <div class="mt-6 col-span-1">
              <label for="event-address" class="block font-semibold"
                >Адрес мероприятия</label
              >
              <Field
                type="text"
                name="eventAddress"
                id="event-address"
                :class="{ 'is-invalid': errors.eventAddress }"
                class="
                  form-control
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
              <span class="invalid-feedback">{{ errors.eventAddress }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center md:w-51/100 sm:w-full">
      <base-button
        @click="handleReset(), formReset()"
        class="w-12/25"
        button-text="Отменить"
        type="button"
      ></base-button>
      <base-button
        class="w-12/25 bg-heliotrope text-white"
        button-text="Далее"
      ></base-button>
    </div>
  </Form>
</template>

<script>
import { setUserData } from "../data/state";
import { Form, Field } from "vee-validate";
import { apiUrl } from "../utils/api";
import * as yup from "yup";
import axios from "axios";
import TheDatePicker from "./date-picker/TheDatePicker";
import TheFileUploader from "./TheFileUploader";
import { ref } from "vue";
import BaseButton from "../UI/BaseButton";
import { useRouter } from "vue-router";

// import DateRangePicker from "@themesberg/tailwind-datepicker/js/DateRangePicker";

export default {
  name: "TheForm",
  components: { BaseButton, TheFileUploader, TheDatePicker, Form, Field },
  setup() {
    const router = useRouter();
    const ratingOptions = ref([]);
    const eventDates = ref([]);
    const mainPhoto = ref([]);
    async function fetchData() {
      const response = await axios.get(`${apiUrl}`);
      if (response.data.code !== 200 || !response.data.code) {
        throw new Error("can't fetch data");
      }
      ratingOptions.value = response.data.result;
    }

    function formReset() {
      eventDates.value = [];
      mainPhoto.value = [];
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
      city: yup.string().required("Поле необходимо заполнить"),
      eventName: yup.string().required("Поле необходимо заполнить"),
      eventRating: yup.string().required("Поле необходимо заполнить"),
      description: yup.string().required("Поле необходимо заполнить"),
      eventAddress: yup.string().required("Поле необходимо заполнить"),
    });

    const submitForm = (values) => {
      setUserData({
        ...values,
        eventDates: { ...eventDates.value },
        mainPhoto: { ...mainPhoto.value },
      });
      router.push("/preview");
    };

    return {
      eventDates,
      mainPhoto,
      schema,
      ratingOptions,
      fetchData,
      formReset,
      submitForm,
      setUserData,
    };
  },
};
</script>

<style scoped></style>
