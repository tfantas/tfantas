var E=Object.defineProperty,K=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var A=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))L.call(t,o)&&A(e,o,t[o]);if(I)for(var o of I(t))N.call(t,o)&&A(e,o,t[o]);return e},k=(e,t)=>K(e,v(t));var b=(e,t,o)=>new Promise((h,n)=>{var u=r=>{try{c(o.next(r))}catch(s){n(s)}},p=r=>{try{c(o.throw(r))}catch(s){n(s)}},c=r=>r.done?h(r.value):Promise.resolve(r.value).then(u,p);c((o=o.apply(e,t)).next())});import{r as x,j as i}from"./main-642.js";import{S as w,I as g,E as y,G as S,A as G}from"./bi.17.917.js";import{N as B}from"./bi.77.82.js";import{h as f,d as F,b as R}from"./bi.874.800.js";import{T as j,t as _}from"./bi.986.742.js";function Q({selzyConf:e,setSelzyConf:t,step:o,setStep:h,loading:n,setLoading:u,isInfo:p}){const[c,r]=x.useState(!1),[s,m]=x.useState({name:"",authKey:""}),{selzy:a}=_,P=()=>b(this,null,function*(){setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),h(2),u(k(d({},n),{page:!0})),(yield R(e,t))&&u(k(d({},n),{page:!1}))}),T=`
  <h4> Step of get API Key:</h4>
  <ul>
    <li>Goto Settings and click on <a href="https://cp.selzy.com/en/v5/user/info/api" target='_blank'>Integration and API.</a></li>
    <li>API access section API key click show full.</li>
    <li>Enter your password and click send</li>
    <li>Copy the <b>API Key</b> and paste into <b>API Key</b> field of your authorization form.</li>
    <li>Finally, click <b>Authorize</b> button.</li>
</ul>
`;return i.jsxs(w,{step:o,stepNo:1,style:{width:900,height:"auto"},children:[(a==null?void 0:a.youTubeLink)&&i.jsx(j,{title:a==null?void 0:a.title,youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&i.jsx(j,{title:a==null?void 0:a.title,docLink:a==null?void 0:a.docLink}),i.jsxs("div",{className:"mt-2",children:[i.jsx(g,{label:"Integration Name",name:"name",placeholder:"Integration Name...",value:e.name,onchange:l=>f(l,e,t,s,m)}),i.jsx(g,{label:"API key",name:"authKey",placeholder:"API key...",value:e.authKey,onchange:l=>f(l,e,t,s,m)}),i.jsx(y,{error:s.authKey}),i.jsx(S,{url:"https://cp.selzy.com/en/v5/user/info/api",info:"To get API key, please visit"}),!p&&i.jsx(G,{onclick:()=>F(e,t,m,r,n,u),nextPage:P,auth:c,loading:n.auth})]}),i.jsx(B,{note:T})]})}export{Q as default};
