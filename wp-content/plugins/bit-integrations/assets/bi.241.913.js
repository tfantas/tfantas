var S=Object.defineProperty;var g=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;var w=(l,e,s)=>e in l?S(l,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[e]=s,r=(l,e)=>{for(var s in e||(e={}))y.call(e,s)&&w(l,s,e[s]);if(g)for(var s of g(e))o.call(e,s)&&w(l,s,e[s]);return l};import{r as A,j as t,k,L as M}from"./main-642.js";import{q as $,_ as m,f as B,p as j}from"./bi.77.82.js";/* empty css          */import{g as R,a as N}from"./bi.516.914.js";function T({formFields:l,discordConf:e,setDiscordConf:s}){var p;const[c,h]=A.useState({show:!1}),u=n=>{const b=r({},e);n.target.value!==""?b.actions.attachments=n.target.value:delete b.actions.attachments,s(r({},b))};return t.jsxs("div",{className:"pos-rel",children:[t.jsx("div",{className:"d-flx flx-wrp",children:t.jsx($,{onChange:()=>h({show:"attachments"}),checked:"attachments"in e.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:m("Attachments","bit-integrations"),subTitle:m("Add attachments from Bit Integrations to send Discord.","bit-integrations")})}),t.jsxs(B,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:c.show==="attachments",close:()=>h({show:!1}),action:()=>h({show:!1}),title:m("Select Attachment","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),t.jsx("div",{className:"mt-2",children:m("Please select file upload fields","bit-integrations")}),t.jsxs("select",{onChange:n=>u(n),name:"attachments",value:(p=e.actions)==null?void 0:p.attachments,className:"btcd-paper-inp w-10 mt-2",children:[t.jsx("option",{value:"",children:m("Select file upload field","bit-integrations")}),l.filter(n=>n.type==="file").map(n=>t.jsx("option",{value:n.name,children:n.label},n.name+1))]})]})]})}function V({formFields:l,discordConf:e,setDiscordConf:s,isLoading:c,setIsLoading:h}){var b,v;k();const u=a=>{const i=r({},e);i[a.target.name]=a.target.value,s(i)},p=(a,i)=>{const x=r({},e);x[i]=a,i==="selectedServer"&&(x.selectedServer!==""||x.selectedServer!==null)&&a&&(x.selectedChannel="",N(x,s,h)),s(r({},x))},n=a=>{const i=r({},e);i.body=a,s(i)};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Select Servers:","bit-integrations")}),t.jsx(j,{options:(b=e==null?void 0:e.servers)==null?void 0:b.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedServer,onChange:a=>p(a,"selectedServer"),disabled:c.Servers,singleSelect:!0}),t.jsx("button",{onClick:()=>R(e,s,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Refresh Server List","bit-integrations")}'`},type:"button",disabled:c.servers,children:"↻"})]}),t.jsx("br",{}),(e==null?void 0:e.selectedServer)&&t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Select Channels:","bit-integrations")}),t.jsx(j,{options:(v=e==null?void 0:e.channels)==null?void 0:v.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedChannel,onChange:a=>p(a,"selectedChannel"),disabled:c.Channels,singleSelect:!0}),t.jsx("button",{onClick:()=>N(e,s,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Refresh Channel List","bit-integrations")}'`},type:"button",disabled:c.channels,children:"↻"})]})}),c&&t.jsx(M,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(e==null?void 0:e.selectedChannel)&&(e==null?void 0:e.selectedServer)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b mr-16",children:m("Messages: ","bit-integrations")}),t.jsx("textarea",{className:"w-7",onChange:u,name:"body",rows:"5",value:e.body}),t.jsx(j,{options:l.filter(a=>a.type!=="file").map(a=>({label:a.label,value:`\${${a.name}}`})),className:"btcd-paper-drpdwn wdt-600 ml-2",onChange:a=>n(a)})]}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:m("Actions","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(T,{discordConf:e,setDiscordConf:s,formFields:l})]})]})}export{V as D};
