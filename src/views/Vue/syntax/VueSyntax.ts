import { Vue, Options } from "vue-class-component";
import CodeBlock from '@/components/CodeBlock/CodeBlock.vue';

@Options({
  components: {
    CodeBlock
  }
})
export default class VueSyntax extends Vue {
  code1 = `
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
     * <scripts setup>
     * const msg = 'HelloWorld'
     * </scripts>
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
  code2 = `
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
    info = 
      [{
        title: '模板语法',
        code: this.code1,
        fileName: 'HelloWorld.vue'
      },
      {
        title: 'SFC的使用',
        code: this.code2,
        fileName: 'Another.vue'
      }]
}