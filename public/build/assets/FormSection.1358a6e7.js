import{j as n,o as i,d as r,b as l,w as a,$ as e,a as t,a4 as c,n as p,g as m,e as u,a5 as g}from"./app.66c2195a.js";import{S as _}from"./SectionTitle.081e6262.js";const h={class:"md:grid md:grid-cols-3 md:gap-6"},f={class:"mt-5 md:mt-0 md:col-span-2"},b={class:"grid grid-cols-6 gap-6"},v={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"},k={__name:"FormSection",emits:["submitted"],setup($){const o=n(()=>!!g().actions);return(s,d)=>(i(),r("div",h,[l(_,null,{title:a(()=>[e(s.$slots,"title")]),description:a(()=>[e(s.$slots,"description")]),_:3}),t("div",f,[t("form",{onSubmit:d[0]||(d[0]=c(w=>s.$emit("submitted"),["prevent"]))},[t("div",{class:p(["px-4 py-5 bg-white sm:p-6 shadow",m(o)?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[t("div",b,[e(s.$slots,"form")])],2),m(o)?(i(),r("div",v,[e(s.$slots,"actions")])):u("",!0)],32)])]))}};export{k as _};