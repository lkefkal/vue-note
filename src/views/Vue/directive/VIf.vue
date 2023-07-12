<template>
  <el-descriptions title="v-if" :column="1">
    <el-descriptions-item label="用法:">
      条件渲染<br>
      根据v-if中的值的真假来决定是否渲染元素
    </el-descriptions-item>
      
  </el-descriptions>
  <CodeBlockDisplay :info="info">
    <div>
      <el-button @click="shouldRender = !shouldRender">Click</el-button>
      <p v-if="shouldRender">v-if===true</p>
      <p v-else>v-if===false</p>
    </div>
  </CodeBlockDisplay>
</template>

<script setup>
import { ref } from 'vue';
import CodeBlockDisplay from '@/components/CodeBlock/CodeBlockDisplay.vue';


const shouldRender = ref(true)
const code = 
`
<script setup>
import { ref } from 'vue';
const shouldRender = ref(true)
</scripts>

<template>
  <el-button @click="shouldRender = !shouldRender">Click</el-button>
  <p v-if="shouldRender">v-if===true</p>
  <p v-else>v-if===false</p>
</template>
`

const info = ref([
  {
    code,
    fileName: 'VModel.vue'
  }
])
</script>