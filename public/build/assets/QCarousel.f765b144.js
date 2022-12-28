import{Y as G,C as B,M as Z,Z as H,s as M,_ as V,D as Y,G as L,A as z,r as K,j as d,v as Q,z as X,q as J,k as f,T as ee,aR as te,l as O,aS as ne,i as j,x as ae,y as oe,$ as ie,aM as re,I as F,a4 as le}from"./app.22fd6682.js";import{u as ue,a as se}from"./use-dark.cff53b37.js";import{g as R,s as U,c as ce}from"./touch.ac26634e.js";import{u as ve}from"./use-cache.b0833c75.js";import{u as de,a as fe,b as me}from"./use-fullscreen.b0ffc314.js";function pe(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((l,m)=>{const r=parseFloat(l);r&&(o[m]=r)}),o}const ge=G({name:"touch-swipe",beforeMount(e,{value:o,arg:l,modifiers:m}){if(m.mouse!==!0&&B.has.touch!==!0)return;const r=m.mouseCapture===!0?"Capture":"",t={handler:o,sensitivity:pe(l),direction:R(m),noop:Z,mouseStart(a){U(a,t)&&H(a)&&(M(t,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(U(a,t)){const v=a.target;M(t,"temp",[[v,"touchmove","move","notPassiveCapture"],[v,"touchcancel","end","notPassiveCapture"],[v,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,v){B.is.firefox===!0&&V(e,!0);const h=Y(a);t.event={x:h.left,y:h.top,time:Date.now(),mouse:v===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){L(a);return}const v=Date.now()-t.event.time;if(v===0)return;const h=Y(a),y=h.left-t.event.x,u=Math.abs(y),x=h.top-t.event.y,s=Math.abs(x);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&s<t.sensitivity[1]){t.end(a);return}}else if(u<t.sensitivity[2]&&s<t.sensitivity[2])return;const p=u/v,C=s/v;t.direction.vertical===!0&&u<s&&u<100&&C>t.sensitivity[0]&&(t.event.dir=x<0?"up":"down"),t.direction.horizontal===!0&&u>s&&s<100&&p>t.sensitivity[0]&&(t.event.dir=y<0?"left":"right"),t.direction.up===!0&&u<s&&x<0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<s&&x>0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>s&&y<0&&s<100&&p>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>s&&y>0&&s<100&&p>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(L(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ce(),t.styleCleanup=k=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};k===!0?setTimeout(P,50):P()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:v,distance:{x:u,y:s}})):t.end(a)},end(a){t.event!==void 0&&(z(t,"temp"),B.is.firefox===!0&&V(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&L(a),t.event=void 0)}};if(e.__qtouchswipe=t,m.mouse===!0){const a=m.mouseCapture===!0||m.mousecapture===!0?"Capture":"";M(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}B.has.touch===!0&&M(t,"main",[[e,"touchstart","touchStart",`passive${m.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const l=e.__qtouchswipe;l!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&l.end(),l.handler=o.value),l.direction=R(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(z(o,"main"),z(o,"temp"),B.is.firefox===!0&&V(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}}),he={name:{required:!0},disable:Boolean},W={setup(e,{slots:o}){return()=>f("div",{class:"q-panel scroll",role:"tabpanel"},O(o.default))}},ye={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},xe=["update:modelValue","beforeTransition","transition"];function Ce(){const{props:e,emit:o,proxy:l}=X(),{getCacheWithFn:m}=ve();let r,t;const a=K(null),v=K(null);function h(n){const i=e.vertical===!0?"up":"left";_((l.$q.lang.rtl===!0?-1:1)*(n.direction===i?1:-1))}const y=d(()=>[[ge,h,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=d(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),x=d(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),s=d(()=>`--q-transition-duration: ${e.transitionDuration}ms`),p=d(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),C=d(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),k=d(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Q(()=>e.modelValue,(n,i)=>{const g=b(n)===!0?T(n):-1;t!==!0&&w(g===-1?0:g<T(i)?-1:1),a.value!==g&&(a.value=g,o("beforeTransition",n,i),J(()=>{o("transition",n,i)}))});function P(){_(1)}function D(){_(-1)}function I(n){o("update:modelValue",n)}function b(n){return n!=null&&n!==""}function T(n){return r.findIndex(i=>i.props.name===n&&i.props.disable!==""&&i.props.disable!==!0)}function E(){return r.filter(n=>n.props.disable!==""&&n.props.disable!==!0)}function w(n){const i=n!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(n===-1?u.value:x.value):null;v.value!==i&&(v.value=i)}function _(n,i=a.value){let g=i+n;for(;g>-1&&g<r.length;){const S=r[g];if(S!==void 0&&S.props.disable!==""&&S.props.disable!==!0){w(n),t=!0,o("update:modelValue",S.props.name),setTimeout(()=>{t=!1});return}g+=n}e.infinite===!0&&r.length>0&&i!==-1&&i!==r.length&&_(n,n===-1?r.length:-1)}function A(){const n=T(e.modelValue);return a.value!==n&&(a.value=n),!0}function N(){const n=b(e.modelValue)===!0&&A()&&r[a.value];return e.keepAlive===!0?[f(ne,C.value,[f(k.value===!0?m(p.value,()=>({...W,name:p.value})):W,{key:p.value,style:s.value},()=>n)])]:[f("div",{class:"q-panel scroll",style:s.value,key:p.value,role:"tabpanel"},[n])]}function c(){if(r.length!==0)return e.animated===!0?[f(ee,{name:v.value},N)]:N()}function q(n){return r=te(O(n.default,[])).filter(i=>i.props!==null&&i.props.slot===void 0&&b(i.props.name)===!0),r.length}function $(){return r}return Object.assign(l,{next:P,previous:D,goTo:I}),{panelIndex:a,panelDirectives:y,updatePanelsList:q,updatePanelIndex:A,getPanelContent:c,getEnabledPanels:E,getPanels:$,isValidPanelName:b,keepAliveProps:C,needsUniqueKeepAliveWrapper:k,goToPanelByOffset:_,goToPanel:I,nextPanel:P,previousPanel:D}}const Ie=j({name:"QCarouselSlide",props:{...he,imgSrc:String},setup(e,{slots:o}){const l=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:l.value},O(o.default))}}),Pe=["top","right","bottom","left"],_e=["regular","flat","outline","push","unelevated"],Te=j({name:"QCarousel",props:{...ue,...ye,...de,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>_e.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Pe.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...fe,...xe],setup(e,{slots:o}){const{proxy:{$q:l}}=X(),m=se(e,l);let r,t;const{updatePanelsList:a,getPanelContent:v,panelDirectives:h,goToPanel:y,previousPanel:u,nextPanel:x,getEnabledPanels:s,panelIndex:p}=Ce(),{inFullscreen:C}=me(),k=d(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),P=d(()=>e.vertical===!0?"vertical":"horizontal"),D=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(m.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${P.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${E.value}`:"")),I=d(()=>{const c=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?c.reverse():c}),b=d(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),T=d(()=>e.navigationActiveIcon||b.value),E=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),w=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));Q(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(r),_())}),Q(()=>e.autoplay,c=>{c?_():clearInterval(r)});function _(){const c=re(e.autoplay)===!0?e.autoplay:5e3;r=setTimeout(c>=0?x:u,Math.abs(c))}ae(()=>{e.autoplay&&_()}),oe(()=>{clearInterval(r)});function A(c,q){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${c} q-carousel__navigation--${E.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},s().map(q))])}function N(){const c=[];if(e.navigation===!0){const q=o["navigation-icon"]!==void 0?o["navigation-icon"]:n=>f(F,{key:"nav"+n.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${n.active===!0?"":"in"}active`,...n.btnProps,onClick:n.onClick}),$=t-1;c.push(A("buttons",(n,i)=>{const g=n.props.name,S=p.value===i;return q({index:i,maxIndex:$,name:g,active:S,btnProps:{icon:S===!0?T.value:b.value,size:"sm",...w.value},onClick:()=>{y(g)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";c.push(A("thumbnails",$=>{const n=$.props;return f("img",{key:"tmb#"+n.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${n.name===e.modelValue?"":"in"}active`+q,src:n.imgSrc||n["img-src"],onClick:()=>{y(n.name)}})}))}return e.arrows===!0&&p.value>=0&&((e.infinite===!0||p.value>0)&&c.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${P.value} absolute flex flex-center`},[f(F,{icon:I.value[0],...w.value,onClick:u})])),(e.infinite===!0||p.value<t-1)&&c.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${P.value} absolute flex flex-center`},[f(F,{icon:I.value[1],...w.value,onClick:x})]))),le(o.control,c)}return()=>(t=a(o),f("div",{class:D.value,style:k.value},[ie("div",{class:"q-carousel__slides-container"},v(),"sl-cont",e.swipeable,()=>h.value)].concat(N())))}});export{Te as Q,Ie as a};