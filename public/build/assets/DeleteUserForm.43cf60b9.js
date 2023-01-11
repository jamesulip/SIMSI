import{Q}from"./QInput.e3db977c.js";import{Q as d}from"./QCardSection.ef73880e.js";import{Q as u}from"./QSeparator.8770f7d8.js";import{Q as p}from"./QSpace.185978bc.js";import{r as i,u as g,o as x,d as b,b as e,w as o,F as D,g as a,v as c,f as V,a as s}from"./app.f1084ffb.js";import{Q as f}from"./QCardActions.a88db726.js";import{Q as _}from"./QCard.cf94f3e9.js";import{Q as C}from"./QDialog.801f8352.js";import{Q as k}from"./QForm.5f5f7c3a.js";import"./use-key-composition.8fc56b08.js";import"./uid.42677368.js";import"./use-prevent-scroll.38107ebb.js";const A=s("div",{class:"text-h6"},"Delete Account",-1),B=s("div",{class:"text-subtitle2 mb-3"}," Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),F=s("div",{class:"text-h6"},"Delete Account",-1),S=s("div",{class:"text-subtitle2"},"Dermanently delete your account.",-1),U=s("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),J={__name:"DeleteUserForm",setup(h){const w=i(!1),m=i(null),t=g({password:""}),y=()=>{t.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>v(),onError:()=>m.value.focus(),onFinish:()=>t.reset()})},v=()=>{w.value=!1,t.reset()},n=i(!1);return(N,l)=>(x(),b(D,null,[e(C,{modelValue:n.value,"onUpdate:modelValue":l[2]||(l[2]=r=>n.value=r)},{default:o(()=>[e(_,null,{default:o(()=>[e(d,null,{default:o(()=>[A,B,e(Q,{ref_key:"passwordInput",ref:m,dense:"",type:"password",error:Boolean(a(t).errors.password),"error-message":a(t).errors.password,modelValue:a(t).password,"onUpdate:modelValue":l[0]||(l[0]=r=>a(t).password=r),outlined:"",label:"New Password"},null,8,["error","error-message","modelValue"])]),_:1}),e(u),e(f,null,{default:o(()=>[e(p),e(c,{unelevated:"",label:"Cancel"}),e(c,{unelevated:"",loading:a(t).processing,color:"negative",onClick:l[1]||(l[1]=r=>y()),label:"Delete Account"},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(k,{class:"mx-auto"},{default:o(()=>[e(_,{flat:"",bordered:""},{default:o(()=>[e(d,null,{default:o(()=>[F,S]),_:1}),e(u),e(d,null,{default:o(()=>[U]),_:1}),e(u),e(f,null,{default:o(()=>[e(p),e(c,{icon:"delete",onClick:l[3]||(l[3]=r=>n.value=!0),color:"negative",unelevated:""},{default:o(()=>[V("Delete Account")]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{J as default};