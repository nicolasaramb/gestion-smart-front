"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[1537],{79699:(e,o,t)=>{t.d(o,{Z:()=>c});var n=t(13967),i=t(97639),a=t(95080),r=t(50533),s=t(22646),l=t(80184);const c=e=>{let{title:o,link:t,icon:c}=e;const p=(0,n.Z)();return(0,l.jsx)(i.Z,{title:o||"Reference",placement:"left",children:(0,l.jsxs)(a.Z,{disableRipple:!0,children:[!c&&(0,l.jsx)(s.Z,{component:r.Z,href:t,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,"aria-label":"'ui material icon'",children:(0,l.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,l.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:p.palette.primary[800]}),(0,l.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:p.palette.primary.main}),(0,l.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:p.palette.primary[800]}),(0,l.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:p.palette.primary.main})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0",children:(0,l.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),c&&(0,l.jsx)(s.Z,{component:r.Z,href:t,target:"_blank",size:"badge",color:"primary",outline:!0,"aria-label":"ui material icon",children:c})]})})}},80928:(e,o,t)=>{t.d(o,{Z:()=>u});var n=t(72791),i=t(13967),a=t(57621),r=t(9585),s=t(20890),l=t(94721),c=t(39504),p=t(80184);const d=n.forwardRef(((e,o)=>{let{children:t,content:n,contentClass:d,darkTitle:u,secondary:x,sx:m={},contentSX:h={},title:Z,...v}=e;const f=(0,i.Z)();return(0,p.jsxs)(a.Z,{ref:o,sx:{border:"1px solid",borderColor:"dark"===f.palette.mode?f.palette.dark.light+15:f.palette.grey[200],":hover":{boxShadow:"dark"===f.palette.mode?"0 2px 14px 0 rgb(33 150 243 / 10%)":"0 2px 14px 0 rgb(32 40 45 / 8%)"},...m},...v,children:[!u&&Z&&(0,p.jsx)(r.Z,{sx:{p:2.5},title:(0,p.jsx)(s.Z,{variant:"h5",children:Z}),action:x}),u&&Z&&(0,p.jsx)(r.Z,{sx:{p:2.5},title:(0,p.jsx)(s.Z,{variant:"h4",children:Z}),action:x}),Z&&(0,p.jsx)(l.Z,{sx:{opacity:1,borderColor:"dark"===f.palette.mode?f.palette.dark.light+15:f.palette.grey[200]}}),n&&(0,p.jsx)(c.Z,{sx:{p:2.5,...h},className:d||"",children:t}),!n&&t]})}));d.defaultProps={content:!0};const u=d},61537:(e,o,t)=>{t.r(o),t.d(o,{default:()=>ve});var n=t(61889),i=t(72791),a=t(13967),r=t(85523),s=t(89891),l=t(17133),c=t(38289),p=t(61419),d=t(697),u=t(63366),x=t(87462),m=(t(57441),t(59278)),h=t(94419),Z=t(77082),v=t(29884),f=t(66934),g=t(61020),j=t(48980),b=t(49877),y=t(14036),S=t(56966),w=t(42071),C=t(98278),L=t(75878),M=t(21217);function D(e){return(0,M.ZP)("MuiSpeedDial",e)}const P=(0,L.Z)("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]);var T=t(80184);const k=["ref"],z=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],I=["ref"];function V(e){return"up"===e||"down"===e?"vertical":"right"===e||"left"===e?"horizontal":void 0}const R=(0,f.ZP)("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[`direction${(0,y.Z)(t.direction)}`]]}})((e=>{let{theme:o,ownerState:t}=e;return(0,x.Z)({zIndex:(o.vars||o).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},"up"===t.direction&&{flexDirection:"column-reverse",[`& .${P.actions}`]:{flexDirection:"column-reverse",marginBottom:-32,paddingBottom:48}},"down"===t.direction&&{flexDirection:"column",[`& .${P.actions}`]:{flexDirection:"column",marginTop:-32,paddingTop:48}},"left"===t.direction&&{flexDirection:"row-reverse",[`& .${P.actions}`]:{flexDirection:"row-reverse",marginRight:-32,paddingRight:48}},"right"===t.direction&&{flexDirection:"row",[`& .${P.actions}`]:{flexDirection:"row",marginLeft:-32,paddingLeft:48}})})),O=(0,f.ZP)(b.Z,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(e,o)=>o.fab})((()=>({pointerEvents:"auto"}))),$=(0,f.ZP)("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.actions,!t.open&&o.actionsClosed]}})((e=>{let{ownerState:o}=e;return(0,x.Z)({display:"flex",pointerEvents:"auto"},!o.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})})),H=i.forwardRef((function(e,o){const t=(0,g.i)({props:e,name:"MuiSpeedDial"}),n=(0,a.Z)(),r={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{ariaLabel:s,FabProps:{ref:l}={},children:c,className:p,direction:d="up",hidden:f=!1,icon:b,onBlur:L,onClose:M,onFocus:P,onKeyDown:H,onMouseEnter:E,onMouseLeave:N,onOpen:F,open:A,TransitionComponent:B=j.Z,transitionDuration:_=r,TransitionProps:K}=t,U=(0,u.Z)(t.FabProps,k),W=(0,u.Z)(t,z),[G,X]=(0,C.Z)({controlled:A,default:!1,name:"SpeedDial",state:"open"}),q=(0,x.Z)({},t,{open:G,direction:d}),J=(e=>{const{classes:o,open:t,direction:n}=e,i={root:["root",`direction${(0,y.Z)(n)}`],fab:["fab"],actions:["actions",!t&&"actionsClosed"]};return(0,h.Z)(i,D,o)})(q),Q=(0,Z.Z)(),Y=i.useRef(0),ee=i.useRef(),oe=i.useRef([]);oe.current=[oe.current[0]];const te=i.useCallback((e=>{oe.current[0]=e}),[]),ne=(0,w.Z)(l,te),ie=(e,o)=>t=>{oe.current[e+1]=t,o&&o(t)};i.useEffect((()=>{G||(Y.current=0,ee.current=void 0)}),[G]);const ae=e=>{"mouseleave"===e.type&&N&&N(e),"blur"===e.type&&L&&L(e),Q.clear(),"blur"===e.type?Q.start(0,(()=>{X(!1),M&&M(e,"blur")})):(X(!1),M&&M(e,"mouseLeave"))},re=e=>{"mouseenter"===e.type&&E&&E(e),"focus"===e.type&&P&&P(e),Q.clear(),G||Q.start(0,(()=>{if(X(!0),F){F(e,{focus:"focus",mouseenter:"mouseEnter"}[e.type])}}))},se=s.replace(/^[^a-z]+|[^\w:.-]+/gi,""),le=i.Children.toArray(c).filter((e=>i.isValidElement(e))),ce=le.map(((e,o)=>{const t=e.props,{FabProps:{ref:n}={},tooltipPlacement:a}=t,r=(0,u.Z)(t.FabProps,I),s=a||("vertical"===V(d)?"left":"top");return i.cloneElement(e,{FabProps:(0,x.Z)({},r,{ref:ie(o,n)}),delay:30*(G?o:le.length-o),open:G,tooltipPlacement:s,id:`${se}-action-${o}`})}));return(0,T.jsxs)(R,(0,x.Z)({className:(0,m.Z)(J.root,p),ref:o,role:"presentation",onKeyDown:e=>{H&&H(e);const o=e.key.replace("Arrow","").toLowerCase(),{current:t=o}=ee;if("Escape"===e.key)return X(!1),oe.current[0].focus(),void(M&&M(e,"escapeKeyDown"));if(V(o)===V(t)&&void 0!==V(o)){e.preventDefault();const n=o===t?1:-1,i=(0,v.Z)(Y.current+n,0,oe.current.length-1);oe.current[i].focus(),Y.current=i,ee.current=t}},onBlur:ae,onFocus:re,onMouseEnter:re,onMouseLeave:ae,ownerState:q},W,{children:[(0,T.jsx)(B,(0,x.Z)({in:!f,timeout:_,unmountOnExit:!0},K,{children:(0,T.jsx)(O,(0,x.Z)({color:"primary","aria-label":s,"aria-haspopup":"true","aria-expanded":G,"aria-controls":`${se}-actions`},U,{onClick:e=>{U.onClick&&U.onClick(e),Q.clear(),G?(X(!1),M&&M(e,"toggle")):(X(!0),F&&F(e,"toggle"))},className:(0,m.Z)(J.fab,U.className),ref:ne,ownerState:q,children:i.isValidElement(b)&&(0,S.Z)(b,["SpeedDialIcon"])?i.cloneElement(b,{open:G}):b}))})),(0,T.jsx)($,{id:`${se}-actions`,role:"menu","aria-orientation":V(d),className:(0,m.Z)(J.actions,!G&&J.actionsClosed),ownerState:q,children:ce})]}))}));var E=t(54131),N=t(97639);function F(e){return(0,M.ZP)("MuiSpeedDialAction",e)}const A=(0,L.Z)("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),B=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],_=(0,f.ZP)(b.Z,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.fab,!t.open&&o.fabClosed]}})((e=>{let{theme:o,ownerState:t}=e;return(0,x.Z)({margin:8,color:(o.vars||o).palette.text.secondary,backgroundColor:(o.vars||o).palette.background.paper,"&:hover":{backgroundColor:o.vars?o.vars.palette.SpeedDialAction.fabHoverBg:(0,E._4)(o.palette.background.paper,.15)},transition:`${o.transitions.create("transform",{duration:o.transitions.duration.shorter})}, opacity 0.8s`,opacity:1},!t.open&&{opacity:0,transform:"scale(0)"})})),K=(0,f.ZP)("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.staticTooltip,!t.open&&o.staticTooltipClosed,o[`tooltipPlacement${(0,y.Z)(t.tooltipPlacement)}`]]}})((e=>{let{theme:o,ownerState:t}=e;return{position:"relative",display:"flex",alignItems:"center",[`& .${A.staticTooltipLabel}`]:(0,x.Z)({transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.shorter}),opacity:1},!t.open&&{opacity:0,transform:"scale(0.5)"},"left"===t.tooltipPlacement&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},"right"===t.tooltipPlacement&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8})}})),U=(0,f.ZP)("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(e,o)=>o.staticTooltipLabel})((e=>{let{theme:o}=e;return(0,x.Z)({position:"absolute"},o.typography.body1,{backgroundColor:(o.vars||o).palette.background.paper,borderRadius:(o.vars||o).shape.borderRadius,boxShadow:(o.vars||o).shadows[1],color:(o.vars||o).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"})})),W=i.forwardRef((function(e,o){const t=(0,g.i)({props:e,name:"MuiSpeedDialAction"}),{className:n,delay:a=0,FabProps:r={},icon:s,id:l,open:c,TooltipClasses:p,tooltipOpen:d=!1,tooltipPlacement:Z="left",tooltipTitle:v}=t,f=(0,u.Z)(t,B),j=(0,x.Z)({},t,{tooltipPlacement:Z}),b=(e=>{const{open:o,tooltipPlacement:t,classes:n}=e,i={fab:["fab",!o&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${(0,y.Z)(t)}`,!o&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return(0,h.Z)(i,F,n)})(j),[S,w]=i.useState(d),C={transitionDelay:`${a}ms`},L=(0,T.jsx)(_,(0,x.Z)({size:"small",className:(0,m.Z)(b.fab,n),tabIndex:-1,role:"menuitem",ownerState:j},r,{style:(0,x.Z)({},C,r.style),children:s}));return d?(0,T.jsxs)(K,(0,x.Z)({id:l,ref:o,className:b.staticTooltip,ownerState:j},f,{children:[(0,T.jsx)(U,{style:C,id:`${l}-label`,className:b.staticTooltipLabel,ownerState:j,children:v}),i.cloneElement(L,{"aria-labelledby":`${l}-label`})]})):(!c&&S&&w(!1),(0,T.jsx)(N.Z,(0,x.Z)({id:l,ref:o,title:v,placement:Z,onClose:()=>{w(!1)},onOpen:()=>{w(!0)},open:c&&S,classes:p},f,{children:L})))}));const G=(0,t(74223).Z)((0,T.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function X(e){return(0,M.ZP)("MuiSpeedDialIcon",e)}const q=(0,L.Z)("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"]),J=["className","icon","open","openIcon"],Q=(0,f.ZP)("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${q.icon}`]:o.icon},{[`& .${q.icon}`]:t.open&&o.iconOpen},{[`& .${q.icon}`]:t.open&&t.openIcon&&o.iconWithOpenIconOpen},{[`& .${q.openIcon}`]:o.openIcon},{[`& .${q.openIcon}`]:t.open&&o.openIconOpen},o.root]}})((e=>{let{theme:o,ownerState:t}=e;return{height:24,[`& .${q.icon}`]:(0,x.Z)({transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short})},t.open&&(0,x.Z)({transform:"rotate(45deg)"},t.openIcon&&{opacity:0})),[`& .${q.openIcon}`]:(0,x.Z)({position:"absolute",transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},t.open&&{transform:"rotate(0deg)",opacity:1})}})),Y=i.forwardRef((function(e,o){const t=(0,g.i)({props:e,name:"MuiSpeedDialIcon"}),{className:n,icon:a,openIcon:r}=t,s=(0,u.Z)(t,J),l=t,c=(e=>{const{classes:o,open:t,openIcon:n}=e,i={root:["root"],icon:["icon",t&&"iconOpen",n&&t&&"iconWithOpenIconOpen"],openIcon:["openIcon",t&&"openIconOpen"]};return(0,h.Z)(i,X,o)})(l);function p(e,o){return i.isValidElement(e)?i.cloneElement(e,{className:o}):e}return(0,T.jsxs)(Q,(0,x.Z)({className:(0,m.Z)(c.root,n),ref:o,ownerState:l},s,{children:[r?p(r,c.openIcon):null,a?p(a,c.icon):(0,T.jsx)(G,{className:c.icon})]}))}));Y.muiName="SpeedDialIcon";const ee=Y;var oe=t(37403),te=t(93183),ne=t(80150),ie=t(53377);function ae(){const e=(0,a.Z)(),[o,t]=i.useState(!1),n=[{icon:(0,T.jsx)(oe.Z,{sx:{color:e.palette.grey[700]}}),name:"Save"},{icon:(0,T.jsx)(te.Z,{sx:{color:e.palette.grey[700]}}),name:"Print"},{icon:(0,T.jsx)(ne.Z,{sx:{color:e.palette.grey[700]}}),name:"Share"},{icon:(0,T.jsx)(ie.Z,{sx:{color:e.palette.grey[700]}}),name:"Like"}],u=()=>{t(!1)},[x,m]=i.useState("up"),[h,Z]=i.useState(!1);return(0,T.jsxs)("div",{children:[(0,T.jsx)(r.Z,{control:(0,T.jsx)(s.Z,{checked:h,onChange:e=>{Z(e.target.checked)},color:"primary"}),label:"Hidden"}),(0,T.jsx)(l.Z,{component:"legend",children:"Direction"}),(0,T.jsxs)(c.Z,{sx:{mt:1},"aria-label":"direction",name:"direction",value:x,onChange:e=>{m(e.target.value)},row:!0,children:[(0,T.jsx)(r.Z,{value:"up",control:(0,T.jsx)(p.Z,{}),label:"Up"}),(0,T.jsx)(d.Z,{sx:{display:{xs:"none",sm:"block"}},children:(0,T.jsx)(r.Z,{value:"right",control:(0,T.jsx)(p.Z,{}),label:"Right"})}),(0,T.jsx)(r.Z,{value:"down",control:(0,T.jsx)(p.Z,{}),label:"Down"}),(0,T.jsx)(d.Z,{sx:{display:{xs:"none",sm:"block"}},children:(0,T.jsx)(r.Z,{value:"left",control:(0,T.jsx)(p.Z,{}),label:"Left"})})]}),(0,T.jsx)(d.Z,{sx:{position:"relative",marginTop:e.spacing(3),height:300},children:(0,T.jsx)(H,{sx:{position:"absolute","&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{bottom:e.spacing(2),right:e.spacing(2)},"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{top:e.spacing(2),left:e.spacing(2)}},ariaLabel:"SpeedDial example",hidden:h,icon:(0,T.jsx)(ee,{}),onClose:u,onOpen:()=>{t(!0)},open:o,direction:x,children:n.map((e=>(0,T.jsx)(W,{icon:e.icon,tooltipTitle:e.name,onClick:u},e.name)))})})]})}var re=t(24518),se=t(90186),le=t(31675);function ce(){const e=(0,a.Z)(),o=[{icon:(0,T.jsx)(oe.Z,{sx:{color:e.palette.grey[700]}}),name:"Copy"},{icon:(0,T.jsx)(se.Z,{sx:{color:e.palette.grey[700]}}),name:"Save"},{icon:(0,T.jsx)(te.Z,{sx:{color:e.palette.grey[700]}}),name:"Print"},{icon:(0,T.jsx)(ne.Z,{sx:{color:e.palette.grey[700]}}),name:"Share"},{icon:(0,T.jsx)(ie.Z,{sx:{color:e.palette.grey[700]}}),name:"Like"}],[t,n]=i.useState(!1),r=()=>{n(!1)},[s,l]=i.useState(!1);return(0,T.jsxs)(d.Z,{sx:{height:380,transform:"translateZ(0px)",flexGrow:1},children:[(0,T.jsx)(re.Z,{onClick:()=>{l((e=>!e))},children:"Toggle Speed Dial"}),(0,T.jsx)(H,{ariaLabel:"SpeedDial openIcon example",hidden:s,icon:(0,T.jsx)(ee,{openIcon:(0,T.jsx)(le.Z,{})}),onClose:r,onOpen:()=>{n(!0)},open:t,sx:{position:"absolute",bottom:16,right:16},children:o.map((e=>(0,T.jsx)(W,{icon:e.icon,tooltipTitle:e.name,onClick:r},e.name)))})]})}var pe=t(52739),de=t(20890);function ue(){const e=(0,a.Z)(),[o,t]=i.useState(!1),n=[{icon:(0,T.jsx)(oe.Z,{sx:{color:e.palette.grey[700]}}),name:"Copy"},{icon:(0,T.jsx)(se.Z,{sx:{color:e.palette.grey[700]}}),name:"Save"},{icon:(0,T.jsx)(te.Z,{sx:{color:e.palette.grey[700]}}),name:"Print"},{icon:(0,T.jsx)(ne.Z,{sx:{color:e.palette.grey[700]}}),name:"Share"},{icon:(0,T.jsx)(ie.Z,{sx:{color:e.palette.grey[700]}}),name:"Like"}],r=()=>{t(!1)},[s,l]=i.useState(!1);return(0,T.jsxs)(d.Z,{sx:{height:380,transform:"translateZ(0px)",flexGrow:1},children:[(0,T.jsx)(re.Z,{onClick:()=>{l((e=>!e))},children:"Toggle Speed Dial"}),(0,T.jsx)(pe.Z,{open:o}),(0,T.jsx)(H,{ariaLabel:"SpeedDial tooltip example",hidden:s,icon:(0,T.jsx)(ee,{}),onClose:r,onOpen:()=>{t(!0)},open:o,sx:{position:"absolute",bottom:16,right:16},children:n.map((e=>(0,T.jsx)(W,{icon:e.icon,tooltipTitle:(0,T.jsx)(de.Z,{variant:"subtitle1",children:e.name}),tooltipOpen:!0,onClick:r},e.name)))})]})}var xe=t(80928),me=t(23735),he=t(79699),Ze=t(91923);const ve=()=>(0,T.jsx)(me.Z,{title:"Speeddial",secondary:(0,T.jsx)(he.Z,{link:"https://next.material-ui.com/components/speed-dial/"}),children:(0,T.jsxs)(n.ZP,{container:!0,spacing:Ze.dv,children:[(0,T.jsx)(n.ZP,{item:!0,xs:12,md:12,lg:6,children:(0,T.jsx)(xe.Z,{title:"Basic",children:(0,T.jsx)(ae,{})})}),(0,T.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,T.jsx)(xe.Z,{title:"Custom Close Icon",children:(0,T.jsx)(ce,{})})}),(0,T.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,T.jsx)(xe.Z,{title:"Persistent Icon",children:(0,T.jsx)(ue,{})})})]})})},31675:(e,o,t)=>{var n=t(64836);o.Z=void 0;var i=n(t(45649)),a=t(80184),r=(0,i.default)([(0,a.jsx)("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"},"1")],"EditTwoTone");o.Z=r},53377:(e,o,t)=>{var n=t(64836);o.Z=void 0;var i=n(t(45649)),a=t(80184),r=(0,i.default)([(0,a.jsx)("path",{d:"M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"},"1")],"FavoriteTwoTone");o.Z=r},37403:(e,o,t)=>{var n=t(64836);o.Z=void 0;var i=n(t(45649)),a=t(80184),r=(0,i.default)([(0,a.jsx)("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"},"1")],"FileCopyTwoTone");o.Z=r},93183:(e,o,t)=>{var n=t(64836);o.Z=void 0;var i=n(t(45649)),a=t(80184),r=(0,i.default)([(0,a.jsx)("path",{d:"M8 5h8v3H8z",opacity:".3"},"0"),(0,a.jsx)("circle",{cx:"18",cy:"11.5",r:"1"},"1"),(0,a.jsx)("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z"},"2"),(0,a.jsx)("path",{d:"M6 13h12v2h2v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4h2v-2zm12-2.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",opacity:".3"},"3")],"PrintTwoTone");o.Z=r},90186:(e,o,t)=>{var n=t(64836);o.Z=void 0;var i=n(t(45649)),a=t(80184),r=(0,i.default)([(0,a.jsx)("path",{d:"M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"},"1")],"SaveTwoTone");o.Z=r},80150:(e,o,t)=>{var n=t(64836);o.Z=void 0;var i=n(t(45649)),a=t(80184),r=(0,i.default)([(0,a.jsx)("circle",{cx:"18",cy:"5",r:"1",opacity:".3"},"0"),(0,a.jsx)("circle",{cx:"6",cy:"12",r:"1",opacity:".3"},"1"),(0,a.jsx)("circle",{cx:"18",cy:"19.02",r:"1",opacity:".3"},"2"),(0,a.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"},"3")],"ShareTwoTone");o.Z=r}}]);
//# sourceMappingURL=1537.30011c4e.chunk.js.map