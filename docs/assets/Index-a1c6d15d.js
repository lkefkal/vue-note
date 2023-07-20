import{_ as r,i as _,u as d,j as m,r as i,o as t,c as o,d as s,b as l,a as c,F as f,p as v,e as b}from"./index-5fefc914.js";import{_ as h}from"./CodeBlock-f667b5da.js";const x=e=>(v("data-v-b690cd0e"),e=e(),b(),e),I={key:0,style:{padding:"0 1.5rem"}},k=x(()=>c("h1",null," 组件基础 ",-1)),y={class:"router-ctn"},N=`
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
`,j={__name:"Index",setup(e){const n=_();d();const u=m(()=>/\/component$/.test(n.path)),p=[{title:"使用setup 构建的单文件组件",fileName:"App.vue",code:N},{title:"不使用setup 构建的js组件",fileName:"App.js",code:g}];return(w,B)=>{const a=i("router-view");return t(),o(f,null,[u.value?(t(),o("div",I,[k,s(h,{info:p})])):l("",!0),c("div",y,[s(a)])],64)}}},A=r(j,[["__scopeId","data-v-b690cd0e"]]);export{A as default};
