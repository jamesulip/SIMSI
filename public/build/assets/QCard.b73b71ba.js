import{i as t,j as o,k as s,l as n,z as c}from"./app.feef9ed9.js";import{u as l,a as i}from"./use-dark.6ad3194e.js";const m=t({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:r}){const e=o(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>s(a.tag,{class:e.value},n(r.default))}}),g=t({name:"QCard",props:{...l,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=c(),d=i(a,e),u=o(()=>"q-card"+(d.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>s(a.tag,{class:u.value},n(r.default))}});export{g as Q,m as a};
