import{_ as i}from"./AppLayout.vue_vue_type_script_setup_true_lang.058f5a21.js";import p from"./DeleteUserForm.5275bcd5.js";import{c as o,w as s,o as t,a,e as r}from"./app.a0c2e19d.js";import m from"./UpdatePasswordForm.240502df.js";import l from"./UpdateProfileInformationForm.a1a6a0cf.js";import"./QImg.e660ecaa.js";import"./QLayout.7162ae2d.js";import"./format.e512c2af.js";import"./touch.70a9dd44.js";import"./QSpace.86641f5a.js";import"./QForm.c679ba2e.js";import"./InputError.40ad901a.js";import"./SecondaryButton.401b7716.js";const n=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),c={class:"mx-auto py-10 flex flex-col gap-3 max-w-xl"},v={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(f){return(e,u)=>(t(),o(i,{title:"Profile"},{header:s(()=>[n]),default:s(()=>[a("div",null,[a("div",c,[e.$page.props.jetstream.canUpdateProfileInformation?(t(),o(l,{key:0,class:"w-full",user:e.$page.props.user},null,8,["user"])):r("",!0),e.$page.props.jetstream.canUpdatePassword?(t(),o(m,{key:1,class:"w-full"})):r("",!0),e.$page.props.jetstream.hasAccountDeletionFeatures?(t(),o(p,{key:2,class:"w-full"})):r("",!0)])])]),_:1}))}};export{v as default};