import{_ as m}from"./PCodeBlock-8525a83b.js";import{V as f,O as v,_ as F,r as h,o as a,c as i,b as p,a as g,e as c,F as C,t as _}from"./index-c84bce2d.js";import"./CleanCode-89cc0da2.js";var E=Object.defineProperty,b=Object.getOwnPropertyDescriptor,O=(t,n,u,s)=>{for(var e=s>1?void 0:s?b(n,u):n,r=t.length-1,o;r>=0;r--)(o=t[r])&&(e=(s?o(n,u,e):o(e))||e);return s&&e&&E(n,u,e),e};let l=class extends f{get isInHome(){return/\/component$/.test(this.$route.path)}get code1(){return`<scripts setup>
        import { ref } from 'vue'

        const count = ref(0)
        <\/scripts>

        <template>
          <button @click="count++">You clicked me {{ count }} times.</button>
        </template>
        `}get code2(){return`
      import { ref } from 'vue'
        export default {
          setup() {
            const count = ref(0)
            return { count }
          },
          template: \`
            <button @click="count++">
              You clicked me {{ count }} times.
            </button>
            \`
          // 或者 \`template: '#my-template-element'\`
        }
        `}};l=O([v({components:{PCodeBlock:m}})],l);const P={key:0,style:{padding:"0 1.5rem"}},$=c("h1",null," 组件基础 ",-1),j=c("p",null,"使用"+_("<script setup><\/script>")+"构建的vue组件",-1),A=c("p",null,"使用"+_("setup 函数")+"构建的js组件",-1),B={class:"router-ctn"};function V(t,n,u,s,e,r){const o=m,d=h("router-view");return a(),i(C,null,[t.isInHome?(a(),i("div",P,[$,j,p(o,{code:t.code1,title:"App.vue"},null,8,["code"]),A,p(o,{code:t.code2,title:"App.js",toc:"language-js"},null,8,["code"])])):g("",!0),c("div",B,[p(d)])],64)}const D=F(l,[["render",V]]);export{D as default};
