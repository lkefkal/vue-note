import{_ as r,k as _,u as d,l as m,r as i,o as t,c as o,b as s,a as l,e as c,F as f,p as v,d as b}from"./index-930a1cec.js";import{_ as h}from"./CodeBlock-5fcb419f.js";const k=e=>(v("data-v-b690cd0e"),e=e(),b(),e),x={key:0,style:{padding:"0 1.5rem"}},I=k(()=>c("h1",null," 组件基础 ",-1)),y={class:"router-ctn"},N=`
<scripts setup>
import { ref } from 'vue'

const count = ref(0)
<\/scripts>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
`,g=`
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
`,w={__name:"Index",setup(e){const n=_();d();const u=m(()=>/\/component$/.test(n.path)),p=[{title:"使用setup 构建的单文件组件",fileName:"App.vue",code:N},{title:"不使用setup 构建的js组件",fileName:"App.js",code:g}];return(B,S)=>{const a=i("router-view");return t(),o(f,null,[u.value?(t(),o("div",x,[I,s(h,{info:p})])):l("",!0),c("div",y,[s(a)])],64)}}},A=r(w,[["__scopeId","data-v-b690cd0e"]]);export{A as default};
