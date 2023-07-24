var v=Object.defineProperty;var E=(t,e,o)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var i=(t,e,o)=>(E(t,typeof e!="symbol"?e+"":e,o),o);import{_ as p}from"./PCodeBlockDisplay-6456b01e.js";import{V as F,O as C,_ as D,o as B,c as b,b as s,w as c,F as g,h as l,e as O,t as P}from"./index-930a1cec.js";import{E as h}from"./el-button-5f5d31aa.js";import{E as y,a as S}from"./el-descriptions-item-df3093e6.js";import"./PCodeBlock-ae39b7ae.js";import"./use-form-item-a868d19b.js";import"./use-form-common-props-3cf71636.js";var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,R=(t,e,o,n)=>{for(var u=n>1?void 0:n?x(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(u=(n?a(e,o,u):a(u))||u);return n&&u&&w(e,o,u),u};let _=class extends F{constructor(){super(...arguments);i(this,"state",{count:0});i(this,"addState",()=>{this.state.count+=1})}get code(){return`
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
        `}};_=R([C({components:{PCodeBlockDisplay:p}})],_);function V(t,e,o,n,u,r){const a=S,d=y,m=h,f=p;return B(),b(g,null,[s(d,{title:"reactive()",column:1},{default:c(()=>[s(a,{label:"参数"},{default:c(()=>[l(" 对象 Object ")]),_:1}),s(a,{label:"返回"},{default:c(()=>[l(" 对象的响应式代理 ")]),_:1}),s(a,{label:"使用"},{default:c(()=>[l(" 与JS中 new Proxy() 的使用方法相同，vue会根据组件中对reactive变量的引用自动设置handler ")]),_:1})]),_:1}),s(f,{code:t.code,title:"Reactive.vue",toc:"language-js"},{default:c(()=>[O("div",null,[s(m,{onClick:t.addState},{default:c(()=>[l(P("state="+t.state.count),1)]),_:1},8,["onClick"])])]),_:1},8,["code"])],64)}const z=D(_,[["render",V],["__scopeId","data-v-dfc63814"]]);export{z as default};
