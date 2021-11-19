<template>
  <main>
    <div class="container mx-auto px-4 sm:px-6">
      <the-form> </the-form>
    </div>
  </main>
</template>

<script>
import TheForm from "./components/TheForm";
export default {
  name: "App",
  components: {
    TheForm,
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
