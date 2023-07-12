import{C as l}from"./CodeBlock-805d415b.js";import{_ as a,o as c,b as p,f as r,F as n,p as d,g as m,d as t}from"./index-36efaa67.js";const o=e=>(d("data-v-ac66a39f"),e=e(),m(),e),_=o(()=>t("h1",null,"书写风格/细节",-1)),u=o(()=>t("p",null,"组件命名使用PascalCase，属性命名使用camelCase",-1)),i=`
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
  <\/scripts>

  /**
   * 与上方写法等价
   * <scripts setup>
   * const msg = 'HelloWorld'
   * <\/scripts>
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
`,f=`
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
<\/scripts>
`,W={__name:"VueSyntax",setup(e){const s=[{title:"模板语法",code:i,fileName:"HelloWorld.vue"},{title:"SFC的使用",code:f,fileName:"Another.vue"}];return(x,H)=>(c(),p(n,null,[r(l,{info:s}),_,u],64))}},g=a(W,[["__scopeId","data-v-ac66a39f"]]);export{g as default};
