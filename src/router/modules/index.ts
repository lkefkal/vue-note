import { RouteRecordRaw } from 'vue-router'

const modulesRoute:RouteRecordRaw =
  {
    path: '/modules',
    name: 'modules',
    component: () => import('@/views/modules/Index.vue'),
    children: [
      {
        path: 'Quill',
        name: 'quill',
        component: () => import('@/views/modules/QuillView.vue')
      },
      {
        path: 'demo',
        name: 'demo',
        component: () => import('@/views/modules/demo/Demo.vue')
      }
    ]
  }


export default modulesRoute