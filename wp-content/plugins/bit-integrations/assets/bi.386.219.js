import{k,r as i,e as a,d as u,j as s}from"./main-642.js";import{$ as j,i as p,h as g,e as w,E as b,k as F,s as W}from"./bi.77.82.js";import h from"./bi.395.243.js";import{W as E}from"./bi.839.725.js";import"./bi.801.726.js";function $({allIntegURL:n}){const{formID:r}=k(),[c,o]=i.useState({show:!1}),[d,m]=i.useState(!1),[e,f]=a(j),l=u(p),[t,x]=a(g);return s.jsxs("div",{style:{width:900},children:[s.jsx(w,{snack:c,setSnackbar:o}),e.triggered_entity!=="Webhook"?s.jsx(b,{setSnackbar:o}):s.jsx(F,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(h,{formID:r,formFields:l,webHooks:t,setWebHooks:x,setSnackbar:o})}),s.jsx(E,{edit:!0,saveConfig:()=>W({flow:e,setFlow:f,allIntegURL:n,conf:t,edit:1,setIsLoading:m,setSnackbar:o}),isLoading:d}),s.jsx("br",{})]})}export{$ as default};
