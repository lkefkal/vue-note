import{_ as u}from"./PCodeBlock-50e67812.js";import{V as _,O as m,_ as i,o as f,c as v,b as d,F as h,p as W,d as g,e as p}from"./index-d4bcb226.js";import"./CleanCode-cff502c5.js";var y=Object.defineProperty,x=Object.getOwnPropertyDescriptor,H=(e,l,r,s)=>{for(var t=s>1?void 0:s?x(l,r):l,a=e.length-1,o;a>=0;a--)(o=e[a])&&(t=(s?o(l,r,t):o(t))||t);return s&&t&&y(l,r,t),t};let c=class extends _{get code1(){return`
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
         * <script setup>
         * const msg = 'HelloWorld'
         * <\/script>
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
      `}get code2(){return`
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
        `}};c=H([m({components:{PCodeBlock:u}})],c);const n=e=>(W("data-v-67a05489"),e=e(),g(),e),V=n(()=>p("h1",null,"模板语法",-1)),S=n(()=>p("h1",null,"SFC的使用",-1)),O=n(()=>p("div",{style:{padding:"1.5rem"}},[p("h1",null,"书写风格/细节"),p("p",null,"组件命名使用PascalCase，属性命名使用camelCase")],-1));function P(e,l,r,s,t,a){const o=u;return f(),v(h,null,[V,d(o,{code:e.code1,title:"HelloWorld.vue"},null,8,["code"]),S,d(o,{code:e.code2,title:"App.vue"},null,8,["code"]),O],64)}const I=i(c,[["render",P],["__scopeId","data-v-67a05489"]]);export{I as default};
