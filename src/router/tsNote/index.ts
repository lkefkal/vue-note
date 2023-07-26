import { RouteRecordRaw } from 'vue-router'

const tsNoteRoute: RouteRecordRaw = {
  path: '/tsNote',
  component: () => import('@/views/tsNote/TSIndex.vue'),
  children: [
    {
      path: 'base',
      component: () => import('@/views/tsNote/base/BaseIndex.vue'),
      children:[
        {
          path: 'baseType',
          component: () => import('@/views/tsNote/base/baseType/BaseType.vue')
        },
        {
          path: 'interface',
          component: () => import('@/views/tsNote/base/interface/Interface.vue')
        },
        {
          path: 'classes',
          component: () => import('@/views/tsNote/base/classes/Classes.vue')
        },
        {
          path: 'function',
          component: () => import('@/views/tsNote/base/function/Function.vue')
        },
        {
          path: 'generic',
          component: () => import('@/views/tsNote/base/generic/Generic.vue')
        },
      ]
    },
    {
      path: 'cheatsheet',
      component: () => import('@/views/tsNote/cheatSheet/Cheatsheet.vue')
    },
    {
      path: 'challenge',
      component: () => import('@/views/tsNote/typeChallenges/TypeChallenge.vue')
    }
  ]
}

export default tsNoteRoute