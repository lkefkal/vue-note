var f=Object.defineProperty;var E=(t,e,u)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[e]=u;var _=(t,e,u)=>(E(t,typeof e!="symbol"?e+"":e,u),u);import{_ as p}from"./PCodeBlockDisplay-478a3310.js";import{V as F,O as C,_ as D,o as B,c as b,b as s,w as c,F as g,h as r,e as O,t as P,E as h}from"./index-798c73d0.js";import{E as y,a as S}from"./el-descriptions-item-5920010a.js";import"./PCodeBlock-99961c7b.js";import"./CleanCode-3fcef446.js";var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,R=(t,e,u,n)=>{for(var a=n>1?void 0:n?x(e,u):e,l=t.length-1,o;l>=0;l--)(o=t[l])&&(a=(n?o(e,u,a):o(a))||a);return n&&a&&w(e,u,a),a};let i=class extends F{constructor(){super(...arguments);_(this,"state",{count:0});_(this,"addState",()=>{this.state.count+=1})}get code(){return`
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
        `}};i=R([C({components:{PCodeBlockDisplay:p}})],i);function V(t,e,u,n,a,l){const o=S,d=y,m=h,v=p;return B(),b(g,null,[s(d,{title:"reactive()",column:1},{default:c(()=>[s(o,{label:"参数"},{default:c(()=>[r(" 对象 Object ")]),_:1}),s(o,{label:"返回"},{default:c(()=>[r(" 对象的响应式代理 ")]),_:1}),s(o,{label:"使用"},{default:c(()=>[r(" 与JS中 new Proxy() 的使用方法相同，vue会根据组件中对reactive变量的引用自动设置handler ")]),_:1})]),_:1}),s(v,{code:t.code,title:"Reactive.vue",toc:"language-js"},{default:c(()=>[O("div",null,[s(m,{onClick:t.addState},{default:c(()=>[r(P("state="+t.state.count),1)]),_:1},8,["onClick"])])]),_:1},8,["code"])],64)}const T=D(i,[["render",V],["__scopeId","data-v-dfc63814"]]);export{T as default};
