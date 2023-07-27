import { Vue, Options } from 'vue-class-component'
import PCodeBlock from '@/components/PrimCodeBlock/PCodeBlock/PCodeBlock';

@Options({
  components:{
    PCodeBlock
  },
  i18n: {
    messages: {
      'zh-CN': {
        "QUESTION_TEXT": "这个简单的提问希望让你可以快速上手 Type Challenges。在这里，我们使用了一些神奇的技巧让 TypeScript 通过自身的类型系统来实现自动判题。",
        "REQUIRE_TEXT":"在这个挑战中，你需要修改下方的代码使得测试通过（使其没有类型错误）。",
        "ANNO_1":"期望是一个 string 类型",
        "ANNO_2":"你需要使得如下这行不会抛出异常"
      },
      'en': {
        "QUESTION_TEXT": "In Type Challenges, we use the type system itself to do the assertion.",
        "REQUIRE_TEXT":"For this challenge, you will need to change the following code to make the tests pass (no type check errors).",
        "ANNO_1":"Expect HelloWorld to be a string",
        "ANNO_2":"You should make the following line no error"
      },
    }
  },
  mounted() {
    console.log(this.$i18n.locale); // 应该输出 'zh-CN' 或你设置的其他值
    console.log(this.$i18n.messages); // 应该输出你设置的消息对象
  }
})
export default class HelloWorld extends Vue {
  get code(){
    return`
        // ${ this.$t('ANNO_1') }
        type HelloWorld = any
        // ${ this.$t('ANNO_2') }
        type test = Expect<Equal<HelloWorld, string>>
    `
  }
}