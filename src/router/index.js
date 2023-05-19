import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import LoginPageView from '../views/auth/LoginView.vue'
import DashUserView from '../views/Users/Dashboard-usersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPageView
    },

    {
      path: '/login',
      component: LoginPageView
    },
    {
      path: '/dashboard',
      component: DashUserView
    }

  ]
})

export default router
