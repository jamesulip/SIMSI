import{Q as n}from"./QCardSection.15802f7d.js";import{Q as r}from"./QSeparator.1743210f.js";import{Q as m}from"./QInput.3eca4b53.js";import{Q as u}from"./QSelect.b0310dd5.js";import{Q as f}from"./QSpace.af44dbf4.js";import{Z as V,o as Q,c as b,w as i,b as o,a as d,v as w,a4 as S,a_ as t,aq as U}from"./app.19d60d81.js";import{Q as c}from"./QCardActions.8c14c19c.js";import{Q as x}from"./QCard.fe768eac.js";import{Q as C}from"./QPage.4176041c.js";import{_ as g}from"./AppLayout.vue_vue_type_script_setup_true_lang.b85a9b9c.js";import{u as v}from"./use-quasar.95b1afc1.js";import"./focus-manager.9422a016.js";import"./use-key-composition.7adc0e81.js";import"./uid.42677368.js";import"./QLayout.08230ca6.js";import"./focusout.4340d555.js";import"./format.fd263206.js";import"./QDialog.5d5b5515.js";import"./use-prevent-scroll.bc8f38ad.js";import"./QImg.ecd5b216.js";import"./touch.70a9dd44.js";const B=["onSubmit"],P=d("h3",{class:"text-h5"},"User Details",-1),Y=V({__name:"Edit",props:{user:null,roles:null,permissions:null},setup(e){const{user:a,permissions:N,roles:k}=e;v();function p(){console.log({...a,roles:t.map(a.roles,"id"),permissions:t.map(a.permissions,"id")}),U.Inertia.put(route("user-management.update",a.id),t.cloneDeep({...a,roles:t.map(a.roles,"id"),permissions:t.map(a.permissions,"id")}))}return(q,l)=>(Q(),b(g,{title:"Jobs"},{default:i(()=>[o(C,{padding:""},{default:i(()=>[d("form",{onSubmit:S(p,["prevent"]),class:"max-w-2xl"},[o(x,null,{default:i(()=>[o(n,null,{default:i(()=>[P]),_:1}),o(r),o(n,{class:"q-gutter-md"},{default:i(()=>[o(m,{outlined:"",dense:"",modelValue:e.user.name,"onUpdate:modelValue":l[0]||(l[0]=s=>e.user.name=s),label:"Name"},null,8,["modelValue"]),o(m,{outlined:"",dense:"",modelValue:e.user.email,"onUpdate:modelValue":l[1]||(l[1]=s=>e.user.email=s),label:"Email"},null,8,["modelValue"]),o(m,{outlined:"",dense:"",modelValue:e.user.password,"onUpdate:modelValue":l[2]||(l[2]=s=>e.user.password=s),label:"Password"},null,8,["modelValue"]),o(m,{outlined:"",dense:"",modelValue:e.user.password_confirmation,"onUpdate:modelValue":l[3]||(l[3]=s=>e.user.password_confirmation=s),label:"Confirm Password"},null,8,["modelValue"]),o(u,{outlined:"",dense:"",modelValue:e.user.roles,"onUpdate:modelValue":l[4]||(l[4]=s=>e.user.roles=s),label:"Roles",multiple:"",options:e.roles,"option-value":"id","option-label":"name","use-input":"","use-chips":""},null,8,["modelValue","options"]),o(u,{outlined:"",dense:"",modelValue:e.user.permissions,"onUpdate:modelValue":l[5]||(l[5]=s=>e.user.permissions=s),label:"Permissions",multiple:"",options:e.permissions,"option-value":"id","option-label":"name","use-input":"","use-chips":""},null,8,["modelValue","options"])]),_:1}),o(r),o(c,null,{default:i(()=>[o(f),o(w,{color:"primary",label:"Save",type:"submit"})]),_:1})]),_:1})],40,B)]),_:1})]),_:1}))}});export{Y as default};
