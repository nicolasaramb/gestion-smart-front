"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[1102],{61102:(e,i,r)=>{r.r(i),r.d(i,{default:()=>ti});var t=r(72791),n=r(57689),s=r(11087),a=r(13967),l=r(697),o=r(61889),d=r(42169),c=r(20890),x=r(24518),h=r(13603),m=r(43896),p=r(13400),j=r(94721),Z=r(50533),u=r(48550),g=r(15542),v=r(47071),k=r(43706),y=r(95080),f=r(65117),b=r(23786),P=r(36314),w=r(56125),z=r(8007),C=r(30804),S=r.n(C),I=r(61134),R=r(44695),M=r(76729),F=r(1926),O=r(57621),$=r(63466),E=r(22646),W=r(37267),A=r(74934),L=r(36027),q=r(95421),T=r(80184);const D=r(5242),_=e=>{let{commentId:i,handleReplayLikes:r,onReply:n,postId:s,reply:d}=e;const h=(0,a.Z)(),{id:m}=d,[p,j]=(0,t.useState)(null),Z=()=>{j(null)},u=d;return(0,T.jsx)(T.Fragment,{children:Object.keys(u).length>0&&(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsx)(l.Z,{sx:{pl:6.25},children:(0,T.jsx)(O.Z,{sx:{background:"dark"===h.palette.mode?h.palette.dark.main:h.palette.grey[50],padding:"16px 16px 8px",mt:1.25},children:(0,T.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(o.ZP,{container:!0,wrap:"nowrap",alignItems:"center",spacing:1,children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(E.Z,{sx:{width:24,height:24},size:"sm",alt:"User 1",src:u.profile&&u.profile.avatar&&D(`./${u.profile.avatar}`)})}),(0,T.jsx)(o.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,T.jsxs)(o.ZP,{container:!0,alignItems:"center",spacing:1,children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(c.Z,{align:"left",variant:"h5",component:"div",children:u.profile.name})}),(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsxs)(c.Z,{align:"left",variant:"caption",children:[(0,T.jsx)(W.Z,{sx:{width:"10px",height:"10px",opacity:.5,m:"0 5px"}})," ",u.profile.time]})})]})}),(0,T.jsxs)(o.ZP,{item:!0,children:[(0,T.jsx)(y.Z,{sx:{borderRadius:"12px"},onClick:e=>{j(null===e||void 0===e?void 0:e.currentTarget)},"aria-label":"more options",children:(0,T.jsx)(E.Z,{variant:"rounded",sx:{...h.typography.commonAvatar,...h.typography.smallAvatar,background:"dark"===h.palette.mode?h.palette.dark.main:h.palette.secondary.light,color:"dark"===h.palette.mode?h.palette.dark.light:h.palette.secondary.dark,zIndex:1,transition:"all .2s ease-in-out",'&[aria-controls="menu-list-grow"],&:hover':{background:h.palette.secondary.main,color:h.palette.secondary.light}},"aria-controls":"menu-comment-reply","aria-haspopup":"true",children:(0,T.jsx)(A.Z,{fontSize:"inherit"})})}),(0,T.jsxs)(f.Z,{id:"menu-comment-reply",anchorEl:p,keepMounted:!0,open:Boolean(p),onClose:Z,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,T.jsx)(b.Z,{onClick:Z,children:"Edit"}),(0,T.jsx)(b.Z,{onClick:Z,children:"Delete"})]})]})]})}),(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsx)(c.Z,{align:"left",variant:"body2",children:u.data.comment})}),(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(P.Z,{direction:"row",spacing:2,sx:{color:"dark"===h.palette.mode?"grey.700":"grey.800"},children:[(0,T.jsxs)(x.Z,{onClick:()=>r(s,i,m),variant:"text",color:"inherit",size:"small",startIcon:(0,T.jsx)(L.Z,{color:u.data.likes&&u.data.likes.like?"secondary":"inherit"}),children:[u.data.likes&&u.data.likes.value?u.data.likes.value:0," likes"]}),(0,T.jsx)(x.Z,{variant:"text",onClick:n,size:"small",color:"inherit",startIcon:(0,T.jsx)(q.Z,{color:"primary"}),children:"reply"})]})})]})})})})})};var U=r(43985);const B=r(5242),G=z.Ry().shape({name:z.Z_().required("Reply Field is Required")}),J=e=>{let{bug:i,label:r,name:t,required:n,...s}=e;const{control:a}=(0,I.Gc)();let l=!1,d="";return i&&Object.prototype.hasOwnProperty.call(i,t)&&(l=!0,d=i[t].message),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(I.Qr,{name:t,control:a,defaultValue:"",render:e=>{let{field:i}=e;return(0,T.jsx)(u.Z,{fullWidth:!0,label:r,InputLabelProps:{className:n?"required-label":"",required:n||!1},error:l,...i})},...s}),d&&(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsx)(v.Z,{error:!0,children:d})})]})},N=e=>{var i,r,n,s,d,h,m,p,j,Z;let{comment:u,handleCommentLikes:v,handleReplayLikes:z,postId:C,replyAdd:M,user:F}=e;const D=(0,a.Z)(),N=(0,k.Z)(D.breakpoints.down("md")),[V,X]=(0,t.useState)(null),Y=()=>{X(null)},[Q,H]=(0,t.useState)(!1),K=()=>{H((e=>!e))};let ee=(0,T.jsx)(T.Fragment,{});var ie;Object.keys(u).length>0&&null!==(i=u.data)&&void 0!==i&&i.replies&&null!==(r=u.data)&&void 0!==r&&r.replies.length&&(ee=null===(ie=u.data)||void 0===ie?void 0:ie.replies.map(((e,i)=>(0,T.jsx)(_,{postId:C,commentId:u.id,onReply:K,reply:e,handleReplayLikes:z},i))));const re=(0,I.cI)({resolver:(0,R.X)(G)}),{handleSubmit:te,formState:{errors:ne},reset:se}=re;return(0,T.jsxs)(T.Fragment,{children:[Object.keys(u).length>0&&(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsx)(O.Z,{sx:{background:"dark"===D.palette.mode?D.palette.dark.main:D.palette.grey[50],padding:"16px 16px 8px",mt:1.25},children:(0,T.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(o.ZP,{container:!0,wrap:"nowrap",alignItems:"center",spacing:1,children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(E.Z,{sx:{width:24,height:24},size:"sm",alt:"User 1",src:u.profile&&u.profile.avatar&&B(`./${u.profile.avatar}`)})}),(0,T.jsx)(o.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,T.jsxs)(o.ZP,{container:!0,alignItems:"center",spacing:1,children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(c.Z,{align:"left",variant:"h5",component:"div",children:u.profile.name})}),(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsxs)(c.Z,{align:"left",variant:"caption",children:[(0,T.jsx)(W.Z,{sx:{width:"10px",height:"10px",opacity:.5,m:"0 5px"}})," ",u.profile.time]})})]})}),(0,T.jsxs)(o.ZP,{item:!0,children:[(0,T.jsx)(y.Z,{sx:{borderRadius:"12px"},"aria-label":"more options",children:(0,T.jsx)(E.Z,{variant:"rounded",sx:{...D.typography.commonAvatar,...D.typography.smallAvatar,background:"dark"===D.palette.mode?D.palette.dark.main:D.palette.secondary.light,color:"dark"===D.palette.mode?D.palette.dark.light:D.palette.secondary.dark,zIndex:1,transition:"all .2s ease-in-out",'&[aria-controls="menu-list-grow"],&:hover':{background:D.palette.secondary.main,color:D.palette.secondary.light}},"aria-controls":"menu-comment","aria-haspopup":"true",onClick:e=>{X(e.currentTarget)},children:(0,T.jsx)(A.Z,{fontSize:"inherit"})})}),(0,T.jsxs)(f.Z,{id:"menu-comment",anchorEl:V,keepMounted:!0,open:Boolean(V),onClose:Y,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,T.jsx)(b.Z,{onClick:Y,children:"Edit"}),(0,T.jsx)(b.Z,{onClick:Y,children:"Delete"})]})]})]})}),(0,T.jsx)(o.ZP,{item:!0,xs:12,sx:{"&.MuiGrid-root":{pt:1.5}},children:(0,T.jsx)(c.Z,{align:"left",variant:"body2",children:null===(n=u.data)||void 0===n?void 0:n.comment})}),(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(P.Z,{direction:"row",spacing:2,sx:{color:"dark"===D.palette.mode?"grey.700":"grey.800"},children:[(0,T.jsxs)(x.Z,{onClick:()=>v(C,u.id),variant:"text",color:"inherit",size:"small",startIcon:(0,T.jsx)(L.Z,{color:null!==(s=u.data)&&void 0!==s&&s.likes&&null!==(d=u.data)&&void 0!==d&&d.likes.like?"secondary":"inherit"}),children:[null!==(h=u.data)&&void 0!==h&&h.likes&&null!==(m=u.data)&&void 0!==m&&m.likes.value?null===(p=u.data)||void 0===p?void 0:p.likes.value:0," likes"]}),(0,T.jsxs)(x.Z,{variant:"text",onClick:K,color:"inherit",size:"small",startIcon:(0,T.jsx)(q.Z,{color:"primary"}),children:[null!==(j=u.data)&&void 0!==j&&j.replies?null===(Z=u.data)||void 0===Z?void 0:Z.replies.length:0," reply"]})]})})]})})}),ee,(0,T.jsx)(w.Z,{in:Q,sx:{width:"100%"},children:Q&&(0,T.jsx)(o.ZP,{item:!0,xs:12,sx:{pl:{xs:1,sm:3},pt:3},children:(0,T.jsx)(l.Z,{sx:{ml:4.25,[D.breakpoints.down("md")]:{ml:0}},children:(0,T.jsx)("form",{onSubmit:te((async e=>{K();const i={id:S()("#REPLY_"),profile:F,data:{comment:e.name,likes:{like:!1,value:0},replies:[]}};M(C,u.id,i),se({name:""})})),children:(0,T.jsxs)(o.ZP,{container:!0,spacing:2,alignItems:"flex-start",children:[(0,T.jsx)(o.ZP,{item:!0,sx:{display:{xs:"none",sm:"block"}},children:(0,T.jsx)(E.Z,{sx:{mt:1.5},alt:"User 1",src:u.profile&&u.profile.avatar&&B(`./${u.profile.avatar}`)})}),(0,T.jsx)(o.ZP,{item:!0,xs:!0,zeroMinWidth:!0,sx:{mt:1},children:(0,T.jsx)(I.RV,{...re,children:(0,T.jsx)(J,{fullWidth:!0,name:"name",label:"Write a reply...",size:N?"small":"medium",bug:ne,InputProps:{label:"Write a reply...",startAdornment:(0,T.jsx)($.Z,{position:"start",children:(0,T.jsx)(U.Z,{fontSize:"small"})})}})})}),(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(g.Z,{children:(0,T.jsx)(x.Z,{type:"submit",variant:"contained",color:"secondary",size:N?"small":"large",sx:{mt:1.5},children:"Reply"})})})]})})})})})]})};var V=r(23735),X=r(17834),Y=r(27888),Q=r(93774),H=r(42763),K=r(77154);function ee(e,i,r){let t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return`${e}?w=${i*n}&h=${r*t}&fit=crop&auto=format 1x,\n  ${e}?w=${i*n}&h=${r*t}&fit=crop&auto=format&dpr=2 2x`}const ie=e=>{let{itemData:i}=e;const{borderRadius:r}=(0,K.Z)();return(0,T.jsx)(H.Z,{sx:{transform:"translateZ(0)",overflowY:"visible",mb:0},gap:8,children:i.map((e=>{const i=e.featured?2:1,t=e.featured?2:1;return(0,T.jsxs)(Y.Z,{cols:i,rows:t,sx:{overflow:"hidden",borderRadius:`${r}px`},children:[(0,T.jsx)("img",{srcSet:ee(`assets/images/profile/${e.img}`,250,200,t,i),alt:e.title,loading:"lazy"}),(0,T.jsx)(Q.Z,{sx:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},title:e.title,position:"top",actionPosition:"left"})]},e.img)}))})};var re=r(80150),te=r(824),ne=r(54520),se=r(9673),ae=r(92373);const le=r(5242),oe=z.Ry().shape({name:z.Z_().required("Comment Field is Required")}),de=e=>{let{bug:i,label:r,size:t,fullWidth:n=!0,name:s,required:a,...l}=e,d=!1,c="";return i&&Object.prototype.hasOwnProperty.call(i,s)&&(d=!0,c=i[s].message),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(I.Qr,{name:s,defaultValue:"",render:e=>{let{field:i}=e;return(0,T.jsx)(u.Z,{fullWidth:n,size:t,label:r,InputLabelProps:{className:a?"required-label":"",required:a||!1},error:d,...i})},...l}),c&&(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsx)(v.Z,{error:!0,children:c})})]})},ce=e=>{let{commentAdd:i,handleCommentLikes:r,handlePostLikes:n,handleReplayLikes:s,post:l,replyAdd:h}=e;const m=(0,a.Z)(),{user:j}=(0,X.Z)(),{id:Z,data:u}=l;let{profile:v}=l;v={...v,name:(null===j||void 0===j?void 0:j.name)||v.name};const{borderRadius:z}=(0,K.Z)(),C=(0,k.Z)(m.breakpoints.down("md")),[O,$]=t.useState(null),q=()=>{$(null)},[D,_]=t.useState(null),U=()=>{_(null)},[B,G]=t.useState(!(u.comments&&u.comments.length>0)),J=()=>{G((e=>!e))};let Y=(0,T.jsx)(T.Fragment,{});u&&u.comments&&(Y=u.comments.map((e=>(0,T.jsx)(N,{postId:Z,comment:e,user:v,replyAdd:h,handleCommentLikes:r,handleReplayLikes:s},e.id))));const Q=(0,I.cI)({resolver:(0,R.X)(oe)}),{handleSubmit:H,formState:{errors:ee},reset:ce}=Q;return(0,T.jsx)(V.Z,{children:(0,T.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(o.ZP,{container:!0,wrap:"nowrap",alignItems:"center",spacing:1,children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(E.Z,{alt:"User 1",src:v.avatar&&le(`./${v.avatar}`)})}),(0,T.jsx)(o.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,T.jsxs)(o.ZP,{container:!0,alignItems:"center",spacing:1,children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(c.Z,{align:"left",variant:"h5",component:"div",children:v.name})}),(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsxs)(c.Z,{align:"left",variant:"caption",children:[(0,T.jsx)(W.Z,{sx:{width:"10px",height:"10px",opacity:.5,m:"0 5px"}})," ",v.time]})})]})}),(0,T.jsxs)(o.ZP,{item:!0,children:[(0,T.jsx)(y.Z,{sx:{borderRadius:"12px"},onClick:e=>{$(e.currentTarget)},"aria-label":"more options",children:(0,T.jsx)(E.Z,{variant:"rounded",sx:{...m.typography.commonAvatar,...m.typography.smallAvatar,background:"dark"===m.palette.mode?m.palette.dark.main:m.palette.secondary.light,color:"dark"===m.palette.mode?m.palette.dark.light:m.palette.secondary.dark,zIndex:1,transition:"all .2s ease-in-out",'&[aria-controls="menu-list-grow"],&:hover':{background:m.palette.secondary.main,color:m.palette.secondary.light}},"aria-controls":"menu-post","aria-haspopup":"true",children:(0,T.jsx)(A.Z,{fontSize:"inherit"})})}),(0,T.jsxs)(f.Z,{id:"menu-post",anchorEl:O,keepMounted:!0,open:Boolean(O),onClose:q,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,T.jsx)(b.Z,{onClick:q,children:"Edit"}),(0,T.jsx)(b.Z,{onClick:q,children:"Delete"})]})]})]})}),(0,T.jsx)(o.ZP,{item:!0,xs:12,sx:{"& > p":{...m.typography.body1,mb:0}},children:(0,T.jsx)(M.D,{remarkPlugins:[F.Z],children:u.content})}),u&&u.images&&u.images.length>0&&(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsx)(ie,{itemData:u.images})}),u.video&&(0,T.jsx)(o.ZP,{item:!0,xs:12,sx:{"&.MuiGrid-root":{pt:2}},children:(0,T.jsx)(d.Z,{sx:{borderRadius:`${z}px`,height:330,[m.breakpoints.down("xl")]:{height:220}},component:"iframe",src:`https://www.youtube.com/embed/${u.video}`,"aria-label":"theme related video"})}),(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(o.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:2,sx:{mt:0,color:"dark"===m.palette.mode?"grey.700":"grey.800"},children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsxs)(P.Z,{direction:"row",spacing:2,children:[(0,T.jsxs)(x.Z,{variant:"text",onClick:()=>n(Z),color:"inherit",size:"small",startIcon:(0,T.jsx)(L.Z,{color:u&&u.likes&&u.likes.like?"primary":"inherit"}),children:[u&&u.likes&&u.likes.value?u.likes.value:0,(0,T.jsx)(c.Z,{color:"inherit",sx:{fontWeight:500,ml:.5,display:{xs:"none",sm:"block"}},children:"likes"})]}),(0,T.jsxs)(x.Z,{onClick:J,size:"small",variant:"text",color:"inherit",startIcon:(0,T.jsx)(ae.Z,{color:"secondary"}),children:[u.comments?u.comments.length:0," comments"]})]})}),(0,T.jsxs)(o.ZP,{item:!0,children:[(0,T.jsx)(p.Z,{onClick:e=>{_(e.currentTarget)},size:"large","aria-label":"share options",children:(0,T.jsx)(re.Z,{sx:{width:"16px",height:"16px"}})}),(0,T.jsxs)(f.Z,{id:"menu-post",anchorEl:D,keepMounted:!0,open:Boolean(D),onClose:U,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiSvgIcon-root":{marginRight:"14px",fontSize:"1.25rem"}},children:[(0,T.jsxs)(b.Z,{onClick:U,children:[(0,T.jsx)(re.Z,{fontSize:"inherit"})," Share Now"]}),(0,T.jsxs)(b.Z,{onClick:U,children:[(0,T.jsx)(te.Z,{fontSize:"inherit"})," Share to Friends"]}),(0,T.jsxs)(b.Z,{onClick:U,children:[(0,T.jsx)(ne.Z,{fontSize:"inherit"})," Send in Messanger"]}),(0,T.jsxs)(b.Z,{onClick:U,children:[(0,T.jsx)(se.Z,{fontSize:"inherit"})," Copy Link"]})]})]})]})}),(0,T.jsx)(w.Z,{in:B,sx:{width:"100%"},children:B&&(0,T.jsx)(o.ZP,{item:!0,xs:12,sx:{pt:2},children:(0,T.jsx)("form",{onSubmit:H((async e=>{J();const r={id:S()("#COMMENT_"),profile:v,data:{comment:e.name,likes:{like:!1,value:0},replies:[]}};i(Z,r),ce({name:""})})),children:(0,T.jsxs)(o.ZP,{container:!0,spacing:2,alignItems:"flex-start",children:[(0,T.jsx)(o.ZP,{item:!0,sx:{display:{xs:"none",sm:"block"}},children:(0,T.jsx)(E.Z,{sx:{mt:.75},alt:"User 1",src:v.avatar&&le(`./${v.avatar}`),size:"xs"})}),(0,T.jsx)(o.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,T.jsx)(I.RV,{...Q,children:(0,T.jsx)(de,{fullWidth:!0,name:"name",label:"Write a comment...",size:C?"small":"medium",bug:ee})})}),(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(g.Z,{children:(0,T.jsx)(x.Z,{type:"submit",variant:"contained",color:"secondary",size:C?"small":"large",sx:{mt:.5},children:"Comment"})})})]})})})}),Y]})})};var xe=r(91923),he=r(36517),me=r(33523),pe=r(12234),je=r(42093),Ze=r(21880),ue=r(66854),ge=r(56310),ve=r(72302),ke=r(4773),ye=r(53726);const fe=()=>{const e=(0,a.Z)(),i=(0,he.I0)(),[r,n]=t.useState([]),s=(0,he.v9)((e=>e.user)),d=async()=>{i((0,me.Jq)())};t.useEffect((()=>{n(s.posts)}),[s]),t.useEffect((()=>{d()}),[]);const h=async(e,r)=>{i((0,me.DF)(e,r))},m=async(e,r)=>{i((0,me.Ir)(e,r))},v=async(e,r,t)=>{i((0,me.Bn)(e,r,t))},k=async e=>{i((0,me.n9)(e))},y=async(e,r)=>{i((0,me.xG)(e,r))},f=async(e,r,t)=>{i((0,me.YO)(e,r,t))},b={borderRadius:"8px",width:48,height:48,fontSize:"1.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center",border:"dark"===e.palette.mode?"1px solid":"none","&>svg":{width:24,height:24}};return(0,T.jsxs)(o.ZP,{container:!0,spacing:xe.dv,children:[(0,T.jsx)(o.ZP,{item:!0,xs:12,sm:12,md:4,children:(0,T.jsxs)(o.ZP,{container:!0,spacing:xe.dv,children:[(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(V.Z,{children:[(0,T.jsxs)(o.ZP,{container:!0,alignItems:"center",spacing:xe.dv,children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(l.Z,{sx:{...b,bgcolor:"dark"===e.palette.mode?e.palette.primary.main+20:"primary.light",border:"dark"===e.palette.mode?"1px solid":"none",borderColor:"primary.main",color:"primary.dark"},children:(0,T.jsx)(te.Z,{})})}),(0,T.jsxs)(o.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:[(0,T.jsx)(c.Z,{variant:"h3",color:"primary",component:"div",sx:{mb:.625},children:"239k"}),(0,T.jsx)(c.Z,{variant:"body2",children:"Friends"})]}),(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(p.Z,{size:"large","aria-label":"navigation icon",children:(0,T.jsx)(ve.Z,{})})})]}),(0,T.jsx)(j.Z,{sx:{margin:"16px 0"}}),(0,T.jsxs)(o.ZP,{container:!0,alignItems:"center",spacing:xe.dv,children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(l.Z,{sx:{...b,bgcolor:"dark"===e.palette.mode?e.palette.secondary.main+20:"secondary.light",borderColor:"secondary.main",color:"secondary.dark"},children:(0,T.jsx)(ye.Z,{})})}),(0,T.jsxs)(o.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:[(0,T.jsx)(c.Z,{variant:"h3",sx:{mb:.625,color:"dark"===e.palette.mode?e.palette.text.secondary:"secondary.main"},children:"234k"}),(0,T.jsx)(c.Z,{variant:"body2",children:"Followers"})]}),(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(p.Z,{size:"large","aria-label":"navigation icon",children:(0,T.jsx)(ve.Z,{})})})]})]})}),(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(V.Z,{children:[(0,T.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsx)(c.Z,{variant:"h4",children:"About"})}),(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsx)(c.Z,{variant:"body2",children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."})})]}),(0,T.jsx)(j.Z,{sx:{margin:"16px 0"}}),(0,T.jsxs)(o.ZP,{container:!0,spacing:2,sx:{"& >div":{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block",width:"100%"},"& a":{color:e.palette.grey[700],"& svg":{mr:1,verticalAlign:"bottom"},"&:hover":{color:e.palette.primary.main,textDecoration:"none"}}},children:[(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(Z.Z,{href:"https://codedthemes.com/",target:"_blank",underline:"hover",children:[(0,T.jsx)(ke.Z,{color:"secondary"})," https://codedthemes.com/"]})}),(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(Z.Z,{href:"https://www.instagram.com/codedthemes",target:"_blank",underline:"hover",children:[(0,T.jsx)(Ze.Z,{sx:{color:e.palette.orange.dark}})," https://www.instagram.com/codedthemes"]})}),(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(Z.Z,{href:"https://www.facebook.com/codedthemes",target:"_blank",underline:"hover",children:[(0,T.jsx)(je.Z,{color:"primary"})," https://www.facebook.com/codedthemes"]})}),(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(Z.Z,{href:"https://in.linkedin.com/company/codedthemes",target:"_blank",underline:"hover",children:[(0,T.jsx)(ge.Z,{sx:{color:e.palette.grey[900]}})," https://in.linkedin.com/company/codedthemes"]})})]})]})})]})}),(0,T.jsx)(o.ZP,{item:!0,xs:12,sm:12,md:8,children:(0,T.jsxs)(o.ZP,{container:!0,spacing:xe.dv,children:[(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsx)(V.Z,{children:(0,T.jsxs)(o.ZP,{container:!0,spacing:xe.dv,children:[(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsx)(u.Z,{id:"outlined-textarea",placeholder:"What\u2019s on your mind, Larry?",rows:4,fullWidth:!0,multiline:!0})}),(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(o.ZP,{container:!0,justifyContent:"space-between",spacing:xe.dv,children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(x.Z,{variant:"text",color:"secondary",startIcon:(0,T.jsx)(pe.Z,{}),children:"Gallery"})}),(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(g.Z,{children:(0,T.jsx)(x.Z,{variant:"contained",color:"secondary",startIcon:(0,T.jsx)(ue.Z,{}),children:"Post"})})})]})})]})})}),r&&r.map((e=>(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsx)(ce,{post:e,editPost:h,renderPost:d,setPosts:n,commentAdd:m,replyAdd:v,handlePostLikes:k,handleCommentLikes:y,handleReplayLikes:f},e.id)},e.id)))]})})]})};var be=r(77196),Pe=r(47858),we=r(11125);const ze=()=>{const e=(0,he.I0)(),[i,r]=t.useState([]),n=(0,he.v9)((e=>e.user));t.useEffect((()=>{r(n.followers)}),[n]),t.useEffect((()=>{e((0,me.ET)())}),[]);const[s,a]=t.useState("");let l=(0,T.jsx)(T.Fragment,{});return i&&(l=i.map(((e,i)=>(0,T.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,T.jsx)(Pe.Z,{...e})},i)))),(0,T.jsx)(V.Z,{title:(0,T.jsxs)(o.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:xe.dv,children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(c.Z,{variant:"h3",children:"Followers"})}),(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(be.Z,{size:"small",id:"input-search-user-profile",placeholder:"Search Followers",value:s,onChange:async i=>{const r=null===i||void 0===i?void 0:i.target.value;a(r),e(r?(0,me.WX)(r):(0,me.ET)())},startAdornment:(0,T.jsx)($.Z,{position:"start",children:(0,T.jsx)(we.Z,{stroke:1.5,size:"16px"})})})})]}),children:(0,T.jsx)(o.ZP,{container:!0,direction:"row",spacing:xe.dv,children:l})})};var Ce=r(58692);const Se=()=>{const e=(0,a.Z)(),i=(0,he.I0)(),[r,n]=t.useState([]),s=(0,he.v9)((e=>e.user));t.useEffect((()=>{n(s.friends)}),[s]),t.useEffect((()=>{i((0,me.$J)())}),[]);let l=(0,T.jsx)(T.Fragment,{});r&&(l=r.map(((e,i)=>(0,T.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:(0,T.jsx)(Ce.Z,{...e})},i))));const[d,x]=t.useState("");return(0,T.jsx)(V.Z,{title:(0,T.jsxs)(o.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:xe.dv,children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsxs)(c.Z,{variant:"h3",children:["Friends"," ",(0,T.jsx)(c.Z,{variant:"h3",component:"span",sx:{color:e.palette.grey[300],fontWeight:500},children:"(463)"})]})}),(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(be.Z,{size:"small",id:"input-search-user-profile",placeholder:"Search",value:d,onChange:async e=>{const r=null===e||void 0===e?void 0:e.target.value;x(r),i(r?(0,me.Gy)(r):(0,me.$J)())},startAdornment:(0,T.jsx)($.Z,{position:"start",children:(0,T.jsx)(we.Z,{stroke:1.5,size:"16px"})})})})]}),children:(0,T.jsx)(o.ZP,{container:!0,direction:"row",spacing:xe.dv,children:l})})};var Ie=r(39504),Re=r(36566);const Me=r(96385),Fe=e=>{let{dateTime:i,image:r,title:n}=e;const s=(0,a.Z)(),l=r&&Me(`./${r}`),[x,h]=(0,t.useState)(null),m=()=>{h(null)};return(0,T.jsxs)(O.Z,{sx:{background:"dark"===s.palette.mode?s.palette.dark.main:s.palette.grey[50],border:"dark"===s.palette.mode?"none":"1px solid",borderColor:s.palette.grey[100]},children:[(0,T.jsx)(d.Z,{component:"img",image:l,title:"Slider5 image"}),(0,T.jsx)(Ie.Z,{sx:{p:2,pb:"16px !important"},children:(0,T.jsxs)(o.ZP,{container:!0,spacing:xe.dv,children:[(0,T.jsxs)(o.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:[(0,T.jsx)(c.Z,{variant:"h5",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",mb:.5},children:n}),(0,T.jsxs)(c.Z,{variant:"caption",sx:{mt:1,fontSize:"12px"},children:[(0,T.jsx)(Re.Z,{sx:{mr:.5,fontSize:"0.875rem",verticalAlign:"text-top"}}),i]})]}),(0,T.jsxs)(o.ZP,{item:!0,children:[(0,T.jsx)(y.Z,{sx:{borderRadius:"12px"},onClick:e=>{h(null===e||void 0===e?void 0:e.currentTarget)},"aria-label":"more options",children:(0,T.jsx)(E.Z,{variant:"rounded",sx:{...s.typography.commonAvatar,...s.typography.mediumAvatar,background:"dark"===s.palette.mode?s.palette.dark.main:s.palette.secondary.light,color:"dark"===s.palette.mode?s.palette.dark.light:s.palette.secondary.dark,zIndex:1,transition:"all .2s ease-in-out",'&[aria-controls="menu-list-grow"],&:hover':{background:s.palette.secondary.main,color:s.palette.secondary.light}},"aria-haspopup":"true",children:(0,T.jsx)(A.Z,{fontSize:"inherit"})})}),(0,T.jsxs)(f.Z,{id:"menu-gallery-card",anchorEl:x,keepMounted:!0,open:Boolean(x),onClose:m,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,T.jsx)(b.Z,{onClick:m,children:" Remove Tag"}),(0,T.jsx)(b.Z,{onClick:m,children:" Download"}),(0,T.jsx)(b.Z,{onClick:m,children:" Make Profile Picture "}),(0,T.jsx)(b.Z,{onClick:m,children:" Make Cover Photo "}),(0,T.jsx)(b.Z,{onClick:m,children:" Find Support or Report Photo "})]})]})]})})]})},Oe=()=>{const e=(0,he.I0)(),[i,r]=t.useState([]),n=(0,he.v9)((e=>e.user));t.useEffect((()=>{r(n.gallery)}),[n]),t.useEffect((()=>{e((0,me.we)())}),[]);let s=(0,T.jsx)(T.Fragment,{});return i&&(s=i.map(((e,i)=>(0,T.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,T.jsx)(Fe,{...e})},i)))),(0,T.jsx)(V.Z,{title:(0,T.jsxs)(o.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:xe.dv,children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(c.Z,{variant:"h3",children:"Gallery"})}),(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(x.Z,{variant:"contained",color:"secondary",children:"Add Photos"})})]}),children:(0,T.jsx)(o.ZP,{container:!0,direction:"row",spacing:xe.dv,children:s})})};var $e=r(60220),Ee=r(57064),We=r(89857),Ae=r(53377),Le=r(68036),qe=r(96761);const Te=r(5242),De=e=>{let{avatar:i,name:r,mutual:n}=e;const s=(0,a.Z)(),l=i&&Te(`./${i}`),d={borderColor:"dark"===s.palette.mode?s.palette.dark.main:s.palette.grey[200],background:"dark"===s.palette.mode?s.palette.dark.dark:s.palette.background.paper},[h,m]=(0,t.useState)(null),j=()=>{m(null)};return(0,T.jsx)(O.Z,{sx:{p:2,background:"dark"===s.palette.mode?s.palette.dark.main:s.palette.grey[50],border:"1px solid",borderColor:"dark"===s.palette.mode?s.palette.dark.main:s.palette.grey[100],"&:hover":{border:`1px solid${s.palette.primary.main}`}},children:(0,T.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(o.ZP,{container:!0,spacing:xe.dv,children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)($e.Z,{alt:"User 1",src:l})}),(0,T.jsxs)(o.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:[(0,T.jsx)(c.Z,{variant:"h5",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block"},children:r}),(0,T.jsxs)(c.Z,{variant:"subtitle2",sx:{mt:.5,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block"},children:[n," mutual friends"]})]}),(0,T.jsxs)(o.ZP,{item:!0,children:[(0,T.jsx)(p.Z,{size:"small",sx:{mt:-.75,mr:-.75},onClick:e=>{m(null===e||void 0===e?void 0:e.currentTarget)},"aria-label":"more options",children:(0,T.jsx)(We.Z,{fontSize:"small",color:"primary","aria-controls":"menu-friend-card","aria-haspopup":"true",sx:{opacity:.6}})}),(0,T.jsxs)(f.Z,{id:"menu-friend-card",anchorEl:h,keepMounted:!0,open:Boolean(h),onClose:j,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,T.jsxs)(b.Z,{onClick:j,children:[(0,T.jsx)(Ee.Z,{children:(0,T.jsx)(Ae.Z,{fontSize:"small"})}),"Favorites"]}),(0,T.jsxs)(b.Z,{onClick:j,children:[(0,T.jsx)(Ee.Z,{children:(0,T.jsx)(qe.Z,{fontSize:"small"})}),"Edit Friend List"]}),(0,T.jsxs)(b.Z,{onClick:j,children:[(0,T.jsx)(Ee.Z,{children:(0,T.jsx)(Le.Z,{fontSize:"small"})}),"Unfriend"]})]})]})]})}),(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,T.jsx)(o.ZP,{item:!0,xs:6,children:(0,T.jsx)(x.Z,{variant:"outlined",fullWidth:!0,sx:d,children:"Confirm"})}),(0,T.jsx)(o.ZP,{item:!0,xs:6,children:(0,T.jsx)(x.Z,{variant:"outlined",fullWidth:!0,color:"error",sx:d,children:"Delete"})})]})})]})})},_e=()=>{const e=(0,he.I0)(),[i,r]=t.useState([]),n=(0,he.v9)((e=>e.user)),[s,a]=t.useState("");t.useEffect((()=>{r(n.friendRequests)}),[n]),t.useEffect((()=>{e((0,me._e)())}),[]);let l=(0,T.jsx)(T.Fragment,{});return i&&(l=i.map(((e,i)=>(0,T.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,T.jsx)(De,{...e})},i)))),(0,T.jsx)(V.Z,{title:(0,T.jsxs)(o.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:xe.dv,children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(c.Z,{variant:"h3",children:"Friend Request"})}),(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(be.Z,{size:"small",id:"input-search-user-profile",placeholder:"Search Friends",value:s,onChange:async i=>{const r=null===i||void 0===i?void 0:i.target.value;a(r),e(r?(0,me.YJ)(r):(0,me._e)())},startAdornment:(0,T.jsx)($.Z,{position:"start",children:(0,T.jsx)(we.Z,{stroke:1.5,size:"16px"})})})})]}),children:(0,T.jsx)(o.ZP,{container:!0,direction:"row",spacing:xe.dv,children:l})})};var Ue=r(79894),Be=r(47047);const Ge=e=>{let{...i}=e;return(0,T.jsx)(Be.Z,{variant:"rectangular",...i,animation:"wave"})};var Je=r(89276),Ne=r(4248),Ve=r(20834),Xe=r(97542),Ye=r(36934),Qe=r(89389),He=r(20889),Ke=r(27362);function ei(e){let{children:i,value:r,index:t,...n}=e;return(0,T.jsx)("div",{role:"tabpanel",hidden:r!==t,id:`simple-tabpanel-${t}`,"aria-labelledby":`simple-tab-${t}`,...n,children:r===t&&(0,T.jsx)(l.Z,{sx:{p:0},children:i})})}function ii(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}const ri=[{to:"/apps/user/social-profile/posts",icon:(0,T.jsx)(Je.Z,{stroke:1.5,size:"17px"}),label:"Profile"},{to:"/apps/user/social-profile/follower",icon:(0,T.jsx)(Ne.Z,{stroke:1.5,size:"17px"}),label:"Followers"},{to:"/apps/user/social-profile/friends",icon:(0,T.jsx)(Ve.Z,{stroke:1.5,size:"17px"}),label:(0,T.jsxs)(T.Fragment,{children:["friends ",(0,T.jsx)(Ue.Z,{label:"100",size:"small",chipcolor:"secondary",sx:{ml:1.5}})]})},{to:"/apps/user/social-profile/gallery",icon:(0,T.jsx)(Xe.Z,{stroke:1.5,size:"17px"}),label:"Gallery"},{to:"/apps/user/social-profile/friend-request",icon:(0,T.jsx)(Ye.Z,{stroke:1.5,size:"17px"}),label:"Friend Request"}],ti=()=>{const e=(0,a.Z)(),{user:i}=(0,X.Z)(),{borderRadius:r}=(0,K.Z)(),{tab:l}=(0,n.UO)();let p=0;switch(l){case"follower":p=1;break;case"friends":p=2;break;case"gallery":p=3;break;case"friend-request":p=4;break;default:p=0}const[j,Z]=t.useState(p),[u,g]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{g(!1)}),[]),(0,T.jsxs)(o.ZP,{container:!0,spacing:xe.dv,children:[(0,T.jsx)(o.ZP,{item:!0,xs:12,children:(0,T.jsxs)(V.Z,{contentSX:{p:1.5,paddingBottom:"0px !important",[e.breakpoints.down("lg")]:{textAlign:"center"}},children:[u?(0,T.jsx)(Ge,{sx:{borderRadius:`${r}px`,overflow:"hidden",mb:3,height:{xs:85,sm:150,md:260}}}):(0,T.jsx)(d.Z,{component:"img",image:Ke,sx:{borderRadius:`${r}px`,overflow:"hidden",mb:3},alt:"pro images"}),(0,T.jsxs)(o.ZP,{container:!0,spacing:xe.dv,children:[(0,T.jsx)(o.ZP,{item:!0,xs:12,md:3,children:u?(0,T.jsx)(Ge,{sx:{margin:"-70px 0 0 auto",borderRadius:"16px",[e.breakpoints.down("lg")]:{margin:"-70px auto 0"},[e.breakpoints.down("md")]:{margin:"-60px auto 0"},width:{xs:72,sm:100,md:140},height:{xs:72,sm:100,md:140}}}):(0,T.jsx)(E.Z,{alt:"User 1",src:He,sx:{margin:"-70px 0 0 auto",borderRadius:"16px",[e.breakpoints.down("lg")]:{margin:"-70px auto 0"},[e.breakpoints.down("md")]:{margin:"-60px auto 0"},width:{xs:72,sm:100,md:140},height:{xs:72,sm:100,md:140}}})}),(0,T.jsxs)(o.ZP,{item:!0,xs:12,md:9,children:[(0,T.jsxs)(o.ZP,{container:!0,spacing:xe.dv,children:[(0,T.jsxs)(o.ZP,{item:!0,xs:12,md:4,children:[(0,T.jsx)(c.Z,{variant:"h5",children:null===i||void 0===i?void 0:i.name}),(0,T.jsx)(c.Z,{variant:"subtitle2",children:"Android Developer"})]}),(0,T.jsx)(o.ZP,{item:!0,xs:12,md:8,children:(0,T.jsxs)(o.ZP,{container:!0,spacing:1,sx:{justifyContent:"flex-end",[e.breakpoints.down("lg")]:{justifyContent:"center"}},children:[(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(x.Z,{variant:"outlined",children:"Message"})}),(0,T.jsx)(o.ZP,{item:!0,children:(0,T.jsx)(x.Z,{variant:"contained",startIcon:(0,T.jsx)(Qe.Z,{}),children:"Send Request"})})]})})]}),(0,T.jsx)(o.ZP,{container:!0,justifyContent:"flex-end",children:(0,T.jsx)(h.Z,{value:j,variant:"scrollable",onChange:(e,i)=>{Z(i)},sx:{marginTop:2.5,"& .MuiTabs-flexContainer":{border:"none"},"& a":{minHeight:"auto",minWidth:10,py:1.5,px:1,mr:2.25,color:"dark"===e.palette.mode?"grey.600":"grey.900",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},"& a.Mui-selected":{color:"primary.main"},"& a > svg":{marginBottom:"4px !important",mr:1.25}},children:ri.map(((e,i)=>(0,T.jsx)(m.Z,{component:s.rU,to:e.to,icon:e.icon,label:e.label,...ii(i)},i)))})})]})]})]})}),(0,T.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,T.jsx)(ei,{value:j,index:0,children:(0,T.jsx)(fe,{})}),(0,T.jsx)(ei,{value:j,index:1,children:(0,T.jsx)(ze,{})}),(0,T.jsx)(ei,{value:j,index:2,children:(0,T.jsx)(Se,{})}),(0,T.jsx)(ei,{value:j,index:3,children:(0,T.jsx)(Oe,{})}),(0,T.jsx)(ei,{value:j,index:4,children:(0,T.jsx)(_e,{})})]})]})}}}]);
//# sourceMappingURL=1102.987bd0b5.chunk.js.map