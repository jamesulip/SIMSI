import{a8 as w,r as u,o as r,c as d,w as n,b as a,a as f,ag as E,aE as _,aF as p,O as g,Q as C,aV as U,aG as s,g as h,e as q,aH as S,x as F,aI as I}from"./app.6ab9887a.js";import{Q as N}from"./QImg.3a5426c0.js";import{Q as B}from"./QSelect.a4b3eac9.js";import{Q as A}from"./QSpace.90654078.js";import{Q as D}from"./QForm.f980eda1.js";import{Q as L}from"./QPage.741b019d.js";import{_ as P}from"./AppLayout.vue_vue_type_script_setup_true_lang.82358d3f.js";import{u as H}from"./index.b1417baa.js";import"./QLayout.cf26737b.js";import"./format.ff5040ca.js";import"./touch.70a9dd44.js";const O={class:"max-w-3xl"},W=f("div",{class:"text-h6"},"Employer Details",-1),$={class:"flex gap-3 w-full"},ee=w({__name:"Edit",props:{employer:null},setup(m){const{employer:i}=m,t=u(i!=null?i:{name:"",country:"",address:"",description:"",email:"",phone:"",avatar:"",website:""}),{data:c,isFetching:v}=H("https://restcountries.com/v3.1/all?fields=name").json(),V=u(c.value);function x(y,l,e){l(()=>{const o=y.toLowerCase();V.value=c.value.filter(k=>k.name.common.toLowerCase().indexOf(o)>-1)})}const b=u(null);function Q(){!b.value.validate()||I.Inertia.put(`/admin/employers/${i.id}`,{...t.value})}return u(null),(y,l)=>(r(),d(P,null,{default:n(()=>[a(L,{padding:""},{default:n(()=>[f("div",O,[a(D,{ref_key:"f",ref:b,onSubmit:E(Q,["prevent"])},{default:n(()=>[a(_,{flat:"",bordered:""},{default:n(()=>[a(p,null,{default:n(()=>[W]),_:1}),a(g),a(p,{class:"flex"},{default:n(()=>{var e,o;return[(e=m.employer.first_media)!=null&&e.original_url?(r(),d(N,{key:0,src:(o=m.employer.first_media)==null?void 0:o.original_url,class:"max-w-xs m-auto"},null,8,["src"])):(r(),d(C,{key:1,name:"account_circle"}))]}),_:1}),a(g),a(p,{class:"q-gutter-md"},{default:n(()=>[a(U,{modelValue:t.value.is_highlighted,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value.is_highlighted=e),label:"Hightlight","true-value":1,"false-value":0},null,8,["modelValue"]),a(s,{modelValue:t.value.name,"onUpdate:modelValue":l[1]||(l[1]=e=>t.value.name=e),label:"Name",dense:"",outlined:"",type:"text",hint:"Enter employer name","stack-label":"",rules:[e=>e.length>0||"Name is required"]},null,8,["modelValue","rules"]),h(v)?q("",!0):(r(),d(B,{key:0,"use-input":"",options:V.value,onFilter:x,modelValue:t.value.country,"onUpdate:modelValue":l[2]||(l[2]=e=>t.value.country=e),dense:"",outlined:"",label:"Location",loading:h(v),"option-label":e=>{var o;return(o=e==null?void 0:e.name)==null?void 0:o.common},"map-options":"","emit-value":"","option-value":e=>{var o;return(o=e==null?void 0:e.name)==null?void 0:o.common}},null,8,["options","modelValue","loading","option-label","option-value"])),a(s,{modelValue:t.value.address,"onUpdate:modelValue":l[3]||(l[3]=e=>t.value.address=e),label:"Address",dense:"",outlined:"",type:"text",hint:"Enter employer address","stack-label":"",rules:[e=>e.length>0||"Address is required"]},null,8,["modelValue","rules"]),a(s,{modelValue:t.value.description,"onUpdate:modelValue":l[4]||(l[4]=e=>t.value.description=e),label:"Company Description",dense:"",outlined:"",type:"textarea",hint:"Enter employer description","stack-label":"",rules:[e=>e.length>0||"Description is required"]},null,8,["modelValue","rules"]),f("div",$,[a(s,{modelValue:t.value.email,"onUpdate:modelValue":l[5]||(l[5]=e=>t.value.email=e),label:"Email",dense:"",class:"flex-1",outlined:"",type:"email",hint:"Enter employer email","stack-label":"",rules:[e=>e.length>0||"Email is required"]},null,8,["modelValue","rules"]),a(s,{modelValue:t.value.phone,"onUpdate:modelValue":l[6]||(l[6]=e=>t.value.phone=e),label:"Phone",dense:"",class:"flex-1",outlined:"",type:"text",hint:"Enter employer phone","stack-label":"",rules:[e=>e.length>0||"Phone is required"]},null,8,["modelValue","rules"])]),a(s,{modelValue:t.value.website,"onUpdate:modelValue":l[7]||(l[7]=e=>t.value.website=e),label:"Website",dense:"",outlined:"",type:"text",hint:"Enter employer website","stack-label":"",rules:[e=>e.length>0||"Website is required"]},null,8,["modelValue","rules"])]),_:1}),a(S,null,{default:n(()=>[a(A),a(F,{type:"submit",color:"primary",label:"Update"})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})]),_:1}))}});export{ee as default};
