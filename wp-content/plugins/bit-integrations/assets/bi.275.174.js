import{u,k as b,e as c,d as k,r as d,j as e}from"./main-642.js";import{h as I,$ as _,i as w,e as C,l,j as m,E as v,k as E,I as N,s as y}from"./bi.77.82.js";import{h as F}from"./bi.253.840.js";import{B as M}from"./bi.411.841.js";function D({allIntegURL:f}){const g=u(),{id:S,formID:x}=b(),[t,a]=c(I),[n,h]=c(_),o=k(w),[i,r]=d.useState(!1),[p,s]=d.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(C,{snack:p,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>F(j,t,a),name:"name",value:t.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),!m(n.triggered_entity)&&e.jsx(v,{setSnackbar:s}),m(n.triggered_entity)&&e.jsx(E,{setSnackbar:s}),e.jsx(M,{formID:x,formFields:o,benchMarkConf:t,setBenchMarkConf:a,isLoading:i,setIsLoading:r,setSnackbar:s}),e.jsx(N,{edit:!0,saveConfig:()=>y({flow:n,setFlow:h,allIntegURL:f,navigate:g,conf:t,edit:1,setIsLoading:r,setSnackbar:s}),disabled:t.field_map.length<1,isLoading:i,dataConf:t,setDataConf:a,formFields:o}),e.jsx("br",{})]})}export{D as default};
