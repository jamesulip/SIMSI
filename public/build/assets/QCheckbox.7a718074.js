import{r as _,j as a,k as n,aJ as E,a1 as P,l as z,aI as F,p as N,aQ as d,N as V,i as R,Q as D}from"./app.3fe44b88.js";import{a as M,u as H}from"./focus-manager.70515060.js";import{a as K,j as L}from"./use-key-composition.4ee5e5f6.js";function J(l,f){const e=_(null),c=a(()=>l.disable===!0?null:n("span",{ref:e,class:"no-outline",tabindex:-1}));function i(r){const o=f.value;r!==void 0&&r.type.indexOf("key")===0?o!==null&&document.activeElement!==o&&o.contains(document.activeElement)===!0&&o.focus():e.value!==null&&(r===void 0||o!==null&&o.contains(r.target)===!0)&&e.value.focus()}return{refocusTargetEl:c,refocusTarget:i}}const G={xs:30,sm:35,md:40,lg:50,xl:60},U={...H,...F,...K,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:l=>l==="tf"||l==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},W=["update:modelValue"];function X(l,f){const{props:e,slots:c,emit:i,proxy:r}=N(),{$q:o}=r,I=M(e,o),k=_(null),{refocusTargetEl:h,refocusTarget:q}=J(e,k),C=E(e,G),v=a(()=>e.val!==void 0&&Array.isArray(e.modelValue)),m=a(()=>{const t=d(e.val);return v.value===!0?e.modelValue.findIndex(s=>d(s)===t):-1}),u=a(()=>v.value===!0?m.value>-1:d(e.modelValue)===d(e.trueValue)),b=a(()=>v.value===!0?m.value===-1:d(e.modelValue)===d(e.falseValue)),x=a(()=>u.value===!1&&b.value===!1),y=a(()=>e.disable===!0?-1:e.tabindex||0),S=a(()=>`q-${l} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(I.value===!0?` q-${l}--dark`:"")+(e.dense===!0?` q-${l}--dense`:"")+(e.leftLabel===!0?" reverse":"")),$=a(()=>{const t=u.value===!0?"truthy":b.value===!0?"falsy":"indet",s=e.color!==void 0&&(e.keepColor===!0||(l==="toggle"?u.value===!0:b.value!==!0))?` text-${e.color}`:"";return`q-${l}__inner relative-position non-selectable q-${l}__inner--${t}${s}`}),w=a(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{"^checked":u.value===!0?"checked":void 0,name:e.name,value:v.value===!0?e.val:e.trueValue}),t}),O=L(w),j=a(()=>{const t={tabindex:y.value,role:l==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":x.value===!0?"mixed":u.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function g(t){t!==void 0&&(V(t),q(t)),e.disable!==!0&&i("update:modelValue",B(),t)}function B(){if(v.value===!0){if(u.value===!0){const t=e.modelValue.slice();return t.splice(m.value,1),t}return e.modelValue.concat([e.val])}if(u.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(b.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function Q(t){(t.keyCode===13||t.keyCode===32)&&V(t)}function T(t){(t.keyCode===13||t.keyCode===32)&&g(t)}const A=f(u,x);return Object.assign(r,{toggle:g}),()=>{const t=A();e.disable!==!0&&O(t,"unshift",` q-${l}__native absolute q-ma-none q-pa-none`);const s=[n("div",{class:$.value,style:C.value,"aria-hidden":"true"},t)];h.value!==null&&s.push(h.value);const p=e.label!==void 0?P(c.default,[e.label]):z(c.default);return p!==void 0&&s.push(n("div",{class:`q-${l}__label q-anchor--skip`},p)),n("div",{ref:k,class:S.value,...j.value,onClick:g,onKeydown:Q,onKeyup:T},s)}}const Y=n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),le=R({name:"QCheckbox",props:U,emits:W,setup(l){function f(e,c){const i=a(()=>(e.value===!0?l.checkedIcon:c.value===!0?l.indeterminateIcon:l.uncheckedIcon)||null);return()=>i.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(D,{class:"q-checkbox__icon",name:i.value})])]:[Y]}return X("checkbox",f)}});export{le as Q};
