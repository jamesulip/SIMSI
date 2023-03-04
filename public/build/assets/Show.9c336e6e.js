import{a8 as x,bd as C,r as b,o as u,c as f,w as n,b as l,ag as S,aE as U,aF as g,x as r,O as v,aG as d,g as a,a as p,d as _,h,F as k,Q as $,aH as A,aI as q}from"./app.5a0fdf99.js";import{Q as V}from"./QForm.0c9a5b68.js";import{Q as B}from"./QPage.a1c34efb.js";import{_ as P}from"./AppLayout.vue_vue_type_script_setup_true_lang.9edf8939.js";import{u as E}from"./use-quasar.b5b6eb5c.js";import"./QImg.2f6bac1b.js";import"./QLayout.f078c89a.js";import"./format.f0cda7bf.js";import"./touch.70a9dd44.js";const F=p("div",{class:"text-h6"},"Branch Details",-1),I={class:"p-2 bg-gray-100 grid grid-cols-2 gap-3"},N={class:"p-2 bg-gray-100 grid grid-cols-2 gap-3"},G={color:"primary",icon:"link",flat:"",href:"https://www.google.com/maps",target:"_blank"},W=x({__name:"Show",props:{branch:null},setup(w){const y=w,M=E(),e=C(y,"branch"),m=b(null),c=b(!1);function Q(){!(m!=null&&m.value.validate())||q.Inertia.put(`/admin/branches/${e.value.id}`,e.value,{onSuccess:()=>{M.notify({message:"Branch updated successfully",color:"green-4",textColor:"white",icon:"check_circle",position:"bottom"}),c.value=!1},onStart:()=>{c.value=!0}})}return(H,o)=>(u(),f(P,{title:"Jobs"},{default:n(()=>[l(B,{padding:"",class:"flex w-full"},{default:n(()=>[l(V,{ref_key:"form",ref:m,class:"mx-auto max-w-7xl w-full",onSubmit:o[7]||(o[7]=S(t=>Q(),["prevent"]))},{default:n(()=>[l(U,{flat:"",bordered:"",class:""},{default:n(()=>[l(g,{class:"flex"},{default:n(()=>[l(r,{class:"q-mr-sm",color:"primary",unelevated:"",icon:"arrow_back",size:"sm",flat:"",href:"/admin/branches"}),F]),_:1}),l(v),l(g,null,{default:n(()=>[l(V,{class:"q-gutter-md"},{default:n(()=>[l(d,{dense:"",outlined:"",modelValue:a(e).name,"onUpdate:modelValue":o[0]||(o[0]=t=>a(e).name=t),label:"Name"},null,8,["modelValue"]),l(d,{dense:"",type:"textarea",outlined:"",modelValue:a(e).address,"onUpdate:modelValue":o[1]||(o[1]=t=>a(e).address=t),label:"Address"},null,8,["modelValue"]),l(r,{class:"q-mr-sm",color:"primary",label:"Add Phone",icon:"add",flat:"",onClick:o[2]||(o[2]=t=>a(e).phone.push(""))}),p("div",I,[(u(!0),_(k,null,h(a(e).phone,(t,s)=>(u(),f(d,{dense:"",outlined:"",key:`phone-${s}`,"model-value":a(e).phone[s],"onUpdate:model-value":i=>a(e).phone[s]=i,label:"Phone"},{append:n(()=>[l(r,{class:"q-mr-sm",color:"red",icon:"delete",flat:"",onClick:i=>a(e).phone.splice(s,1)},null,8,["onClick"])]),_:2},1032,["model-value","onUpdate:model-value"]))),128))]),l(r,{class:"q-mr-sm",color:"primary",icon:"add",label:"Add Email",flat:"",onClick:o[3]||(o[3]=t=>a(e).email.push(null))}),p("div",N,[(u(!0),_(k,null,h(a(e).email,(t,s)=>(u(),f(d,{dense:"",outlined:"","model-value":a(e).email[s],"onUpdate:model-value":i=>a(e).email[s]=i,label:"Email"},{append:n(()=>[l(r,{class:"q-mr-sm",color:"red",icon:"delete",flat:"",onClick:i=>a(e).email.splice(s,1)},null,8,["onClick"])]),_:2},1032,["model-value","onUpdate:model-value"]))),256))]),l(d,{dense:"",outlined:"",modelValue:a(e).website,"onUpdate:modelValue":o[4]||(o[4]=t=>a(e).website=t),label:"Social Media link"},null,8,["modelValue"]),l(d,{dense:"",outlined:"",modelValue:a(e).office_hours,"onUpdate:modelValue":o[5]||(o[5]=t=>a(e).office_hours=t),label:"Office Hours",placeholder:"Mon-Sat: 9AM to 7PM Sun: 9AM to 6PM"},null,8,["modelValue"]),l(d,{dense:"",outlined:"",modelValue:a(e).google_map_embbeded_url,"onUpdate:modelValue":o[6]||(o[6]=t=>a(e).google_map_embbeded_url=t),label:"Google Embed Map",placeholder:"Mon-Sat: 9AM to 7PM Sun: 9AM to 6PM"},{append:n(()=>[p("a",G,[l($,{name:"link"})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(v),l(A,{align:"right"},{default:n(()=>[l(r,{type:"submit",loading:c.value,color:"primary",label:"Update"},null,8,["loading"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1}))}});export{W as default};
