import{_ as O,k as _,j as P,o as I,c as N,b as u,w as l,F as $,h as n,e,t as s,l as m,u as b,p as E,d as S}from"./index-97cdd087.js";import{E as w,a as y}from"./el-descriptions-item-f2ae01b5.js";import{_ as k}from"./CodeBlockDisplay-565f7131.js";import"./use-form-common-props-00f314c1.js";import"./CodeBlock-1a02a360.js";const B=a=>(E("data-v-b61480d6"),a=a(),S(),a),D=B(()=>e("div",null,[n(" 1. computed返回的是一个只读的ref对象，其value属性为函数返回值"),e("br"),n(" 2. computed的响应式体现在computed函数会在其依赖的ref对象发生变化时重新执行"),e("br"),n(" 3. 如果在初始化时手动为computed设置getter和setter，那么computed的值不在为只读 ")],-1)),F={class:"btn-ctn"},V=`
<scripts setup>
import { computed } from 'vue';
let a = 1
const b = computed(() => a + 1)
<\/scripts>

<template>
// b是一个只读的ref，所以click事件无法修改b的值
<button @click="b++">{{ b }}</button>
// a不是一个响应式对象，
// 所以click事件无法触发computed的重新执行
<button @click="a++">{{ a }}</button>
</template>
`,j=`
<script>
import { computed,ref } from 'vue';
let count = ref(0)
let countPlusOne = computed(() => count.value + 1)
let double = computed({
  get: () => count.value * 2,
  set: val => {
    count.value = val / 2
  }
})
<\/scripts>

<template>
  // count是一个ref对象，所以click事件可以修改count的值
  <button @click="count++">{{ count }}</button>
  // countPlusOne是一个只读的ref对象，所以click事件无法修改countPlusOne的值
  <button @click="countPlusOne++">{{ countPlusOne }}</button>
  // double是一个有getter和setter的computed对象，所以click事件可以修改double的值
  <button @click="double++">{{ double }}</button>
</template>
`,R={__name:"Computed",setup(a){let c=1;const f=_(()=>c+1),C=[{fileName:"Computed.vue",code:V}];let o=P(0),p=_(()=>o.value+1),d=_({get:()=>o.value*2,set:v=>{o.value=v/2}});const g=[{fileName:"Computed2.vue",code:j}];return(v,t)=>{const i=y,x=w;return I(),N($,null,[u(x,{title:"computed(<input>)",column:1},{default:l(()=>[u(i,{label:"参数"},{default:l(()=>[n(" 函数 Function 作为 getter 函数 ")]),_:1}),u(i,{label:"返回"},{default:l(()=>[n(" 一个ref对象，其value属性为函数返回值 ")]),_:1}),u(i,{label:"使用"},{default:l(()=>[n(" 同ref ")]),_:1}),u(i,{label:"特性"},{default:l(()=>[D]),_:1})]),_:1}),u(k,{info:C},{default:l(()=>[e("div",null,[e("button",{onClick:t[0]||(t[0]=r=>f.value++)},s(f.value),1),e("button",{onClick:t[1]||(t[1]=r=>m(c)?c.value++:c++)},s(b(c)),1)])]),_:1}),u(k,{info:g},{default:l(()=>[e("div",F,[e("button",{onClick:t[2]||(t[2]=r=>m(o)?o.value++:o++)},s(b(o)),1),e("button",{onClick:t[3]||(t[3]=r=>m(p)?p.value++:p++)},s(b(p)),1),e("button",{onClick:t[4]||(t[4]=r=>m(d)?d.value++:d++)},s(b(d)),1)])]),_:1})],64)}}},H=O(R,[["__scopeId","data-v-b61480d6"]]);export{H as default};
