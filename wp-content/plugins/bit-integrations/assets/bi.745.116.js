import{k as x,r as a,e as i,d as k,j as s}from"./main-642.js";import{$ as j,i as p,h as g,e as u,E as w,k as h,s as E}from"./bi.77.82.js";import W from"./bi.395.243.js";import{W as y}from"./bi.839.725.js";import"./bi.801.726.js";function H({allIntegURL:n}){const{formID:r}=x(),[c,o]=a.useState({show:!1}),[d,l]=a.useState(!1),[e,m]=i(j),f=k(p),[t,b]=i(g);return s.jsxs("div",{style:{width:900},children:[s.jsx(u,{snack:c,setSnackbar:o}),e.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(h,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(W,{formID:r,formFields:f,webHooks:t,setWebHooks:b,setSnackbar:o})}),s.jsx(y,{edit:!0,saveConfig:()=>E({flow:e,setFlow:m,allIntegURL:n,conf:t,edit:1,setIsLoading:l,setSnackbar:o}),isLoading:d}),s.jsx("br",{})]})}export{H as default};
