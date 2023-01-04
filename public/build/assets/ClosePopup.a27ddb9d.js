import{B as pe,l as he,k as c,y as ge,ar as K,V as U,v as H,Q as me,i as ve,r as q,j as y,q as ye,s as ke,A as Ce,p as be,N as Te,C as Se,O as we,ab as xe}from"./app.5537cded.js";import{Q as ze}from"./AppLayout.vue_vue_type_script_setup_true_lang.9decce2b.js";import{Q as Pe}from"./QTooltip.84240efc.js";import{b as D,a as qe}from"./QList.680c6294.js";import{u as Le,a as Be,b as Ee}from"./focus-manager.c162f84c.js";import{u as Oe,a as _e,b as Ne}from"./use-fullscreen.9d8897a5.js";import{h as $e}from"./use-key-composition.f26dbfe8.js";import{s as He,t as Re}from"./focusout.8febd6d7.js";function M(t,e){if(e&&t===e)return null;const o=t.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return t;const r=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,l=r.display;return l==="block"||l==="table"?t:M(t.parentNode)}function N(t,e,o){return!t||t===document.body?!1:o===!0&&t===e||(e===document?document.body:e).contains(t.parentNode)}function W(t,e,o){if(o||(o=document.createRange(),o.selectNode(t),o.setStart(t,0)),e.count===0)o.setEnd(t,e.count);else if(e.count>0)if(t.nodeType===Node.TEXT_NODE)t.textContent.length<e.count?e.count-=t.textContent.length:(o.setEnd(t,e.count),e.count=0);else for(let r=0;e.count!==0&&r<t.childNodes.length;r++)o=W(t.childNodes[r],e,o);return o}const Fe=/^https?:\/\//;class Ae{constructor(e,o){this.el=e,this.eVm=o,this._range=null}get selection(){if(this.el){const e=document.getSelection();if(N(e.anchorNode,this.el,!0)&&N(e.focusNode,this.el,!0))return e}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length>0:!1}get range(){const e=this.selection;return e!==null&&e.rangeCount?e.getRangeAt(0):this._range}get parent(){const e=this.range;if(e!==null){const o=e.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const e=this.parent;return e!==null?M(e,this.el):null}save(e=this.range){e!==null&&(this._range=e)}restore(e=this._range){const o=document.createRange(),r=document.getSelection();e!==null?(o.setStart(e.startContainer,e.startOffset),o.setEnd(e.endContainer,e.endOffset),r.removeAllRanges(),r.addRange(o)):(r.selectAllChildren(this.el),r.collapseToEnd())}savePosition(){let e=-1,o;const r=document.getSelection(),l=this.el.parentNode;if(r.focusNode&&N(r.focusNode,l))for(o=r.focusNode,e=r.focusOffset;o&&o!==l;)o!==this.el&&o.previousSibling?(o=o.previousSibling,e+=o.textContent.length):o=o.parentNode;this.savedPos=e}restorePosition(e=0){if(this.savedPos>0&&this.savedPos<e){const o=window.getSelection(),r=W(this.el,{count:this.savedPos});r&&(r.collapse(!1),o.removeAllRanges(),o.addRange(r))}}hasParent(e,o){const r=o?this.parent:this.blockParent;return r!==null?r.nodeName.toLowerCase()===e.toLowerCase():!1}hasParents(e,o,r=this.parent){return r===null?!1:e.includes(r.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(e,o,r.parentNode):!1}is(e,o){if(this.selection===null)return!1;switch(e){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(e)===o;case"fontName":const r=document.queryCommandValue(e);return r===`"${o}"`||r===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const l=document.queryCommandState(e);return o!==void 0?l===o:l}}getParentAttribute(e){return this.parent!==null?this.parent.getAttribute(e):null}can(e){if(e==="outdent")return this.hasParents(["blockquote","li"],!0);if(e==="indent")return this.hasParents(["li"],!0);if(e==="link")return this.selection!==null||this.is("link")}apply(e,o,r=pe){if(e==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(e,o)&&(e="outdent",o=null),o==="PRE"&&this.is(e,"PRE")&&(o="P");else if(e==="print"){r();const l=window.open();l.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),l.print(),l.close();return}else if(e==="link"){const l=this.getParentAttribute("href");if(l===null){const u=this.selectWord(this.selection),a=u?u.toString():"";if(!a.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=Fe.test(a)?a:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(u.getRangeAt(0))}else this.eVm.editLinkUrl.value=l,this.range.selectNodeContents(this.parent),this.save();return}else if(e==="fullscreen"){this.eVm.toggleFullscreen(),r();return}else if(e==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),r();return}document.execCommand(e,!1,o),r()}selectWord(e){if(e===null||e.isCollapsed!==!0||e.modify===void 0)return e;const o=document.createRange();o.setStart(e.anchorNode,e.anchorOffset),o.setEnd(e.focusNode,e.focusOffset);const r=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const l=e.focusNode,u=e.focusOffset;return e.collapse(e.anchorNode,e.anchorOffset),e.modify("move",r[0],"character"),e.modify("move",r[1],"word"),e.extend(l,u),e.modify("extend",r[1],"character"),e.modify("extend",r[0],"word"),e}}function G(t,e,o){e.handler?e.handler(t,o,o.caret):o.runCmd(e.cmd,e.param)}function R(t){return c("div",{class:"q-editor__toolbar-group"},t)}function X(t,e,o,r=!1){const l=r||(e.type==="toggle"?e.toggled?e.toggled(t):e.cmd&&t.caret.is(e.cmd,e.param):!1),u=[];if(e.tip&&t.$q.platform.is.desktop){const a=e.key?c("div",[c("small",`(CTRL + ${String.fromCharCode(e.key)})`)]):null;u.push(c(Pe,{delay:1e3},()=>[c("div",{innerHTML:e.tip}),a]))}return c(H,{...t.buttonProps.value,icon:e.icon!==null?e.icon:void 0,color:l?e.toggleColor||t.props.toolbarToggleColor:e.color||t.props.toolbarColor,textColor:l&&!t.props.toolbarPush?null:e.textColor||t.props.toolbarTextColor,label:e.label,disable:e.disable?typeof e.disable=="function"?e.disable(t):!0:!1,size:"sm",onClick(a){o&&o(),G(a,e,t)}},()=>u)}function je(t,e){const o=e.list==="only-icons";let r=e.label,l=e.icon!==null?e.icon:void 0,u,a;function h(){T.component.proxy.hide()}if(o)a=e.options.map(v=>{const k=v.type===void 0?t.caret.is(v.cmd,v.param):!1;return k&&(r=v.tip,l=v.icon!==null?v.icon:void 0),X(t,v,h,k)}),u=t.toolbarBackgroundClass.value,a=[R(a)];else{const v=t.props.toolbarToggleColor!==void 0?`text-${t.props.toolbarToggleColor}`:null,k=t.props.toolbarTextColor!==void 0?`text-${t.props.toolbarTextColor}`:null,d=e.list==="no-icons";a=e.options.map(f=>{const S=f.disable?f.disable(t):!1,w=f.type===void 0?t.caret.is(f.cmd,f.param):!1;w&&(r=f.tip,l=f.icon!==null?f.icon:void 0);const z=f.htmlTip;return c(qe,{active:w,activeClass:v,clickable:!0,disable:S,dense:!0,onClick(x){h(),t.contentRef.value!==null&&t.contentRef.value.focus(),t.caret.restore(),G(x,f,t)}},()=>[d===!0?null:c(D,{class:w?v:k,side:!0},()=>c(me,{name:f.icon!==null?f.icon:void 0})),c(D,z?()=>c("div",{class:"text-no-wrap",innerHTML:f.htmlTip}):f.tip?()=>c("div",{class:"text-no-wrap"},f.tip):void 0)])}),u=[t.toolbarBackgroundClass.value,k]}const g=e.highlight&&r!==e.label,T=c(ze,{...t.buttonProps.value,noCaps:!0,noWrap:!0,color:g?t.props.toolbarToggleColor:t.props.toolbarColor,textColor:g&&!t.props.toolbarPush?null:t.props.toolbarTextColor,label:e.fixedLabel?e.label:r,icon:e.fixedIcon?e.icon!==null?e.icon:void 0:l,contentClass:u},()=>a);return T}function Ue(t){if(t.caret)return t.buttons.value.filter(e=>!t.isViewingSource.value||e.find(o=>o.cmd==="viewsource")).map(e=>R(e.map(o=>t.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?he(t.slots[o.slot]):o.type==="dropdown"?je(t,o):X(t,o))))}function De(t,e,o,r={}){const l=Object.keys(r);if(l.length===0)return{};const u={default_font:{cmd:"fontName",param:t,icon:o,tip:e}};return l.forEach(a=>{const h=r[a];u[a]={cmd:"fontName",param:h,icon:o,tip:h,htmlTip:`<font face="${h}">${h}</font>`}}),u}function Ie(t){if(t.caret){const e=t.props.toolbarColor||t.props.toolbarTextColor;let o=t.editLinkUrl.value;const r=()=>{t.caret.restore(),o!==t.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),t.editLinkUrl.value=null};return[c("div",{class:`q-mx-xs text-${e}`},`${t.$q.lang.editor.url}: `),c("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:l=>{ge(l),o=l.target.value},onKeydown:l=>{if(K(l)!==!0)switch(l.keyCode){case 13:return U(l),r();case 27:U(l),t.caret.restore(),(!t.editLinkUrl.value||t.editLinkUrl.value==="https://")&&document.execCommand("unlink"),t.editLinkUrl.value=null;break}}}),R([c(H,{key:"qedt_btm_rem",tabindex:-1,...t.buttonProps.value,label:t.$q.lang.label.remove,noCaps:!0,onClick:()=>{t.caret.restore(),document.execCommand("unlink"),t.editLinkUrl.value=null}}),c(H,{key:"qedt_btm_upd",...t.buttonProps.value,label:t.$q.lang.label.update,noCaps:!0,onClick:r})])]}}const Qe=Object.prototype.toString,$=Object.prototype.hasOwnProperty,Ke=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(t=>"[object "+t+"]"));function I(t){if(t!==Object(t)||Ke.has(Qe.call(t))===!0||t.constructor&&$.call(t,"constructor")===!1&&$.call(t.constructor.prototype,"isPrototypeOf")===!1)return!1;let e;for(e in t);return e===void 0||$.call(t,e)}function J(){let t,e,o,r,l,u,a=arguments[0]||{},h=1,g=!1;const T=arguments.length;for(typeof a=="boolean"&&(g=a,a=arguments[1]||{},h=2),Object(a)!==a&&typeof a!="function"&&(a={}),T===h&&(a=this,h--);h<T;h++)if((t=arguments[h])!==null)for(e in t)o=a[e],r=t[e],a!==r&&(g===!0&&r&&((l=Array.isArray(r))||I(r)===!0)?(l===!0?u=Array.isArray(o)===!0?o:[]:u=I(o)===!0?o:{},a[e]=J(g,u,r)):r!==void 0&&(a[e]=r));return a}const et=ve({name:"QEditor",props:{...Le,...Oe,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:t=>t.length===0||t.every(e=>e.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:t=>["div","p"].includes(t),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[..._e,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur"],setup(t,{slots:e,emit:o,attrs:r}){const{proxy:l,vnode:u}=be(),{$q:a}=l,h=Be(t,a),{inFullscreen:g,toggleFullscreen:T}=Ne(),v=$e(r,u),k=q(null),d=q(null),f=q(null),S=q(!1),w=y(()=>!t.readonly&&!t.disable);let z,x,L=t.modelValue;document.execCommand("defaultParagraphSeparator",!1,t.paragraphTag),z=window.getComputedStyle(document.body).fontFamily;const B=y(()=>t.toolbarBg?` bg-${t.toolbarBg}`:""),Y=y(()=>({type:"a",flat:t.toolbarOutline!==!0&&t.toolbarPush!==!0,noWrap:!0,outline:t.toolbarOutline,push:t.toolbarPush,rounded:t.toolbarRounded,dense:!0,color:t.toolbarColor,disable:!w.value,size:"sm"})),P=y(()=>{const n=a.lang.editor,i=a.iconSet.editor;return{bold:{cmd:"bold",icon:i.bold,tip:n.bold,key:66},italic:{cmd:"italic",icon:i.italic,tip:n.italic,key:73},strike:{cmd:"strikeThrough",icon:i.strikethrough,tip:n.strikethrough,key:83},underline:{cmd:"underline",icon:i.underline,tip:n.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:i.unorderedList,tip:n.unorderedList},ordered:{cmd:"insertOrderedList",icon:i.orderedList,tip:n.orderedList},subscript:{cmd:"subscript",icon:i.subscript,tip:n.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:i.superscript,tip:n.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:s=>s.caret&&!s.caret.can("link"),icon:i.hyperlink,tip:n.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:i.toggleFullscreen,tip:n.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:i.viewSource,tip:n.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:i.quote,tip:n.quote,key:81},left:{cmd:"justifyLeft",icon:i.left,tip:n.left},center:{cmd:"justifyCenter",icon:i.center,tip:n.center},right:{cmd:"justifyRight",icon:i.right,tip:n.right},justify:{cmd:"justifyFull",icon:i.justify,tip:n.justify},print:{type:"no-state",cmd:"print",icon:i.print,tip:n.print,key:80},outdent:{type:"no-state",disable:s=>s.caret&&!s.caret.can("outdent"),cmd:"outdent",icon:i.outdent,tip:n.outdent},indent:{type:"no-state",disable:s=>s.caret&&!s.caret.can("indent"),cmd:"indent",icon:i.indent,tip:n.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:i.removeFormat,tip:n.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:i.hr,tip:n.hr},undo:{type:"no-state",cmd:"undo",icon:i.undo,tip:n.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:i.redo,tip:n.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:i.heading1||i.heading,tip:n.heading1,htmlTip:`<h1 class="q-ma-none">${n.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:i.heading2||i.heading,tip:n.heading2,htmlTip:`<h2 class="q-ma-none">${n.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:i.heading3||i.heading,tip:n.heading3,htmlTip:`<h3 class="q-ma-none">${n.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:i.heading4||i.heading,tip:n.heading4,htmlTip:`<h4 class="q-ma-none">${n.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:i.heading5||i.heading,tip:n.heading5,htmlTip:`<h5 class="q-ma-none">${n.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:i.heading6||i.heading,tip:n.heading6,htmlTip:`<h6 class="q-ma-none">${n.heading6}</h6>`},p:{cmd:"formatBlock",param:t.paragraphTag,icon:i.heading,tip:n.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:i.code,htmlTip:`<code>${n.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:i.size1||i.size,tip:n.size1,htmlTip:`<font size="1">${n.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:i.size2||i.size,tip:n.size2,htmlTip:`<font size="2">${n.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:i.size3||i.size,tip:n.size3,htmlTip:`<font size="3">${n.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:i.size4||i.size,tip:n.size4,htmlTip:`<font size="4">${n.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:i.size5||i.size,tip:n.size5,htmlTip:`<font size="5">${n.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:i.size6||i.size,tip:n.size6,htmlTip:`<font size="6">${n.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:i.size7||i.size,tip:n.size7,htmlTip:`<font size="7">${n.size7}</font>`}}}),F=y(()=>{const n=t.definitions||{},i=t.definitions||t.fonts?J(!0,{},P.value,n,De(z,a.lang.editor.defaultFont,a.iconSet.editor.font,t.fonts)):P.value;return t.toolbar.map(s=>s.map(p=>{if(p.options)return{type:"dropdown",icon:p.icon,label:p.label,size:"sm",dense:!0,fixedLabel:p.fixedLabel,fixedIcon:p.fixedIcon,highlight:p.highlight,list:p.list,options:p.options.map(fe=>i[fe])};const C=i[p];return C?C.type==="no-state"||n[p]&&(C.cmd===void 0||P.value[C.cmd]&&P.value[C.cmd].type==="no-state")?C:Object.assign({type:"toggle"},C):{type:"slot",slot:p}}))}),m={$q:a,props:t,slots:e,inFullscreen:g,toggleFullscreen:T,runCmd:O,isViewingSource:S,editLinkUrl:f,toolbarBackgroundClass:B,buttonProps:Y,contentRef:d,buttons:F,setContent:E};ye(()=>t.modelValue,n=>{L!==n&&(L=n,E(n,!0))});const Z=y(()=>t.toolbar&&t.toolbar.length>0),V=y(()=>{const n={},i=s=>{s.key&&(n[s.key]={cmd:s.cmd,param:s.param})};return F.value.forEach(s=>{s.forEach(p=>{p.options?p.options.forEach(i):i(p)})}),n}),ee=y(()=>g.value?t.contentStyle:[{minHeight:t.minHeight,height:t.height,maxHeight:t.maxHeight},t.contentStyle]),te=y(()=>`q-editor q-editor--${S.value===!0?"source":"default"}`+(t.disable===!0?" disabled":"")+(g.value===!0?" fullscreen column":"")+(t.square===!0?" q-editor--square no-border-radius":"")+(t.flat===!0?" q-editor--flat":"")+(t.dense===!0?" q-editor--dense":"")+(h.value===!0?" q-editor--dark q-dark":"")),oe=y(()=>[t.contentClass,"q-editor__content",{col:g.value,"overflow-auto":g.value||t.maxHeight}]),ne=y(()=>t.disable===!0?{"aria-disabled":"true"}:t.readonly===!0?{"aria-readonly":"true"}:{});function ie(){if(d.value!==null){const n=`inner${S.value===!0?"Text":"HTML"}`,i=d.value[n];i!==t.modelValue&&(L=i,o("update:modelValue",i))}}function re(n){if(o("keydown",n),n.ctrlKey!==!0||K(n)===!0){b();return}const i=n.keyCode,s=V.value[i];if(s!==void 0){const{cmd:p,param:C}=s;Te(n),O(p,C,!1)}}function le(n){b(),o("click",n)}function ae(n){if(d.value!==null){const{scrollTop:i,scrollHeight:s}=d.value;x=s-i}m.caret.save(),o("blur",n)}function se(n){Se(()=>{d.value!==null&&x!==void 0&&(d.value.scrollTop=d.value.scrollHeight-x)}),o("focus",n)}function ce(n){const i=k.value;if(i!==null&&i.contains(n.target)===!0&&(n.relatedTarget===null||i.contains(n.relatedTarget)!==!0)){const s=`inner${S.value===!0?"Text":"HTML"}`;m.caret.restorePosition(d.value[s].length),b()}}function ue(n){const i=k.value;i!==null&&i.contains(n.target)===!0&&(n.relatedTarget===null||i.contains(n.relatedTarget)!==!0)&&(m.caret.savePosition(),b())}function A(){x=void 0}function j(n){m.caret.save()}function E(n,i){if(d.value!==null){i===!0&&m.caret.savePosition();const s=`inner${S.value===!0?"Text":"HTML"}`;d.value[s]=n,i===!0&&(m.caret.restorePosition(d.value[s].length),b())}}function O(n,i,s=!0){_(),m.caret.restore(),m.caret.apply(n,i,()=>{_(),m.caret.save(),s&&b()})}function b(){setTimeout(()=>{f.value=null,l.$forceUpdate()},1)}function _(){Ee(()=>{d.value!==null&&d.value.focus({preventScroll:!0})})}function de(){return d.value}return ke(()=>{m.caret=l.caret=new Ae(d.value,m),E(t.modelValue),b(),document.addEventListener("selectionchange",j)}),Ce(()=>{document.removeEventListener("selectionchange",j)}),Object.assign(l,{runCmd:O,refreshToolbar:b,focus:_,getContentEl:de}),()=>{let n;if(Z.value){const i=[c("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+B.value},Ue(m))];f.value!==null&&i.push(c("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+B.value},Ie(m))),n=c("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},i)}return c("div",{ref:k,class:te.value,style:{height:g.value===!0?"100%":null},...ne.value,onFocusin:ce,onFocusout:ue},[n,c("div",{ref:d,style:ee.value,class:oe.value,contenteditable:w.value,placeholder:t.placeholder,...v.listeners.value,onInput:ie,onKeydown:re,onClick:le,onBlur:ae,onFocus:se,onMousedown:A,onTouchstartPassive:A})])}}});function Q(t){if(t===!1)return 0;if(t===!0||t===void 0)return 1;const e=parseInt(t,10);return isNaN(e)?0:e}const tt=we({name:"close-popup",beforeMount(t,{value:e}){const o={depth:Q(e),handler(r){o.depth!==0&&setTimeout(()=>{const l=He(t);l!==void 0&&Re(l,r,o.depth)})},handlerKey(r){xe(r,13)===!0&&o.handler(r)}};t.__qclosepopup=o,t.addEventListener("click",o.handler),t.addEventListener("keyup",o.handlerKey)},updated(t,{value:e,oldValue:o}){e!==o&&(t.__qclosepopup.depth=Q(e))},beforeUnmount(t){const e=t.__qclosepopup;t.removeEventListener("click",e.handler),t.removeEventListener("keyup",e.handlerKey),delete t.__qclosepopup}});export{tt as C,et as Q};
