import{_ as m}from"./CodeBlockDisplay-36caa1e3.js";import{m as u,o,c as n,b as e,w as t,F as a,h as d,e as s,g as f,t as v}from"./index-930a1cec.js";import{E as x,a as k}from"./el-descriptions-item-df3093e6.js";import"./CodeBlock-5fcb419f.js";import"./use-form-common-props-3cf71636.js";const V=`
<template>
  <p
    v-for="(val,idx) in [1,2,3,4,5]"
    :key="idx"
  >{{ val }}</p>
</template>
`,b={__name:"VFor",setup(g){const r=u([{code:V,fileName:"VFor.vue"}]);return(y,B)=>{const l=k,i=x,c=m;return o(),n(a,null,[e(i,{title:"v-for",column:1},{default:t(()=>[e(l,{label:"用法:"},{default:t(()=>[d(" 循环渲染 ")]),_:1})]),_:1}),e(c,{info:r.value},{default:t(()=>[s("div",null,[(o(),n(a,null,f([1,2,3,4,5],(p,_)=>s("p",{key:_},v(p),1)),64))])]),_:1},8,["info"])],64)}}};export{b as default};