import{_ as D}from"./PCodeBlock-0aaf71d7.js";import{V as _,O as b,_ as m,o as v,c as F,b as s,w as r,F as f,h as i,e as E,t as B}from"./index-7c1d77fb.js";import{E as h,a as A}from"./el-descriptions-item-1b25d40c.js";import{P as C}from"./PCodeBlock-5f2aa144.js";import"./CleanCode-488d4e63.js";var T=Object.defineProperty,O=Object.getOwnPropertyDescriptor,k=(e,o,l,n)=>{for(var u=n>1?void 0:n?O(o,l):o,c=e.length-1,t;c>=0;c--)(t=e[c])&&(u=(n?t(o,l,u):t(u))||u);return n&&u&&T(o,l,u),u};let a=class extends _{get code(){return`
        <!-- 方法处理函数 -->
        <button v-on:click="doThis"></button>

        <!-- 动态事件 -->
        <button v-on:[event]="doThis"></button>

        <!-- 内联声明 -->
        <button v-on:click="doThat('hello', $event)"></button>

        <!-- 缩写 -->
        <button @click="doThis"></button>

        <!-- 使用缩写的动态事件 -->
        <button @[event]="doThis"></button>

        <!-- 停止传播 -->
        <button @click.stop="doThis"></button>

        <!-- 阻止默认事件 -->
        <button @click.prevent="doThis"></button>

        <!-- 不带表达式地阻止默认事件 -->
        <form @submit.prevent></form>

        <!-- 链式调用修饰符 -->
        <button @click.stop.prevent="doThis"></button>

        <!-- 按键用于 keyAlias 修饰符-->
        <input @keyup.enter="onEnter" />

        <!-- 点击事件将最多触发一次 -->
        <button v-on:click.once="doThis"></button>

        <!-- 对象语法 -->
        <button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
      `}};a=k([b({components:{PCodeBlock:C}})],a);const V=E("br",null,null,-1);function g(e,o,l,n,u,c){const t=A,p=h,d=D;return v(),F(f,null,[s(p,{title:"v-on",column:1},{default:r(()=>[s(t,{label:"用法:"},{default:r(()=>[i(" 给元素绑定事件监听器 ")]),_:1}),s(t,{label:"简写"},{default:r(()=>[i(" ' @ ' ")]),_:1}),s(t,{label:"修饰符"},{default:r(()=>[V,E("pre",null,"  "+B(`.stop - 调用 event.stopPropagation()
  .prevent - 调用 event.preventDefault()
  .capture - 在捕获模式添加事件监听器
  .self - 只有事件从元素本身发出才触发处理函数
  .{keyAlias} - 只在某些按键下触发处理函数
  .once - 最多触发一次处理函数
  .left - 只在鼠标左键事件触发处理函数
  .right - 只在鼠标右键事件触发处理函数
  .middle - 只在鼠标中键事件触发处理函数
  .passive - 通过 { passive: true } 附加一个 DOM 事件`)+`
  `,1)]),_:1})]),_:1}),s(d,{code:e.code,title:"VOn.vue",toc:"language-html"},null,8,["code"])],64)}const j=m(a,[["render",g]]);export{j as default};
