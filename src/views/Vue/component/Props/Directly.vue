<template>
  <ol>
    <li>在父组件中使用&lt;child :msg="msg"/&gt;向子组件传递参数</li>
    <li>在子组件中使用defineProps=['msg']接收参数</li>
  </ol>
  <div class="code-ctn">
    <CodeBlock :info="massInfo"></CodeBlock>
  </div>
</template>

<script setup>
import CodeBlock from '@/components/CodeBlock/CodeBlock.vue';
import { ref } from 'vue';

const massCode = 
`
<!-- 虽然 \`42\` 是个常量，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<BlogPost :likes="42" />

<!-- 根据一个变量的值动态传入 -->
<BlogPost :likes="post.likes" />

<!-- 仅写上 prop 但不传值，会隐式转换为 \`true\` -->
<BlogPost is-published />

<!-- 虽然 \`false\` 是静态的值，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<BlogPost :is-published="false" />

<!-- 根据一个变量的值动态传入 -->
<BlogPost :is-published="post.isPublished" />

<!-- 虽然这个对象字面量是个常量，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<BlogPost
  :author="{
    name: 'Veronica',
    company: 'Veridian Dynamics'
  }"
 />

<!-- 根据一个变量的值动态传入 -->
<BlogPost :author="post.author" />


`

const massInfo = [{
  fileName: 'example.vue',
  code: massCode
}]

</script>

<style scoped>
.code-ctn{
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;
}
</style>