<template>
  <button
    class="
      font-semibold
      px-5
      py-4
      border border-heliotrope
      rounded
      sm:my-10
      my-4
    "
    :type="type"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: ["buttonText", "type"],
};
</script>

<style scoped></style>
