<template>
  <el-descriptions title="路由匹配" :column="1">
    <el-descriptions-item label="1. 静态路由">
      <p>1.1. 路由配置</p>
      <PCodeBlock
      :code="`
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
            history: createWebHistory(process.env.BASE_URL),
            routes
          })
          
          export default router
          `"
        title=".../router/index.js"
        toc="language-js"
      ></PCodeBlock>
      <p>1.2. 路由跳转</p>
      <PCodeBlock
      :code="`
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
        </script>
        
        <style scoped>
        </style>
        `" 
        title="Home.vue"
      ></PCodeBlock>
    </el-descriptions-item>
    <el-descriptions-item label="2. 动态路由">
      <p>2.1 定义路径参数</p>
      <PCodeBlock 
      :code="`
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
        `"
      title=".../router/index.js"
      toc="language-js"
      ></PCodeBlock>
      <p>2.2 获取路径参数</p>
      <PCodeBlock
      :code="`
        <scripts setup>
        import { useRouter,useRoute } from 'vue-router';
        const route = useRoute()
        /** 
         * 使用route获取id
         */
        let id = route.params.id
        </scripts>
        `"
      title="About.vue"
      ></PCodeBlock>
      <p>3. 路径参数格式验证</p>
      <PCodeBlock
      :code="`
        const route = [
          {
            /**
             * 仅匹配数字 
             */
            path: '/about/:id(\\d+)'
          }
        ]
        `"
      title=".../router/index.js"
      toc="language-js"
      ></PCodeBlock>
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
export default class Path extends Vue{
}
</script>