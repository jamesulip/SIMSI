import{u,o as l,d as m,b as s,g as a,w as o,F as c,aR as f,t as _,e as p,a as t,n as w,f as g,a8 as b}from"./app.f1084ffb.js";import{A as y}from"./AuthenticationCard.5ac93f0f.js";import{_ as x}from"./AuthenticationCardLogo.5f8638bc.js";import{_ as h}from"./InputError.73824b9f.js";import{_ as k}from"./InputLabel.8aaa0d63.js";import{_ as V}from"./PrimaryButton.e57b12ba.js";import{_ as v}from"./TextInput.aba37fe1.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./QImg.79656d9d.js";const F=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],C={class:"flex items-center justify-end mt-4"},H={__name:"ForgotPassword",props:{status:String},setup(r){const e=u({email:""}),n=()=>{e.post(route("password.email"))};return(S,i)=>(l(),m(c,null,[s(a(f),{title:"Forgot Password"}),s(y,null,{logo:o(()=>[s(x)]),default:o(()=>[F,r.status?(l(),m("div",N,_(r.status),1)):p("",!0),t("form",{onSubmit:b(n,["prevent"])},[t("div",null,[s(k,{for:"email",value:"Email"}),s(v,{id:"email",modelValue:a(e).email,"onUpdate:modelValue":i[0]||(i[0]=d=>a(e).email=d),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),s(h,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),t("div",C,[s(V,{class:w({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:o(()=>[g(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{H as default};