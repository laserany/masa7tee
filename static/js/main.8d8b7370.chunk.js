(this.webpackJsonpmasa7ati=this.webpackJsonpmasa7ati||[]).push([[0],{122:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(42),s=n.n(r),i=(n(122),n(123),n(7)),l=n(10),j=n(8),d=n(83),o=n(38),h=n(2),b=function(e){return Object(h.jsx)(o.a,Object(d.a)(Object(d.a)({variant:"primary",style:{color:"black",borderColor:"white",boxShadow:"0px 0px 10px 4px rgba(0,0,0,0.3)",height:"38px",width:"83px"}},e),{},{children:e.children}))},x=n(14),O=function(){return Object(h.jsxs)("div",{style:{textAlign:"center"},children:[Object(h.jsx)(l.a,{className:"mt-5",children:Object(h.jsx)(j.a,{children:Object(h.jsx)("h1",{style:{backgroundColor:"orange",display:"inline"},children:"Masa7ati | \u0645\u0633\u0627\u062d\u062a\u064a"})})}),Object(h.jsx)(l.a,{className:"mt-5",children:Object(h.jsx)(j.a,{children:Object(h.jsxs)(i.a,{children:[Object(h.jsxs)(i.a.Group,{as:l.a,className:"mb-3",controlId:"formHorizontalUsername",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)(i.a.Label,{column:!0,sm:2,children:"Username:"}),Object(h.jsx)(j.a,{sm:7,children:Object(h.jsx)(i.a.Control,{type:"text"})})]}),Object(h.jsxs)(i.a.Group,{as:l.a,className:"mb-3",controlId:"formHorizontalPassword",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)(i.a.Label,{column:!0,sm:2,children:"Password:"}),Object(h.jsx)(j.a,{sm:7,children:Object(h.jsx)(i.a.Control,{type:"password"})})]}),Object(h.jsx)(i.a.Group,{as:l.a,className:"mb-3",children:Object(h.jsx)(j.a,{sm:{span:10,offset:2},children:Object(h.jsx)(x.b,{to:"/",children:Object(h.jsx)(b,{children:"Login"})})})})]})})})]})},u=n(116),m=n(21),p=function(e){var t=e.label,n=e.name,a=e.value,c=e.onChange,r=e.onBlur,s=e.isValid,l=e.isInvalid,j=e.error;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i.a.Label,{children:t}),Object(h.jsx)(i.a.Control,{type:"text",placeholder:"Your answer",name:n,value:a,onChange:c,onBlur:r,isValid:s,isInvalid:l}),Object(h.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(i.a.Control.Feedback,{type:"invalid",children:j})]})},g=function(e){var t=e.label,n=e.name,a=e.value,c=e.onChange,r=e.onBlur,s=e.isValid,l=e.isInvalid,j=e.error;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i.a.Label,{children:t}),Object(h.jsx)(i.a.Control,{type:"date",name:n,value:a,onChange:c,onBlur:r,isValid:s,isInvalid:l}),Object(h.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(i.a.Control.Feedback,{type:"invalid",children:j})]})},v=function(e){var t=e.name,n=e.value,a=e.onChange,c=e.onBlur;return Object(h.jsxs)(i.a.Check,{id:n,style:{marginTop:"5px"},children:[Object(h.jsx)(i.a.Check.Input,{type:"radio",name:t,value:n,onChange:a,onBlur:c}),Object(h.jsx)(i.a.Check.Label,{children:n})]})},f=function(e){var t=e.name,n=e.value,a=e.onChange,c=e.onBlur,r=e.isValid,s=e.isInvalid,l=e.error;return Object(h.jsxs)(i.a.Check,{id:n,bsPrefix:!0,style:{marginTop:"5px"},children:[Object(h.jsx)(i.a.Check.Input,{type:"radio",name:t,value:n,onChange:a,onBlur:c,bsPrefix:!0,isValid:r,isInvalid:s}),Object(h.jsx)(i.a.Check.Label,{children:n}),Object(h.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(i.a.Control.Feedback,{type:"invalid",children:l})]})},y=function(e){var t=e.name,n=e.value,a=e.onChange,c=e.onBlur,r=e.isValid,s=e.isInvalid,l=e.error;return Object(h.jsxs)(i.a.Check,{id:"Other",bsPrefix:!0,style:{marginTop:"5px"},children:[Object(h.jsx)(i.a.Check.Input,{type:"radio",name:t,value:"Other",onChange:a,onBlur:c,bsPrefix:!0,isValid:r,isInvalid:s}),Object(h.jsx)(i.a.Check.Label,{style:{paddingLeft:"8px"},children:"Other:"}),Object(h.jsx)(i.a.Check.Input,{style:{marginLeft:"10px",marginTop:"-2px",borderStyle:"none none solid none"},type:"text",name:"other",value:n,onChange:a,onBlur:c}),Object(h.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(i.a.Control.Feedback,{type:"invalid",children:l})]})},C=n(11),w=m.b().shape({name:m.c().required("This is a required question"),date:m.a().required("This is a required question"),phone:m.c().required("This is a required question"),email:m.c().email().required("This is a required question"),address:m.c().required("This is a required question"),how:m.c().required("This is a required question"),why:m.c().required("This is a required question"),other:m.c().when("why",{is:"Other",then:m.c().required("This is a required question")})});var k=function(){var e=Object(C.f)();return Object(h.jsx)(u.a,{validationSchema:w,onSubmit:function(){return e.push("/submitted")},initialValues:{name:"",date:"",phone:"",email:"",address:"",how:"",why:"",other:""},children:function(e){var t=e.handleSubmit,n=e.handleChange,a=e.handleBlur,c=e.values,r=e.touched,s=e.errors;return Object(h.jsxs)(i.a,{noValidate:!0,onSubmit:t,children:[Object(h.jsx)(i.a.Row,{children:Object(h.jsx)(i.a.Group,{as:j.a,md:"4",controlId:"validationFormikName",children:Object(h.jsx)(p,{label:"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062b\u0644\u0627\u062b\u064a",name:"name",value:c.name,onChange:n,onBlur:a,isValid:r.name&&!s.name,isInvalid:r.name&&!!s.name,error:s.name})})}),Object(h.jsx)(i.a.Row,{children:Object(h.jsx)(i.a.Group,{as:j.a,md:"4",controlId:"validationFormikDate",children:Object(h.jsx)(g,{label:"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u064a\u0644\u0627\u062f",name:"date",value:c.date,onChange:n,onBlur:a,isValid:r.date&&!s.date,isInvalid:r.date&&!!s.date,error:s.date})})}),Object(h.jsx)(i.a.Row,{children:Object(h.jsx)(i.a.Group,{as:j.a,md:"4",controlId:"validationFormikPhone",children:Object(h.jsx)(p,{label:"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",name:"phone",value:c.phone,onChange:n,onBlur:a,isValid:r.phone&&!s.phone,isInvalid:r.phone&&!!s.phone,error:s.phone})})}),Object(h.jsx)(i.a.Row,{children:Object(h.jsx)(i.a.Group,{as:j.a,md:"4",controlId:"validationFormikEmail",children:Object(h.jsx)(p,{label:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",name:"email",value:c.email,onChange:n,onBlur:a,isValid:r.email&&!s.email,isInvalid:r.email&&!!s.email,error:s.email})})}),Object(h.jsx)(i.a.Row,{children:Object(h.jsx)(i.a.Group,{as:j.a,md:"4",controlId:"validationFormikAddress",children:Object(h.jsx)(p,{label:"\u0645\u0643\u0627\u0646 \u0627\u0644\u0633\u0643\u0646",name:"address",value:c.address,onChange:n,onBlur:a,isValid:r.address&&!s.address,isInvalid:r.address&&!!s.address,error:s.address})})}),Object(h.jsx)(i.a.Row,{children:Object(h.jsxs)(i.a.Group,{as:j.a,md:"4",controlId:"validationFormikHow",children:[Object(h.jsx)(i.a.Label,{children:"\u0643\u064a\u0641 \u0639\u0631\u0641\u062a \u0639\u0646 \u0627\u0644\u0645\u0646\u0635\u0629 \u061f"}),Object(h.jsx)(v,{name:"how",value:"\u0633\u0648\u0634\u0627\u0644 \u0645\u064a\u062f\u064a\u0627",onChange:n,onBlur:a}),Object(h.jsx)(v,{name:"how",value:"\u0623\u0635\u062f\u0642\u0627\u0621 \u0648 \u0623\u0642\u0627\u0631\u0628",onChange:n,onBlur:a}),Object(h.jsx)(v,{name:"how",value:"\u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0628\u062d\u062b",onChange:n,onBlur:a}),Object(h.jsx)(f,{name:"how",value:"\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u0645\u062f\u0646\u064a",onChange:n,onBlur:a,isValid:r.how&&!s.how,isInvalid:r.how&&!!s.how,error:s.how})]})}),Object(h.jsx)(i.a.Row,{children:Object(h.jsxs)(i.a.Group,{as:j.a,md:"4",controlId:"validationFormikWhy",children:[Object(h.jsx)(i.a.Label,{children:"\u0645\u0627 \u0633\u0628\u0628 \u062a\u0633\u062c\u064a\u0644\u0643 \u0628\u0627\u0644\u0645\u0646\u0635\u0629"}),Object(h.jsx)(v,{name:"why",value:"\u0645\u0624\u0633\u0633 \u0645\u0628\u0627\u062f\u0631\u0629",onChange:n,onBlur:a}),Object(h.jsx)(v,{name:"why",value:"\u0644\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u062d\u0627\u062a",onChange:n,onBlur:a}),Object(h.jsx)(v,{name:"why",value:"\u0627\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0629",onChange:n,onBlur:a}),Object(h.jsx)(y,{name:"why",value:c.other,onChange:n,onBlur:a,isValid:(r.why||r.other)&&!s.why&&!s.other,isInvalid:(r.why||r.other)&&(!!s.why||!!s.other),error:s.why||s.other})]})}),Object(h.jsx)(o.a,{type:"submit",children:"Submit form"})]})}})},I=function(){return Object(h.jsx)("div",{children:"I am an institution needs halls page"})},N=function(){return Object(h.jsx)("div",{children:"I am an instituion has halls page"})},B=n(68),F=n(112),q=function(){return Object(h.jsx)(F.a,{color:"blue"})},S=function(e){var t=e.href,n=e.children;return Object(h.jsx)(B.a.Item,{action:!0,href:t,className:"border-0",children:n})},L=function(e){var t=e.href,n=e.children;return Object(h.jsxs)(S,{action:!0,href:t,children:[Object(h.jsx)(q,{}),n]})},T=n(113),V=function(){return Object(h.jsx)(T.a,{color:"blue",size:"100px"})},P=function(){var e=Object(C.g)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(l.a,{children:[Object(h.jsx)(j.a,{md:4}),Object(h.jsx)(j.a,{md:"auto",children:Object(h.jsx)("h1",{style:{borderStyle:"solid",borderColor:"blue"},className:"pr-5 pl-5",children:"New User"})})]}),Object(h.jsx)(l.a,{className:"mt-5",children:"Are you?"}),Object(h.jsxs)(B.a,{children:[Object(h.jsx)(L,{href:"#person",children:"Person"}),Object(h.jsx)(L,{href:"#institution-needs-halls",children:"Institution needs halls"}),Object(h.jsx)(L,{href:"#institution-has-halls",children:"Institution has halls"})]}),Object(h.jsxs)(l.a,{className:"mt-3",children:[Object(h.jsx)(j.a,{md:10}),Object(h.jsx)(j.a,{children:Object(h.jsx)(x.b,{to:"".concat(e.pathname,"/").concat(e.hash.substring(1,e.hash.length)),children:Object(h.jsx)(V,{})})})]})]})},R=function(){switch(Object(C.h)().registerType){case"person":return Object(h.jsx)(k,{});case"institution-needs-halls":return Object(h.jsx)(I,{});case"institution-has-halls":return Object(h.jsx)(N,{});default:return Object(h.jsx)(P,{})}},G=function(){return Object(h.jsxs)("div",{style:{textAlign:"center"},children:[Object(h.jsx)(l.a,{className:"mt-5",children:Object(h.jsx)(j.a,{children:Object(h.jsx)("h4",{children:"We will send a verification E-mail to your Email, Please check your Email and Active your account"})})}),Object(h.jsx)(l.a,{className:"mt-5",children:Object(h.jsx)(j.a,{children:Object(h.jsx)("h4",{children:"Thank you"})})})]})},A=n(115),H=function(){var e=Object(C.g)(),t=decodeURI(e.hash.substring(1,e.hash.length));return Object(h.jsxs)("div",{style:{textAlign:"center"},children:[Object(h.jsx)(l.a,{className:"mt-5",children:Object(h.jsx)(j.a,{children:Object(h.jsx)("h1",{children:"".concat(t," questions")})})}),Object(h.jsxs)(l.a,{className:"mt-5",children:[Object(h.jsx)(j.a,{md:10}),Object(h.jsx)(j.a,{children:Object(h.jsx)(x.b,{to:"Institution has halls"===t?"/hall-specifications":"/submitted",children:Object(h.jsx)(V,{})})})]})]})},E=n(16),U=n(17),W=n(57),z=n(64),M=function(){var e=Object(C.g)(),t=Object(a.useState)(""),n=Object(U.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)([]),i=Object(U.a)(s,2),d=i[0],o=i[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(l.a,{children:[Object(h.jsx)(j.a,{md:4}),Object(h.jsx)(j.a,{md:"auto",children:Object(h.jsx)("h1",{style:{borderStyle:"solid",borderRadius:"10px"},className:"pr-5 pl-5",children:"Hall Specifications"})})]}),Object(h.jsxs)(l.a,{className:"mt-5",children:[Object(h.jsx)(j.a,{md:3,children:Object(h.jsx)(W.a,{placeholder:"Hall Name",onChange:function(e){return r(e.target.value)}})}),Object(h.jsx)(j.a,{md:1,children:Object(h.jsx)(b,{onClick:function(){return o([].concat(Object(E.a)(d),[c]))},children:"Add"})}),Object(h.jsx)(j.a,{md:1,children:Object(h.jsx)(b,{onClick:function(){return o(d.filter((function(e){return e!==c})))},children:"Remove"})})]}),Object(h.jsx)(l.a,{className:"mt-5",children:Object(h.jsxs)(z.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Hall Name"}),Object(h.jsx)("th",{children:"Specifications"})]})}),Object(h.jsx)("tbody",{children:d.map((function(t,n){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:n+1}),Object(h.jsx)("td",{children:t}),Object(h.jsx)("td",{children:Object(h.jsx)(x.b,{to:"".concat(e.pathname,"/").concat(n+1),children:Object(h.jsx)(b,{children:"Show"})})})]},n)}))})]})})]})},D=function(){var e=Object(a.useState)(),t=Object(U.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(U.a)(r,2),d=s[0],o=s[1],O=Object(a.useState)(!1),u=Object(U.a)(O,2),m=u[0],p=u[1];return Object(a.useEffect)((function(){p(d.length>=5)}),[d]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(l.a,{children:[Object(h.jsx)(j.a,{md:4}),Object(h.jsx)(j.a,{md:"auto",children:Object(h.jsx)("h1",{style:{borderStyle:"solid",borderRadius:"10px"},className:"pr-5 pl-5",children:"Hall Specifications"})})]}),Object(h.jsx)(l.a,{className:"mt-5",children:Object(h.jsx)(j.a,{children:Object(h.jsxs)("p",{children:["Please provide us with atleast ",Object(h.jsx)("b",{children:"five"})," clear pictures for the hall"]})})}),Object(h.jsxs)(l.a,{className:"mt-5",children:[Object(h.jsx)(j.a,{md:3,children:Object(h.jsx)(i.a.File,{id:"custom-file",label:"Custom file input",custom:!0,onChange:function(e){return c(e.target.value.replace(/.*[/\\]/,""))}})}),Object(h.jsx)(j.a,{md:1,children:Object(h.jsx)(b,{onClick:function(){return o([].concat(Object(E.a)(d),[n]))},children:"Add"})}),Object(h.jsx)(j.a,{md:1,children:Object(h.jsx)(b,{onClick:function(){return o(d.filter((function(e){return e!==n})))},children:"Remove"})}),Object(h.jsx)(j.a,{md:1,children:Object(h.jsx)(x.b,{to:"/submitted",children:Object(h.jsx)(b,{disabled:!m,children:"Upload"})})})]}),Object(h.jsx)(l.a,{className:"mt-5",children:Object(h.jsxs)(z.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Picture"})]})}),Object(h.jsx)("tbody",{children:d.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t+1}),Object(h.jsx)("td",{children:e})]},t)}))})]})})]})},J=function(){return Object(C.i)({path:"/hall-specifications",exact:!0})?Object(h.jsx)(M,{}):Object(h.jsx)(D,{})},Y=function(e){var t=e.children;return Object(h.jsx)(o.a,{variant:"outline-dark",children:t})},K=n(114),Q=n(37),X=n(117),Z=n(48),$=function(){var e=Object(a.useState)(0),t=Object(U.a)(e,2),n=t[0],c=t[1];return Object(h.jsxs)(Z.a,{activeIndex:n,onSelect:function(e,t){c(e)},children:[Object(h.jsx)(Z.a.Item,{interval:1e3,children:Object(h.jsx)("img",{style:{width:"800px",height:"400px"},className:"d-block w-100",src:"1.png",alt:"First slide"})}),Object(h.jsx)(Z.a.Item,{interval:1e3,children:Object(h.jsx)("img",{style:{width:"800px",height:"400px"},className:"d-block w-100",src:"2.jpg",alt:"Second slide"})}),Object(h.jsx)(Z.a.Item,{interval:1e3,children:Object(h.jsx)("img",{style:{width:"800px",height:"400px"},className:"d-block w-100",src:"3.jpg",alt:"Third slide"})})]})},_=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(l.a,{className:"mt-5",children:[Object(h.jsx)(j.a,{md:4,children:Object(h.jsx)(K.a,{src:"logo.png",rounded:!0,style:{width:"200px",height:"50px"}})}),Object(h.jsx)(j.a,{md:6,children:Object(h.jsx)("h1",{children:"Masa7ati | \u0645\u0633\u0627\u062d\u062a\u064a"})}),Object(h.jsx)(j.a,{md:1,children:Object(h.jsxs)("div",{class:"btn-toolbar",children:[Object(h.jsx)(x.b,{to:"/login",children:Object(h.jsx)(b,{className:"btn btn-primary mr-2 mb-2",children:"Login"})}),Object(h.jsx)(x.b,{to:"/register",children:Object(h.jsx)(b,{className:"btn btn-primary mr-2 mb-2",children:"Register"})})]})}),Object(h.jsx)(j.a,{md:1,className:"mt-4",children:Object(h.jsx)(Y,{variant:"outline-dark",children:"Arabic"})})]}),Object(h.jsx)(l.a,{children:Object(h.jsx)(j.a,{children:Object(h.jsxs)(X.a,{bg:"light",variant:"light",children:[Object(h.jsx)(Q.a,{className:"mr-auto",children:Object(h.jsx)(Q.a.Link,{href:"#home",children:"Who are we?"})}),Object(h.jsx)(Q.a,{children:Object(h.jsx)(Q.a.Link,{href:"#features",children:"What we do?"})}),Object(h.jsx)(Q.a,{className:"ml-auto",children:Object(h.jsx)(Q.a.Link,{href:"#pricing",children:"Connect us"})})]})})}),Object(h.jsx)(l.a,{children:Object(h.jsx)(j.a,{children:Object(h.jsx)($,{})})})]})};var ee=function(){return Object(h.jsx)(A.a,{children:Object(h.jsxs)(C.c,{children:[Object(h.jsx)(C.a,{exact:!0,path:"/",children:Object(h.jsx)(_,{})}),Object(h.jsx)(C.a,{path:"/login",children:Object(h.jsx)(O,{})}),Object(h.jsx)(C.a,{path:"/register/:registerType?",children:Object(h.jsx)(R,{})}),Object(h.jsx)(C.a,{path:"/questions",children:Object(h.jsx)(H,{})}),Object(h.jsx)(C.a,{path:"/submitted",children:Object(h.jsx)(G,{})}),Object(h.jsx)(C.a,{path:"/hall-specifications",children:Object(h.jsx)(J,{})})]})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,230)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x.a,{basename:"/masa7ati",children:Object(h.jsx)(ee,{})})}),document.getElementById("root")),te()}},[[228,1,2]]]);
//# sourceMappingURL=main.8d8b7370.chunk.js.map