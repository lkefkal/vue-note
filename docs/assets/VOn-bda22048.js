import{m as i,o as c,c as r,b as n,w as e,F as _,h as t,e as o}from"./index-930a1cec.js";import{E as a,a as b}from"./el-descriptions-item-df3093e6.js";import{_ as d}from"./CodeBlock-5fcb419f.js";import"./use-form-common-props-3cf71636.js";const p=o("br",null,null,-1),h=o("br",null,null,-1),m=o("br",null,null,-1),v=o("br",null,null,-1),f=o("br",null,null,-1),k=o("br",null,null,-1),T=o("br",null,null,-1),E=o("br",null,null,-1),V=o("br",null,null,-1),g=o("br",null,null,-1),x=o("br",null,null,-1),D=`
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
`,C={__name:"VOn",setup(N){const s=i([{code:D,fileName:"VOn.vue"}]);return(w,y)=>{const l=b,u=a;return c(),r(_,null,[n(u,{title:"v-on",column:1},{default:e(()=>[n(l,{label:"用法:"},{default:e(()=>[t(" 给元素绑定事件监听器 ")]),_:1}),n(l,{label:"简写"},{default:e(()=>[t(" ' @ ' ")]),_:1}),n(l,{label:"修饰符"},{default:e(()=>[p,t(" .stop - 调用 event.stopPropagation()。"),h,t(" .prevent - 调用 event.preventDefault()。"),m,t(" .capture - 在捕获模式添加事件监听器。"),v,t(" .self - 只有事件从元素本身发出才触发处理函数。"),f,t(" .{keyAlias} - 只在某些按键下触发处理函数。"),k,t(" .once - 最多触发一次处理函数。"),T,t(" .left - 只在鼠标左键事件触发处理函数。"),E,t(" .right - 只在鼠标右键事件触发处理函数。"),V,t(" .middle - 只在鼠标中键事件触发处理函数。"),g,t(" .passive - 通过 { passive: true } 附加一个 DOM 事件。"),x]),_:1})]),_:1}),n(d,{info:s.value},null,8,["info"])],64)}}};export{C as default};
