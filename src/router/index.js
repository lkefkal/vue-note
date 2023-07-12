import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from "@/layout/Layout.vue"
import Home from "@/views/Home/Index.vue"
import vueRoute from './vue/vue.js'
import errorRoute from './404Page/404Page.js'

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
      ]
    },
  ]
})

export default router