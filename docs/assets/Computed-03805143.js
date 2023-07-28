var E=Object.defineProperty;var v=(t,u,o)=>u in t?E(t,u,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[u]=o;var F=(t,u,o)=>(v(t,typeof u!="symbol"?u+"":u,o),o);import{_}from"./PCodeBlockDisplay-a1c91f84.js";import{V as D,O as B,_ as g,o as O,c as P,b as n,w as l,F as A,e,h as s,t as a,E as h}from"./index-d501c446.js";import{E as $,a as k}from"./el-descriptions-item-f550ee23.js";import"./PCodeBlock-d941e058.js";import"./CleanCode-72fe0760.js";var y=Object.defineProperty,V=Object.getOwnPropertyDescriptor,w=(t,u,o,d)=>{for(var c=d>1?void 0:d?V(u,o):u,i=t.length-1,p;i>=0;i--)(p=t[i])&&(c=(d?p(u,o,c):p(c))||c);return d&&c&&y(u,o,c),c};let C=class extends D{constructor(){super(...arguments);F(this,"count",0)}get a(){return 1}get b(){return this.a+1}get code1(){return`
        <scripts setup>
        import { computed } from 'vue'
        let a = 1
        const b = computed(() => a + 1)
        <\/scripts>

        <template>
          <div class="display">
            <p>{{ 'b=' + b }}</p>
            <p>{{ 'a=1' }}</p>
            // computed返回的是只读的ref
            // 所以无法直接修改其值
            <button @click="b++">+1</button>
            // a是普通变量
            // 所以computed无法监听到其变化
            <button @click="a++">+1</button>
          </div>
        </template>
        `}get doubleCount(){return this.count*2}set doubleCount(o){this.count=o/2}get countPlusOne(){return this.count+1}get code2(){return`
        <scripts setup>
        import { computed, ref } from 'vue'
        let count = ref(0)
        const countPlusOne = computed(() => count.value + 1)
        const doubleCount = computed(() => {
          get: () => count.value * 2
          /** 为computed设置setter */
          set: (val) => {
            count.value = val / 2
          }
        })
        const addCount = () => {
          count.value += 1
        }
        <\/scripts>

        <template>
          <div class="display">
            <p>{{ 'count=' + count }}</p>
            <p>{{ 'countPlusOne=' + countPlusOne }}</p>
            <p>{{ 'doubleCount=' + doubleCount }}</p>
            <button @click="count++">+1</button>
            <!-- computed返回的是只读ref，所以此按钮无效 -->
            <button @click="countPlusOne++">+1</button>
            <!-- 为computed设置了setter,所以可以直接修改其值-->
            <button @click="doubleCount++">+1</button>
          </div>
        </template>
        `}};C=w([B({components:{PCodeBlockDisplay:_}})],C);const N=e("div",null,[s(" 1. computed返回的是一个只读的ref对象，其value属性为函数返回值"),e("br"),s(" 2. computed的响应式体现在computed函数会在其依赖的ref对象发生变化时重新执行"),e("br"),s(" 3. 如果在初始化时手动为computed设置getter和setter，那么computed的值不在为只读 ")],-1),j=e("p",null,"非响应式对象",-1),I={class:"display"},S=e("p",null,a("a=1"),-1),T=e("br",null,null,-1),q=e("br",null,null,-1),z=e("br",null,null,-1),G=e("p",null,"响应式对象 & computed设置setter",-1),H={class:"display"},J=e("br",null,null,-1),K=e("br",null,null,-1);function L(t,u,o,d,c,i){const p=k,f=$,r=h,b=_;return O(),P(A,null,[n(f,{title:"computed(<input>)",column:1},{default:l(()=>[n(p,{label:"参数"},{default:l(()=>[s(" 函数 Function 作为 getter 函数 ")]),_:1}),n(p,{label:"返回"},{default:l(()=>[s(" 一个ref对象，其value属性为函数返回值 ")]),_:1}),n(p,{label:"使用"},{default:l(()=>[s(" 同ref ")]),_:1}),n(p,{label:"特性"},{default:l(()=>[N]),_:1})]),_:1}),j,n(b,{code:t.code1,title:"Computed.vue",toc:"language-html"},{default:l(()=>[e("div",I,[e("p",null,a("b="+t.b),1),S,n(r,{onClick:u[0]||(u[0]=m=>t.b++),name:"1st-btn"},{default:l(()=>[s("+1")]),_:1}),T,n(r,{onClick:u[1]||(u[1]=m=>t.a++)},{default:l(()=>[s("+1")]),_:1})])]),_:1},8,["code"]),q,z,G,n(b,{code:t.code2,title:"Computed.vue",toc:"language-html"},{default:l(()=>[e("div",H,[e("p",null,a("count="+t.count),1),e("p",null,a("countPlusOne="+t.countPlusOne),1),e("p",null,a("doubleCount="+t.doubleCount),1),n(r,{onClick:u[2]||(u[2]=m=>t.count++)},{default:l(()=>[s("count+1")]),_:1}),J,n(r,{onClick:u[3]||(u[3]=m=>t.countPlusOne++)},{default:l(()=>[s("countPlusOne+1")]),_:1}),K,n(r,{onClick:u[4]||(u[4]=m=>t.doubleCount++)},{default:l(()=>[s("doubleCount+1")]),_:1})])]),_:1},8,["code"])],64)}const Z=g(C,[["render",L]]);export{Z as default};
