import{_,i as r,o as l,c as u,b as t,w as e,F as p,h as o,e as d,t as m,u as f}from"./index-97cdd087.js";import{E as v,a as b}from"./el-descriptions-item-f2ae01b5.js";import{_ as x}from"./CodeBlockDisplay-565f7131.js";import"./use-form-common-props-00f314c1.js";import"./CodeBlock-1a02a360.js";const S=`
<scripts setup>
import { reactive } from 'vue'
let state = reactive({
  count: 0
})
const addState = () => {
  state.count += 1
}
<\/scripts>

<template>
  <button @click="addState">
    {{ state.count }}
  </button>
</template>
`,g={__name:"Reactive",setup(h){let c=r({count:0});const s=()=>{c.count+=1},n=[{fileName:"Reactive.Vue",code:S}];return(k,y)=>{const a=b,i=v;return l(),u(p,null,[t(i,{title:"reactive()",column:1},{default:e(()=>[t(a,{label:"参数"},{default:e(()=>[o(" 对象 Object ")]),_:1}),t(a,{label:"返回"},{default:e(()=>[o(" 对象的响应式代理 ")]),_:1}),t(a,{label:"使用"},{default:e(()=>[o(" 与JS中 new Proxy() 的使用方法相同，vue会根据组件中对reactive变量的引用自动设置handler ")]),_:1})]),_:1}),t(x,{info:n},{default:e(()=>[d("button",{onClick:s,class:"tem-btn"},m(f(c).count),1)]),_:1})],64)}}},B=_(g,[["__scopeId","data-v-87a75fb5"]]);export{B as default};
