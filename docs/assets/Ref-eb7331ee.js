import{_ as f,g as d,o as m,c as b,d as e,w as t,F as v,k as n,t as l,a as o,p as k,e as x}from"./index-5fefc914.js";import{E as g,a as I}from"./el-descriptions-item-84a34e89.js";import{_ as h}from"./CodeBlockDisplay-35fee805.js";import"./CodeBlock-f667b5da.js";const _=s=>(k("data-v-f9965baf"),s=s(),x(),s),y=_(()=>o("div",null,[n(" 1. ref 是模板渲染上下文的顶层属性时才适用自动“解包”。 例如， object 是顶层属性，但 object.foo 不是。 "),o("br"),n(" 2.当一个 ref 被嵌套在一个响应式对象中，作为属性被访问或更改时，它会自动解包，因此会表现得和一般的属性一样 ")],-1)),E=_(()=>o("br",null,null,-1)),N=`
<scripts setup>
import { ref } from 'vue';
const count = ref(0)
const incresement = () => {
  count.value += 1
}
<\/scripts>

<template>
  <div>
    <button @click="incresement">
      {{ count }}
    </button>
    <br/>
    <button @click="count--">
      减一
    </button>
  </div>
</template>
`,R={__name:"Ref",setup(s){const c=d(0),i=()=>{c.value+=1},r=[{fileName:"Ref.Vue",code:N}];return(S,u)=>{const a=I,p=g;return m(),b(v,null,[e(p,{title:"ref(<input>)",column:1},{default:t(()=>[e(a,{label:"参数"},{default:t(()=>[n(" 任意值 any ")]),_:1}),e(a,{label:"返回"},{default:t(()=>[n(l("{value: <input>} 的响应式代理"))]),_:1}),e(a,{label:"使用"},{default:t(()=>[n(" 被自动解包时，直接使用，其余时刻使用需要使用"+l("<ref>.value")+"的形式 ",1)]),_:1}),e(a,{label:"解包场景"},{default:t(()=>[y]),_:1})]),_:1}),e(h,{info:r},{default:t(()=>[o("div",null,[o("button",{onClick:i,class:"tem-btn"},l(c.value),1),E,o("button",{onClick:u[0]||(u[0]=V=>c.value--)},"减一")])]),_:1})],64)}}},j=f(R,[["__scopeId","data-v-f9965baf"]]);export{j as default};
