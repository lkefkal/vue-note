var v=Object.defineProperty;var E=(t,e,u)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[e]=u;var i=(t,e,u)=>(E(t,typeof e!="symbol"?e+"":e,u),u);import{_ as p}from"./PCodeBlockDisplay-078fc664.js";import{V as F,O as C,_ as D,o as B,c as b,b as s,w as c,F as g,h as r,e as O,t as P}from"./index-3405d147.js";import{E as h}from"./el-button-b1bdf878.js";import{E as y,a as S}from"./el-descriptions-item-ef5f4155.js";import"./PCodeBlock-8b9617ef.js";import"./use-form-common-props-8713072b.js";var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,R=(t,e,u,n)=>{for(var o=n>1?void 0:n?x(e,u):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(o=(n?a(e,u,o):a(o))||o);return n&&o&&w(e,u,o),o};let _=class extends F{constructor(){super(...arguments);i(this,"state",{count:0});i(this,"addState",()=>{this.state.count+=1})}get code(){return`
        <scripts setup>
        import { reactive } from 'vue'
        let state = reactive({
          count: 0
        })
        const addState = () => {
          state.count += 1
        }
        <\/scripts>

        <template>
          <button @click="addState">{{ 'state=' + state}}</button>
        </template>
        `}};_=R([C({components:{PCodeBlockDisplay:p}})],_);function V(t,e,u,n,o,l){const a=S,d=y,m=h,f=p;return B(),b(g,null,[s(d,{title:"reactive()",column:1},{default:c(()=>[s(a,{label:"参数"},{default:c(()=>[r(" 对象 Object ")]),_:1}),s(a,{label:"返回"},{default:c(()=>[r(" 对象的响应式代理 ")]),_:1}),s(a,{label:"使用"},{default:c(()=>[r(" 与JS中 new Proxy() 的使用方法相同，vue会根据组件中对reactive变量的引用自动设置handler ")]),_:1})]),_:1}),s(f,{code:t.code,title:"Reactive.vue",toc:"language-js"},{default:c(()=>[O("div",null,[s(m,{onClick:t.addState},{default:c(()=>[r(P("state="+t.state.count),1)]),_:1},8,["onClick"])])]),_:1},8,["code"])],64)}const q=D(_,[["render",V],["__scopeId","data-v-dfc63814"]]);export{q as default};
