import{u as b,k as I,e as o,d as C,r as i,j as s}from"./main-642.js";import{h as k,$ as w,i as _,e as v,_ as r,j as d,E,k as F,I as N,s as y}from"./bi.77.82.js";import{h as P,c as S}from"./bi.297.827.js";import{P as $}from"./bi.124.828.js";function A({allIntegURL:c}){const l=b(),{id:m}=I(),[e,n]=o(k),[a,x]=o(w),g=C(_),[f,p]=i.useState(!1),[u,t]=i.useState({show:!1}),h=()=>{y({flow:a,setFlow:x,allIntegURL:c,conf:e,navigate:l,edit:1,setIsLoading:p,setSnackbar:t})};return s.jsxs("div",{style:{width:900},children:[s.jsx(v,{snack:u,setSnackbar:t}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>P(j,e,n),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),!d(a.triggered_entity)&&s.jsx(E,{setSnackbar:t}),d(a.triggered_entity)&&s.jsx(F,{setSnackbar:t}),s.jsx($,{flowID:m,formFields:g,pCloudConf:e,setPCloudConf:n}),s.jsx(N,{edit:!0,saveConfig:h,disabled:!S(e),isLoading:f}),s.jsx("br",{})]})}export{A as default};
