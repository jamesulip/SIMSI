import{a8 as y,r,o as x,c as Q,w as o,b as l,a as i,ag as h,aE as g,aF as u,O as _,a9 as w,Q as S,aG as n,g as E,aH as k,x as C,aI as q}from"./app.b5166522.js";import{Q as F}from"./QSelect.f0eb4703.js";import{Q as U}from"./QSpace.d35235b0.js";import{Q as A}from"./QForm.9e275de7.js";import{Q as B}from"./QPage.31f35db4.js";import{_ as D}from"./AppLayout.vue_vue_type_script_setup_true_lang.b45ff0c9.js";import{u as I}from"./index.cee26df2.js";import"./QLayout.edc35d24.js";import"./format.1c434d9b.js";import"./QImg.9bbcb33e.js";import"./touch.70a9dd44.js";const N={class:"max-w-7xl"},L=i("div",{class:"text-h6"},"Employer Details",-1),P={class:"flex gap-3 w-full"},X=y({__name:"Show",setup(O){const a=r({name:"",country:"",address:"",description:"",email:"",phone:"",website:""}),{data:d,isFetching:c}=I("https://restcountries.com/v3.1/all?fields=name").json(),m=r(d.value);function b(f,t,e){t(()=>{const s=f.toLowerCase();m.value=d.value.filter(V=>V.name.common.toLowerCase().indexOf(s)>-1)})}const p=r(null);function v(){!p.value.validate()||q.Inertia.post("/admin/employers",{...a.value},{forceFormData:!0,preserveScroll:!0,onSuccess:()=>{a.value={name:"",country:"",address:"",description:"",email:"",phone:"",website:""}}})}return(f,t)=>(x(),Q(D,null,{default:o(()=>[l(B,{padding:""},{default:o(()=>[i("div",N,[l(A,{ref_key:"f",ref:p,onSubmit:h(v,["prevent"])},{default:o(()=>[l(g,{flat:"",bordered:""},{default:o(()=>[l(u,null,{default:o(()=>[L]),_:1}),l(_),l(u,{class:"flex"},{default:o(()=>[l(w,{border:"",size:"100px",class:"mx-auto"},{default:o(()=>[l(S,{name:"account_circle"})]),_:1})]),_:1}),l(u,{class:"q-gutter-md"},{default:o(()=>[l(n,{modelValue:a.value.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value.name=e),label:"Name",dense:"",outlined:"",type:"text",hint:"Enter employer name","stack-label":"",rules:[e=>e.length>0||"Name is required"]},null,8,["modelValue","rules"]),l(F,{"use-input":"",options:m.value,onFilter:b,modelValue:a.value.country,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value.country=e),dense:"",outlined:"",label:"Location",loading:E(c),"option-label":e=>{var s;return(s=e==null?void 0:e.name)==null?void 0:s.common},"map-options":"","emit-value":"","option-value":e=>{var s;return(s=e==null?void 0:e.name)==null?void 0:s.common}},null,8,["options","modelValue","loading","option-label","option-value"]),l(n,{modelValue:a.value.address,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value.address=e),label:"Address",dense:"",outlined:"",type:"text",hint:"Enter employer address","stack-label":"",rules:[e=>e.length>0||"Address is required"]},null,8,["modelValue","rules"]),l(n,{modelValue:a.value.description,"onUpdate:modelValue":t[3]||(t[3]=e=>a.value.description=e),label:"Company Description",dense:"",outlined:"",type:"textarea",hint:"Enter employer description","stack-label":"",rules:[e=>e.length>0||"Description is required"]},null,8,["modelValue","rules"]),i("div",P,[l(n,{modelValue:a.value.email,"onUpdate:modelValue":t[4]||(t[4]=e=>a.value.email=e),label:"Email",dense:"",class:"flex-1",outlined:"",type:"email",hint:"Enter employer email","stack-label":"",rules:[e=>e.length>0||"Email is required"]},null,8,["modelValue","rules"]),l(n,{modelValue:a.value.phone,"onUpdate:modelValue":t[5]||(t[5]=e=>a.value.phone=e),label:"Phone",dense:"",class:"flex-1",outlined:"",type:"text",hint:"Enter employer phone","stack-label":"",rules:[e=>e.length>0||"Phone is required"]},null,8,["modelValue","rules"])]),l(n,{modelValue:a.value.website,"onUpdate:modelValue":t[6]||(t[6]=e=>a.value.website=e),label:"Website",dense:"",outlined:"",type:"text",hint:"Enter employer website","stack-label":"",rules:[e=>e.length>0||"Website is required"]},null,8,["modelValue","rules"])]),_:1}),l(k,null,{default:o(()=>[l(U),l(C,{type:"submit",color:"primary",label:"Submit"})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})]),_:1}))}});export{X as default};
