import{u as _,k,e as g,r as c,d as w,j as t}from"./main-642.js";import{h as D,$ as C,i as y,e as E,_ as n,j as p,E as N,k as P,I as F,s as S}from"./bi.77.82.js";import{h as f,c as L,a as R}from"./bi.385.804.js";import{P as $}from"./bi.910.805.js";import"./bi.838.689.js";import"./bi.735.690.js";function B({allIntegURL:u}){const h=_(),{id:x}=k(),[e,a]=g(D),[i,b]=g(C),[l,o]=c.useState(!1),[j,s]=c.useState({show:!1}),[r,v]=c.useState(0),m=w(y),I=()=>{if(!L(e)){s({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}if(!R(e)){["Leads","Deals","Activities","Notes"].includes(e.moduleData.module)&&s({show:!0,msg:n("Please select a organization or a person","bit-integrations")});return}S({flow:i,setFlow:b,allIntegURL:u,conf:e,navigate:h,id:x,edit:1,setIsLoading:o,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(E,{snack:j,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 ",children:n("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:d=>f(d,r,e,a),name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!p(i.triggered_entity)&&t.jsx(N,{setSnackbar:s}),p(i.triggered_entity)&&t.jsx(P,{setSnackbar:s}),t.jsx($,{tab:r,settab:v,formID:i.triggered_entity_id,formFields:m,handleInput:d=>f(d,r,e,a,o,s),pipeDriveConf:e,setPipeDriveConf:a,isLoading:l,setIsLoading:o,setSnackbar:s}),t.jsx(F,{edit:!0,saveConfig:I,disabled:e.moduleData.module===""||e.field_map.length<1,isLoading:l,dataConf:e,setDataConf:a,formFields:m}),t.jsx("br",{})]})}export{B as default};
