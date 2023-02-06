import{i as ee,J as te,p as oe,L as ae,r as O,j as f,an as ne,a1 as ie,ao as le,N as se,ap as re,s as k,D as C,a0 as E,Y as x,at as ue,k as H,T as ce,y as de,l as fe,S as ve}from"./app.b5166522.js";import{u as he,v as j,h as ge,p as A,i as me,g as ye,r as D,s as Te,d as q,j as pe}from"./QLayout.edc35d24.js";const Pe=ee({name:"QTooltip",inheritAttrs:!1,props:{...he,...te,...oe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:j},self:{type:String,default:"top middle",validator:j},offset:{type:Array,default:()=>[14,14],validator:ge},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ae],setup(e,{slots:L,emit:y,attrs:v}){let i,l;const h=de(),{proxy:{$q:a}}=h,s=O(null),c=O(!1),M=f(()=>A(e.anchor,a.lang.rtl)),N=f(()=>A(e.self,a.lang.rtl)),Q=f(()=>e.persistent!==!0),{registerTick:W,removeTick:R}=ne(),{registerTimeout:d}=ie(),{transitionProps:_,transitionStyle:B}=le(e),{localScrollTarget:T,changeScrollEvent:I,unconfigureScrollTarget:J}=me(e,P),{anchorEl:o,canShow:U,anchorEvents:r}=ye({showing:c,configureAnchorEl:K}),{show:V,hide:g}=se({showing:c,canShow:U,handleShow:$,handleHide:z,hideOnRouteChange:Q,processOnMount:!0});Object.assign(r,{delayShow:F,delayHide:G});const{showPortal:p,hidePortal:S,renderPortal:Y}=re(h,s,Z,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);k(m,n=>{(n===!0?pe:D)(t)}),C(()=>{D(t)})}function $(t){p(),W(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=k(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{p(!0),y("show",t)},e.transitionDuration)}function z(t){R(),S(),b(),d(()=>{S(!0),y("hide",t)},e.transitionDuration)}function b(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),J(),E(r,"tooltipTemp")}function u(){const t=s.value;o.value===null||!t||Te({el:t,offset:e.offset,anchorEl:o.value,anchorOrigin:M.value,selfOrigin:N.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function F(t){if(a.platform.is.mobile===!0){q(),document.body.classList.add("non-selectable");const m=o.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[m,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{V(t)},e.delay)}function G(t){a.platform.is.mobile===!0&&(E(r,"tooltipTemp"),q(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function K(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(o.value!==null||e.scrollTarget!==void 0){T.value=ue(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;I(T.value,t)}}function X(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,B.value],role:"tooltip"},fe(L.default)):null}function Z(){return H(ce,_.value,X)}return C(b),Object.assign(h.proxy,{updatePosition:u}),Y}});export{Pe as Q};