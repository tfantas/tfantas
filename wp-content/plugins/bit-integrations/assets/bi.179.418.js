var F=Object.defineProperty;var h=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var S=(a,e,s)=>e in a?F(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,_=(a,e)=>{for(var s in e||(e={}))G.call(e,s)&&S(a,s,e[s]);if(h)for(var s of h(e))L.call(e,s)&&S(a,s,e[s]);return a};import{u as w,r,j as t}from"./main-642.js";import{e as E,_ as I,I as P,F as A,d as c}from"./bi.77.82.js";import{S as T}from"./bi.164.918.js";import M from"./bi.293.287.js";import{c as x}from"./bi.446.825.js";import{S as z}from"./bi.278.826.js";import"./bi.986.742.js";import"./bi.838.689.js";import"./bi.735.690.js";function V({formFields:a,setFlow:e,flow:s,allIntegURL:u}){const m=w(),[q,f]=r.useState(!1),[p,b]=r.useState({auth:!1,customFields:!1,lists:!1}),[l,g]=r.useState(1),[v,o]=r.useState({show:!1}),j=[{key:"email",label:"Email",required:!0},{key:"first_name",label:"First Name",required:!1},{key:"last_name",label:"Last Name",required:!1},{key:"alternate_emails",label:"Alternate Emails",required:!1},{key:"address_line_1",label:"Address Line 1",required:!1},{key:"address_line_2",label:"Address Line 2",required:!1},{key:"city",label:"City",required:!1},{key:"state_province_region",label:"State Province Region",required:!1},{key:"postal_code",label:"Postal Code",required:!1},{key:"country",label:"Country",required:!1},{key:"phone_number",label:"Phone Number",required:!1},{key:"whatsapp",label:"Whatsapp",required:!1},{key:"line",label:"Line",required:!1},{key:"facebook",label:"Facebook",required:!1},{key:"unique_name",label:"Unique Name",required:!1}],[i,d]=r.useState({name:"SendGrid",type:"SendGrid",apiKey:"",field_map:[{formField:"",sendGridFormField:""}],staticFields:j,lists:[],customFields:[],selectedLists:"",groups:[],actions:{}}),C=()=>{f(!0),A(s,e,u,i,m,"","",f).then(n=>{var k;n.success?(c.success((k=n.data)==null?void 0:k.msg),m(u)):c.error(n.data||n)})},N=y=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!x(i)){c.error("Please map mandatory fields");return}i.field_map.length>0&&g(y)};return t.jsxs("div",{children:[t.jsx(E,{snack:v,setSnackbar:o}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(T,{step:3,active:l})}),t.jsx(M,{sendGridConf:i,setSendGridConf:d,step:l,setStep:g,loading:p,setLoading:b,setSnackbar:o}),t.jsxs("div",{className:"btcd-stp-page",style:_({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[t.jsx(z,{formFields:a,sendGridConf:i,setSendGridConf:d,loading:p,setLoading:b,setSnackbar:o}),t.jsxs("button",{onClick:()=>N(3),disabled:!x(i),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[I("Next","bit-integrations")," "," ",t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(P,{step:l,saveConfig:()=>C(),isLoading:q,dataConf:i,setDataConf:d,formFields:a})]})}export{V as default};
