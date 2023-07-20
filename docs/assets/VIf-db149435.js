import{g as i,o as s,c as n,d as e,w as t,F as f,k as l,a}from"./index-5fefc914.js";import{E as d}from"./el-button-ee48d175.js";import{E as m,a as v}from"./el-descriptions-item-84a34e89.js";import{_ as k}from"./CodeBlockDisplay-35fee805.js";import"./use-form-item-e007bed9.js";import"./CodeBlock-f667b5da.js";const h=a("br",null,null,-1),E={key:0},b={key:1},R=`
<script setup>
import { ref } from 'vue';
const shouldRender = ref(true)
<\/scripts>

<template>
  <el-button @click="shouldRender = !shouldRender">Click</el-button>
  <p v-if="shouldRender">v-if===true</p>
  <p v-else>v-if===false</p>
</template>
`,F={__name:"VIf",setup(V){const o=i(!0),c=i([{code:R,fileName:"VModel.vue"}]);return(x,r)=>{const u=v,p=m,_=d;return s(),n(f,null,[e(p,{title:"v-if",column:1},{default:t(()=>[e(u,{label:"用法:"},{default:t(()=>[l(" 条件渲染"),h,l(" 根据v-if中的值的真假来决定是否渲染元素 ")]),_:1})]),_:1}),e(k,{info:c.value},{default:t(()=>[a("div",null,[e(_,{onClick:r[0]||(r[0]=B=>o.value=!o.value)},{default:t(()=>[l("Click")]),_:1}),o.value?(s(),n("p",E,"v-if===true")):(s(),n("p",b,"v-if===false"))])]),_:1},8,["info"])],64)}}};export{F as default};
