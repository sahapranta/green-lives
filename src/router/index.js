// Composables
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/store/auth";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/home",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
      },
      {
        path: "/signup",
        name: "Signup",
        component: () =>
          import(/* webpackChunkName: "signup" */ "@/views/Signup.vue"),
      },
      {
        path: "/scan",
        name: "Scan",
        component: () =>
          import(/* webpackChunkName: "scan" */ "@/views/Scan.vue"),
      },
      {
        path: "/location",
        name: "Location",
        component: () =>
          import(/* webpackChunkName: "location" */ "@/views/Location.vue"),
      },
      {
        path: "/profile",
        name: "Profile",
        component: () =>
          import(/* webpackChunkName: "profile" */ "@/views/Profile.vue"),
      },
      {
        path: "/activity",
        name: "Activity",
        component: () =>
          import(/* webpackChunkName: "activity" */ "@/views/Activity.vue"),
      },
      {
        path: "/reward",
        name: "Reward",
        component: () =>
          import(/* webpackChunkName: "reward" */ "@/views/Reward.vue"),
      },
      {
        path: "/tracker",
        name: "Tracker",
        component: () =>
          import(/* webpackChunkName: "tracker" */ "@/views/Tracker.vue"),
      },
      {
        path: "/alert",
        name: "Alert",
        component: () =>
          import(/* webpackChunkName: "alert" */ "@/views/Alert.vue"),
      },
      {
        path: "/article/:title",
        name: "Article",
        component: () =>
          import(/* webpackChunkName: "post" */ "@/views/Post.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

router.beforeEach(async (to) => {
  const publicPages = ["/login", "/signup"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (auth.user && publicPages.includes(to.path)) {
    return "/";
  }

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    return "/login";
  }
});

export default router;
