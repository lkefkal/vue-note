import { Vue, Options } from 'vue-class-component'
@Options({
  i18n: {
    messages: {
      'zh-CN': {
        "QUESTION_TEXT": "这个简单的提问希望让你可以快速上手 Type Challenges。在这里，我们使用了一些神奇的技巧让 TypeScript 通过自身的类型系统来实现自动判题。",
        "REQUIRE_TEXT":"在这个挑战中，你需要修改下方的代码使得测试通过（使其没有类型错误）。",
        "STATR_TEXT":"点击上方的 接受挑战 开始编码！旅途愉快！"
      },
      'en': {
        "QUESTION_TEXT": "In Type Challenges, we use the type system itself to do the assertion.",
        "REQUIRE_TEXT":"For this challenge, you will need to change the following code to make the tests pass (no type check errors).",
        "STATR_TEXT":"Click the Take the Challenge button to start coding! Happy Hacking!"
      },
    }
  },
  mounted() {
    console.log(this.$i18n.locale); // 应该输出 'zh-CN' 或你设置的其他值
    console.log(this.$i18n.messages); // 应该输出你设置的消息对象
  }
})
export default class Quiz extends Vue {

}