import{p as E,q as k,af as A,s as N,V as y,ag as b,r as L,a0 as Q,ah as U,k as G,a1 as K,ai as I,aj as x,j as M,ak as q,C as H,al as O,am as B,an as D,L as W,a8 as z}from"./app.1d2fb737.js";import{r as F,c as X}from"./focus-manager.752c11ce.js";const ie={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},le=["beforeShow","show","beforeHide","hide"];function se({showing:e,canShow:t,hideOnRouteChange:o,handleShow:i,handleHide:l,processOnMount:f}){const r=E(),{props:s,emit:a,proxy:v}=r;let u;function h(n){e.value===!0?T(n):w(n)}function w(n){if(s.disable===!0||n!==void 0&&n.qAnchorHandled===!0||t!==void 0&&t(n)!==!0)return;const m=s["onUpdate:modelValue"]!==void 0;m===!0&&(a("update:modelValue",!0),u=n,y(()=>{u===n&&(u=void 0)})),(s.modelValue===null||m===!1)&&$(n)}function $(n){e.value!==!0&&(e.value=!0,a("beforeShow",n),i!==void 0?i(n):a("show",n))}function T(n){if(s.disable===!0)return;const m=s["onUpdate:modelValue"]!==void 0;m===!0&&(a("update:modelValue",!1),u=n,y(()=>{u===n&&(u=void 0)})),(s.modelValue===null||m===!1)&&C(n)}function C(n){e.value!==!1&&(e.value=!1,a("beforeHide",n),l!==void 0?l(n):a("hide",n))}function S(n){s.disable===!0&&n===!0?s["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!1):n===!0!==e.value&&(n===!0?$:C)(u)}k(()=>s.modelValue,S),o!==void 0&&A(r)===!0&&k(()=>v.$route.fullPath,()=>{o.value===!0&&e.value===!0&&T()}),f===!0&&N(()=>{S(s.modelValue)});const V={show:w,hide:T,toggle:h};return Object.assign(v,V),V}const P=[];function ae(e){return P.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Y(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return b(e)}else if(e.__qPortal===!0){const o=b(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=b(e)}while(e!=null)}function ue(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=Y(e,t);continue}e.hide(t)}e=b(e)}}function J(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function re(e,t,o,i){const l=L(!1),f=L(!1);let r=null;const s={},a=i==="dialog"&&J(e);function v(h){if(h===!0){F(s),f.value=!0;return}f.value=!1,l.value===!1&&(a===!1&&r===null&&(r=I(!1,i)),l.value=!0,P.push(e.proxy),X(s))}function u(h){if(f.value=!1,h!==!0)return;F(s),l.value=!1;const w=P.indexOf(e.proxy);w!==-1&&P.splice(w,1),r!==null&&(x(r),r=null)}return Q(()=>{u(!0)}),e.proxy.__qPortal=!0,U(e.proxy,"contentEl",()=>t.value),{showPortal:v,hidePortal:u,portalIsActive:l,portalIsAccessible:f,renderPortal:()=>a===!0?o():l.value===!0?[G(K,{to:r},o())]:void 0}}const ce={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function de(e,t=()=>{},o=()=>{}){return{transitionProps:M(()=>{const i=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:M(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function fe(){let e;const t=E();function o(){e=void 0}return q(o),H(o),{removeTick:o,registerTick(i){e=i,y(()=>{e===i&&(O(t)===!1&&e(),e=void 0)})}}}function me(){let e=null;const t=E();function o(){e!==null&&(clearTimeout(e),e=null)}return q(o),H(o),{removeTimeout:o,registerTimeout(i,l){o(),O(t)===!1&&(e=setTimeout(i,l))}}}const R=[null,document,document.body,document.scrollingElement,document.documentElement];function pe(e,t){let o=B(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return R.includes(o)?window:o}function he(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function we(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let g;function ve(){if(g!==void 0)return g;const e=document.createElement("p"),t=document.createElement("div");D(e,{width:"100%",height:"200px"}),D(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let i=e.offsetWidth;return o===i&&(i=t.clientWidth),t.remove(),g=o-i,g}function ge(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const c=[];let p;function Z(e){p=e.keyCode===27}function ee(){p===!0&&(p=!1)}function te(e){p===!0&&(p=!1,z(e,27)===!0&&c[c.length-1](e))}function _(e){window[e]("keydown",Z),window[e]("blur",ee),window[e]("keyup",te),p=!1}function be(e){W.is.desktop===!0&&(c.push(e),c.length===1&&_("addEventListener"))}function Pe(e){const t=c.indexOf(e);t>-1&&(c.splice(t,1),c.length===0&&_("removeEventListener"))}const d=[];function j(e){d[d.length-1](e)}function Te(e){W.is.desktop===!0&&(d.push(e),d.length===1&&document.body.addEventListener("focusin",j))}function ye(e){const t=d.indexOf(e);t>-1&&(d.splice(t,1),d.length===0&&document.body.removeEventListener("focusin",j))}export{ie as a,le as b,se as c,me as d,fe as e,de as f,ve as g,re as h,Te as i,Pe as j,pe as k,be as l,Y as m,he as n,we as o,P as p,ge as q,ye as r,ae as s,ue as t,ce as u};
