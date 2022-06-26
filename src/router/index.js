import { createRouter, createWebHistory } from 'vue-router'
import cv from '@/pages/cv.vue'
import paralax from '@/pages/paralax.vue'
import parallax3 from '@/pages/parallax3.vue'
import parallax4 from '@/pages/parallax4.vue'
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
    },
    {
      path: '/parallax3',
      name: 'paralax3',
      component: parallax3
    },
    {
      path: '/parallax4',
      name: 'paralax4',
      component: parallax4
    }
  ]
})

export default router
