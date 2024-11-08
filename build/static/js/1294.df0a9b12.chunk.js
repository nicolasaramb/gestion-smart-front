"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[1294],{35878:(e,s,r)=>{r.d(s,{Z:()=>n});var t=r(72791);const n=()=>{const e=(0,t.useRef)(!0);return(0,t.useEffect)((()=>()=>{e.current=!1}),[]),e}},98393:(e,s,r)=>{r.d(s,{Z:()=>a});var t=r(36314),n=r(20890),o=r(50533),i=r(80184);const a=()=>(0,i.jsxs)(t.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(n.Z,{variant:"subtitle2",component:o.Z,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),(0,i.jsx)(n.Z,{variant:"subtitle2",component:o.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})},45290:(e,s,r)=>{r.d(s,{Z:()=>i});var t=r(697),n=r(23735),o=r(80184);const i=e=>{let{children:s,...r}=e;return(0,o.jsx)(n.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...r,children:(0,o.jsx)(t.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:s})})}},33914:(e,s,r)=>{r.d(s,{Z:()=>t});const t=(0,r(66934).ZP)("div")((e=>{let{theme:s}=e;return{backgroundColor:"dark"===s.palette.mode?s.palette.background.default:s.palette.grey[100],minHeight:"100vh"}}))},13479:(e,s,r)=>{r.d(s,{Z:()=>z});var t=r(72791),n=r(57689),o=r(13967),i=r(68096),a=r(30829),l=r(77196),d=r(63466),c=r(13400),h=r(47071),u=r(697),m=r(61889),x=r(20890),Z=r(24518),p=r(8007),j=r(92506),w=r(17834),g=r(35878),f=r(15542),b=r(28781);const v=e=>{let s=0;return e.length>5&&(s+=1),e.length>7&&(s+=1),(e=>new RegExp(/[0-9]/).test(e))(e)&&(s+=1),(e=>new RegExp(/[!#@$%^&*)(+=._-]/).test(e))(e)&&(s+=1),(e=>new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e))(e)&&(s+=1),s};var P=r(36517),y=r(87204),C=r(3746),k=r(20165),S=r(80184);const z=e=>{let{...s}=e;const r=(0,o.Z)(),z=(0,n.s0)(),M=(0,g.Z)(),[I,R]=t.useState(!1),[W,B]=t.useState(0),[E,_]=t.useState(),{isLoggedIn:q}=(0,w.Z)(),D=()=>{R(!I)},V=e=>{e.preventDefault()},A=e=>{const s=v(e);var r;B(s),_((r=s)<2?{label:"Poor",color:b.Z.errorMain}:r<3?{label:"Weak",color:b.Z.warningDark}:r<4?{label:"Normal",color:b.Z.orangeMain}:r<5?{label:"Good",color:b.Z.successMain}:r<6?{label:"Strong",color:b.Z.successDark}:{label:"Poor",color:b.Z.errorMain})};return(0,t.useEffect)((()=>{A("")}),[]),(0,S.jsx)(j.J9,{initialValues:{password:"",confirmPassword:"",submit:null},validationSchema:p.Ry().shape({password:p.Z_().max(255).required("Password is required"),confirmPassword:p.Z_().required("Confirm Password is required").test("confirmPassword","Both Password must be match!",((e,s)=>s.parent.password===e))}),onSubmit:async(e,s)=>{let{setErrors:r,setStatus:t,setSubmitting:n}=s;try{M.current&&(t({success:!0}),n(!1),(0,P.WI)((0,y.ss)({open:!0,message:"Successfuly reset password.",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((()=>{z("/",{replace:!0})}),1500))}catch(o){console.error(o),M.current&&(t({success:!1}),r({submit:o.message}),n(!1))}},children:e=>{let{errors:t,handleBlur:n,handleChange:o,handleSubmit:p,isSubmitting:j,touched:w,values:g}=e;return(0,S.jsxs)("form",{noValidate:!0,onSubmit:p,...s,children:[(0,S.jsxs)(i.Z,{fullWidth:!0,error:Boolean(w.password&&t.password),sx:{...r.typography.customInput},children:[(0,S.jsx)(a.Z,{htmlFor:"outlined-adornment-password-reset",children:"Password"}),(0,S.jsx)(l.Z,{id:"outlined-adornment-password-reset",type:I?"text":"password",value:g.password,name:"password",onBlur:n,onChange:e=>{o(e),A(e.target.value)},endAdornment:(0,S.jsx)(d.Z,{position:"end",children:(0,S.jsx)(c.Z,{"aria-label":"toggle password visibility",onClick:D,onMouseDown:V,edge:"end",size:"large",children:I?(0,S.jsx)(C.Z,{}):(0,S.jsx)(k.Z,{})})}),inputProps:{}})]}),w.password&&t.password&&(0,S.jsx)(i.Z,{fullWidth:!0,children:(0,S.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-reset",children:t.password})}),0!==W&&(0,S.jsx)(i.Z,{fullWidth:!0,children:(0,S.jsx)(u.Z,{sx:{mb:2},children:(0,S.jsxs)(m.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,S.jsx)(m.ZP,{item:!0,children:(0,S.jsx)(u.Z,{style:{backgroundColor:null===E||void 0===E?void 0:E.color},sx:{width:85,height:8,borderRadius:"7px"}})}),(0,S.jsx)(m.ZP,{item:!0,children:(0,S.jsx)(x.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===E||void 0===E?void 0:E.label})})]})})}),(0,S.jsxs)(i.Z,{fullWidth:!0,error:Boolean(w.confirmPassword&&t.confirmPassword),sx:{...r.typography.customInput},children:[(0,S.jsx)(a.Z,{htmlFor:"outlined-adornment-confirm-password",children:"Confirm Password"}),(0,S.jsx)(l.Z,{id:"outlined-adornment-confirm-password",type:"password",value:g.confirmPassword,name:"confirmPassword",label:"Confirm Password",onBlur:n,onChange:o,inputProps:{}})]}),w.confirmPassword&&t.confirmPassword&&(0,S.jsx)(i.Z,{fullWidth:!0,children:(0,S.jsxs)(h.Z,{error:!0,id:"standard-weight-helper-text-confirm-password",children:[" ",t.confirmPassword," "]})}),t.submit&&(0,S.jsx)(u.Z,{sx:{mt:3},children:(0,S.jsx)(h.Z,{error:!0,children:t.submit})}),(0,S.jsx)(u.Z,{sx:{mt:1},children:(0,S.jsx)(f.Z,{children:(0,S.jsx)(Z.Z,{disableElevation:!0,disabled:j,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Reset Password"})})})]})}})}},41294:(e,s,r)=>{r.r(s),r.d(s,{default:()=>Z});var t=r(11087),n=r(13967),o=r(43706),i=r(61889),a=r(36314),l=r(20890),d=r(33914),c=r(45290),h=r(24904),u=r(13479),m=r(98393),x=r(80184);const Z=()=>{const e=(0,n.Z)(),s=(0,o.Z)(e.breakpoints.down("md"));return(0,x.jsx)(d.Z,{children:(0,x.jsxs)(i.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,x.jsx)(i.ZP,{item:!0,xs:12,children:(0,x.jsx)(i.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,x.jsx)(i.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,x.jsx)(c.Z,{children:(0,x.jsxs)(i.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,x.jsx)(i.ZP,{item:!0,sx:{mb:3},children:(0,x.jsx)(t.rU,{to:"#","aria-label":"theme-logo",children:(0,x.jsx)(h.Z,{})})}),(0,x.jsx)(i.ZP,{item:!0,xs:12,children:(0,x.jsx)(i.ZP,{container:!0,direction:s?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,x.jsx)(i.ZP,{item:!0,children:(0,x.jsxs)(a.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,x.jsx)(l.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:s?"h3":"h2",children:"Reset Password"}),(0,x.jsx)(l.Z,{variant:"caption",fontSize:"16px",textAlign:s?"center":"inherit",children:"Please choose your new password"})]})})})}),(0,x.jsx)(i.ZP,{item:!0,xs:12,children:(0,x.jsx)(u.Z,{})})]})})})})}),(0,x.jsx)(i.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,x.jsx)(m.Z,{})})]})})}},3746:(e,s,r)=>{var t=r(64836);s.Z=void 0;var n=t(r(45649)),o=r(80184),i=(0,n.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");s.Z=i},20165:(e,s,r)=>{var t=r(64836);s.Z=void 0;var n=t(r(45649)),o=r(80184),i=(0,n.default)((0,o.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");s.Z=i}}]);
//# sourceMappingURL=1294.df0a9b12.chunk.js.map