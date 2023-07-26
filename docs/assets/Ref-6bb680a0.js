var b=Object.defineProperty;var B=(u,e,t)=>e in u?b(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t;var F=(u,e,t)=>(B(u,typeof e!="symbol"?e+"":e,t),t);import{_ as E}from"./PCodeBlockDisplay-dae1e0dd.js";import{V as v,O as A,_ as D,o as h,c as g,b as c,w as s,F as y,h as l,t as i,e as r,p as O,d as P}from"./index-cd3cb997.js";import{E as k}from"./el-button-74933914.js";import{E as w,a as I}from"./el-descriptions-item-197232c9.js";import"./PCodeBlock-46730204.js";import"./CleanCode-931345d6.js";import"./use-form-common-props-55839fd0.js";var R=Object.defineProperty,V=Object.getOwnPropertyDescriptor,$=(u,e,t,a)=>{for(var o=a>1?void 0:a?V(e,t):e,p=u.length-1,n;p>=0;p--)(n=u[p])&&(o=(a?n(e,t,o):n(o))||o);return a&&o&&R(e,t,o),o};let _=class extends v{constructor(){super(...arguments);F(this,"count",0);F(this,"incresement",()=>{this.count+=1});F(this,"decresement",()=>{this.count-=1})}get code(){return`
        <scripts setup>
        import { ref } from 'vue';
        const count = ref(0)
        const incresement = () => {
          count.value += 1
        }
        const decresement = () => {
          count.value -= 1
        }
        <\/scripts>

        <template>
          <p>{{ 'count=' + count }}</p>
          <el-button @click="incresement">+1</el-button>
          <br/>
          <el-button @click="decresement">-1</el-button>
        </template>
        `}};_=$([A({components:{PCodeBlockDisplay:E}})],_);const m=u=>(O("data-v-d68bac99"),u=u(),P(),u),j=m(()=>r("div",null,[l(" 1. ref 是模板渲染上下文的顶层属性时才适用自动“解包”。 例如， object 是顶层属性，但 object.foo 不是。 "),r("br"),l(" 2.当一个 ref 被嵌套在一个响应式对象中，作为属性被访问或更改时，它会自动解包，因此会表现得和一般的属性一样 ")],-1)),S=m(()=>r("br",null,null,-1));function x(u,e,t,a,o,p){const n=I,f=w,d=k,C=E;return h(),g(y,null,[c(f,{title:"ref(<input>)",column:1},{default:s(()=>[c(n,{label:"参数"},{default:s(()=>[l(" 任意值 any ")]),_:1}),c(n,{label:"返回"},{default:s(()=>[l(i("{value: <input>} 的响应式代理"))]),_:1}),c(n,{label:"使用"},{default:s(()=>[l(" 被自动解包时，直接使用，其余时刻使用需要使用"+i("<ref>.value")+"的形式 ",1)]),_:1}),c(n,{label:"解包场景"},{default:s(()=>[j]),_:1})]),_:1}),c(C,{code:u.code,title:"Ref.vue",toc:"language-html"},{default:s(()=>[r("div",null,[r("p",null,i("count="+u.count),1),c(d,{onClick:u.incresement},{default:s(()=>[l("+1")]),_:1},8,["onClick"]),S,c(d,{onClick:u.decresement},{default:s(()=>[l("-1")]),_:1},8,["onClick"])])]),_:1},8,["code"])],64)}const M=D(_,[["render",x],["__scopeId","data-v-d68bac99"]]);export{M as default};
