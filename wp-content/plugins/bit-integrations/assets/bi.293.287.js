var L=Object.defineProperty;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var j=(a,s,i)=>s in a?L(a,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[s]=i,m=(a,s)=>{for(var i in s||(s={}))T.call(s,i)&&j(a,i,s[i]);if(g)for(var i of g(s))z.call(s,i)&&j(a,i,s[i]);return a};import{r as y,j as t}from"./main-642.js";import{_ as n,L as K}from"./bi.77.82.js";import{s as w}from"./bi.446.825.js";import{T as d,t as I}from"./bi.986.742.js";function B({sendGridConf:a,setSendGridConf:s,step:i,setStep:k,loading:r,setLoading:N,isInfo:l}){const[o,v]=y.useState(!1),[b,u]=y.useState({name:"",secretKey:""}),{sendGrid:e}=I,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),a!=null&&a.default,k(2)},p=c=>{const h=m({},a),x=m({},b);x[c.target.name]="",h[c.target.name]=c.target.value,u(x),s(h)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(d,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(d,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:a.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"apiKey",value:a.apiKey,type:"text",placeholder:n("Your Api Key","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",style:{color:"red",fontSize:"15px"},children:b.apiKey}),t.jsxs("small",{className:"d-blk mt-3",children:[n("To Get API key & Secret Key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.sendgrid.com/settings/api_keys",target:"_blank",rel:"noreferrer",children:n("SendGrid API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!l&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>w(a,s,u,v,r,N,"authentication"),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:o||r.auth,children:[o?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),r.auth&&t.jsx(K,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!o,children:[n("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{B as default};
