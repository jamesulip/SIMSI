import{a8 as M,r as x,o as b,c as P,w as a,b as l,a as m,aE as I,aF as d,O as v,aG as f,g as n,Q as y,P as w,x as r,d as Q,h as E,F as L,aH as q,f as k,ag as B,aI as N}from"./app.b5166522.js";import{Q as T,C as S}from"./ClosePopup.dade42c7.js";import{Q as c}from"./QSelect.f0eb4703.js";import{Q as z,a as C}from"./QPopupProxy.fffaeb90.js";import{Q as A}from"./QFile.fb3d0a3b.js";import{Q as J}from"./QImg.9bbcb33e.js";import{Q as G}from"./QSpace.d35235b0.js";import{Q as O}from"./QPage.31f35db4.js";import{_ as R}from"./AppLayout.vue_vue_type_script_setup_true_lang.b45ff0c9.js";import{d as D}from"./date.04761658.js";import{u as H}from"./use-quasar.e749b80d.js";import{u as K}from"./index.cee26df2.js";import"./QTooltip.28032604.js";import"./QLayout.edc35d24.js";import"./use-fullscreen.9bc7cd64.js";import"./format.1c434d9b.js";import"./use-cache.b0833c75.js";import"./touch.70a9dd44.js";const W=["onSubmit"],X=m("div",{class:"text-h6"},"Job Details",-1),Z={class:"row items-center justify-end"},_={class:"row items-center justify-end"},ee=m("br",null,null,-1),le={class:"q-col-gutter-md row items-start"},xe=M({__name:"Edit",props:{job_types:null,job:null,employers:null},setup(t){const{job:p,job_types:oe}=t,i=H(),j=x(!1);function Y(u,o){o(u,"add-unique")}function U(){N.Inertia.post(`/admin/jobs/${p.id}/update`,{...p,date_posted:D.formatDate(p.date_posted,"YYYY-MM-DD"),date_expires:D.formatDate(p.date_expires,"YYYY-MM-DD")},{preserveScroll:!0,onStart:()=>{j.value=!0,i.notify({group:"my-group",message:"Updating job...",color:"primary",position:"bottom"})},onSuccess:()=>{j.value=!1,i.notify({group:"my-group",message:"Job updated successfully",color:"positive",position:"bottom",timeout:2e3})}})}const{data:g,isFetching:$}=K("https://restcountries.com/v3.1/all?fields=name").json(),V=x(g.value);function h(u,o,e){o(()=>{const s=u.toLowerCase();V.value=g.value.filter(F=>F.name.common.toLowerCase().indexOf(s)>-1)})}return(u,o)=>(b(),P(R,{title:"Jobs"},{default:a(()=>[l(O,{padding:"",class:"flex w-full"},{default:a(()=>[m("form",{class:"mx-auto",onSubmit:B(U,["prevent"])},[l(I,{flat:"",bordered:"",class:"max-w-7xl"},{default:a(()=>[l(d,null,{default:a(()=>[X]),_:1}),l(v),l(d,null,{default:a(()=>[l(f,{modelValue:t.job.title,"onUpdate:modelValue":o[0]||(o[0]=e=>t.job.title=e),label:"Title",outlined:"","lazy-rules":"",rules:[e=>!!e||"Please type something"]},null,8,["modelValue","rules"])]),_:1}),l(v),l(d,null,{default:a(()=>[l(T,{"model-value":t.job.description,"onUpdate:model-value":o[1]||(o[1]=e=>t.job.description=e),toolbar:[[{label:n(i).lang.editor.align,icon:n(i).iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:n(i).lang.editor.formatting,icon:n(i).iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:n(i).lang.editor.fontSize,icon:n(i).iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:n(i).lang.editor.defaultFont,icon:n(i).iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"},label:"Description",outlined:"","lazy-rules":"",rules:[e=>!!e||"Please type something"]},null,8,["model-value","toolbar","rules"])]),_:1}),l(d,{class:"q-gutter-md"},{default:a(()=>[l(c,{modelValue:t.job.employer_id,"onUpdate:modelValue":o[2]||(o[2]=e=>t.job.employer_id=e),outlined:"",label:"Employer",options:t.employers,"map-options":"","emit-value":"","option-value":e=>e.id,"option-label":e=>e.name},null,8,["modelValue","options","option-value","option-label"]),l(c,{"use-input":"",options:V.value,onFilter:h,modelValue:t.job.location,"onUpdate:modelValue":o[3]||(o[3]=e=>t.job.location=e),outlined:"",label:"Location",loading:n($),"option-label":e=>{var s;return(s=e==null?void 0:e.name)==null?void 0:s.common},"map-options":"","emit-value":"","option-value":e=>{var s;return(s=e==null?void 0:e.name)==null?void 0:s.common}},null,8,["options","modelValue","loading","option-label","option-value"])]),_:1}),l(d,{class:"flex gap-3"},{default:a(()=>[l(f,{prefix:"Php",modelValue:t.job.salary,"onUpdate:modelValue":o[4]||(o[4]=e=>t.job.salary=e),label:"Salary",type:"number",class:"w-1/2",outlined:"",hint:"You can leave this field empty if you don't want to show salary","lazy-rules":""},null,8,["modelValue"])]),_:1}),l(d,{class:"flex gap-3"},{default:a(()=>[l(c,{class:"flex-1","max-values":"4","use-input":"","use-chips":"",multiple:"",onNewValue:Y,modelValue:t.job.skills,"onUpdate:modelValue":o[5]||(o[5]=e=>t.job.skills=e),label:"Skills Required",outlined:"","lazy-rules":"",hint:"Please separate skills with comma"},null,8,["modelValue"]),l(c,{class:"flex-1",clearable:"",modelValue:t.job.job_type_id,"onUpdate:modelValue":o[6]||(o[6]=e=>t.job.job_type_id=e),"emit-value":"","map-options":"",label:"Employment  Type",outlined:"",options:t.job_types,"lazy-rules":"","option-value":"id","option-label":"name"},null,8,["modelValue","options"])]),_:1}),l(d,{class:"flex gap-3"},{default:a(()=>[l(f,{class:"flex-1",modelValue:t.job.date_posted,"onUpdate:modelValue":o[8]||(o[8]=e=>t.job.date_posted=e),label:"Date Posted",outlined:"","lazy-rules":""},{append:a(()=>[l(y,{name:"event",class:"cursor-pointer"},{default:a(()=>[l(z,{"transition-show":"scale","transition-hide":"scale"},{default:a(()=>[l(C,{mask:"YYYY-MM-DD",modelValue:t.job.date_posted,"onUpdate:modelValue":o[7]||(o[7]=e=>t.job.date_posted=e)},{default:a(()=>[m("div",Z,[w(l(r,{label:"Close",color:"primary",flat:""},null,512),[[S]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(f,{class:"flex-1",modelValue:t.job.date_expires,"onUpdate:modelValue":o[10]||(o[10]=e=>t.job.date_expires=e),label:"Date Expires",outlined:"","lazy-rules":""},{append:a(()=>[l(y,{name:"event",class:"cursor-pointer"},{default:a(()=>[l(z,{"transition-show":"scale","transition-hide":"scale"},{default:a(()=>[l(C,{modelValue:t.job.date_expires,"onUpdate:modelValue":o[9]||(o[9]=e=>t.job.date_expires=e),mask:"YYYY-MM-DD"},{default:a(()=>[m("div",_,[w(l(r,{label:"Close",color:"primary",flat:""},null,512),[[S]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(d,null,{default:a(()=>[l(A,{outlined:"",modelValue:t.job.images,"onUpdate:modelValue":o[11]||(o[11]=e=>t.job.images=e),multiple:""},{prepend:a(()=>[l(y,{name:"attach_file"})]),_:1},8,["modelValue"]),ee,m("div",le,[(b(!0),Q(L,null,E(t.job.media,e=>(b(),Q("div",{class:"col-3",key:e.id},[l(J,{src:e.original_url,"no-native-menu":""},{default:a(()=>[l(r,{class:"absolute all-pointer-events",icon:"close",flat:"",color:"red",style:{top:"8px",left:"8px"},onClick:s=>u.$inertia.delete(`/admin/jobs/${t.job.id}/media/${e.id}`)},null,8,["onClick"])]),_:2},1032,["src"])]))),128))])]),_:1}),l(v),l(q,{align:"right"},{default:a(()=>[l(r,{unelevated:"",size:"sm",onClick:o[12]||(o[12]=e=>u.$inertia.get("/admin/jobs")),color:"negative"},{default:a(()=>[k(" Cancel ")]),_:1}),l(r,{unelevated:"",size:"sm",icon:"delete",onClick:o[13]||(o[13]=e=>u.$inertia.delete(`/admin/jobs/${t.job.id}`)),color:"negative"},{default:a(()=>[k(" Delete ")]),_:1}),l(G),l(r,{unelevated:"",label:"Save",type:"submit",color:"primary",size:"sm",icon:"mdi-content-save-outline"})]),_:1})]),_:1})],40,W)]),_:1})]),_:1}))}});export{xe as default};