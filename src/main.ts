import { createApp } from "vue";
import { createPinia } from "pinia";
import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import plugin from "primevue/config";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const MyPreset = definePreset(Aura);

app.use(createPinia());
app.use(router);
app.use(plugin, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: false,
    },
  },
});
app.mount("#app");
