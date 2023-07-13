import{o as s,Y as p,w as r,f as e,d as o}from"./index-57ffb944.js";import{E as u,a as n}from"./el-descriptions-item-6631d381.js";import{_ as m}from"./CodeBlock-02c15614.js";const l=o("p",null,"1.使用npm安装",-1),c=o("p",null,"2. 引入项目",-1),d=o("p",null,"3. 使用路由",-1),A={__name:"Start",setup(_){return(h,f)=>{const t=m,i=n,a=u;return s(),p(a,{title:"快速开始",column:1},{default:r(()=>[e(i,{label:"引入Vue项目"},{default:r(()=>[l,e(t,{info:[{fileName:"powershell/terminal",code:`
          npm install vue-router@4 --save
          `}]}),c,e(t,{info:[{fileName:"./router/index.js",code:`
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
          `},{fileName:"main.js",code:`
          import { createApp } from 'vue'
          import App from './App.vue'
          import router from './router'
          
          createApp(App).use(router).mount('#app')
          `}]},null,8,["info"]),d,e(t,{info:[{fileName:"./App.vue",code:`
          <template>
            <div id='app'>
              <!-- <router-view /> 是根路由中全部页面的入口 
                -- 嵌套路由中，子路由的页面会被渲染在父路由的<router-view />中
                -->
              <router-view/>
            </div>
          </template>
          `},{fileName:"./views/Home.vue",code:`
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
          `},{fileName:"./views/About.vue",code:`
          <template>
            <div class='about'>
              <h1>About</h1>
            </div>
          </template>
          `}]},null,8,["info"])]),_:1})]),_:1})}}};export{A as default};
