var L=Object.defineProperty;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(n,s,i)=>s in n?L(n,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[s]=i,c=(n,s)=>{for(var i in s||(s={}))T.call(s,i)&&j(n,i,s[i]);if(g)for(var i of g(s))_.call(s,i)&&j(n,i,s[i]);return n};import{r as k,j as t}from"./main-642.js";import{_ as r,L as z}from"./bi.77.82.js";import{e as I}from"./bi.851.829.js";import{T as N,t as w}from"./bi.986.742.js";function G({emailOctopusConf:n,setEmailOctopusConf:s,step:i,setStep:y,loading:a,setLoading:p,isInfo:o}){const[d,v]=k.useState(!1),[b,h]=k.useState({name:"",auth_token:""}),{emailOctopus:e}=w,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),n!=null&&n.default,y(2)},x=l=>{const m=c({},n),u=c({},b);u[l.target.name]="",m[l.target.name]=l.target.value,h(u),s(m)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(N,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(N,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:x,name:"name",value:n.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:x,name:"auth_token",value:n.auth_token,type:"text",placeholder:r("API Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.auth_token}),t.jsxs("small",{className:"d-blk mt-3",children:[r("To Get API key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://emailoctopus.com/api-documentation",target:"_blank",rel:"noreferrer",children:r("EmailOctopus API keys","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>I(n,s,h,v,a,p,"authentication"),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:d||a.auth,children:[d?r("Authorized ✔","bit-integrations"):r("Authorize","bit-integrations"),a.auth&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!d,children:[r("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{G as default};
