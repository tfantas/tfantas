var I=Object.defineProperty;var k=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var b=(s,a,i)=>a in s?I(s,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[a]=i,d=(s,a)=>{for(var i in a||(a={}))L.call(a,i)&&b(s,i,a[i]);if(k)for(var i of k(a))_.call(a,i)&&b(s,i,a[i]);return s};import{r as j,j as t}from"./main-642.js";import{_ as r,L as P,N as w}from"./bi.77.82.js";import{n as z,g as E}from"./bi.154.896.js";import{T as y,t as S}from"./bi.986.742.js";function V({nimbleConf:s,setNimbleConf:a,step:i,setStep:N,loading:n,setLoading:u,isInfo:o}){const[c,T]=j.useState(!1),[h,p]=j.useState({api_key:""}),{nimble:e}=S,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),s!=null&&s.default,N(2),E(s,a,u)},x=l=>{const g=d({},s),m=d({},h);m[l.target.name]="",g[l.target.name]=l.target.value,p(m),a(g)},v=`
            <h4>To Get API Token</h4>
            <ul>
                <li>First go to your Nimble dashboard.</li>
                <li>Click go to "Settings"</li>
                <li>Then Click "API Tokens"</li>
                <li>Then Click "Generate New Token</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(y,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(y,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:x,name:"name",value:s.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:x,name:"api_key",value:s.api_key,type:"text",placeholder:r("API Key...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:h.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[r("To Get API Key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.nimble.com/#app/settings/tokens",target:"_blank",children:r("Nimble API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>z(s,a,p,T,n,u),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:c||n.auth,children:[c?r("Authorized ✔","bit-integrations"):r("Authorize","bit-integrations"),n.auth&&t.jsx(P,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!c,children:[r("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(w,{note:v})]})}export{V as default};
