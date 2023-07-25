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
        }
      ]
    }
  ]
}

export default tsNoteRoute