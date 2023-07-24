import{V as d,O as _,_ as b,o as F,W as f,w as a,b as t,e as s}from"./index-1dbab7da.js";import{E as v,a as h}from"./el-descriptions-item-fdf2b987.js";import{_ as C}from"./PCodeBlock-8793c1d2.js";import{P as D}from"./PCodeBlock-710fa370.js";import"./use-form-common-props-be574cc6.js";import"./el-button-0b6673d9.js";var H=Object.defineProperty,E=Object.getOwnPropertyDescriptor,A=(l,u,n,r)=>{for(var o=r>1?void 0:r?E(u,n):u,c=l.length-1,e;c>=0;c--)(e=l[c])&&(o=(r?e(u,n,o):e(o))||o);return r&&o&&H(u,n,o),o};let p=class extends d{};p=A([_({components:{PCodeBlock:D}})],p);const g=s("p",null,"1.1. 路由配置",-1),B=s("p",null,"1.2. 路由跳转",-1),w=s("p",null,"2.1 定义路径参数",-1),x=s("p",null,"2.2 获取路径参数",-1),P=s("p",null,"3. 路径参数格式验证",-1);function j(l,u,n,r,o,c){const e=C,i=h,m=v;return F(),f(m,{title:"路由匹配",column:1},{default:a(()=>[t(i,{label:"1. 静态路由"},{default:a(()=>[g,t(e,{code:`
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
          `,title:".../router/index.js",toc:"language-js"},null,8,["code"]),B,t(e,{code:`
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
        `,title:"Home.vue"},null,8,["code"])]),_:1}),t(i,{label:"2. 动态路由"},{default:a(()=>[w,t(e,{code:`
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
        `,title:".../router/index.js",toc:"language-js"},null,8,["code"]),x,t(e,{code:`
        <scripts setup>
        import { useRouter,useRoute } from 'vue-router';
        const route = useRoute()
        /** 
         * 使用route获取id
         */
        let id = route.params.id
        <\/scripts>
        `,title:"About.vue"},null,8,["code"]),P,t(e,{code:`
        const route = [
          {
            /**
             * 仅匹配数字 
             */
            path: '/about/:id(\\d+)'
          }
        ]
        `,title:".../router/index.js",toc:"language-js"},null,8,["code"])]),_:1})]),_:1})}const N=b(p,[["render",j]]);export{N as default};
