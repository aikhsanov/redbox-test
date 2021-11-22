import { createApp } from "vue";
import "@/css/tailwind.css";
import Maska from "maska";
import { createRouter, createWebHistory } from "vue-router";

import TheForm from "./components/TheForm";
import Preview from "./pages/Preview";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheForm },
    { path: "/preview", component: Preview },
  ],
});
createApp(App).use(router).use(Maska).mount("#app");
