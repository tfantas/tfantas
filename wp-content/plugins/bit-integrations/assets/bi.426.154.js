import{u as j,k as I,e as c,r as l,d as b,j as t}from"./main-642.js";import{h as _,$ as k,i as w,e as v,_ as m,j as f,E,k as N,I as y,s as F}from"./bi.77.82.js";import{h as g}from"./bi.457.802.js";import{C as S}from"./bi.619.803.js";import"./bi.838.689.js";import"./bi.735.690.js";function M({allIntegURL:x}){const p=j(),{id:u}=I(),[s,a]=c(_),[n,h]=c(k),[i,r]=l.useState(!1),[C,e]=l.useState({show:!1}),d=b(w);return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:C,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>g(o,s,a),name:"name",value:s.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!f(n.triggered_entity)&&t.jsx(E,{setSnackbar:e}),f(n.triggered_entity)&&t.jsx(N,{setSnackbar:e}),t.jsx(S,{id:u,formFields:d,handleInput:o=>g(o,s,a),constantContactConf:s,setConstantContactConf:a,isLoading:i,setIsLoading:r,setSnackbar:e}),t.jsx(y,{edit:!0,saveConfig:()=>F({flow:n,setFlow:h,allIntegURL:x,conf:s,navigate:p,edit:1,setIsLoading:r,setSnackbar:e}),disabled:s.listId===""||s.field_map.length<1,isLoading:i===!0,dataConf:s,setDataConf:a,formFields:d}),t.jsx("br",{})]})}export{M as default};
