import{Z as x,j as m,aX as h,o,d as l,a as e,F as f,h as g,g as p,b as u,w as v,f as c,e as b,t as i}from"./app.1d2fb737.js";const w={class:"relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"},y=e("div",{class:"absolute inset-0"},[e("div",{class:"h-1/3 bg-white sm:h-2/3"})],-1),k={class:"relative mx-auto max-w-7xl"},J=e("div",{class:"text-center"},[e("h2",{class:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"}," Recent Jobs Posted ")],-1),V={class:"mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3"},C={key:0,class:"flex-shrink-0"},N=["src"],B={class:"flex flex-1 flex-col justify-between bg-white p-6"},D={class:"flex-1"},L=["href"],U={class:"text-xl font-semibold text-gray-900"},E={class:"mt-3 text-base text-gray-500"},F={class:"mt-6 flex items-center"},P={class:"ml-3"},R={class:"flex space-x-1 text-sm text-gray-500"},$={class:"font-semibold"},j={class:"flex space-x-1 text-sm text-gray-500"},A={class:"font-semibold"},H={class:"flex flex-col overflow-hidden rounded-lg shadow-lg"},S={class:"flex-1 flex flex-col justify-between bg-white p-6"},T={class:"flex-1"},W={class:"text-sm font-medium text-green-600"},Z=x({__name:"Welcome copy",props:{recentJobs:null},setup(d){const{recentJobs:n}=d,r=m(()=>n.map(t=>{var a;return{title:t.title,href:`/job/${t.id}`,category:{name:"Job Hiring",href:`/job/${t.id}`},description:t.description,date:t.date_posted,datetime:t.date_expires,imageUrl:(a=t.media[0])==null?void 0:a.original_url}}));return(t,a)=>{const _=h("Link");return o(),l("div",w,[y,e("div",k,[J,e("div",V,[(o(!0),l(f,null,g(p(r),s=>(o(),l("div",{key:s.title,class:"flex flex-col overflow-hidden rounded-lg shadow-lg"},[s.imageUrl?(o(),l("div",C,[e("img",{class:"h-48 w-full object-cover",src:s.imageUrl,alt:""},null,8,N)])):b("",!0),e("div",B,[e("div",D,[e("a",{href:s.href,class:"mt-2 block"},[e("p",U,i(s.title),1),e("p",E,i(s.description),1)],8,L)]),e("div",F,[e("div",P,[e("div",R,[c(" Date Posted: "),e("time",$,i(s.date),1)]),e("div",j,[c(" Date Expires: "),e("time",A,i(s.datetime),1)])])])])]))),128)),e("div",H,[e("div",S,[e("div",T,[e("p",W,[u(_,{href:"/jobs"},{default:v(()=>[c("View All Jobs")]),_:1})])])])])])])])}}});export{Z as default};
