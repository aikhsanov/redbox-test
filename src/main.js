import { createApp } from "vue";
import "@/css/tailwind.css";
import Maska from "maska";
import App from "./App.vue";

createApp(App).use(Maska).mount("#app");
