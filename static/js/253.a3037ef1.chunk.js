"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[253],{7253:(e,i,r)=>{r.r(i),r.d(i,{default:()=>v});var t=r(5043),a=r(2719),n=r(6444);const s=()=>(0,n.Ay)({email:(0,n.w_)({required:null}),password:(0,n.Fv)({min:null})});var o=r(7073);const l=()=>{const{dispatchLogin:e,loginSelector:i}=(0,o.o)(),{userInfo:r,isLoading:t,code:a}=i;return{handleLogin:async i=>{await e(i)},userInfo:r,isLoading:t,code:a}};var u=r(6762),d=r(3216),c=r(1210),m=r(6994),f=r(6537),b=r(579);const g=(0,t.lazy)((()=>r.e(666).then(r.bind(r,9666)))),v=()=>{const e=(0,d.Zp)();(0,t.useEffect)((()=>{(0,m.x3)()?e(c.Sg):(0,f.z)()}),[e]);const{handleLogin:i,isLoading:r,code:n}=l(),o=(0,a.eA)({initialValues:{email:"",password:""},validationSchema:s(),onSubmit:e=>i(e)});return(0,t.useEffect)((()=>{n===u.c.OK&&e(c.Sg,{replace:!0})}),[n]),(0,b.jsx)(g,{handleSubmit:o.handleSubmit,formikValues:o.values,handleChange:o.handleChange,formikErrors:o.errors,isSubmitting:r})}},2719:(e,i,r)=>{r.d(i,{fe:()=>f,dM:()=>m,eA:()=>c});var t=r(3892),a=r(5173),n=r.n(a);const s=e=>{let{initialValues:i,validationSchema:r,onSubmit:t,overrideConfig:a}=e;return{initialValues:i,validateOnBlur:!0,validateOnChange:!1,validateOnMount:!1,enableReinitialize:!0,validationSchema:r,onSubmit:t,...a}};s.propTypes={initialValues:n().object,validationSchema:n().object.isRequired,onSubmit:n().func.isRequired};const o=s;var l=r(6762),u=r(5431),d=r(9546);const c=e=>{const i=o(e);return(0,t.Wx)(i)},m=(e,i)=>{if(e.code!==l.c.VALIDATION_ERRORS)return;console.log("iam here");const{initialValues:r,setErrors:t}=i,a=Object.keys(r),n={};a.forEach((i=>{void 0!==e.data[i]&&(n[i]=e.data[i])})),(0,d.XY)(n)||t(n);const s=Object.keys(e.data);for(let o=0;o<s.length;o++)if(!a.includes(s[o])){u.A.error(e.data[s[o]]);break}},f=e=>({setErrors:e.setErrors,initialValues:e.initialValues,setSubmitting:e.setSubmitting});c.propTypes={initialValues:n().object,validationSchema:n().object.isRequired,onSubmit:n().func.isRequired,overrideConfig:n().object}},6444:(e,i,r)=>{r.d(i,{Tf:()=>m,Ay:()=>f,w_:()=>o,UJ:()=>c,F7:()=>u,Fv:()=>d,j2:()=>l});var t=r(899);const a=e=>e instanceof File,n={file:(e,i)=>!!a(e)||i("field must be a valid file"),image:(e,i)=>{var r;console.log(e,e.size,e.type);const t=(null===e||void 0===e||null===(r=e.type)||void 0===r?void 0:r.split("/")[0])||null;return!(!a(e)||"image"!==t)||i({message:"field must be an image"})}},s=(e,i)=>{var r;return i&&Object.keys(i).forEach((r=>{i[r]?delete e[r]:e[r]=i[r]})),null===(r=Object.values(e))||void 0===r?void 0:r.filter((e=>!!e))},o=e=>s({string:"string",required:"required",email:"email",trim:"trim"},e),l=e=>s({string:"string",required:"required",max:"max:255",trim:"trim"},e),u=e=>l({max:null,...e}),d=e=>s({string:"string",required:"required",min:"min:8",trim:"trim"},e),c=e=>s({number:"number",required:"required",min:"min:1"},e),m=e=>s({array:"array",required:"required"},e),f=e=>{let i=t.object().shape({});return Object.entries(e).forEach((e=>{let[r,a]=e;if(a){let e=t;a.forEach((i=>{const[r,...t]=i.split(":");e=void 0!==n[r]?e.test(r,"error",((e,i)=>{let{createError:a}=i;return n[r](e,a,...t)})):e[r](...t)})),i=i.shape({[r]:e})}})),i}}}]);
//# sourceMappingURL=253.a3037ef1.chunk.js.map