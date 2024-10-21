import { createRouter, createWebHistory } from 'vue-router'
import homePage from "../components/Home.vue"
import profilePage from "../components/Profile.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
       path: '/view/profile',
       name: 'home',
       component: homePage
     },
     {
      path: '/add/profile',
      name: 'profile',
      component: profilePage
    },
  ]
})

export default router
