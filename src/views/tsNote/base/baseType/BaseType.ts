import { Vue, Options } from 'vue-class-component';
import PCodeBlock from '@/components/PrimCodeBlock/PCodeBlock/PCodeBlock';

@Options({
  components: {
    PCodeBlock
  },
})
export default class BaseType extends Vue {
  get defineVarType(){
    return`
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
    `
  }
  get generalType(){
    return `
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
    `}
}