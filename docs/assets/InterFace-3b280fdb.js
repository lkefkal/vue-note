import{_ as d}from"./PCodeBlock-99961c7b.js";import{P as m}from"./PCodeBlock-976c40f2.js";import{V as _,O as f,_ as g,o as u,c as y,b as c,e as i,F as b,p as P,d as h,t as v}from"./index-798c73d0.js";import"./CleanCode-3fcef446.js";var T=Object.defineProperty,w=Object.getOwnPropertyDescriptor,A=(e,a,o,r)=>{for(var n=r>1?void 0:r?w(a,o):a,s=e.length-1,t;s>=0;s--)(t=e[s])&&(n=(r?t(a,o,n):t(n))||n);return r&&n&&T(a,o,n),n};let p=class extends _{get interfaceDeclare(){return`
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
    `}};p=A([f({components:{PCodeBlock:m}})],p);const l=e=>(P("data-v-13d2f1a0"),e=e(),h(),e),B=l(()=>i("p",null,"1. 接口声明",-1)),D=l(()=>i("p",null,"2. 接口与类型别名",-1)),I=l(()=>i("pre",null,v(`  类型别名和接口非常相似，在大多数情况下你可以在它们之间自由选择。 
  几乎所有的 interface 功能都可以在 type 中使用，
  关键区别在于不能重新开放类型以添加新的属性，而接口始终是可扩展的。`),-1)),O={class:"ctn"};function S(e,a,o,r,n,s){const t=d;return u(),y(b,null,[B,c(t,{code:e.interfaceDeclare,toc:"language-js",inDisplay:""},null,8,["code"]),D,I,i("div",O,[c(t,{code:e.interfaceAndTypeLeft,toc:"language-typescript",title:"interface",inDisplay:""},null,8,["code"]),c(t,{code:e.interfaceAndTypeRight,toc:"language-typescript",title:"type",inDisplay:""},null,8,["code"])])],64)}const $=g(p,[["render",S],["__scopeId","data-v-13d2f1a0"]]);export{$ as default};
