import { createRouter, createWebHistory } from 'vue-router'
import { clearRequest } from '../third-plugins/axios/interruptRequest'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'members',
      component: () => import('../../views/Members.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../../views/Tasks.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  clearRequest() // 路由切换时，取消上个路由的所有请求

  next()
})

export default router
