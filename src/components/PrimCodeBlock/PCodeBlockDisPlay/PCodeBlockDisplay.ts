import { Vue, Options } from "vue-class-component";
import PCodeBlock from '@/components/PrimCodeBlock/PCodeBlock/PCodeBlock.vue';

@Options({
  components: {
    PCodeBlock
  },
  props:{
    code:{
      type: String,
      required: true
    },
    title:{
      type: String,
      required: false
    },
    toc: {
      type: String,
      required: false
    }
  }
})
export default class PCodeBlockDisplay extends Vue {
  code!: string
  title!: string
  toc!: string
}