import{Q as C}from"./QSpace.4c61ea5b.js";import{i as Q,j as y,k as w,l as S,a8 as L,r as v,o as s,c,w as a,a as e,b as l,aH as V,t as u,g as $,bq as B,x as j,aE as k,d as n,h as m,F as _,e as i,aF as h,O as b}from"./app.6092bd96.js";import{Q as H,a as T}from"./QCarousel.6ae739cf.js";import{u as A}from"./use-quasar.54ecbc75.js";import{_ as D}from"./Guest.vue_vue_type_script_setup_true_lang.4fcec8cd.js";import"./touch.70a9dd44.js";import"./QLayout.b2d656b8.js";import"./use-cache.b0833c75.js";import"./use-fullscreen.832edb55.js";const M=Q({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:t=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(t)},offset:{type:Array,default:()=>[18,18],validator:t=>t.length===2}},setup(t,{slots:f}){const r=y(()=>`q-carousel__control absolute absolute-${t.position}`),p=y(()=>({margin:`${t.offset[1]}px ${t.offset[0]}px`}));return()=>w("div",{class:r.value,style:p.value},S(f.default))}}),N={class:"relative"},q={class:"max-w-3xl gap-3 flex flex-col mx-auto py-6 sm:px-6 lg:px-8"},E={class:"text-h6"},F=e("div",{class:"text-h6"},"Description",-1),U=["innerHTML"],J={key:0,class:"col-span-full"},O=e("span",{class:"text-subtitle2 text-base"},"Date Posted",-1),P=e("br",null,null,-1),W={class:"text-caption px-3"},z={key:1,class:"col-span-full"},G=e("span",{class:"text-subtitle2 text-base"},"Date Expires",-1),I=e("br",null,null,-1),K={class:"text-caption px-3"},R={key:2,class:"col-span-full"},X=e("span",{class:"text-subtitle2 text-base"},"Skills",-1),Y=e("br",null,null,-1),Z={class:"list-disc px-5"},tt=["innerHTML"],et={key:3},st=e("span",{class:"text-subtitle2 text-base"},"Salary",-1),lt=e("br",null,null,-1),ot={class:"text-caption"},at={key:4},nt=e("span",{class:"text-subtitle2 text-base"},"Job Type",-1),it=e("br",null,null,-1),rt={class:"text-caption"},dt=e("span",{class:"text-h6"},"Attachments",-1),ct={class:"grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"},ut=["href"],ft=["src"],jt=L({__name:"Show",props:{job:null},setup(t){A();const f=v(1),r=v(!1);return(p,d)=>(s(),c(D,null,{default:a(()=>{var x;return[e("div",N,[e("div",q,[l(k,{flat:"",bordered:""},{default:a(()=>[l(V,{class:"q-pa-md"},{default:a(()=>[e("div",E,u(t.job.title),1),l(C),l($(B),{href:`/job/${t.job.id}/apply`},{default:a(()=>[l(j,{"icon-right":"send",color:"primary",label:"Apply Now",width:"1000",outline:""})]),_:1},8,["href"])]),_:1})]),_:1}),(x=t.job)!=null&&x.media.length?(s(),c(H,{key:0,animated:"",autoplay:"",fullscreen:r.value,"onUpdate:fullscreen":d[1]||(d[1]=o=>r.value=o),modelValue:f.value,"onUpdate:modelValue":d[2]||(d[2]=o=>f.value=o),arrows:"",navigation:"",infinite:""},{control:a(()=>[l(M,{position:"bottom-right",offset:[18,18]},{default:a(()=>[l(j,{push:"",round:"",dense:"",color:"white","text-color":"primary",icon:r.value?"fullscreen_exit":"fullscreen",onClick:d[0]||(d[0]=o=>r.value=!r.value)},null,8,["icon"])]),_:1})]),default:a(()=>[(s(!0),n(_,null,m(t.job.media,(o,g)=>(s(),c(T,{key:g,name:g+1,"img-src":o.original_url},null,8,["name","img-src"]))),128))]),_:1},8,["fullscreen","modelValue"])):i("",!0),l(k,{flat:"",bordered:""},{default:a(()=>[l(h,null,{default:a(()=>[F]),_:1}),l(b),l(h,{class:"flex-1"},{default:a(()=>[e("div",{innerHTML:t.job.description},null,8,U)]),_:1}),l(b),l(h,{class:"grid grid-cols-1 md:grid-cols-2 gap-3 p-3"},{default:a(()=>[t.job.date_posted?(s(),n("div",J,[O,P,e("span",W,u(t.job.date_posted),1)])):i("",!0),t.job.date_posted?(s(),n("div",z,[G,I,e("span",K,u(t.job.date_expires),1)])):i("",!0),t.job.skills?(s(),n("div",R,[X,Y,e("ul",Z,[(s(!0),n(_,null,m(t.job.skills,o=>(s(),n("li",{innerHTML:o},null,8,tt))),256))])])):i("",!0),t.job.salary?(s(),n("div",et,[st,lt,e("span",ot,u(t.job.salary),1)])):i("",!0),t.job.job_type?(s(),n("div",at,[nt,it,e("span",rt,u(t.job.job_type.name),1)])):i("",!0)]),_:1}),t.job.media.length>0?(s(),c(b,{key:0})):i("",!0),t.job.media.length>0?(s(),c(h,{key:1},{default:a(()=>[dt,e("div",ct,[(s(!0),n(_,null,m(t.job.media,o=>(s(),n("a",{href:o.original_url,key:o.id},[e("img",{src:o.original_url,alt:"Walnut card tray with white powder coated steel divider and 3 punchout holes.",class:"rounded-lg bg-gray-100"},null,8,ft)],8,ut))),128))])]),_:1})):i("",!0)]),_:1})])])]}),_:1}))}});export{jt as default};
