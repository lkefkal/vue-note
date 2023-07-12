<template>
  <div v-if="isInHome">
    <h1>
      组件基础
    </h1>
    <CodeBlock :info="info" />
  </div>
  <div class="router-ctn">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref,computed } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import CodeBlock from '@/components/CodeBlock/CodeBlock.vue';

const route = useRoute()
const router = useRouter()
const isInHome = computed(() => /\/component$/.test(route.path))

const code1 = 
`
<scripts setup>
import { ref } from 'vue'

const count = ref(0)
</scripts>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
`
const code2 =
`
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: \`
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>
    \`
  // 或者 \`template: '#my-template-element'\`
}
`
const info = [
  {
    title: '使用setup 构建的单文件组件',
    fileName: 'App.vue',
    code: code1
  },
  {
    title: '不适用setup 构建的js组件',
    fileName: 'App.js',
    code: code2
  }
]
</script>

<style scoped>
.router-ctn {
  padding:0  1.5em ;
}
</style>
