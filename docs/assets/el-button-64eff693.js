import{m as G,z as H,a8 as D,c as f,a9 as J,J as M,aa as O,B as R,E as I,ab as W,D as X,K as w,ac as Y,H as h,o as b,Y as k,w as C,b as N,F as Z,X as B,l as n,$ as T,W as V,Z as $,e as E,a0 as q,a5 as F,ad as L,k as Q,T as x,a7 as oo,ae as eo}from"./index-4fc333d3.js";import{u as to}from"./use-form-item-4b188f65.js";import{b as no,c as K,u as ao}from"./el-descriptions-item-9a45a114.js";const so=Symbol(),P=G();function lo(e,r=void 0){const t=H()?D(so,P):P;return e?f(()=>{var s,l;return(l=(s=t.value)==null?void 0:s[e])!=null?l:r}):t}const j=Symbol("buttonGroupContextKey"),ro=(e,r)=>{J({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},f(()=>e.type==="text"));const t=D(j,void 0),s=lo("button"),{form:l}=to(),o=no(f(()=>t==null?void 0:t.size)),i=K(),m=G(),c=M(),p=f(()=>e.type||(t==null?void 0:t.type)||""),S=f(()=>{var u,g,v;return(v=(g=e.autoInsertSpace)!=null?g:(u=s.value)==null?void 0:u.autoInsertSpace)!=null?v:!1}),y=f(()=>e.tag==="button"?{ariaDisabled:i.value||e.loading,disabled:i.value||e.loading,autofocus:e.autofocus,type:e.nativeType}:{}),_=f(()=>{var u;const g=(u=c.default)==null?void 0:u.call(c);if(S.value&&(g==null?void 0:g.length)===1){const v=g[0];if((v==null?void 0:v.type)===O){const U=v.children;return/^\p{Unified_Ideograph}{2}$/u.test(U.trim())}}return!1});return{_disabled:i,_size:o,_type:p,_ref:m,_props:y,shouldAddSpace:_,handleClick:u=>{e.nativeType==="reset"&&(l==null||l.resetFields()),r("click",u)}}},io=["default","primary","success","warning","info","danger","text",""],co=["button","submit","reset"],z=R({size:ao,disabled:Boolean,type:{type:String,values:io,default:""},icon:{type:I},nativeType:{type:String,values:co,default:"button"},loading:Boolean,loadingIcon:{type:I,default:()=>W},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:X([String,Object]),default:"button"}}),uo={click:e=>e instanceof MouseEvent};function d(e,r=20){return e.mix("#141414",r).toString()}function bo(e){const r=K(),t=w("button");return f(()=>{let s={};const l=e.color;if(l){const o=new Y(l),i=e.dark?o.tint(20).toString():d(o,20);if(e.plain)s=t.cssVarBlock({"bg-color":e.dark?d(o,90):o.tint(90).toString(),"text-color":l,"border-color":e.dark?d(o,50):o.tint(50).toString(),"hover-text-color":`var(${t.cssVarName("color-white")})`,"hover-bg-color":l,"hover-border-color":l,"active-bg-color":i,"active-text-color":`var(${t.cssVarName("color-white")})`,"active-border-color":i}),r.value&&(s[t.cssVarBlockName("disabled-bg-color")]=e.dark?d(o,90):o.tint(90).toString(),s[t.cssVarBlockName("disabled-text-color")]=e.dark?d(o,50):o.tint(50).toString(),s[t.cssVarBlockName("disabled-border-color")]=e.dark?d(o,80):o.tint(80).toString());else{const m=e.dark?d(o,30):o.tint(30).toString(),c=o.isDark()?`var(${t.cssVarName("color-white")})`:`var(${t.cssVarName("color-black")})`;if(s=t.cssVarBlock({"bg-color":l,"text-color":c,"border-color":l,"hover-bg-color":m,"hover-text-color":c,"hover-border-color":m,"active-bg-color":i,"active-border-color":i}),r.value){const p=e.dark?d(o,50):o.tint(50).toString();s[t.cssVarBlockName("disabled-bg-color")]=p,s[t.cssVarBlockName("disabled-text-color")]=e.dark?"rgba(255, 255, 255, 0.5)":`var(${t.cssVarName("color-white")})`,s[t.cssVarBlockName("disabled-border-color")]=p}}}return s})}const fo=h({name:"ElButton"}),mo=h({...fo,props:z,emits:uo,setup(e,{expose:r,emit:t}){const s=e,l=bo(s),o=w("button"),{_ref:i,_size:m,_type:c,_disabled:p,_props:S,shouldAddSpace:y,handleClick:_}=ro(s,t);return r({ref:i,size:m,type:c,disabled:p,shouldAddSpace:y}),(a,u)=>(b(),k($(a.tag),q({ref_key:"_ref",ref:i},n(S),{class:[n(o).b(),n(o).m(n(c)),n(o).m(n(m)),n(o).is("disabled",n(p)),n(o).is("loading",a.loading),n(o).is("plain",a.plain),n(o).is("round",a.round),n(o).is("circle",a.circle),n(o).is("text",a.text),n(o).is("link",a.link),n(o).is("has-bg",a.bg)],style:n(l),onClick:n(_)}),{default:C(()=>[a.loading?(b(),N(Z,{key:0},[a.$slots.loading?B(a.$slots,"loading",{key:0}):(b(),k(n(T),{key:1,class:V(n(o).is("loading"))},{default:C(()=>[(b(),k($(a.loadingIcon)))]),_:1},8,["class"]))],64)):a.icon||a.$slots.icon?(b(),k(n(T),{key:1},{default:C(()=>[a.icon?(b(),k($(a.icon),{key:0})):B(a.$slots,"icon",{key:1})]),_:3})):E("v-if",!0),a.$slots.default?(b(),N("span",{key:2,class:V({[n(o).em("text","expand")]:n(y)})},[B(a.$slots,"default")],2)):E("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var po=F(mo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const go={size:z.size,type:z.type},vo=h({name:"ElButtonGroup"}),ko=h({...vo,props:go,setup(e){const r=e;L(j,Q({size:x(r,"size"),type:x(r,"type")}));const t=w("button");return(s,l)=>(b(),N("div",{class:V(`${n(t).b("group")}`)},[B(s.$slots,"default")],2))}});var A=F(ko,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const So=oo(po,{ButtonGroup:A});eo(A);export{So as E};