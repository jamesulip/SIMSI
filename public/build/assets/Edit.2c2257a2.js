import{Q as _,a as i,b as w}from"./QCard.d0dd7adb.js";import{Q as k}from"./QSeparator.bd60b14f.js";import{a2 as E,r as u,o as v,c as V,w as o,b as l,a as d,a8 as C,a3 as q,Q as U,g as y,e as S,v as F,aq as N}from"./app.ff758b6b.js";import{Q as s}from"./QInput.e6c6b9fd.js";import{Q as A}from"./QSelect.cfa5a8e8.js";import{Q as B}from"./QSpace.65b0b14f.js";import{Q as D}from"./QForm.9769249f.js";import{Q as I}from"./QPage.d4c1fc98.js";import{_ as L}from"./AppLayout.vue_vue_type_script_setup_true_lang.65c521d4.js";import{u as P}from"./index.d268dedd.js";import"./focus-manager.d33e3981.js";import"./use-key-composition.aa771d56.js";import"./uid.42677368.js";import"./QChip.e1d25e07.js";import"./QList.14660c9e.js";import"./focusout.d047a4c4.js";import"./QItemLabel.179cd328.js";import"./QDialog.dad5f0e9.js";import"./use-prevent-scroll.27eec8c6.js";import"./format.2bc25e5f.js";import"./QImg.eb6c192c.js";import"./touch.70a9dd44.js";const W={class:"max-w-7xl"},$=d("div",{class:"text-h6"},"Employer Details",-1),j={class:"flex gap-3 w-full"},de=E({__name:"Edit",props:{employer:null},setup(Q){const{employer:r}=Q,a=u(r!=null?r:{name:"",country:"",address:"",description:"",email:"",phone:"",website:""}),{data:m,isFetching:p}=P("https://restcountries.com/v3.1/all?fields=name").json(),f=u(m.value);function x(b,t,e){t(()=>{const n=b.toLowerCase();f.value=m.value.filter(h=>h.name.common.toLowerCase().indexOf(n)>-1)})}const c=u(null);function g(){!c.value.validate()||N.Inertia.put(`/admin/employers/${r.id}`,{...a.value})}return(b,t)=>(v(),V(L,null,{default:o(()=>[l(I,{padding:""},{default:o(()=>[d("div",W,[l(D,{ref_key:"f",ref:c,onSubmit:C(g,["prevent"])},{default:o(()=>[l(_,{flat:"",bordered:""},{default:o(()=>[l(i,null,{default:o(()=>[$]),_:1}),l(k),l(i,{class:"flex"},{default:o(()=>[l(q,{border:"",size:"100px",class:"mx-auto"},{default:o(()=>[l(U,{name:"account_circle"})]),_:1})]),_:1}),l(i,{class:"q-gutter-md"},{default:o(()=>[l(s,{modelValue:a.value.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value.name=e),label:"Name",dense:"",outlined:"",type:"text",hint:"Enter employer name","stack-label":"",rules:[e=>e.length>0||"Name is required"]},null,8,["modelValue","rules"]),y(p)?S("",!0):(v(),V(A,{key:0,"use-input":"",options:f.value,onFilter:x,modelValue:a.value.country,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value.country=e),dense:"",outlined:"",label:"Location",loading:y(p),"option-label":e=>{var n;return(n=e==null?void 0:e.name)==null?void 0:n.common},"map-options":"","emit-value":"","option-value":e=>{var n;return(n=e==null?void 0:e.name)==null?void 0:n.common}},null,8,["options","modelValue","loading","option-label","option-value"])),l(s,{modelValue:a.value.address,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value.address=e),label:"Address",dense:"",outlined:"",type:"text",hint:"Enter employer address","stack-label":"",rules:[e=>e.length>0||"Address is required"]},null,8,["modelValue","rules"]),l(s,{modelValue:a.value.description,"onUpdate:modelValue":t[3]||(t[3]=e=>a.value.description=e),label:"Company Description",dense:"",outlined:"",type:"textarea",hint:"Enter employer description","stack-label":"",rules:[e=>e.length>0||"Description is required"]},null,8,["modelValue","rules"]),d("div",j,[l(s,{modelValue:a.value.email,"onUpdate:modelValue":t[4]||(t[4]=e=>a.value.email=e),label:"Email",dense:"",class:"flex-1",outlined:"",type:"email",hint:"Enter employer email","stack-label":"",rules:[e=>e.length>0||"Email is required"]},null,8,["modelValue","rules"]),l(s,{modelValue:a.value.phone,"onUpdate:modelValue":t[5]||(t[5]=e=>a.value.phone=e),label:"Phone",dense:"",class:"flex-1",outlined:"",type:"text",hint:"Enter employer phone","stack-label":"",rules:[e=>e.length>0||"Phone is required"]},null,8,["modelValue","rules"])]),l(s,{modelValue:a.value.website,"onUpdate:modelValue":t[6]||(t[6]=e=>a.value.website=e),label:"Website",dense:"",outlined:"",type:"text",hint:"Enter employer website","stack-label":"",rules:[e=>e.length>0||"Website is required"]},null,8,["modelValue","rules"])]),_:1}),l(w,null,{default:o(()=>[l(B),l(F,{type:"submit",color:"primary",label:"Update"})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})]),_:1}))}});export{de as default};
