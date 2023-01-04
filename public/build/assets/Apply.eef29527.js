import{Q as d}from"./QCardSection.16cad2ce.js";import{Q as f,a as Q}from"./QCard.0dd6e118.js";import{Q as r}from"./QInput.6a771f70.js";import{Q as h}from"./QSelect.a7ccb79e.js";import{Q as y,a as N,b as S}from"./QFile.3999d8c2.js";import{a2 as U,r as c,o as n,c as u,w as s,a as o,b as l,t as b,Q as q,d as w,h as A,F,e as C,v,a8 as I,f as k,aq as B}from"./app.5537cded.js";import{Q as V}from"./QSeparator.76d3a03b.js";import{Q as P}from"./QItemLabel.651ae715.js";import{f as j,a as L,b as $}from"./QList.680c6294.js";import{Q as M}from"./QForm.109d485f.js";import{_ as z}from"./Guest.vue_vue_type_script_setup_true_lang.1099cb2f.js";import{u as E}from"./use-quasar.cbd9147c.js";import"./focus-manager.c162f84c.js";import"./use-key-composition.f26dbfe8.js";import"./uid.3b368bd0.js";import"./QChip.b89302f7.js";import"./QDialog.1b717610.js";import"./use-prevent-scroll.1f2f953d.js";import"./focusout.8febd6d7.js";import"./format.1bf312ea.js";import"./use-cache.fa61b50a.js";import"./date.c732528b.js";const D={class:"relative"},G={class:"max-w-2xl mx-auto py-6 sm:px-6 lg:px-8"},R=o("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Applicant For",-1),T={class:"text-xl font-medium leading-6 text-gray-900"},H=o("h3",{class:"text-lg font-medium leading-6 text-gray-900"}," Personal Information ",-1),J={class:"grid sm:grid-cols-3 grid-cols-1 col-span-2 gap-2"},K={class:"col-span-2"},O=o("h3",{class:"text-lg font-medium leading-6 text-gray-900"}," Contact Information ",-1),ge=U({__name:"Apply",props:{job:null,errors:null},setup(i){const{job:g}=i,t=c({first_name:null,last_name:null,email:null,phone:null,address:null}),x=E(),m=c(null);function _(){!m.value.validate()||B.Inertia.post(`/job/${g.id}/apply`,t.value,{onSuccess:()=>{x.notify({message:"Application submitted successfully",color:"positive",position:"top"})}})}return(p,a)=>(n(),u(z,null,{default:s(()=>[o("div",D,[o("div",G,[l(f,{flat:"",bordered:"",class:"q-mb-sm"},{default:s(()=>[l(d,{class:"q-pa-md"},{default:s(()=>[R,o("h3",T,b(i.job.title),1)]),_:1})]),_:1}),l(M,{ref_key:"form",ref:m,onSubmit:I(_,["prevent"])},{default:s(()=>[l(f,{flat:"",bordered:""},{default:s(()=>[l(d,null,{default:s(()=>[H]),_:1}),l(d,{class:"grid sm:grid-cols-2 grid-cols-1 gap-1"},{default:s(()=>[o("div",J,[l(r,{dense:"",outlined:"",modelValue:t.value.first_name,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value.first_name=e),label:"First Name",class:"flex-1",rules:[e=>!!e||"First Name is required."]},null,8,["modelValue","rules"]),l(r,{dense:"",outlined:"",modelValue:t.value.middle_name,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value.middle_name=e),label:"Middle Name",class:"flex-1",rules:[e=>!!e||"Middle Name is required."]},null,8,["modelValue","rules"]),l(r,{dense:"",outlined:"",modelValue:t.value.last_name,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value.last_name=e),label:"Last Name",class:"flex-1",rules:[e=>!!e||"Last Name is required."]},null,8,["modelValue","rules"])]),o("div",K,[l(h,{modelValue:t.value.gender,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value.gender=e),options:["Male","Female"],dense:"",outlined:"",label:"Gender"},null,8,["modelValue"])]),l(r,{dense:"",outlined:"",class:"col-span-2",modelValue:t.value.birthdate,"onUpdate:modelValue":a[5]||(a[5]=e=>t.value.birthdate=e),label:"Birthdate",type:"text",readonly:"",hint:"Please use a valid birthdate.",rules:[e=>!!e||"Birthdate is required."],onFocus:a[6]||(a[6]=()=>{})},{append:s(()=>[l(q,{name:"event",class:"cursor-pointer"},{default:s(()=>[l(y,{"transition-show":"scale","transition-hide":"scale"},{default:s(()=>[l(N,{modelValue:t.value.birthdate,"onUpdate:modelValue":a[4]||(a[4]=e=>t.value.birthdate=e)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","rules"]),l(r,{dense:"",class:"col-span-2",type:"textarea",outlined:"",modelValue:t.value.address,"onUpdate:modelValue":a[7]||(a[7]=e=>t.value.address=e),label:"Address",hint:"Enter your address.",rules:[e=>!!e||"Address is required.",e=>e.length>=5||"Address must be more than 10 characters.",e=>e.length<=255||"Address must be less than 255 characters."]},null,8,["modelValue","rules"])]),_:1}),l(V),l(d,null,{default:s(()=>[O]),_:1}),l(V),l(d,null,{default:s(()=>[l(r,{dense:"",outlined:"",class:"col-span-2",modelValue:t.value.email,"onUpdate:modelValue":a[8]||(a[8]=e=>t.value.email=e),label:"Email",type:"email",hint:"Please use a valid email address for communication."},null,8,["modelValue"]),l(r,{dense:"",outlined:"",class:"col-span-2",type:"tel",modelValue:t.value.phone,"onUpdate:modelValue":a[9]||(a[9]=e=>t.value.phone=e),label:"Phone",hint:"Please use a valid phone number for communication."},null,8,["modelValue"])]),_:1}),l(d,null,{default:s(()=>[l(S,{modelValue:t.value.resume,"onUpdate:modelValue":a[10]||(a[10]=e=>t.value.resume=e),"lazy-rules":!1,label:"Attach Resume",accept:".pdf,.doc,.docx",filled:"",outlined:""},null,8,["modelValue"])]),_:1}),p.$props.errors?(n(),u(Q,{key:0},{default:s(()=>[l(j,{class:"text-red"},{default:s(()=>[(n(!0),w(F,null,A(p.$props.errors,e=>(n(),u(L,{key:e},{default:s(()=>[l($,null,{default:s(()=>[l(P,null,{default:s(()=>[k(b(e),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):C("",!0),l(d,{class:"sm:block flex justify-between"},{default:s(()=>[l(v,{href:"/jobs","icon-right":"cancel",size:"lg",color:"negative",label:"Cancel",width:"1000",outline:""}),l(v,{type:"submit","icon-right":"send",size:"lg",color:"green",label:"Submit",width:"1000",outline:""})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])])]),_:1}))}});export{ge as default};