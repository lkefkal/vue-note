import{a8 as c,af as r,ag as t,m as n,c as f,S as I,q as h,ah as w,T as y,ai as F}from"./index-53337f56.js";const K=()=>{const s=c(r,void 0),u=c(t,void 0);return{form:s,formItem:u}},U=(s,{formItemContext:u,disableIdGeneration:i,disableIdManagement:l})=>{i||(i=n(!1)),l||(l=n(!1));const a=n();let o;const p=f(()=>{var v;return!!(!s.label&&u&&u.inputIds&&((v=u.inputIds)==null?void 0:v.length)<=1)});return I(()=>{o=h([y(s,"id"),i],([v,e])=>{const d=v??(e?void 0:w().value);d!==a.value&&(u!=null&&u.removeInputId&&(a.value&&u.removeInputId(a.value),!(l!=null&&l.value)&&!e&&d&&u.addInputId(d)),a.value=d)},{immediate:!0})}),F(()=>{o&&o(),u!=null&&u.removeInputId&&a.value&&u.removeInputId(a.value)}),{isLabeledByFormItem:p,inputId:a}};export{U as a,K as u};
