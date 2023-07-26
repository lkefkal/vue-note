import{_ as d}from"./PCodeBlock-46730204.js";import{V as b,O as m,_ as v,o as B,c as E,b as i,w as c,F as C,h as e,e as o}from"./index-cd3cb997.js";import{E as A,a as f}from"./el-descriptions-item-197232c9.js";import"./el-button-74933914.js";import"./use-form-common-props-55839fd0.js";import"./CleanCode-931345d6.js";var D=Object.defineProperty,h=Object.getOwnPropertyDescriptor,g=(s,l,r,n)=>{for(var u=n>1?void 0:n?h(l,r):l,a=s.length-1,t;a>=0;a--)(t=s[a])&&(u=(n?t(l,r,u):t(u))||u);return n&&u&&D(l,r,u),u};let p=class extends b{get code(){return`
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
      `}};p=g([m({components:{PCodeBlock:d}})],p);const y=o("br",null,null,-1),O=o("br",null,null,-1),V=o("br",null,null,-1),P=o("br",null,null,-1),x=o("br",null,null,-1),$=o("br",null,null,-1);function j(s,l,r,n,u,a){const t=f,_=A,F=d;return B(),E(C,null,[i(_,{title:"v-bind",column:1},{default:c(()=>[i(t,{label:"用法:"},{default:c(()=>[y,e(" 1. 将 attribute 绑定到表达式。动态地更新所有或者一些 attribute，或者当一个 attribute 存在时，使用它的值。 "),O,e(' 2. 组件传参，传递进组件的参数必须写为 :prop="value" 的形式，否则会被当做字符串处理。 ')]),_:1}),i(t,{label:"简写"},{default:c(()=>[e(" ' : ' ")]),_:1}),i(t,{label:"修饰符"},{default:c(()=>[V,e(" .camel - 将短横线命名的 attribute 转变为驼峰式命名。"),P,e(" .prop - 强制绑定为 DOM property。"),x,e(" .attr - 强制绑定为 DOM attribute。"),$]),_:1})]),_:1}),i(F,{code:s.code,title:"VBind.vue",toc:"language-html"},null,8,["code"])],64)}const I=v(p,[["render",j]]);export{I as default};
