import{u,a as l}from"./focus-manager.752c11ce.js";import{i as t,j as o,k as n,l as c,p as i,ar as q,as as m}from"./app.1d2fb737.js";const g=t({name:"QCard",props:{...u,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=i(),s=l(a,e),d=o(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>n(a.tag,{class:d.value},c(r.default))}}),C=t({name:"QCardActions",props:{...q,vertical:Boolean},setup(a,{slots:r}){const e=m(a),s=o(()=>`q-card__actions ${e.value} q-card__actions--${a.vertical===!0?"vert column":"horiz row"}`);return()=>n("div",{class:s.value},c(r.default))}});export{g as Q,C as a};
