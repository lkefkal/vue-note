import{g as i,o as c,c as r,d as o,w as e,F as _,k as t,a as n}from"./index-5fefc914.js";import{E as a,a as d}from"./el-descriptions-item-84a34e89.js";import{_ as b}from"./CodeBlock-f667b5da.js";const p=n("br",null,null,-1),h=n("br",null,null,-1),m=n("br",null,null,-1),v=n("br",null,null,-1),f=n("br",null,null,-1),k=n("br",null,null,-1),T=n("br",null,null,-1),g=n("br",null,null,-1),E=n("br",null,null,-1),V=n("br",null,null,-1),x=n("br",null,null,-1),D=`
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
`,F={__name:"VOn",setup(N){const s=i([{code:D,fileName:"VOn.vue"}]);return(w,y)=>{const l=d,u=a;return c(),r(_,null,[o(u,{title:"v-on",column:1},{default:e(()=>[o(l,{label:"用法:"},{default:e(()=>[t(" 给元素绑定事件监听器 ")]),_:1}),o(l,{label:"简写"},{default:e(()=>[t(" ' @ ' ")]),_:1}),o(l,{label:"修饰符"},{default:e(()=>[p,t(" .stop - 调用 event.stopPropagation()。"),h,t(" .prevent - 调用 event.preventDefault()。"),m,t(" .capture - 在捕获模式添加事件监听器。"),v,t(" .self - 只有事件从元素本身发出才触发处理函数。"),f,t(" .{keyAlias} - 只在某些按键下触发处理函数。"),k,t(" .once - 最多触发一次处理函数。"),T,t(" .left - 只在鼠标左键事件触发处理函数。"),g,t(" .right - 只在鼠标右键事件触发处理函数。"),E,t(" .middle - 只在鼠标中键事件触发处理函数。"),V,t(" .passive - 通过 { passive: true } 附加一个 DOM 事件。"),x]),_:1})]),_:1}),o(b,{info:s.value},null,8,["info"])],64)}}};export{F as default};
