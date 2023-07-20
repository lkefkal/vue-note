import{_ as i,m as l,o as r,c as u,d as t,w as e,F as p,k as o,a as d,t as m,n as f}from"./index-5fefc914.js";import{E as v,a as b}from"./el-descriptions-item-84a34e89.js";import{_ as x}from"./CodeBlockDisplay-35fee805.js";import"./CodeBlock-f667b5da.js";const k=`
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
`,S={__name:"Reactive",setup(g){let c=l({count:0});const s=()=>{c.count+=1},n=[{fileName:"Reactive.Vue",code:k}];return(y,E)=>{const a=b,_=v;return r(),u(p,null,[t(_,{title:"reactive()",column:1},{default:e(()=>[t(a,{label:"参数"},{default:e(()=>[o(" 对象 Object ")]),_:1}),t(a,{label:"返回"},{default:e(()=>[o(" 对象的响应式代理 ")]),_:1}),t(a,{label:"使用"},{default:e(()=>[o(" 与JS中 new Proxy() 的使用方法相同，vue会根据组件中对reactive变量的引用自动设置handler ")]),_:1})]),_:1}),t(x,{info:n},{default:e(()=>[d("button",{onClick:s,class:"tem-btn"},m(f(c).count),1)]),_:1})],64)}}},w=i(S,[["__scopeId","data-v-87a75fb5"]]);export{w as default};
