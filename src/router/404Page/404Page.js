const errorRoute = {
  path: '/:catchAll(.*)',
  name: 'NotFound',
  component: () => import("./404Page.vue")
}

export default errorRoute