var F=Object.defineProperty;var k=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var v=(a,t,s)=>t in a?F(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,S=(a,t)=>{for(var s in t||(t={}))P.call(t,s)&&v(a,s,t[s]);if(k)for(var s of k(t))w.call(t,s)&&v(a,s,t[s]);return a};import{u as D,r as n,j as r}from"./main-642.js";import{e as q,_ as L,I as T,F as E,d as i}from"./bi.77.82.js";import{S as M}from"./bi.164.918.js";import z from"./bi.826.309.js";import{h as A,c as j}from"./bi.485.866.js";import{C as B}from"./bi.618.867.js";import"./bi.986.742.js";function W({formFields:a,setFlow:t,flow:s,allIntegURL:u}){const m=D(),[y,f]=n.useState(!1),[g,b]=n.useState({}),[o,h]=n.useState(1),[C,p]=n.useState({show:!1}),N=[{key:"name",label:"Name",required:!0},{key:"description",label:"Description",required:!1},{key:"start_date",label:"Start Date",required:!1},{key:"due_date",label:"Due Date",required:!1}],[e,c]=n.useState({name:"Clickup",type:"Clickup",api_key:"",field_map:[{formField:"",clickupFormField:""}],actionName:"",taskFields:N,actions:{}}),_=()=>{f(!0),E(s,t,u,e,m,"","",f).then(d=>{var x;d.success?(i.success((x=d.data)==null?void 0:x.msg),m(u)):i.error(d.data||d)})},I=l=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!j(e)){i.error("Please map mandatory fields");return}if(e.actionName==="task"){if(!e.selectedTeam){i.error("Please select a team");return}if(!e.selectedSpace){i.error("Please select a space");return}if(!e.selectedFolder){i.error("Please select a folder");return}if(!e.selectedList){i.error("Please select a list");return}}e.field_map.length>0&&h(l)};return r.jsxs("div",{children:[r.jsx(q,{snack:C,setSnackbar:p}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(M,{step:3,active:o})}),r.jsx(z,{clickupConf:e,setClickupConf:c,step:o,setStep:h,loading:g,setLoading:b,setSnackbar:p}),r.jsxs("div",{className:"btcd-stp-page",style:S({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(B,{formFields:a,handleInput:l=>A(l,e,c),clickupConf:e,setClickupConf:c,loading:g,setLoading:b,setSnackbar:p}),(e==null?void 0:e.actionName)&&r.jsxs("button",{onClick:()=>I(3),disabled:!j(e),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[L("Next","bit-integrations")," "," ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&r.jsx(T,{step:o,saveConfig:()=>_(),isLoading:y,dataConf:e,setDataConf:c,formFields:a})]})}export{W as default};
