var w=Object.defineProperty;var N=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var F=(a,i,s)=>i in a?w(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s,d=(a,i)=>{for(var s in i||(i={}))k.call(i,s)&&F(a,s,i[s]);if(N)for(var s of N(i))S.call(i,s)&&F(a,s,i[s]);return a};import{d as R,j as e,L as u}from"./main-642.js";import{m as o,_ as n,n as V,o as q,q as L}from"./bi.77.82.js";import{T as M}from"./bi.838.689.js";import{g as T,V as _}from"./bi.25.782.js";const y=(a,i,s)=>{const t=d({},i);t.field_map.splice(a,0,{}),s(d({},t))},$=(a,i,s)=>{const t=d({},i);t.field_map.length>1&&t.field_map.splice(a,1),s(d({},t))},b=(a,i,s,t)=>{const c=d({},s);c.field_map[i][a.target.name]=a.target.value,a.target.value==="custom"&&(c.field_map[i].customValue=""),t(d({},c))};function A({i:a,formFields:i,field:s,vboutConf:t,setVboutConf:c}){var x;const r=(t==null?void 0:t.VboutFields.filter(l=>l.required===!0))||[],p=(t==null?void 0:t.VboutFields.filter(l=>l.required===!1))||[],j=R(o),{isPro:h}=j;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:l=>b(l,a,t,c),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"Form Fields",children:i==null?void 0:i.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),e.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${h?"":"(PRO)"}`,children:h&&((x=V)==null?void 0:x.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),s.formField==="custom"&&e.jsx(M,{onChange:l=>q(l,a,t,c),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:i}),e.jsxs("select",{className:"btcd-paper-inp",disabled:a<r.length,name:"VboutFormField",value:a<r?r[a].label||"":s.VboutFormField||"",onChange:l=>b(l,a,t,c),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),a<r.length?e.jsx("option",{value:r[a].key,children:r[a].label},r[a].key):p.map(({key:l,label:m})=>e.jsx("option",{value:l,children:m},l))]})]}),a>=r.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>y(a,t,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>$(a,t,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function I({vboutConf:a,setVboutConf:i}){var t;const s=(c,r)=>{const p=d({},a);r==="update"&&(c.target.checked?p.actions.update=!0:delete p.actions.update),i(d({},p))};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(L,{checked:((t=a.actions)==null?void 0:t.update)||!1,onChange:c=>s(c,"update"),className:"wdt-200 mt-4 mr-2",value:"update",title:n("Update Contact","bit-integrations"),subTitle:n("Update Responses with Vbout exist Contact?","bit-integrations")})})})}function H({handleInput:a,formFields:i,vboutConf:s,setVboutConf:t,loading:c,setLoading:r,setSnackbar:p}){var x;const j=l=>{const m=d({},s),{name:g}=l.target;l.target.value!==""?m[g]=l.target.value:delete m[g],l.target.value!==""&&_(m,t,c,r),t(d({},m))},h=[{label:"Active",value:"active"},{label:"Unconfirmed",value:"unconfirmed"}];return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:n("List:","bit-integrations")}),e.jsxs("select",{name:"list_id",value:s.list_id,className:"btcd-paper-inp w-5",onChange:j,children:[e.jsx("option",{value:"",children:n("Select List","bit-integrations")}),((x=s==null?void 0:s.default)==null?void 0:x.lists)&&s.default.lists.map(l=>e.jsx("option",{value:l.list_id,children:l.name},l.list_id))]}),e.jsx("button",{onClick:()=>T(s,t,c,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh list"'},type:"button",disabled:c.list,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),c.list&&e.jsx(u,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(s==null?void 0:s.list_id)&&!c.field&&e.jsxs(e.Fragment,{children:[e.jsx("b",{className:"wdt-200 d-in-b",children:n("Contact Status:","bit-integrations")}),e.jsxs("select",{onChange:l=>a(l,s,t),name:"contact_status",value:s.contact_status,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:n("Select Status","bit-integrations")}),h.map(l=>e.jsx("option",{value:l.value,children:l.label},l.value))]})]}),c.field&&e.jsx(u,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(s==null?void 0:s.list_id)&&(s==null?void 0:s.contact_status)&&!c.field&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-5",children:e.jsxs("b",{className:"wdt-100",children:[n("Field Map","bit-integrations"),e.jsx("button",{onClick:()=>_(s,t,c,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Fields"'},type:"button",disabled:c.field,children:"↻"})]})}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Vbout Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((l,m)=>e.jsx(A,{i:m,field:l,vboutConf:s,formFields:i,setVboutConf:t,setSnackbar:p},`rp-m-${m+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>y(s.field_map.length,s,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),(s==null?void 0:s.list_id)&&(s==null?void 0:s.contact_status)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Actions","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(I,{vboutConf:s,setVboutConf:t,formFields:i})]})]})}export{H as V};