import { Vue, Options } from 'vue-class-component';

export default class TypeChallenge extends Vue {
  $store: any;
  quizzes = [
    { title:'Hello World', path: 'quiz13-HelloWorld' },
    { title:'Pick', path: 'quiz4-Pick' },
  ]
  async handleClick(quiz:{ title:string, path:string }) {
    // await this.$store.commit('addQuizCache', { title: quiz.title, path: quiz.path })
    this.$router.push({ path: `/tsNote/challenge/${quiz.path}` })
  }
  get isInHome(){
    return this.$route.path.match(/\/tsNote\/challenge$/)
  }
}