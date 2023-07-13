const routerRoute = [
  {
    path: '/router',
    name: 'router',
    component: () => import('@/views/router/Index.vue'),
    children: [
      {
        path: 'start',
        name: 'start',
        component: () => import('@/views/router/Start.vue')
      },
      {
        path: 'path',
        name: 'path',
        component: () => import('@/views/router/Path.vue')
      }
    ]
  }
]


export default routerRoute