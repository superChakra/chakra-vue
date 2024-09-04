import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
  "useUserStore",
  () => {
    const someState = ref("你好 pinia");
    const demo = ref();
    return { someState, demo };
  },
  {
    persist: true,
  }
);
