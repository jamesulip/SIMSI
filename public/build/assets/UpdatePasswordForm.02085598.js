import{Q as n}from"./QCardSection.15802f7d.js";import{Q as u}from"./QSeparator.1743210f.js";import{Q as d}from"./QInput.3eca4b53.js";import{Q as c}from"./QSpace.af44dbf4.js";import{r as p,u as f,o as _,c as Q,w as t,b as s,a as l,g as o,v as g,f as V}from"./app.19d60d81.js";import{Q as v}from"./QCardActions.8c14c19c.js";import{Q as B}from"./QCard.fe768eac.js";import{Q as P}from"./QForm.9417f4b2.js";import"./focus-manager.9422a016.js";import"./use-key-composition.7adc0e81.js";import"./uid.42677368.js";const x=l("div",{class:"text-h6"}," Update Password",-1),C=l("div",{class:"text-subtitle2"}," Ensure your account is using a long, random password to stay secure. ",-1),b={class:"q-gutter-md w-full"},z={__name:"UpdatePasswordForm",setup(y){const m=p(null),i=p(null),r=f({current_password:"",password:"",password_confirmation:""}),w=()=>{r.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>r.reset(),onError:()=>{r.errors.password&&(r.reset("password","password_confirmation"),m.value.focus()),r.errors.current_password&&(r.reset("current_password"),i.value.focus())}})};return(S,e)=>(_(),Q(P,{class:"mx-auto"},{default:t(()=>[s(B,{flat:"",bordered:""},{default:t(()=>[s(n,null,{default:t(()=>[x,C]),_:1}),s(u),s(n,null,{default:t(()=>[l("div",b,[s(d,{type:"password",error:Boolean(o(r).errors.current_password),"error-message":o(r).errors.current_password,modelValue:o(r).current_password,"onUpdate:modelValue":e[0]||(e[0]=a=>o(r).current_password=a),outlined:"",label:"Current Password"},null,8,["error","error-message","modelValue"]),s(d,{type:"password",error:Boolean(o(r).errors.password),"error-message":o(r).errors.password,modelValue:o(r).password,"onUpdate:modelValue":e[1]||(e[1]=a=>o(r).password=a),outlined:"",label:"New Password"},null,8,["error","error-message","modelValue"]),s(d,{type:"password",error:Boolean(o(r).errors.password_confirmation),"error-message":o(r).errors.password_confirmation,modelValue:o(r).password_confirmation,"onUpdate:modelValue":e[2]||(e[2]=a=>o(r).password_confirmation=a),outlined:"",label:"Confirm Password"},null,8,["error","error-message","modelValue"])])]),_:1}),s(u),s(v,null,{default:t(()=>[s(c),s(g,{unelevated:"",color:"primary",onClick:e[3]||(e[3]=a=>w()),loading:o(r).processing,icon:"save"},{default:t(()=>[V("Save")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1}))}};export{z as default};