var C=Object.defineProperty;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var v=(s,t,e)=>t in s?C(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,S=(s,t)=>{for(var e in t||(t={}))N.call(t,e)&&v(s,e,t[e]);if(b)for(var e of b(t))w.call(t,e)&&v(s,e,t[e]);return s};import{u as E,r as o,j as a}from"./main-642.js";import{e as I,_ as L,I as T,F as K,d}from"./bi.77.82.js";import{S as P}from"./bi.164.918.js";import q from"./bi.453.286.js";import{c as z}from"./bi.110.823.js";import{M as A}from"./bi.976.824.js";import"./bi.986.742.js";import"./bi.838.689.js";import"./bi.735.690.js";function X({formFields:s,setFlow:t,flow:e,allIntegURL:m}){const p=E(),[y,u]=o.useState(!1),[f,g]=o.useState({auth:!1,customFields:!1,lists:!1}),[n,j]=o.useState(1),[M,c]=o.useState({show:!1}),k=[{key:"Email",label:"Email",required:!0}],[i,l]=o.useState({name:"Mailjet",type:"Mailjet",apiKey:"",secretKey:"",field_map:[{formField:"",mailjetFormField:""}],staticFields:k,lists:[],customFields:[],selectedLists:"",groups:[],actions:{}}),F=()=>{u(!0),K(e,t,m,i,p,"","",u).then(r=>{var h;r.success?(d.success((h=r.data)==null?void 0:h.msg),p(m)):d.error(r.data||r)})},_=x=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!z(i)){d.error("Please map mandatory fields");return}i.field_map.length>0&&j(x)};return a.jsxs("div",{children:[a.jsx(I,{snack:M,setSnackbar:c}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(P,{step:3,active:n})}),a.jsx(q,{mailjetConf:i,setMailjetConf:l,step:n,setStep:j,loading:f,setLoading:g,setSnackbar:c}),a.jsxs("div",{className:"btcd-stp-page",style:S({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(A,{formFields:s,mailjetConf:i,setMailjetConf:l,loading:f,setLoading:g,setSnackbar:c}),a.jsxs("button",{onClick:()=>_(3),disabled:!(i!=null&&i.selectedLists),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[L("Next","bit-integrations")," "," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(T,{step:n,saveConfig:()=>F(),isLoading:y,dataConf:i,setDataConf:l,formFields:s})]})}export{X as default};
