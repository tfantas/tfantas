import{u as k,k as w,e as d,r as n,d as S,j as e}from"./main-642.js";import{$ as I,h as _,i as C,e as F,_ as i,j as l,E as v,k as E,I as y,s as N}from"./bi.77.82.js";import{h as L,c}from"./bi.48.849.js";import{Z}from"./bi.610.850.js";import"./bi.838.689.js";import"./bi.735.690.js";function D({allIntegURL:m}){const f=k();w();const[a,$]=d(I),[t,o]=d(_),[h,g]=n.useState(!1),[p,x]=n.useState({auth:!1,header:!1,workbooks:!1,worksheets:!1,workSheetHeaders:!0}),[u,s]=n.useState({show:!1}),r=S(C),j=()=>{if(!c(t)){s({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}N({flow:a,allIntegURL:m,conf:t,navigate:f,edit:1,setIsLoading:g,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(F,{snack:u,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:b=>L(b,t,o),name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),!l(a.triggered_entity)&&e.jsx(v,{setSnackbar:s}),l(a.triggered_entity)&&e.jsx(E,{setSnackbar:s}),e.jsx(Z,{formFields:r,zohoSheetConf:t,setZohoSheetConf:o,loading:p,setLoading:x,setSnackbar:s}),e.jsx(y,{edit:!0,saveConfig:j,disabled:!c(t),isLoading:h,dataConf:t,setDataConf:o,formFields:r}),e.jsx("br",{})]})}export{D as default};
