import{i as r,j as i,k as s,l as u}from"./app.1d2fb737.js";const d=r({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=i(()=>parseInt(e.lines,10)),a=i(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),l=i(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>s("div",{style:l.value,class:a.value},u(t.default))}}),o=["B","KB","MB","GB","TB","PB"];function h(e){let t=0;for(;parseInt(e,10)>=1024&&t<o.length-1;)e/=1024,++t;return`${e.toFixed(1)}${o[t]}`}function p(e){return e.charAt(0).toUpperCase()+e.slice(1)}function v(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function b(e,t,n){if(n<=t)return t;const a=n-t+1;let l=t+(e-t)%a;return l<t&&(l=a+l),l===0?0:l}function f(e,t=2,n="0"){if(e==null)return e;const a=""+e;return a.length>=t?a:new Array(t-a.length+1).join(n)+a}export{d as Q,v as b,p as c,h,b as n,f as p};
