<template>
  <el-descriptions title="路由匹配" :column="1">
    <el-descriptions-item label="1. 静态路由">
      <p>1.1. 路由配置</p>
      <CodeBlock
      :info="[{
        fileName: './router/index.js',
        code:`
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
          `
        },
      ]" 
      ></CodeBlock>
      <p>1.2. 路由跳转</p>
      <CodeBlock
      :info="[{
        fileName: './views/Home.vue',
        code:`
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
          `
        },
      ]" 
      ></CodeBlock>
    </el-descriptions-item>
    <el-descriptions-item label="2. 动态路由">
      <p>2.1 定义路径参数</p>
      <CodeBlock 
      :info="[{
        fileName: './router/index.js',
        code:`
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
        `},
        ]"
      ></CodeBlock>
      <p>2.2 获取路径参数</p>
      <CodeBlock
      :info="[{
        fileName: 'About.vue',
        code:`
        <scripts setup>
        import { useRouter,useRoute } from 'vue-router';
        const route = useRoute()
        /** 
         * 使用route获取id
         */
        let id = route.params.id
        </scripts>
        `
      }]"
      ></CodeBlock>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup>
</script>