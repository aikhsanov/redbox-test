import { createApp } from "vue";
import "@/css/tailwind.css";
import Maska from "maska";
import App from "./App.vue";
import { createRoute, createWebHistory } from "vue-router";

createApp(App).use(Maska).mount("#app");
