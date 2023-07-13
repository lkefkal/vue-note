import{_ as n,o as i,Y as l,w as r,f as e,d as t}from"./index-57ffb944.js";import{E as c,a as m}from"./el-descriptions-item-6631d381.js";import{_ as a}from"./CodeBlock-02c15614.js";const p={},d=t("p",null,"1.1. 路由配置",-1),f=t("p",null,"1.2. 路由跳转",-1),_=t("p",null,"2.1 定义路径参数",-1),b=t("p",null,"2.2 获取路径参数",-1);function v(h,H){const o=a,u=m,s=c;return i(),l(s,{title:"路由匹配",column:1},{default:r(()=>[e(u,{label:"1. 静态路由"},{default:r(()=>[d,e(o,{info:[{fileName:"./router/index.js",code:`
          import { createRouter, createWebHistory } from 'vue-router'
          import Home from '../views/Home.vue'
          import About from '../views/About.vue'
          
          const routes = [
            {
              path: '/',
              name: 'Home',
              component: Home
            },
            {
              path: '/about',
              name: 'About',
              component: About
            }
          ]
          
          const router = createRouter({
            history: createWebHistory(({}).BASE_URL),
            routes
          })
          
          export default router
          `}]},null,8,["info"]),f,e(o,{info:[{fileName:"./views/Home.vue",code:`
          <template>
            <div class='home'>
              <img alt='Vue logo' src='../assets/logo.png'>
              <HelloWorld msg='Welcome to Your Vue.js App'/>
              <el-button @click='handleClick'>跳转到About页面</el-button>
            </div>
          </template>
          
          <script>
          import HelloWorld from '../components/HelloWorld.vue'
          import { useRouter } from 'vue-router'
          
          export default {
            name: 'Home',
            components: {
              HelloWorld
            },
            setup() {
              const router = useRouter()
              const handleClick = () => {
                router.push('/about')
              }
              return {
                handleClick
              }
            }
          }
          <\/script>
          
          <style scoped>
          </style>
          `}]},null,8,["info"])]),_:1}),e(u,{label:"2. 动态路由"},{default:r(()=>[_,e(o,{info:[{fileName:"./router/index.js",code:`
        import { createRouter, createWebHistory } from 'vue-router'
        import Home from '../views/Home.vue'
        import About from '../views/About.vue'

        const routes = [
          {
            path: '/',
            name: 'Home',
            component: Home
          },
          {
            // :id 是参数表达式，传递的参数是id
            // 匹配 /about/1 & /about/1233 $ ...
            path: '/about/:id',
            name: 'About',
            component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
          }
        ]
        `}]},null,8,["info"]),b,e(o,{info:[{fileName:"About.vue",code:`
        <scripts setup>
        import { useRouter,useRoute } from 'vue-router';
        const route = useRoute()
        /** 
         * 使用route获取id
         */
        let id = route.params.id
        <\/scripts>
        `}]},null,8,["info"])]),_:1})]),_:1})}const R=n(p,[["render",v]]);export{R as default};
