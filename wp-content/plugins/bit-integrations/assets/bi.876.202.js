import{u as b,e as f,r as o,d as F,j as t}from"./main-642.js";import{$ as I,h as _,i as k,e as C,_ as r,j as p,E as N,k as S,I as E,X as l,s as v}from"./bi.77.82.js";import{h as u,c as m}from"./bi.756.892.js";import{F as P}from"./bi.591.893.js";function T({allIntegURL:g}){b();const[a,L]=f(I),[e,n]=f(_),[x,c]=o.useState(!1),[h,j]=o.useState({}),[y,s]=o.useState({show:!1}),d=F(k),w=()=>{if(!m(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="account"&&!e.selectedAccountType){l.error("Please select an Account Type");return}if(e.actionName==="opportunity"){if(!e.selectedPipeline){l.error("Please select a Opportunity Pipeline");return}if(!e.selectedOpportunityStage){l.error("Please select a Opportunity Stage");return}}v({flow:a,allIntegURL:g,conf:e,history,edit:1,setIsLoading:c,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:y,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>u(i,e,n),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!p(a.triggered_entity)&&t.jsx(N,{setSnackbar:s}),p(a.triggered_entity)&&t.jsx(S,{setSnackbar:s}),t.jsx(P,{formID:a.triggered_entity_id,formFields:d,handleInput:i=>u(i,e,n),flowluConf:e,setFlowluConf:n,loading:h,setLoading:j,setIsLoading:c,setSnackbar:s}),t.jsx(E,{edit:!0,saveConfig:w,disabled:!m(e),isLoading:x,dataConf:e,setDataConf:n,formFields:d}),t.jsx("br",{})]})}export{T as default};
