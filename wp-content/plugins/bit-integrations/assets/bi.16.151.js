import{u as S,e as m,r as p,d as v,j as t}from"./main-642.js";import{$ as y,h as N,i as _,e as k,_ as l,j as g,E as F,k as w,I as E,d as $,s as L}from"./bi.77.82.js";import{h as u,c as M}from"./bi.365.795.js";import{S as R}from"./bi.817.796.js";import"./bi.838.689.js";import"./bi.735.690.js";function B({allIntegURL:x}){const h=S(),[s,A]=m(y),[e,i]=m(N),[o,r]=p.useState(!1),[f,n]=p.useState({show:!1}),c=v(_),j=["contact-create","lead-create","account-create","campaign-create","opportunity-create","event-create","case-create"].includes(e==null?void 0:e.actionName),b=()=>{if(j&&!M(e)){$.error("Please map mandatory fields !");return}L({flow:s,allIntegURL:x,conf:e,navigate:h,edit:1,setIsLoading:r,setSnackbar:n})},I=()=>{var a,d;if((e==null?void 0:e.actionName)==="opportunity-create")return!((a=e.actions)!=null&&a.opportunityStageId);if((e==null?void 0:e.actionName)==="event-create")return!((d=e.actions)!=null&&d.eventSubjectId);if((e==null?void 0:e.actionName)==="add-campaign-member")return!e.campaignId};return t.jsxs("div",{style:{width:900},children:[t.jsx(k,{snack:f,setSnackbar:n}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:a=>u(a,e,i),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!g(s.triggered_entity)&&t.jsx(F,{setSnackbar:n}),g(s.triggered_entity)&&t.jsx(w,{setSnackbar:n}),t.jsx(R,{formFields:c,handleInput:a=>u(a,e,i),salesforceConf:e,setSalesforceConf:i,isLoading:o,setIsLoading:r,setSnackbar:n}),t.jsx(E,{edit:!0,saveConfig:b,disabled:I()||o,isLoading:o,dataConf:e,setDataConf:i,formFields:c}),t.jsx("br",{})]})}export{B as default};
