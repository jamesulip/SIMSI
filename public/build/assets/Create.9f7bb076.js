import{Q as s}from"./QCardSection.9b50796e.js";import{Q as r}from"./QSeparator.91960911.js";import{Q as u}from"./QInput.ab7662bb.js";import{Q as C,C as _}from"./ClosePopup.07f579cc.js";import{Q as d}from"./QSelect.4dc8a061.js";import{Z as q,r as p,o as U,c as h,w as t,b as l,a4 as j,g as $,Q as f,a as c,H as g,v as m,f as M,aq as P}from"./app.4a522239.js";import{Q as w,a as Q}from"./QPopupProxy.7e474ba1.js";import{Q as F}from"./QFile.6456a939.js";import{Q as I}from"./QSpace.4fab7da7.js";import{Q as L,a as N}from"./QCardActions.ad8a9dd2.js";import{Q as B}from"./QForm.9a5af0b3.js";import{Q as E}from"./QPage.80c7eccb.js";import{_ as T}from"./AppLayout.vue_vue_type_script_setup_true_lang.033a3d93.js";import{d as x}from"./date.9c949ba9.js";import{u as A}from"./index.32ae7369.js";import"./focus-manager.5d096218.js";import"./use-key-composition.60849670.js";import"./uid.42677368.js";import"./QTooltip.f4a3e096.js";import"./QLayout.b19ee09e.js";import"./focusout.ee40dee4.js";import"./use-fullscreen.9e88e041.js";import"./format.8320855d.js";import"./QDialog.bff85a37.js";import"./use-prevent-scroll.f3d8452f.js";import"./use-cache.b0833c75.js";import"./QImg.0fe3dd47.js";import"./touch.70a9dd44.js";const J=c("div",{class:"text-h6"},"Job Details",-1),R={class:"row items-center justify-end"},G={class:"row items-center justify-end"},Qe=q({__name:"Create",props:{job_types:null,employers:null},setup(v){const o=p({title:"",description:"",location:"",salary:"",show_salary:"",skills:[],images:[]});function S(i,a){a(i,"add-unique")}const b=p(null);function k(){!b.value.validate()||P.Inertia.post("/admin/jobs",{...o.value,text_content:o.value.description,date_posted:x.formatDate(new Date,"YYYY-MM-DD"),date_expires:x.formatDate(new Date,"YYYY-MM-DD")},{forceFormData:!0,preserveScroll:!0,onSuccess:()=>{o.value={title:"",description:"",location:"",salary:"",show_salary:"",skills:[]}}})}const{data:y,isFetching:D}=A("https://restcountries.com/v3.1/all?fields=name").json(),V=p(y.value);function z(i,a,e){a(()=>{const n=i.toLowerCase();V.value=y.value.filter(Y=>Y.name.common.toLowerCase().indexOf(n)>-1)})}return(i,a)=>(U(),h(T,{title:"Jobs"},{default:t(()=>[l(E,{padding:"",class:"flex w-full"},{default:t(()=>[l(B,{ref_key:"form",ref:b,class:"mx-auto",onSubmit:j(k,["prevent"])},{default:t(()=>[l(L,{flat:"",bordered:"",class:"max-w-7xl"},{default:t(()=>[l(s,null,{default:t(()=>[J]),_:1}),l(r),l(s,null,{default:t(()=>[l(u,{modelValue:o.value.title,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value.title=e),label:"Title",outlined:"","lazy-rules":"",rules:[e=>!!e||"Please type something"]},null,8,["modelValue","rules"])]),_:1}),l(r),l(s,null,{default:t(()=>[l(C,{"model-value":o.value.description,"onUpdate:model-value":a[1]||(a[1]=e=>o.value.description=e),toolbar:[[{label:i.$q.lang.editor.align,icon:i.$q.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:i.$q.lang.editor.formatting,icon:i.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:i.$q.lang.editor.fontSize,icon:i.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:i.$q.lang.editor.defaultFont,icon:i.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"},label:"Description",outlined:"","lazy-rules":"",rules:[e=>!!e||"Please type something"]},null,8,["model-value","toolbar","rules"])]),_:1}),l(s,{class:"q-gutter-md"},{default:t(()=>[l(d,{modelValue:o.value.employer_id,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value.employer_id=e),outlined:"",label:"Employer",options:v.employers,"map-options":"","emit-value":"","option-value":e=>e.id,"option-label":e=>e.name},null,8,["modelValue","options","option-value","option-label"]),l(d,{"use-input":"",options:V.value,onFilter:z,modelValue:o.value.location,"onUpdate:modelValue":a[3]||(a[3]=e=>o.value.location=e),outlined:"",label:"Location",loading:$(D),"option-label":e=>{var n;return(n=e==null?void 0:e.name)==null?void 0:n.common},"map-options":"","emit-value":"","option-value":e=>{var n;return(n=e==null?void 0:e.name)==null?void 0:n.common}},null,8,["options","modelValue","loading","option-label","option-value"])]),_:1}),l(s,{class:"flex gap-3"},{default:t(()=>[l(u,{prefix:"Php",modelValue:o.value.salary,"onUpdate:modelValue":a[4]||(a[4]=e=>o.value.salary=e),label:"Salary",type:"number",class:"w-1/2",outlined:"",hint:"You can leave this field empty if you don't want to show salary","lazy-rules":""},null,8,["modelValue"])]),_:1}),l(s,{class:"flex gap-3"},{default:t(()=>[l(d,{class:"flex-1","max-values":"4","use-input":"","use-chips":"",multiple:"",onNewValue:S,modelValue:o.value.skills,"onUpdate:modelValue":a[5]||(a[5]=e=>o.value.skills=e),label:"Skills Required",outlined:"","lazy-rules":"",rules:[e=>!!e||"Please type something"],hint:"Please separate skills with comma"},null,8,["modelValue","rules"]),l(d,{class:"flex-1",clearable:"",modelValue:o.value.job_type_id,"onUpdate:modelValue":a[6]||(a[6]=e=>o.value.job_type_id=e),"emit-value":"","map-options":"",label:"Employment Type",outlined:"",options:v.job_types,"lazy-rules":"","option-value":"id","option-label":"name"},null,8,["modelValue","options"])]),_:1}),l(s,{class:"flex gap-3"},{default:t(()=>[l(u,{class:"flex-1",modelValue:o.value.date_posted,"onUpdate:modelValue":a[8]||(a[8]=e=>o.value.date_posted=e),label:"Date Posted",outlined:"","lazy-rules":""},{append:t(()=>[l(f,{name:"event",class:"cursor-pointer"},{default:t(()=>[l(w,{"transition-show":"scale","transition-hide":"scale"},{default:t(()=>[l(Q,{mask:"YYYY-MM-DD",modelValue:o.value.date_posted,"onUpdate:modelValue":a[7]||(a[7]=e=>o.value.date_posted=e)},{default:t(()=>[c("div",R,[g(l(m,{label:"Close",color:"primary",flat:""},null,512),[[_]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(u,{class:"flex-1",modelValue:o.value.date_expires,"onUpdate:modelValue":a[10]||(a[10]=e=>o.value.date_expires=e),label:"Date Expires",outlined:"","lazy-rules":""},{append:t(()=>[l(f,{name:"event",class:"cursor-pointer"},{default:t(()=>[l(w,{"transition-show":"scale","transition-hide":"scale"},{default:t(()=>[l(Q,{modelValue:o.value.date_expires,"onUpdate:modelValue":a[9]||(a[9]=e=>o.value.date_expires=e),mask:"YYYY-MM-DD"},{default:t(()=>[c("div",G,[g(l(m,{label:"Close",color:"primary",flat:""},null,512),[[_]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(r),l(s,null,{default:t(()=>[l(F,{outlined:"",modelValue:o.value.images,"onUpdate:modelValue":a[11]||(a[11]=e=>o.value.images=e),multiple:""},{prepend:t(()=>[l(f,{name:"attach_file"})]),_:1},8,["modelValue"])]),_:1}),l(r),l(N,{align:"right"},{default:t(()=>[l(m,{size:"lg",onClick:a[12]||(a[12]=e=>i.$inertia.get("/admin/jobs")),color:"negative"},{default:t(()=>[M(" Cancel ")]),_:1}),l(I),l(m,{size:"lg",icon:"mdi-content-save-outline",label:"Save",type:"submit",color:"primary"})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}))}});export{Qe as default};
