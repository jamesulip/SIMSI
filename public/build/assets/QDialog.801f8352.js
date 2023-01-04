import{i as oe,r as w,j as r,q as R,A as ie,k as c,T as O,l as ne,p as ae,ad as se}from"./app.f1084ffb.js";import{a as le,u as ue,b as re,d as ce,k as de,l as fe,m as me,c as ve,e as ge,r as $,o as p,f as he,n as xe,q as ye}from"./use-prevent-scroll.38107ebb.js";import{b as qe}from"./QSeparator.8770f7d8.js";let g=0;const be={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},A={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},we=oe({name:"QDialog",inheritAttrs:!1,props:{...le,...ue,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...re,"shake","click","escapeKey"],setup(e,{slots:K,emit:s,attrs:E}){const d=ae(),i=w(null),a=w(!1),l=w(!1);let h,n=null,f,x;const S=r(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:_}=he(),{registerTimeout:C}=ce(),{registerTick:L,removeTick:F}=de(),{transitionProps:j,transitionStyle:z}=fe(e,()=>A[e.position][0],()=>A[e.position][1]),{showPortal:D,hidePortal:H,portalIsAccessible:I,renderPortal:Q}=me(d,i,te,!0),{hide:m}=ve({showing:a,hideOnRouteChange:S,handleShow:N,handleHide:X,processOnMount:!0}),{addToHistory:V,removeFromHistory:W}=ge(a,m,S),U=r(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${be[e.position]}`+(l.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),v=r(()=>a.value===!0&&e.seamless!==!0),G=r(()=>e.autoClose===!0?{onClick:Y}:{}),J=r(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${v.value===!0?"modal":"seamless"}`,E.class]);R(()=>e.maximized,t=>{a.value===!0&&b(t)}),R(v,t=>{_(t),t===!0?(xe(k),ye(q)):($(k),p(q))});function N(t){V(),n=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,b(e.maximized),D(),l.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),L(u)):F(),C(()=>{if(d.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:o,bottom:B}=document.activeElement.getBoundingClientRect(),{innerHeight:P}=window,T=window.visualViewport!==void 0?window.visualViewport.height:P;o>0&&B>T/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-T,B>=P?1/0:Math.ceil(document.scrollingElement.scrollTop+B-T/2))),document.activeElement.scrollIntoView()}x=!0,i.value.click(),x=!1}D(!0),l.value=!1,s("show",t)},e.transitionDuration)}function X(t){F(),W(),M(!0),l.value=!0,H(),n!==null&&(((t&&t.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),C(()=>{H(!0),l.value=!1,s("hide",t)},e.transitionDuration)}function u(t){qe(()=>{let o=i.value;o===null||o.contains(document.activeElement)===!0||(o=(t!==""?o.querySelector(t):null)||o.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.querySelector("[autofocus], [data-autofocus]")||o,o.focus({preventScroll:!0}))})}function y(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):u(),s("shake");const o=i.value;o!==null&&(o.classList.remove("q-animate--scale"),o.classList.add("q-animate--scale"),clearTimeout(h),h=setTimeout(()=>{i.value!==null&&(o.classList.remove("q-animate--scale"),u())},170))}function q(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&y():(s("escapeKey"),m()))}function M(t){clearTimeout(h),(t===!0||a.value===!0)&&(b(!1),e.seamless!==!0&&(_(!1),$(k),p(q))),t!==!0&&(n=null)}function b(t){t===!0?f!==!0&&(g<1&&document.body.classList.add("q-body--dialog"),g++,f=!0):f===!0&&(g<2&&document.body.classList.remove("q-body--dialog"),g--,f=!1)}function Y(t){x!==!0&&(m(t),s("click",t))}function Z(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?m(t):e.noShake!==!0&&y(t.relatedTarget)}function k(t){e.allowFocusOutside!==!0&&I.value===!0&&se(i.value,t.target)!==!0&&u('[tabindex]:not([tabindex="-1"])')}Object.assign(d.proxy,{focus:u,shake:y,__updateRefocusTarget(t){n=t||null}}),ie(M);const ee=d.proxy.$q.platform.is.ios===!0?"onClick":"onFocusin";function te(){return c("div",{role:"dialog","aria-modal":v.value===!0?"true":"false",...E,class:J.value},[c(O,{name:"q-transition--fade",appear:!0},()=>v.value===!0?c("div",{class:"q-dialog__backdrop fixed-full",style:z.value,"aria-hidden":"true",tabindex:-1,[ee]:Z}):null),c(O,j.value,()=>a.value===!0?c("div",{ref:i,class:U.value,style:z.value,tabindex:-1,...G.value},ne(K.default)):null)])}return Q}});export{we as Q};
