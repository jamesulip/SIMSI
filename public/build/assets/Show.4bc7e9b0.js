import{Q as v}from"./QSpace.4554c4bf.js";import{a8 as k,r as g,o as s,c,w as o,a as t,b as l,aH as Q,t as u,g as w,bq as C,x as y,aE as j,d as n,h,F as b,e as i,aF as _,O as f}from"./app.87d79099.js";import{Q as S,a as L,b as V}from"./QCarousel.e5b482d4.js";import{u as B}from"./use-quasar.f33779dd.js";import{_ as H}from"./Guest.vue_vue_type_script_setup_true_lang.8067aedb.js";import"./touch.70a9dd44.js";import"./QLayout.4df5db92.js";import"./use-cache.b0833c75.js";import"./use-fullscreen.fb9bbc00.js";const T={class:"relative"},D={class:"max-w-3xl gap-3 flex flex-col mx-auto py-6 sm:px-6 lg:px-8"},M={class:"text-h6"},N=t("div",{class:"text-h6"},"Description",-1),A=["innerHTML"],E={key:0,class:"col-span-full"},F=t("span",{class:"text-subtitle2 text-base"},"Date Posted",-1),$=t("br",null,null,-1),q={class:"text-caption px-3"},U={key:1,class:"col-span-full"},J=t("span",{class:"text-subtitle2 text-base"},"Date Expires",-1),O=t("br",null,null,-1),P={class:"text-caption px-3"},W={key:2,class:"col-span-full"},z=t("span",{class:"text-subtitle2 text-base"},"Qualifications",-1),G=t("br",null,null,-1),I={class:"list-disc px-5"},K=["innerHTML"],R={key:3},X=t("span",{class:"text-subtitle2 text-base"},"Salary",-1),Y=t("br",null,null,-1),Z={class:"text-caption"},tt={key:4},et=t("span",{class:"text-subtitle2 text-base"},"Job Type",-1),st=t("br",null,null,-1),lt={class:"text-caption"},at=t("span",{class:"text-h6"},"Attachments",-1),ot={class:"grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"},nt=["href"],it=["src"],xt=k({__name:"Show",props:{job:null},setup(e){B();const m=g(1),r=g(!1);return(dt,d)=>(s(),c(H,null,{default:o(()=>{var p;return[t("div",T,[t("div",D,[l(j,{flat:"",bordered:""},{default:o(()=>[l(Q,{class:"q-pa-md"},{default:o(()=>[t("div",M,u(e.job.title),1),l(v),l(w(C),{href:`/job/${e.job.id}/apply`},{default:o(()=>[l(y,{"icon-right":"send",color:"primary",label:"Apply Now",width:"1000",outline:""})]),_:1},8,["href"])]),_:1})]),_:1}),(p=e.job)!=null&&p.media.length?(s(),c(S,{key:0,animated:"",autoplay:"",fullscreen:r.value,"onUpdate:fullscreen":d[1]||(d[1]=a=>r.value=a),modelValue:m.value,"onUpdate:modelValue":d[2]||(d[2]=a=>m.value=a),arrows:"",navigation:"",infinite:""},{control:o(()=>[l(L,{position:"bottom-right",offset:[18,18]},{default:o(()=>[l(y,{push:"",round:"",dense:"",color:"white","text-color":"primary",icon:r.value?"fullscreen_exit":"fullscreen",onClick:d[0]||(d[0]=a=>r.value=!r.value)},null,8,["icon"])]),_:1})]),default:o(()=>[(s(!0),n(b,null,h(e.job.media,(a,x)=>(s(),c(V,{key:x,name:x+1,"img-src":a.original_url},null,8,["name","img-src"]))),128))]),_:1},8,["fullscreen","modelValue"])):i("",!0),l(j,{flat:"",bordered:""},{default:o(()=>[l(_,null,{default:o(()=>[N]),_:1}),l(f),l(_,{class:"flex-1"},{default:o(()=>[t("div",{innerHTML:e.job.description},null,8,A)]),_:1}),l(f),l(_,{class:"grid grid-cols-1 md:grid-cols-2 gap-3 p-3"},{default:o(()=>[e.job.date_posted?(s(),n("div",E,[F,$,t("span",q,u(e.job.date_posted),1)])):i("",!0),e.job.date_posted?(s(),n("div",U,[J,O,t("span",P,u(e.job.date_expires),1)])):i("",!0),e.job.skills?(s(),n("div",W,[z,G,t("ul",I,[(s(!0),n(b,null,h(e.job.skills,a=>(s(),n("li",{innerHTML:a},null,8,K))),256))])])):i("",!0),e.job.salary?(s(),n("div",R,[X,Y,t("span",Z,u(e.job.salary),1)])):i("",!0),e.job.job_type?(s(),n("div",tt,[et,st,t("span",lt,u(e.job.job_type.name),1)])):i("",!0)]),_:1}),e.job.media.length>0?(s(),c(f,{key:0})):i("",!0),e.job.media.length>0?(s(),c(_,{key:1},{default:o(()=>[at,t("div",ot,[(s(!0),n(b,null,h(e.job.media,a=>(s(),n("a",{href:a.original_url,key:a.id},[t("img",{src:a.original_url,alt:"Walnut card tray with white powder coated steel divider and 3 punchout holes.",class:"rounded-lg bg-gray-100"},null,8,it)],8,nt))),128))])]),_:1})):i("",!0)]),_:1})])])]}),_:1}))}});export{xt as default};
