import{u as j,k as u,r as a,e as i,d as p,j as s}from"./main-642.js";import{$ as b,i as h,h as w,e as I,j as n,E,k as v,s as y}from"./bi.77.82.js";import W from"./bi.395.243.js";import{W as _}from"./bi.839.725.js";import"./bi.801.726.js";function L({allIntegURL:r}){const c=j(),{id:F,formID:d}=u(),[g,l]=a.useState(!1),[t,m]=i(b),f=p(h),[o,x]=i(w),[k,e]=a.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(I,{snack:k,setSnackbar:e}),!n(t.triggered_entity)&&s.jsx(E,{setSnackbar:e}),n(t.triggered_entity)&&s.jsx(v,{setSnackbar:e}),s.jsx("div",{className:"mt-3",children:s.jsx(W,{formID:d,formFields:f,webHooks:o,setWebHooks:x,setSnackbar:e})}),s.jsx(_,{edit:!0,saveConfig:()=>y({flow:t,setFlow:m,allIntegURL:r,conf:o,navigate:c,edit:1,setIsLoading:l,setSnackbar:e}),isLoading:g}),s.jsx("br",{})]})}export{L as default};
