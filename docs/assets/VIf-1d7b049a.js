import{q as r,o as s,b as n,f as e,w as t,F as f,i as l,d as a}from"./index-48966abe.js";import{E as d}from"./el-button-f29d4471.js";import{E as m,a as v}from"./el-descriptions-item-d29d86ab.js";import{_ as h}from"./CodeBlockDisplay-5d1e6aed.js";import"./use-form-item-bafd2d9e.js";import"./CodeBlock-50b50ce1.js";const k=a("br",null,null,-1),b={key:0},E={key:1},R=`
<script setup>
import { ref } from 'vue';
const shouldRender = ref(true)
<\/scripts>

<template>
  <el-button @click="shouldRender = !shouldRender">Click</el-button>
  <p v-if="shouldRender">v-if===true</p>
  <p v-else>v-if===false</p>
</template>
`,F={__name:"VIf",setup(V){const o=r(!0),u=r([{code:R,fileName:"VModel.vue"}]);return(x,i)=>{const c=v,p=m,_=d;return s(),n(f,null,[e(p,{title:"v-if",column:1},{default:t(()=>[e(c,{label:"用法:"},{default:t(()=>[l(" 条件渲染"),k,l(" 根据v-if中的值的真假来决定是否渲染元素 ")]),_:1})]),_:1}),e(h,{info:u.value},{default:t(()=>[a("div",null,[e(_,{onClick:i[0]||(i[0]=B=>o.value=!o.value)},{default:t(()=>[l("Click")]),_:1}),o.value?(s(),n("p",b,"v-if===true")):(s(),n("p",E,"v-if===false"))])]),_:1},8,["info"])],64)}}};export{F as default};
