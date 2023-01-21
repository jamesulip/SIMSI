import{Q as l}from"./QCardSection.15802f7d.js";import{Q as n}from"./QInput.3eca4b53.js";import{Q as f}from"./QCheckbox.4bdc4fc2.js";import{Q as c}from"./QSeparator.1743210f.js";import{Q as w}from"./QSpace.af44dbf4.js";import{u as Q,o as d,c as g,w as t,b as r,a as u,g as o,d as b,e as V,v as _,f as x}from"./app.19d60d81.js";import{Q as y}from"./QCardActions.8c14c19c.js";import{Q as B}from"./QCard.fe768eac.js";import{Q as C}from"./QForm.9417f4b2.js";import{_ as k}from"./AuthenticationCardLogo.589d4500.js";import"./use-key-composition.7adc0e81.js";import"./focus-manager.9422a016.js";import"./uid.42677368.js";import"./QImg.ecd5b216.js";const v={class:"my-4 mx-auto"},N={class:"q-gutter-md w-full"},S=["href"],D={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(i){const e=Q({name:"",password:"",remember:!1}),p=()=>{e.transform(m=>({...m,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(m,s)=>(d(),g(C,{onSubmit:s[3]||(s[3]=a=>p()),class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},{default:t(()=>[r(B,{class:"mx-auto w-96"},{default:t(()=>[r(l,{class:"flex"},{default:t(()=>[u("div",v,[r(k)])]),_:1}),r(l,null,{default:t(()=>[u("div",N,[r(n,{class:"w-full",error:Boolean(o(e).errors.name),"error-message":o(e).errors.name,type:"text",label:"Enter Name",modelValue:o(e).name,"onUpdate:modelValue":s[0]||(s[0]=a=>o(e).name=a),outlined:"",dense:""},null,8,["error","error-message","modelValue"]),r(n,{class:"w-full",error:Boolean(o(e).errors.password),"error-message":o(e).errors.password,type:"password",label:"Password",modelValue:o(e).password,"onUpdate:modelValue":s[1]||(s[1]=a=>o(e).password=a),outlined:"",dense:""},null,8,["error","error-message","modelValue"]),r(f,{label:"Remember me",dense:"",modelValue:o(e).remember,"onUpdate:modelValue":s[2]||(s[2]=a=>o(e).remember=a)},null,8,["modelValue"])])]),_:1}),r(c),r(y,null,{default:t(()=>[i.canResetPassword?(d(),b("a",{key:0,size:"sm",href:m.route("password.request")}," Forgot your password? ",8,S)):V("",!0),r(w),r(_,{type:"submit",unelevated:"",color:"primary",loading:o(e).processing},{default:t(()=>[x("Login")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1}))}};export{D as default};
