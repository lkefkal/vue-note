<template>
  <el-descriptions title="快速开始" :column="1">
    <el-descriptions-item label="引入Vue项目">
      <p>1.使用npm安装</p>
      <CodeBlock
      :info="[{
        fileName: 'powershell/terminal',
        code:`
          npm install vue-router@4 --save
          `
        },
      ]" 
      ></CodeBlock>
      <p>2. 引入项目</p>
      <CodeBlock
      :info="[
        {
          fileName: './router/index.js',
          code: `
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
          `
        },
        {
        fileName: 'main.js',
        code:`
          import { createApp } from 'vue'
          import App from './App.vue'
          import router from './router'
          
          createApp(App).use(router).mount('#app')
          `
        },
      ]"
      ></CodeBlock>
      <p>3. 使用路由</p>
      <CodeBlock
      :info="[
        {
          fileName: './App.vue',
          code:`
          <template>
            <div id='app'>
              <!-- <router-view /> 是根路由中全部页面的入口 
                -- 嵌套路由中，子路由的页面会被渲染在父路由的<router-view />中
                -->
              <router-view/>
            </div>
          </template>
          `
        },
        {
          fileName: './views/Home.vue',
          code:`
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
          </scripts>
          `
        },
        {
          fileName: './views/About.vue',
          code:`
          <template>
            <div class='about'>
              <h1>About</h1>
            </div>
          </template>
          `
        },
      ]"
      ></CodeBlock>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup>
import { useRouter,useRoute } from 'vue-router';
import { ref } from 'vue';

</script>