import{V as h,O as b,_ as x,r as $,o as _,c as p,e as d,b as i,w as u,F as v,g as w,h as C,t as I}from"./index-1dbab7da.js";import{E as D,a as F}from"./el-descriptions-item-fdf2b987.js";import{E as O}from"./el-button-0b6673d9.js";import"./use-form-common-props-be574cc6.js";var g=Object.defineProperty,V=Object.getOwnPropertyDescriptor,B=(o,t,r,s)=>{for(var e=s>1?void 0:s?V(t,r):t,a=o.length-1,n;a>=0;a--)(n=o[a])&&(e=(s?n(t,r,e):n(e))||e);return s&&e&&g(t,r,e),e};let c=class extends h{handleClick(t){this.$router.push("/vue/directive/"+t)}get whiereIs(){return this.$route.path.split("/").pop()}};c=B([b({components:{}})],c);const P={class:"container"};function y(o,t,r,s,e,a){const n=O,m=F,f=D,E=$("router-view");return _(),p(v,null,[d("div",P,[i(f,{title:"vue 常用内置指令",column:1},{default:u(()=>[i(m,{label:"常用响应式函数"},{default:u(()=>[(_(),p(v,null,w(["v-bind","v-on","v-model","v-if","v-for"],l=>i(n,{onClick:N=>o.handleClick(`${l}`),round:"",disabled:o.whiereIs===l},{default:u(()=>[C(I(l),1)]),_:2},1032,["onClick","disabled"])),64))]),_:1})]),_:1})]),d("div",null,[i(E)])],64)}const q=x(c,[["render",y],["__scopeId","data-v-b4832929"]]);export{q as default};
