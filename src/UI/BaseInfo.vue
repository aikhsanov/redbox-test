<template>
  <div class="flex items-center mt-2">
    <slot name="icon"></slot>
    <span class="ml-5" :class="textSize">{{ infoText }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseInfo",
  props: {
    infoText: {
      type: String,
    },
    textSize: {
      type: String,
      default: "text-lg",
    },
  },
};
</script>

<style scoped></style>
