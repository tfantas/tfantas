var v=Object.defineProperty;var g=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var k=(i,s,n)=>s in i?v(i,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[s]=n,d=(i,s)=>{for(var n in s||(s={}))w.call(s,n)&&k(i,n,s[n]);if(g)for(var n of g(s))z.call(s,n)&&k(i,n,s[n]);return i};import{r as h,j as t}from"./main-642.js";import{_ as a,L,N as P}from"./bi.77.82.js";import{g as I}from"./bi.781.852.js";import{T as j,t as E}from"./bi.986.742.js";function Y({freshSalesConf:i,setFreshSalesConf:s,step:n,setstep:y,isLoading:b,setIsLoading:A,isInfo:o}){const[r,N]=h.useState(!1),[l,m]=h.useState({name:"",api_key:""}),{freshSales:e}=E,T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),y(2)},u=c=>{const p=d({},i),x=d({},l);x[c.target.name]="",p[c.target.name]=c.target.value,m(x),s(p)},_=`
    <h4> Step of generate API token:</h4>
    <ul>
      <li>Goto <a href="https://www.myfreshworks.com/crm/sales/personal-settings/api-settings">Generate API Token</a></li>
      <li>Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.</li>
      <li>Finally, click <b>Authorize</b> button.</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(j,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(j,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Bundle Alias(Your Account URL):","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"bundle_alias",value:i.bundle_alias,type:"text",placeholder:a("Your Account Url...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.bundle_alias}),t.jsx("small",{className:"d-blk mt-3",children:a("Example: name.myfreshworks.com/crm/sales","bit-integrations")}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"api_key",value:i.api_key,type:"text",placeholder:a("API Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.api_key}),i.bundle_alias&&t.jsxs("small",{className:"d-blk mt-3",children:[a("To Get API token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:`https://${i.bundle_alias}/personal-settings/api-settings`,target:"_blank",rel:"noreferrer",children:a("FreshSales API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>I(i,m,N,A),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:r||b,children:[r?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),b&&t.jsx(L,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:T,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!r,children:[a("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(P,{note:_})]})}export{Y as default};
