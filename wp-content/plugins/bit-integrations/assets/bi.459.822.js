var w=Object.defineProperty,M=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var y=(e,l,t)=>l in e?w(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,v=(e,l)=>{for(var t in l||(l={}))R.call(l,t)&&y(e,t,l[t]);if(g)for(var t of g(l))S.call(l,t)&&y(e,t,l[t]);return e},N=(e,l)=>M(e,P(l));var I=(e,l,t)=>new Promise((a,r)=>{var x=p=>{try{m(t.next(p))}catch(i){r(i)}},h=p=>{try{m(t.throw(p))}catch(i){r(i)}},m=p=>p.done?a(p.value):Promise.resolve(p.value).then(x,h);m((t=t.apply(e,l)).next())});import{d as $,j as s,L as q}from"./main-642.js";import{m as T,_ as b,n as V,o as D,L as A,N as z}from"./bi.77.82.js";import{h as _,a as L,d as E}from"./bi.856.799.js";import{g as G,a as O,b as k}from"./bi.130.821.js";import{T as U}from"./bi.838.689.js";function B({i:e,field:l,formFields:t,notionConf:a,setNotionConf:r}){var i,c,u,j;const x=$(T),{isPro:h}=x;if(((i=a==null?void 0:a.field_map)==null?void 0:i.length)===1&&l.notionFormFields===""){const d=v({},a),F=G(d);d.field_map=F,r(d)}const m=((c=a==null?void 0:a.notionFields)==null?void 0:c.filter(d=>d.required===!0))||[],p=((u=a==null?void 0:a.notionFields)==null?void 0:u.filter(d=>d.required===!1))||[];return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formFields",onChange:d=>{_(d,e,a,r)},value:l.formFields||"",children:[s.jsx("option",{value:"",children:b("Select Field")}),s.jsx("optgroup",{label:"Form Fields",children:t==null?void 0:t.map(d=>s.jsx("option",{value:d.name,children:d.label},`ff-rm-${d.name}`))}),s.jsx("option",{value:"custom",children:b("Custom...")}),s.jsx("optgroup",{label:`General Smart Codes ${h?"":"(PRO)"}`,children:h&&((j=V)==null?void 0:j.map(d=>s.jsx("option",{value:d.name,children:d.label},`ff-rm-${d.name}`)))})]}),l.formField==="custom"&&s.jsx(U,{onChange:d=>D(d,e,a,r),label:b("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:b("Custom Value","bit-integrations"),formFields:t}),s.jsxs("select",{className:"btcd-paper-inp",disabled:e<m.length,name:"notionFormFields",onChange:d=>{_(d,e,a,r)},value:e<m.length?m[e].label||"":l.notionFormFields||"",children:[s.jsx("option",{value:"",children:b("Select Field")}),e<m.length?s.jsx("option",{value:m[e].label,children:m[e].label},m[e].key):p.map(({key:d,label:F})=>s.jsx("option",{value:F,children:F},F))]})]}),s.jsx("button",{onClick:()=>L(e,a,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>E(e,a,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})}function Y({notionConf:e,setNotionConf:l,formFields:t,loading:a,setLoading:r}){var m,p;const x=i=>I(this,null,function*(){const c=v({},e),{name:u,value:j}=i.target;switch(j!==""?c[u]=j:delete c[u],u){case"databaseId":c.databaseId===""&&(c.field_map=[{formFields:"",notionFormFields:""}]),c.databaseId&&(r(N(v({},a),{field:!0})),c.notionFields=yield k(c,l),c.notionFields&&r(N(v({},a),{field:!1})));break}l(c)}),h=`
    <b>Files & Media</b>
    <p>The Notion API does not yet support uploading files to Notion.</p>
    <p>Please Provide a public URL of the file instead of file attachment.</p>
  `;return s.jsxs("div",{className:"mt-2",children:[!a.page&&((m=e==null?void 0:e.default)==null?void 0:m.databaseLists)&&s.jsxs("div",{className:"flx mt-2",children:[s.jsx("b",{className:"wdt-200 d-in-b ",children:b("Database List:")}),s.jsxs("select",{onChange:x,name:"databaseId",value:e==null?void 0:e.databaseId,className:"btcd-paper-inp w-5 mx-0",children:[s.jsx("option",{value:"",children:b("Select Database")}),((p=e==null?void 0:e.default)==null?void 0:p.databaseLists)&&(e==null?void 0:e.default.databaseLists.map(i=>s.jsx("option",{value:i.id,children:i.name},i.id)))]}),s.jsx("button",{onClick:()=>O(e,l,a,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh list"'},type:"button",disabled:a.list,children:"↻"}),a.list&&s.jsx(A,{size:"20",clr:"#022217",className:"ml-2"})]}),(e==null?void 0:e.databaseId)&&s.jsxs("div",{className:"mt-5",children:[s.jsx("b",{className:"wdt-100",children:b("Field Map")}),s.jsx("button",{onClick:()=>k(e,l,a,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${b("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:a.field,children:"↻"}),s.jsx("div",{className:"btcd-hr mt-2 mb-4"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:b("Form Fields")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:b("Notion Fields")})})]}),e==null?void 0:e.field_map.map((i,c)=>s.jsx(B,{i:c,field:i,formFields:t,notionConf:e,setNotionConf:l},`ko-m-${c+8}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>L(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),(a.page||a.field)&&s.jsx(q,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsx(z,{note:h})]})}export{Y as N};
