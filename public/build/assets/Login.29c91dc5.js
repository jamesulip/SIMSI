import{u as f,c,w as t,o as m,b as r,aF as n,a as d,aG as u,g as s,aV as w,O as g,aH as b,d as V,e as _,x,f as Q,aE as y}from"./app.b5166522.js";import{Q as B}from"./QSpace.d35235b0.js";import{Q as C}from"./QForm.9e275de7.js";import{_ as k}from"./AuthenticationCardLogo.b53cc788.js";import"./QImg.9bbcb33e.js";const F={class:"my-4 mx-auto"},N={class:"q-gutter-md w-full"},S=["href"],h={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(i){const e=f({name:"",password:"",remember:!1}),p=()=>{e.transform(l=>({...l,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(l,a)=>(m(),c(C,{onSubmit:a[3]||(a[3]=o=>p()),class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},{default:t(()=>[r(y,{class:"mx-auto w-96"},{default:t(()=>[r(n,{class:"flex"},{default:t(()=>[d("div",F,[r(k)])]),_:1}),r(n,null,{default:t(()=>[d("div",N,[r(u,{class:"w-full",error:Boolean(s(e).errors.name),"error-message":s(e).errors.name,type:"text",label:"Enter Name",modelValue:s(e).name,"onUpdate:modelValue":a[0]||(a[0]=o=>s(e).name=o),outlined:"",dense:""},null,8,["error","error-message","modelValue"]),r(u,{class:"w-full",error:Boolean(s(e).errors.password),"error-message":s(e).errors.password,type:"password",label:"Password",modelValue:s(e).password,"onUpdate:modelValue":a[1]||(a[1]=o=>s(e).password=o),outlined:"",dense:""},null,8,["error","error-message","modelValue"]),r(w,{label:"Remember me",dense:"",modelValue:s(e).remember,"onUpdate:modelValue":a[2]||(a[2]=o=>s(e).remember=o)},null,8,["modelValue"])])]),_:1}),r(g),r(b,null,{default:t(()=>[i.canResetPassword?(m(),V("a",{key:0,size:"sm",href:l.route("password.request")}," Forgot your password? ",8,S)):_("",!0),r(B),r(x,{type:"submit",unelevated:"",color:"primary",loading:s(e).processing},{default:t(()=>[Q("Login")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1}))}};export{h as default};
