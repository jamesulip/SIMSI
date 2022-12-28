import{a as m,Q as f}from"./QCard.a0363a13.js";import{Q as d}from"./QInput.ea213ef1.js";import{Q as c}from"./QCheckbox.454d4bef.js";import{Q as w}from"./QSeparator.35dfb0dc.js";import{Q as g}from"./QSpace.303325dd.js";import{u as Q,o as n,c as b,w as t,b as r,a as i,g as o,d as V,e as _,I as x,f as y}from"./app.22fd6682.js";import{Q as B}from"./QCardActions.6162247f.js";import{Q as C}from"./QForm.737434b8.js";import{_ as k}from"./AuthenticationCardLogo.a0d6550d.js";import"./use-dark.cff53b37.js";import"./use-key-composition.982f6835.js";import"./uid.2738a642.js";import"./use-checkbox.0631e358.js";const S={class:"my-4 mx-auto"},v={class:"q-gutter-md w-full"},F=["href"],T={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(u){const e=Q({email:"",password:"",remember:!1}),p=()=>{e.transform(l=>({...l,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(l,s)=>(n(),b(C,{onSubmit:s[3]||(s[3]=a=>p()),class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},{default:t(()=>[r(f,{class:"mx-auto w-96"},{default:t(()=>[r(m,{class:"flex"},{default:t(()=>[i("div",S,[r(k)])]),_:1}),r(m,null,{default:t(()=>[i("div",v,[r(d,{class:"w-full",error:Boolean(o(e).errors.email),"error-message":o(e).errors.email,type:"text",label:"Email Address",modelValue:o(e).email,"onUpdate:modelValue":s[0]||(s[0]=a=>o(e).email=a),outlined:"",dense:""},null,8,["error","error-message","modelValue"]),r(d,{class:"w-full",error:Boolean(o(e).errors.password),"error-message":o(e).errors.password,type:"password",label:"Password",modelValue:o(e).password,"onUpdate:modelValue":s[1]||(s[1]=a=>o(e).password=a),outlined:"",dense:""},null,8,["error","error-message","modelValue"]),r(c,{label:"Remember me",dense:"",modelValue:o(e).remember,"onUpdate:modelValue":s[2]||(s[2]=a=>o(e).remember=a)},null,8,["modelValue"])])]),_:1}),r(w),r(B,null,{default:t(()=>[u.canResetPassword?(n(),V("a",{key:0,size:"sm",href:l.route("password.request")}," Forgot your password? ",8,F)):_("",!0),r(g),r(x,{type:"submit",unelevated:"",color:"primary",loading:o(e).processing},{default:t(()=>[y("Login")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1}))}};export{T as default};