import { RouteRecordRaw } from 'vue-router'

const challengeRoute: RouteRecordRaw =  {
  path: 'challenge',
  component: () => import('@/views/tsNote/typeChallenges/TypeChallenge.vue'),
  children: [
    {
      path: 'quiz13-HelloWorld',
      component: () => import('@/views/tsNote/typeChallenges/quiz13-HelloWorld/quiz13-HelloWorld.vue')
    },
    {
      path: 'quiz4-Pick',
      component: () => import('@/views/tsNote/typeChallenges/quiz4-Pick/quiz4-Pick.vue')
    }
  ]
}

export default challengeRoute