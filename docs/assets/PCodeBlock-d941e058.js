var h=Object.defineProperty;var v=(e,o,t)=>o in e?h(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var s=(e,o,t)=>(v(e,typeof o!="symbol"?o+"":o,t),t);import{O as b,V as D,_ as B,r as P,o as d,c as _,e as i,t as u,b as r,w as y,a as w,h as C,B as m,M as O,E as T}from"./index-d501c446.js";import{C as V,P as k}from"./CleanCode-72fe0760.js";var x=Object.defineProperty,E=Object.getOwnPropertyDescriptor,N=(e,o,t,a)=>{for(var n=a>1?void 0:a?E(o,t):o,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(a?c(o,t,n):c(n))||n);return a&&n&&x(o,t,n),n};let p=class extends D{constructor(){super(...arguments);s(this,"code");s(this,"title");s(this,"toc");s(this,"isCopyed",!1);s(this,"inDisplay")}async copyToClipboard(o){try{await navigator.clipboard.writeText(o),console.log("Text copied to clipboard")}catch(t){console.error("Error in copying text: ",t)}}clickCopy(){this.copyToClipboard(this.cleanCode),this.isCopyed=!0,setTimeout(()=>{this.isCopyed=!1},1e3)}get cleanCode(){return new V(this.code).cleanCode}mounted(){k.highlightAll()}};p=N([b({props:{code:{type:String,require:!0},title:{type:String,default:"template"},toc:{type:String,default:"language-html"},inDisplay:{type:Boolean,default:!1}}})],p);const S={style:{"font-size":"0.7em"}},$={key:0,style:{padding:"0 0.5em 0 0"}},j={class:"code-block"};function z(e,o,t,a,n,l){const c=P("CopyDocument"),f=O,g=T;return d(),_("div",{class:m(e.inDisplay?"code-container margin-inDisplay":"code-container margin-normal")},[i("span",S,u(e.title),1),r(g,{text:"",onClick:e.clickCopy,title:"复制"},{default:y(()=>[e.isCopyed?(d(),_("p",$,"已复制")):w("",!0),r(f,null,{default:y(()=>[r(c)]),_:1})]),_:1},8,["onClick"]),i("pre",j,[C("      "),i("code",{class:m("inner-code "+e.toc)},`
        `+u(e.cleanCode)+`
      `,3),C(`
    `)])],2)}const M=B(p,[["render",z],["__scopeId","data-v-f4de2f8c"]]);export{M as _};
