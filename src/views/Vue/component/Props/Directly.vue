<template>
  <p>1. 在子组件中使用defineProps=['msg']接收参数</p>
  <PCodeBlock :code="codeChild" title="Child.vue" inDisplay></PCodeBlock>
  <p>2. 在父组件中使用&lt;child :msg="msg"/&gt;向子组件传递参数</p>
  <PCodeBlockDisplay :code="codeParent" title="Parent.vue">
    <div>
      <p>This is</p>
      <p>Hello World</p>
    </div>
  </PCodeBlockDisplay>
</template>

<script lang="ts">
// import CodeBlock from '@/components/CodeBlock/CodeBlock.vue';
// import { ref } from 'vue';

// const massCode = 
// `
// <!-- 虽然 \`42\` 是个常量，我们还是需要使用 v-bind -->
// <!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
// <BlogPost :likes="42" />

// <!-- 根据一个变量的值动态传入 -->
// <BlogPost :likes="post.likes" />

// <!-- 仅写上 prop 但不传值，会隐式转换为 \`true\` -->
// <BlogPost is-published />

// <!-- 虽然 \`false\` 是静态的值，我们还是需要使用 v-bind -->
// <!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
// <BlogPost :is-published="false" />

// <!-- 根据一个变量的值动态传入 -->
// <BlogPost :is-published="post.isPublished" />

// <!-- 虽然这个对象字面量是个常量，我们还是需要使用 v-bind -->
// <!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
// <BlogPost
//   :author="{
//     name: 'Veronica',
//     company: 'Veridian Dynamics'
//   }"
//  />

// <!-- 根据一个变量的值动态传入 -->
// <BlogPost :author="post.author" />


// `

// const massInfo = [{
//   fileName: 'example.vue',
//   code: massCode
// }]
import PCodeBlock from '@/components/PrimCodeBlock/PCodeBlock/PCodeBlock.vue';
import PCodeBlockDisplay from '@/components/PrimCodeBlock/PCodeBlockDisplay/PCodeBlockDisplay.vue';
import { Vue, Options } from 'vue-class-component';

@Options({
  components:{
    PCodeBlock,
    PCodeBlockDisplay
  }
})
export default class Directly extends Vue{
  get codeParent(){
    return`
        <scripts setup>
        import { ref } from 'vue'
        import Child from './Child.vue'
        const msg = ref('Hello World')
        </scripts>
        <template>
          <p>This is</p>
          <Child :msg="msg"/>
        </template>
        `
  }
  get codeChild(){
    return`
        <scripts setup>
        const props = defineProps(['msg'])
        </scripts>
        <template>
          <p>{{ props.msg }}</p>  
        </template>
        `
  }
}
</script>

<style scoped>
</style>