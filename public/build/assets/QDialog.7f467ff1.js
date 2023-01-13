import{i as oe,r as w,j as c,q as R,C as ie,k as d,T as p,l as ne,p as ae,aa as le}from"./app.1d2fb737.js";import{u as se,a as ue}from"./use-prevent-scroll.3691fc3f.js";import{a as re,u as ce,b as de,d as fe,e as me,f as ge,h as ve,c as he,r as O,j as $,i as xe,l as ye}from"./focusout.11f43612.js";import{b as be}from"./focus-manager.752c11ce.js";let h=0;const qe={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},j={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},Ee=oe({name:"QDialog",inheritAttrs:!1,props:{...re,...ce,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...de,"shake","click","escapeKey"],setup(e,{slots:K,emit:s,attrs:E}){const f=ae(),i=w(null),l=w(!1),u=w(!1);let n=null,a=null,m,x;const S=c(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:_}=ue(),{registerTimeout:C}=fe(),{registerTick:L,removeTick:F}=me(),{transitionProps:A,transitionStyle:z}=ge(e,()=>j[e.position][0],()=>j[e.position][1]),{showPortal:D,hidePortal:H,portalIsAccessible:I,renderPortal:Q}=ve(f,i,te,"dialog"),{hide:g}=he({showing:l,hideOnRouteChange:S,handleShow:N,handleHide:X,processOnMount:!0}),{addToHistory:V,removeFromHistory:W}=se(l,g,S),U=c(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${qe[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),v=c(()=>l.value===!0&&e.seamless!==!0),G=c(()=>e.autoClose===!0?{onClick:Y}:{}),J=c(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${v.value===!0?"modal":"seamless"}`,E.class]);R(()=>e.maximized,t=>{l.value===!0&&q(t)}),R(v,t=>{_(t),t===!0?(xe(k),ye(b)):(O(k),$(b))});function N(t){V(),a=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,q(e.maximized),D(),u.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),L(r)):F(),C(()=>{if(f.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:o,bottom:B}=document.activeElement.getBoundingClientRect(),{innerHeight:P}=window,T=window.visualViewport!==void 0?window.visualViewport.height:P;o>0&&B>T/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-T,B>=P?1/0:Math.ceil(document.scrollingElement.scrollTop+B-T/2))),document.activeElement.scrollIntoView()}x=!0,i.value.click(),x=!1}D(!0),u.value=!1,s("show",t)},e.transitionDuration)}function X(t){F(),W(),M(!0),u.value=!0,H(),a!==null&&(((t&&t.type.indexOf("key")===0?a.closest('[tabindex]:not([tabindex^="-"])'):void 0)||a).focus(),a=null),C(()=>{H(!0),u.value=!1,s("hide",t)},e.transitionDuration)}function r(t){be(()=>{let o=i.value;o===null||o.contains(document.activeElement)===!0||(o=(t!==""?o.querySelector(t):null)||o.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.querySelector("[autofocus], [data-autofocus]")||o,o.focus({preventScroll:!0}))})}function y(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):r(),s("shake");const o=i.value;o!==null&&(o.classList.remove("q-animate--scale"),o.classList.add("q-animate--scale"),n!==null&&clearTimeout(n),n=setTimeout(()=>{n=null,i.value!==null&&(o.classList.remove("q-animate--scale"),r())},170))}function b(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&y():(s("escapeKey"),g()))}function M(t){n!==null&&(clearTimeout(n),n=null),(t===!0||l.value===!0)&&(q(!1),e.seamless!==!0&&(_(!1),O(k),$(b))),t!==!0&&(a=null)}function q(t){t===!0?m!==!0&&(h<1&&document.body.classList.add("q-body--dialog"),h++,m=!0):m===!0&&(h<2&&document.body.classList.remove("q-body--dialog"),h--,m=!1)}function Y(t){x!==!0&&(g(t),s("click",t))}function Z(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?g(t):e.noShake!==!0&&y(t.relatedTarget)}function k(t){e.allowFocusOutside!==!0&&I.value===!0&&le(i.value,t.target)!==!0&&r('[tabindex]:not([tabindex="-1"])')}Object.assign(f.proxy,{focus:r,shake:y,__updateRefocusTarget(t){a=t||null}}),ie(M);const ee=f.proxy.$q.platform.is.ios===!0?"onClick":"onFocusin";function te(){return d("div",{role:"dialog","aria-modal":v.value===!0?"true":"false",...E,class:J.value},[d(p,{name:"q-transition--fade",appear:!0},()=>v.value===!0?d("div",{class:"q-dialog__backdrop fixed-full",style:z.value,"aria-hidden":"true",tabindex:-1,[ee]:Z}):null),d(p,A.value,()=>l.value===!0?d("div",{ref:i,class:U.value,style:z.value,tabindex:-1,...G.value},ne(K.default)):null)])}return Q}});export{Ee as Q};
