<template>
<el-descriptions title="组件传参" :column="1">
  <el-descriptions-item label="1. 向直接子组件传参">
    <p>在父组件中使用&lt;child :msg="msg"/&gt;向子组件传递参数</p>
    <p>在子组件中使用defineProps=['msg']接收参数</p>
  </el-descriptions-item>
  <el-descriptions-item label="2. 透传属性">
    <p>在父组件中使用&lt;child :msg="msg"/&gt;向子组件传递参数</p>
    <p>在子组件不声明接受的属性，传入的属性会被直接加到子组件的根元素</p>
    <p>如果想禁用透传，可以在子组件设置inheritAttrs: false</p>
  </el-descriptions-item>
  <el-descriptions-item label="3. 依赖注入">
    <p>类似ContextProvider和useContext</p>
    <p>在提供数据的组件使用provide(key:any,val:any|any[])函数发布数据</p>
    <p>在接收数据的组件使用inject(key:any,defaultValue:any)函数接收数据</p>
    <p>可以发布的数据包括函数</p>
  </el-descriptions-item>
</el-descriptions>
</template>

<script setup>
import { ref } from 'vue'
import CodeBlock from '@/components/CodeBlock/CodeBlock.vue';

</script>