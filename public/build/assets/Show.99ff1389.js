import{Q as V}from"./QSpace.24353223.js";import{Q as b,b as m,a as x}from"./QCard.e9262469.js";import{Q as N}from"./QInput.e321946b.js";import{Q as $}from"./QSelect.a655c771.js";import{Q as j}from"./QSeparator.0c506dd5.js";import{a2 as q,r as g,o as d,c as h,w as e,b as a,a as r,t as Q,g as B,aN as I,f as v,v as p,a8 as L,a3 as P,d as E,h as F,F as T,aq as z}from"./app.fb59cb62.js";import{Q as A,a as S}from"./QTable.42c1a604.js";import{Q as M,f as U,a as D,b as J}from"./QList.a7dae73c.js";import{Q as R}from"./QPage.d77acf0d.js";import{_ as G}from"./AppLayout.vue_vue_type_script_setup_true_lang.a19b3761.js";import{u as H}from"./use-quasar.96cf8514.js";import"./focus-manager.7caf06f8.js";import"./use-key-composition.93d4682b.js";import"./uid.42677368.js";import"./QChip.c36c5345.js";import"./QItemLabel.f4df7650.js";import"./QDialog.5ec5b5ae.js";import"./use-prevent-scroll.87cd84cf.js";import"./focusout.99ad7e29.js";import"./format.2bc25e5f.js";import"./QCheckbox.fe2c059b.js";import"./use-fullscreen.130cdb09.js";import"./QImg.86b444d3.js";import"./touch.70a9dd44.js";const K={class:"text-h6"},O=["onSubmit"],W=r("div",{class:"text-h6"},"Search",-1),X=["href"],Y=["src"],Ca=q({__name:"Show",props:{job:null,applicant_status:null,applicants:null},setup(i){var f,_;const{job:k,applicant_status:Z}=i;H();const y=g([{name:"first_name",label:"Name",field:"first_name",sortable:!0,align:"left"},{name:"last_name",label:"Last Name",field:"last_name",sortable:!0,align:"left"},{name:"email",label:"Email",field:"email",sortable:!0,align:"left"},{name:"phone",label:"Phone",field:"phone",sortable:!0,align:"left"},{name:"resume",label:"Resume",field:"resume",sortable:!0,align:"left"},{name:"status",label:"Status",field:"status",sortable:!0,align:"left"}]),s=g({search:(f=route().params.search)!=null?f:"",applicant_status_id:(_=route().params.applicant_status_id)!=null?_:null});function C(o){return o==="application/pdf"?"/images/pdf.png":o==="application/msword"?"/images/doc.png":"/images/google-docs.png"}function c(){z.Inertia.get(`/admin/jobs/${k.id}`,s.value)}return(o,n)=>(d(),h(G,{title:"Jobs"},{default:e(()=>[a(R,{padding:"",class:"q-gutter-md"},{default:e(()=>[a(b,{flat:"",bordered:""},{default:e(()=>[a(m,{class:"q-pa-md"},{default:e(()=>[r("div",K,Q(i.job.title),1),a(V),a(B(I),{href:`/admin/jobs/${i.job.id}/edit`,unelevated:"",dense:"","text-color":"black",class:"border pa-2"},{default:e(()=>[v("Edit")]),_:1},8,["href"])]),_:1})]),_:1}),r("form",{method:"get",onSubmit:L(c,["prevent"])},[a(b,{flat:"",bordered:""},{default:e(()=>[a(m,{class:"q-pa-md"},{default:e(()=>[W]),_:1}),a(x,{class:"grid grid-cols-3 gap-3 items-start flex-row"},{default:e(()=>[a(N,{modelValue:s.value.search,"onUpdate:modelValue":n[0]||(n[0]=t=>s.value.search=t),outlined:"",name:"search",dense:"",placeholder:"Search by name, email, phone"},null,8,["modelValue"]),a($,{dense:"",outlined:"",options:o.$props.applicant_status,"option-label":t=>t.name,name:"applicant_status_id",modelValue:s.value.applicant_status_id,"onUpdate:modelValue":n[1]||(n[1]=t=>s.value.applicant_status_id=t),"option-value":"id","emit-value":"","map-options":"",clearable:""},null,8,["options","option-label","modelValue"])]),_:1}),a(j),a(m,null,{default:e(()=>[a(p,{dense:"",unelevated:"",color:"negative",type:"reset",label:"Clear",onClick:n[2]||(n[2]=()=>{s.value={applicant_status_id:null,search:""},c()})}),a(p,{dense:"",unelevated:"",color:"primary",type:"submit",label:"Search"})]),_:1})]),_:1})],40,O),a(A,{rows:i.applicants,columns:y.value,pagination:{rowsPerPage:50}},{"body-cell-resume":e(({row:t})=>[a(S,null,{default:e(()=>{var l;return[r("a",{href:(l=t==null?void 0:t.resume)==null?void 0:l.original_url,target:"_blank"},[a(P,{square:"",size:"sm"},{default:e(()=>{var u;return[r("img",{src:C((u=t==null?void 0:t.resume)==null?void 0:u.mime_type)},null,8,Y)]}),_:2},1024)],8,X)]}),_:2},1024)]),"body-cell-status":e(({row:t})=>[a(S,null,{default:e(()=>[a(p,{unelevated:"",dense:"","text-color":"black",class:"border pa-2",color:t.applicant_status.color,label:t.applicant_status.name,size:"sm"},{default:e(()=>[a(M,null,{default:e(()=>[a(U,null,{default:e(()=>[(d(!0),E(T,null,F(i.applicant_status,(l,u)=>(d(),h(D,{disable:t.applicant_status.name===l.name||l.name==="New",key:u,clickable:"",onClick:w=>o.$inertia.put(`/admin/applicant/${t.id}`,{applicant_status_id:l.id})},{default:e(()=>[a(J,null,{default:e(()=>[v(Q(l.name),1)]),_:2},1024)]),_:2},1032,["disable","onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1032,["color","label"])]),_:2},1024)]),_:1},8,["rows","columns"])]),_:1})]),_:1}))}});export{Ca as default};
