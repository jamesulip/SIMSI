import{a8 as Q,r as v,o as d,c as r,w as s,a as o,b as a,aF as n,t as p,aE as c,aG as i,Q as N,O as f,d as b,e as V,aH as F,h as I,F as S,ag as U,f as k,aI as q}from"./app.b5166522.js";import{Q as A}from"./QSelect.f0eb4703.js";import{Q as w,a as C}from"./QPopupProxy.fffaeb90.js";import{Q as P}from"./format.1c434d9b.js";import{e as B,b as L,c as $}from"./QLayout.edc35d24.js";import{Q as j}from"./QForm.9e275de7.js";import{_ as E}from"./AppLayout.vue_vue_type_script_setup_true_lang.b45ff0c9.js";import{u as M}from"./use-quasar.e749b80d.js";import"./use-cache.b0833c75.js";import"./date.04761658.js";import"./QImg.9bbcb33e.js";import"./touch.70a9dd44.js";const D={class:"relative"},G={class:"max-w-2xl mx-auto py-6 sm:px-6 lg:px-8"},H=o("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Applicant For",-1),O={class:"text-xl font-medium leading-6 text-gray-900"},R=o("h3",{class:"text-lg font-medium leading-6 text-gray-900"}," Personal Information ",-1),T={class:"grid sm:grid-cols-3 grid-cols-1 col-span-2 gap-2"},z={class:"col-span-2"},J=o("h3",{class:"text-lg font-medium leading-6 text-gray-900"}," Contact Information ",-1),K=["href"],ne=Q({__name:"Applicant",props:{job:null,errors:null,application:null},setup(l){const{job:g,application:x}=l,h=M(),u=v(null);function y(){!u.value.validate()||q.Inertia.post(`/job/${g.id}/apply`,x.value,{onSuccess:()=>{h.notify({message:"Application submitted successfully",color:"positive",position:"top"})}})}return(m,t)=>(d(),r(E,null,{default:s(()=>[o("div",D,[o("div",G,[a(c,{flat:"",bordered:"",class:"q-mb-sm"},{default:s(()=>[a(n,{class:"q-pa-md"},{default:s(()=>[H,o("h3",O,p(l.job.title),1)]),_:1})]),_:1}),a(j,{ref_key:"form",ref:u,onSubmit:U(y,["prevent"])},{default:s(()=>[a(c,{flat:"",bordered:""},{default:s(()=>[a(n,null,{default:s(()=>[R]),_:1}),a(n,{class:"grid sm:grid-cols-2 grid-cols-1 gap-1"},{default:s(()=>[o("div",T,[a(i,{dense:"",outlined:"",modelValue:l.application.first_name,"onUpdate:modelValue":t[0]||(t[0]=e=>l.application.first_name=e),label:"First Name",class:"flex-1",rules:[e=>!!e||"First Name is required."]},null,8,["modelValue","rules"]),a(i,{dense:"",outlined:"",modelValue:l.application.middle_name,"onUpdate:modelValue":t[1]||(t[1]=e=>l.application.middle_name=e),label:"Middle Name",class:"flex-1",rules:[e=>!!e||"Middle Name is required."]},null,8,["modelValue","rules"]),a(i,{dense:"",outlined:"",modelValue:l.application.last_name,"onUpdate:modelValue":t[2]||(t[2]=e=>l.application.last_name=e),label:"Last Name",class:"flex-1",rules:[e=>!!e||"Last Name is required."]},null,8,["modelValue","rules"])]),o("div",z,[a(A,{modelValue:l.application.gender,"onUpdate:modelValue":t[3]||(t[3]=e=>l.application.gender=e),options:["Male","Female"],dense:"",outlined:"",label:"Gender"},null,8,["modelValue"])]),a(i,{dense:"",outlined:"",class:"col-span-2",modelValue:l.application.birthdate,"onUpdate:modelValue":t[5]||(t[5]=e=>l.application.birthdate=e),label:"Birthdate",type:"text",readonly:"",hint:"Please use a valid birthdate.",rules:[e=>!!e||"Birthdate is required."],onFocus:t[6]||(t[6]=()=>{})},{append:s(()=>[a(N,{name:"event",class:"cursor-pointer"},{default:s(()=>[a(w,{"transition-show":"scale","transition-hide":"scale"},{default:s(()=>[a(C,{modelValue:l.application.birthdate,"onUpdate:modelValue":t[4]||(t[4]=e=>l.application.birthdate=e)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","rules"]),a(i,{dense:"",class:"col-span-2",type:"textarea",outlined:"",modelValue:l.application.address,"onUpdate:modelValue":t[7]||(t[7]=e=>l.application.address=e),label:"Address",hint:"Enter your address.",rules:[e=>!!e||"Address is required.",e=>e.length>=5||"Address must be more than 10 characters.",e=>e.length<=255||"Address must be less than 255 characters."]},null,8,["modelValue","rules"])]),_:1}),a(f),a(n,null,{default:s(()=>[J]),_:1}),a(f),a(n,null,{default:s(()=>[a(i,{dense:"",outlined:"",class:"col-span-2",modelValue:l.application.email,"onUpdate:modelValue":t[8]||(t[8]=e=>l.application.email=e),label:"Email",type:"email",hint:"Please use a valid email address for communication."},null,8,["modelValue"]),a(i,{dense:"",outlined:"",class:"col-span-2",type:"tel",modelValue:l.application.phone,"onUpdate:modelValue":t[9]||(t[9]=e=>l.application.phone=e),label:"Phone",hint:"Please use a valid phone number for communication."},null,8,["modelValue"])]),_:1}),a(n,null,{default:s(()=>[l.application.resume?(d(),b("a",{key:0,href:l.application.resume.original_url,target:"_blank",class:"text-blue-500"}," View Resume ",8,K)):V("",!0)]),_:1}),m.$props.errors?(d(),r(F,{key:0},{default:s(()=>[a(B,{class:"text-red"},{default:s(()=>[(d(!0),b(S,null,I(m.$props.errors,e=>(d(),r(L,{key:e},{default:s(()=>[a($,null,{default:s(()=>[a(P,null,{default:s(()=>[k(p(e),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):V("",!0)]),_:1})]),_:1},8,["onSubmit"])])])]),_:1}))}});export{ne as default};
