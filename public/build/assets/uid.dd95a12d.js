import{j as d,k as l}from"./app.feef9ed9.js";const F={name:String};function p(t){return d(()=>({type:"hidden",name:t.name,value:t.modelValue}))}function g(t={}){return(n,o,s)=>{n[o](l("input",{class:"hidden"+(s||""),...t.value}))}}function h(t){return d(()=>t.name||t.for)}let r=[],u=[];function f(t){u=u.filter(n=>n!==t)}function v(t){f(t),u.push(t)}function w(t){f(t),u.length===0&&r.length>0&&(r[r.length-1](),r=[])}function x(t){u.length===0?t():r.push(t)}function b(t){r=r.filter(n=>n!==t)}let i,a=0;const e=new Array(256);for(let t=0;t<256;t++)e[t]=(t+256).toString(16).substring(1);const m=(()=>{const t=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return n=>{const o=new Uint8Array(n);return t.getRandomValues(o),o}}return n=>{const o=[];for(let s=n;s>0;s--)o.push(Math.floor(Math.random()*256));return o}})(),c=4096;function A(){(i===void 0||a+16>c)&&(a=0,i=m(c));const t=Array.prototype.slice.call(i,a,a+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,e[t[0]]+e[t[1]]+e[t[2]]+e[t[3]]+"-"+e[t[4]]+e[t[5]]+"-"+e[t[6]]+e[t[7]]+"-"+e[t[8]]+e[t[9]]+"-"+e[t[10]]+e[t[11]]+e[t[12]]+e[t[13]]+e[t[14]]+e[t[15]]}export{x as a,F as b,g as c,v as d,h as e,p as f,b as g,w as r,A as u};
