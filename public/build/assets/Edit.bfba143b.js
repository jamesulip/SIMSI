import{a8 as v,bs as Q,o as g,c as w,w as t,b as o,a as r,aE as U,aF as d,O as m,aG as n,g as l,bp as c,aH as S,x,ag as B,aI as C}from"./app.6092bd96.js";import{Q as i}from"./QSelect.74667df1.js";import{Q as _}from"./QSpace.4c61ea5b.js";import{Q as P}from"./QPage.6a5db909.js";import{_ as E}from"./AppLayout.vue_vue_type_script_setup_true_lang.b2b2f163.js";import"./QLayout.b2d656b8.js";import"./format.740a5e75.js";import"./QImg.b0a66135.js";import"./touch.70a9dd44.js";const I=["onSubmit"],N=r("h3",{class:"text-h5"},"User Details",-1),M=v({__name:"Edit",props:{user:null,roles:null,permissions:null,branches:null},setup(u){const p=u,{user:e,permissions:b,roles:f}=Q(p);function V(){C.Inertia.put(route("user-management.update",e.value.id),e.value)}return(k,a)=>(g(),w(E,{title:"Jobs"},{default:t(()=>[o(P,{padding:""},{default:t(()=>[r("form",{onSubmit:B(V,["prevent"]),class:"max-w-2xl"},[o(U,{flat:"",bordered:""},{default:t(()=>[o(d,null,{default:t(()=>[N]),_:1}),o(m),o(d,{class:"q-gutter-md"},{default:t(()=>[o(n,{outlined:"",dense:"",modelValue:l(e).name,"onUpdate:modelValue":a[0]||(a[0]=s=>l(e).name=s),label:"Name"},null,8,["modelValue"]),o(n,{outlined:"",dense:"",modelValue:l(e).email,"onUpdate:modelValue":a[1]||(a[1]=s=>l(e).email=s),label:"Email"},null,8,["modelValue"]),o(n,{outlined:"",dense:"",modelValue:l(e).password,"onUpdate:modelValue":a[2]||(a[2]=s=>l(e).password=s),label:"Password"},null,8,["modelValue"]),o(n,{outlined:"",dense:"",modelValue:l(e).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=s=>l(e).password_confirmation=s),label:"Confirm Password"},null,8,["modelValue"]),o(c,{label:"Active",color:"green","true-value":1,"false-value":0,"model-value":l(e).active,"onUpdate:model-value":a[4]||(a[4]=s=>l(e).active=s)},null,8,["model-value"]),o(i,{outlined:"",dense:"",modelValue:l(e).roles,"onUpdate:modelValue":a[5]||(a[5]=s=>l(e).roles=s),label:"Roles",multiple:"",options:l(f),"option-value":"id","option-label":"name","use-input":"","use-chips":""},null,8,["modelValue","options"]),o(i,{outlined:"",dense:"",modelValue:l(e).permissions,"onUpdate:modelValue":a[6]||(a[6]=s=>l(e).permissions=s),label:"Permissions",multiple:"",options:l(b),"option-value":"id","option-label":"name","use-input":"","use-chips":""},null,8,["modelValue","options"]),o(i,{label:"Branch","map-options":"","emit-value":"",hint:`Select Branch for User to be assigned to
            `,modelValue:l(e).branch_id,"onUpdate:modelValue":a[7]||(a[7]=s=>l(e).branch_id=s),dense:"",outlined:"",options:u.branches,"option-label":"name","option-value":"id"},null,8,["modelValue","options"])]),_:1}),o(m),o(S,null,{default:t(()=>[o(_),o(x,{color:"primary",label:"Save",type:"submit"})]),_:1})]),_:1})],40,I)]),_:1})]),_:1}))}});export{M as default};
