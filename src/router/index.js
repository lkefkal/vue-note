import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from "@/layout/Layout.vue"
import Home from "@/views/Home/Index.vue"
import vueRoute from './vue'
import routerRoute from './router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        ...vueRoute,
        ...routerRoute
      ]
    },
  ]
})

export default router