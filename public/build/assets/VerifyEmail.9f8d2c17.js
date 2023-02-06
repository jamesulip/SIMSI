import{u as p,j as _,d as n,b as e,g as t,w as s,F as h,o as l,bq as g,e as y,a as o,n as b,f as a,bp as d,ag as v}from"./app.b5166522.js";import{A as x}from"./AuthenticationCard.0ba0f919.js";import{_ as k}from"./AuthenticationCardLogo.b53cc788.js";import{_ as w}from"./PrimaryButton.7dcb9e8f.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./QImg.9bbcb33e.js";const V=o("div",{class:"mb-4 text-sm text-gray-600"}," Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),E={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],C={class:"mt-4 flex items-center justify-between"},q={__name:"VerifyEmail",props:{status:String},setup(m){const c=m,i=p(),u=()=>{i.post(route("verification.send"))},f=_(()=>c.status==="verification-link-sent");return(r,N)=>(l(),n(h,null,[e(t(g),{title:"Email Verification"}),e(x,null,{logo:s(()=>[e(k)]),default:s(()=>[V,t(f)?(l(),n("div",E," A new verification link has been sent to the email address you provided in your profile settings. ")):y("",!0),o("form",{onSubmit:v(u,["prevent"])},[o("div",C,[e(w,{class:b({"opacity-25":t(i).processing}),disabled:t(i).processing},{default:s(()=>[a(" Resend Verification Email ")]),_:1},8,["class","disabled"]),o("div",null,[e(t(d),{href:r.route("profile.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:s(()=>[a(" Edit Profile")]),_:1},8,["href"]),e(t(d),{href:r.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 ml-2"},{default:s(()=>[a(" Log Out ")]),_:1},8,["href"])])])],40,B)]),_:1})],64))}};export{q as default};