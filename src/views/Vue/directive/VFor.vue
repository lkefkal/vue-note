<template>
  <el-descriptions title="v-for" :column="1">
    <el-descriptions-item label="用法:">
      循环渲染
    </el-descriptions-item>
      
  </el-descriptions>
  <CodeBlockDisplay :info="info">
    <div>
      <p v-for="(val,idx) in [1,2,3,4,5]" :key="idx">{{ val }}</p>
    </div>
  </CodeBlockDisplay>
</template>

<script setup>
import { ref } from 'vue';
const code = 
`
<template>
  <p
    v-for="(val,idx) in [1,2,3,4,5]"
    :key="idx"
  >{{ val }}</p>
</template>
`

const info = ref([
  {
    code,
    fileName: 'VFor.vue'
  }
])
</script>