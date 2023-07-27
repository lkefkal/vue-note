import { createRouter, createWebHashHistory, RouteRecord } from 'vue-router'
import store from '@/store'

import Layout from "@/layout/Layout.vue"
import Home from "@/views/home/Index.vue"
import vueRoute from './vue'
import routerRoute from './router'
import modulesRoute from './modules'
import tsNoteRoute from './tsNote'

const router =  createRouter({
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
        tsNoteRoute,
      ]
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  if(store.state.pageCache.get(to.path)) {
    next()
    return
  } else {
    store.commit('doRouting')
    store.commit('addCache', {path: to.path})
    next()
  }
})

router.afterEach(() => {
  store.commit('doneRouting')
})

export default router