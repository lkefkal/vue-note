<template>
  <ol>
    <li>“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 
      props 或 emits 的 attribute 或者 v-on 事件监听器。
      最常见的例子就是 class、style 和 id。</li>
    <li>如果想禁用透传，可以在子组件设置inheritAttrs: false</li>
  </ol>
</template>

<script setup>
import CodeBlock from '@/components/CodeBlock/CodeBlock.vue';
import { ref } from 'vue';
</script>