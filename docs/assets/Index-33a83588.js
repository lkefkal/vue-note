import{_ as r,a as m,u as _,c as d,r as i,o as t,b as o,f as c,e as l,d as s,F as f,p as v,g as h}from"./index-85d5c705.js";import{C as k}from"./CodeBlock-a63d0f5b.js";/* empty css                                                                  */const x=e=>(v("data-v-30f12cff"),e=e(),h(),e),I={key:0},b=x(()=>s("h1",null," 组件基础 ",-1)),N={class:"router-ctn"},y=`
<scripts setup>
import { ref } from 'vue'

const count = ref(0)
<\/scripts>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
`,B=`
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: \`
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>
    \`
  // 或者 \`template: '#my-template-element'\`
}
`,C={__name:"Index",setup(e){const n=m();_();const u=d(()=>/\/component$/.test(n.path)),a=[{title:"使用setup 构建的单文件组件",fileName:"App.vue",code:y},{title:"不使用setup 构建的js组件",fileName:"App.js",code:B}];return(g,w)=>{const p=i("router-view");return t(),o(f,null,[u.value?(t(),o("div",I,[b,c(k,{info:a})])):l("",!0),s("div",N,[c(p)])],64)}}},A=r(C,[["__scopeId","data-v-30f12cff"]]);export{A as default};
