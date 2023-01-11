import{Q as m}from"./QCardSection.9b50796e.js";import{Q as r}from"./QSeparator.91960911.js";import{Q as t}from"./QInput.ab7662bb.js";import{Q as n}from"./QSelect.4dc8a061.js";import{Q as f}from"./QSpace.4fab7da7.js";import{Z as v,r as V,o as Q,c as b,w as s,b as o,a as p,v as w,a4 as _,aq as x,a_ as u}from"./app.4a522239.js";import{Q as C,a as S}from"./QCardActions.ad8a9dd2.js";import{Q as U}from"./QPage.80c7eccb.js";import{_ as y}from"./AppLayout.vue_vue_type_script_setup_true_lang.033a3d93.js";import"./focus-manager.5d096218.js";import"./use-key-composition.60849670.js";import"./uid.42677368.js";import"./QLayout.b19ee09e.js";import"./focusout.ee40dee4.js";import"./format.8320855d.js";import"./QDialog.bff85a37.js";import"./use-prevent-scroll.f3d8452f.js";import"./QImg.0fe3dd47.js";import"./touch.70a9dd44.js";const c=["onSubmit"],g=p("h3",{class:"text-h5"},"User Details",-1),L=v({__name:"Create",props:{roles:null,permissions:null},setup(i){const e=V({name:"",email:"",password:"",password_confirmation:"",roles:[],permissions:[]});function d(){x.Inertia.post(route("user-management.store"),{...e.value,roles:u.map(e.value.roles,"id"),permissions:u.map(e.value.permissions,"id")})}return(B,l)=>(Q(),b(y,{title:"Jobs"},{default:s(()=>[o(U,{padding:""},{default:s(()=>[p("form",{onSubmit:_(d,["prevent"]),class:"max-w-2xl"},[o(C,null,{default:s(()=>[o(m,null,{default:s(()=>[g]),_:1}),o(r),o(m,{class:"q-gutter-md"},{default:s(()=>[o(t,{outlined:"",type:"text",dense:"",modelValue:e.value.name,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value.name=a),label:"Name"},null,8,["modelValue"]),o(t,{type:"email",outlined:"",dense:"",modelValue:e.value.email,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value.email=a),label:"Email"},null,8,["modelValue"]),o(t,{type:"password",outlined:"",dense:"",modelValue:e.value.password,"onUpdate:modelValue":l[2]||(l[2]=a=>e.value.password=a),label:"Password"},null,8,["modelValue"]),o(t,{type:"password",outlined:"",dense:"",modelValue:e.value.password_confirmation,"onUpdate:modelValue":l[3]||(l[3]=a=>e.value.password_confirmation=a),label:"Confirm Password"},null,8,["modelValue"]),o(n,{outlined:"",dense:"",modelValue:e.value.roles,"onUpdate:modelValue":l[4]||(l[4]=a=>e.value.roles=a),label:"Roles",multiple:"",options:i.roles,"option-value":"id","option-label":"name","use-input":"","use-chips":""},null,8,["modelValue","options"]),o(n,{outlined:"",dense:"",modelValue:e.value.permissions,"onUpdate:modelValue":l[5]||(l[5]=a=>e.value.permissions=a),label:"Permissions",multiple:"",options:i.permissions,"option-value":"id","option-label":"name","use-input":"","use-chips":""},null,8,["modelValue","options"])]),_:1}),o(r),o(S,null,{default:s(()=>[o(f),o(w,{color:"primary",label:"Save",type:"submit"})]),_:1})]),_:1})],40,c)]),_:1})]),_:1}))}});export{L as default};
