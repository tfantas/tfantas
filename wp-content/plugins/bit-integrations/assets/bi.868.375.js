import{u as j,k as b,r,j as t}from"./main-642.js";import{e as A,_ as S,I as k,s as C}from"./bi.77.82.js";import{B as I}from"./bi.801.726.js";import{S as v}from"./bi.164.918.js";import N from"./bi.380.231.js";import{A as _,g as y,c as w}from"./bi.469.735.js";import"./bi.986.742.js";import"./bi.838.689.js";import"./bi.735.690.js";function z({formFields:m,setFlow:d,flow:f,allIntegURL:g}){const x=j(),{formID:c}=b(),[l,n]=r.useState(!1),[s,p]=r.useState(1),[h,a]=r.useState({show:!1}),[e,i]=r.useState({name:"Autonami",type:"Autonami",field_map:[{formField:"",autonamiField:""}],actions:{}}),u=o=>{if(o==2&&e.name!=="")y(e,i,n,a),p(o);else if(o==3){if(!w(e)){a({show:!0,msg:"Please map all required fields to continue."});return}e.field_map.length>0&&p(o)}document.getElementById("btcd-settings-wrp").scrollTop=0};return t.jsxs("div",{children:[t.jsx(A,{snack:h,setSnackbar:a}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(v,{step:3,active:s})}),t.jsx(N,{formID:c,autonamiConf:e,setAutonamiConf:i,step:s,nextPage:u,isLoading:l,setIsLoading:n,setSnackbar:a}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto",minHeight:s===2&&"200px"},children:[t.jsx(_,{formID:c,formFields:m,autonamiConf:e,setAutonamiConf:i,setIsLoading:n,setSnackbar:a}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>u(3),disabled:e.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[S("Next","bit-integrations"),t.jsx(I,{className:"ml-1 rev-icn"})]})]}),t.jsx(k,{step:s,saveConfig:()=>C({flow:f,setFlow:d,allIntegURL:g,conf:e,navigate:x,setIsLoading:n,setSnackbar:a}),isLoading:l,dataConf:e,setDataConf:i,formFields:m})]})}export{z as default};
