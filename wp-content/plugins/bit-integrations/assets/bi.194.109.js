import{u as b,k as v,e as n,d as I,r as i,j as e}from"./main-642.js";import{h as _,$ as w,i as k,e as E,_ as r,j as d,E as C,k as N,I as y,s as D}from"./bi.77.82.js";import{h as F}from"./bi.351.738.js";import{G as S}from"./bi.163.739.js";function W({allIntegURL:l}){const c=b(),{id:g}=v(),[s,o]=n(_),[a,m]=n(w),x=I(k),[f,p]=i.useState(!1),[h,t]=i.useState({show:!1}),j=()=>{D({flow:a,setFlow:m,allIntegURL:l,conf:s,navigate:c,edit:1,setIsLoading:p,setSnackbar:t})};return e.jsxs("div",{style:{width:900},children:[e.jsx(E,{snack:h,setSnackbar:t}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>F(u,s,o),name:"name",value:s.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),!d(a.triggered_entity)&&e.jsx(C,{setSnackbar:t}),d(a.triggered_entity)&&e.jsx(N,{setSnackbar:t}),e.jsx(S,{flowID:g,formFields:x,googleDriveConf:s,setGoogleDriveConf:o}),e.jsx(y,{edit:!0,saveConfig:j,disabled:s.field_map.length<1,isLoading:f}),e.jsx("br",{})]})}export{W as default};