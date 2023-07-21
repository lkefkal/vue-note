import{_ as f,j as d,o as m,c as b,b as e,w as t,F as v,h as n,t as l,e as o,p as k,d as x}from"./index-97cdd087.js";import{E as h,a as I}from"./el-descriptions-item-f2ae01b5.js";import{_ as g}from"./CodeBlockDisplay-565f7131.js";import"./use-form-common-props-00f314c1.js";import"./CodeBlock-1a02a360.js";const u=s=>(k("data-v-f9965baf"),s=s(),x(),s),y=u(()=>o("div",null,[n(" 1. ref 是模板渲染上下文的顶层属性时才适用自动“解包”。 例如， object 是顶层属性，但 object.foo 不是。 "),o("br"),n(" 2.当一个 ref 被嵌套在一个响应式对象中，作为属性被访问或更改时，它会自动解包，因此会表现得和一般的属性一样 ")],-1)),E=u(()=>o("br",null,null,-1)),N=`
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
`,R={__name:"Ref",setup(s){const a=d(0),_=()=>{a.value+=1},r=[{fileName:"Ref.Vue",code:N}];return(S,i)=>{const c=I,p=h;return m(),b(v,null,[e(p,{title:"ref(<input>)",column:1},{default:t(()=>[e(c,{label:"参数"},{default:t(()=>[n(" 任意值 any ")]),_:1}),e(c,{label:"返回"},{default:t(()=>[n(l("{value: <input>} 的响应式代理"))]),_:1}),e(c,{label:"使用"},{default:t(()=>[n(" 被自动解包时，直接使用，其余时刻使用需要使用"+l("<ref>.value")+"的形式 ",1)]),_:1}),e(c,{label:"解包场景"},{default:t(()=>[y]),_:1})]),_:1}),e(g,{info:r},{default:t(()=>[o("div",null,[o("button",{onClick:_,class:"tem-btn"},l(a.value),1),E,o("button",{onClick:i[0]||(i[0]=V=>a.value--)},"减一")])]),_:1})],64)}}},F=f(R,[["__scopeId","data-v-f9965baf"]]);export{F as default};
