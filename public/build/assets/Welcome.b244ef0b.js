import{a as r,Q as f}from"./QCarousel.f765b144.js";import{_ as u}from"./Guest.vue_vue_type_script_setup_true_lang.6acfdebb.js";import{a5 as _,r as p,j as v,o as a,c as b,w as d,a as e,b as o,d as c,h as w,g as y,F as k,e as j,t as i,f as m}from"./app.22fd6682.js";import"./use-dark.cff53b37.js";import"./touch.ac26634e.js";import"./use-cache.b0833c75.js";import"./use-fullscreen.b0ffc314.js";import"./QToolbar.a4b07361.js";const C={class:"lg:relative"},V=e("div",{class:"mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left"},[e("div",{class:"px-4 sm:px-8 lg:w-1/2 xl:pr-16"},[e("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"},[e("span",{class:"block xl:inline"}," Shaso International "),e("span",{class:"block text-green-600 xl:inline"},"Manpower Services")]),e("p",{class:"mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"},' " Your reliable source for skilled and versatile Filipino workers, delivering top-quality customer service and maintaining the highest standards of integrity." '),e("div",{class:"mt-10 sm:flex sm:justify-center lg:justify-center"},[e("div",{class:"rounded-md shadow"},[e("a",{href:"#",class:"flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 md:py-4 md:px-10 md:text-lg"},"Apply Now")])])])],-1),J={class:"relative h-72 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"},N=e("svg",{class:"absolute -z-10 top-1/3 right-1/2 -mr-3 lg:left-0 lg:m-0",width:"404",height:"392",fill:"none",viewBox:"0 0 404 392"},[e("defs",null,[e("pattern",{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},[e("rect",{x:"0",y:"0",width:"4",height:"4",class:"text-green-200",fill:"currentColor"})])]),e("rect",{width:"404",height:"392",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"})],-1),U={class:"absolute inset-0 h-full w-full object-cover flex items-center justify-center p-4"},B={class:"relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"},E=e("div",{class:"absolute inset-0"},[e("div",{class:"h-1/3 bg-white sm:h-2/3"})],-1),F={class:"relative mx-auto max-w-7xl"},S=e("div",{class:"text-center"},[e("h2",{class:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"}," Recent Jobs Posted ")],-1),R={class:"mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3"},A={key:0,class:"flex-shrink-0"},D=["src"],I={class:"flex flex-1 flex-col justify-between bg-white p-6"},O={class:"flex-1"},P={class:"text-sm font-medium text-green-600"},Q=["href"],$=["href"],G={class:"text-xl font-semibold text-gray-900"},M={class:"mt-3 text-base text-gray-500"},T={class:"mt-6 flex items-center"},q={class:"ml-3"},z={class:"flex space-x-1 text-sm text-gray-500"},H={class:"font-semibold"},L={class:"flex space-x-1 text-sm text-gray-500"},W={class:"font-semibold"},Y=e("div",{class:"flex flex-col overflow-hidden rounded-lg shadow-lg"},[e("div",{class:"flex-1 flex flex-col justify-between bg-white p-6"},[e("div",{class:"flex-1"},[e("p",{class:"text-sm font-medium text-green-600"},[e("a",{href:"/jobs"},"View All Jobs")])])])],-1),ae=_({__name:"Welcome",props:{recentJobs:null},setup(x){const{recentJobs:g}=x,n=p(1),h=v(()=>g.map(s=>{var l;return{title:s.title,href:`/job/${s.id}`,category:{name:"Job Hiring",href:`/job/${s.id}`},description:s.description.replace(/(<([^>]+)>)/gi,"").substring(0,250)+"...",date:s.date_posted,datetime:s.date_expires,imageUrl:(l=s.media[0])==null?void 0:l.original_url}}));return(s,l)=>(a(),b(u,null,{default:d(()=>[e("div",C,[V,e("div",J,[N,e("div",U,[o(f,{class:"w-full",modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=t=>n.value=t),navigation:"",autoplay:"",infinite:"",animated:""},{default:d(()=>[o(r,{name:"1","img-src":"images/ENTRANCE.jpg"}),o(r,{name:"2","img-src":"images/IMG_0406.JPG"}),o(r,{name:"3","img-src":"images/OUR_OFFICE.jpg"})]),_:1},8,["modelValue"])])])]),e("div",B,[E,e("div",F,[S,e("div",R,[(a(!0),c(k,null,w(y(h),t=>(a(),c("div",{key:t.title,class:"flex flex-col overflow-hidden rounded-lg shadow-lg"},[t.imageUrl?(a(),c("div",A,[e("img",{class:"h-48 w-full object-cover",src:t.imageUrl,alt:""},null,8,D)])):j("",!0),e("div",I,[e("div",O,[e("p",P,[e("a",{href:t.category.href,class:"hover:underline"},i(t.category.name),9,Q)]),e("a",{href:t.href,class:"mt-2 block"},[e("p",G,i(t.title),1),e("p",M,i(t.description),1)],8,$)]),e("div",T,[e("div",q,[e("div",z,[m(" Date Posted: "),e("time",H,i(t.date),1)]),e("div",L,[m(" Date Expires: "),e("time",W,i(t.datetime),1)])])])])]))),128)),Y])])])]),_:1}))}});export{ae as default};