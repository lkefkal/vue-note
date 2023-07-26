import{_ as m}from"./PCodeBlock-46730204.js";import{P as u}from"./PCodeBlock-7b046c20.js";import{V as p,O as d,_ as g,o as _,c as h,b as c,F as f,e as l}from"./index-cd3cb997.js";import"./el-button-74933914.js";import"./use-form-common-props-55839fd0.js";import"./CleanCode-931345d6.js";var w=Object.defineProperty,C=Object.getOwnPropertyDescriptor,b=(s,n,r,a)=>{for(var e=a>1?void 0:a?C(n,r):n,o=s.length-1,t;o>=0;o--)(t=s[o])&&(e=(a?t(n,r,e):t(e))||e);return a&&e&&w(n,r,e),e};let i=class extends p{get classesDefine(){return`
        class Animal {
            // 需要声明属性的类型
            name: string;

            // 声明的属性必须在构造函数中初始化
            constructor(name: string) {
                this.name = name;
            }

            // 只读属性
            readonly legs: number = 4;

            // 静态属性
            static categoies: string[] = ['mammal', 'bird'];

            // 私有属性
            private pri() {}

            // 受保护属性
            protected pro() {}

            // 公共属性
            public pub() {}
            
            run() {
                return \`\${this.name} is running\`
            }
        }
    `}get classesExtend(){return`
        // 类继承接口
        interface Radio {
            switchRadio(): void;
        }
        interface RadioWithBattery extends Radio {
            checkBatteryStatus(): void;
        }
        class Car implements Radio {
            switchRadio() {}
        }
        class Cellphone implements RadioWithBattery {
            switchRadio() {}
            checkBatteryStatus() {}
        }

        // 类继承类
        class Animal {
            name: string;
            constructor(name: string) {
                this.name = name;
            }
            run() {
                return \`\${this.name} is running\`
            }
        }
        class Dog extends Animal {
            bark() {
                return \`\${this.name} is barking\`
            }
        }
        const dog = new Dog('wangwang');

        // 重写父类方法
        class Cat extends Animal {
            constructor(name) {
                super(name)
            }
            run() {
                return 'Meow, ' + super.run()
            }
        }
        const cat = new Cat('miaomiao');

        
    `}};i=b([d({components:{PCodeBlock:u}})],i);const v=l("p",null,"TS 中类的定义方法",-1),B=l("p",null,"类的继承",-1);function R(s,n,r,a,e,o){const t=m;return _(),h(f,null,[v,c(t,{code:s.classesDefine,title:"classes",toc:"language-js"},null,8,["code"]),B,c(t,{code:s.classesExtend,title:"classes",toc:"language-js"},null,8,["code"])],64)}const A=g(i,[["render",R]]);export{A as default};
