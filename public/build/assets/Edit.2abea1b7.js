import{a8 as f,o as V,c as b,w as i,b as l,a as r,aE as Q,aF as u,O as m,aG as n,aH as w,x,ag as S,bz as t,aI as U}from"./app.b5166522.js";import{Q as d}from"./QSelect.f0eb4703.js";import{Q as c}from"./QSpace.d35235b0.js";import{Q as g}from"./QPage.31f35db4.js";import{_ as C}from"./AppLayout.vue_vue_type_script_setup_true_lang.b45ff0c9.js";import{u as v}from"./use-quasar.e749b80d.js";import"./QLayout.edc35d24.js";import"./format.1c434d9b.js";import"./QImg.9bbcb33e.js";import"./touch.70a9dd44.js";const B=["onSubmit"],P=r("h3",{class:"text-h5"},"User Details",-1),M=f({__name:"Edit",props:{user:null,roles:null,permissions:null},setup(e){const{user:a,permissions:E,roles:I}=e;v();function p(){console.log({...a,roles:t.map(a.roles,"id"),permissions:t.map(a.permissions,"id")}),U.Inertia.put(route("user-management.update",a.id),t.cloneDeep({...a,roles:t.map(a.roles,"id"),permissions:t.map(a.permissions,"id")}))}return(N,s)=>(V(),b(C,{title:"Jobs"},{default:i(()=>[l(g,{padding:""},{default:i(()=>[r("form",{onSubmit:S(p,["prevent"]),class:"max-w-2xl"},[l(Q,null,{default:i(()=>[l(u,null,{default:i(()=>[P]),_:1}),l(m),l(u,{class:"q-gutter-md"},{default:i(()=>[l(n,{outlined:"",dense:"",modelValue:e.user.name,"onUpdate:modelValue":s[0]||(s[0]=o=>e.user.name=o),label:"Name"},null,8,["modelValue"]),l(n,{outlined:"",dense:"",modelValue:e.user.email,"onUpdate:modelValue":s[1]||(s[1]=o=>e.user.email=o),label:"Email"},null,8,["modelValue"]),l(n,{outlined:"",dense:"",modelValue:e.user.password,"onUpdate:modelValue":s[2]||(s[2]=o=>e.user.password=o),label:"Password"},null,8,["modelValue"]),l(n,{outlined:"",dense:"",modelValue:e.user.password_confirmation,"onUpdate:modelValue":s[3]||(s[3]=o=>e.user.password_confirmation=o),label:"Confirm Password"},null,8,["modelValue"]),l(d,{outlined:"",dense:"",modelValue:e.user.roles,"onUpdate:modelValue":s[4]||(s[4]=o=>e.user.roles=o),label:"Roles",multiple:"",options:e.roles,"option-value":"id","option-label":"name","use-input":"","use-chips":""},null,8,["modelValue","options"]),l(d,{outlined:"",dense:"",modelValue:e.user.permissions,"onUpdate:modelValue":s[5]||(s[5]=o=>e.user.permissions=o),label:"Permissions",multiple:"",options:e.permissions,"option-value":"id","option-label":"name","use-input":"","use-chips":""},null,8,["modelValue","options"])]),_:1}),l(m),l(w,null,{default:i(()=>[l(c),l(x,{color:"primary",label:"Save",type:"submit"})]),_:1})]),_:1})],40,B)]),_:1})]),_:1}))}});export{M as default};