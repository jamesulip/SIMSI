import{i as ee,r as w,j as f,q as k,C,U as E,O as x,k as H,T as te,p as oe,l as ae,J as ne}from"./app.19d60d81.js";import{u as ie,v as j,h as le,i as se,g as re,r as q,s as ue,d as A,p as D,j as ce}from"./QLayout.08230ca6.js";import{a as de,u as fe,b as he,e as ve,d as me,f as ge,c as Te,h as ye,k as pe}from"./focusout.4340d555.js";const Oe=ee({name:"QTooltip",inheritAttrs:!1,props:{...ie,...de,...fe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:j},self:{type:String,default:"top middle",validator:j},offset:{type:Array,default:()=>[14,14],validator:le},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...he],setup(e,{slots:M,emit:T,attrs:h}){let i,l;const v=oe(),{proxy:{$q:a}}=v,s=w(null),c=w(!1),L=f(()=>D(e.anchor,a.lang.rtl)),Q=f(()=>D(e.self,a.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:N,removeTick:R}=ve(),{registerTimeout:d}=me(),{transitionProps:U,transitionStyle:_}=ge(e),{localScrollTarget:y,changeScrollEvent:B,unconfigureScrollTarget:I}=se(e,P),{anchorEl:o,canShow:J,anchorEvents:r}=re({showing:c,configureAnchorEl:X}),{show:V,hide:m}=Te({showing:c,canShow:J,handleShow:z,handleHide:F,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:G,delayHide:K});const{showPortal:p,hidePortal:b,renderPortal:$}=ye(v,s,Z,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&ne(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);k(g,n=>{(n===!0?ce:q)(t)}),C(()=>{q(t)})}function z(t){p(),N(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=k(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{p(!0),T("show",t)},e.transitionDuration)}function F(t){R(),b(),S(),d(()=>{b(!0),T("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),I(),E(r,"tooltipTemp")}function u(){const t=s.value;o.value===null||!t||ue({el:t,offset:e.offset,anchorEl:o.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function G(t){if(a.platform.is.mobile===!0){A(),document.body.classList.add("non-selectable");const g=o.value,n=["touchmove","touchcancel","touchend","click"].map(O=>[g,O,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{V(t)},e.delay)}function K(t){a.platform.is.mobile===!0&&(E(r,"tooltipTemp"),A(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function X(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(o.value!==null||e.scrollTarget!==void 0){y.value=pe(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;B(y.value,t)}}function Y(){return c.value===!0?H("div",{...h,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",h.class],style:[h.style,_.value],role:"tooltip"},ae(M.default)):null}function Z(){return H(te,U.value,Y)}return C(S),Object.assign(v.proxy,{updatePosition:u}),$}});export{Oe as Q};