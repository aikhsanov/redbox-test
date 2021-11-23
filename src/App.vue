<template>
  <main>
    <div class="container mx-auto px-4 sm:px-6">
      <router-view v-slot="{ Component, route }">
        <transition mode="out-in" :name="route.meta.transition || 'fade'">
          <keep-alive exclude="Preview">
            <component :is="Component" />
          </keep-alive>
        </transition>
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
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-enter-active {
  transition: all 1s ease-in-out;
}
.slide-left-enter-to {
  opacity: 1;
  transform: translateX(0%);
}
.slide-left-leave-from {
  opacity: 1;
  transform: translateX(0%);
}
.slide-left-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-right-enter-active {
  transition: all 1s ease-in-out;
}
.slide-right-enter-to {
  opacity: 1;
  transform: translateX(0%);
}
.slide-right-leave-from {
  opacity: 1;
  transform: translateX(0%);
}
.slide-right-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s ease-in-out;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s ease-in-out;
  position: absolute;
}
.fade-leave-to {
  opacity: 0;
}
/*.v-move {*/
/*  transition: transform 0.8s ease;*/
/*}*/
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
}
</style>
