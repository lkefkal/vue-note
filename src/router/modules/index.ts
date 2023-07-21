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
    ]
  }


export default modulesRoute