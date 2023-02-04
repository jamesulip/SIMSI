import{j as le,r as D,g as de,bm as pe,bn as ye,s as M,ae as ce,bo as V}from"./app.b5166522.js";var te;const A=typeof window<"u";A&&((te=window==null?void 0:window.navigator)==null?void 0:te.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function _(e){return typeof e=="function"?e():de(e)}function ne(e,t=!1,n="Timeout"){return new Promise((p,a)=>{setTimeout(t?()=>a(n):p,e)})}function me(e){return e}function he(e,...t){return t.some(n=>n in e)}function fe(e){return pe()?(ye(e),!0):!1}function k(){const e=[],t=a=>{const o=e.indexOf(a);o!==-1&&e.splice(o,1)};return{on:a=>{e.push(a);const o=()=>t(a);return fe(o),{off:o}},off:t,trigger:a=>{e.forEach(o=>o(a))}}}function J(e){return typeof e=="function"?le(e):D(e)}function q(e,t=!1){function n(r,{flush:s="sync",deep:y=!1,timeout:f,throwOnTimeout:b}={}){let d=null;const I=[new Promise(P=>{d=M(e,T=>{r(T)!==t&&(d==null||d(),P(T))},{flush:s,deep:y,immediate:!0})})];return f!=null&&I.push(ne(f,b).then(()=>_(e)).finally(()=>d==null?void 0:d())),Promise.race(I)}function p(r,s){if(!ce(r))return n(T=>T===r,s);const{flush:y="sync",deep:f=!1,timeout:b,throwOnTimeout:d}=s!=null?s:{};let h=null;const P=[new Promise(T=>{h=M([e,r],([O,j])=>{t!==(O===j)&&(h==null||h(),T(O))},{flush:y,deep:f,immediate:!0})})];return b!=null&&P.push(ne(b,d).then(()=>_(e)).finally(()=>(h==null||h(),_(e)))),Promise.race(P)}function a(r){return n(s=>Boolean(s),r)}function o(r){return p(null,r)}function i(r){return p(void 0,r)}function E(r){return n(Number.isNaN,r)}function x(r,s){return n(y=>{const f=Array.from(y);return f.includes(r)||f.includes(_(r))},s)}function F(r){return N(1,r)}function N(r=1,s){let y=-1;return n(()=>(y+=1,y>=r),s)}return Array.isArray(_(e))?{toMatch:n,toContains:x,changed:F,changedTimes:N,get not(){return q(e,!t)}}:{toMatch:n,toBe:p,toBeTruthy:a,toBeNull:o,toBeNaN:E,toBeUndefined:i,changed:F,changedTimes:N,get not(){return q(e,!t)}}}function ve(e){return q(e)}function Oe(e,t,n={}){const{immediate:p=!0}=n,a=D(!1);let o=null;function i(){o&&(clearTimeout(o),o=null)}function E(){a.value=!1,i()}function x(...F){i(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...F)},_(t))}return p&&(a.value=!0,A&&x()),fe(E),{isPending:a,start:x,stop:E}}const we=A?window:void 0;A&&window.document;A&&window.navigator;A&&window.location;const z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},X="__vueuse_ssr_handlers__";z[X]=z[X]||{};z[X];var ge=Object.defineProperty,_e=Object.defineProperties,be=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,re=(e,t,n)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))Pe.call(t,n)&&re(e,n,t[n]);if(oe)for(var n of oe(t))Te.call(t,n)&&re(e,n,t[n]);return e},Q=(e,t)=>_e(e,be(t));const Ee={json:"application/json",text:"text/plain"};function ae(e){return he(e,"immediate","refetch","initialData","timeout","beforeFetch","afterFetch","onFetchError","fetch")}function K(e){return typeof Headers<"u"&&e instanceof Headers?Object.fromEntries([...e.entries()]):e}function Be(e,...t){var n;const p=typeof AbortController=="function";let a={},o={immediate:!0,refetch:!1,timeout:0};const i={method:"GET",type:"text",payload:void 0};t.length>0&&(ae(t[0])?o=c(c({},o),t[0]):a=t[0]),t.length>1&&ae(t[1])&&(o=c(c({},o),t[1]));const{fetch:E=(n=we)==null?void 0:n.fetch,initialData:x,timeout:F}=o,N=k(),r=k(),s=k(),y=D(!1),f=D(!1),b=D(!1),d=D(null),h=V(null),I=V(null),P=V(x),T=le(()=>p&&f.value);let O,j;const Y=()=>{p&&O&&O.abort()},W=u=>{f.value=u,y.value=!u};F&&(j=Oe(Y,F,{immediate:!1}));const $=async(u=!1)=>{var v;W(!0),I.value=null,d.value=null,b.value=!1,O=void 0,p&&(O=new AbortController,O.signal.onabort=()=>b.value=!0,a=Q(c({},a),{signal:O.signal}));const m={method:i.method,headers:{}};if(i.payload){const U=K(m.headers);i.payloadType&&(U["Content-Type"]=(v=Ee[i.payloadType])!=null?v:i.payloadType);const G=_(i.payload);m.body=i.payloadType==="json"?JSON.stringify(G):G}let B=!1;const w={url:_(e),options:c(c({},m),a),cancel:()=>{B=!0}};if(o.beforeFetch&&Object.assign(w,await o.beforeFetch(w)),B||!E)return W(!1),Promise.resolve(null);let g=null;return j&&j.start(),new Promise((U,G)=>{var R;E(w.url,Q(c(c({},m),w.options),{headers:c(c({},K(m.headers)),K((R=w.options)==null?void 0:R.headers))})).then(async l=>{if(h.value=l,d.value=l.status,g=await l[i.type](),o.afterFetch&&d.value>=200&&d.value<300&&({data:g}=await o.afterFetch({data:g,response:l})),P.value=g,!l.ok)throw new Error(l.statusText);return N.trigger(l),U(l)}).catch(async l=>{let ee=l.message||l.name;return o.onFetchError&&({data:g,error:ee}=await o.onFetchError({data:g,error:l,response:h.value})),P.value=g,I.value=ee,r.trigger(l),u?G(l):U(null)}).finally(()=>{W(!1),j&&j.stop(),s.trigger(null)})})},Z=J(o.refetch);M([Z,J(e)],([u])=>u&&$(),{deep:!0});const H={isFinished:y,statusCode:d,response:h,error:I,data:P,isFetching:f,canAbort:T,aborted:b,abort:Y,execute:$,onFetchResponse:N.on,onFetchError:r.on,onFetchFinally:s.on,get:C("GET"),put:C("PUT"),post:C("POST"),delete:C("DELETE"),patch:C("PATCH"),head:C("HEAD"),options:C("OPTIONS"),json:S("json"),text:S("text"),blob:S("blob"),arrayBuffer:S("arrayBuffer"),formData:S("formData")};function C(u){return(v,m)=>{if(!f.value){i.method=u,i.payload=v,i.payloadType=m,ce(i.payload)&&M([Z,J(i.payload)],([w])=>w&&$(),{deep:!0});const B=_(i.payload);return!m&&B&&Object.getPrototypeOf(B)===Object.prototype&&!(B instanceof FormData)&&(i.payloadType="json"),Q(c({},H),{then(w,g){return L().then(w,g)}})}}}function L(){return new Promise((u,v)=>{ve(y).toBe(!0).then(()=>u(H)).catch(m=>v(m))})}function S(u){return()=>{if(!f.value)return i.type=u,Q(c({},H),{then(v,m){return L().then(v,m)}})}}return o.immediate&&setTimeout($,0),Q(c({},H),{then(u,v){return L().then(u,v)}})}var ie;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ie||(ie={}));var Fe=Object.defineProperty,se=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,ue=(e,t,n)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ce=(e,t)=>{for(var n in t||(t={}))Ie.call(t,n)&&ue(e,n,t[n]);if(se)for(var n of se(t))je.call(t,n)&&ue(e,n,t[n]);return e};const xe={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ce({linear:me},xe);export{Be as u};
