import{Q as L}from"./QInput.e3db977c.js";import{Q as S}from"./QSelect.353a3914.js";import{a2 as B,j as N,r as x,o as a,c as U,w as g,a as t,b as i,g as r,v as b,d as n,h as j,F as q,e as v,aq as T,t as c,f as y}from"./app.f1084ffb.js";import{Q as $}from"./QForm.5f5f7c3a.js";import{_ as D}from"./Guest.vue_vue_type_script_setup_true_lang.8a052e7f.js";import{u as H}from"./index.f78b8a1b.js";import"./use-key-composition.8fc56b08.js";import"./QSeparator.8770f7d8.js";import"./uid.42677368.js";import"./QChip.868a36e2.js";import"./QList.bb1baa1b.js";import"./QItemLabel.f11ab903.js";import"./selection.f820d120.js";import"./use-prevent-scroll.38107ebb.js";import"./QDialog.801f8352.js";import"./format.2bc25e5f.js";import"./QCardSection.ef73880e.js";import"./QCard.cf94f3e9.js";const R={class:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"},E={class:"px-4 py-6 sm:px-0"},I={class:"border-gray-200 rounded-lg"},M={class:"sm:grid grid-cols-4 gap-2 mx-auto max-w-3xl"},O={class:"flex-0 mb-3"},P={class:"col-span-3 gap-3 grid"},z={key:0,class:"flex-shrink-0"},A=["src"],G={class:"flex flex-1 flex-col justify-between bg-white p-3"},K={class:"flex-1"},W=["href"],X={class:"text-xl font-semibold text-gray-900"},Y=["innerHTML"],Z={class:"mt-6 flex items-center"},ee={class:"ml-3"},te={class:"flex space-x-1 text-sm text-gray-500"},oe={class:"font-semibold"},se={class:"flex space-x-1 text-sm text-gray-500"},le={class:"font-semibold"},ae={key:0,class:"flex flex-col border overflow-hidden rounded-lg shadow-lg border-gray-200"},ie=t("div",{class:"flex flex-1 flex-col justify-between bg-white p-6"},[t("div",{class:"flex-1"},[t("p",{class:"text-xl font-semibold text-gray-900"},"No Result")])],-1),ne=[ie],Ce=B({__name:"Jobs",props:{jobs:null,available_locations:null,query:null},setup(d){var _,h;const{jobs:w,available_locations:re,query:m}=d,u=N(()=>w.map(s=>{var o;return{title:s.title,href:`/job/${s.uuid}`,category:{name:"Job Hiring",href:`/job/${s.uuid}`},description:s.description.replace(/(<([^>]+)>)/gi,"").substring(0,250)+"...",date:s.date_posted,datetime:s.date_expires,imageUrl:(o=s.media[0])==null?void 0:o.original_url}})),{data:p,isFetching:V}=H("https://restcountries.com/v3.1/all?fields=name").json(),k=x(p.value);function Q(s,o,e){o(()=>{const C=s.toLowerCase();k.value=p.value.filter(J=>J.name.common.toLowerCase().indexOf(C)>-1)})}const l=x({search:(_=m.search)!=null?_:"",location:(h=m.location)!=null?h:""});function f(){T.Inertia.get("/jobs",l.value)}function F(){l.value={search:"",location:""},f()}return(s,o)=>(a(),U(D,null,{default:g(()=>[t("div",R,[t("div",E,[t("div",I,[t("div",M,[t("div",O,[i($,{onSubmit:o[2]||(o[2]=e=>f()),onReset:F,class:"q-gutter-md"},{default:g(()=>[i(L,{modelValue:l.value.search,"onUpdate:modelValue":o[0]||(o[0]=e=>l.value.search=e),outlined:"",dense:"",label:"Job Title",name:"search",clearable:""},null,8,["modelValue"]),i(S,{"use-input":"",dense:"",options:d.available_locations,onFilter:Q,modelValue:l.value.location,"onUpdate:modelValue":o[1]||(o[1]=e=>l.value.location=e),outlined:"",label:"Location",loading:r(V),"option-label":e=>e==null?void 0:e.location,"map-options":"","emit-value":"","option-value":e=>e==null?void 0:e.location},null,8,["options","modelValue","loading","option-label","option-value"]),i(b,{icon:"search",type:"submit",class:"bg-green-700",label:"Search"}),i(b,{icon:"close",type:"reset",color:"warning",label:"Clear Search"})]),_:1})]),t("div",P,[(a(!0),n(q,null,j(r(u),e=>(a(),n("div",{key:e.title,class:"flex flex-col border overflow-hidden rounded-lg shadow-lg border-gray-200"},[e.imageUrl?(a(),n("div",z,[t("img",{class:"h-48 w-full object-cover",src:e.imageUrl,alt:""},null,8,A)])):v("",!0),t("div",G,[t("div",K,[t("a",{href:e.href,class:"mt-2 block"},[t("p",X,c(e.title),1),t("p",{class:"mt-3 text-base text-gray-500",innerHTML:e.description},null,8,Y)],8,W)]),t("div",Z,[t("div",ee,[t("div",te,[y(" Date Posted: "),t("time",oe,c(e.date),1)]),t("div",se,[y(" Date Expires: "),t("time",le,c(e.datetime),1)])])])])]))),128)),r(u).length==0?(a(),n("div",ae,ne)):v("",!0)])])])])])]),_:1}))}});export{Ce as default};