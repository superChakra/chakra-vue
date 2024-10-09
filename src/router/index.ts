import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/",
          name: "main",
          component: () => import("@/views/home/Main.vue"),
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
            {
              path: "password",
              name: "changePassword",
              component: () => import("@/views/user/ChangePassword.vue"),
            },
            {
              path: "phone",
              name: "changePhone",
              component: () => import("@/views/user/ChangePhone.vue"),
            },
            {
              path: "email",
              name: "changeEmail",
              component: () => import("@/views/user/ChangeEmail.vue"),
            },
            {
              path: "login-record",
              name: "loginRecord",
              component: () => import("@/views/user/LoginRecord.vue"),
            },
            {
              path: "auth-student",
              name: "studentAuth",
              component: () => import("@/views/user/StudentAuth.vue"),
            },
            {
              path: "auth-person",
              name: "personAuth",
              component: () => import("@/views/user/PersonAuth.vue"),
            },
          ],
        },
        {
          path: "/content-center",
          name: "contentCenter",
          component: () => import("@/views/ContentCenter.vue"),
          children: [
            {
              path: "article-manager",
              name: "articleManager",
              component: () => import("@/views/content/ArticleManager.vue"),
            },
            {
              path: "comment-manager",
              name: "commentManager",
              component: () => import("@/views/content/CommentManager.vue"),
            },
          ],
        },
        {
          path: "/article",
          name: "articleDetail",
          component: () => import("@/views/content/ArticleDetail.vue"),
        },
        {
          path: "/software-center",
          name: "softwareCenter",
          component: () => import("@/views/SoftwareCenter.vue"),
        },
        {
          path: "/software",
          name: "software",
          component: () => import("@/views/software/Software.vue"),
          children: [
            {
              path: "detail",
              name: "softwareDetail",
              component: () => import("@/views/software/SoftwareDetail.vue"),
            },
            {
              path: "sort",
              name: "softwareSort",
              component: () => import("@/views/software/SoftwareSort.vue"),
            },
          ],
        },
        {
          path: "/game-center",
          name: "gameCenter",
          component: () => import("@/views/GameCenter.vue"),
        },
        {
          path: "/project-center",
          name: "projectCenter",
          component: () => import("@/views/ProjectCenter.vue"),
        },
        {
          path: "/project-detail",
          name: "projectDetail",
          component: () => import("@/views/project/ProjectDetail.vue"),
        },
      ],
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
      component: () => import("@/views/register/Register.vue"),
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
  ],
});

export default router;
