var N=Object.defineProperty;var y=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var S=(s,e,t)=>e in s?N(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,v=(s,e)=>{for(var t in e||(e={}))F.call(e,t)&&S(s,t,e[t]);if(y)for(var t of y(e))E.call(e,t)&&S(s,t,e[t]);return s};import{u as L,r as n,j as a}from"./main-642.js";import{e as T,_ as q,I as B,F as M,d as m}from"./bi.77.82.js";import{S as P}from"./bi.164.918.js";import z from"./bi.974.291.js";import{h as A,c as j}from"./bi.357.832.js";import{S as D}from"./bi.508.833.js";import"./bi.986.742.js";function W({formFields:s,setFlow:e,flow:t,allIntegURL:p}){const u=L(),[_,f]=n.useState(!1),[g,h]=n.useState({auth:!1}),[o,b]=n.useState(1),[k,d]=n.useState({show:!1}),C=[{key:"email",label:"Email",required:!0},{key:"birthday",label:"Birthday",required:!1}],[i,r]=n.useState({name:"Smaily",type:"Smaily",subdomain:"",api_user_name:"",api_user_password:"",field_map:[{formField:"",smailyFormField:""}],staticFields:C,actions:{}}),I=()=>{f(!0),M(t,e,p,i,u,"","",f).then(c=>{var x;c.success?(m.success((x=c.data)==null?void 0:x.msg),u(p)):m.error(c.data||c)})},w=l=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!j(i)){m.error("Please map mandatory fields");return}i.field_map.length>0&&b(l)};return a.jsxs("div",{children:[a.jsx(T,{snack:k,setSnackbar:d}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(P,{step:3,active:o})}),a.jsx(z,{smailyConf:i,setSmailyConf:r,step:o,setStep:b,loading:g,setLoading:h,setSnackbar:d}),a.jsxs("div",{className:"btcd-stp-page",style:v({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(D,{formFields:s,handleInput:l=>A(l,i,r),smailyConf:i,setSmailyConf:r,loading:g,setLoading:h,setSnackbar:d}),a.jsxs("button",{onClick:()=>w(3),disabled:!j(i),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[q("Next","bit-integrations")," "," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(B,{step:o,saveConfig:()=>I(),isLoading:_,dataConf:i,setDataConf:r,formFields:s})]})}export{W as default};
