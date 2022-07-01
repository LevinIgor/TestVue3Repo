import { createRouter, createWebHistory} from "vue-router";
import cv from "@/pages/cv.vue";
import hash from "@/pages/hash.vue";
import refs from "@/pages/componentRef.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: cv,
    },
    {
      path: "/hash/:hash",
      name: "hashTest",
      component: hash,
    },
    {
      path: "/refs",
      name: "refs",
      component: refs,
    },
  ],
});

export default router;
