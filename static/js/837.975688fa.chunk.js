"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[837],{3831:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(5475),s=n(267),a=n(6259),o=n(579);const i=e=>(0,o.jsxs)(a.A,{className:"ms-2",color:"primary",tag:r.N_,...e,children:[(0,o.jsx)(s.A,{size:15}),(0,o.jsx)("span",{className:"align-middle ms-50",children:"Add Record"})]})},7300:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(5043),s=n(2327),a=n(2345),o=n(9157),i=n(5080),l=n(5299),c=n(7493),d=n(5060),u=n(8288),h=n(7439),m=n(4993),p=n(8786),f=n(4061),g=n(7941),x=n(579);const j=e=>{let{buttons:t=[],title:n,columns:j,data:b,paginationObject:v,pagination:y=!1,searchable:A=!0,handleSearch:w,entriesPerPageOptions:O=[5,10,25,50,75,100]}=e;const[N,C]=(0,r.useState)((0,g.o)());return(0,x.jsx)(r.Fragment,{children:(0,x.jsx)(s.A,{children:(0,x.jsx)(a.A,{sm:"12",children:(0,x.jsx)(r.Fragment,{children:(0,x.jsxs)(o.A,{children:[(0,x.jsxs)(i.A,{className:"border-bottom",children:[(0,x.jsx)(l.A,{tag:"h4",children:n}),t]}),(0,x.jsxs)(s.A,{className:"mx-0 mt-1 mb-50",children:[y&&(0,x.jsx)(a.A,{sm:"6",children:(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)(c.A,{for:"entries-select",children:"Show"}),(0,x.jsx)(d.A,{className:"dataTable-select",type:"select",id:"entries-select",value:v.currentPerPage,onChange:e=>v.handlePerPageChange(e.target.value),children:O.map((e=>(0,x.jsx)("option",{value:e,children:e},e)))}),(0,x.jsx)(c.A,{for:"entries-select",children:"entries"})]})}),A&&(0,x.jsx)(a.A,{className:"d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1",sm:"6",children:(0,x.jsxs)(u.A,{size:"sm",style:{width:"auto"},children:[(0,x.jsx)("span",{className:"input-group-text",children:(0,x.jsx)(h.A,{onClick:()=>w(N)})}),(0,x.jsx)(d.A,{className:"dataTable-filter",type:"text",id:"search-input",value:N,onChange:e=>{const t=e.target.value;!t&&N&&w(""),C(t)},placeholder:"Search..."})]})})]}),(0,x.jsx)("div",{className:"react-dataTable",children:(0,x.jsx)(p.Ay,{bordered:!0,noHeader:!0,pagination:y,paginationComponent:()=>(0,f.cN)(v),paginationServer:!0,className:"react-dataTable",columns:j,sortIcon:(0,x.jsx)(m.A,{size:10}),data:b})})]})})})})})}},5935:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(7833),s=n(6259),a=n(64),o=n.n(a),i=n(579);const l=e=>{let{isLoading:t,handleDelete:n}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.A,{onClick:()=>o().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then((function(e){!0===e.isConfirmed&&n(),!1===t&&o().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}})})),size:"sm",color:"transparent",className:"btn btn-icon",children:(0,i.jsx)(r.A,{className:"font-medium-2"})})})}},9481:(e,t,n)=>{n.d(t,{A:()=>h});var r=n(5043),s=n(5173),a=n.n(s);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=(0,r.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,a=e.size,l=void 0===a?24:a,c=i(e,["color","size"]);return r.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),r.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));l.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},l.displayName="Edit";const c=l;var d=n(5475),u=n(579);const h=e=>{let{onClick:t,href:n}=e;return(0,u.jsx)(d.N_,{size:"sm",to:n,color:"transparent",className:"btn btn-icon",onClick:t,children:(0,u.jsx)(c,{className:"font-medium-2"})})}},7669:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(579);const s=e=>{let{actions:t}=e;return(0,r.jsx)("div",{className:"d-flex align-items-center permissions-actions",children:t})}},6837:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(3003),s=n(5642),a=n(7300),o=n(5935),i=n(7669),l=n(9481),c=n(579);const d=e=>[{sortable:!0,name:"Name",minwidth:"250px",selector:e=>e.name},{sortable:!0,name:"Hex Code",minwidth:"250px",cell:e=>(0,c.jsx)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:(0,c.jsx)("span",{style:{background:e.code,color:"white",padding:".5rem",borderRadius:".2rem"},children:e.code})})},{name:"Actions",minwidth:"100px",cell:t=>((e,t)=>{const{handleDelete:n,routeParser:r}=t,s=[(0,c.jsx)(l.A,{tag:"a",href:r(e)}),(0,c.jsx)(o.A,{handleDelete:()=>n(e.id)},1)];return(0,c.jsx)(i.A,{row:e,actions:s})})(t,e)}];var u=n(6272),h=n(1884),m=n(3831);const p=e=>{let{data:t,paginationObject:n,handleDelete:o,handleSearch:i}=e;const l=(0,r.d4)((e=>e.colorsReducer.all.loading)),p=(0,r.d4)((e=>e.colorsReducer.deleteLoading)),f=[(0,c.jsx)(m.A,{to:h.A.ADD},0)];return(0,s.N)(l||p),(0,c.jsx)(a.A,{buttons:f,handleSearch:i,columns:d({handleDelete:o,routeParser:e=>{const{id:t}=e;return(0,u.ZG)(h.A.EDIT,{id:t})}}),data:t.all,pagination:!0,paginationObject:n,handlePageChange:!0,title:"Colors"})}},5642:(e,t,n)=>{n.d(t,{N:()=>a});var r=n(5043),s=n(5431);const a=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(0,r.useEffect)((()=>{e?(s.A.dismiss(),s.A.loading("Loading")):s.A.dismiss()}),[e])}},267:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(5043),s=n(5173),a=n.n(s);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=(0,r.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,a=e.size,l=void 0===a?24:a,c=i(e,["color","size"]);return r.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));l.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},l.displayName="Plus";const c=l}}]);
//# sourceMappingURL=837.975688fa.chunk.js.map