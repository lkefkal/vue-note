import { createRouter, createWebHashHistory, RouteRecord } from 'vue-router'

import Layout from "@/layout/Layout.vue"
import Home from "@/views/home/Index.vue"
import vueRoute from './vue'
import routerRoute from './router'
import modulesRoute from './modules'

export default createRouter({
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
        vueRoute,
        routerRoute,
        modulesRoute,
      ]
    },
  ]
})