import{V as h,O as b,_ as x,r as $,o as _,c as d,e as p,b as l,w as u,F as v,g as w,h as C,t as I,E as D}from"./index-9eba7189.js";import{E as F,a as O}from"./el-descriptions-item-552f52d1.js";var g=Object.defineProperty,V=Object.getOwnPropertyDescriptor,B=(s,t,r,o)=>{for(var e=o>1?void 0:o?V(t,r):t,a=s.length-1,n;a>=0;a--)(n=s[a])&&(e=(o?n(t,r,e):n(e))||e);return o&&e&&g(t,r,e),e};let c=class extends h{handleClick(t){this.$router.push("/vue/directive/"+t)}get whiereIs(){return this.$route.path.split("/").pop()}};c=B([b({components:{}})],c);const P={class:"container"};function y(s,t,r,o,e,a){const n=D,f=O,m=F,E=$("router-view");return _(),d(v,null,[p("div",P,[l(m,{title:"vue 常用内置指令",column:1},{default:u(()=>[l(f,{label:"常用响应式函数"},{default:u(()=>[(_(),d(v,null,w(["v-bind","v-on","v-model","v-if","v-for"],i=>l(n,{onClick:N=>s.handleClick(`${i}`),round:"",disabled:s.whiereIs===i},{default:u(()=>[C(I(i),1)]),_:2},1032,["onClick","disabled"])),64))]),_:1})]),_:1})]),p("div",null,[l(E)])],64)}const S=x(c,[["render",y],["__scopeId","data-v-b4832929"]]);export{S as default};
