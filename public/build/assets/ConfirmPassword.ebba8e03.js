import{u as l,r as d,d as c,b as o,g as a,w as r,F as u,o as p,br as f,a as e,n as _,f as w,ag as b}from"./app.5959f21c.js";import{A as g}from"./AuthenticationCard.03c255eb.js";import{_ as h}from"./AuthenticationCardLogo.0c270d31.js";import{_ as x}from"./InputError.2e5eae80.js";import{_ as v}from"./InputLabel.af966be9.js";import{_ as y}from"./PrimaryButton.23df3d71.js";import{_ as V}from"./TextInput.289ad745.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./QImg.61f61069.js";const C=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),$=["onSubmit"],k={class:"flex justify-end mt-4"},E={__name:"ConfirmPassword",setup(F){const s=l({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(A,i)=>(p(),c(u,null,[o(a(f),{title:"Secure Area"}),o(g,null,{logo:r(()=>[o(h)]),default:r(()=>[C,e("form",{onSubmit:b(n,["prevent"])},[e("div",null,[o(v,{for:"password",value:"Password"}),o(V,{id:"password",ref_key:"passwordInput",ref:t,modelValue:a(s).password,"onUpdate:modelValue":i[0]||(i[0]=m=>a(s).password=m),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(x,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",k,[o(y,{class:_(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{E as default};