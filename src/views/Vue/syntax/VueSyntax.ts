import { Vue, Options } from "vue-class-component";
import PCodeBlock from '@/components/PrimCodeBlock/PCodeBlock/PCodeBlock.vue';

@Options({
  components: {
    PCodeBlock
  }
})
export default class VueSyntax extends Vue {
  get code1() {
    return `
        /**
          * 显式定义setup
          */
        <script>
        export default {
          /**定义组件的名字*/
          name: 'HelloWorld',
          /**
           * setup函数
           * return中返回的数据和方法将会暴露在组件中，可以在模板中使用
           */
          setup() {
            return {
              msg:'HelloWorld'
            }
          }
        }
        </script>

        /**
         * 与上方写法等价
         * <script setup>
         * const msg = 'HelloWorld'
         * </script>
         */

        /**
         * template是组件的HTML块
         * 使用组件时，会替换掉组件标签，实际插入DOM的是template中的内容
         */
        <template>
        /** 插值语法是双层花括号 {{ }}， 内可使用js语法 */
          <p class="a">{{ msg.raplace(/oW/, 'o W') }}</p>
        </template>
        /**
         * style是组件的样式块
         * 与css语法相同
         */
        <style scoped>
          .a {
            color: red;
          }
        </style>
      `
    }
  get code2() {
    return `
        <template>
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </template>

        <script>
        import HelloWorld from './path/to/HelloWorld.vue'
        export default {
          name: 'App',
          components: {
            HelloWorld
          }
        }
        </script>
        `
  }
}