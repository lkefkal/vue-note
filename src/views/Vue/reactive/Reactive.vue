<template>
  <el-descriptions title="reactive()" :column="1">
    <el-descriptions-item label="参数">
      对象  Object
    </el-descriptions-item>
    <el-descriptions-item label="返回">
      对象的响应式代理
    </el-descriptions-item>
    <el-descriptions-item label="使用">
      与JS中 new Proxy() 的使用方法相同，vue会根据组件中对reactive变量的引用自动设置handler
    </el-descriptions-item>
  </el-descriptions>
  <CodeBlockDisplay :info="info">
    <button @click="addState" class="tem-btn">
      {{ state.count }}
    </button>
  </CodeBlockDisplay>
</template>

<script setup>
import CodeBlockDisplay from '@/components/CodeBlock/CodeBlockDisplay.vue';
import { reactive } from 'vue';

let state = reactive({
  count: 0
})

const addState = () => {
  state.count += 1
}

const code = `
<scripts setup>
import { reactive } from 'vue'
let state = reactive({
  count: 0
})
const addState = () => {
  state.count += 1
}
</scripts>

<template>
  <button @click="addState">
    {{ state.count }}
  </button>
</template>
`

const info = [{
  fileName:'Reactive.Vue',
  code:code,
}]
</script>

<style scoped>
.tem-btn{
  width:3em;
  height: 1.5em;
}
</style>