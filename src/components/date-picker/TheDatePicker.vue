<template>
  <div
    v-for="(date, i) in dates"
    :key="date.index"
    class="px-8 py-8 mt-5 mb-5 bg-selago relative"
  >
    <dates-form v-model="dates[i]" class=""></dates-form>
    <remove-button
      :data-index="date.index"
      @click="removeDate($event)"
    ></remove-button>
  </div>
  <div class="mt-10">
    <dates-form v-model="dateObj"></dates-form>
    <base-button
      @click.prevent="addDate()"
      type="button"
      button-text="+ Добавить дату"
    ></base-button>
  </div>
</template>

<script>
import { ref, toRef } from "vue";
import DatesForm from "./DateForm";
import RemoveButton from "../../UI/RemoveButton";
import BaseButton from "../../UI/BaseButton";

export default {
  name: "TheDatePicker",
  props: ["modelValue"],
  components: { BaseButton, RemoveButton, DatesForm },
  setup(props, { emit }) {
    const dateObj = ref({
      dateStartPicker: null,
      dateEndPicker: null,
      timeStart: "",
      timeEnd: "",
    });
    const dates = toRef(props, "modelValue");
    function addDate() {
      if (dates.value.length >= 3) {
        console.log("нет свободных слотов для дат");
        return;
      }
      const dateToPush = { ...dateObj.value };
      dateToPush.index = new Date().valueOf();
      dates.value.push(dateToPush);
      Object.keys(dateObj.value).forEach((key) => {
        dateObj.value[key] = null;
      });
      emit("update:modelValue", dates);
    }
    function removeDate(e) {
      dates.value = dates.value.filter(
        (date) => date.index !== parseInt(e.target.dataset.index)
      );
      emit("update:modelValue", dates);
    }
    return {
      addDate,
      dates,
      dateObj,
      removeDate,
    };
  },
};
</script>

<style scoped></style>
