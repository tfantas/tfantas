import{u as j,k as I,e as c,d as b,r as l,j as e}from"./main-642.js";import{h as k,$ as _,i as w,e as C,_ as f,j as m,E as v,k as E,I as F,s as N}from"./bi.77.82.js";import{h as x,A as y,c as A}from"./bi.15.788.js";import"./bi.838.689.js";import"./bi.735.690.js";function W({allIntegURL:g}){const p=j(),{formID:h}=I(),[t,a]=c(k),[n,S]=c(_),r=b(w),[i,d]=l.useState(!1),[u,s]=l.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(C,{snack:u,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:f("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>x(o,t,a),name:"name",value:t.name,type:"text",placeholder:f("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),!m(n.triggered_entity)&&e.jsx(v,{setSnackbar:s}),m(n.triggered_entity)&&e.jsx(E,{setSnackbar:s}),e.jsx(y,{formID:h,formFields:r,handleInput:o=>x(o,t,a),affiliateConf:t,setAffiliateConf:a,isLoading:i,setIsLoading:d,setSnackbar:s}),e.jsx(F,{edit:!0,saveConfig:()=>N({flow:n,allIntegURL:g,conf:t,navigate:p,edit:1,setIsLoading:d,setSnackbar:s}),disabled:!A(t)||!t.statusId||!t.referralId||i,isLoading:i,dataConf:t,setDataConf:a,formFields:r}),e.jsx("br",{})]})}export{W as default};