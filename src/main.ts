import '@/style/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n';
import App from './App.vue'
import router from './router'
import store from './store'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/mock'
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css'; 

const i18n = createI18n({
  locale: 'zh-CN',
  messages:{
    "zh-CN": {
      "hello": "你好，世界 {msg}",
    },
    'en': {
      "hello": "hello world",
    }
  }
})
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
.use(i18n)
.use(router)
.use(store)
.use(LoadingPlugin)
.mount('#app')
