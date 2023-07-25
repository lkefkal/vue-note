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
}