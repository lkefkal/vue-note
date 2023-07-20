import { Vue } from "vue-class-component";

export default class VueView extends Vue {
  get isInHome() {
    return this.$route.path === '/vue'
  }
}