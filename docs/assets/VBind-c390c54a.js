import{m as n,o as r,b as c,f as s,w as o,F as d,i as t,d as e}from"./index-53337f56.js";import{E as u,a as p}from"./el-descriptions-item-876ec5ff.js";import{C as _}from"./CodeBlock-d893ee88.js";const b=e("br",null,null,-1),m=e("br",null,null,-1),v=e("br",null,null,-1),f=e("br",null,null,-1),h=e("br",null,null,-1),g=e("br",null,null,-1),y=`
<!-- 绑定 attribute -->
<img v-bind:src="imageSrc" />

<!-- 动态 attribute 名 -->
<button v-bind:[key]="value"></button>

<!-- 缩写 -->
<img :src="imageSrc" />

<!-- 缩写形式的动态 attribute 名 -->
<button :[key]="value"></button>

<!-- 内联字符串拼接 -->
<img :src="'/path/to/images/' + fileName" />

<!-- class 绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]"></div>

<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- 绑定对象形式的 attribute -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- prop 绑定。“prop” 必须在子组件中已声明。 -->
<MyComponent :prop="someThing" />

<!-- 传递子父组件共有的 prop -->
<MyComponent v-bind="$props" />

<!-- XLink -->
<svg><a :xlink:special="foo"></a></svg>
`,D={__name:"VBind",setup(B){const i=n([{code:y,fileName:"VBind.vue"}]);return(k,C)=>{const l=p,a=u;return r(),c(d,null,[s(a,{title:"v-bind",column:1},{default:o(()=>[s(l,{label:"用法:"},{default:o(()=>[b,t(" 1. 将 attribute 绑定到表达式。动态地更新所有或者一些 attribute，或者当一个 attribute 存在时，使用它的值。 "),m,t(' 2. 组件传参，传递进组件的参数必须写为 :prop="value" 的形式，否则会被当做字符串处理。 ')]),_:1}),s(l,{label:"简写"},{default:o(()=>[t(" ' : ' ")]),_:1}),s(l,{label:"修饰符"},{default:o(()=>[v,t(" .camel - 将短横线命名的 attribute 转变为驼峰式命名。"),f,t(" .prop - 强制绑定为 DOM property。"),h,t(" .attr - 强制绑定为 DOM attribute。"),g]),_:1})]),_:1}),s(_,{info:i.value},null,8,["info"])],64)}}};export{D as default};
