"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[153],{7300:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(5043),s=n(2327),a=n(2345),o=n(9157),i=n(5080),l=n(5299),c=n(7493),d=n(5060),m=n(8288),u=n(7439),h=n(4993),p=n(8786),f=n(4061),x=n(7941),g=n(579);const b=e=>{let{buttons:t=[],title:n,columns:b,data:j,paginationObject:v,pagination:y=!1,searchable:w=!0,handleSearch:A,entriesPerPageOptions:O=[5,10,25,50,75,100]}=e;const[N,k]=(0,r.useState)((0,x.o)());return(0,g.jsx)(r.Fragment,{children:(0,g.jsx)(s.A,{children:(0,g.jsx)(a.A,{sm:"12",children:(0,g.jsx)(r.Fragment,{children:(0,g.jsxs)(o.A,{children:[(0,g.jsxs)(i.A,{className:"border-bottom",children:[(0,g.jsx)(l.A,{tag:"h4",children:n}),t]}),(0,g.jsxs)(s.A,{className:"mx-0 mt-1 mb-50",children:[y&&(0,g.jsx)(a.A,{sm:"6",children:(0,g.jsxs)("div",{className:"d-flex align-items-center",children:[(0,g.jsx)(c.A,{for:"entries-select",children:"Show"}),(0,g.jsx)(d.A,{className:"dataTable-select",type:"select",id:"entries-select",value:v.currentPerPage,onChange:e=>v.handlePerPageChange(e.target.value),children:O.map((e=>(0,g.jsx)("option",{value:e,children:e},e)))}),(0,g.jsx)(c.A,{for:"entries-select",children:"entries"})]})}),w&&(0,g.jsx)(a.A,{className:"d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1",sm:"6",children:(0,g.jsxs)(m.A,{size:"sm",style:{width:"auto"},children:[(0,g.jsx)("span",{className:"input-group-text",children:(0,g.jsx)(u.A,{onClick:()=>A(N)})}),(0,g.jsx)(d.A,{className:"dataTable-filter",type:"text",id:"search-input",value:N,onChange:e=>{const t=e.target.value;!t&&N&&A(""),k(t)},placeholder:"Search..."})]})})]}),(0,g.jsx)("div",{className:"react-dataTable",children:(0,g.jsx)(p.Ay,{bordered:!0,noHeader:!0,pagination:y,paginationComponent:()=>(0,f.cN)(v),paginationServer:!0,className:"react-dataTable",columns:b,sortIcon:(0,g.jsx)(h.A,{size:10}),data:j})})]})})})})})}},5935:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(7833),s=n(6259),a=n(64),o=n.n(a),i=n(579);const l=e=>{let{isLoading:t,handleDelete:n}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.A,{onClick:()=>o().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then((function(e){!0===e.isConfirmed&&n(),!1===t&&o().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}})})),size:"sm",color:"transparent",className:"btn btn-icon",children:(0,i.jsx)(r.A,{className:"font-medium-2"})})})}},9481:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(5043),s=n(5173),a=n.n(s);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=(0,r.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,a=e.size,l=void 0===a?24:a,c=i(e,["color","size"]);return r.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),r.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));l.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},l.displayName="Edit";const c=l;var d=n(5475),m=n(579);const u=e=>{let{onClick:t,href:n}=e;return(0,m.jsx)(d.N_,{size:"sm",to:n,color:"transparent",className:"btn btn-icon",onClick:t,children:(0,m.jsx)(c,{className:"font-medium-2"})})}},7669:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(579);const s=e=>{let{actions:t}=e;return(0,r.jsx)("div",{className:"d-flex align-items-center permissions-actions",children:t})}},153:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(3003),s=n(3533),a=n(6272),o=n(5642),i=n(7300),l=(n(5935),n(7669)),c=(n(9481),n(8183),n(5475)),d=n(5043),m=n(5173),u=n.n(m);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var f=(0,d.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,s=e.size,a=void 0===s?24:s,o=p(e,["color","size"]);return d.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),d.createElement("circle",{cx:"12",cy:"12",r:"10"}),d.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),d.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));f.propTypes={color:u().string,size:u().oneOfType([u().string,u().number])},f.displayName="Info";const x=f;var g=n(579);const b=e=>{let{onClick:t,href:n}=e;return(0,g.jsx)(c.N_,{size:"sm",to:n,color:"transparent",className:"btn btn-icon",onClick:t,children:(0,g.jsx)(x,{className:"font-medium-2"})})},j=e=>[{sortable:!0,name:"ID",minwidth:"250px",selector:e=>e.id},{sortable:!0,name:"Name",minwidth:"250px",selector:e=>e.name},{sortable:!0,name:"Email",minwidth:"250px",selector:e=>e.email},{sortable:!0,name:"Phone",minwidth:"250px",selector:e=>e.phone},{sortable:!0,name:"Address",minwidth:"250px",selector:e=>e.address},{name:"Actions",minwidth:"100px",cell:t=>((e,t)=>{const{routeParser:n}=t,r=[(0,g.jsx)(b,{tag:"a",href:n(e)})];return(0,g.jsx)(l.A,{row:e,actions:r})})(t,e)}],v=e=>{let{data:t,paginationObject:n,handleDelete:l,handleSearch:c}=e;const d=(0,r.d4)((e=>e.ordersReducer.all.loading)),m=(0,r.d4)((e=>e.ordersReducer.deleteLoading));return(0,o.N)(d||m),(0,g.jsx)(i.A,{handleSearch:c,columns:j({handleDelete:l,routeParser:e=>{const{id:t}=e;return(0,a.ZG)(s.A.SHOW,{id:t})}}),data:t.all,pagination:!0,paginationObject:n,handlePageChange:!0,title:"Orders"})}},5642:(e,t,n)=>{n.d(t,{N:()=>a});var r=n(5043),s=n(5431);const a=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(0,r.useEffect)((()=>{e?(s.A.dismiss(),s.A.loading("Loading")):s.A.dismiss()}),[e])}}}]);
//# sourceMappingURL=153.251e9b0f.chunk.js.map