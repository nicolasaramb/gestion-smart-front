"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[7665],{7665:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=s(72791),r=s(31243),i=s(697),n=s(20890),l=s(48550),c=s(24518),o=s(94070),u=s(80184);const d=()=>{const[e,t]=(0,a.useState)(""),[s,d]=(0,a.useState)(null),[h,m]=(0,a.useState)(!1);return(0,u.jsxs)(i.Z,{sx:{p:3,maxWidth:400,mx:"auto",textAlign:"center"},children:[(0,u.jsx)(n.Z,{variant:"h6",gutterBottom:!0,children:"Verificar N\xfamero de WhatsApp Business"}),(0,u.jsx)(l.Z,{fullWidth:!0,label:"N\xfamero de WhatsApp",variant:"outlined",value:e,onChange:e=>t(e.target.value),sx:{mb:2}}),(0,u.jsx)(c.Z,{variant:"contained",color:"primary",onClick:async()=>{m(!0),d(null);try{const t=await r.Z.post("http://localhost:5000/verify-number",{number:e});d(t.data)}catch(t){d({exists:!1,message:"Error al verificar el n\xfamero"})}finally{m(!1)}},disabled:h||!e,children:h?"Verificando...":"Verificar N\xfamero"}),s&&(0,u.jsx)(o.Z,{severity:s.exists?"success":"error",sx:{mt:2},children:s.message})]})}}}]);
//# sourceMappingURL=7665.1c5e61bb.chunk.js.map