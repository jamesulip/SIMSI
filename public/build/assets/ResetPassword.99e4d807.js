import{u as c,o as f,d as w,b as o,g as a,w as l,F as _,aR as g,a as t,n as V,f as b,a8 as k}from"./app.f1084ffb.js";import{A as v}from"./AuthenticationCard.5ac93f0f.js";import{_ as x}from"./AuthenticationCardLogo.5f8638bc.js";import{_ as m}from"./InputError.73824b9f.js";import{_ as i}from"./InputLabel.8aaa0d63.js";import{_ as y}from"./PrimaryButton.e57b12ba.js";import{_ as n}from"./TextInput.aba37fe1.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./QImg.79656d9d.js";const P=["onSubmit"],$={class:"mt-4"},C={class:"mt-4"},F={class:"flex items-center justify-end mt-4"},z={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(R,e)=>(f(),w(_,null,[o(a(g),{title:"Reset Password"}),o(v,null,{logo:l(()=>[o(x)]),default:l(()=>[t("form",{onSubmit:k(u,["prevent"])},[t("div",null,[o(i,{for:"email",value:"Email"}),o(n,{id:"email",modelValue:a(s).email,"onUpdate:modelValue":e[0]||(e[0]=r=>a(s).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),o(m,{class:"mt-2",message:a(s).errors.email},null,8,["message"])]),t("div",$,[o(i,{for:"password",value:"Password"}),o(n,{id:"password",modelValue:a(s).password,"onUpdate:modelValue":e[1]||(e[1]=r=>a(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),t("div",C,[o(i,{for:"password_confirmation",value:"Confirm Password"}),o(n,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":e[2]||(e[2]=r=>a(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:a(s).errors.password_confirmation},null,8,["message"])]),t("div",F,[o(y,{class:V({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:l(()=>[b(" Reset Password ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{z as default};