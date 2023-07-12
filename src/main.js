import '@/style/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import hljsVuePlugin from "@/utils/hljs/hljs.js";

import Mock from 'mockjs'

Mock.mock(/\/api\/user\/\d+/, 'get', function(options) {
  const num = options.url.match(/\/api\/user\/(\d+)/)[1]
  return {
    status: 200,
    data: Array.from({ length: Number(num) }, () => {
      return {
        id: Mock.Random.guid(),
        name: Mock.Random.cname(),
      }
    })
  }
})


Mock.setup({
  timeout:'200-400'
})

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
.use(hljsVuePlugin)
.use(router)
.mount('#app')
