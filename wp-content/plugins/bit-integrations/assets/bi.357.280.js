import{r as h,j as a}from"./main-642.js";import{B as y}from"./bi.801.726.js";import{_ as n,L as N,c as k,B as v}from"./bi.77.82.js";import{a as w,p as z}from"./bi.546.811.js";import{T as d,t as S}from"./bi.986.742.js";function C({formID:A,memberpressConf:e,setMemberpressConf:c,step:l,setStep:x,isLoading:u,setIsLoading:s,setSnackbar:g}){const[o,m]=h.useState(!1),[b,f]=h.useState(!1),{memberpress:t}=S,j=()=>{s("auth"),k({},"memberpress_authorize").then(i=>{i!=null&&i.success&&(m(!0),g({show:!0,msg:n("Connected with Memberpress Successfully","bit-integrations")})),s(!1),f(!0),w(e,c,s),z(e,c,s)})},p=i=>{const r=v(e);r[i.target.name]=i.target.value,c(r)};return a.jsxs("div",{className:"btcd-stp-page",style:{width:l===1&&900,height:l===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&a.jsx(d,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&a.jsx(d,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),a.jsx("div",{className:"mt-3",children:a.jsx("b",{children:n("Integration Name:","bit-integrations")})}),a.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")}),u==="auth"&&a.jsxs("div",{className:"flx mt-5",children:[a.jsx(N,{size:25,clr:"#022217",className:"mr-2"}),"Checking if Memberpress is active!!!"]}),b&&!o&&!u&&a.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[a.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"Memberpress plugin must be activated to integrate with Bit Integrations."]}),!o&&a.jsx("button",{onClick:j,className:"btn btcd-btn-lg green sh-sm flx mt-5",type:"button",children:n("Connect","bit-integrations")}),o&&a.jsxs("button",{onClick:()=>x(2),className:"btn btcd-btn-lg green sh-sm flx mt-5",type:"button",disabled:!o,children:[n("Next","bit-integrations"),a.jsx(y,{className:"ml-1 rev-icn"})]})]})}export{C as default};
