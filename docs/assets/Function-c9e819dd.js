import{_ as a}from"./PCodeBlock-46730204.js";import{V as l,O as d,_ as i,o as f,c as m,b as p,F as b,e as _}from"./index-cd3cb997.js";import{P as y}from"./PCodeBlock-7b046c20.js";import"./el-button-74933914.js";import"./use-form-common-props-55839fd0.js";import"./CleanCode-931345d6.js";var x=Object.defineProperty,z=Object.getOwnPropertyDescriptor,g=(r,t,o,n)=>{for(var e=n>1?void 0:n?z(t,o):t,s=r.length-1,u;s>=0;s--)(u=r[s])&&(e=(n?u(t,o,e):u(e))||e);return n&&e&&x(t,o,e),e};let c=class extends l{get functionDefine(){return`
        // 函数声明
        function add(x: number, y: number, z?: number): number {
            if(typeof z === 'number') {
                return x + y + z;
            } else {
                return x + y;
            }
        }
        let result = add(2, 3);
        let result2 = add(2, 3, 4);

        // 函数表达式
        const add2 = function(x: number, y: number, z?: number): number {
            if(typeof z === 'number') {
                return x + y + z;
            } else {
                return x + y;
            }
        }
        let result3 = add2(2, 3);
        let result4 = add2(2, 3, 4);

        // 箭头函数
        const add3 = (x: number, y: number, z?: number): number => {
            if(typeof z === 'number') {
                return x + y + z;
            } else {
                return x + y;
            }
        }
        let result5 = add3(2, 3);
        let result6 = add3(2, 3, 4);

        // 函数重载
        function add4(...rest: number[]): number;
        function add4(...rest: string[]): string;
        function add4(...rest: any[]): any {
            let first = rest[0];
            if(typeof first === 'string') {
                return rest.join('');
            }
            if(typeof first === 'number') {
                return rest.reduce((pre, cur) => pre + cur);
            }
        }
        let result7 = add4(1, 2, 3); // 6
        let result8 = add4('a', 'b', 'c'); // 'abc'

        
    `}};c=g([d({components:{PCodeBlock:y}})],c);const P=_("p",null,"TS 中的函数与类型声明",-1);function v(r,t,o,n,e,s){const u=a;return f(),m(b,null,[P,p(u,{code:r.functionDefine,title:"function",toc:"language-js"},null,8,["code"])],64)}const h=i(c,[["render",v]]);export{h as default};
