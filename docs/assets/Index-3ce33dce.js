import{_ as r,a as _,u as d,c as m,r as i,o as t,b as o,f as s,e as l,d as c,F as f,p as v,g as b}from"./index-57ffb944.js";import{_ as h}from"./CodeBlock-02c15614.js";const x=e=>(v("data-v-b690cd0e"),e=e(),b(),e),I={key:0,style:{padding:"0 1.5rem"}},k=x(()=>c("h1",null," 组件基础 ",-1)),g={class:"router-ctn"},y=`
<scripts setup>
import { ref } from 'vue'

const count = ref(0)
<\/scripts>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
`,N=`
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
`,w={__name:"Index",setup(e){const n=_();d();const u=m(()=>/\/component$/.test(n.path)),p=[{title:"使用setup 构建的单文件组件",fileName:"App.vue",code:y},{title:"不使用setup 构建的js组件",fileName:"App.js",code:N}];return(B,S)=>{const a=i("router-view");return t(),o(f,null,[u.value?(t(),o("div",I,[k,s(h,{info:p})])):l("",!0),c("div",g,[s(a)])],64)}}},A=r(w,[["__scopeId","data-v-b690cd0e"]]);export{A as default};
