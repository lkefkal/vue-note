import { Vue, Options } from 'vue-class-component';
import PCodeBlock from '@/components/PrimCodeBlock/PCodeBlock/PCodeBlock';

@Options({
  components: {
    PCodeBlock
  }
})
export default class Function extends Vue {
  get functionDefine(){
    return`
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

        
    `
  }
}