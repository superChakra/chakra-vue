import "element-plus/dist/index.css";
import "@/styles/index.css";

import { createApp } from "vue";
import pinia from "./stores";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(ElementPlus,{
   locale: zhCn,
});

app.mount("#app");
