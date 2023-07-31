var B=Object.defineProperty;var g=(u,e,t)=>e in u?B(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t;var E=(u,e,t)=>(g(u,typeof e!="symbol"?e+"":e,t),t);import{_ as f}from"./PCodeBlockDisplay-bd57ee89.js";import{V as w,O as V,_ as A,o as d,c as F,b as n,w as s,F as C,h as c,t as m,e as o,i as y,v as k,g as N,a as O,E as P}from"./index-f712dfdc.js";import{E as $,a as x}from"./el-descriptions-item-808b2f64.js";import{a as j}from"./axios-4a70c6fc.js";import"./PCodeBlock-d732f568.js";import"./CleanCode-98073b35.js";var U=Object.defineProperty,W=Object.getOwnPropertyDescriptor,T=(u,e,t,r)=>{for(var l=r>1?void 0:r?W(e,t):e,i=u.length-1,a;i>=0;i--)(a=u[i])&&(l=(r?a(e,t,l):a(l))||l);return r&&l&&U(e,t,l),l};let _=class extends w{constructor(){super(...arguments);E(this,"count",0);E(this,"users","")}get a(){return 1}get code(){return`
        <scripts setup>
        import { watch, ref } from 'vue';
        import { UserName } from "@/api/user.js"
        // a不是响应式对象，watch无法监听其状态
        let a = 0
        // count是响应式对象，watch可以监听其状态
        let count = ref(0)
        let users = ref('')

        watch(() => a, async (newVal, oldVal) => {
          console.log(newVal, oldVal)
        })
        watch(count, async (newVal, oldVal) => {
          if(count.value <= 0){
            userName.value = ''
            return
          }else{
            axios.get('/api/user/'+this.count)
            .then(res => {
              this.users = res.data.data
            })
            .catch(err => {
              console.log(err)
            })
          }
        })
        <\/scripts>

        <template>
          <div>
            <el-button @click="a++">{{ 'a=' + a }}</el-button>
            <br/>
            <label for="user">输入人数:</label>
            <input v-model="count" type="number" name="user"/>
            <p v-if="count<=0">请输入人数，人数不得小于1</p>
            <p v-for="(user,idx) in users" :key="idx">{{ user.name }}</p>
          </div>
        </template>
        `}};_=T([V({components:{PCodeBlockDisplay:f},watch:{a(u,e,t){console.log(u,e)},count(u,e){if(this.count<=0){this.users="";return}else j.get("/api/user/"+u).then(t=>{this.users=t.data.data}).catch(t=>{console.log(t)})}}})],_);const I=o("br",null,null,-1),L=o("br",null,null,-1),M=o("br",null,null,-1),S=o("br",null,null,-1),q=o("br",null,null,-1),z=o("label",{for:"user"},"输入人数:",-1),G=o("br",null,null,-1),H={key:0};function J(u,e,t,r,l,i){const a=x,h=$,D=P,b=f;return d(),F(C,null,[n(h,{title:"watch(<input>,callback((<oldVal>, <newVal>) => {}))",column:1},{default:s(()=>[n(a,{label:"参数"},{default:s(()=>[I,c(" 1. "+m("<input>")+"可以是一个响应式对象，也可以是一个getter函数"),L,c(" 2. callback()函数接收两个参数，分别是旧值和新值"),M]),_:1}),n(a,{label:"返回"},{default:s(()=>[c(" 一个停止侦听函数，调用它可以停止侦听 ")]),_:1}),n(a,{label:"使用"},{default:s(()=>[c(" 可以监听一个响应式对象的变化，也可以监听一个getter函数的变化，当监听的对象发生变化时，callback()函数会被调用 ")]),_:1})]),_:1}),n(b,{code:u.code,title:"Computed.vue",toc:"language-html"},{default:s(()=>[o("div",null,[n(D,{name:"unChangableBtn",onClick:e[0]||(e[0]=p=>u.a++)},{default:s(()=>[c(m("a="+u.a),1)]),_:1}),S,q,z,G,y(o("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=p=>u.count=p),name:"user"},null,512),[[k,u.count]]),(d(!0),F(C,null,N(u.users,(p,v)=>(d(),F("p",{key:v},m(p.name),1))),128)),u.count<=0?(d(),F("p",H,"人数不能小于1")):O("",!0)])]),_:1},8,["code"])],64)}const tu=A(_,[["render",J]]);export{tu as default};
