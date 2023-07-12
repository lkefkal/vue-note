import{m as v,q as b,o as c,b as i,f as o,w as n,F as h,i as u,t as d,d as l,n as w,l as m,s as k,v as U,e as x,j as E}from"./index-53337f56.js";import{E as j}from"./el-button-53f3856e.js";import{E as B,a as D}from"./el-descriptions-item-876ec5ff.js";import{_ as C}from"./CodeBlockDisplay-d3d7af8b.js";import"./use-form-item-ad8e977a.js";import"./CodeBlock-d893ee88.js";const F=f=>"/api/user/"+f,T={getUserNameUrl:F},W=l("br",null,null,-1),q=l("br",null,null,-1),I=l("br",null,null,-1),L=l("br",null,null,-1),M=l("label",{for:"user"},"输入人数:",-1),R={key:0},S=`
<scripts setup>
import { watch, ref } from 'vue';
import { UserName } from "@/api/user.js"
/**
 * a不是一个响应式对象，
 * 所以watch无法对a的变化进行响应
 * /
let a = 0
let count = ref(0)
let userName = ref('')

watch(() => a, async (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
watch(count, async (newVal, oldVal) => {
  if(count.value <= 0){
    userName.value = ''
    return
  }else{
    try{
      const res = await fetch("http://127.0.0.1:3000" + UserName.getUserNameUrl(count.value))
      userName.value = await res.json()
    }catch(err){
      console.log(err)
    }
  }
})
<\/scripts>

<template>
  <div>
    <el-button @click="a++">{{ a }}</el-button>
    <br/>
    <label for="user">输入人数:</label>
    <input v-model="count" type="number" name="user"/>
    <p v-if="count<=0">请输入人数，人数不得小于1</p>
    <p v-for="(name,idx) in userName" :key="idx">{{ name.name }}</p>
  </div>
</template>
`,O={__name:"Watch",setup(f){let s=0,t=v(0),p=v("");b(()=>s,async(_,a,e)=>{console.log(_,a),e(()=>{console.log("clean up")})}),b(t,async(_,a)=>{if(t.value<=0){p.value="";return}else try{const e=await fetch("http://127.0.0.1:3000"+T.getUserNameUrl(t.value));p.value=await e.json()}catch(e){console.log(e)}});const N=[{fileName:"Watch.vue",code:S}];return(_,a)=>{const e=D,V=B,g=j;return c(),i(h,null,[o(V,{title:"watch(<input>,callback((<oldVal>, <newVal>) => {}))",column:1},{default:n(()=>[o(e,{label:"参数"},{default:n(()=>[W,u(" 1. "+d("<input>")+"可以是一个响应式对象，也可以是一个getter函数"),q,u(" 2. callback()函数接收两个参数，分别是旧值和新值"),I]),_:1}),o(e,{label:"返回"},{default:n(()=>[u(" 一个停止侦听函数，调用它可以停止侦听 ")]),_:1}),o(e,{label:"使用"},{default:n(()=>[u(" 可以监听一个响应式对象的变化，也可以监听一个getter函数的变化，当监听的对象发生变化时，callback()函数会被调用 ")]),_:1})]),_:1}),o(C,{info:N},{default:n(()=>[l("div",null,[o(g,{onClick:a[0]||(a[0]=r=>w(s)?s.value++:s++)},{default:n(()=>[u(d(m(s)),1)]),_:1}),L,M,k(l("input",{"onUpdate:modelValue":a[1]||(a[1]=r=>w(t)?t.value=r:t=r),type:"number",name:"user"},null,512),[[U,m(t)]]),m(t)<=0?(c(),i("p",R,"请输入人数，人数不得小于1")):x("",!0),(c(!0),i(h,null,E(m(p),(r,y)=>(c(),i("p",{key:y},d(r.name),1))),128))])]),_:1})],64)}}};export{O as default};
