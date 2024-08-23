import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/test/Test.vue"),
    },
    {
      path:"/login",
      name:"login",
      component:()=>import("@/views/login/Login.vue")
    },
    {
      path:"/register",
      name:"register",
      component:()=>import("@/views/register/register.vue")
    }
  ],
});

export default router;
