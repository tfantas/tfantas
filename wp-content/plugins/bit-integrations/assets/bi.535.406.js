import{u as C,k as _,r as n,j as t}from"./main-642.js";import{e as k,_ as x,I as j,s as q}from"./bi.77.82.js";import{B as v}from"./bi.801.726.js";import{S as N}from"./bi.164.918.js";import S from"./bi.930.275.js";import{s as I,h as w,d as F,e as B}from"./bi.457.802.js";import{C as E}from"./bi.619.803.js";import"./bi.986.742.js";import"./bi.838.689.js";import"./bi.735.690.js";function H({formFields:d,setFlow:m,flow:u,allIntegURL:p}){const f=C(),{id:h}=_(),[i,l]=n.useState({auth:!1,list:!1,tag:!1,update:!1}),[a,c]=n.useState(1),[y,s]=n.useState({show:!1}),b=[{key:"email_address",label:"Email",required:!0},{key:"first_name",label:"First Name",required:!1},{key:"last_name",label:"Last Name",required:!1},{key:"job_title",label:"Job Title",required:!1},{key:"company_name",label:"Company Name",required:!1},{key:"phone_number",label:"Phone Number",required:!1},{key:"anniversary",label:"Anniversary",required:!1},{key:"birthday_month",label:"Birthday Month",required:!1},{key:"birthday_day",label:"Birthday Day",required:!1}],[e,r]=n.useState({name:"ConstantContact",type:"ConstantContact",clientId:"",clientSecret:"",list_ids:"",lists:[],default:{constantContactFields:b},source_type:"",tag_ids:"",tags:[],field_map:[{formField:"",constantContactFormField:""}],address_type:"",address_field:[],phone_type:"",phone_field:[],actions:{}});n.useEffect(()=>{window.opener&&I("constantContact")},[]);const g=()=>{var o;if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),(o=e.actions)!=null&&o.address&&!F(e)){s({show:!0,msg:"Please map address required fields to continue."});return}if(!B(e)){s({show:!0,msg:"Please map fields to continue."});return}c(3)};return t.jsxs("div",{children:[t.jsx(k,{snack:y,setSnackbar:s}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(N,{step:3,active:a})}),t.jsx(S,{constantContactConf:e,setConstantContactConf:r,step:a,setstep:c,isLoading:i,setIsLoading:l,setSnackbar:s}),t.jsxs("div",{className:"btcd-stp-page",style:{width:a===2&&900,height:a===2&&"auto"},children:[t.jsx(E,{id:h,formFields:d,handleInput:o=>w(o,e,r),constantContactConf:e,setConstantContactConf:r,isLoading:i,setIsLoading:l,setSnackbar:s}),t.jsxs("button",{onClick:()=>g(),disabled:(e==null?void 0:e.source_type)===""||e.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[x("Next","bit-integrations"),t.jsx(v,{className:"ml-1 rev-icn"})]})]}),t.jsx(j,{step:a,saveConfig:()=>q({flow:u,setFlow:m,allIntegURL:p,navigate:f,conf:e,setIsLoading:l,setSnackbar:s}),isLoading:i===!0,dataConf:e,setDataConf:r,formFields:d})]})}export{H as default};