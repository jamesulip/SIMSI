import{U as Z,V as D,W as G,X as H,Y as V,Z as Q,$ as U,S as L,a0 as F,r as W,j as c,s as K,y as j,a3 as J,k as f,T as ee,bx as te,l as M,by as ne,i as O,K as oe,M as ae,v as ie,D as re,a4 as le,aR as ue,x as z,aD as se}from"./app.87d79099.js";import{g as X,s as Y}from"./touch.70a9dd44.js";import{d as ce}from"./QLayout.4df5db92.js";import{u as ve}from"./use-cache.b0833c75.js";import{u as de,a as fe,b as me}from"./use-fullscreen.fb9bbc00.js";function pe(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((l,m)=>{const i=parseFloat(l);i&&(o[m]=i)}),o}const ge=Z({name:"touch-swipe",beforeMount(e,{value:o,arg:l,modifiers:m}){if(m.mouse!==!0&&D.has.touch!==!0)return;const i=m.mouseCapture===!0?"Capture":"",t={handler:o,sensitivity:pe(l),direction:X(m),noop:G,mouseStart(a){Y(a,t)&&H(a)&&(V(t,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(Y(a,t)){const d=a.target;V(t,"temp",[[d,"touchmove","move","notPassiveCapture"],[d,"touchcancel","end","notPassiveCapture"],[d,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,d){D.is.firefox===!0&&Q(e,!0);const h=U(a);t.event={x:h.left,y:h.top,time:Date.now(),mouse:d===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){L(a);return}const d=Date.now()-t.event.time;if(d===0)return;const h=U(a),y=h.left-t.event.x,u=Math.abs(y),x=h.top-t.event.y,s=Math.abs(x);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&s<t.sensitivity[1]){t.end(a);return}}else if(u<t.sensitivity[2]&&s<t.sensitivity[2])return;const p=u/d,b=s/d;t.direction.vertical===!0&&u<s&&u<100&&b>t.sensitivity[0]&&(t.event.dir=x<0?"up":"down"),t.direction.horizontal===!0&&u>s&&s<100&&p>t.sensitivity[0]&&(t.event.dir=y<0?"left":"right"),t.direction.up===!0&&u<s&&x<0&&u<100&&b>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<s&&x>0&&u<100&&b>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>s&&y<0&&s<100&&p>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>s&&y>0&&s<100&&p>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(L(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ce(),t.styleCleanup=k=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};k===!0?setTimeout(C,50):C()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:d,distance:{x:u,y:s}})):t.end(a)},end(a){t.event!==void 0&&(F(t,"temp"),D.is.firefox===!0&&Q(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&L(a),t.event=void 0)}};if(e.__qtouchswipe=t,m.mouse===!0){const a=m.mouseCapture===!0||m.mousecapture===!0?"Capture":"";V(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}D.has.touch===!0&&V(t,"main",[[e,"touchstart","touchStart",`passive${m.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const l=e.__qtouchswipe;l!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&l.end(),l.handler=o.value),l.direction=X(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(F(o,"main"),F(o,"temp"),D.is.firefox===!0&&Q(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}}),he={name:{required:!0},disable:Boolean},R={setup(e,{slots:o}){return()=>f("div",{class:"q-panel scroll",role:"tabpanel"},M(o.default))}},ye={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},xe=["update:modelValue","beforeTransition","transition"];function be(){const{props:e,emit:o,proxy:l}=j(),{getCacheWithFn:m}=ve();let i,t;const a=W(null),d=W(null);function h(n){const r=e.vertical===!0?"up":"left";_((l.$q.lang.rtl===!0?-1:1)*(n.direction===r?1:-1))}const y=c(()=>[[ge,h,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=c(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),x=c(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),s=c(()=>`--q-transition-duration: ${e.transitionDuration}ms`),p=c(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),b=c(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),k=c(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);K(()=>e.modelValue,(n,r)=>{const g=P(n)===!0?$(n):-1;t!==!0&&w(g===-1?0:g<$(r)?-1:1),a.value!==g&&(a.value=g,o("beforeTransition",n,r),J(()=>{o("transition",n,r)}))});function C(){_(1)}function B(){_(-1)}function T(n){o("update:modelValue",n)}function P(n){return n!=null&&n!==""}function $(n){return i.findIndex(r=>r.props.name===n&&r.props.disable!==""&&r.props.disable!==!0)}function E(){return i.filter(n=>n.props.disable!==""&&n.props.disable!==!0)}function w(n){const r=n!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(n===-1?u.value:x.value):null;d.value!==r&&(d.value=r)}function _(n,r=a.value){let g=r+n;for(;g>-1&&g<i.length;){const S=i[g];if(S!==void 0&&S.props.disable!==""&&S.props.disable!==!0){w(n),t=!0,o("update:modelValue",S.props.name),setTimeout(()=>{t=!1});return}g+=n}e.infinite===!0&&i.length>0&&r!==-1&&r!==i.length&&_(n,n===-1?i.length:-1)}function A(){const n=$(e.modelValue);return a.value!==n&&(a.value=n),!0}function N(){const n=P(e.modelValue)===!0&&A()&&i[a.value];return e.keepAlive===!0?[f(ne,b.value,[f(k.value===!0?m(p.value,()=>({...R,name:p.value})):R,{key:p.value,style:s.value},()=>n)])]:[f("div",{class:"q-panel scroll",style:s.value,key:p.value,role:"tabpanel"},[n])]}function v(){if(i.length!==0)return e.animated===!0?[f(ee,{name:d.value},N)]:N()}function q(n){return i=te(M(n.default,[])).filter(r=>r.props!==null&&r.props.slot===void 0&&P(r.props.name)===!0),i.length}function I(){return i}return Object.assign(l,{next:C,previous:B,goTo:T}),{panelIndex:a,panelDirectives:y,updatePanelsList:q,updatePanelIndex:A,getPanelContent:v,getEnabledPanels:E,getPanels:I,isValidPanelName:P,keepAliveProps:b,needsUniqueKeepAliveWrapper:k,goToPanelByOffset:_,goToPanel:T,nextPanel:C,previousPanel:B}}const Te=O({name:"QCarouselSlide",props:{...he,imgSrc:String},setup(e,{slots:o}){const l=c(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:l.value},M(o.default))}}),$e=O({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:o}){const l=c(()=>`q-carousel__control absolute absolute-${e.position}`),m=c(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>f("div",{class:l.value,style:m.value},M(o.default))}}),Ce=["top","right","bottom","left"],_e=["regular","flat","outline","push","unelevated"],Ae=O({name:"QCarousel",props:{...oe,...ye,...de,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>_e.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ce.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...fe,...xe],setup(e,{slots:o}){const{proxy:{$q:l}}=j(),m=ae(e,l);let i=null,t;const{updatePanelsList:a,getPanelContent:d,panelDirectives:h,goToPanel:y,previousPanel:u,nextPanel:x,getEnabledPanels:s,panelIndex:p}=be(),{inFullscreen:b}=me(),k=c(()=>b.value!==!0&&e.height!==void 0?{height:e.height}:{}),C=c(()=>e.vertical===!0?"vertical":"horizontal"),B=c(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(b.value===!0?" fullscreen":"")+(m.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${C.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${E.value}`:"")),T=c(()=>{const v=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?v.reverse():v}),P=c(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),$=c(()=>e.navigationActiveIcon||P.value),E=c(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),w=c(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));K(()=>e.modelValue,()=>{e.autoplay&&_()}),K(()=>e.autoplay,v=>{v?_():i!==null&&(clearTimeout(i),i=null)});function _(){const v=ue(e.autoplay)===!0?Math.abs(e.autoplay):5e3;i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,v>=0?x():u()},v)}ie(()=>{e.autoplay&&_()}),re(()=>{i!==null&&clearTimeout(i)});function A(v,q){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${v} q-carousel__navigation--${E.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},s().map(q))])}function N(){const v=[];if(e.navigation===!0){const q=o["navigation-icon"]!==void 0?o["navigation-icon"]:n=>f(z,{key:"nav"+n.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${n.active===!0?"":"in"}active`,...n.btnProps,onClick:n.onClick}),I=t-1;v.push(A("buttons",(n,r)=>{const g=n.props.name,S=p.value===r;return q({index:r,maxIndex:I,name:g,active:S,btnProps:{icon:S===!0?$.value:P.value,size:"sm",...w.value},onClick:()=>{y(g)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";v.push(A("thumbnails",I=>{const n=I.props;return f("img",{key:"tmb#"+n.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${n.name===e.modelValue?"":"in"}active`+q,src:n.imgSrc||n["img-src"],onClick:()=>{y(n.name)}})}))}return e.arrows===!0&&p.value>=0&&((e.infinite===!0||p.value>0)&&v.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${C.value} absolute flex flex-center`},[f(z,{icon:T.value[0],...w.value,onClick:u})])),(e.infinite===!0||p.value<t-1)&&v.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${C.value} absolute flex flex-center`},[f(z,{icon:T.value[1],...w.value,onClick:x})]))),se(o.control,v)}return()=>(t=a(o),f("div",{class:B.value,style:k.value},[le("div",{class:"q-carousel__slides-container"},d(),"sl-cont",e.swipeable,()=>h.value)].concat(N())))}});export{Ae as Q,$e as a,Te as b};
