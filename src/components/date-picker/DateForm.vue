<template>
  <div class="form-block grid lg:grid-cols-9 gap-4 sm:grid-cols-4 grid-cols-1">
    <div class="date-picker-wrap col-span-2">
      <date-input
        v-model="fullDate.dateStartPicker"
        @update:modelValue="onUpdate"
        :label-name="'Дата начала'"
        :input-id="'date-start'"
      ></date-input>
    </div>
    <div class="date-picker-wrap col-span-2">
      <time-picker
        v-model="fullDate.timeStart"
        @update:modelValue="onUpdate"
        :time-picker-id="'time-start'"
        class="col-span-2"
        :time-picker-name="'Время начала'"
      ></time-picker>
    </div>

    <div
      class="h-14 line lg:col-span-1 sm:col-span-4 col-span-1 self-end md:h-4"
    ></div>
    <div class="date-picker-wrap col-span-2">
      <date-input
        v-model="fullDate.dateEndPicker"
        @update:modelValue="onUpdate"
        :label-name="'Дата окончания'"
        :input-id="'date-end'"
      ></date-input>
    </div>
    <div class="date-picker-wrap col-span-2">
      <time-picker
        v-model="fullDate.timeEnd"
        @update:modelValue="onUpdate"
        :time-picker-id="'time-end'"
        class="col-span-2"
        :time-picker-name="'Время окончания'"
      ></time-picker>
    </div>
  </div>
</template>

<script>
import TimePicker from "./TimePicker";
import DateInput from "./DateInput";
import { toRef } from "vue";

export default {
  name: "DatesForm",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  components: { DateInput, TimePicker },
  setup(props, { emit }) {
    const fullDate = toRef(props, "modelValue");

    function onUpdate() {
      emit("update:modelValue", fullDate.value);
    }
    return {
      fullDate,
      onUpdate,
    };
  },
};
</script>

<style scoped>
.line {
  text-align: center;
  margin: 0 1rem;
  position: relative;
}
.line:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  border-top: 2px solid #cdb1fb;
  width: 100%;
  transform: translateY(-50%);
}
</style>
