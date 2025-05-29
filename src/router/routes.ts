import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      layout: 'default',
      title: 'Início',
    },
    // beforeEnter: [auth],
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      layout: 'blank',
      title: 'Entrar na sua conta',
    },
  },
]

export default routes
