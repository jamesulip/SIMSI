import{_ as i}from"./AppLayout.vue_vue_type_script_setup_true_lang.1b920fc8.js";import p from"./DeleteUserForm.43cf60b9.js";import{o as t,c as r,w as s,a,e}from"./app.f1084ffb.js";import m from"./UpdatePasswordForm.982ed397.js";import l from"./UpdateProfileInformationForm.bf17a09f.js";import"./QList.bb1baa1b.js";import"./QSeparator.8770f7d8.js";import"./QImg.79656d9d.js";import"./QItemLabel.f11ab903.js";import"./selection.f820d120.js";import"./use-prevent-scroll.38107ebb.js";import"./uid.42677368.js";import"./touch.70a9dd44.js";import"./format.2bc25e5f.js";import"./QInput.e3db977c.js";import"./use-key-composition.8fc56b08.js";import"./QCardSection.ef73880e.js";import"./QSpace.185978bc.js";import"./QCardActions.a88db726.js";import"./QCard.cf94f3e9.js";import"./QDialog.801f8352.js";import"./QForm.5f5f7c3a.js";import"./InputError.73824b9f.js";import"./SecondaryButton.8ce84984.js";const n=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),c={class:"mx-auto py-10 flex flex-col gap-3 max-w-xl"},q={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(f){return(o,u)=>(t(),r(i,{title:"Profile"},{header:s(()=>[n]),default:s(()=>[a("div",null,[a("div",c,[o.$page.props.jetstream.canUpdateProfileInformation?(t(),r(l,{key:0,class:"w-full",user:o.$page.props.user},null,8,["user"])):e("",!0),o.$page.props.jetstream.canUpdatePassword?(t(),r(m,{key:1,class:"w-full"})):e("",!0),o.$page.props.jetstream.hasAccountDeletionFeatures?(t(),r(p,{key:2,class:"w-full"})):e("",!0)])])]),_:1}))}};export{q as default};