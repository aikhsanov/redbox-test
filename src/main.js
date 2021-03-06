import { createApp } from "vue";
import "@/css/tailwind.css";
import Maska from "maska";
import { createRouter, createWebHistory } from "vue-router";

import TheForm from "./components/TheForm";
import Preview from "./pages/Preview";
import ErrorPage from "./pages/ErrorPage";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheForm, meta: { transition: "slide-right" } },
    {
      path: "/preview",
      component: Preview,
      meta: { transition: "slide-left" },
    },
    { path: "/:addressName(.*)", component: ErrorPage },
  ],
});
createApp(App).use(router).use(Maska).mount("#app");
