import{u,k as b,e as c,d as I,r as m,j as t}from"./main-642.js";import{h as _,$ as k,i as w,e as C,_ as l,j as p,E as v,k as E,I as L,s as D}from"./bi.77.82.js";import{h as x,L as N}from"./bi.716.785.js";import"./bi.744.95.js";import"./bi.728.729.js";/* empty css          */import"./bi.986.742.js";import"./bi.838.689.js";import"./bi.735.690.js";function q({allIntegURL:f}){const g=u(),{formID:h}=b(),[e,a]=c(_),[n,y]=c(k),r=I(w),[o,d]=m.useState(!1),[j,s]=m.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:j,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>x(i,e,a),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!p(n.triggered_entity)&&t.jsx(v,{setSnackbar:s}),p(n.triggered_entity)&&t.jsx(E,{setSnackbar:s}),t.jsx(N,{formID:h,formFields:r,handleInput:i=>x(i,e,a),learnDashConf:e,setLearnDashConf:a,isLoading:o,setIsLoading:d,setSnackbar:s}),t.jsx(L,{edit:!0,saveConfig:()=>D({flow:n,allIntegURL:f,conf:e,navigate:g,edit:1,setIsLoading:d,setSnackbar:s}),disabled:e.mainAction===""||o,isLoading:o,dataConf:e,setDataConf:a,formFields:r}),t.jsx("br",{})]})}export{q as default};
