var E=Object.defineProperty;var C=(t,e,o)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var _=(t,e,o)=>(C(t,typeof e!="symbol"?e+"":e,o),o);import{_ as f}from"./PCodeBlockDisplay-dae1e0dd.js";import{V as b,O as B,_ as R,o as i,c,b as l,w as p,F as V,h as d,e as m}from"./index-cd3cb997.js";import{E as O}from"./el-button-74933914.js";import{E as P,a as $}from"./el-descriptions-item-197232c9.js";import"./PCodeBlock-46730204.js";import"./CleanCode-931345d6.js";import"./use-form-common-props-55839fd0.js";var k=Object.defineProperty,F=Object.getOwnPropertyDescriptor,w=(t,e,o,n)=>{for(var s=n>1?void 0:n?F(e,o):e,r=t.length-1,u;r>=0;r--)(u=t[r])&&(s=(n?u(e,o,s):u(s))||s);return n&&s&&k(e,o,s),s};let a=class extends b{constructor(){super(...arguments);_(this,"shouldRender",!0)}get code(){return`
        <script setup>
        import { ref } from 'vue';
        const shouldRender = ref(true)
        <\/scripts>

        <template>
          <el-button @click="shouldRender = !shouldRender">Click</el-button>
          <p v-if="shouldRender">v-if===true</p>
          <p v-else>v-if===false</p>
        </template>
        `}};a=w([B({components:{PCodeBlockDisplay:f}})],a);const y=m("br",null,null,-1),I={key:0},g={key:1};function N(t,e,o,n,s,r){const u=$,v=P,h=O,D=f;return i(),c(V,null,[l(v,{title:"v-if",column:1},{default:p(()=>[l(u,{label:"用法:"},{default:p(()=>[d(" 条件渲染"),y,d(" 根据v-if中的值的真假来决定是否渲染元素 ")]),_:1})]),_:1}),l(D,{code:t.code,title:"v-if"},{default:p(()=>[m("div",null,[l(h,{onClick:e[0]||(e[0]=j=>t.shouldRender=!t.shouldRender)},{default:p(()=>[d("Click")]),_:1}),t.shouldRender?(i(),c("p",I,"v-if===true")):(i(),c("p",g,"v-if===false"))])]),_:1},8,["code"])],64)}const L=R(a,[["render",N]]);export{L as default};
