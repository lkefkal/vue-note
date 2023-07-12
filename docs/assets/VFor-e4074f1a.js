import{_ as m}from"./CodeBlockDisplay-b2f7e656.js";import{m as d,o,b as n,f as e,w as t,F as a,i as f,d as s,j as u,t as v}from"./index-36efaa67.js";import{E as x,a as k}from"./el-descriptions-item-c47dca6a.js";import"./CodeBlock-805d415b.js";const V=`
<template>
  <p
    v-for="(val,idx) in [1,2,3,4,5]"
    :key="idx"
  >{{ val }}</p>
</template>
`,b={__name:"VFor",setup(y){const r=d([{code:V,fileName:"VFor.vue"}]);return(B,D)=>{const l=k,i=x,c=m;return o(),n(a,null,[e(i,{title:"v-for",column:1},{default:t(()=>[e(l,{label:"用法:"},{default:t(()=>[f(" 循环渲染 ")]),_:1})]),_:1}),e(c,{info:r.value},{default:t(()=>[s("div",null,[(o(),n(a,null,u([1,2,3,4,5],(p,_)=>s("p",{key:_},v(p),1)),64))])]),_:1},8,["info"])],64)}}};export{b as default};
