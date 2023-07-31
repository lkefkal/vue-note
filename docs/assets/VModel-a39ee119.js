var C=Object.defineProperty;var v=(e,u,t)=>u in e?C(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t;var d=(e,u,t)=>(v(e,typeof u!="symbol"?u+"":u,t),t);import{_ as m}from"./PCodeBlockDisplay-bd57ee89.js";import{V as D,O as V,_ as b,o as h,c as A,b as n,w as r,F as g,h as i,t as _,e as p}from"./index-f712dfdc.js";import{E as O}from"./el-input-af9d1ae7.js";import{E as P,a as $}from"./el-descriptions-item-808b2f64.js";import"./PCodeBlock-d732f568.js";import"./CleanCode-98073b35.js";import"./event-9519ab40.js";var w=Object.defineProperty,y=Object.getOwnPropertyDescriptor,M=(e,u,t,s)=>{for(var l=s>1?void 0:s?y(u,t):u,a=e.length-1,o;a>=0;a--)(o=e[a])&&(l=(s?o(u,t,l):o(l))||l);return s&&l&&w(u,t,l),l};let c=class extends D{constructor(){super(...arguments);d(this,"input","")}get code(){return`
        <script setup>
        import { ref } from 'vue';
        const input = ref('')
        <\/scripts>

        <template>
          <p>input: {{ input }}</p>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <!--
            --等价于
            -- <el-input :value="input" @input="input = $event" placeholder="请输入内容"></el-input>
            -->
        </template>
        `}};c=M([V({components:{PCodeBlockDisplay:m}})],c);const x=p("br",null,null,-1),N=p("br",null,null,-1),j=p("br",null,null,-1),I=p("br",null,null,-1);function z(e,u,t,s,l,a){const o=$,E=P,f=O,B=m;return h(),A(g,null,[n(E,{title:"v-model",column:1},{default:r(()=>[n(o,{label:"用法:"},{default:r(()=>[i(" 在表单输入元素或组件上创建双向绑定 ")]),_:1}),n(o,{label:"适用范围"},{default:r(()=>[i(_(`<input>
          <select>
          <textarea>
          <component> // 自定义组件
          `))]),_:1}),n(o,{label:"修饰符"},{default:r(()=>[x,i(" .lazy - 监听 change 事件而不是 input"),N,i(" .number - 将输入的合法字符串转为数字"),j,i(" .trim - 移除输入内容两端空格"),I]),_:1})]),_:1}),n(B,{code:e.code,title:"VModel.vue",toc:"language-html"},{default:r(()=>[p("div",null,[p("p",null,"input: "+_(e.input),1),n(f,{modelValue:e.input,"onUpdate:modelValue":u[0]||(u[0]=F=>e.input=F),placeholder:"请输入内容"},null,8,["modelValue"])])]),_:1},8,["code"])],64)}const Q=b(c,[["render",z]]);export{Q as default};
