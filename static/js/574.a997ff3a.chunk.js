"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[574],{5574:(e,a,t)=>{t.r(a),t.d(a,{default:()=>s});var n=t(3216),r=t(9527),o=t(5043),c=t(579);const d=(0,o.lazy)((()=>Promise.all([t.e(766),t.e(87)]).then(t.bind(t,6087)))),s=()=>{const{id:e}=(0,n.g)(),{oneOrder:a,getOneOrderLogic:t}=(0,r.A)();return(0,o.useEffect)((()=>{t(e)}),[]),(0,c.jsx)(d,{data:{oneOrder:a}})}},9527:(e,a,t)=>{t.d(a,{A:()=>d});var n=t(3003),r=t(6272),o=(t(1655),t(5026)),c=t(6992);const d=()=>{const e=(0,n.wA)(),a=(0,n.d4)((e=>e.ordersReducer));return{all:a.all.data,meta:a.all.meta,oneOrder:a.show,getAllOrdersLogic:function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;a=void 0===a?(0,r.Ac)():a,e((0,c.Nw)(!0)),o.A.get("/api/admin/orders",{params:a}).then((a=>{e((0,c.xp)(a.data.data)),e((0,c.G0)(a.data.meta))})).finally((()=>e((0,c.Nw)(!1))))},getOneOrderLogic:a=>{o.A.get("/api/admin/orders/".concat(a)).then((a=>{e((0,c.v4)(a.data.data))}))}}}},6272:(e,a,t)=>{t.d(a,{Ac:()=>r,CV:()=>o,OE:()=>c,ZG:()=>n});const n=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";for(const[t,n]of Object.entries(e))a=a.replace(":".concat(t),n);return a};function r(){const e=new URLSearchParams(window.location.search),a=new Set;e.forEach(((e,t)=>{a.add(t)}));const t=Array.from(a),n=new URLSearchParams;return t.forEach((a=>n.append(a,e.get(a)))),n}const o=e=>{const a="".concat(window.location.pathname,"?").concat(e);window.history.pushState({path:a},"",a)},c=()=>{history.back()}}}]);
//# sourceMappingURL=574.a997ff3a.chunk.js.map