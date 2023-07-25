import { Vue, Options } from 'vue-class-component';

export default class TSIndex extends Vue {
  get isInHome() {
    return this.$route.path === '/tsNote'
  }
}