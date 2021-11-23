<template>
  <transition-group tag="div" name="date-list" mode="out-in">
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
  </transition-group>
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
import { ref, toRef, watch } from "vue";
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
      timeStart: "0.00",
      timeEnd: "0.00",
    });
    const dates = toRef(props, "modelValue");
    const newDates = ref([]);
    function addDate() {
      if (dates.value.length >= 3) {
        return;
      }
      const dateToPush = { ...dateObj.value };
      dateToPush.index = new Date().valueOf();
      newDates.value.push(dateToPush);
      dateObj.value = {
        dateStartPicker: null,
        dateEndPicker: null,
        timeStart: ".",
        timeEnd: ".",
      };
      emit("update:modelValue", newDates.value);
    }
    function removeDate(e) {
      newDates.value = newDates.value.filter(
        (date) => date.index !== parseInt(e.target.dataset.index)
      );
      emit("update:modelValue", newDates.value);
    }
    watch(dates, (datesNewVal, datesPrevVal) => {
      if (datesPrevVal.length > 0 && datesNewVal.length === 0) {
        newDates.value = [];
      }
    });
    return {
      addDate,
      dates,
      dateObj,
      removeDate,
      newDates,
    };
  },
};
</script>

<style scoped>
.date-list-enter-from {
  opacity: 0;
  transform: translateY(-30%);
}
.date-list-enter-active {
  transition: all 0.5s ease-in-out;
}
.date-list-enter-to {
  opacity: 1;
  transform: translateY(0%);
}
.date-list-leave-from {
  opacity: 1;
  transform: translateY(0%);
}
.date-list-leave-active {
  transition: all 0.5s ease-in-out;
  position: absolute;
}
.date-list-leave-to {
  opacity: 0;
  transform: translateY(300%);
}
.date-list-move {
  transition: transform 0.3s ease;
}
</style>
