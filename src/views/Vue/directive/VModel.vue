<template>
  <el-descriptions title="v-model" :column="1">
    <el-descriptions-item label="用法:">
      在表单输入元素或组件上创建双向绑定
    </el-descriptions-item>
    <el-descriptions-item label="适用范围">
      {{ `\<input\>
          \<select\>
          \<textarea\>
          \<component\> // 自定义组件
          ` }}
    </el-descriptions-item>
    <el-descriptions-item label="修饰符">
      <br>
      .lazy - 监听 change 事件而不是 input<br>
      .number - 将输入的合法字符串转为数字<br>
      .trim - 移除输入内容两端空格<br>
    </el-descriptions-item>
  </el-descriptions>
  <CodeBlockDisplay :info="info">
    <div>
      <p>input: {{ input }}</p>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
  </CodeBlockDisplay>
</template>

<script setup>
import { ref } from 'vue';
import CodeBlockDisplay from '@/components/CodeBlock/CodeBlockDisplay.vue';


const input = ref('')
const code = 
`
<script setup>
import { ref } from 'vue';
const input = ref('')
</scripts>

<template>
  <p>input: {{ input }}</p>
  <el-input v-model="input" placeholder="请输入内容"></el-input>
  <!--
    --等价于
    -- <el-input :value="input" @input="input = $event" placeholder="请输入内容"></el-input>
    -->
</template>
`

const info = ref([
  {
    code,
    fileName: 'VModel.vue'
  }
])
</script>