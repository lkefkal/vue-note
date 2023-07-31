import{_ as m}from"./PCodeBlock-50e67812.js";import{P as p}from"./PCodeBlock-752e5398.js";import{V as u,O as d,_ as g,o as _,c as h,b as i,F as f,e as l}from"./index-d4bcb226.js";import"./CleanCode-cff502c5.js";var w=Object.defineProperty,C=Object.getOwnPropertyDescriptor,b=(s,n,r,a)=>{for(var e=a>1?void 0:a?C(n,r):n,o=s.length-1,t;o>=0;o--)(t=s[o])&&(e=(a?t(n,r,e):t(e))||e);return a&&e&&w(n,r,e),e};let c=class extends u{get classesDefine(){return`
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

        
    `}};c=b([d({components:{PCodeBlock:p}})],c);const v=l("p",null,"TS 中类的定义方法",-1),B=l("p",null,"类的继承",-1);function R(s,n,r,a,e,o){const t=m;return _(),h(f,null,[v,i(t,{code:s.classesDefine,title:"classes",toc:"language-typescript"},null,8,["code"]),B,i(t,{code:s.classesExtend,title:"classes",toc:"language-typescript"},null,8,["code"])],64)}const O=g(c,[["render",R]]);export{O as default};
