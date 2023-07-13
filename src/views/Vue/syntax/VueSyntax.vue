<template>
  <CodeBlock :info="info"></CodeBlock>
  <div style="padding:1.5rem">  
    <h1>书写风格/细节</h1>
    <p>组件命名使用PascalCase，属性命名使用camelCase</p>
  </div>
</template>

<script setup>
import CodeBlock from '@/components/CodeBlock/CodeBlock.vue';
const code1 = `
/**
    * 显式定义setup
    */
  <scripts>
  export default {
    /**定义组件的名字*/
    name: 'HelloWorld',
    /**
     * setup函数
     * return中返回的数据和方法将会暴露在组件中，可以在模板中使用
     */
    setup() {
      return {
        msg:'HelloWorld'
      }
    }
  }
  </scripts>

  /**
   * 与上方写法等价
   * <scripts setup>
   * const msg = 'HelloWorld'
   * </scripts>
   */

  /**
   * template是组件的HTML块
   * 使用组件时，会替换掉组件标签，实际插入DOM的是template中的内容
   */
  <template>
  /** 插值语法是双层花括号 {{ }}， 内可使用js语法 */
    <p class="a">{{ msg.raplace(/oW/, 'o W') }}</p>
  </template>
  /**
   * style是组件的样式块
   * 与css语法相同
   */
  <style scoped>
    .a {
      color: red;
    }
  </style>
`

const code2 = `
<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<scripts>
import HelloWorld from './path/to/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</scripts>
`

const info = 
  [{
    title: '模板语法',
    code: code1,
    fileName: 'HelloWorld.vue'
  },
  {
    title: 'SFC的使用',
    code: code2,
    fileName: 'Another.vue'
  }]
</script>

<style scoped lang="scss">
.container{
  display: block;
  height: auto;
  padding: 1.5em;
}

.code-block{
  display: block;
  position: relative;
  & p {
    position: absolute;
    top: 0.5em;
    right: 1em;
  }
}
</style>