import{V as d,O as _,_ as h,o as v,a6 as f,w as i,b as r,e as u}from"./index-f712dfdc.js";import{E as b,a as E}from"./el-descriptions-item-808b2f64.js";import{_ as F}from"./PCodeBlock-d732f568.js";import{P as A}from"./PCodeBlock-6037e432.js";import"./CleanCode-98073b35.js";var g=Object.defineProperty,w=Object.getOwnPropertyDescriptor,B=(t,s,p,a)=>{for(var o=a>1?void 0:a?w(s,p):s,n=t.length-1,e;n>=0;n--)(e=t[n])&&(o=(a?e(s,p,o):e(o))||o);return a&&o&&g(s,p,o),o};let c=class extends d{get codeImport(){return`
        import { createRouter, createWebHistory } from 'vue-router'
        import Home from '../views/Home.vue'

        const routes = [
          {
            path: '/',
            name: 'Home',
            component: Home
          },
          {
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
          }
        ]
        `}get codeImportMain(){return`
        import { createApp } from 'vue'
        import App from './App.vue'
        import router from './router'
        
        createApp(App).use(router).mount('#app')
        `}get codeUseRouter(){return{app:`
        <template>
          <div id='app'>
            <!-- <router-view /> 是根路由中全部页面的入口 
              -- 嵌套路由中，子路由的页面会被渲染在父路由的<router-view />中
              -->
            <router-view/>
          </div>
        </template>
        `,home:`
        <template>
          <div class='home'>
            <h1>Home</h1>
            <!-- 此时的路径为/ 
              -- 点击按钮后，路径会变为/about
              -->
            <button @click='handleClick('/about')>About</button>
          </div>
        </template>

        <script setup>
          import { useRouter } from 'vue-router';
          const router = useRouter();
          const handleClick = (path) => {
            router.push(path);
          }
        <\/scripts>
        `,about:`
        <template>
          <div class='about'>
            <h1>About</h1>
          </div>
        </template>
        `}}};c=B([_({components:{PCodeBlock:A}})],c);const C=u("p",null,"1.使用npm安装",-1),D=u("p",null,"2. 引入项目",-1),j=u("p",{class:"text-center"},"创建路由",-1),x=u("p",{class:"text-center"},"引入项目",-1),H=u("p",null,"3. 使用路由",-1),P=u("p",{class:"text-center"},"创建一个入口",-1),R=u("p",{class:"text-center"},"创建跳转行为",-1),O=u("p",{class:"text-center"},"路由页面",-1);function k(t,s,p,a,o,n){const e=F,l=E,m=b;return v(),f(m,{title:"快速开始",column:1},{default:i(()=>[r(l,{label:"引入Vue项目"},{default:i(()=>[C,r(e,{code:`
          npm install vue-router@4 --save
          `,title:"terminal",toc:"language-psml"}),D,j,r(e,{code:t.codeImport,title:".../router/index.js",toc:"language-js"},null,8,["code"]),x,r(e,{code:t.codeImportMain,title:"main.js",toc:"language-js"},null,8,["code"]),H,P,r(e,{code:t.codeUseRouter.app,title:"App.vue"},null,8,["code"]),R,r(e,{code:t.codeUseRouter.home,title:"Home.vue"},null,8,["code"]),O,r(e,{code:t.codeUseRouter.about,title:"About.vue"},null,8,["code"])]),_:1})]),_:1})}const N=h(c,[["render",k]]);export{N as default};
