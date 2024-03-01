var K=Object.defineProperty;var y=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var A=(o,n,s)=>n in o?K(o,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[n]=s,c=(o,n)=>{for(var s in n||(n={}))E.call(n,s)&&A(o,s,n[s]);if(y)for(var s of y(n))L.call(n,s)&&A(o,s,n[s]);return o};import{r as p,j as t}from"./main-642.js";import{B as C}from"./bi.801.726.js";import{_ as i,L as N,N as B,c as D}from"./bi.77.82.js";import{r as F}from"./bi.144.872.js";import{T as f,t as P}from"./bi.986.742.js";function J({formID:o,dripConf:n,setDripConf:s,step:x,setstep:T,setSnackbar:g,isInfo:h,isLoading:l,setIsLoading:u}){const{drip:e}=P,[m,_]=p.useState(!1),[b,k]=p.useState({name:"",api_token:""}),[v,z]=p.useState(!1),w=()=>{const a=c({},n);if(!a.name||!a.api_token){k({name:a.name?"":i("Integration name cann't be empty","bit-integrations"),api_token:a.api_token?"":i("Access Api Token Key cann't be empty","bit-integrations")});return}u("auth");const d={api_token:a.api_token};D(d,"drip_authorize").then(r=>{r!=null&&r.success&&(_(!0),a.account_id=r.data.accounts[0].id,g({show:!0,msg:i("Authorized Successfully","bit-integrations")})),s(c({},a)),z(!0),u(!1)})},j=a=>{const d=c({},n),r=c({},b);r[a.target.name]="",d[a.target.name]=a.target.value,k(r),s(d)},S=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),F(n,s,u,g),T(2)},I=`
            <h4>Get client id and Api Token key</h4>
            <ul>
                <li>First go to your Drip dashboard.</li>
                <li>Click "Integrations", Then click "Api Keys"</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:x===1&&900,height:x===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(f,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(f,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3 wdt-200",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:n.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:h}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.name}),t.jsx("div",{className:"mt-3 wdt-250",children:t.jsx("b",{children:i("Access Api Token Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"api_token",value:n.api_token,type:"text",placeholder:i("Access Api Token Key...","bit-integrations"),disabled:h}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.api_token}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To Get Client Id and Api Token Key, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.directiq.com/integrations/apikeys",target:"_blank",rel:"noreferrer",children:i("Drip API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),l==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(N,{size:25,clr:"#022217",className:"mr-2"}),"Checking Api Token Key!!!"]}),v&&!m&&!l&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"Sorry, Api Token key is invalid"]}),!h&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:w,className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:m||l,children:[m?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),l&&t.jsx(N,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>S(),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!m,children:[i("Next","bit-integrations"),t.jsx(C,{className:"ml-1 rev-icn"})]})]}),t.jsx(B,{note:I})]})}export{J as default};
