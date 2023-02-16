import{a8 as q,r as c,o as v,c as w,w as t,b as e,ag as U,aE as j,aF as n,O as d,aG as m,x as u,a as p,d as F,h as P,F as M,g as I,Q as y,P as Q,aH as B,f as E,aI as L}from"./app.5959f21c.js";import{Q as N,C as k}from"./ClosePopup.61ba310b.js";import{Q as b}from"./QSelect.1c720cea.js";import{Q as x,a as C}from"./QPopupProxy.74dd89b2.js";import{Q as T}from"./QFile.27510456.js";import{Q as A}from"./QSpace.907c9ee5.js";import{Q as J}from"./QForm.25274404.js";import{Q as G}from"./QPage.7e4afda4.js";import{_ as O}from"./AppLayout.vue_vue_type_script_setup_true_lang.f30be699.js";import{d as D}from"./date.3a1195c9.js";import{u as H}from"./index.8246c581.js";import"./QTooltip.1ccdcd6b.js";import"./QLayout.53d409fb.js";import"./use-fullscreen.a065ee23.js";import"./format.311d02a1.js";import"./use-cache.b0833c75.js";import"./QImg.61f61069.js";import"./touch.70a9dd44.js";const R=p("div",{class:"text-h6"},"Job Details",-1),K={class:"p-2 bg-gray-100 grid grid-cols-1 gap-3"},W={class:"grid grid-cols-2 gap-3"},X={class:"row items-center justify-end"},Z={class:"row items-center justify-end"},_e=q({__name:"Create",props:{job_types:null,employers:null},setup(f){const{job_types:ee,employers:h}=f,a=c({title:"",description:"",location:"",salary:"",show_salary:"",skills:[],images:[]}),g=c(null);function S(){!g.value.validate()||L.Inertia.post("/admin/jobs",{...a.value,text_content:a.value.description,date_posted:D.formatDate(new Date,"YYYY-MM-DD"),date_expires:D.formatDate(new Date,"YYYY-MM-DD")},{forceFormData:!0,preserveScroll:!0,onSuccess:()=>{a.value={title:"",description:"",location:"",salary:"",show_salary:"",skills:[]}}})}const{data:_,isFetching:z}=H("https://restcountries.com/v3.1/all?fields=name").json(),V=c(_.value);function Y(s,o,l){o(()=>{const i=s.toLowerCase();V.value=_.value.filter(r=>r.name.common.toLowerCase().indexOf(i)>-1)})}function $(s){a.value.location=h.find(o=>o.id==s).country}return(s,o)=>(v(),w(O,{title:"Jobs"},{default:t(()=>[e(G,{padding:"",class:"flex w-full"},{default:t(()=>[e(J,{ref_key:"form",ref:g,class:"mx-auto",onSubmit:U(S,["prevent"])},{default:t(()=>[e(j,{flat:"",bordered:"",class:"max-w-7xl"},{default:t(()=>[e(n,null,{default:t(()=>[R]),_:1}),e(d),e(n,null,{default:t(()=>[e(m,{dense:"",modelValue:a.value.title,"onUpdate:modelValue":o[0]||(o[0]=l=>a.value.title=l),label:"Title",outlined:"","lazy-rules":"",rules:[l=>!!l||"Please type something"]},null,8,["modelValue","rules"])]),_:1}),e(d),e(n,null,{default:t(()=>[e(N,{placeholder:"Type Job Description here...","model-value":a.value.description,"onUpdate:model-value":o[1]||(o[1]=l=>a.value.description=l),toolbar:[[{label:s.$q.lang.editor.align,icon:s.$q.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:s.$q.lang.editor.formatting,icon:s.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6"]},{label:s.$q.lang.editor.fontSize,icon:s.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:s.$q.lang.editor.defaultFont,icon:s.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"},label:"Description",outlined:"","lazy-rules":"",rules:[l=>!!l||"Please type something"]},null,8,["model-value","toolbar","rules"])]),_:1}),e(d),e(n,{class:"q-gutter-sm"},{default:t(()=>[e(u,{class:"q-mr-sm",color:"primary",flat:"",label:"Qualifications",unelevated:"",icon:"add",onClick:o[2]||(o[2]=l=>a.value.skills.push(""))}),p("div",K,[(v(!0),F(M,null,P(a.value.skills,(l,i)=>(v(),w(m,{dense:"",type:"textarea",outlined:"",rows:"2",key:`phone-${i}`,"model-value":a.value.skills[i],"onUpdate:model-value":r=>a.value.skills[i]=r,label:"Qualifications",rules:[r=>!!r||"Please type something",r=>r.length>2||"Please type something"]},{append:t(()=>[e(u,{unelevated:"",class:"q-mr-sm",color:"red",icon:"delete",flat:"",onClick:r=>a.value.skills.splice(i,1)},null,8,["onClick"])]),_:2},1032,["model-value","onUpdate:model-value","rules"]))),128))])]),_:1}),e(d),e(n,{class:"q-gutter-md"},{default:t(()=>[p("div",W,[e(b,{dense:"",modelValue:a.value.employer_id,"onUpdate:modelValue":[o[3]||(o[3]=l=>a.value.employer_id=l),$],outlined:"",label:"Employer",options:f.employers,"map-options":"","emit-value":"","option-value":l=>l.id,"option-label":l=>l.name},null,8,["modelValue","options","option-value","option-label"]),e(b,{dense:"","use-input":"",options:V.value,onFilter:Y,modelValue:a.value.location,"onUpdate:modelValue":o[4]||(o[4]=l=>a.value.location=l),outlined:"",label:"Country",loading:I(z),"option-label":l=>{var i;return(i=l==null?void 0:l.name)==null?void 0:i.common},"map-options":"","emit-value":"","option-value":l=>{var i;return(i=l==null?void 0:l.name)==null?void 0:i.common}},null,8,["options","modelValue","loading","option-label","option-value"])])]),_:1}),e(n,{class:"flex gap-3"},{default:t(()=>[e(m,{dense:"",prefix:"Php",modelValue:a.value.salary,"onUpdate:modelValue":o[5]||(o[5]=l=>a.value.salary=l),label:"Salary",type:"number",class:"w-1/2",outlined:"",hint:"You can leave this field empty if you don't want to show salary","lazy-rules":""},null,8,["modelValue"])]),_:1}),e(n,{class:"flex gap-3"},{default:t(()=>[e(b,{class:"flex-1",clearable:"",dense:"",modelValue:a.value.job_type_id,"onUpdate:modelValue":o[6]||(o[6]=l=>a.value.job_type_id=l),"emit-value":"","map-options":"",label:"Employment Type",outlined:"",options:f.job_types,"lazy-rules":"","option-value":"id","option-label":"name"},null,8,["modelValue","options"])]),_:1}),e(n,{class:"flex gap-3"},{default:t(()=>[e(m,{dense:"",class:"flex-1",modelValue:a.value.date_posted,"onUpdate:modelValue":o[8]||(o[8]=l=>a.value.date_posted=l),label:"Date Posted",outlined:"","lazy-rules":""},{append:t(()=>[e(y,{name:"event",class:"cursor-pointer"},{default:t(()=>[e(x,{"transition-show":"scale","transition-hide":"scale"},{default:t(()=>[e(C,{mask:"YYYY-MM-DD",modelValue:a.value.date_posted,"onUpdate:modelValue":o[7]||(o[7]=l=>a.value.date_posted=l)},{default:t(()=>[p("div",X,[Q(e(u,{label:"Close",color:"primary",flat:""},null,512),[[k]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(m,{dense:"",class:"flex-1",modelValue:a.value.date_expires,"onUpdate:modelValue":o[10]||(o[10]=l=>a.value.date_expires=l),label:"Date Expires",outlined:"","lazy-rules":""},{append:t(()=>[e(y,{name:"event",class:"cursor-pointer"},{default:t(()=>[e(x,{"transition-show":"scale","transition-hide":"scale"},{default:t(()=>[e(C,{modelValue:a.value.date_expires,"onUpdate:modelValue":o[9]||(o[9]=l=>a.value.date_expires=l),mask:"YYYY-MM-DD"},{default:t(()=>[p("div",Z,[Q(e(u,{label:"Close",color:"primary",flat:""},null,512),[[k]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d),e(n,null,{default:t(()=>[e(T,{dense:"",outlined:"",modelValue:a.value.images,"onUpdate:modelValue":o[11]||(o[11]=l=>a.value.images=l),multiple:""},{prepend:t(()=>[e(y,{name:"attach_file"})]),_:1},8,["modelValue"])]),_:1}),e(d),e(B,{align:"right"},{default:t(()=>[e(u,{size:"lg",onClick:o[12]||(o[12]=l=>s.$inertia.get("/admin/jobs")),color:"negative"},{default:t(()=>[E(" Cancel ")]),_:1}),e(A),e(u,{size:"lg",icon:"mdi-content-save-outline",label:"Save",type:"submit",color:"primary"})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}))}});export{_e as default};