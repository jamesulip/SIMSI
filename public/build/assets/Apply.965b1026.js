import{Q as d}from"./QCardSection.e36b4495.js";import{Q as f}from"./QCard.084be34e.js";import{Q as r}from"./QInput.b797ca2c.js";import{Q as _}from"./QSelect.5fc26ef6.js";import{Q as h,a as y}from"./QPopupProxy.770c9404.js";import{Z as N,r as c,o as n,c as u,w as s,a as o,b as l,t as b,Q as S,d as U,h as q,F as w,e as A,v,a4 as F,f as C,aq as I}from"./app.7aea84e7.js";import{Q as V}from"./QSeparator.2f510c62.js";import{Q as k}from"./QFile.6dc64c68.js";import{Q as B}from"./format.59afa872.js";import{e as P,b as j,c as L}from"./QLayout.8355c957.js";import{Q as $}from"./QCardActions.0b7e646a.js";import{Q as M}from"./QForm.545741da.js";import{_ as z}from"./Guest.vue_vue_type_script_setup_true_lang.24400ae5.js";import{u as E}from"./use-quasar.48a0b968.js";import"./focus-manager.767e685c.js";import"./use-key-composition.0bc37020.js";import"./uid.42677368.js";import"./QDialog.9c4aa11f.js";import"./use-prevent-scroll.1ace537b.js";import"./focusout.829000a0.js";import"./use-cache.b0833c75.js";import"./date.3bba07cf.js";const D={class:"relative"},G={class:"max-w-2xl mx-auto py-6 sm:px-6 lg:px-8"},R=o("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Applicant For",-1),T={class:"text-xl font-medium leading-6 text-gray-900"},Z=o("h3",{class:"text-lg font-medium leading-6 text-gray-900"}," Personal Information ",-1),H={class:"grid sm:grid-cols-3 grid-cols-1 col-span-2 gap-2"},J={class:"col-span-2"},K=o("h3",{class:"text-lg font-medium leading-6 text-gray-900"}," Contact Information ",-1),ge=N({__name:"Apply",props:{job:null,errors:null},setup(i){const{job:g}=i,t=c({first_name:null,last_name:null,email:null,phone:null,address:null}),Q=E(),m=c(null);function x(){!m.value.validate()||I.Inertia.post(`/job/${g.id}/apply`,t.value,{onSuccess:()=>{Q.notify({message:"Application submitted successfully",color:"positive",position:"top"})}})}return(p,a)=>(n(),u(z,null,{default:s(()=>[o("div",D,[o("div",G,[l(f,{flat:"",bordered:"",class:"q-mb-sm"},{default:s(()=>[l(d,{class:"q-pa-md"},{default:s(()=>[R,o("h3",T,b(i.job.title),1)]),_:1})]),_:1}),l(M,{ref_key:"form",ref:m,onSubmit:F(x,["prevent"])},{default:s(()=>[l(f,{flat:"",bordered:""},{default:s(()=>[l(d,null,{default:s(()=>[Z]),_:1}),l(d,{class:"grid sm:grid-cols-2 grid-cols-1 gap-1"},{default:s(()=>[o("div",H,[l(r,{dense:"",outlined:"",modelValue:t.value.first_name,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value.first_name=e),label:"First Name",class:"flex-1",rules:[e=>!!e||"First Name is required."]},null,8,["modelValue","rules"]),l(r,{dense:"",outlined:"",modelValue:t.value.middle_name,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value.middle_name=e),label:"Middle Name",class:"flex-1",rules:[e=>!!e||"Middle Name is required."]},null,8,["modelValue","rules"]),l(r,{dense:"",outlined:"",modelValue:t.value.last_name,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value.last_name=e),label:"Last Name",class:"flex-1",rules:[e=>!!e||"Last Name is required."]},null,8,["modelValue","rules"])]),o("div",J,[l(_,{modelValue:t.value.gender,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value.gender=e),options:["Male","Female"],dense:"",outlined:"",label:"Gender"},null,8,["modelValue"])]),l(r,{dense:"",outlined:"",class:"col-span-2",modelValue:t.value.birthdate,"onUpdate:modelValue":a[5]||(a[5]=e=>t.value.birthdate=e),label:"Birthdate",type:"text",readonly:"",hint:"Please use a valid birthdate.",rules:[e=>!!e||"Birthdate is required."],onFocus:a[6]||(a[6]=()=>{})},{append:s(()=>[l(S,{name:"event",class:"cursor-pointer"},{default:s(()=>[l(h,{"transition-show":"scale","transition-hide":"scale"},{default:s(()=>[l(y,{modelValue:t.value.birthdate,"onUpdate:modelValue":a[4]||(a[4]=e=>t.value.birthdate=e)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","rules"]),l(r,{dense:"",class:"col-span-2",type:"textarea",outlined:"",modelValue:t.value.address,"onUpdate:modelValue":a[7]||(a[7]=e=>t.value.address=e),label:"Address",hint:"Enter your address.",rules:[e=>!!e||"Address is required.",e=>e.length>=5||"Address must be more than 10 characters.",e=>e.length<=255||"Address must be less than 255 characters."]},null,8,["modelValue","rules"])]),_:1}),l(V),l(d,null,{default:s(()=>[K]),_:1}),l(V),l(d,null,{default:s(()=>[l(r,{dense:"",outlined:"",class:"col-span-2",modelValue:t.value.email,"onUpdate:modelValue":a[8]||(a[8]=e=>t.value.email=e),label:"Email",type:"email",hint:"Please use a valid email address for communication."},null,8,["modelValue"]),l(r,{dense:"",outlined:"",class:"col-span-2",type:"tel",modelValue:t.value.phone,"onUpdate:modelValue":a[9]||(a[9]=e=>t.value.phone=e),label:"Phone",hint:"Please use a valid phone number for communication."},null,8,["modelValue"])]),_:1}),l(d,null,{default:s(()=>[l(k,{modelValue:t.value.resume,"onUpdate:modelValue":a[10]||(a[10]=e=>t.value.resume=e),"lazy-rules":!1,label:"Attach Resume",accept:".pdf,.doc,.docx",filled:"",outlined:""},null,8,["modelValue"])]),_:1}),p.$props.errors?(n(),u($,{key:0},{default:s(()=>[l(P,{class:"text-red"},{default:s(()=>[(n(!0),U(w,null,q(p.$props.errors,e=>(n(),u(j,{key:e},{default:s(()=>[l(L,null,{default:s(()=>[l(B,null,{default:s(()=>[C(b(e),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):A("",!0),l(d,{class:"sm:block flex justify-between"},{default:s(()=>[l(v,{href:"/jobs","icon-right":"cancel",size:"lg",color:"negative",label:"Cancel",width:"1000",outline:""}),l(v,{type:"submit","icon-right":"send",size:"lg",color:"green",label:"Submit",width:"1000",outline:""})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])])]),_:1}))}});export{ge as default};