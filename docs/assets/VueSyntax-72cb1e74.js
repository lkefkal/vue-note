import{_ as u}from"./PCodeBlock-cc9a4dce.js";import{V as _,O as m,_ as i,o as f,c as v,b as d,F as h,p as g,d as y,e as p}from"./index-97cdd087.js";import"./el-button-d0f18651.js";import"./use-form-item-c4f8e6f7.js";import"./use-form-common-props-00f314c1.js";var W=Object.defineProperty,x=Object.getOwnPropertyDescriptor,V=(e,s,r,l)=>{for(var o=l>1?void 0:l?x(s,r):s,a=e.length-1,t;a>=0;a--)(t=e[a])&&(o=(l?t(s,r,o):t(o))||o);return l&&o&&W(s,r,o),o};let c=class extends _{get code1(){return`
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
        `}};c=V([m({components:{PCodeBlock:u}})],c);const n=e=>(g("data-v-8e7da5d5"),e=e(),y(),e),H=n(()=>p("h1",null,"模板语法",-1)),S=n(()=>p("h1",null,"SFC的使用",-1)),O=n(()=>p("div",{style:{padding:"1.5rem"}},[p("h1",null,"书写风格/细节"),p("p",null,"组件命名使用PascalCase，属性命名使用camelCase")],-1));function P(e,s,r,l,o,a){const t=u;return f(),v(h,null,[H,d(t,{code:e.code1},null,8,["code"]),S,d(t,{code:e.code2},null,8,["code"]),O],64)}const w=i(c,[["render",P],["__scopeId","data-v-8e7da5d5"]]);export{w as default};
