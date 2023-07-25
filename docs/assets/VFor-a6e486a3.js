import{_ as m}from"./PCodeBlockDisplay-2b167460.js";import{V as x,O as F,_ as O,o as i,c as _,b as l,w as p,F as u,h as P,e as d,g,t as y}from"./index-5394bb4e.js";import{E as B,a as C}from"./el-descriptions-item-6807e517.js";import"./PCodeBlock-fe0cdc57.js";import"./el-button-8bc888af.js";import"./use-form-common-props-a55f9cf8.js";var E=Object.defineProperty,$=Object.getOwnPropertyDescriptor,b=(t,o,n,r)=>{for(var e=r>1?void 0:r?$(o,n):o,a=t.length-1,s;a>=0;a--)(s=t[a])&&(e=(r?s(o,n,e):s(e))||e);return r&&e&&E(o,n,e),e};let c=class extends x{get code(){return`
        <template>
          <p
            v-for="(val,idx) in [1,2,3,4,5]"
            :key="idx"
          >{{ val }}</p>
        </template>
        `}};c=b([F({components:{PCodeBlockDisplay:m}})],c);function h(t,o,n,r,e,a){const s=C,f=B,v=m;return i(),_(u,null,[l(f,{title:"v-for",column:1},{default:p(()=>[l(s,{label:"用法:"},{default:p(()=>[P(" 循环渲染 ")]),_:1})]),_:1}),l(v,{code:t.code,title:"v-for"},{default:p(()=>[d("div",null,[(i(),_(u,null,g([1,2,3,4,5],(D,V)=>d("p",{key:V},y(D),1)),64))])]),_:1},8,["code"])],64)}const S=O(c,[["render",h]]);export{S as default};
