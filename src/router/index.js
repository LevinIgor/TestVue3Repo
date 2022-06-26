import { createRouter, createWebHistory } from 'vue-router'
import cv from '@/pages/cv.vue'
import paralax from '@/pages/paralax.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: cv
    },
    {
      path: '/paralax',
      name: 'paralax',
      component: paralax
    }
  ]
})

export default router
