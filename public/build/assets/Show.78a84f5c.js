import{_ as i}from"./AppLayout.vue_vue_type_script_setup_true_lang.b45ff0c9.js";import p from"./DeleteUserForm.7a381766.js";import{c as o,w as s,o as t,a,e as r}from"./app.b5166522.js";import m from"./UpdatePasswordForm.5316f098.js";import l from"./UpdateProfileInformationForm.d2c8f1b1.js";import"./QImg.9bbcb33e.js";import"./QLayout.edc35d24.js";import"./format.1c434d9b.js";import"./touch.70a9dd44.js";import"./QSpace.d35235b0.js";import"./QForm.9e275de7.js";import"./InputError.7e972bda.js";import"./SecondaryButton.24a56786.js";const n=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),c={class:"mx-auto py-10 flex flex-col gap-3 max-w-xl"},v={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(f){return(e,u)=>(t(),o(i,{title:"Profile"},{header:s(()=>[n]),default:s(()=>[a("div",null,[a("div",c,[e.$page.props.jetstream.canUpdateProfileInformation?(t(),o(l,{key:0,class:"w-full",user:e.$page.props.user},null,8,["user"])):r("",!0),e.$page.props.jetstream.canUpdatePassword?(t(),o(m,{key:1,class:"w-full"})):r("",!0),e.$page.props.jetstream.hasAccountDeletionFeatures?(t(),o(p,{key:2,class:"w-full"})):r("",!0)])])]),_:1}))}};export{v as default};