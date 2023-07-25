import{_ as m}from"./PCodeBlock-fe0cdc57.js";import{P as p}from"./PCodeBlock-546fd375.js";import{V as l,O as i,_,o as u,c as f,b as g,F as P,e as d}from"./index-5394bb4e.js";import"./el-button-8bc888af.js";import"./use-form-common-props-a55f9cf8.js";var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,O=(a,n,t,r)=>{for(var e=r>1?void 0:r?v(n,t):n,s=a.length-1,o;s>=0;s--)(o=a[s])&&(e=(r?o(n,t,e):o(e))||e);return r&&e&&b(n,t,e),e};let c=class extends l{get interfaceDeclare(){return`
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


    `}};c=O([i({components:{PCodeBlock:p}})],c);const y=d("p",null,"接口声明",-1);function B(a,n,t,r,e,s){const o=m;return u(),f(P,null,[y,g(o,{code:a.interfaceDeclare,toc:"language-js",inDisplay:""},null,8,["code"])],64)}const h=_(c,[["render",B]]);export{h as default};
