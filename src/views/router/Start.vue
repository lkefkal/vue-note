<template>
  <el-descriptions title="快速开始" :column="1">
    <el-descriptions-item label="引入Vue项目">
      <p>1.使用npm安装</p>
      <!-- <CodeBlock
      :info="[{
        fileName: 'powershell/terminal',
        code:`
          npm install vue-router@4 --save
          `
        },
      ]" 
      ></CodeBlock> -->
      <PCodeBlock
        :code="`
          npm install vue-router@4 --save
          `"
        title="terminal"
        toc="language-psml"
      ></PCodeBlock>
      <p>2. 引入项目</p>
      <p class="text-center">创建路由</p>
      <PCodeBlock
        :code="codeImport"
        title=".../router/index.js"
        toc="language-js"
      ></PCodeBlock>
      <p class="text-center">引入项目</p>
      <PCodeBlock
        :code="codeImportMain"
        title="main.js"
        toc="language-js"
        ></PCodeBlock>
      <p>3. 使用路由</p>
      <p class="text-center">创建一个入口</p>
      <PCodeBlock
        :code="codeUseRouter.app"
        title="App.vue"
        >
      </PCodeBlock>
      <p class="text-center">创建跳转行为</p>
      <PCodeBlock
        :code="codeUseRouter.home"
        title="Home.vue"
        >
      </PCodeBlock>
      <p class="text-center">路由页面</p>
      <PCodeBlock
        :code="codeUseRouter.about"
        title="About.vue"
        >
      </PCodeBlock>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import PCodeBlock from '@/components/PrimCodeBlock/PCodeBlock/PCodeBlock';

@Options({
  components: {
    PCodeBlock
  }
})
export default class Start extends Vue{
  get codeImport(){
    return `
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
  }
  get codeImportMain(){
    return`
        import { createApp } from 'vue'
        import App from './App.vue'
        import router from './router'
        
        createApp(App).use(router).mount('#app')
        `
  }
  get codeUseRouter(){
    return{
      app:`
        <template>
          <div id='app'>
            <!-- <router-view /> 是根路由中全部页面的入口 
              -- 嵌套路由中，子路由的页面会被渲染在父路由的<router-view />中
              -->
            <router-view/>
          </div>
        </template>
        `,
      home:`
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
        `,
      about:`
        <template>
          <div class='about'>
            <h1>About</h1>
          </div>
        </template>
        `
    }
  }

}
</script>

<style>
.text-center{
  text-align: center;
}
</style>