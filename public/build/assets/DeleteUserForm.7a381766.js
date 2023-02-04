import{r as d,u as x,d as g,b as e,w as t,b9 as b,F as Q,o as D,aE as f,aF as u,aG as V,g as s,O as c,aH as p,x as i,f as C,a as r}from"./app.b5166522.js";import{Q as _}from"./QSpace.d35235b0.js";import{Q as F}from"./QForm.9e275de7.js";const k=r("div",{class:"text-h6"},"Delete Account",-1),A=r("div",{class:"text-subtitle2 mb-3"}," Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),B=r("div",{class:"text-h6"},"Delete Account",-1),S=r("div",{class:"text-subtitle2"},"Dermanently delete your account.",-1),U=r("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),M={__name:"DeleteUserForm",setup(h){const w=d(!1),m=d(null),o=x({password:""}),y=()=>{o.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>v(),onError:()=>m.value.focus(),onFinish:()=>o.reset()})},v=()=>{w.value=!1,o.reset()},n=d(!1);return(N,a)=>(D(),g(Q,null,[e(b,{modelValue:n.value,"onUpdate:modelValue":a[2]||(a[2]=l=>n.value=l)},{default:t(()=>[e(f,null,{default:t(()=>[e(u,null,{default:t(()=>[k,A,e(V,{ref_key:"passwordInput",ref:m,dense:"",type:"password",error:Boolean(s(o).errors.password),"error-message":s(o).errors.password,modelValue:s(o).password,"onUpdate:modelValue":a[0]||(a[0]=l=>s(o).password=l),outlined:"",label:"New Password"},null,8,["error","error-message","modelValue"])]),_:1}),e(c),e(p,null,{default:t(()=>[e(_),e(i,{unelevated:"",label:"Cancel"}),e(i,{unelevated:"",loading:s(o).processing,color:"negative",onClick:a[1]||(a[1]=l=>y()),label:"Delete Account"},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(F,{class:"mx-auto"},{default:t(()=>[e(f,{flat:"",bordered:""},{default:t(()=>[e(u,null,{default:t(()=>[B,S]),_:1}),e(c),e(u,null,{default:t(()=>[U]),_:1}),e(c),e(p,null,{default:t(()=>[e(_),e(i,{icon:"delete",onClick:a[3]||(a[3]=l=>n.value=!0),color:"negative",unelevated:""},{default:t(()=>[C("Delete Account")]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{M as default};
