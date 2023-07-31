import{_ as E}from"./PCodeBlock-50e67812.js";import{V as g,O as v,_ as P,o as p,c as _,i as h,c7 as b,e as r,F as I,g as $,t as d,b as a,w as u,p as w,d as y}from"./index-d4bcb226.js";import{a as k,E as O}from"./el-descriptions-item-09450749.js";import{P as S}from"./PCodeBlock-752e5398.js";import"./CleanCode-cff502c5.js";var C=Object.defineProperty,U=Object.getOwnPropertyDescriptor,D=(e,o,c,n)=>{for(var t=n>1?void 0:n?U(o,c):o,l=e.length-1,s;l>=0;l--)(s=e[l])&&(t=(n?s(o,c,t):s(t))||t);return n&&t&&C(o,c,t),t};let m=class extends g{get code(){return`
        interface Todo {
          title: string
          description: string
          completed: boolean
        }
        
        type TodoPreview = MyPick<Todo, 'title' | 'completed'>
        
        const todo: TodoPreview = {
            title: 'Clean room',
            completed: false,
        }
    `}};m=D([v({components:{PCodeBlock:S},i18n:{messages:{"zh-CN":{QUESTION_TEXT:"不使用 Pick<T, K> ，实现 TS 内置的 Pick<T, K> 的功能。",REQUIRE_TEXT:"从类型 T 中选出符合 K 的属性，构造一个新的类型。"},en:{QUESTION_TEXT:"Implement the built-in Pick<T, K> generic without using it.",REQUIRE_TEXT:"Constructs a type by picking the set of properties K from T"}}},mounted(){console.log(this.$i18n.locale),console.log(this.$i18n.messages)}})],m);const N=e=>(w("data-v-c6c55b9b"),e=e(),y(),e),Q={class:"ctn"},R=["value"],X=N(()=>r("textarea",{style:{width:"100%",height:"300px"}},null,-1));function B(e,o,c,n,t,l){const s=k,T=O,f=E;return p(),_("div",Q,[h(r("select",{"onUpdate:modelValue":o[0]||(o[0]=i=>e.$i18n.locale=i),class:"ctn-selector"},[(p(!0),_(I,null,$(e.$i18n.availableLocales,i=>(p(),_("option",{key:`locale-${i}`,value:i},d(i),9,R))),128))],512),[[b,e.$i18n.locale]]),a(T,{column:1,title:"Pick"},{default:u(()=>[a(s,null,{default:u(()=>[r("p",null,d(e.$t("QUESTION_TEXT")),1)]),_:1}),a(s,null,{default:u(()=>[r("p",null,d(e.$t("REQUIRE_TEXT")),1)]),_:1})]),_:1}),a(f,{code:e.code,title:"template",toc:"language-typescript"},null,8,["code"]),X])}const x=P(m,[["render",B],["__scopeId","data-v-c6c55b9b"]]);export{x as default};
