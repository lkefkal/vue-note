var De=Object.defineProperty;var Fe=(e,t,o)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var pe=(e,t,o)=>(Fe(e,typeof t!="symbol"?t+"":t,o),o);import{ad as ke,y as H,A as le,C as _e,G as M,l as W,ae as re,af as ie,N as J,n as w,q as k,U as ce,T as he,o as R,c as j,$ as Pe,a0 as O,a9 as Ve,aa as ge,ag as Ae,ah as Re,k as L,X as ye,ai as ze,b as l,a4 as K,aj as Me,ak as je,al as Le,am as q,an as Ue,ao as Ie,ap as Ke,a1 as $e,aq as ve,D as qe,x as He,I as We,ar as fe,as as Je,at as Xe,i as Ge,Z as Ye,a as Ze,ac as Qe,au as et,O as ue,V as de,_ as X,w as z,F as tt,e as E,r as I,a2 as at}from"./index-9eba7189.js";import{_ as Ce}from"./PCodeBlockDisplay-62560921.js";import{_ as G}from"./PCodeBlock-8022f343.js";import"./CodeBlock.vue_vue_type_style_index_0_scoped_43392a15_lang-fd3de574.js";import{U as Ne}from"./event-43d54cf5.js";import{u as st}from"./index-764301c5.js";import"./CleanCode-1b1e3292.js";const F=e=>ke(e),Y=Symbol("tabsRootContextKey"),nt=H({tabs:{type:le(Array),default:()=>_e([])}}),we="ElTabBar",ot=M({name:we}),lt=M({...ot,props:nt,setup(e,{expose:t}){const o=e,u=W(),a=re(Y);a||ie(we,"<el-tabs><el-tab-bar /></el-tabs>");const s=J("tabs"),n=w(),g=w(),b=()=>{let f=0,m=0;const p=["top","bottom"].includes(a.props.tabPosition)?"width":"height",c=p==="width"?"x":"y",D=c==="x"?"left":"top";return o.tabs.every(S=>{var T,r;const P=(r=(T=u.parent)==null?void 0:T.refs)==null?void 0:r[`tab-${S.uid}`];if(!P)return!1;if(!S.active)return!0;f=P[`offset${F(D)}`],m=P[`client${F(p)}`];const $=window.getComputedStyle(P);return p==="width"&&(o.tabs.length>1&&(m-=Number.parseFloat($.paddingLeft)+Number.parseFloat($.paddingRight)),f+=Number.parseFloat($.paddingLeft)),!1}),{[p]:`${m}px`,transform:`translate${F(c)}(${f}px)`}},_=()=>g.value=b();return k(()=>o.tabs,async()=>{await ce(),_()},{immediate:!0}),he(n,()=>_()),t({ref:n,update:_}),(f,m)=>(R(),j("div",{ref_key:"barRef",ref:n,class:Pe([O(s).e("active-bar"),O(s).is(O(a).props.tabPosition)]),style:Ve(g.value)},null,6))}});var rt=ge(lt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const it=H({panes:{type:le(Array),default:()=>_e([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),ct={tabClick:(e,t,o)=>o instanceof Event,tabRemove:(e,t)=>t instanceof Event},me="ElTabNav",ut=M({name:me,props:it,emits:ct,setup(e,{expose:t,emit:o}){const u=W(),a=re(Y);a||ie(me,"<el-tabs><tab-nav /></el-tabs>");const s=J("tabs"),n=Ae(),g=Re(),b=w(),_=w(),f=w(),m=w(),p=w(!1),c=w(0),D=w(!1),S=w(!0),T=L(()=>["top","bottom"].includes(a.props.tabPosition)?"width":"height"),r=L(()=>({transform:`translate${T.value==="width"?"X":"Y"}(-${c.value}px)`})),P=()=>{if(!b.value)return;const d=b.value[`offset${F(T.value)}`],v=c.value;if(!v)return;const i=v>d?v-d:0;c.value=i},$=()=>{if(!b.value||!_.value)return;const d=_.value[`offset${F(T.value)}`],v=b.value[`offset${F(T.value)}`],i=c.value;if(d-i<=v)return;const C=d-i>v*2?i+v:d-v;c.value=C},V=async()=>{const d=_.value;if(!p.value||!f.value||!b.value||!d)return;await ce();const v=f.value.querySelector(".is-active");if(!v)return;const i=b.value,C=["top","bottom"].includes(a.props.tabPosition),N=v.getBoundingClientRect(),y=i.getBoundingClientRect(),x=C?d.offsetWidth-y.width:d.offsetHeight-y.height,B=c.value;let h=B;C?(N.left<y.left&&(h=B-(y.left-N.left)),N.right>y.right&&(h=B+N.right-y.right)):(N.top<y.top&&(h=B-(y.top-N.top)),N.bottom>y.bottom&&(h=B+(N.bottom-y.bottom))),h=Math.max(h,0),c.value=Math.min(h,x)},U=()=>{var d;if(!_.value||!b.value)return;e.stretch&&((d=m.value)==null||d.update());const v=_.value[`offset${F(T.value)}`],i=b.value[`offset${F(T.value)}`],C=c.value;i<v?(p.value=p.value||{},p.value.prev=C,p.value.next=C+i<v,v-C<i&&(c.value=v-i)):(p.value=!1,C>0&&(c.value=0))},Ee=d=>{const v=d.code,{up:i,down:C,left:N,right:y}=q;if(![i,C,N,y].includes(v))return;const x=Array.from(d.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),B=x.indexOf(d.target);let h;v===N||v===i?B===0?h=x.length-1:h=B-1:B<x.length-1?h=B+1:h=0,x[h].focus({preventScroll:!0}),x[h].click(),be()},be=()=>{S.value&&(D.value=!0)},Z=()=>D.value=!1;return k(n,d=>{d==="hidden"?S.value=!1:d==="visible"&&setTimeout(()=>S.value=!0,50)}),k(g,d=>{d?setTimeout(()=>S.value=!0,50):S.value=!1}),he(f,U),ye(()=>setTimeout(()=>V(),0)),ze(()=>U()),t({scrollToActiveTab:V,removeFocus:Z}),k(()=>e.panes,()=>u.update(),{flush:"post",deep:!0}),()=>{const d=p.value?[l("span",{class:[s.e("nav-prev"),s.is("disabled",!p.value.prev)],onClick:P},[l(K,null,{default:()=>[l(Me,null,null)]})]),l("span",{class:[s.e("nav-next"),s.is("disabled",!p.value.next)],onClick:$},[l(K,null,{default:()=>[l(je,null,null)]})])]:null,v=e.panes.map((i,C)=>{var N,y,x,B;const h=i.uid,Q=i.props.disabled,ee=(y=(N=i.props.name)!=null?N:i.index)!=null?y:`${C}`,te=!Q&&(i.isClosable||e.editable);i.index=`${C}`;const Se=te?l(K,{class:"is-icon-close",onClick:A=>o("tabRemove",i,A)},{default:()=>[l(Le,null,null)]}):null,xe=((B=(x=i.slots).label)==null?void 0:B.call(x))||i.props.label,Oe=!Q&&i.active?0:-1;return l("div",{ref:`tab-${h}`,class:[s.e("item"),s.is(a.props.tabPosition),s.is("active",i.active),s.is("disabled",Q),s.is("closable",te),s.is("focus",D.value)],id:`tab-${ee}`,key:`tab-${h}`,"aria-controls":`pane-${ee}`,role:"tab","aria-selected":i.active,tabindex:Oe,onFocus:()=>be(),onBlur:()=>Z(),onClick:A=>{Z(),o("tabClick",i,ee,A)},onKeydown:A=>{te&&(A.code===q.delete||A.code===q.backspace)&&o("tabRemove",i,A)}},[xe,Se])});return l("div",{ref:f,class:[s.e("nav-wrap"),s.is("scrollable",!!p.value),s.is(a.props.tabPosition)]},[d,l("div",{class:s.e("nav-scroll"),ref:b},[l("div",{class:[s.e("nav"),s.is(a.props.tabPosition),s.is("stretch",e.stretch&&["top","bottom"].includes(a.props.tabPosition))],ref:_,style:r.value,role:"tablist",onKeydown:Ee},[e.type?null:l(rt,{ref:m,tabs:[...e.panes]},null),v])])])}}}),dt=H({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:le(Function),default:()=>!0},stretch:Boolean}),ae=e=>qe(e)||He(e),bt={[Ne]:e=>ae(e),tabClick:(e,t)=>t instanceof Event,tabChange:e=>ae(e),edit:(e,t)=>["remove","add"].includes(t),tabRemove:e=>ae(e),tabAdd:()=>!0};var pt=M({name:"ElTabs",props:dt,emits:bt,setup(e,{emit:t,slots:o,expose:u}){var a,s;const n=J("tabs"),{children:g,addChild:b,removeChild:_}=st(W(),"ElTabPane"),f=w(),m=w((s=(a=e.modelValue)!=null?a:e.activeName)!=null?s:"0"),p=r=>{m.value=r,t(Ne,r),t("tabChange",r)},c=async r=>{var P,$,V;if(!(m.value===r||ve(r)))try{await((P=e.beforeLeave)==null?void 0:P.call(e,r,m.value))!==!1&&(p(r),(V=($=f.value)==null?void 0:$.removeFocus)==null||V.call($))}catch{}},D=(r,P,$)=>{r.props.disabled||(c(P),t("tabClick",r,$))},S=(r,P)=>{r.props.disabled||ve(r.props.name)||(P.stopPropagation(),t("edit",r.props.name,"remove"),t("tabRemove",r.props.name))},T=()=>{t("edit",void 0,"add"),t("tabAdd")};return Ue({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},L(()=>!!e.activeName)),k(()=>e.activeName,r=>c(r)),k(()=>e.modelValue,r=>c(r)),k(m,async()=>{var r;await ce(),(r=f.value)==null||r.scrollToActiveTab()}),Ie(Y,{props:e,currentName:m,registerPane:b,unregisterPane:_}),u({currentName:m}),()=>{const r=e.editable||e.addable?l("span",{class:n.e("new-tab"),tabindex:"0",onClick:T,onKeydown:V=>{V.code===q.enter&&T()}},[l(K,{class:n.is("icon-plus")},{default:()=>[l(Ke,null,null)]})]):null,P=l("div",{class:[n.e("header"),n.is(e.tabPosition)]},[r,l(ut,{ref:f,currentName:m.value,editable:e.editable,type:e.type,panes:g.value,stretch:e.stretch,onTabClick:D,onTabRemove:S},null)]),$=l("div",{class:n.e("content")},[$e(o,"default")]);return l("div",{class:[n.b(),n.m(e.tabPosition),{[n.m("card")]:e.type==="card",[n.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[P,$]:[$,P]])}}});const vt=H({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ft=["id","aria-hidden","aria-labelledby"],Be="ElTabPane",mt=M({name:Be}),_t=M({...mt,props:vt,setup(e){const t=e,o=W(),u=We(),a=re(Y);a||ie(Be,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const s=J("tab-pane"),n=w(),g=L(()=>t.closable||a.props.closable),b=fe(()=>{var c;return a.currentName.value===((c=t.name)!=null?c:n.value)}),_=w(b.value),f=L(()=>{var c;return(c=t.name)!=null?c:n.value}),m=fe(()=>!t.lazy||_.value||b.value);k(b,c=>{c&&(_.value=!0)});const p=Je({uid:o.uid,slots:u,props:t,paneName:f,active:b,index:n,isClosable:g});return ye(()=>{a.registerPane(p)}),Xe(()=>{a.unregisterPane(p.uid)}),(c,D)=>O(m)?Ge((R(),j("div",{key:0,id:`pane-${O(f)}`,class:Pe(O(s).b()),role:"tabpanel","aria-hidden":!O(b),"aria-labelledby":`tab-${O(f)}`},[$e(c.$slots,"default")],10,ft)),[[Ye,O(b)]]):Ze("v-if",!0)}});var Te=ge(_t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const ht=Qe(pt,{TabPane:Te}),Pt=et(Te);var gt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,$t=(e,t,o,u)=>{for(var a=u>1?void 0:u?yt(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(a=(u?n(t,o,a):n(a))||a);return u&&a&&gt(t,o,a),a};let se=class extends de{get codeParent(){return`
        <scripts setup>
        import { ref } from 'vue'
        import Child from './Child.vue'
        const msg = ref('Hello World')
        <\/scripts>
        <template>
          <p>This is</p>
          <Child :msg="msg"/>
        </template>
        `}get codeChild(){return`
        <scripts setup>
        const props = defineProps(['msg'])
        <\/scripts>
        <template>
          <p>{{ props.msg }}</p>  
        </template>
        `}};se=$t([ue({components:{PCodeBlock:G,PCodeBlockDisplay:Ce}})],se);const Ct=E("p",null,"1. 在子组件中使用defineProps=['msg']接收参数",-1),Nt=E("p",null,'2. 在父组件中使用<child :msg="msg"/>向子组件传递参数',-1),wt=E("div",null,[E("p",null,"This is"),E("p",null,"Hello World")],-1);function Bt(e,t,o,u,a,s){const n=G,g=Ce;return R(),j(tt,null,[Ct,l(n,{code:e.codeChild,title:"Child.vue",inDisplay:""},null,8,["code"]),Nt,l(g,{code:e.codeParent,title:"Parent.vue"},{default:z(()=>[wt]),_:1},8,["code"])],64)}const Tt=X(se,[["render",Bt]]),Et=E("li",null,"“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 props 或 emits 的 attribute 或者 v-on 事件监听器。 最常见的例子就是 class、style 和 id。",-1),St=E("li",null,"如果想禁用透传，可以在子组件设置inheritAttrs: false",-1),xt=[Et,St],Ot={__name:"Cross",setup(e){return(t,o)=>(R(),j("ol",null,xt))}},Dt={},Ft=E("li",null,"类似ContextProvider和useContext",-1),kt=E("li",null,"在提供数据的组件使用provide(key:any,val:any|any[])函数发布数据",-1),Vt=E("li",null,"在接收数据的组件使用inject(key:any,defaultValue:any)函数接收数据",-1),At=E("li",null,"可以发布的数据包括函数",-1),Rt=[Ft,kt,Vt,At];function zt(e,t){return R(),j("ol",null,Rt)}const Mt=X(Dt,[["render",zt]]);var jt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,Ut=(e,t,o,u)=>{for(var a=u>1?void 0:u?Lt(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(a=(u?n(t,o,a):n(a))||a);return u&&a&&jt(t,o,a),a};let ne=class extends de{get code(){return`
        <!-- 虽然 \`42\` 是个常量，我们还是需要使用 v-bind -->
        <!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
        <BlogPost :likes="42" />

        <!-- 根据一个变量的值动态传入 -->
        <BlogPost :likes="post.likes" />

        <!-- 仅写上 prop 但不传值，会隐式转换为 \`true\` -->
        <BlogPost is-published />

        <!-- 虽然 \`false\` 是静态的值，我们还是需要使用 v-bind -->
        <!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
        <BlogPost :is-published="false" />

        <!-- 根据一个变量的值动态传入 -->
        <BlogPost :is-published="post.isPublished" />

        <!-- 虽然这个对象字面量是个常量，我们还是需要使用 v-bind -->
        <!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
        <BlogPost
          :author="{
            name: 'Veronica',
            company: 'Veridian Dynamics'
          }"
        />

        <!-- 根据一个变量的值动态传入 -->
        <BlogPost :author="post.author" />
        `}};ne=Ut([ue({components:{PCodeBlock:G}})],ne);function It(e,t,o,u,a,s){const n=G;return R(),j("div",null,[l(n,{code:e.code},null,8,["code"])])}const Kt=X(ne,[["render",It]]);var qt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Wt=(e,t,o,u)=>{for(var a=u>1?void 0:u?Ht(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(a=(u?n(t,o,a):n(a))||a);return u&&a&&qt(t,o,a),a};let oe=class extends de{constructor(){super(...arguments);pe(this,"activePannel","1")}};oe=Wt([ue({components:{Directly:Tt,Cross:Ot,Provide:Mt,BaseView:Kt}})],oe);function Jt(e,t,o,u,a,s){const n=I("BaseView"),g=Pt,b=I("Directly"),_=I("Cross"),f=I("Provide"),m=ht;return R(),at(m,{modelValue:e.activePannel,"onUpdate:modelValue":t[0]||(t[0]=p=>e.activePannel=p)},{default:z(()=>[l(g,{label:"基础",name:"1"},{default:z(()=>[l(n)]),_:1}),l(g,{label:"直接传递",name:"2"},{default:z(()=>[l(b)]),_:1}),l(g,{label:"透传属性",name:"3"},{default:z(()=>[l(_)]),_:1}),l(g,{label:"依赖注入",name:"4"},{default:z(()=>[l(f)]),_:1})]),_:1},8,["modelValue"])}const la=X(oe,[["render",Jt]]);export{la as default};
