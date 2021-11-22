<template>
  <main>
    <div class="container mx-auto px-4 sm:px-6">
      <router-view v-slot="{ Component }">
        <keep-alive exclude="Preview">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </main>
</template>

<script>
import { getUserData } from "./data/state";
import { ref, computed } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    const data1 = computed(() => getUserData.value);
    const data2 = ref(getUserData.value);
    return {
      data1,
      data2,
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
  margin-top: 15px;
}
</style>
