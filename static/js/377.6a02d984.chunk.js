"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[377],{7377:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var n=t(3239),r=t(7339),c=t(9527),o=t(5043),s=t(579);const d=(0,o.lazy)((()=>Promise.all([t.e(766),t.e(680),t.e(153)]).then(t.bind(t,153)))),g=()=>{const{all:e,meta:a,getAllOrdersLogic:t}=(0,c.A)(),{handleSearch:o}=(0,n.A)(t),{currentPerPage:g,currentPage:h,setCurrentPageState:l,handlePageChange:i,handlePerPageChange:u}=(0,r.A)(t,a);return(0,s.jsx)(d,{data:{all:e},handleSearch:o,paginationObject:{meta:a,currentPerPage:g,currentPage:h,setCurrentPageState:l,handlePageChange:i,handlePerPageChange:u}})}},9527:(e,a,t)=>{t.d(a,{A:()=>s});var n=t(3003),r=t(6272),c=(t(1655),t(5026)),o=t(6992);const s=()=>{const e=(0,n.wA)(),a=(0,n.d4)((e=>e.ordersReducer));return{all:a.all.data,meta:a.all.meta,oneOrder:a.show,getAllOrdersLogic:function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;a=void 0===a?(0,r.Ac)():a,e((0,o.Nw)(!0)),c.A.get("/api/admin/orders",{params:a}).then((a=>{e((0,o.xp)(a.data.data)),e((0,o.G0)(a.data.meta))})).finally((()=>e((0,o.Nw)(!1))))},getOneOrderLogic:a=>{c.A.get("/api/admin/orders/".concat(a)).then((a=>{e((0,o.v4)(a.data.data))}))}}}},4061:(e,a,t)=>{t.d(a,{cN:()=>s,d8:()=>g,pQ:()=>d,u7:()=>h});var n=t(5043),r=t(6272),c=t(579);const o=(0,n.lazy)((()=>t.e(547).then(t.bind(t,6547)))),s=e=>(0,c.jsx)(o,{...e});function d(e){return e=Number.parseInt(e),(!Number.isInteger(e)||e<1)&&(e=1),e}function g(e){return e=Number.parseInt(e),(!Number.isInteger(e)||e<5||e>100)&&(e=5),e}function h(e,a){const t=new URLSearchParams(window.location.search);t.set("page",d(e).toString()),t.set("per_page",g(a).toString()),(0,r.CV)(t.toString())}},6272:(e,a,t)=>{t.d(a,{Ac:()=>r,CV:()=>c,OE:()=>o,ZG:()=>n});const n=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";for(const[t,n]of Object.entries(e))a=a.replace(":".concat(t),n);return a};function r(){const e=new URLSearchParams(window.location.search),a=new Set;e.forEach(((e,t)=>{a.add(t)}));const t=Array.from(a),n=new URLSearchParams;return t.forEach((a=>n.append(a,e.get(a)))),n}const c=e=>{const a="".concat(window.location.pathname,"?").concat(e);window.history.pushState({path:a},"",a)},o=()=>{history.back()}},7941:(e,a,t)=>{t.d(a,{A:()=>r,o:()=>c});var n=t(6272);const r=e=>{const a=(0,n.Ac)();a.set("handle",e),(0,n.CV)(a.toString())},c=()=>(0,n.Ac)().get("handle")||""},7339:(e,a,t)=>{t.d(a,{A:()=>c});var n=t(5043),r=t(4061);const c=(e,a)=>{const[t,c]=(0,n.useState)((0,r.d8)()),[o,s]=(0,n.useState)((0,r.pQ)());(0,n.useEffect)((()=>{e()}),[o,t]),(0,n.useEffect)((()=>{c(a.perPage),s(a.currentPage)}),[a]);return{currentPerPage:t,currentPage:o,handlePageChange:e=>{s(e),(0,r.u7)(e,t)},handlePerPageChange:e=>{c(e),(0,r.u7)(o,e),c(e)},setCurrentPageState:s}}},3239:(e,a,t)=>{t.d(a,{A:()=>r});var n=t(7941);const r=e=>({handleSearch:a=>{(0,n.A)(a),e()}})}}]);
//# sourceMappingURL=377.6a02d984.chunk.js.map