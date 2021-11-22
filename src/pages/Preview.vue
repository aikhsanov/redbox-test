<template>
  <base-alert class="text-lg font-semibold">
    Проверьте ваше мероприятие на наличие ошибок, если все в порядке -
    отправляйте на модерацию.
  </base-alert>
  <div class="main-hero flex justify-between items-center mt-15">
    <div
      class="
        hero-data
        flex
        justify-between
        items-center
        w-5/12
        flex-wrap flex-row
      "
    >
      <div
        class="
          rating
          h-12
          w-12
          bg-scarletgum
          text-white text-lg
          flex
          items-center
          justify-center
        "
      >
        {{ eventData.eventRating }}
      </div>
      <div class="info w-11/12 h-auto text-left">
        <h3 class="text-scarletgum text-3xl font-extrabold">
          {{ eventData.eventName }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import BaseAlert from "../UI/BaseAlert";
import { getUserData } from "../data/state";

export default {
  name: "Preview",
  components: { BaseAlert },
  setup() {
    const eventData = getUserData.value;
    return {
      eventData,
    };
  },
};
</script>

<style scoped></style>
