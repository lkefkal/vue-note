import{j as E,A as Z,ay as q,a9 as z,n as l,g as x,ag as F,ah as G,I as w,az as J,aA as B,L as W,aB as D,P as U,C as L,o as r,c as v,a as S,F as h,l as $,Z as P,d as K,a6 as O,K as X,ae as H,X as N,Y as R,k as V,t as j,b as M,al as Q,a8 as ee,af as te}from"./index-5fefc914.js";const se=["","default","small","large"],T=o=>{const t=Z();return E(()=>{var e,f;return(f=(e=t==null?void 0:t.proxy)==null?void 0:e.$props)==null?void 0:f[o]})},le=q({type:String,values:se,required:!1}),ne=Symbol("size"),ae=()=>{const o=z(ne,{});return E(()=>l(o.size)||"")},oe=(o,t={})=>{const e=x(void 0),f=t.prop?e:T("size"),n=t.global?e:ae(),i=t.form?{size:void 0}:z(F,void 0),a=t.formItem?{size:void 0}:z(G,void 0);return E(()=>f.value||l(o)||(a==null?void 0:a.size)||(i==null?void 0:i.size)||n.value||"")},ye=o=>{const t=T("disabled"),e=z(F,void 0);return E(()=>t.value||l(o)||(e==null?void 0:e.disabled)||!1)},A=Symbol("elDescriptions");var C=w({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup(){return{descriptions:z(A,{})}},render(){var o,t,e,f,n,i;const a=J(this.cell),{border:I,direction:s}=this.descriptions,u=s==="vertical",d=((e=(t=(o=this.cell)==null?void 0:o.children)==null?void 0:t.label)==null?void 0:e.call(t))||a.label,c=(i=(n=(f=this.cell)==null?void 0:f.children)==null?void 0:n.default)==null?void 0:i.call(n),m=a.span,_=a.align?`is-${a.align}`:"",b=a.labelAlign?`is-${a.labelAlign}`:_,g=a.className,k=a.labelClassName,y={width:B(a.width),minWidth:B(a.minWidth)},p=W("descriptions");switch(this.type){case"label":return D(this.tag,{style:y,class:[p.e("cell"),p.e("label"),p.is("bordered-label",I),p.is("vertical-label",u),b,k],colSpan:u?m:1},d);case"content":return D(this.tag,{style:y,class:[p.e("cell"),p.e("content"),p.is("bordered-content",I),p.is("vertical-content",u),_,g],colSpan:u?m:m*2-1},c);default:return D("td",{style:y,class:[p.e("cell"),_],colSpan:m},[U(d)?void 0:D("span",{class:[p.e("label"),k]},d),D("span",{class:[p.e("content"),g]},c)])}}});const re=L({row:{type:Array,default:()=>[]}}),ie={key:1},ce=w({name:"ElDescriptionsRow"}),pe=w({...ce,props:re,setup(o){const t=z(A,{});return(e,f)=>l(t).direction==="vertical"?(r(),v(h,{key:0},[S("tr",null,[(r(!0),v(h,null,$(e.row,(n,i)=>(r(),P(l(C),{key:`tr1-${i}`,cell:n,tag:"th",type:"label"},null,8,["cell"]))),128))]),S("tr",null,[(r(!0),v(h,null,$(e.row,(n,i)=>(r(),P(l(C),{key:`tr2-${i}`,cell:n,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(r(),v("tr",ie,[(r(!0),v(h,null,$(e.row,(n,i)=>(r(),v(h,{key:`tr3-${i}`},[l(t).border?(r(),v(h,{key:0},[K(l(C),{cell:n,tag:"td",type:"label"},null,8,["cell"]),K(l(C),{cell:n,tag:"td",type:"content"},null,8,["cell"])],64)):(r(),P(l(C),{key:1,cell:n,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}});var ue=O(pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const de=L({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:le,title:{type:String,default:""},extra:{type:String,default:""}}),me=w({name:"ElDescriptions"}),fe=w({...me,props:de,setup(o){const t=o,e=W("descriptions"),f=oe(),n=X();H(A,t);const i=E(()=>[e.b(),e.m(f.value)]),a=(s,u,d,c=!1)=>(s.props||(s.props={}),u>d&&(s.props.span=d),c&&(s.props.span=u),s),I=()=>{var s;const u=Q((s=n.default)==null?void 0:s.call(n)).filter(b=>{var g;return((g=b==null?void 0:b.type)==null?void 0:g.name)==="ElDescriptionsItem"}),d=[];let c=[],m=t.column,_=0;return u.forEach((b,g)=>{var k;const y=((k=b.props)==null?void 0:k.span)||1;if(g<u.length-1&&(_+=y>m?m:y),g===u.length-1){const p=t.column-_%t.column;c.push(a(b,p,m,!0)),d.push(c);return}y<m?(m-=y,c.push(b)):(c.push(a(b,y,m)),d.push(c),m=t.column,c=[])}),d};return(s,u)=>(r(),v("div",{class:N(l(i))},[s.title||s.extra||s.$slots.title||s.$slots.extra?(r(),v("div",{key:0,class:N(l(e).e("header"))},[S("div",{class:N(l(e).e("title"))},[R(s.$slots,"title",{},()=>[V(j(s.title),1)])],2),S("div",{class:N(l(e).e("extra"))},[R(s.$slots,"extra",{},()=>[V(j(s.extra),1)])],2)],2)):M("v-if",!0),S("div",{class:N(l(e).e("body"))},[S("table",{class:N([l(e).e("table"),l(e).is("bordered",s.border)])},[S("tbody",null,[(r(!0),v(h,null,$(I(),(d,c)=>(r(),P(ue,{key:c,row:d},null,8,["row"]))),128))])],2)],2)],2))}});var ve=O(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),Y=w({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const ge=ee(ve,{DescriptionsItem:Y}),he=te(Y);export{ge as E,he as a,oe as b,ye as c,le as u};
