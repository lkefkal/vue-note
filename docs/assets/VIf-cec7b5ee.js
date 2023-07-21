import{j as i,o as s,c as n,b as e,w as t,F as f,h as l,e as a}from"./index-97cdd087.js";import{E as m}from"./el-button-d0f18651.js";import{E as d,a as v}from"./el-descriptions-item-f2ae01b5.js";import{_ as h}from"./CodeBlockDisplay-565f7131.js";import"./use-form-item-c4f8e6f7.js";import"./use-form-common-props-00f314c1.js";import"./CodeBlock-1a02a360.js";const k=a("br",null,null,-1),b={key:0},E={key:1},R=`
<script setup>
import { ref } from 'vue';
const shouldRender = ref(true)
<\/scripts>

<template>
  <el-button @click="shouldRender = !shouldRender">Click</el-button>
  <p v-if="shouldRender">v-if===true</p>
  <p v-else>v-if===false</p>
</template>
`,I={__name:"VIf",setup(V){const o=i(!0),c=i([{code:R,fileName:"VModel.vue"}]);return(x,r)=>{const u=v,p=d,_=m;return s(),n(f,null,[e(p,{title:"v-if",column:1},{default:t(()=>[e(u,{label:"用法:"},{default:t(()=>[l(" 条件渲染"),k,l(" 根据v-if中的值的真假来决定是否渲染元素 ")]),_:1})]),_:1}),e(h,{info:c.value},{default:t(()=>[a("div",null,[e(_,{onClick:r[0]||(r[0]=B=>o.value=!o.value)},{default:t(()=>[l("Click")]),_:1}),o.value?(s(),n("p",b,"v-if===true")):(s(),n("p",E,"v-if===false"))])]),_:1},8,["info"])],64)}}};export{I as default};
