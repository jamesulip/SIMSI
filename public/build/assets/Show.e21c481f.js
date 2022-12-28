import{Q as g}from"./QSpace.303325dd.js";import{Q as p}from"./QCardActions.6162247f.js";import{Q as o,a as r}from"./QCard.a0363a13.js";import{Q as v}from"./QInput.ea213ef1.js";import{g as x,i as k,_ as j,e as N,Q as S}from"./AppLayout.vue_vue_type_script_setup_true_lang.4856c863.js";import{a5 as C,r as d,o as m,c as f,w as a,b as e,a as l,t as i,g as w,aL as V,f as _,I as B,d as L,h as $,F as q}from"./app.22fd6682.js";import{Q as y,a as A}from"./QTable.37e7b4d1.js";import{Q as I}from"./QPage.5318f904.js";import{u as P}from"./use-quasar.6b74d885.js";import"./use-dark.cff53b37.js";import"./use-key-composition.982f6835.js";import"./uid.2738a642.js";import"./QToolbar.a4b07361.js";import"./use-checkbox.0631e358.js";import"./QSeparator.35dfb0dc.js";import"./QImg.ea53ab99.js";import"./touch.ac26634e.js";import"./use-prevent-scroll.f499fa07.js";import"./format.2bc25e5f.js";import"./QSelect.acd8b018.js";import"./QChip.45c2db84.js";import"./QDialog.4052b0b0.js";import"./QCheckbox.454d4bef.js";import"./use-fullscreen.b0ffc314.js";const E={class:"text-h6"},T={class:"flex gap-3"},F=l("div",{class:"text-h6"},"Applicants",-1),z={class:"text-h3"},D=l("div",{class:"text-h6"},"Approved",-1),J={class:"text-h3"},M=l("div",{class:"text-h6"},"New",-1),U={class:"text-h3"},G=l("div",{class:"text-h6"},"Search",-1),ha=C({__name:"Show",props:{job:null,applicant_status:null},setup(s){P();const b=d([{name:"first_name",label:"Name",field:"first_name",sortable:!0,align:"left"},{name:"last_name",label:"Last Name",field:"last_name",sortable:!0,align:"left"},{name:"email",label:"Email",field:"email",sortable:!0,align:"left"},{name:"phone",label:"Phone",field:"phone",sortable:!0,align:"left"},{name:"status",label:"Status",field:"status",sortable:!0,align:"left"}]);d(1),d(!1);const u=d("");return(h,c)=>(m(),f(j,{title:"Jobs"},{default:a(()=>[e(I,{padding:"",class:"q-gutter-md"},{default:a(()=>[e(o,{flat:"",bordered:""},{default:a(()=>[e(p,{class:"q-pa-md"},{default:a(()=>[l("div",E,i(s.job.title),1),e(g),e(w(V),{href:`/admin/jobs/${s.job.id}/edit`,unelevated:"",dense:"","text-color":"black",class:"border pa-2"},{default:a(()=>[_("Edit")]),_:1},8,["href"])]),_:1})]),_:1}),l("div",T,[e(o,{flat:"",bordered:""},{default:a(()=>[e(r,null,{default:a(()=>[F,l("div",z,i(s.job.applicant.length),1)]),_:1})]),_:1}),e(o,{flat:"",bordered:""},{default:a(()=>[e(r,null,{default:a(()=>[D,l("div",J,i(s.job.applicant.filter(t=>t.applicant_status.name==="Approved").length),1)]),_:1})]),_:1}),e(o,{flat:"",bordered:""},{default:a(()=>[e(r,null,{default:a(()=>[M,l("div",U,i(s.job.applicant.filter(t=>t.applicant_status.name==="New").length),1)]),_:1})]),_:1})]),e(o,{flat:"",bordered:""},{default:a(()=>[e(p,{class:"q-pa-md"},{default:a(()=>[G]),_:1}),e(r,null,{default:a(()=>[e(v,{modelValue:u.value,"onUpdate:modelValue":c[0]||(c[0]=t=>u.value=t),outlined:"",dense:"",placeholder:"Search by name, email, phone",class:"q-mb-md"},null,8,["modelValue"])]),_:1})]),_:1}),e(y,{filter:u.value,rows:s.job.applicant,columns:b.value,pagination:{rowsPerPage:50}},{"body-cell-status":a(({row:t})=>[e(A,null,{default:a(()=>[e(B,{unelevated:"",dense:"","text-color":"black",class:"border pa-2",color:t.applicant_status.color,label:t.applicant_status.name,size:"sm"},{default:a(()=>[e(x,null,{default:a(()=>[e(k,null,{default:a(()=>[(m(!0),L(q,null,$(s.applicant_status,(n,Q)=>(m(),f(N,{disable:t.applicant_status.name===n.name||n.name==="New",key:Q,clickable:"",onClick:H=>h.$inertia.put(`/admin/applicant/${t.id}`,{applicant_status_id:n.id})},{default:a(()=>[e(S,null,{default:a(()=>[_(i(n.name),1)]),_:2},1024)]),_:2},1032,["disable","onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1032,["color","label"])]),_:2},1024)]),_:1},8,["filter","rows","columns"])]),_:1})]),_:1}))}});export{ha as default};
