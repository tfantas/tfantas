var T=Object.defineProperty;var b=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var p=(n,a,e)=>a in n?T(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e,d=(n,a)=>{for(var e in a||(a={}))F.call(a,e)&&p(n,e,a[e]);if(b)for(var e of b(a))V.call(a,e)&&p(n,e,a[e]);return n};import{g as E,u as I,r,j as s}from"./main-642.js";import{e as _,_ as c,L as $,F as M}from"./bi.77.82.js";import{S as B}from"./bi.164.918.js";import{c as P,C as z}from"./bi.11.831.js";import D from"./bi.853.290.js";import{T as x,t as H}from"./bi.986.742.js";function K(){const n=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];let a=[];for(let e=0;e<36;e++)e===8||e===13||e===18||e===23?a[e]="-":a[e]=n[Math.ceil(Math.random()*n.length-1)];return a.join("")}var R=K,q=E(R);const Y=({formFields:n,setFlow:a,flow:e,allIntegURL:f})=>{const h=I(),[l,v]=r.useState(1),[j,y]=r.useState(!1),[m,N]=r.useState({}),[k,C]=r.useState({show:!1}),L=q(),{customAction:t}=H,[i,u]=r.useState({name:"Custom Action",type:"CustomAction",randomFileName:L,defaultValue:`<?php if (!defined('ABSPATH')) {exit;} 
    
  function yourFunctionName($trigger){
    $trigger['yourKey'];
    //write here your custom function
  }  
  yourFunctionName($trigger);`,value:""});r.useEffect(()=>{const o=d({},i);delete o.isValid,u(d({},o))},[i==null?void 0:i.value]);const S=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),v(2)},w=o=>{const g=d({},i);g[o.target.name]=o.target.value,u(g)};return s.jsxs("div",{children:[s.jsx(_,{snack:k,setSnackbar:C}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(B,{step:2,active:l})}),s.jsxs("div",{className:"btcd-stp-page",style:d({},l===1&&{width:"70%",height:"auto",overflow:"visible"}),children:[(t==null?void 0:t.youTubeLink)&&s.jsx(x,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(x,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),s.jsxs("div",{className:"d-flx my-3",children:[s.jsx("div",{className:"wdt-200 d-in-b mt-3",children:s.jsx("b",{children:c("Integration Name:","bit-integrations")})}),s.jsx("input",{className:"btcd-paper-inp mt-1",onChange:w,name:"name",value:i.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),s.jsx(D,{customActionConf:i,setCustomActionConf:u,formFields:n}),s.jsxs("button",{onClick:()=>P(i,u,N),disabled:!i.value,className:"btn f-left btcd-btn-lg green sh-sm flx mt-5",type:"button",children:[i!=null&&i.isValid?c("Validated ✔","bit-integrations"):c("Validated","bit-integrations"),(m==null?void 0:m.validate)&&s.jsx($,{size:"20",clr:"#022217",className:"ml-2"})]}),s.jsxs("button",{onClick:()=>S(),disabled:!i.isValid,className:"btn f-right btcd-btn-lg green sh-sm flx mt-5",type:"button",children:[c("Next","bit-integrations")," "," ",s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),s.jsx("div",{className:"btcd-stp-page",style:{width:l===2&&"100%",height:l===2&&"auto"},children:s.jsx(z,{step:l,saveConfig:()=>M(e,a,f,i,h,"","",y),isLoading:j})})]})};export{Y as default};
