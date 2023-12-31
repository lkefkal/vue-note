import PCodeBlock from "@/components/PrimCodeBlock/PCodeBlock/PCodeBlock";
import { Vue, Options } from "vue-class-component";

@Options({
  components: {
    PCodeBlock,
  },
})
export default class GeneralType extends Vue {
  get interfaceDeclare(): string {
    return `
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


    `;
  }
  get interfaceAndTypeLeft(){
    return`
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
    `
  }
  get interfaceAndTypeRight(){
    return`
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
    `
  }
}