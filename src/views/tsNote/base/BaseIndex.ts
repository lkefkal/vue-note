import { Vue, Options } from 'vue-class-component';

export default class BaseIndex extends Vue {
  get isInHome() {
    return this.$route.path.match(/^\/tsNote\/base$/)
  }
}