import { RouteRecordRaw } from 'vue-router'

const vueRoute: RouteRecordRaw = {
    path: '/vue',
    component: () => import('@/views/Vue/VueView.vue'),
    children: [
      {
        path: 'syntax',
        component: () => import('@/views/Vue/syntax/VueSyntax.vue'),
      },
      {
        path: 'react',
        component: () => import('@/views/Vue/reactive/Index.vue'),
        children: [
          {
            path: 'reactive',
            component: () => import('@/views/Vue/reactive/Reactive.vue'),
          },
          {
            path:'ref',
            component: () => import('@/views/Vue/reactive/Ref.vue')
          },
          {
            path:'computed',
            component: () => import('@/views/Vue/reactive/Computed.vue')
          },
          {
            path: "watch",
            component: () => import('@/views/Vue/reactive/Watch.vue')
          },
        ]
      },
      {
        path: 'directive',
        component: () => import('@/views/Vue/directive/Index.vue'),
        children: [
          {
            path: 'v-bind',
            component: () => import('@/views/Vue/directive/VBind.vue')
          },
          {
            path: 'v-on',
            component: () => import('@/views/Vue/directive/VOn.vue')
          },
          {
            path: 'v-model',
            component: () => import('@/views/Vue/directive/VModel.vue')
          },
          {
            path: 'v-if',
            component: () => import('@/views/Vue/directive/VIf.vue')
          },
          {
            path: 'v-for',
            component: () => import('@/views/Vue/directive/VFor.vue')
          }
        ]
      },
      {
        path: 'component',
        component: () => import('@/views/Vue/component/Index.vue'),
        children: [
          {
            path: 'props',
            component: () => import('@/views/Vue/component/Props/Props.vue')
          },
          {
            path: 'event',
            component: () => import('@/views/Vue/component/EventRegister.vue')
          },
          {
            path: 'slot',
            component: () => import('@/views/Vue/component/Slot.vue')
          },
          {
            path: 'lifecycle',
            component: () => import('@/views/Vue/component/LifeCycle.vue')
          }
        ]
      }
    ]
}

export default vueRoute