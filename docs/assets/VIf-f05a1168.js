var E=Object.defineProperty;var C=(t,e,o)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var _=(t,e,o)=>(C(t,typeof e!="symbol"?e+"":e,o),o);import{_ as f}from"./PCodeBlockDisplay-127351bb.js";import{V as b,O as B,_ as R,o as i,c,b as r,w as p,F as V,h as d,e as m,E as O}from"./index-bdc1aac7.js";import{E as P,a as $}from"./el-descriptions-item-591d34a4.js";import"./PCodeBlock-04b4656d.js";import"./CleanCode-1adac528.js";var k=Object.defineProperty,F=Object.getOwnPropertyDescriptor,w=(t,e,o,n)=>{for(var s=n>1?void 0:n?F(e,o):e,l=t.length-1,u;l>=0;l--)(u=t[l])&&(s=(n?u(e,o,s):u(s))||s);return n&&s&&k(e,o,s),s};let a=class extends b{constructor(){super(...arguments);_(this,"shouldRender",!0)}get code(){return`
        <script setup>
        import { ref } from 'vue';
        const shouldRender = ref(true)
        <\/scripts>

        <template>
          <el-button @click="shouldRender = !shouldRender">Click</el-button>
          <p v-if="shouldRender">v-if===true</p>
          <p v-else>v-if===false</p>
        </template>
        `}};a=w([B({components:{PCodeBlockDisplay:f}})],a);const y=m("br",null,null,-1),I={key:0},g={key:1};function N(t,e,o,n,s,l){const u=$,v=P,h=O,D=f;return i(),c(V,null,[r(v,{title:"v-if",column:1},{default:p(()=>[r(u,{label:"用法:"},{default:p(()=>[d(" 条件渲染"),y,d(" 根据v-if中的值的真假来决定是否渲染元素 ")]),_:1})]),_:1}),r(D,{code:t.code,title:"v-if"},{default:p(()=>[m("div",null,[r(h,{onClick:e[0]||(e[0]=j=>t.shouldRender=!t.shouldRender)},{default:p(()=>[d("Click")]),_:1}),t.shouldRender?(i(),c("p",I,"v-if===true")):(i(),c("p",g,"v-if===false"))])]),_:1},8,["code"])],64)}const J=R(a,[["render",N]]);export{J as default};
