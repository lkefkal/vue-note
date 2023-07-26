import{_ as d}from"./PCodeBlockDisplay-dae1e0dd.js";import{V as x,O as F,_ as O,o as i,c as _,b as p,w as l,F as u,h as P,e as m,g,t as y}from"./index-cd3cb997.js";import{E as B,a as C}from"./el-descriptions-item-197232c9.js";import"./PCodeBlock-46730204.js";import"./el-button-74933914.js";import"./use-form-common-props-55839fd0.js";import"./CleanCode-931345d6.js";var E=Object.defineProperty,$=Object.getOwnPropertyDescriptor,b=(t,o,n,r)=>{for(var e=r>1?void 0:r?$(o,n):o,a=t.length-1,s;a>=0;a--)(s=t[a])&&(e=(r?s(o,n,e):s(e))||e);return r&&e&&E(o,n,e),e};let c=class extends x{get code(){return`
        <template>
          <p
            v-for="(val,idx) in [1,2,3,4,5]"
            :key="idx"
          >{{ val }}</p>
        </template>
        `}};c=b([F({components:{PCodeBlockDisplay:d}})],c);function h(t,o,n,r,e,a){const s=C,f=B,v=d;return i(),_(u,null,[p(f,{title:"v-for",column:1},{default:l(()=>[p(s,{label:"用法:"},{default:l(()=>[P(" 循环渲染 ")]),_:1})]),_:1}),p(v,{code:t.code,title:"v-for"},{default:l(()=>[m("div",null,[(i(),_(u,null,g([1,2,3,4,5],(D,V)=>m("p",{key:V},y(D),1)),64))])]),_:1},8,["code"])],64)}const T=O(c,[["render",h]]);export{T as default};
