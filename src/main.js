import '@/style/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import hljsVuePlugin from "@/utils/hljs/hljs.js";

const app = createApp(App)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
.use(hljsVuePlugin)
.use(router)
.mount('#app')
