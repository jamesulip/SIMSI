import{O as G,P as B,B as H,R as J,S as V,U as M,W,N as L,X as F,r as U,j as d,q as Q,p as R,C as Z,k as f,T as ee,aV as te,l as z,aW as ne,i as j,s as ae,A as oe,Y as ie,aO as re,v as O,a1 as le}from"./app.f1084ffb.js";import{u as ue,a as se}from"./QSeparator.8770f7d8.js";import{g as X,s as Y}from"./touch.70a9dd44.js";import{c as ce}from"./selection.f820d120.js";import{u as ve}from"./use-cache.b0833c75.js";import{u as de,a as fe,b as me}from"./use-fullscreen.39aad1ff.js";function pe(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((l,m)=>{const r=parseFloat(l);r&&(o[m]=r)}),o}const ge=G({name:"touch-swipe",beforeMount(e,{value:o,arg:l,modifiers:m}){if(m.mouse!==!0&&B.has.touch!==!0)return;const r=m.mouseCapture===!0?"Capture":"",t={handler:o,sensitivity:pe(l),direction:X(m),noop:H,mouseStart(a){Y(a,t)&&J(a)&&(V(t,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(Y(a,t)){const v=a.target;V(t,"temp",[[v,"touchmove","move","notPassiveCapture"],[v,"touchcancel","end","notPassiveCapture"],[v,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,v){B.is.firefox===!0&&M(e,!0);const h=W(a);t.event={x:h.left,y:h.top,time:Date.now(),mouse:v===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){L(a);return}const v=Date.now()-t.event.time;if(v===0)return;const h=W(a),y=h.left-t.event.x,u=Math.abs(y),x=h.top-t.event.y,s=Math.abs(x);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&s<t.sensitivity[1]){t.end(a);return}}else if(u<t.sensitivity[2]&&s<t.sensitivity[2])return;const p=u/v,C=s/v;t.direction.vertical===!0&&u<s&&u<100&&C>t.sensitivity[0]&&(t.event.dir=x<0?"up":"down"),t.direction.horizontal===!0&&u>s&&s<100&&p>t.sensitivity[0]&&(t.event.dir=y<0?"left":"right"),t.direction.up===!0&&u<s&&x<0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<s&&x>0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>s&&y<0&&s<100&&p>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>s&&y>0&&s<100&&p>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(L(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ce(),t.styleCleanup=k=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};k===!0?setTimeout(P,50):P()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:v,distance:{x:u,y:s}})):t.end(a)},end(a){t.event!==void 0&&(F(t,"temp"),B.is.firefox===!0&&M(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&L(a),t.event=void 0)}};if(e.__qtouchswipe=t,m.mouse===!0){const a=m.mouseCapture===!0||m.mousecapture===!0?"Capture":"";V(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}B.has.touch===!0&&V(t,"main",[[e,"touchstart","touchStart",`passive${m.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const l=e.__qtouchswipe;l!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&l.end(),l.handler=o.value),l.direction=X(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(F(o,"main"),F(o,"temp"),B.is.firefox===!0&&M(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}}),he={name:{required:!0},disable:Boolean},K={setup(e,{slots:o}){return()=>f("div",{class:"q-panel scroll",role:"tabpanel"},z(o.default))}},ye={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},xe=["update:modelValue","beforeTransition","transition"];function Ce(){const{props:e,emit:o,proxy:l}=R(),{getCacheWithFn:m}=ve();let r,t;const a=U(null),v=U(null);function h(n){const i=e.vertical===!0?"up":"left";b((l.$q.lang.rtl===!0?-1:1)*(n.direction===i?1:-1))}const y=d(()=>[[ge,h,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=d(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),x=d(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),s=d(()=>`--q-transition-duration: ${e.transitionDuration}ms`),p=d(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),C=d(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),k=d(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Q(()=>e.modelValue,(n,i)=>{const g=_(n)===!0?T(n):-1;t!==!0&&w(g===-1?0:g<T(i)?-1:1),a.value!==g&&(a.value=g,o("beforeTransition",n,i),Z(()=>{o("transition",n,i)}))});function P(){b(1)}function D(){b(-1)}function I(n){o("update:modelValue",n)}function _(n){return n!=null&&n!==""}function T(n){return r.findIndex(i=>i.props.name===n&&i.props.disable!==""&&i.props.disable!==!0)}function N(){return r.filter(n=>n.props.disable!==""&&n.props.disable!==!0)}function w(n){const i=n!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(n===-1?u.value:x.value):null;v.value!==i&&(v.value=i)}function b(n,i=a.value){let g=i+n;for(;g>-1&&g<r.length;){const S=r[g];if(S!==void 0&&S.props.disable!==""&&S.props.disable!==!0){w(n),t=!0,o("update:modelValue",S.props.name),setTimeout(()=>{t=!1});return}g+=n}e.infinite===!0&&r.length>0&&i!==-1&&i!==r.length&&b(n,n===-1?r.length:-1)}function A(){const n=T(e.modelValue);return a.value!==n&&(a.value=n),!0}function E(){const n=_(e.modelValue)===!0&&A()&&r[a.value];return e.keepAlive===!0?[f(ne,C.value,[f(k.value===!0?m(p.value,()=>({...K,name:p.value})):K,{key:p.value,style:s.value},()=>n)])]:[f("div",{class:"q-panel scroll",style:s.value,key:p.value,role:"tabpanel"},[n])]}function c(){if(r.length!==0)return e.animated===!0?[f(ee,{name:v.value},E)]:E()}function q(n){return r=te(z(n.default,[])).filter(i=>i.props!==null&&i.props.slot===void 0&&_(i.props.name)===!0),r.length}function $(){return r}return Object.assign(l,{next:P,previous:D,goTo:I}),{panelIndex:a,panelDirectives:y,updatePanelsList:q,updatePanelIndex:A,getPanelContent:c,getEnabledPanels:N,getPanels:$,isValidPanelName:_,keepAliveProps:C,needsUniqueKeepAliveWrapper:k,goToPanelByOffset:b,goToPanel:I,nextPanel:P,previousPanel:D}}const Te=j({name:"QCarouselSlide",props:{...he,imgSrc:String},setup(e,{slots:o}){const l=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:l.value},z(o.default))}}),Pe=["top","right","bottom","left"],be=["regular","flat","outline","push","unelevated"],Ae=j({name:"QCarousel",props:{...ue,...ye,...de,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>be.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Pe.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...fe,...xe],setup(e,{slots:o}){const{proxy:{$q:l}}=R(),m=se(e,l);let r,t;const{updatePanelsList:a,getPanelContent:v,panelDirectives:h,goToPanel:y,previousPanel:u,nextPanel:x,getEnabledPanels:s,panelIndex:p}=Ce(),{inFullscreen:C}=me(),k=d(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),P=d(()=>e.vertical===!0?"vertical":"horizontal"),D=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(m.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${P.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${N.value}`:"")),I=d(()=>{const c=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?c.reverse():c}),_=d(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),T=d(()=>e.navigationActiveIcon||_.value),N=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),w=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));Q(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(r),b())}),Q(()=>e.autoplay,c=>{c?b():clearInterval(r)});function b(){const c=re(e.autoplay)===!0?e.autoplay:5e3;r=setTimeout(c>=0?x:u,Math.abs(c))}ae(()=>{e.autoplay&&b()}),oe(()=>{clearInterval(r)});function A(c,q){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${c} q-carousel__navigation--${N.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},s().map(q))])}function E(){const c=[];if(e.navigation===!0){const q=o["navigation-icon"]!==void 0?o["navigation-icon"]:n=>f(O,{key:"nav"+n.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${n.active===!0?"":"in"}active`,...n.btnProps,onClick:n.onClick}),$=t-1;c.push(A("buttons",(n,i)=>{const g=n.props.name,S=p.value===i;return q({index:i,maxIndex:$,name:g,active:S,btnProps:{icon:S===!0?T.value:_.value,size:"sm",...w.value},onClick:()=>{y(g)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";c.push(A("thumbnails",$=>{const n=$.props;return f("img",{key:"tmb#"+n.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${n.name===e.modelValue?"":"in"}active`+q,src:n.imgSrc||n["img-src"],onClick:()=>{y(n.name)}})}))}return e.arrows===!0&&p.value>=0&&((e.infinite===!0||p.value>0)&&c.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${P.value} absolute flex flex-center`},[f(O,{icon:I.value[0],...w.value,onClick:u})])),(e.infinite===!0||p.value<t-1)&&c.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${P.value} absolute flex flex-center`},[f(O,{icon:I.value[1],...w.value,onClick:x})]))),le(o.control,c)}return()=>(t=a(o),f("div",{class:D.value,style:k.value},[ie("div",{class:"q-carousel__slides-container"},v(),"sl-cont",e.swipeable,()=>h.value)].concat(E())))}});export{Ae as Q,Te as a};
