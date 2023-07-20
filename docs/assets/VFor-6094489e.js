import{_ as m}from"./CodeBlockDisplay-35fee805.js";import{g as d,o,c as a,d as e,w as t,F as n,k as u,a as s,l as f,t as v}from"./index-5fefc914.js";import{E as k,a as x}from"./el-descriptions-item-84a34e89.js";import"./CodeBlock-f667b5da.js";const V=`
<template>
  <p
    v-for="(val,idx) in [1,2,3,4,5]"
    :key="idx"
  >{{ val }}</p>
</template>
`,h={__name:"VFor",setup(g){const l=d([{code:V,fileName:"VFor.vue"}]);return(y,B)=>{const r=x,i=k,c=m;return o(),a(n,null,[e(i,{title:"v-for",column:1},{default:t(()=>[e(r,{label:"用法:"},{default:t(()=>[u(" 循环渲染 ")]),_:1})]),_:1}),e(c,{info:l.value},{default:t(()=>[s("div",null,[(o(),a(n,null,f([1,2,3,4,5],(p,_)=>s("p",{key:_},v(p),1)),64))])]),_:1},8,["info"])],64)}}};export{h as default};
