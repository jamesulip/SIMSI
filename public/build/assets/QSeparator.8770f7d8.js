import{j as n,i as h,k as $,p as F}from"./app.f1084ffb.js";const k={dark:{type:Boolean,default:null}};function x(e,t){return n(()=>e.dark===null?t.dark.isActive:e.dark)}let a=[],i=[];function u(e){i=i.filter(t=>t!==e)}function z(e){u(e),i.push(e)}function B(e){u(e),i.length===0&&a.length>0&&(a[a.length-1](),a=[])}function b(e){i.length===0?e():a.push(e)}function y(e){a=a.filter(t=>t!==e)}const S={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},r={xs:2,sm:4,md:8,lg:16,xl:24},C=h({name:"QSeparator",props:{...k,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=F(),d=x(e,t.proxy.$q),l=n(()=>e.vertical===!0?"vertical":"horizontal"),o=n(()=>` q-separator--${l.value}`),m=n(()=>e.inset!==!1?`${o.value}-${S[e.inset]}`:""),g=n(()=>`q-separator${o.value}${m.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(d.value===!0?" q-separator--dark":"")),v=n(()=>{const s={};if(e.size!==void 0&&(s[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const f=e.spaced===!0?`${r.md}px`:e.spaced in r?`${r[e.spaced]}px`:e.spaced,c=e.vertical===!0?["Left","Right"]:["Top","Bottom"];s[`margin${c[0]}`]=s[`margin${c[1]}`]=f}return s});return()=>$("hr",{class:g.value,style:v.value,"aria-orientation":l.value})}});export{C as Q,x as a,b,z as c,y as d,B as r,k as u};