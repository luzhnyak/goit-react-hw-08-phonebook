"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[582],{2582:function(n,e,r){r.r(e),r.d(e,{default:function(){return D}});var t=r(5048),a=r(6351),o=r(9439),i=r(4430),l=r(4852),s=r(653),c=r(9900),d=r(3044),u=r(7247),h=r(9860),m=r(501),x=r(5527),f=r(533),g=r(3329),j=function(n){var e=n.id,r=n.name,t=n.number,a=(0,i.Nt)(),j=(0,o.Z)(a,2),v=j[0],p=j[1];return(0,g.jsxs)(l.ZP,{components:x.Z,secondaryAction:(0,g.jsx)(h.Z,{edge:"end","aria-label":"delete",onClick:function(){return v(e)},title:"Delete ".concat(r),loading:p.isLoading,variant:"outlined",color:"success",children:(0,g.jsx)(u.Z,{})}),children:[(0,g.jsx)(s.Z,{children:(0,g.jsx)(d.Z,{sx:{backgroundColor:"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))},children:(0,g.jsx)(m.Z,{})})}),(0,g.jsx)(c.Z,{primary:r,secondary:(0,g.jsx)(f.Z,{href:"tel:"+t,underline:"hover",sx:{color:"green"},children:t})})]})},v=r(6934),p=r(493),Z=r(6895),b=r(4554),y=r(8308),C=function(){var n=(0,t.I0)(),e=(0,t.v9)(a.zK);return(0,g.jsx)(b.Z,{m:1,children:(0,g.jsx)(y.Z,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Filter",type:"text",name:"filter",placeholder:"Find contacts by name",value:e,onChange:function(e){return n((0,Z.T)(e.target.value))},color:"success"})})},k=r(7895),w=r(2791),A=r(5218),P=r(890),_=function(){return(0,g.jsx)(b.Z,{sx:{textAlign:"center",marginTop:"24px",color:"green"},children:(0,g.jsx)(P.Z,{variant:"h6",children:"The contact list is empty! "})})},z=function(){var n=(0,i.wY)(),e=n.data,r=n.isLoading,o=n.error,l=function(n,e){return null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}(e,(0,t.v9)(a.zK));(0,w.useEffect)((function(){o&&A.ZP.error(o.data.message)}),[o]);var s=(0,v.ZP)("div")((function(n){return{backgroundColor:n.theme.palette.background.paper}}));return(0,g.jsxs)(g.Fragment,{children:[r&&(0,g.jsx)(k.a,{}),!r&&(null===e||void 0===e?void 0:e.length)>1&&(0,g.jsx)(C,{}),!r&&(null===e||void 0===e?void 0:e.length)<1&&(0,g.jsx)(_,{}),!r&&e&&(0,g.jsx)(s,{children:(0,g.jsx)(p.Z,{component:"ul",children:null===l||void 0===l?void 0:l.map((function(n){return(0,g.jsx)(j,{id:n.id,name:n.name,number:n.number},n.id)}))})})]})},I=r(5289),L=r(5661),S=r(3400),F=r(9157),T=r(9823),B=r(8763),N=r(6546),M=r(5705),W=function(){var n=(0,i.wY)().data,e=(0,i.Tn)(),r=(0,o.Z)(e,2),a=r[0],l=r[1].isLoading,s=(0,t.I0)(),c=function(e){var r=e.name,t=e.number;if(function(e){return n.some((function(n){return n.name===e}))}(r))A.ZP.error("".concat(r," is already in contacts."));else try{a({name:r,number:t}),s((0,N.i)(!1))}catch(o){A.ZP.error("Some error.")}};return(0,g.jsx)(b.Z,{m:1,children:(0,g.jsx)(M.J9,{initialValues:{name:"",value:""},onSubmit:function(n){c(n)},children:function(n){var e=n.values,r=n.handleChange,t=n.handleBlur,a=n.handleSubmit;return(0,g.jsxs)("form",{onSubmit:a,children:[(0,g.jsx)(y.Z,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Name",type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,onChange:r,onBlur:t,value:e.name||""}),(0,g.jsx)(y.Z,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Number",type:"text",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",required:!0,onChange:r,onBlur:t,value:e.number||""}),(0,g.jsx)(b.Z,{sx:{display:"flex",justifyContent:"flex-end",marginTop:"16px"},children:(0,g.jsx)(h.Z,{variant:"contained",margin:"normal",type:"submit",color:"success",loading:l,loadingPosition:"end",endIcon:(0,g.jsx)(B.Z,{}),children:"Add contact"})})]})}})})},q=function(){var n=(0,t.v9)(a.Qe),e=(0,t.I0)(),r=function(){e((0,N.i)(!1))};return(0,g.jsx)("div",{children:(0,g.jsxs)(I.Z,{open:n,onClose:r,children:[(0,g.jsx)(L.Z,{children:"Add contact"}),(0,g.jsx)(S.Z,{"aria-label":"close",onClick:r,sx:{position:"absolute",right:8,top:8,color:function(n){return n.palette.grey[500]}},children:(0,g.jsx)(T.Z,{})}),(0,g.jsx)(F.Z,{children:(0,g.jsx)(W,{})})]})})},J=r(9877),K=r(2419),Y=function(){var n=(0,t.I0)();return(0,g.jsx)(J.Z,{sx:{position:"absolute",display:{xs:"flex",md:"none"},bottom:16,right:16,color:"common.white",bgcolor:"green","&:hover":{bgcolor:"darkGreen"}},"aria-label":"Add contacts",color:"green",onClick:function(){n((0,N.i)(!0))},children:(0,g.jsx)(K.Z,{})})},D=function(){var n=(0,t.v9)(a.PR).isLoggedIn;return(0,g.jsxs)(g.Fragment,{children:[n&&(0,g.jsx)(z,{}),(0,g.jsx)(q,{}),(0,g.jsx)(Y,{})]})}}}]);
//# sourceMappingURL=582.3f5c527e.chunk.js.map