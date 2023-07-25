var b=Object.defineProperty;var B=(u,e,t)=>e in u?b(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t;var p=(u,e,t)=>(B(u,typeof e!="symbol"?e+"":e,t),t);import{_ as E}from"./PCodeBlockDisplay-2b167460.js";import{V as v,O as A,_ as D,o as h,c as g,b as c,w as s,F as y,h as l,t as _,e as r,p as O,d as P}from"./index-5394bb4e.js";import{E as k}from"./el-button-8bc888af.js";import{E as w,a as I}from"./el-descriptions-item-6807e517.js";import"./PCodeBlock-fe0cdc57.js";import"./use-form-common-props-a55f9cf8.js";var R=Object.defineProperty,V=Object.getOwnPropertyDescriptor,$=(u,e,t,a)=>{for(var o=a>1?void 0:a?V(e,t):e,F=u.length-1,n;F>=0;F--)(n=u[F])&&(o=(a?n(e,t,o):n(o))||o);return a&&o&&R(e,t,o),o};let i=class extends v{constructor(){super(...arguments);p(this,"count",0);p(this,"incresement",()=>{this.count+=1});p(this,"decresement",()=>{this.count-=1})}get code(){return`
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
        `}};i=$([A({components:{PCodeBlockDisplay:E}})],i);const f=u=>(O("data-v-d68bac99"),u=u(),P(),u),j=f(()=>r("div",null,[l(" 1. ref 是模板渲染上下文的顶层属性时才适用自动“解包”。 例如， object 是顶层属性，但 object.foo 不是。 "),r("br"),l(" 2.当一个 ref 被嵌套在一个响应式对象中，作为属性被访问或更改时，它会自动解包，因此会表现得和一般的属性一样 ")],-1)),S=f(()=>r("br",null,null,-1));function x(u,e,t,a,o,F){const n=I,m=w,d=k,C=E;return h(),g(y,null,[c(m,{title:"ref(<input>)",column:1},{default:s(()=>[c(n,{label:"参数"},{default:s(()=>[l(" 任意值 any ")]),_:1}),c(n,{label:"返回"},{default:s(()=>[l(_("{value: <input>} 的响应式代理"))]),_:1}),c(n,{label:"使用"},{default:s(()=>[l(" 被自动解包时，直接使用，其余时刻使用需要使用"+_("<ref>.value")+"的形式 ",1)]),_:1}),c(n,{label:"解包场景"},{default:s(()=>[j]),_:1})]),_:1}),c(C,{code:u.code,title:"Ref.vue",toc:"language-html"},{default:s(()=>[r("div",null,[r("p",null,_("count="+u.count),1),c(d,{onClick:u.incresement},{default:s(()=>[l("+1")]),_:1},8,["onClick"]),S,c(d,{onClick:u.decresement},{default:s(()=>[l("-1")]),_:1},8,["onClick"])])]),_:1},8,["code"])],64)}const L=D(i,[["render",x],["__scopeId","data-v-d68bac99"]]);export{L as default};
