import{a as c}from"./Modal.6a2d6624.js";import{o as i,c as d,w as n,a as e,$ as o}from"./app.1d2fb737.js";const r={class:"px-6 py-4"},h={class:"text-lg"},f={class:"mt-4"},m={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"},u={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(s,{emit:a}){const l=()=>{a("close")};return(t,x)=>(i(),d(c,{show:s.show,"max-width":s.maxWidth,closeable:s.closeable,onClose:l},{default:n(()=>[e("div",r,[e("div",h,[o(t.$slots,"title")]),e("div",f,[o(t.$slots,"content")])]),e("div",m,[o(t.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{u as _};
