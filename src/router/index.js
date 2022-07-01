import { createRouter, createWebHistory} from "vue-router";
import cv from "@/pages/cv.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: cv,
    },
  ],
});

export default router;
