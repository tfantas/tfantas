import{u as I,e as l,r as i,d as _,j as e}from"./main-642.js";import{$ as w,h as E,i as k,e as C,_ as o,j as c,E as F,k as L,I as S,X as m,s as y}from"./bi.77.82.js";import{h as N,c as f}from"./bi.17.894.js";import{L as $}from"./bi.259.895.js";function A({allIntegURL:g}){const x=I(),[a,P]=l(w),[t,n]=l(E),[p,r]=i.useState(!1),[u,h]=i.useState({}),[j,s]=i.useState({show:!1}),d=_(k),v=()=>{if(!f(t)){s({show:!0,msg:o("Please map mandatory fields","bit-integrations")});return}if(!t.selectedEvent){m.error("Please select an Event");return}if(!t.selectedSession){m.error("Please select a Session");return}y({flow:a,allIntegURL:g,conf:t,navigate:x,edit:1,setIsLoading:r,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(C,{snack:j,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:o("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:b=>N(b,t,n),name:"name",value:t.name,type:"text",placeholder:o("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),!c(a.triggered_entity)&&e.jsx(F,{setSnackbar:s}),c(a.triggered_entity)&&e.jsx(L,{setSnackbar:s}),e.jsx($,{formID:a.triggered_entity_id,formFields:d,livestormConf:t,setLivestormConf:n,loading:u,setLoading:h,setIsLoading:r,setSnackbar:s}),e.jsx(S,{edit:!0,saveConfig:v,disabled:!f(t),isLoading:p,dataConf:t,setDataConf:n,formFields:d}),e.jsx("br",{})]})}export{A as default};
