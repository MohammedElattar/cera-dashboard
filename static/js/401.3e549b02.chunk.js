"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[401],{8183:(e,a,t)=>{t.d(a,{A:()=>r});var n=t(5043),s=t(8139),i=t.n(s),l=t(9804),o=t(579);const c=(0,n.forwardRef)(((e,a)=>{const{img:t,size:n,icon:s,color:c,status:r,badgeUp:d,content:m,tag:u,initials:h,imgWidth:p,className:x,badgeText:v,imgHeight:f,badgeColor:g,imgClassName:j,contentStyles:b,...N}=e;return(0,o.jsxs)(u,{className:i()("avatar",{[x]:x,["bg-".concat(c)]:c,["avatar-".concat(n)]:n}),ref:a,...N,children:[!1===t||void 0===t?(0,o.jsxs)("span",{className:i()("avatar-content",{"position-relative":d}),style:b,children:[h?(e=>{const a=[];return e.split(" ").forEach((e=>{a.push(e[0])})),a.join("")})(m):m,s||null,d?(0,o.jsx)(l.A,{color:g||"primary",className:"badge-sm badge-up",pill:!0,children:v||"0"}):null]}):(0,o.jsx)("img",{className:i()({[j]:j}),src:t,alt:"avatarImg",height:f&&!n?f:32,width:p&&!n?p:32}),r?(0,o.jsx)("span",{className:i()({["avatar-status-".concat(r)]:r,["avatar-status-".concat(n)]:n})}):null]})})),r=c;c.defaultProps={tag:"div"}},1401:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});var n=t(5043),s=t(3216),i=t(4333),l=t(3765);const o=()=>{const{layout:e}=(0,l.g)(),a=(0,i.X5)(e);return(0,s.Ye)([...a])};var c=t(579);const r=()=>(0,c.jsx)(n.Suspense,{fallback:null,children:(0,c.jsx)(o,{})})},5026:(e,a,t)=>{t.d(a,{A:()=>r});var n=t(7154),s=t(6994),i=t(6762),l=t(4693),o=t(5431);const c=n.A.create({baseURL:"https://cera.hyperfinition.com",headers:{Accept:"application/json"}});c.interceptors.request.use((function(e){const a=(0,s.gf)();return a&&(e.headers.Authorization="Bearer ".concat(a)),e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){o.A.dismiss();return e.data.showToast&&o.A.success(e.data.message),e}),(function(e){const a=e.response.data,t=a.code,n=a.message;return o.A.dismiss(),t===i.c.UN_AUTHENTICATED?(o.A.error(n),(0,s.VK)(),window.location.pathname!==l.S0&&window.location.replace(l.S0)):t!==i.c.VALIDATION_ERRORS&&o.A.error(n),Promise.reject(e)}));const r=c},1210:(e,a,t)=>{t.d(a,{QX:()=>n,Sg:()=>s});const n="/home",s=n},4693:(e,a,t)=>{t.d(a,{S0:()=>n});const n="/login"},7073:(e,a,t)=>{t.d(a,{o:()=>d});var n=t(3003),s=t(5026),i=t(6762),l=t(6994),o=t(4693),c=t(3216),r=t(5521);const d=()=>{const e=(0,n.wA)(),a=(0,n.d4)((e=>e.loginReducer)),t=(0,c.Zp)(),d=function(a){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];a.data.code===i.c.OK&&((0,l.sX)(a.data.data),t&&(0,l.WG)(a.data.data.token),e((0,r.mA)(a.data.data))),e((0,r.$k)(a.data.code))};return{loginSelector:a,dispatchLogin:a=>(e((0,r.cB)(!0)),s.A.post("/auth/login/dashboard",{...a,fcm_token:"123123"}).then((e=>d(e))).finally((()=>{e((0,r.cB)(!1))}))),fetchProfileLogic:()=>s.A.get("/auth/profile").then((e=>d(e,!1))),dispatchLogout:()=>{s.A.post("/auth/logout").then((()=>{(0,l.VK)(),e((0,r.xn)()),t(o.S0)}))}}}},6994:(e,a,t)=>{t.d(a,{gf:()=>i,gL:()=>c,x3:()=>r,VK:()=>d,WG:()=>l,sX:()=>o});const n={USER_DATA:"userInfo",TOKEN:"user_token"};var s=t(6537);const i=()=>{const e=s.M.getState().loginReducer;return localStorage.getItem(n.TOKEN)||e.token||""},l=e=>{localStorage.setItem(n.TOKEN,e)},o=e=>{localStorage.setItem(n.USER_DATA,JSON.stringify(e))},c=()=>{const e=s.M.getState().loginReducer;return JSON.parse(localStorage.getItem(n.USER_DATA))||e.userInfo||{}},r=()=>!!i(),d=()=>{localStorage.removeItem(n.TOKEN),localStorage.removeItem(n.USER_DATA)}},1884:(e,a,t)=>{t.d(a,{A:()=>n});const n={TABLE:"/colors",ADD:"/colors/create",EDIT:"/colors/:id/edit"}},4333:(e,a,t)=>{t.d(a,{Pk:()=>Je,B5:()=>Ue,X5:()=>aa});var n=t(5043),s=t(3216),i=t(9414),l=t(8139),o=t.n(l),c=t(579);const r=()=>{const[e,a]=(0,n.useState)(!1),{skin:t}=(0,i.h)();return(0,n.useEffect)((()=>(a(!0),()=>a(!1))),[]),e?(0,c.jsx)("div",{className:o()("blank-page",{"dark-layout":"dark"===t}),children:(0,c.jsx)("div",{className:"app-content content",children:(0,c.jsx)("div",{className:"content-wrapper",children:(0,c.jsx)("div",{className:"content-body",children:(0,c.jsx)(s.sv,{})})})})}):null};var d=t(3003),m=t(911),u=t(1558),h=t(4665),p=t(6259),x=t(3955),v=t(3226),f=t(7875),g=t(864),j=t.n(g),b=t(5060),N=t(7493);const k=e=>{const{skin:a,isRtl:t,layout:s,setSkin:i,setIsRtl:l,isHidden:r,setLayout:d,navbarType:m,footerType:u,navbarColor:h,setIsHidden:p,contentWidth:x,menuCollapsed:g,setLastLayout:k,setNavbarType:y,setFooterType:A,setNavbarColor:w,setContentWidth:L,setMenuCollapsed:C}=e,[z,S]=(0,n.useState)(!1),T=e=>{e.preventDefault(),S(!z)};return(0,c.jsxs)("div",{className:o()("customizer d-none d-md-block",{open:z}),children:[(0,c.jsx)("a",{href:"/",className:"customizer-toggle d-flex align-items-center justify-content-center",onClick:T,children:(0,c.jsx)(v.A,{size:14,className:"spinner"})}),(0,c.jsxs)(j(),{className:"customizer-content",options:{wheelPropagation:!1},children:[(0,c.jsxs)("div",{className:"customizer-header px-2 pt-1 pb-0 position-relative",children:[(0,c.jsx)("h4",{className:"mb-0",children:"Theme Customizer"}),(0,c.jsx)("p",{className:"m-0",children:"Customize & Preview in Real Time"}),(0,c.jsx)("a",{href:"/",className:"customizer-close",onClick:T,children:(0,c.jsx)(f.A,{})})]}),(0,c.jsx)("hr",{}),(0,c.jsxs)("div",{className:"px-2",children:[(0,c.jsxs)("div",{className:"mb-2",children:[(0,c.jsx)("p",{className:"fw-bold",children:"Skin"}),(0,c.jsx)("div",{className:"d-flex",children:(()=>{const e=[{name:"light",label:"Light",checked:"light"===a},{name:"bordered",label:"Bordered",checked:"bordered"===a},{name:"dark",label:"Dark",checked:"dark"===a},{name:"semi-dark",label:"Semi Dark",checked:"semi-dark"===a}];return e.map(((a,t)=>{const n=t!==e.length-1;return"horizontal"===s&&"semi-dark"===a.name?null:(0,c.jsxs)("div",{className:o()("form-check",{"mb-2 me-1":n}),children:[(0,c.jsx)(b.A,{type:"radio",id:a.name,checked:a.checked,onChange:()=>i(a.name)}),(0,c.jsx)(N.A,{className:"form-check-label",for:a.name,children:a.label})]},t)}))})()})]}),(0,c.jsxs)("div",{className:"mb-2",children:[(0,c.jsx)("p",{className:"fw-bold",children:"Content Width"}),(0,c.jsxs)("div",{className:"d-flex",children:[(0,c.jsxs)("div",{className:"form-check me-1",children:[(0,c.jsx)(b.A,{type:"radio",id:"full-width",checked:"full"===x,onChange:()=>L("full")}),(0,c.jsx)(N.A,{className:"form-check-label",for:"full-width",children:"Full Width"})]}),(0,c.jsxs)("div",{className:"form-check",children:[(0,c.jsx)(b.A,{id:"boxed",type:"radio",checked:"boxed"===x,onChange:()=>L("boxed")}),(0,c.jsx)(N.A,{className:"form-check-label",for:"boxed",children:"Boxed"})]})]})]}),(0,c.jsx)("div",{className:"form-switch mb-2 ps-0",children:(0,c.jsxs)("div",{className:"d-flex",children:[(0,c.jsx)("p",{className:"fw-bold me-auto mb-0",children:"RTL"}),(0,c.jsx)(b.A,{type:"switch",id:"rtl",name:"RTL",checked:t,onChange:()=>l(!t)})]})})]}),(0,c.jsx)("hr",{}),(0,c.jsxs)("div",{className:"px-2",children:[(0,c.jsx)("p",{className:"fw-bold",children:"Menu Layout"}),(0,c.jsx)("div",{className:"mb-2",children:(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[(0,c.jsxs)("div",{className:"form-check me-1",children:[(0,c.jsx)(b.A,{type:"radio",id:"vertical-layout",checked:"vertical"===s,onChange:()=>{d("vertical"),k("vertical")}}),(0,c.jsx)(N.A,{className:"form-check-label",for:"vertical-layout",children:"Vertical"})]}),(0,c.jsxs)("div",{className:"form-check",children:[(0,c.jsx)(b.A,{type:"radio",id:"horizontal-layout",checked:"horizontal"===s,onChange:()=>{d("horizontal"),k("horizontal")}}),(0,c.jsx)(N.A,{className:"form-check-label",for:"horizontal-layout",children:"Horizontal"})]})]})}),"horizontal"!==s?(0,c.jsx)("div",{className:"form-switch mb-2 ps-0",children:(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[(0,c.jsx)("p",{className:"fw-bold me-auto mb-0",children:"Menu Collapsed"}),(0,c.jsx)(b.A,{type:"switch",id:"menu-collapsed",name:"menu-collapsed",checked:g,onChange:()=>C(!g)})]})}):null,(0,c.jsx)("div",{className:"form-switch mb-2 ps-0",children:(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[(0,c.jsx)("p",{className:"fw-bold me-auto mb-0",children:"Menu Hidden"}),(0,c.jsx)(b.A,{type:"switch",id:"menu-hidden",name:"menu-hidden",checked:r,onChange:()=>p(!r)})]})})]}),(0,c.jsx)("hr",{}),(0,c.jsxs)("div",{className:"px-2",children:["horizontal"!==s?(0,c.jsxs)("div",{className:"mb-2",children:[(0,c.jsx)("p",{className:"fw-bold",children:"Navbar Color"}),(0,c.jsx)("ul",{className:"list-inline unstyled-list",children:["white","primary","secondary","success","danger","info","warning","dark"].map((e=>(0,c.jsx)("li",{className:o()("color-box bg-".concat(e),{selected:h===e,border:"white"===e}),onClick:()=>w(e)},e)))})]}):null,(0,c.jsxs)("div",{className:"mb-2",children:[(0,c.jsxs)("p",{className:"fw-bold",children:["horizontal"===s?"Menu":"Navbar"," Type"]}),(0,c.jsx)("div",{className:"d-flex",children:(()=>{const e=[{name:"floating",label:"Floating",checked:"floating"===m},{name:"sticky",label:"Sticky",checked:"sticky"===m},{name:"static",label:"Static",checked:"static"===m},{name:"hidden",label:"Hidden",checked:"hidden"===m}];return e.map(((a,t)=>{const n=t!==e.length-1;return"horizontal"===s&&"hidden"===a.name?null:(0,c.jsxs)("div",{className:o()("form-check",{"mb-2 me-1":n}),children:[(0,c.jsx)(b.A,{type:"radio",id:a.name,checked:a.checked,onChange:()=>y(a.name)}),(0,c.jsx)(N.A,{className:"form-check-label",for:a.name,children:a.label})]},t)}))})()})]})]}),(0,c.jsx)("hr",{}),(0,c.jsx)("div",{className:"px-2",children:(0,c.jsxs)("div",{className:"mb-2",children:[(0,c.jsx)("p",{className:"fw-bold",children:"Footer Type"}),(0,c.jsx)("div",{className:"d-flex",children:(()=>{const e=[{name:"sticky",label:"Sticky",checked:"sticky"===u},{name:"static",label:"Static",checked:"static"===u},{name:"hidden",label:"Hidden",checked:"hidden"===u}];return e.map(((a,t)=>{const n=t!==e.length-1;return(0,c.jsxs)("div",{className:o()("form-check",{"mb-2 me-1":n}),children:[(0,c.jsx)(b.A,{type:"radio",checked:a.checked,id:"footer-".concat(a.name),onChange:()=>A(a.name)}),(0,c.jsx)(N.A,{className:"form-check-label",for:"footer-".concat(a.name),children:a.label})]},t)}))})()})]})})]})]})},y=e=>{const{showOffset:a,scrollBehaviour:t,children:s,...i}=e,[l,o]=(0,n.useState)(!1);(0,n.useEffect)((()=>{window&&window.addEventListener("scroll",(()=>{window.pageYOffset>=a?o(!0):o(!1)}))}),[]);return l&&(0,c.jsx)("div",{className:"scroll-to-top",onClick:()=>{window.scroll({top:0,behavior:t})},...i,children:s})},A=y;y.defaultProps={scrollBehaviour:"smooth"};const w=()=>{};t(4117),t(9360);const L=()=>{const e=(0,d.wA)(),a=(0,d.d4)((e=>e.layout.isRTL));return(0,n.useEffect)((()=>{const e=document.getElementsByTagName("html")[0];a?e.setAttribute("dir","rtl"):e.setAttribute("dir","ltr")}),[a]),[a,a=>{e((0,m.Nx)(a))}]};var C=t(5475),z=t(8183),S=t(6484),T=t(3038),E=t(9935),O=t(2739),I=t(821),D=t(1349),H=t(6994),M=t(7073);const P=()=>{const{fetchProfileLogic:e}=(0,M.o)();return{fetchProfileInfo:async()=>{const a=(0,H.gL)();0===Object.keys(a).length&&await e()},updateProfile:e=>{console.log(e)}}},R=()=>{const e=(0,H.gL)(),{fetchProfileInfo:a}=P(),{dispatchLogout:t}=(0,M.o)();return(0,n.useEffect)((()=>{a()}),[]),(0,c.jsxs)(E.A,{tag:"li",className:"dropdown-user nav-item",children:[(0,c.jsxs)(O.A,{href:"/",tag:"a",className:"nav-link dropdown-user-link",onClick:e=>e.preventDefault(),children:[(0,c.jsxs)("div",{className:"user-nav d-sm-flex d-none",children:[(0,c.jsx)("span",{className:"user-name fw-bold",children:e.name}),(0,c.jsx)("span",{className:"user-status",children:e.type})]}),(0,c.jsx)(z.A,{img:e.avatar,imgHeight:"40",imgWidth:"40",status:"online"})]}),(0,c.jsxs)(I.A,{end:!0,children:[(0,c.jsxs)(D.A,{tag:C.N_,to:"/",onClick:e=>e.preventDefault(),children:[(0,c.jsx)(S.A,{size:14,className:"me-75"}),(0,c.jsx)("span",{className:"align-middle",children:"Profile"})]}),(0,c.jsx)(D.A,{divider:!0}),(0,c.jsxs)(D.A,{onClick:t,children:[(0,c.jsx)(T.A,{size:14,className:"me-75"}),(0,c.jsx)("span",{className:"align-middle",children:"Logout"})]})]})]})};var W=t(7749),_=t(3014),G=t(8509),B=t(9790),V=t(5026),Y=t(8837);const F=()=>{const e=(0,d.wA)(),[a,t]=(0,n.useState)(!1),s=(0,d.d4)((e=>e.notificationReducer)),i=s.all.data,l=s.all.meta,o=s.nextPageLoading,c=s.showAllLoading,r=s.unreadCount,m=s.readAllLoading,u=s.unreadCountLoading;return{getAllNotifications:()=>{0===i.length&&(e((0,Y.CL)(!0)),V.A.get("/notifications",{params:{per_page:10}}).then((a=>{e((0,Y.Q9)(a.data.data)),e((0,Y.ck)(a.data.meta))})).finally((()=>e((0,Y.CL)(!1)))))},unreadNotificationsCount:()=>{e((0,Y.wy)(!0)),V.A.get("notifications/unread_notifications_count").then((a=>{e((0,Y.zh)(a.data.data.unreadNotificationsCount))})).finally((()=>e((0,Y.wy)(!1))))},deleteOneNotification:a=>{let n=i[a],s=[...i],l=[...i],o=r;s.splice(a,1),t(!0),e((0,Y.Q9)(s)),e((0,Y.zh)(o-(!1===n.seen?1:0))),V.A.delete("/notifications/".concat(n.id)).catch((()=>{e((0,Y.zh)(o)),e((0,Y.Q9)(l))})).finally((()=>{n=s=l=o=null,t(!1)}))},deleteAllNotifications:()=>{let a=[...i],n=r;t(!0),e((0,Y.Q9)([])),e((0,Y.zh)(0)),V.A.delete("/notifications").catch((()=>{e((0,Y.Q9)(a)),e((0,Y.zh)(n))})).finally((()=>{a=n=null,t(!1)}))},readOneNotification:a=>{let t=i[a];if(void 0!==t){let a=[...i],n=[...i],s=r;t={...t,seen:!0},n=n.map((e=>e.id===t.id?t:e)),e((0,Y.Q9)(n)),e((0,Y.zh)(s-1)),(0,Y.e_)(!0),V.A.patch("/notifications/".concat(t.id)).then((()=>e((0,Y.zh)(r-1)))).catch((()=>{e((0,Y.Q9)(a)),e((0,Y.zh)(s))})).finally((()=>{t=n=a=s=null,(0,Y.e_)(!1)}))}},readAllNotifications:()=>{let a=[...i],t=r,n=[...i];n=n.map((e=>({...e,seen:!0}))),e((0,Y.Q9)(n)),e((0,Y.zh)(0)),e((0,Y.dX)(!0)),V.A.patch("/notifications").catch((()=>{e((0,Y.Q9)(a)),e((0,Y.zh)(t))})).finally((()=>{a=t=n=null,e((0,Y.dX)(!1))}))},fetchNextPage:()=>{!1===o&&!1===c&&i[0]&&l.currentPage<l.lastPage&&(console.log("fetch now !"),e((0,Y.CL)(!0)),e((0,Y._w)(!0)),V.A.get("/notifications",{params:{per_page:10,page:l.currentPage+1}}).then((a=>{e((0,Y.Q9)([...i,...a.data.data])),e((0,Y.ck)(a.data.meta))})).finally((()=>{e((0,Y.CL)(!1)),e((0,Y._w)(!1))})))},allNotification:i,allNotificationsLoading:c,unreadNotifications:r,unreadNotificationsLoading:u,readAllLoading:m,nextPageLoading:o,isDeleting:a}},Q=(0,n.lazy)((()=>t.e(106).then(t.bind(t,3106)))),X=()=>{const{getAllNotifications:e,unreadNotificationsCount:a,deleteOneNotification:t,deleteAllNotifications:s,readOneNotification:i,readAllNotifications:l,fetchNextPage:o,allNotification:r,unreadNotifications:d,readAllLoading:m,nextPageLoading:u,allNotificationsLoading:h,isDeleting:p}=F();return(0,n.useEffect)((()=>{a(),e()}),[]),(0,c.jsx)(Q,{nextPageLoading:u,allNotificationsLoading:h,fetchNextPage:o,isDeleting:p,notifications:r,handleDeletingOneNotification:t,handleDeletingAllNotification:s,handleReadingOneNotification:i,handleReadingAllNotification:l,unreadNotificationsCount:(x=d,0===x?null:x>99?"99+":x),readAllNotificationLoading:m});var x},K=e=>{const{skin:a,setSkin:t}=e,n=()=>"dark"===a?(0,c.jsx)(W.A,{className:"ficon",onClick:()=>t("light")}):(0,c.jsx)(_.A,{className:"ficon",onClick:()=>t("dark")});return(0,c.jsxs)("ul",{className:"nav navbar-nav align-items-center ms-auto",children:[(0,c.jsx)(G.A,{className:"d-none d-lg-block",children:(0,c.jsx)(B.A,{className:"nav-link-style",children:(0,c.jsx)(n,{})})}),(0,c.jsx)(X,{}),(0,c.jsx)(R,{})]})},U=e=>{const{skin:a,setSkin:t}=e;return(0,c.jsx)(n.Fragment,{children:(0,c.jsx)(K,{skin:a,setSkin:t})})};var J=t(1970),q=t(663),$=t(9546);const Z=e=>{const{menuCollapsed:a,setMenuCollapsed:t,setMenuVisibility:s,setGroupOpen:i,menuHover:l}=e,o=(0,$.gL)();(0,n.useEffect)((()=>{!l&&a&&i([])}),[l,a]);const r=()=>a?(0,c.jsx)(q.A,{size:20,"data-tour":"toggle-icon",className:"text-primary toggle-icon d-none d-xl-block",onClick:()=>t(!1)}):(0,c.jsx)(J.A,{size:20,"data-tour":"toggle-icon",className:"text-primary toggle-icon d-none d-xl-block",onClick:()=>t(!0)});return(0,c.jsx)("div",{className:"navbar-header",children:(0,c.jsxs)("ul",{className:"nav navbar-nav flex-row",children:[(0,c.jsx)("li",{className:"nav-item me-auto",children:(0,c.jsxs)(C.k2,{to:o?(0,$.YI)(o.role):"/",className:"navbar-brand",children:[(0,c.jsx)("span",{className:"brand-logo",children:(0,c.jsx)("img",{src:x.A.app.appLogoImage,alt:"logo"})}),(0,c.jsx)("h2",{className:"brand-text mb-0",children:x.A.app.appName})]})}),(0,c.jsx)("li",{className:"nav-item nav-toggle",children:(0,c.jsxs)("div",{className:"nav-link modern-nav-toggle cursor-pointer",children:[(0,c.jsx)(r,{}),(0,c.jsx)(f.A,{onClick:()=>s(!1),className:"toggle-icon icon-x d-block d-xl-none",size:20})]})})]})})};var ee=t(9804);const ae=e=>{let{item:a,activeItem:t}=e;const n=a.externalLink?"a":C.k2;return(0,c.jsx)("li",{className:o()({"nav-item":!a.children,disabled:a.disabled,active:a.navLink===t}),children:(0,c.jsxs)(n,{className:"d-flex align-items-center",target:a.newTab?"_blank":void 0,...!0===a.externalLink?{href:a.navLink||"/"}:{to:a.navLink||"/",className:e=>{let{isActive:t}=e;if(t&&!a.disabled)return"d-flex align-items-center active"}},onClick:e=>{0!==a.navLink.length&&"#"!==a.navLink&&!0!==a.disabled||e.preventDefault()},children:[a.icon,(0,c.jsx)("span",{className:"menu-item text-truncate",children:a.title}),a.badge&&a.badgeText?(0,c.jsx)(ee.A,{className:"ms-auto me-1",color:a.badge,pill:!0,children:a.badgeText}):null]})})};var te=t(6061),ne=t(4538);const se=(0,n.createContext)(),ie=((0,ne.K0)(se.Consumer),(e,a)=>{const{children:t}=e;if(!t)return!1;for(const n of t){if(n.children&&ie(n,a))return!0;if(n&&n.navLink&&a&&(n.navLink===a||a.includes(n.navLink)))return!0}return!1}),le=(e,a,t)=>{e.forEach((e=>{if(!t.includes(e.id)){const n=a.indexOf(e.id);n>-1&&a.splice(n,1),e.children&&le(e.children,a,t)}}))},oe=e=>{let{item:a,groupOpen:t,menuHover:i,activeItem:l,parentItem:r,groupActive:d,setGroupOpen:m,menuCollapsed:u,setGroupActive:h,currentActiveGroup:p,setCurrentActiveGroup:x,...v}=e;const f=(0,s.zy)(),g=(0,s.zy)().pathname,j=(e,a)=>{((e,a)=>{let n=t;const s=d;n.includes(e.id)?(n.splice(n.indexOf(e.id),1),e.children&&le(e.children,n,d)):s.includes(e.id)||p.includes(e.id)?(!s.includes(e.id)&&p.includes(e.id)?s.push(e.id):s.splice(s.indexOf(e.id),1),h([...s])):a?(a.children&&le(a.children,n,d),n.includes(e.id)||n.push(e.id)):(n=[],n.includes(e.id)||n.push(e.id)),m([...n])})(a,r),e.preventDefault()};(0,n.useEffect)((()=>{if(ie(a,g))d.includes(a.id)||d.push(a.id);else{const e=d.indexOf(a.id);e>-1&&d.splice(e,1)}h([...d]),x([...d]),m([])}),[f]);return(0,c.jsxs)("li",{className:o()("nav-item has-sub",{open:(b=a.id,u&&i||!1===u?!(!d.includes(b)&&!t.includes(b))||void 0:(!d.includes(b)||!u||!1!==i)&&null),"menu-collapsed-open":d.includes(a.id),"sidebar-group-active":d.includes(a.id)||t.includes(a.id)||p.includes(a.id)}),children:[(0,c.jsxs)(C.N_,{className:"d-flex align-items-center",to:"/",onClick:e=>j(e,a),children:[a.icon,(0,c.jsx)("span",{className:"menu-title text-truncate",children:a.title}),a.badge&&a.badgeText?(0,c.jsx)(ee.A,{className:"ms-auto me-1",color:a.badge,pill:!0,children:a.badgeText}):null]}),(0,c.jsx)("ul",{className:"menu-content",children:(0,c.jsx)(te.A,{isOpen:d&&d.includes(a.id)||t&&t.includes(a.id),children:(0,c.jsx)(de,{...v,items:a.children,groupActive:d,setGroupActive:h,currentActiveGroup:p,setCurrentActiveGroup:x,groupOpen:t,setGroupOpen:m,parentItem:a,menuCollapsed:u,menuHover:i,activeItem:l})})})]});var b};var ce=t(8975);const re=e=>{let{item:a}=e;return(0,c.jsxs)("li",{className:"navigation-header",children:[(0,c.jsx)("span",{children:a.header}),(0,c.jsx)(ce.A,{className:"feather-more-horizontal"})]})},de=e=>{const a={VerticalNavMenuLink:ae,VerticalNavMenuGroup:oe,VerticalNavMenuSectionHeader:re};return e.items.map(((t,n)=>{const s=a[(e=>e.header?"VerticalNavMenuSectionHeader":e.children?"VerticalNavMenuGroup":"VerticalNavMenuLink")(t)];return t.children?(0,c.jsx)(s,{item:t,index:n,...e},t.id):(0,c.jsx)(s,{item:t,...e},t.id||t.header)}))},me=e=>{const{menuCollapsed:a,menu:t,skin:s,menuData:i}=e,[l,r]=(0,n.useState)([]),[d,m]=(0,n.useState)([]),[u,h]=(0,n.useState)([]),[p,x]=(0,n.useState)(null),[v,f]=(0,n.useState)(!1),g=(0,n.useRef)(null);return(0,c.jsx)(n.Fragment,{children:(0,c.jsx)("div",{className:o()("main-menu menu-fixed menu-accordion menu-shadow",{expanded:v||!1===a,"menu-light":"semi-dark"!==s&&"dark"!==s,"menu-dark":"semi-dark"===s||"dark"===s}),onMouseEnter:()=>{f(!0)},onMouseLeave:()=>f(!1),children:t?t({...e}):(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(Z,{setGroupOpen:r,menuHover:v,...e}),(0,c.jsx)("div",{className:"shadow-bottom",ref:g}),(0,c.jsx)(j(),{className:"main-menu-content",options:{wheelPropagation:!1},onScrollY:e=>(e=>{g&&e.scrollTop>0?g.current.classList.contains("d-block")||g.current.classList.add("d-block"):g.current.classList.contains("d-block")&&g.current.classList.remove("d-block")})(e),children:(0,c.jsx)("ul",{className:"navigation navigation-main",children:(0,c.jsx)(de,{items:i,menuData:i,menuHover:v,groupOpen:l,activeItem:p,groupActive:d,setGroupOpen:r,menuCollapsed:a,setActiveItem:x,setGroupActive:m,currentActiveGroup:u,setCurrentActiveGroup:h})})})]})})})};var ue=t(3765);const he=()=>{const e=(0,d.wA)();return{navbarType:(0,d.d4)((e=>e.layout)).navbarType,setNavbarType:a=>{e((0,m.j$)(a))}}},pe=()=>{const e=(0,d.wA)();return{setFooterType:a=>{e((0,m.Qj)(a))},footerType:(0,d.d4)((e=>e.layout)).footerType}},xe=()=>{const e=(0,d.wA)();return{navbarColor:(0,d.d4)((e=>e.layout)).navbarColor,setNavbarColor:a=>{e((0,m.wL)(a))}}},ve=e=>{const{menu:a,navbar:t,footer:l,children:r,menuData:v}=e,[f,g]=L(),{skin:j,setSkin:b}=(0,i.h)(),{navbarType:N,setNavbarType:y}=he(),{footerType:C,setFooterType:z}=pe(),{navbarColor:S,setNavbarColor:T}=xe(),{layout:E,setLayout:O,setLastLayout:I}=(0,ue.g)(),[D,H]=(0,n.useState)(!1),[M,P]=(0,n.useState)(!1),[R,W]=(0,n.useState)(window.innerWidth),_=(0,d.wA)(),G=(0,d.d4)((e=>e.layout)),B=()=>{W(window.innerWidth)},V=(0,s.zy)(),Y=G.menuHidden,F=G.contentWidth,Q=G.menuCollapsed,X=e=>_((0,m.dE)(e));(0,n.useEffect)((()=>{M&&R<1200&&P(!1)}),[V]),(0,n.useEffect)((()=>{void 0!==window&&window.addEventListener("resize",B)}),[R]),(0,n.useEffect)((()=>(H(!0),()=>H(!1))),[]);const K={static:"footer-static",sticky:"footer-fixed",hidden:"footer-hidden"},J={floating:"boxed"===F?"floating-nav container-xxl":"floating-nav",sticky:"fixed-top",static:"navbar-static-top",hidden:"d-none"},q=""!==S&&"light"!==S&&"white"!==S;return D?(0,c.jsxs)("div",{className:o()("wrapper vertical-layout ".concat({floating:"navbar-floating",sticky:"navbar-sticky",static:"navbar-static",hidden:"navbar-hidden"}[N]||"navbar-floating"," ").concat(K[C]||"footer-static"),{"vertical-menu-modern":R>=1200,"menu-collapsed":Q&&R>=1200,"menu-expanded":!Q&&R>1200,"vertical-overlay-menu":R<1200,"menu-hide":!M&&R<1200,"menu-open":M&&R<1200}),...Y?{"data-col":"1-column"}:{},children:[Y?null:(0,c.jsx)(me,{skin:j,menu:a,menuData:v,menuCollapsed:Q,menuVisibility:M,setMenuCollapsed:X,setMenuVisibility:P}),(0,c.jsx)(h.A,{expand:"lg",container:!1,light:"dark"!==j,dark:"dark"===j||q,color:q?S:void 0,className:o()("header-navbar navbar align-items-center ".concat(J[N]||"floating-nav"," navbar-shadow")),children:(0,c.jsx)("div",{className:"navbar-container d-flex content",children:t?t({skin:j,setSkin:b,setMenuVisibility:P}):(0,c.jsx)(U,{setMenuVisibility:P,skin:j,setSkin:b})})}),r,(0,c.jsx)("div",{className:o()("sidenav-overlay",{show:M}),onClick:()=>P(!1)}),!0===x.A.layout.customizer?(0,c.jsx)(k,{skin:j,isRtl:f,layout:E,setSkin:b,setIsRtl:g,isHidden:Y,setLayout:O,footerType:C,navbarType:N,setIsHidden:e=>_((0,m.wB)(e)),themeConfig:x.A,navbarColor:S,contentWidth:F,setFooterType:z,setNavbarType:y,setLastLayout:I,menuCollapsed:Q,setNavbarColor:T,setContentWidth:e=>_((0,m.Yf)(e)),setMenuCollapsed:X}):null,(0,c.jsx)("footer",{className:o()("footer footer-light ".concat(K[C]||"footer-static"),{"d-none":"hidden"===C}),children:l||(0,c.jsx)(w,{footerType:C,footerClasses:K})}),!0===x.A.layout.scrollTop?(0,c.jsx)("div",{className:"scroll-to-top",children:(0,c.jsx)(A,{showOffset:300,className:"scroll-top d-block",children:(0,c.jsx)(p.A,{className:"btn-icon",color:"primary",children:(0,c.jsx)(u.A,{size:14})})})}):null]}):null};var fe=t(464),ge=t(1082),je=t(2823),be=t(1884);const Ne=[{id:"colors",title:"Colors",icon:(0,c.jsx)(je.A,{size:20}),navLink:be.A.TABLE}];var ke=t(1920);const ye={TABLE:"contact-us"},Ae=[{id:"contact-us",title:"Contact Us",icon:(0,c.jsx)(ke.A,{size:20}),navLink:ye.TABLE}],we=[{id:"home",title:"Dashboard",icon:(0,c.jsx)(fe.A,{size:20}),navLink:"/home"},{id:"chat",title:"Chat",icon:(0,c.jsx)(ge.A,{size:20}),navLink:"/apps/chat"},...Ae,...Ne],Le=e=>(0,c.jsx)(ve,{menuData:we,...e,children:(0,c.jsx)(s.sv,{})}),Ce=e=>{let{item:a,isChild:t,setMenuOpen:n}=e;const s=a.externalLink?"a":C.k2;return(0,c.jsx)("li",{onClick:()=>{n&&n(!1)},className:o()("nav-item",{disabled:a.disabled}),children:(0,c.jsxs)(s,{className:o()("d-flex align-items-center",{"dropdown-item":t,"nav-link":!t}),target:a.newTab?"_blank":void 0,...!0===a.externalLink?{href:a.navLink||"/"}:{to:a.navLink||"/",className:e=>{let{isActive:n}=e;const s="d-flex align-items-center";return n&&!a.disabled&&"#"!==a.navLink?"".concat(s,t?" dropdown-item active":" nav-link active"):"".concat(s,t?" dropdown-item":" nav-link")}},children:[a.icon,(0,c.jsx)("span",{children:a.title})]})})};var ze=t(6685);const Se={enabled:!0,name:"applyHeight",phase:"beforeWrite",fn:e=>{const a=window.innerHeight,t=e.state.elements.popper,n=t.getBoundingClientRect().top;let s,i;a-n-t.clientHeight-28<1&&(s=a-n-25,i={maxHeight:s,overflowY:"auto"});const l=t.getBoundingClientRect();l.left+l.width-(window.innerWidth-16)>=0&&t.closest(".dropdown").classList.add("openLeft"),e.state.styles.popper={...e.state.styles.popper,...i}}},Te=e=>{const{item:a,submenu:t,isChild:i}=e,[l,r]=(0,n.useState)(!1),[d,m]=(0,n.useState)(null),[u,h]=(0,n.useState)(null),[p]=L(),x=p?16:-16,v=p?"bottom-end":"bottom-start",f=p?"left-start":"right-start",g=(0,s.zy)().pathname,{update:j,styles:b,attributes:N}=(0,ze.E)(u,d,{placement:i?f:v,modifiers:[Se,{enabled:!0,name:"offset",options:{offset:i?[-8,15]:[x,5]}}]});return(0,c.jsxs)("li",{ref:h,onMouseEnter:()=>{r(!0),j()},onMouseLeave:()=>r(!1),className:o()("dropdown",{show:l,"nav-item":!1===t,"dropdown-submenu":!0===t,"sidebar-group-active active":ie(a,g)}),children:[(0,c.jsxs)(C.N_,{to:"/",onClick:e=>e.preventDefault(),className:o()("dropdown-toggle d-flex align-items-center",{"dropdown-item":!0===t,"nav-link":!1===t}),children:[a.icon,(0,c.jsx)("span",{children:a.title})]}),(0,c.jsx)("ul",{ref:m,style:{...b.popper},...N.popper,className:o()("dropdown-menu",{"first-level":!1===t}),children:(0,c.jsx)(Ee,{isChild:!0,submenu:!0,parentItem:a,menuOpen:l,items:a.children,setMenuOpen:r})})]})},Ee=e=>{const a={HorizontalNavMenuGroup:Te,HorizontalNavMenuLink:Ce};return e.items.map(((t,n)=>{const s=a[(e=>e.children?"HorizontalNavMenuGroup":"HorizontalNavMenuLink")(t)];return t.children?canViewMenuGroup(t)&&(0,c.jsx)(s,{item:t,index:n,...e},t.id):(0,c.jsx)(s,{item:t,index:n,...e},t.id)}))},Oe=e=>{let{menuData:a}=e;return(0,c.jsx)("div",{className:"navbar-container main-menu-content",children:(0,c.jsx)("ul",{className:"nav navbar-nav",id:"main-menu-navigation",children:(0,c.jsx)(Ee,{submenu:!1,items:a})})})},Ie=e=>{const{navbar:a,menuData:t,footer:s,children:l,menu:r}=e,{skin:v,setSkin:f}=(0,i.h)(),[g,j]=L(),{navbarType:b,setNavbarType:N}=he(),{footerType:y,setFooterType:z}=pe(),{navbarColor:S,setNavbarColor:T}=xe(),{layout:E,setLayout:O,setLastLayout:I}=(0,ue.g)(),[D,H]=(0,n.useState)(!1),[M,P]=(0,n.useState)(!1),R=(0,d.wA)(),W=(0,d.d4)((e=>e.layout)),_=W.contentWidth,B=W.menuHidden;(0,n.useEffect)((()=>(H(!0),window.addEventListener("scroll",(function(){window.pageYOffset>65&&!1===M&&P(!0),window.pageYOffset<65&&P(!1)})),()=>(H(!1),void P(!1)))),[]);const V={static:"footer-static",sticky:"footer-fixed",hidden:"footer-hidden"},Y={floating:"boxed"===_?"floating-nav container-xxl":"floating-nav",sticky:"fixed-top"},F=""!==S&&"light"!==S&&"white"!==S;return D?(0,c.jsxs)("div",{className:o()("wrapper horizontal-layout horizontal-menu ".concat({floating:"navbar-floating",sticky:"navbar-sticky",static:"navbar-static"}[b]||"navbar-floating"," ").concat(V[y]||"footer-static"," menu-expanded")),...B?{"data-col":"1-column"}:{},children:[(0,c.jsxs)(h.A,{expand:"lg",container:!1,className:o()("header-navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center",{"navbar-scrolled":M}),children:[!a&&(0,c.jsx)("div",{className:"navbar-header d-xl-block d-none",children:(0,c.jsx)("ul",{className:"nav navbar-nav",children:(0,c.jsx)(G.A,{children:(0,c.jsxs)(C.N_,{to:"/",className:"navbar-brand",children:[(0,c.jsx)("span",{className:"brand-logo",children:(0,c.jsx)("img",{src:x.A.app.appLogoImage,alt:"logo"})}),(0,c.jsx)("h2",{className:"brand-text mb-0",children:x.A.app.appName})]})})})}),(0,c.jsx)("div",{className:"navbar-container d-flex content",children:a?a({skin:v,setSkin:f}):(0,c.jsx)(U,{skin:v,setSkin:f})})]}),B?null:(0,c.jsx)("div",{className:"horizontal-menu-wrapper",children:(0,c.jsx)(h.A,{tag:"div",expand:"sm",light:"dark"!==v,dark:"dark"===v||F,className:o()("header-navbar navbar-horizontal navbar-shadow menu-border",{[Y[b]]:"static"!==b,"floating-nav":!Y[b]&&"static"!==b||"floating"===b}),children:r?r({menuData:t,routerProps:routerProps,currentActiveItem:currentActiveItem}):(0,c.jsx)(Oe,{menuData:t})})}),l,!0===x.A.layout.customizer?(0,c.jsx)(k,{skin:v,isRtl:g,layout:E,setSkin:f,setIsRtl:j,isHidden:B,setLayout:O,footerType:y,navbarType:b,setIsHidden:e=>R((0,m.wB)(e)),themeConfig:x.A,navbarColor:S,contentWidth:_,setFooterType:z,setNavbarType:N,setLastLayout:I,setNavbarColor:T,setContentWidth:e=>R((0,m.Yf)(e))}):null,(0,c.jsx)("footer",{className:o()("footer footer-light ".concat(V[y]||"footer-static"),{"d-none":"hidden"===y}),children:s||(0,c.jsx)(w,{footerType:y,footerClasses:V})}),!0===x.A.layout.scrollTop?(0,c.jsx)("div",{className:"scroll-to-top",children:(0,c.jsx)(A,{showOffset:300,className:"scroll-top d-block",children:(0,c.jsx)(p.A,{className:"btn-icon",color:"primary",children:(0,c.jsx)(u.A,{size:14})})})}):null]}):null},De=[{id:"home",title:"Home",icon:(0,c.jsx)(fe.A,{size:20}),navLink:"/home"},{id:"secondPage",title:"Second Page",icon:(0,c.jsx)(ke.A,{size:20}),navLink:"/second-page"}],He=e=>(0,c.jsx)(Ie,{menuData:De,...e,children:(0,c.jsx)(s.sv,{})});t(7915);const Me=e=>{const{children:a,routeMeta:t}=e,s=(0,d.wA)(),i=(0,d.d4)((e=>e.navbar)),l=(0,d.d4)((e=>e.contentWidth)),r=(0,d.d4)((e=>e.layout)),u="horizontal"===r.layout&&!t||"horizontal"===r.layout&&t&&!t.appLayout,h=u?"div":n.Fragment;return(0,n.useEffect)((()=>(t&&(t.contentWidth&&s((0,m.Yf)(t.contentWidth)),t.menuCollapsed&&s((0,m.dE)(t.menuCollapsed)),t.menuHidden&&s((0,m.wB)(t.menuHidden))),()=>{t&&(t.contentWidth&&t.contentWidth===store.layout.contentWidth&&s((0,m.Yf)(x.A.layout.contentWidth)),t.menuCollapsed&&t.menuCollapsed===store.layout.menuCollapsed&&s((0,m.dE)(!store.layout.menuCollapsed)),t.menuHidden&&t.menuHidden===store.layout.menuHidden&&s((0,m.wB)(!store.layout.menuHidden)))})),[t]),(0,c.jsxs)("div",{className:o()("app-content content overflow-hidden",{[t?t.className:""]:t&&t.className,"show-overlay":i.query.length}),children:[(0,c.jsx)("div",{className:"content-overlay"}),(0,c.jsx)("div",{className:"header-navbar-shadow"}),(0,c.jsx)("div",{className:o()({"content-wrapper":t&&!t.appLayout,"content-area-wrapper":t&&t.appLayout,"container-xxl p-0":"boxed"===l}),children:(0,c.jsx)(h,{...u?{className:"content-body"}:{},children:a})})]})},Pe=(0,n.memo)(Me),Re=e=>{let{children:a,route:t}=e;if(t){const e=(0,$.gL)(),a=t.meta&&t.meta.restricted;if(e&&a)return(0,c.jsx)(s.C5,{to:(0,$.YI)(e.role)})}return(0,c.jsx)(n.Suspense,{fallback:null,children:a})};var We=t(4693);const _e=(0,n.lazy)((()=>Promise.all([t.e(892),t.e(899),t.e(253)]).then(t.bind(t,7253)))),Ge=[{path:We.S0,element:(0,c.jsx)(_e,{}),meta:{layout:"blank"}}];var Be=t(1210);const Ve=(0,n.lazy)((()=>Promise.all([t.e(892),t.e(291)]).then(t.bind(t,2291)))),Ye=(0,n.lazy)((()=>Promise.all([t.e(892),t.e(899),t.e(151)]).then(t.bind(t,4151)))),Fe=[{path:be.A.TABLE,element:(0,c.jsx)(Ve,{})},{path:be.A.EDIT,element:(0,c.jsx)(Ye,{})},{path:be.A.ADD,element:(0,c.jsx)(Ye,{})}],Qe=(0,n.lazy)((()=>Promise.all([t.e(235),t.e(566)]).then(t.bind(t,4566)))),Xe=[{path:ye.TABLE,element:(0,c.jsx)(Qe,{})}],Ke={blank:(0,c.jsx)(r,{}),vertical:(0,c.jsx)(Le,{}),horizontal:(0,c.jsx)(He,{})},Ue="%s - Mohamed Attar",Je="/home",qe=(0,n.lazy)((()=>t.e(986).then(t.bind(t,9986)))),$e=(0,n.lazy)((()=>t.e(233).then(t.bind(t,6233)))),Ze=[{path:"/",index:!0,element:(0,c.jsx)(s.C5,{replace:!0,to:Je})},{path:Be.QX,element:(0,c.jsx)(qe,{})},...Ge,...Xe,...Fe,{path:"*",element:(0,c.jsx)($e,{}),meta:{layout:"blank"}}],ea=e=>{if((0,$.XY)(e.element.props))return e.meta?{routeMeta:e.meta}:{}},aa=e=>{const a=e||"vertical",t=[];return["vertical","horizontal","blank"].forEach((e=>{const s=((e,a)=>{const t=[];return Ze&&Ze.filter((s=>{let i=!1;if(s.meta&&s.meta.layout&&s.meta.layout===e||(void 0===s.meta||void 0===s.meta.layout)&&a===e){const e=Re;if(s.meta&&(i="blank"===s.meta.layout),s.element){const a=(0,$.XY)(s.element.props)&&!1===i?Pe:n.Fragment;s.element=(0,c.jsx)(a,{...!1===i?ea(s):{},children:(0,c.jsx)(e,{route:s,children:s.element})})}t.push(s)}return t})),t})(e,a);t.push({path:"/",element:Ke[e]||Ke[a],children:s})})),t}},9546:(e,a,t)=>{t.d(a,{XY:()=>s,YI:()=>l,gL:()=>i});var n=t(4333);const s=e=>0===Object.keys(e).length,i=()=>JSON.parse(localStorage.getItem("userData")),l=e=>"admin"===e?n.Pk:"client"===e?"/access-control":"/login"},3765:(e,a,t)=>{t.d(a,{g:()=>l});var n=t(5043),s=t(3003),i=t(911);const l=()=>{const e=(0,s.wA)(),a=(0,s.d4)((e=>e.layout)),t=a=>{e((0,i.pQ)(a))};if(window){const e=1200;(0,n.useEffect)((()=>{window.innerWidth<e&&t("vertical"),window.addEventListener("resize",(()=>{window.innerWidth<=e&&"vertical"!==a.lastLayout&&"vertical"!==a.layout&&t("vertical"),window.innerWidth>=e&&a.lastLayout!==a.layout&&t(a.lastLayout)}))}),[a.layout])}return{layout:a.layout,setLayout:t,lastLayout:a.lastLayout,setLastLayout:a=>{e((0,i.bF)(a))}}}},9414:(e,a,t)=>{t.d(a,{h:()=>l});var n=t(5043),s=t(911),i=t(3003);const l=()=>{const e=(0,i.wA)(),a=(0,i.d4)((e=>e.layout));return(0,n.useEffect)((()=>{const e=window.document.body,t={dark:"dark-layout",bordered:"bordered-layout","semi-dark":"semi-dark-layout"};e.classList.remove(...e.classList),"light"!==a.skin&&e.classList.add(t[a.skin])}),[a.skin]),{skin:a.skin,setSkin:a=>{e((0,s.GP)(a))}}}}}]);
//# sourceMappingURL=401.3e549b02.chunk.js.map