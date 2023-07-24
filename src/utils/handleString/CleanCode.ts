export default class CleanCode {
  code:string;
  constructor(code: string) {
    this.code = code;
  }
  get cleanCode() {
    return this.code.replace(/^\n+\s+|\n+\s+$/g, '').replace(/scripts/g, 'script');
  }
}