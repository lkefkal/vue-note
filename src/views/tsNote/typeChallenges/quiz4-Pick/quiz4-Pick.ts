import { Vue, Options } from 'vue-class-component'
import PCodeBlock from '@/components/PrimCodeBlock/PCodeBlock/PCodeBlock';

@Options({
  components:{
    PCodeBlock
  },
  i18n: {
    messages: {
      'zh-CN': {
        "QUESTION_TEXT": "不使用 Pick\<T, K\> ，实现 TS 内置的 Pick\<T, K\> 的功能。",
        "REQUIRE_TEXT":"从类型 T 中选出符合 K 的属性，构造一个新的类型。",
        
      },
      'en': {
        "QUESTION_TEXT": "Implement the built-in Pick\<T, K\> generic without using it.",
        "REQUIRE_TEXT":"Constructs a type by picking the set of properties K from T",
      },
    }
  },
  mounted() {
    console.log(this.$i18n.locale); // 应该输出 'zh-CN' 或你设置的其他值
    console.log(this.$i18n.messages); // 应该输出你设置的消息对象
  }
})
export default class Pick extends Vue {
  get code(){
    return`
        interface Todo {
          title: string
          description: string
          completed: boolean
        }
        
        type TodoPreview = MyPick\<Todo, 'title' | 'completed'\>
        
        const todo: TodoPreview = {
            title: 'Clean room',
            completed: false,
        }
    `
  }
}