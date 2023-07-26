import{_ as d}from"./PCodeBlock-46730204.js";import{P as m}from"./PCodeBlock-7b046c20.js";import{V as _,O as f,_ as g,o as u,c as y,b as i,e as c,F as b,p as P,d as h,t as v}from"./index-cd3cb997.js";import"./el-button-74933914.js";import"./use-form-common-props-55839fd0.js";import"./CleanCode-931345d6.js";var T=Object.defineProperty,w=Object.getOwnPropertyDescriptor,A=(e,a,o,r)=>{for(var n=r>1?void 0:r?w(a,o):a,s=e.length-1,t;s>=0;s--)(t=e[s])&&(n=(r?t(a,o,n):t(n))||n);return r&&n&&T(a,o,n),n};let p=class extends _{get interfaceDeclare(){return`
        // 1. 定义接口
        interface Person {
          name: string;
          age: number;
        }
        // 2. 使用接口
        let tom: Person = {
          name: 'Tom',
          age: 25
        };

        // 3. 可选属性
        interface Person {
          name: string;
          age?: number;
        }
        let tom: Person = {
          name: 'Tom'
        };

        // 4. 任意属性
        interface Person {
          name: string;
          age?: number;
          [propName: string]: any;
        }
        let tom: Person = {
          name: 'Tom',
          abc: 'abc'
        };

        // 5. 只读属性
        interface Person {
          readonly id: number;
          name: string;
          age?: number;
          [propName: string]: any;
        }
        let tom: Person = {
          id: 89757,
          name: 'Tom',
        };


    `}get interfaceAndTypeLeft(){return`
        // Interface
        interface Animal {
          name: string
        }
        interface Bear extends Animal {
          honey: boolean
        }
        
        const bear = getBear() 
        bear.name
        bear.honey

        // 向现有接口添加属性
        interface Window {
          title: string
        }
        interface Window {
          ts: import("typescript")
        }
        const src = 'const a = "Hello World"'
        window.ts.transpileModule(src, {})
    `}get interfaceAndTypeRight(){return`
        // Type
        type Animal = {
          name: string
        }
        type Bear = Animal & {
          honey: boolean
        }

        const bear = getBear()
        bear.name
        bear.honey

        // 类型创建后不能更改
        type Window = {
          title: string
        }
        
        type Window = {
          ts: TypeScriptAPI
        }
        // Error: Duplicate identifier 
    `}};p=A([f({components:{PCodeBlock:m}})],p);const l=e=>(P("data-v-ad4ac25c"),e=e(),h(),e),B=l(()=>c("p",null,"1. 接口声明",-1)),D=l(()=>c("p",null,"2. 接口与类型别名",-1)),I=l(()=>c("pre",null,v(`  类型别名和接口非常相似，在大多数情况下你可以在它们之间自由选择。 
  几乎所有的 interface 功能都可以在 type 中使用，
  关键区别在于不能重新开放类型以添加新的属性，而接口始终是可扩展的。`),-1)),O={class:"ctn"};function j(e,a,o,r,n,s){const t=d;return u(),y(b,null,[B,i(t,{code:e.interfaceDeclare,toc:"language-js",inDisplay:""},null,8,["code"]),D,I,c("div",O,[i(t,{code:e.interfaceAndTypeLeft,toc:"language-js",title:"interface",inDisplay:""},null,8,["code"]),i(t,{code:e.interfaceAndTypeRight,toc:"language-js",title:"type",inDisplay:""},null,8,["code"])])],64)}const C=g(p,[["render",j],["__scopeId","data-v-ad4ac25c"]]);export{C as default};
