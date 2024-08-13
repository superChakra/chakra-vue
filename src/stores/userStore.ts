import { defineStore } from "pinia";
import { ref } from "vue";

export const userStore = defineStore(
  "userStore",
  () => {
    const someState = ref("你好 pinia");
    return { someState };
  },
  {
    persist: true,
  }
);
