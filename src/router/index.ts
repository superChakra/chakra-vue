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
      path: "/login",
      name: "login",
      component: () => import("@/views/login/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/register/register.vue"),
    },
    {
      path: "/work-center",
      name: "workCenter",
      component: () => import("@/views/WorkCenter.vue"),
      children: [
        {
          path: "creation",
          name: "creation",
          component: () => import("@/components/Creation.vue"),
        },
      ],
    },
    {
      path: "/user-center",
      name: "userCenter",
      component: () => import("@/views/UserCenter.vue"),
      children: [
        {
          path: "profile",
          name: "profile",
          component: () => import("@/views/user/Profile.vue"),
        },
        {
          path: "account",
          name: "account",
          component: () => import("@/views/user/Account.vue"),
        },
        {
          path: "auth",
          name: "auth",
          component: () => import("@/views/user/Auth.vue"),
        },
        {
          path: "history",
          name: "history",
          component: () => import("@/views/user/History.vue"),
        },
        {
          path: "favorite",
          name: "favorite",
          component: () => import("@/views/user/Favorite.vue"),
        },
      ],
    },
    {
      path: "/content-center",
      name: "contentCenter",
      component: () => import("@/views/ContentCenter.vue"),
      children:[
        {
          path:'article-manager',
          name:'articleManager',
          component:()=>import("@/views/content/ArticleManager.vue")
        },
        {
          path:'comment-manager',
          name:'commentManager',
          component:()=>import("@/views/content/CommentManager.vue")
        }
      ]
    },
    {
      path:'/article',
      name:"articleDetail",
      component: ()=>import ("@/views/content/ArticleDetail.vue")
    }
  ],
});

export default router;
