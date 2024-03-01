var _=Object.defineProperty;var j=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var x=(a,t,n)=>t in a?_(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,h=(a,t)=>{for(var n in t||(t={}))A.call(t,n)&&x(a,n,t[n]);if(j)for(var n of j(t))C.call(t,n)&&x(a,n,t[n]);return a};import{r as k,j as e}from"./main-642.js";import{_ as s,L}from"./bi.77.82.js";import{a as T,g as z}from"./bi.619.736.js";import{T as N,t as D}from"./bi.986.742.js";function B({flowID:a,dropboxConf:t,setDropboxConf:n,step:b,setStep:y,isLoading:u,setIsLoading:v,isInfo:c}){const[d,w]=k.useState(!1),[l,o]=k.useState({clientId:"",clientSecret:""}),{dropbox:i}=D,I=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),z(a,t,n),y(2)},r=m=>{const g=h({},t),p=h({},l);p[m.target.name]="",g[m.target.name]=m.target.value,o(p),n(g)},S=()=>{if(!t.clientId||!t.clientSecret){o({clientId:t.clientId?"":s("Client Id can't be empty","bit-integrations"),clientSecret:t.clientSecret?"":s("Client Secret can't be empty","bit-integrations")});return}window.open(`https://www.dropbox.com/oauth2/authorize?client_id=${t.clientId}&token_access_type=offline&response_type=code`,"_blank")};return e.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&e.jsx(N,{title:i==null?void 0:i.title,youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&e.jsx(N,{title:i==null?void 0:i.title,docLink:i==null?void 0:i.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"name",value:t.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:c}),e.jsxs("small",{className:"d-blk mt-3",children:[s("To Get Client Id & Secret, Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",rel:"noreferrer",target:"_blank",href:"https://www.dropbox.com/developers/apps/create?_tk=pilot_lp&_ad=ctabtn1&_camp=create",children:s("Dropbox API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Dropbox Client Id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"clientId",value:t.clientId,type:"text",placeholder:s("Client Id...","bit-integrations"),disabled:c}),e.jsx("div",{style:{color:"red"},children:l.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Dropbox Client Secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:s("Client Secret...","bit-integrations"),disabled:c}),e.jsx("div",{style:{color:"red"},children:l.clientSecret}),e.jsxs("small",{className:"d-blk mt-3",children:[s("To Get Access Code, Please Visit","bit-integrations")," ",e.jsx("span",{className:"btcd-link",style:{cursor:"pointer"},onClick:S,"aria-hidden":"true",children:s("Dropbox Access Code","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Dropbox Access Code:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"accessCode",value:t.accessCode,type:"text",placeholder:s("Access Code...","bit-integrations"),disabled:c}),e.jsx("div",{style:{color:"red"},children:l.accessCode}),!c&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>T(t,n,w,v,o),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:d||u,children:[d?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),u&&e.jsx(L,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:I,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!d,children:[s("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{B as default};
