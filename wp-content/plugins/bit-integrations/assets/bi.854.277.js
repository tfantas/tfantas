var P=Object.defineProperty;var g=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var k=(s,a,n)=>a in s?P(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,c=(s,a)=>{for(var n in a||(a={}))z.call(a,n)&&k(s,n,a[n]);if(g)for(var n of g(a))I.call(a,n)&&k(s,n,a[n]);return s};import{r as j,j as t}from"./main-642.js";import{_ as i,L,N as _}from"./bi.77.82.js";import{j as w}from"./bi.385.804.js";import{T as p,t as E}from"./bi.986.742.js";function R({pipeDriveConf:s,setPipeDriveConf:a,step:n,setstep:y,isLoading:d,setIsLoading:N,isInfo:o}){const[r,A]=j.useState(!1),[b,m]=j.useState({name:"",api_key:""}),{pipeDrive:e}=E,T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),y(2)},u=l=>{const h=c({},s),x=c({},b);x[l.target.name]="",h[l.target.name]=l.target.value,m(x),a(h)},f=`
    <h4> Step of generate API token:</h4>
    <ul>
      <li>Goto <a href="https://app.pipedrive.com/settings/api">Generate API Token</a></li>
      <li>Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.</li>
      <li>Finally, click <b>Authorize</b> button.</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(p,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(p,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"name",value:s.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"api_key",value:s.api_key,type:"text",placeholder:i("API Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To Get API token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.pipedrive.com/settings/api",target:"_blank",rel:"noreferrer",children:i("PipeDrive API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>w(s,m,A,N),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:r||d,children:[r?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),d&&t.jsx(L,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:T,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!r,children:[i("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(_,{note:f})]})}export{R as default};
