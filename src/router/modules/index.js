const modulesRoute = [
  {
    path: '/modules',
    name: 'modules',
    component: () => import('@/views/modules/Index.vue'),
    children: [
      {
        path: 'Quill',
        name: 'quill',
        component: () => import('@/views/modules/Quill.vue')
      },
    ]
  }
]


export default modulesRoute