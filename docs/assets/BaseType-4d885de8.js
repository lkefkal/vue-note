import{_ as p}from"./PCodeBlock-04b4656d.js";import{V as c,O as m,_ as f,o as g,c as y,b as l,F as b,p as _,d as v,e as u}from"./index-bdc1aac7.js";import{P as h}from"./PCodeBlock-4f4e6637.js";import"./CleanCode-1adac528.js";var T=Object.defineProperty,N=Object.getOwnPropertyDescriptor,O=(e,t,s,o)=>{for(var n=o>1?void 0:o?N(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(n=(o?r(t,s,n):r(n))||n);return o&&n&&T(t,s,n),n};let i=class extends c{get defineVarType(){return`
        // 1. 类型断言
        let someValue: any = "this is a string";
        let strLength: number = (someValue as string).length;

        // 2. 类型推断
        let str = "string";
        str = 1; // Error

        // 3. 类型别名: type
        type Name = string;
        type NameResolver = () => string;
        type NameOrResolver = Name | NameResolver;
        function getName(n: NameOrResolver): Name {
            if (typeof n === "string") {
                return n;
            } else {
                return n();
            }
        }

        // 4. 联合类型: <T1>|<T2>
        let myFavoriteNumber: string | number;
        myFavoriteNumber = 'seven';

        // 5. 交叉类型: <T1>&<T2>&...
        function extend<T, U>(first: T, second: U): T & U {
            let result = <T & U>{};
            for (let id in first) {
                (<any>result)[id] = (<any>first)[id];
            }
            for (let id in second) {
                if (!result.hasOwnProperty(id)) {
                    (<any>result)[id] = (<any>second)[id];
                }
            }
            return result;
        }

        // 6. 类型保护
        function padLefa(padding: number | string, input: string) {
            if (typeof padding === "number") {
                return new Array(padding + 1).join(" ") + input;
            }
            return padding + input;
        }
    `}get generalType(){return`
        // 1. 数字
        let decLiteral: number = 6;
        let hexLiteral: number = 0xf00d;
        let binaryLiteral: number = 0b1010;
        let octalLiteral: number = 0o744;

        // 2. 字符串
        let name: string = "bob";
        name = "smith";

        // 3. 布尔值
        let isDone: boolean = false;

        // 4. 数组
        let list: number[] = [1, 2, 3];
        let list: Array<number> = [1, 2, 3];

        // 5. 元组
        let x: [string, number];
        x = ['hello', 10]; // OK
        x = [10, 'hello']; // Error

        // 6. 枚举
        enum Color {Red, Green, Blue}
        let c: Color = Color.Green;
        
        // 7. Any
        let notSure: any = 4;
        notSure = "maybe a string instead";
        notSure = false; // okay, definitely a boolean

        // 8. Void
        function warnUser(): void {
            console.log("This is my warning message");
        }
        let unusable: void = undefined;
        
        // 9. Null 和 Undefined
        let u: undefined = undefined;
        let n: null = null;

        // 10. Never
        function error(message: string): never {
            throw new Error(message);
        }
        function fail() {
            return error("Something failed");
        }
        function infiniteLoop(): never {
            while (true) {
            }
        }

        // 11. Object
        declare function create(o: object | null): void;
        create({ prop: 0 }); // OK
        create(null); // OK
        create(42); // Error
        create("string"); // Error
        create(false); // Error
        create(undefined); // Error

        // 12. Literal Types
        type Easing = "ease-in" | "ease-out" | "ease-in-out";
        class UIElement {
            animate(dx: number, dy: number, easing: Easing) {
                if (easing === "ease-in") {
                    // ...
                } else if (easing === "ease-out") {
                } else if (easing === "ease-in-out") {
                } else {
                    // error! should not pass null or undefined.
                }
            }
        }
        let button = new UIElement();
        button.animate(0, 0, "ease-in");
        button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
    `}};i=O([m({components:{PCodeBlock:h}})],i);const d=e=>(_("data-v-6b875b86"),e=e(),v(),e),w=d(()=>u("p",null,"定义变量类型",-1)),E=d(()=>u("p",null,"常见类型",-1));function x(e,t,s,o,n,a){const r=p;return g(),y(b,null,[w,l(r,{code:e.defineVarType,toc:"language-typescript",inDisplay:""},null,8,["code"]),E,l(r,{code:e.generalType,toc:"language-typescript",inDisplay:""},null,8,["code"])],64)}const S=f(i,[["render",x],["__scopeId","data-v-6b875b86"]]);export{S as default};
