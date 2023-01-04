import{b as T,c as $,d as C,Q as c,a as f}from"./QList.bb1baa1b.js";import{Q as L}from"./QSpace.185978bc.js";import{a2 as M,r as Q,s as V,o as s,c as m,w as l,b as t,a as o,f as r,v as y,t as u,e as p,d as g,g as v,aN as H,F as N,h as D,a3 as x,Q as E}from"./app.f1084ffb.js";import{Q as I}from"./QCardActions.a88db726.js";import{Q as A}from"./QSeparator.8770f7d8.js";import{Q as B}from"./QInput.e3db977c.js";import{Q as J}from"./QSelect.353a3914.js";import{Q as P}from"./QCardSection.ef73880e.js";import{Q as Y}from"./QCard.cf94f3e9.js";import{Q as q}from"./QForm.5f5f7c3a.js";import{Q as k}from"./QChip.868a36e2.js";import{Q as F,a as n}from"./QTable.4eff6fff.js";import{Q as z}from"./QImg.79656d9d.js";import{Q as U}from"./QItemLabel.f11ab903.js";import{Q as G}from"./QPage.04eafd60.js";import{_ as K}from"./AppLayout.vue_vue_type_script_setup_true_lang.1b920fc8.js";import{d as O}from"./date.11f9d7a5.js";import"./use-key-composition.8fc56b08.js";import"./uid.42677368.js";import"./QDialog.801f8352.js";import"./use-prevent-scroll.38107ebb.js";import"./format.2bc25e5f.js";import"./QCheckbox.b69ee365.js";import"./use-fullscreen.39aad1ff.js";import"./selection.f820d120.js";import"./touch.70a9dd44.js";const R=o("div",null,[o("span",null," Here you can see all the jobs that are currently available. ")],-1),W={key:0,class:"leading-10"},X=["innerHTML"],Z={class:"text-ellipsis overflow-hidden max-w-md"},w=["innerHTML"],ee={class:"text-ellipsis overflow-hidden max-w-md"},le=["innerHTML"],te={key:0},ae={class:"flex items-center"},oe=o("label",{for:"",class:"text-subtitle2"}," Skills: ",-1),ie={class:"flex items-center"},se=o("label",{for:"",class:"text-subtitle2"}," Job Type: ",-1),De=M({__name:"Index",props:{jobs:null,employers:null},setup(b){const{jobs:j,employers:re}=b,_=Q(route().params.search),h=Q(route().params.employer_id),S=Q([{name:"thumb",label:"Thumb",field:"thumb",sortable:!0,align:"left",format:a=>a?`<img src="${a}" width="50" />`:"Not Specified"},{name:"title",label:"Title",field:"title",sortable:!0,align:"left"},{label:"Employer",field:a=>{var i,e;return(e=(i=a==null?void 0:a.employer)==null?void 0:i.name)!=null?e:"Not Specified"},sortable:!0,align:"left"},{name:"created_at",label:"Date Created",field:"created_at",sortable:!0,align:"left",format:a=>a?`$${a}`:"Not Specified"},{name:"date_expires",label:"Posting Ends",field:"date_expires",sortable:!0,align:"left"},{name:"skills",label:"Skills",field:"skills",sortable:!0,align:"left"},{name:"applicant",label:"Applicants",field:"applicant",sortable:!0,align:"left"},{name:"actions",label:"Actions",field:"actions",sortable:!0,align:"left"}]);return V(()=>{j.forEach(a=>{a.description=a.description.replace(/(<([^>]+)>)/gi,"")})}),(a,i)=>(s(),m(K,{title:"Jobs"},{default:l(()=>[t(G,{padding:""},{default:l(()=>[t(q,{onSubmit:i[3]||(i[3]=e=>a.$inertia.get("/admin/jobs",{search:_.value,employer_id:h.value}))},{default:l(()=>[t(Y,{flat:"",bordered:"",class:"mb-5"},{default:l(()=>[t(I,{class:"q-pa-md"},{default:l(()=>[t(T,null,{default:l(()=>[o("div",null,[t($,null,{default:l(()=>[r("Job List")]),_:1}),R]),t(L),t(y,{onClick:i[0]||(i[0]=e=>a.$inertia.get("/admin/jobs/create")),unelevated:"",icon:"mdi-plus",label:"Post Job",color:"green"})]),_:1})]),_:1}),t(A),t(P,{class:"flex gap-3"},{default:l(()=>[t(B,{clearable:"",modelValue:_.value,"onUpdate:modelValue":i[1]||(i[1]=e=>_.value=e),outlined:"",dense:"",placeholder:"Search"},null,8,["modelValue"]),t(J,{options:b.employers,"emit-value":"","map-options":"","option-label":"name","option-value":"id",clearable:"",modelValue:h.value,"onUpdate:modelValue":i[2]||(i[2]=e=>h.value=e),dense:"",outlined:"",placeholder:"Employer"},null,8,["options","modelValue"]),t(y,{unelevated:"",icon:"mdi-magnify",label:"Search",type:"submit",color:"green"})]),_:1})]),_:1})]),_:1}),t(F,{separator:"cell",flat:"",bordered:"",rows:b.jobs,columns:S.value,"row-key":"id","rows-per-page-options":[20,50,80,100]},{"body-cell-job_type":l(({row:e})=>[t(n,null,{default:l(()=>[e.job_type?(s(),m(k,{key:0,color:"green","text-color":"white"},{default:l(()=>[r(u(e.job_type.name),1)]),_:2},1024)):p("",!0)]),_:2},1024)]),"body-cell-created_at":l(({row:e})=>[t(n,null,{default:l(()=>[e.date_posted?(s(),g("div",W,u(v(O).formatDate(e.created_at,"DD/MM/YYYY")),1)):p("",!0)]),_:2},1024)]),"body-cell-skills":l(({row:e})=>[t(n)]),"body-cell-title":l(({row:e})=>[t(n,null,{default:l(()=>[t(v(H),{href:`/admin/jobs/${e.id}`},{default:l(()=>[o("div",{class:"text-bold text-h6",innerHTML:e.title},null,8,X),o("div",Z,[o("span",{innerHTML:e.description},null,8,w)]),o("div",ee,[o("span",{innerHTML:e.location},null,8,le)]),e.skills?(s(),g("span",te,[o("div",ae,[oe,(s(!0),g(N,null,D(e.skills,d=>(s(),m(k,{key:d.id,color:"green","text-color":"white"},{default:l(()=>[r(u(d),1)]),_:2},1024))),128))])])):p("",!0),o("div",ie,[se,e.job_type?(s(),m(k,{key:0,color:"green","text-color":"white"},{default:l(()=>[r(u(e.job_type.name),1)]),_:2},1024)):p("",!0)])]),_:2},1032,["href"])]),_:2},1024)]),"body-cell-thumb":l(({row:e})=>[t(n,{"auto-width":""},{default:l(()=>[e!=null&&e.media[0]?(s(),m(x,{key:0,square:"",size:"120px"},{default:l(()=>{var d;return[t(z,{src:(d=e==null?void 0:e.media[0])==null?void 0:d.original_url,alt:"alt"},null,8,["src"])]}),_:2},1024)):(s(),m(x,{key:1,square:"",size:"120px"},{default:l(()=>[t(E,{name:"mdi-image-off"})]),_:1}))]),_:2},1024)]),"body-cell-applicant":l(({row:e})=>[t(n,{"auto-width":""},{default:l(()=>[r(u(e.applicant.length),1)]),_:2},1024)]),"body-cell-actions":l(({row:e})=>[t(n,null,{default:l(()=>[t(y,{flat:"",icon:"mdi-dots-vertical",color:"green"},{default:l(()=>[t(U,null,{default:l(()=>[t(C,null,{default:l(()=>[t(c,{clickable:"",target:"_blank",href:`/job/${e.uuid}`},{default:l(()=>[t(f,null,{default:l(()=>[r("Preview Job Post")]),_:1})]),_:2},1032,["href"]),t(c,{clickable:"",href:`/admin/jobs/${e.id}`},{default:l(()=>[t(f,null,{default:l(()=>[r("Show Applicants")]),_:1})]),_:2},1032,["href"]),t(c,{clickable:"",href:`/admin/jobs/${e.id}/edit`},{default:l(()=>[t(f,null,{default:l(()=>[r("Edit")]),_:1})]),_:2},1032,["href"]),t(c,{clickable:"",onClick:d=>a.$inertia.delete(`/admin/jobs/${e.id}`)},{default:l(()=>[t(f,null,{default:l(()=>[r("Delete")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1},8,["rows","columns"])]),_:1})]),_:1}))}});export{De as default};
