import{r as h,j as e}from"./main-642.js";import{B as N}from"./bi.801.726.js";import{_ as a,L as k,c as y,B as v}from"./bi.77.82.js";import{a as w,b as z}from"./bi.814.865.js";import{T as m,t as A}from"./bi.986.742.js";function I({formID:L,mailMintConf:n,setMailMintConf:r,step:c,setStep:d,isLoading:l,setIsLoading:i,setSnackbar:b}){const[o,g]=h.useState(!1),[p,x]=h.useState(!1),{mailMint:t}=A,f=()=>{i("auth"),y({},"mailmint_authorize").then(s=>{s!=null&&s.success&&(g(!0),b({show:!0,msg:a("Connected with Mail Mint Successfully","bit-integrations")})),i(!1),x(!0),w(n,r,i),z(n,r,i)})},j=s=>{const u=v(n);u[s.target.name]=s.target.value,r(u)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:c===1&&900,height:c===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(m,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(m,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:n.name,type:"text",placeholder:a("Integration Name...","bit-integrations")}),l==="auth"&&e.jsxs("div",{className:"flx mt-5",children:[e.jsx(k,{size:25,clr:"#022217",className:"mr-2"}),"Checking if Mail Mint is active!!!"]}),p&&!o&&!l&&e.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[e.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"Mail Mint plugin must be activated to integrate with Bit Integrations."]}),!o&&e.jsx("button",{onClick:f,className:"btn btcd-btn-lg green sh-sm flx mt-5",type:"button",children:a("Connect","bit-integrations")}),o&&e.jsxs("button",{onClick:()=>d(2),className:"btn btcd-btn-lg green sh-sm flx mt-5",type:"button",disabled:!o,children:[a("Next","bit-integrations"),e.jsx(N,{className:"ml-1 rev-icn"})]})]})}export{I as default};
