var u=Object.defineProperty;var _=(e,o,t)=>o in e?u(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var r=(e,o,t)=>(_(e,typeof o!="symbol"?o+"":o,t),t);import{_ as d}from"./CodeBlock-f667b5da.js";import{V as m,O as i}from"./vue-class-component.esm-bundler-e8cf021b.js";import{_ as f,o as v,c as W,d as h,F as x,p as y,e as H,a as c}from"./index-5fefc914.js";var V=Object.defineProperty,g=Object.getOwnPropertyDescriptor,S=(e,o,t,l)=>{for(var s=l>1?void 0:l?g(o,t):o,p=e.length-1,a;p>=0;p--)(a=e[p])&&(s=(l?a(o,t,s):a(s))||s);return l&&s&&V(o,t,s),s};let n=class extends m{constructor(){super(...arguments);r(this,"code1",`
    /**
      * 显式定义setup
      */
    <script>
    export default {
      /**定义组件的名字*/
      name: 'HelloWorld',
      /**
       * setup函数
       * return中返回的数据和方法将会暴露在组件中，可以在模板中使用
       */
      setup() {
        return {
          msg:'HelloWorld'
        }
      }
    }
    <\/script>

    /**
     * 与上方写法等价
     * <scripts setup>
     * const msg = 'HelloWorld'
     * <\/scripts>
     */

    /**
     * template是组件的HTML块
     * 使用组件时，会替换掉组件标签，实际插入DOM的是template中的内容
     */
    <template>
    /** 插值语法是双层花括号 {{ }}， 内可使用js语法 */
      <p class="a">{{ msg.raplace(/oW/, 'o W') }}</p>
    </template>
    /**
     * style是组件的样式块
     * 与css语法相同
     */
    <style scoped>
      .a {
        color: red;
      }
    </style>
  `);r(this,"code2",`
    <template>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </template>

    <script>
    import HelloWorld from './path/to/HelloWorld.vue'
    export default {
      name: 'App',
      components: {
        HelloWorld
      }
    }
    <\/script>
    `);r(this,"info",[{title:"模板语法",code:this.code1,fileName:"HelloWorld.vue"},{title:"SFC的使用",code:this.code2,fileName:"Another.vue"}])}};n=S([i({components:{CodeBlock:d}})],n);const O=e=>(y("data-v-aa5b2447"),e=e(),H(),e),C=O(()=>c("div",{style:{padding:"1.5rem"}},[c("h1",null,"书写风格/细节"),c("p",null,"组件命名使用PascalCase，属性命名使用camelCase")],-1));function b(e,o,t,l,s,p){const a=d;return v(),W(x,null,[h(a,{info:e.info},null,8,["info"]),C],64)}const N=f(n,[["render",b],["__scopeId","data-v-aa5b2447"]]);export{N as default};
