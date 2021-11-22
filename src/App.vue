<template>
  <main>
    <div v-if="!data" class="container mx-auto px-4 sm:px-6">
      <the-form> </the-form>
    </div>
    <div v-else class="container mx-auto px-4 sm:px-6">
      <preview></preview>
    </div>
  </main>
</template>

<script>
import { getUserData } from "./data/state";
import { ref } from "vue";
import TheForm from "./components/TheForm";
import Preview from "./pages/Preview";
export default {
  name: "App",
  components: {
    Preview,
    TheForm,
  },
  setup() {
    const data = ref(getUserData.value);
    return {
      data,
    };
  },
};
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
  color: #211536;
}
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
