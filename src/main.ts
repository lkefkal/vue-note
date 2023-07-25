import '@/style/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/mock'
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css'; 

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
.use(router)
.use(store)
.use(LoadingPlugin)
.mount('#app')
