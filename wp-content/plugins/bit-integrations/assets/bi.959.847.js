var k=Object.defineProperty,m=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var F=(e,s,t)=>s in e?k(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,a=(e,s)=>{for(var t in s||(s={}))w.call(s,t)&&F(e,t,s[t]);if(_)for(var t of _(s))B.call(s,t)&&F(e,t,s[t]);return e},c=(e,s)=>m(e,A(s));import{_ as f,c as d,d as n}from"./bi.77.82.js";const q=(e,s,t)=>{const i=a({},s),{name:l}=e.target;e.target.value!==""?i[l]=e.target.value:delete i[l],t(a({},i))},v=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.airtableFormField||t.formField==="custom"&&!t.customValue):[]).length>0),z=(e,s,t,i,l,r,u)=>{if(!e.auth_token){t({auth_token:e.auth_token?"":f("Personal access token can't be empty","bit-integrations")});return}t({}),u==="authentication"&&r(c(a({},l),{auth:!0})),u==="refreshBases"&&r(c(a({},l),{bases:!0}));const b={auth_token:e.auth_token};d(b,"airtable_authentication").then(h=>{if(h&&h.success){const o=a({},e);i(!0),u==="authentication"?(h.data&&(o.bases=h.data),r(c(a({},l),{auth:!1})),n.success(f("Authorized successfully","bit-integrations"))):u==="refreshBases"&&(h.data&&(o.bases=h.data),r(c(a({},l),{bases:!1})),n.success(f("All bases fectched successfully","bit-integrations"))),s(o);return}r(c(a({},l),{auth:!1,bases:!1})),n.error(f("Authorized failed!","bit-integrations"))})},x=(e,s,t,i)=>{i(c(a({},t),{tables:!0}));const l={auth_token:e.auth_token,baseId:e.selectedBase};d(l,"airtable_fetch_all_tables").then(r=>{if(r&&r.success){const u=a({},e);r.data&&(u.tables=r.data),s(u),i(c(a({},t),{tables:!1})),n.success(f("Tables fetched successfully","bit-integrations"));return}i(c(a({},t),{tables:!1})),n.error(f("Tables fetching failed","bit-integrations"))})},y=(e,s,t,i,l)=>{l==="fetch"?i(c(a({},t),{customFields:!0,airtableFields:!1})):l==="refresh"&&i(c(a({},t),{customFields:!0}));const r={auth_token:e.auth_token,baseId:e.selectedBase,tableId:e.selectedTable};d(r,"airtable_fetch_all_fields").then(u=>{if(u&&u.success){const b=a({},e);u.data&&(b.airtableFields=u.data),s(b),i(c(a({},t),{customFields:!1,airtableFields:!0})),n.success(f("Table fields fetched successfully","bit-integrations"));return}i(c(a({},t),{customFields:!1,airtableFields:!1})),n.error(f("Table fields fetching failed","bit-integrations"))})};export{z as a,y as b,v as c,x as g,q as h};
