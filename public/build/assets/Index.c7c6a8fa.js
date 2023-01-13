import{Z as x,aS as Q,r as c,o as f,c as b,w as e,b as t,g as w,f as T,v as p,aT as k,Q as s,a as i,t as r,e as B,_ as C,aq as I}from"./app.1d2fb737.js";import{a as N,b as q,_ as V}from"./AppLayout.vue_vue_type_script_setup_true_lang.96866059.js";import{Q as P}from"./QInput.4ad0c4e5.js";import{Q as R,a as l}from"./QTable.e19ef8f1.js";import{Q as S}from"./QImg.1adf033b.js";import{Q as A}from"./QPage.b0006709.js";import"./QLayout.0a5cf9d3.js";import"./focusout.11f43612.js";import"./focus-manager.752c11ce.js";import"./uid.42677368.js";import"./format.e20f823a.js";import"./QSeparator.216bbfbc.js";import"./use-prevent-scroll.3691fc3f.js";import"./touch.70a9dd44.js";import"./use-key-composition.6a2febca.js";import"./QSelect.d42cf27f.js";import"./QDialog.7f467ff1.js";import"./QCheckbox.6eaea6a6.js";import"./use-fullscreen.9740dbe6.js";const E={class:"text-xs text-caption"},K={class:"text-xs text-caption"},$={class:"text-base font-semibold"},D={class:"text-xs text-caption"},ne=x({__name:"Index",props:{employers:null},setup(_){const h=_,{employers:m}=Q(h),o=c({page:1,rowsPerPage:m.value.per_page,sortBy:"id",descending:!0,rowsNumber:m.value.total});function g({pagination:d}){I.Inertia.get("/admin/employers",d)}const y=c([{name:"thumb",field:"thumb",align:"left"},{name:"name",field:"name",align:"left",label:"Employer"},{label:"Contact",name:"phone",field:"phone",align:"left"},{label:"Website",name:"website",field:"website",align:"left"},{label:"Action",name:"action",field:"action",align:"left"}]);return(d,n)=>(f(),b(V,null,{default:e(()=>[t(A,{padding:""},{default:e(()=>[t(R,{ref:"tableRef",title:"Treats",rows:w(m).data,"row-key":"id",pagination:o.value,"onUpdate:pagination":n[1]||(n[1]=a=>o.value=a),"binary-state-sort":"",onRequest:g,filter:o.value.search,columns:y.value},{top:e(()=>[t(N,null,{default:e(()=>{var a,u;return[t(q,null,{default:e(()=>[T("Employers "),t(p,{class:"q-ml-md",color:"primary",label:"Create",href:"/admin/employers/create"})]),_:1}),t(P,{"model-value":((u=(a=d.route())==null?void 0:a.params)==null?void 0:u.search)||"",onKeyup:n[0]||(n[0]=k(v=>o.value.search=v.target.value,["enter","native"])),debounce:"1000",label:"Search",outlined:"",dense:"",class:"q-ml-md"},{prepend:e(()=>[t(s,{name:"search"})]),_:1},8,["model-value"])]}),_:1})]),"body-cell-website":e(({row:a})=>[t(l,null,{default:e(()=>[t(p,{flat:"",color:"blue",href:a.website,target:"_blank"},{default:e(()=>[t(s,{name:"mdi-web"})]),_:2},1032,["href"])]),_:2},1024)]),"body-cell-action":e(({row:a})=>[t(l,null,{default:e(()=>[t(p,{flat:"",color:"blue",href:`/admin/employers/${a.id}`},{default:e(()=>[t(s,{name:"mdi-pencil"})]),_:2},1032,["href"])]),_:2},1024)]),"body-cell-phone":e(({row:a})=>[t(l,null,{default:e(()=>[i("div",E,r(a.phone),1),i("div",K,r(a.email),1)]),_:2},1024)]),"body-cell-name":e(({row:a})=>[t(l,null,{default:e(()=>[i("h6",$,r(a.name),1),i("div",D,r(a.country),1)]),_:2},1024)]),"body-cell-thumb":e(({row:a})=>[t(l,{"auto-width":""},{default:e(()=>[a.thub?(f(),b(S,{key:0,src:a.thumb,ratio:1,style:{width:"50px",height:"50px"}},null,8,["src"])):B("",!0),t(C,null,{default:e(()=>[t(s,{name:"mdi-domain"})]),_:1})]),_:2},1024)]),_:1},8,["rows","pagination","filter","columns"])]),_:1})]),_:1}))}});export{ne as default};
