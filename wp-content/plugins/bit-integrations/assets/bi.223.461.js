import{u as S,k as v,r as o,j as t}from"./main-642.js";import{e as n,F as u}from"./bi.77.82.js";import{S as T}from"./bi.164.918.js";import k from"./bi.395.243.js";import{W as w}from"./bi.839.725.js";import{T as r,t as H}from"./bi.986.742.js";import"./bi.801.726.js";function D({formFields:c,setFlow:p,flow:d,allIntegURL:l}){const m=S(),{formID:x}=v(),[s,f]=o.useState(1),[g,a]=o.useState({show:!1}),[h,j]=o.useState(!1),{uncannyAutomatorLinks:e}=H,[i,b]=o.useState({name:"UncannyAutomator Web Hooks",type:"UncannyAutomator",method:"POST",url:""});return t.jsxs("div",{children:[t.jsx(n,{snack:g,setSnackbar:a}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(T,{step:2,active:s})}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(r,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(r,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx(k,{formID:x,formFields:c,webHooks:i,setWebHooks:b,step:s,setStep:f,setSnackbar:a,create:!0})]}),t.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:t.jsx(w,{step:s,saveConfig:()=>u(d,p,l,i,m,"","",j),isLoading:h})})]})}export{D as default};