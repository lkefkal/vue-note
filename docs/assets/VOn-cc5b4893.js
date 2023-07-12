import{m as i,o as c,b as r,f as n,w as e,F as a,i as t,d as o}from"./index-4fc333d3.js";import{E as _,a as d}from"./el-descriptions-item-9a45a114.js";import{C as b}from"./CodeBlock-94e3898c.js";const p=o("br",null,null,-1),h=o("br",null,null,-1),m=o("br",null,null,-1),f=o("br",null,null,-1),v=o("br",null,null,-1),k=o("br",null,null,-1),T=o("br",null,null,-1),E=o("br",null,null,-1),V=o("br",null,null,-1),x=o("br",null,null,-1),B=o("br",null,null,-1),D=`
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
`,A={__name:"VOn",setup(N){const s=i([{code:D,fileName:"VOn.vue"}]);return(g,w)=>{const l=d,u=_;return c(),r(a,null,[n(u,{title:"v-on",column:1},{default:e(()=>[n(l,{label:"用法:"},{default:e(()=>[t(" 给元素绑定事件监听器 ")]),_:1}),n(l,{label:"简写"},{default:e(()=>[t(" ' @ ' ")]),_:1}),n(l,{label:"修饰符"},{default:e(()=>[p,t(" .stop - 调用 event.stopPropagation()。"),h,t(" .prevent - 调用 event.preventDefault()。"),m,t(" .capture - 在捕获模式添加事件监听器。"),f,t(" .self - 只有事件从元素本身发出才触发处理函数。"),v,t(" .{keyAlias} - 只在某些按键下触发处理函数。"),k,t(" .once - 最多触发一次处理函数。"),T,t(" .left - 只在鼠标左键事件触发处理函数。"),E,t(" .right - 只在鼠标右键事件触发处理函数。"),V,t(" .middle - 只在鼠标中键事件触发处理函数。"),x,t(" .passive - 通过 { passive: true } 附加一个 DOM 事件。"),B]),_:1})]),_:1}),n(b,{info:s.value},null,8,["info"])],64)}}};export{A as default};
