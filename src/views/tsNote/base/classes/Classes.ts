import PCodeBlock from "@/components/PrimCodeBlock/PCodeBlock/PCodeBlock";
import { Vue, Options } from "vue-class-component";

@Options({
  components: {
    PCodeBlock
  }
})
export default class Classes extends Vue {
  get classesDefine(){
    return`
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
    `
  }
  get classesExtend(){
    return`
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

        
    `
  }
}