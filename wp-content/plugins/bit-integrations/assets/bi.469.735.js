var T=Object.defineProperty;var w=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var y=(l,d,e)=>d in l?T(l,d,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[d]=e,m=(l,d)=>{for(var e in d||(d={}))k.call(d,e)&&y(l,e,d[e]);if(w)for(var e of w(d))A.call(d,e)&&y(l,e,d[e]);return l};import{j as s,d as $,L as q}from"./main-642.js";import{c as _,_ as c,q as L,m as M,n as R,o as V,T as O,p as F,r as S}from"./bi.77.82.js";import{T as I}from"./bi.838.689.js";const P=(l,d,e,t)=>{e(!0),_({},"autonami_lists_and_tags").then(a=>{if(a&&a.success){const n=m({},l);n.default||(n.default={}),a.data.autonamiList&&(n.default.autonamiList=a.data.autonamiList),a.data.autonamiTags&&(n.default.autonamiTags=a.data.autonamiTags),t({show:!0,msg:c("Autonami lists and tags refreshed","bit-integrations")}),d(m({},n))}else a&&a.data&&a.data.data||!a.success&&typeof a.data=="string"?t({show:!0,msg:`${c("Autonami lists and tags refresh failed Cause:","bit-integrations")}${a.data.data||a.data}. ${c("please try again","bit-integrations")}`}):t({show:!0,msg:c("Autonami lists and tags refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},B=(l,d,e,t,a=!1)=>{_({},"autonami_fields").then(n=>{if(n&&n.success){const p=m({},l);if(p.default||(p.default={}),n.data.autonamiFields){if(p.default.fields=n.data.autonamiFields,!a){const{fields:x}=p.default;p.field_map=Object.values(x).filter(g=>g.required).map(g=>({formField:"",autonamiField:g.key,required:!0}))}t({show:!0,msg:c("Autonami fields refreshed","bit-integrations")})}else t({show:!0,msg:c("No Autonami fields found. Try changing the header row number or try again","bit-integrations")});d(m({},p))}else t({show:!0,msg:c("Autonami fields refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},K=(l,d,e)=>{const t=m({},d);t.name=l.target.value,e(m({},t))},Q=l=>!((l!=null&&l.field_map?l.field_map.filter(e=>!e.formField&&e.autonamiField&&e.required):[]).length>0);function D({autonamiConf:l,setAutonamiConf:d}){var t;const e=(a,n)=>{const p=m({},l);n==="exists"&&(a.target.checked?p.actions.skip_if_exists=!0:delete p.actions.skip_if_exists),d(m({},p))};return s.jsx("div",{className:"pos-rel d-flx w-8",children:s.jsx(L,{checked:((t=l.actions)==null?void 0:t.skip_if_exists)||!1,onChange:a=>e(a,"exists"),className:"wdt-200 mt-4 mr-2",value:"skip_if_exists",title:c("Skip exist Contact","bit-integrations"),subTitle:c("Skip if contact already exist in Autonami","bit-integrations")})})}function E({i:l,formFields:d,field:e,autonamiConf:t,setAutonamiConf:a}){var b,f,N,v;const n=e.required,p=((b=t==null?void 0:t.default)==null?void 0:b.fields)&&Object.values((f=t==null?void 0:t.default)==null?void 0:f.fields).filter(i=>!i.required),x=$(M),{isPro:g}=x,u=i=>{const h=m({},t);h.field_map.splice(i,0,{}),a(h)},o=i=>{const h=m({},t);h.field_map.length>1&&h.field_map.splice(i,1),a(h)},r=(i,h)=>{const j=m({},t);j.field_map[h][i.target.name]=i.target.value,i.target.value==="custom"&&(j.field_map[h].customValue=""),a(j)};return s.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:i=>r(i,l),children:[s.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),s.jsx("optgroup",{label:"Form Fields",children:d==null?void 0:d.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),s.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`General Smart Codes ${g?"":"(PRO)"}`,children:g&&((N=R)==null?void 0:N.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),e.formField==="custom"&&s.jsx(I,{onChange:i=>V(i,l,t,a),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:c("Custom Value","bit-integrations"),formFields:d}),s.jsxs("select",{className:"btcd-paper-inp",name:"autonamiField",value:e.autonamiField,onChange:i=>r(i,l),disabled:n,children:[s.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),n?((v=t==null?void 0:t.default)==null?void 0:v.fields)&&Object.values(t.default.fields).map(i=>s.jsx("option",{value:i.key,children:i.label},`${i.key}-1`)):p&&p.map(i=>s.jsx("option",{value:i.key,children:i.label},`${i.key}-1`))]})]}),!n&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>u(l),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>o(l),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:s.jsx(O,{})})]})]})}function U({formID:l,formFields:d,autonamiConf:e,setAutonamiConf:t,isLoading:a,setIsLoading:n,setSnackbar:p}){var u,o;const x=r=>{const b=m({},e);b.tags=r?r.split(","):[],t(m({},b))},g=r=>{const b=m({},e);b.lists=r?r.split(","):[],t(m({},b))};return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:c("Autonami Lists:","bit-integrations")}),s.jsx(F,{defaultValue:e==null?void 0:e.lists,className:"btcd-paper-drpdwn w-5",options:((u=e==null?void 0:e.default)==null?void 0:u.autonamiList)&&Object.keys(e.default.autonamiList).map(r=>({label:e.default.autonamiList[r].title,value:e.default.autonamiList[r].id.toString()})),onChange:r=>g(r)}),s.jsx("button",{onClick:()=>P(e,t,n,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh Autonami Lists And Tags","bit-integrations")}'`},type:"button",disabled:a,children:"↻"})]}),s.jsxs("div",{className:"flx mt-5",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:c("Autonami Tags: ","bit-integrations")}),s.jsx(F,{defaultValue:e==null?void 0:e.tags,className:"btcd-paper-drpdwn w-5",options:((o=e==null?void 0:e.default)==null?void 0:o.autonamiTags)&&Object.keys(e.default.autonamiTags).map(r=>({label:e.default.autonamiTags[r].title,value:e.default.autonamiTags[r].id.toString()})),onChange:r=>x(r)})]}),a&&s.jsx(q,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsxs("div",{className:"mt-4",children:[s.jsx("b",{className:"wdt-100",children:c("Map Fields","bit-integrations")}),s.jsx("button",{onClick:()=>B(e,t,n,p,!0),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh Autonami Fields","bit-integrations")}'`},type:"button",disabled:a,children:"↻"})]}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:c("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:c("Autonami Fields","bit-integrations")})})]}),e.field_map.map((r,b)=>s.jsx(E,{i:b,field:r,autonamiConf:e,formFields:d,setAutonamiConf:t},`autonami-m-${b+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>S(e.field_map.length,e,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:c("Actions","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(D,{autonamiConf:e,setAutonamiConf:t})]})}export{U as A,Q as c,B as g,K as h};
