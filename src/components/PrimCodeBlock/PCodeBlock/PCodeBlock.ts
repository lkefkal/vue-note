import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { Vue, Options } from 'vue-class-component';
import CleanCode from '@/utils/handleString/CleanCode';

@Options({
  props: {
    code: {
      type: String,
      default: ''
    }
  }
})
export default class PCodeBlock extends Vue {
  code!: string;
  isCopyed = false;
  async copyToClipboard(text: string):void {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Text copied to clipboard');
    } catch (err) {
        console.error('Error in copying text: ', err);
    }
  }
  clickCopy(): void {
    this.copyToClipboard(this.cleanCode);
    this.isCopyed = true;
    setTimeout(() => {
      this.isCopyed = false;
    }, 1000);
  }
  get cleanCode() {
    return new CleanCode(this.code).cleanCode;
  }
  mounted(): void {
    Prism.highlightAll();
  }
}