import{a8 as g,r as d,o as w,c as j,w as a,b as l,a as e,aE as u,aF as c,O as p,t as s}from"./app.b5166522.js";import{Q as f,a as i}from"./QTable.e00b5b50.js";import{b as h}from"./QSelect.f0eb4703.js";import{Q as y}from"./QPage.31f35db4.js";import{_ as T}from"./AppLayout.vue_vue_type_script_setup_true_lang.b45ff0c9.js";import"./QLayout.edc35d24.js";import"./use-fullscreen.9bc7cd64.js";import"./format.1c434d9b.js";import"./QImg.9bbcb33e.js";import"./touch.70a9dd44.js";const H={class:"grid grid-cols-6 gap-3 w-full"},L=e("div",{class:"text-"},"Total Jobs",-1),P={class:"text-center"},Q={class:"text-h4 text-green"},$=e("div",{class:""},"Total Posted Job",-1),A={class:"text-center"},M={class:"text-h4 text-green"},C=e("div",{class:""},"Total Active Job",-1),J={class:"text-center"},D={class:"text-h4 text-red"},N=e("div",{class:"text-"},"Close Job",-1),S=e("div",{class:"text-"}," Dashboard",-1),k={class:"text-center"},B={class:"text-h4 text-green"},z=e("div",{class:""},"Applicants",-1),E={class:"text-center"},V={class:"text-h4 text-blue"},F=e("div",{class:""},"New",-1),I={class:"text-center"},O={class:"text-h4 text-yellow-500"},R=e("div",{class:""},"In Progress",-1),q={class:"max-w-xs text-ellipsis overflow-hidden"},G=["innerHTML"],K={class:"max-w-xs text-ellipsis overflow-hidden"},U=["href","innerHTML"],W=["href"],X=["href"],Y=["href"],Z={class:"max-w-xs text-ellipsis overflow-hidden"},tt=["href","innerHTML"],_t=g({__name:"Dashboard",props:{applicants:null,jobs:null},setup(o){const b=d([{label:"Job Title",field:"title",name:"title",align:"left",sortable:!0},{label:"Location",field:"location",name:"location",align:"left",sortable:!0},{label:"New",field:"new",name:"new",align:"center",sortable:!0},{label:"Approved",field:"approved",name:"approved",align:"center",sortable:!0},{label:"Rejected",field:"rejected",name:"rejected",align:"center",sortable:!0},{label:"Status",field:"status",name:"status",align:"left",sortable:!0}]),m=d([{label:"Name",field:"first_name",name:"first_name",align:"left",sortable:!0},{label:"Email",field:"email",name:"email",align:"left",sortable:!0},{label:"Job Title",field:"job_title",name:"job_title",align:"left",sortable:!0},{label:"Status",field:"status",name:"status",align:"left",sortable:!0},{label:"Applied Date",field:"created_at",name:"created_at",align:"left",sortable:!0}]),x=d({rowsPerPage:10}),v=d({rowsPerPage:10});function n(r,_){return r.filter(t=>t.applicant_status_id==_).length}return(r,_)=>(w(),j(T,{title:"Dashboard"},{default:a(()=>[l(y,{padding:""},{default:a(()=>[e("div",H,[l(u,{flat:"",bordered:"",class:"col-span-3"},{default:a(()=>[l(c,{class:"p-3"},{default:a(()=>[L]),_:1}),l(p),l(c,{class:"flex w-full justify-around"},{default:a(()=>[e("div",P,[e("div",Q,s(o.jobs.length),1),$]),e("div",A,[e("div",M,s(o.jobs.filter(t=>t.active).length),1),C]),e("div",J,[e("div",D,s(o.jobs.filter(t=>!t.active).length),1),N])]),_:1})]),_:1}),l(u,{flat:"",bordered:"",class:"col-span-3"},{default:a(()=>[l(c,{class:"p-3"},{default:a(()=>[S]),_:1}),l(p),l(c,{class:"flex w-full justify-around"},{default:a(()=>[e("div",k,[e("div",B,s(o.applicants.length),1),z]),e("div",E,[e("div",V,s(n(o.applicants,1)),1),F]),e("div",I,[e("div",O,s(n(o.applicants,3)),1),R])]),_:1})]),_:1}),l(f,{pagination:x.value,separator:"cell",columns:b.value,flat:"",bordered:"",title:"Applicants",rows:o.jobs,"row-key":"id",class:"col-span-4"},{"body-cell-location":a(({row:t})=>[l(i,{"auto-width":""},{default:a(()=>[e("div",q,[e("span",{innerHTML:t.location},null,8,G)])]),_:2},1024)]),"body-cell-title":a(({row:t})=>[l(i,{"auto-width":""},{default:a(()=>[e("div",K,[e("a",{class:"text-blue",href:`/admin/jobs/${t.id}`,innerHTML:t.title},null,8,U)])]),_:2},1024)]),"body-cell-rejected":a(({row:t})=>[l(i,{"auto-width":""},{default:a(()=>[e("a",{href:`/admin/jobs/${t.id}?applicant_status_id=1`,class:"text-red"},s(n(t.applicant,1)),9,W)]),_:2},1024)]),"body-cell-new":a(({row:t})=>[l(i,{"auto-width":""},{default:a(()=>[e("a",{href:`/admin/jobs/${t.id}?applicant_status_id=5`,class:"text-blue"},s(n(t.applicant,5)),9,X)]),_:2},1024)]),"body-cell-approved":a(({row:t})=>[l(i,{"auto-width":""},{default:a(()=>[e("a",{href:`/admin/jobs/${t.id}?applicant_status_id=2`,class:"text-red"},s(n(t.applicant,2)),9,Y)]),_:2},1024)]),"body-cell-status":a(({row:t})=>[l(i,{"auto-width":""},{default:a(()=>[l(h,{color:t.active?"green":"red","text-color":"white",size:"xs",outline:!t.active},null,8,["color","outline"])]),_:2},1024)]),_:1},8,["pagination","columns","rows"]),l(f,{pagination:v.value,columns:m.value,flat:"",bordered:"",title:"Applicants",rows:o.applicants,"row-key":"id",class:"col-span-2"},{"body-cell-status":a(({row:t})=>[l(i,null,{default:a(()=>[l(h,{color:t.applicant_status.color,"text-color":"white",size:"xs",outline:!t.applicant_status.color,innerHTML:t.applicant_status.name},null,8,["color","outline","innerHTML"])]),_:2},1024)]),"body-cell-first_name":a(({row:t})=>[l(i,null,{default:a(()=>[e("div",Z,[e("a",{class:"text-blue",href:`/admin/jobs/${t.jobs_id}/applicant/${t.id}`,innerHTML:`${t.last_name}. ${t.first_name}`},null,8,tt)])]),_:2},1024)]),"body-cell-email":a(({row:t})=>[l(i,null,{default:a(()=>[e("ul",null,[e("li",null,s(t.email),1),e("li",null,s(t.phone),1)])]),_:2},1024)]),_:1},8,["pagination","columns","rows"])])]),_:1})]),_:1}))}});export{_t as default};
