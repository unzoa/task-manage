import { createRouter, createWebHistory } from 'vue-router'

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

export default router
