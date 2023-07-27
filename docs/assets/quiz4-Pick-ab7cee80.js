import{_ as E}from"./PCodeBlock-8022f343.js";import{V as g,O as v,_ as P,o as r,c as p,i as $,aH as h,e as _,F as k,g as y,t as d,b as a,w as u}from"./index-9eba7189.js";import{a as I,E as O}from"./el-descriptions-item-552f52d1.js";import{P as w}from"./PCodeBlock-b97ad92b.js";import"./CleanCode-1b1e3292.js";var b=Object.defineProperty,C=Object.getOwnPropertyDescriptor,U=(e,o,l,n)=>{for(var t=n>1?void 0:n?C(o,l):o,c=e.length-1,s;c>=0;c--)(s=e[c])&&(t=(n?s(o,l,t):s(t))||t);return n&&t&&b(o,l,t),t};let m=class extends g{get code(){return`
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
    `}};m=U([v({components:{PCodeBlock:w},i18n:{messages:{"zh-CN":{QUESTION_TEXT:"不使用 Pick<T, K> ，实现 TS 内置的 Pick<T, K> 的功能。",REQUIRE_TEXT:"从类型 T 中选出符合 K 的属性，构造一个新的类型。"},en:{QUESTION_TEXT:"Implement the built-in Pick<T, K> generic without using it.",REQUIRE_TEXT:"Constructs a type by picking the set of properties K from T"}}},mounted(){console.log(this.$i18n.locale),console.log(this.$i18n.messages)}})],m);const D={class:"ctn"},N=["value"];function Q(e,o,l,n,t,c){const s=I,T=O,f=E;return r(),p("div",D,[$(_("select",{"onUpdate:modelValue":o[0]||(o[0]=i=>e.$i18n.locale=i),class:"ctn-selector"},[(r(!0),p(k,null,y(e.$i18n.availableLocales,i=>(r(),p("option",{key:`locale-${i}`,value:i},d(i),9,N))),128))],512),[[h,e.$i18n.locale]]),a(T,{column:1,title:"Pick"},{default:u(()=>[a(s,null,{default:u(()=>[_("p",null,d(e.$t("QUESTION_TEXT")),1)]),_:1}),a(s,null,{default:u(()=>[_("p",null,d(e.$t("REQUIRE_TEXT")),1)]),_:1})]),_:1}),a(f,{code:e.code,title:"template",toc:"language-typescript"},null,8,["code"])])}const V=P(m,[["render",Q],["__scopeId","data-v-6594c5d3"]]);export{V as default};
