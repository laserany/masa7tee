(this.webpackJsonpmasa7ati=this.webpackJsonpmasa7ati||[]).push([[0],{122:function(e,t,c){},228:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(42),r=c.n(s),i=(c(122),c(123),c(6)),j=c(10),l=c(8),d=c(83),o=c(38),h=c(2),b=function(e){return Object(h.jsx)(o.a,Object(d.a)(Object(d.a)({variant:"primary",style:{color:"black",borderColor:"white",boxShadow:"0px 0px 10px 4px rgba(0,0,0,0.3)",height:"38px",width:"83px"}},e),{},{children:e.children}))},x=c(14),O=function(){return Object(h.jsxs)("div",{style:{textAlign:"center"},children:[Object(h.jsx)(j.a,{className:"mt-5",children:Object(h.jsx)(l.a,{children:Object(h.jsx)("h1",{style:{backgroundColor:"orange",display:"inline"},children:"Masa7ati | \u0645\u0633\u0627\u062d\u062a\u064a"})})}),Object(h.jsx)(j.a,{className:"mt-5",children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(i.a,{children:[Object(h.jsxs)(i.a.Group,{as:j.a,className:"mb-3",controlId:"formHorizontalUsername",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)(i.a.Label,{column:!0,sm:2,children:"Username:"}),Object(h.jsx)(l.a,{sm:7,children:Object(h.jsx)(i.a.Control,{type:"text"})})]}),Object(h.jsxs)(i.a.Group,{as:j.a,className:"mb-3",controlId:"formHorizontalPassword",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)(i.a.Label,{column:!0,sm:2,children:"Password:"}),Object(h.jsx)(l.a,{sm:7,children:Object(h.jsx)(i.a.Control,{type:"password"})})]}),Object(h.jsx)(i.a.Group,{as:j.a,className:"mb-3",children:Object(h.jsx)(l.a,{sm:{span:10,offset:2},children:Object(h.jsx)(x.b,{to:"/",children:Object(h.jsx)(b,{children:"Login"})})})})]})})})]})},u=c(116),m=c(31),p=m.b().shape({name:m.c().required("This is a required question"),date:m.a().required("This is a required question"),phone:m.c().required("This is a required question"),email:m.c().email().required("This is a required question"),address:m.c().required("This is a required question"),how:m.c().required("This is a required question")});var f=function(){return Object(h.jsx)(u.a,{validationSchema:p,onSubmit:function(){return console.log("amego")},initialValues:{name:"",date:"",phone:"",email:"",address:"",how:""},children:function(e){var t=e.handleSubmit,c=e.handleChange,a=e.handleBlur,n=e.values,s=e.touched,r=e.errors;return Object(h.jsxs)(i.a,{noValidate:!0,onSubmit:t,children:[Object(h.jsx)(i.a.Row,{children:Object(h.jsxs)(i.a.Group,{as:l.a,md:"4",controlId:"validationFormikName",children:[Object(h.jsx)(i.a.Label,{children:"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062b\u0644\u0627\u062b\u064a"}),Object(h.jsx)(i.a.Control,{type:"text",placeholder:"Your answer",name:"name",value:n.name,onChange:c,onBlur:a,isValid:s.name&&!r.name,isInvalid:s.name&&!!r.name}),Object(h.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(i.a.Control.Feedback,{type:"invalid",children:r.name})]})}),Object(h.jsx)(i.a.Row,{children:Object(h.jsxs)(i.a.Group,{as:l.a,md:"4",controlId:"validationFormikDate",children:[Object(h.jsx)(i.a.Label,{children:"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u064a\u0644\u0627\u062f"}),Object(h.jsx)(i.a.Control,{type:"date",name:"date",value:n.date,onChange:c,onBlur:a,isValid:s.date&&!r.date,isInvalid:s.date&&!!r.date}),Object(h.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(i.a.Control.Feedback,{type:"invalid",children:r.date})]})}),Object(h.jsx)(i.a.Row,{children:Object(h.jsxs)(i.a.Group,{as:l.a,md:"4",controlId:"validationFormikPhone",children:[Object(h.jsx)(i.a.Label,{children:"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"}),Object(h.jsx)(i.a.Control,{type:"text",placeholder:"Your answer",name:"phone",value:n.phone,onChange:c,onBlur:a,isValid:s.phone&&!r.phone,isInvalid:s.phone&&!!r.phone}),Object(h.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(i.a.Control.Feedback,{type:"invalid",children:r.phone})]})}),Object(h.jsx)(i.a.Row,{children:Object(h.jsxs)(i.a.Group,{as:l.a,md:"4",controlId:"validationFormikEmail",children:[Object(h.jsx)(i.a.Label,{children:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),Object(h.jsx)(i.a.Control,{type:"text",placeholder:"Your answer",name:"email",value:n.email,onChange:c,onBlur:a,isValid:s.email&&!r.email,isInvalid:s.email&&!!r.email}),Object(h.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(i.a.Control.Feedback,{type:"invalid",children:r.email})]})}),Object(h.jsx)(i.a.Row,{children:Object(h.jsxs)(i.a.Group,{as:l.a,md:"4",controlId:"validationFormikAddress",children:[Object(h.jsx)(i.a.Label,{children:"\u0645\u0643\u0627\u0646 \u0627\u0644\u0633\u0643\u0646"}),Object(h.jsx)(i.a.Control,{type:"text",placeholder:"Your answer",name:"address",value:n.address,onChange:c,onBlur:a,isValid:s.address&&!r.address,isInvalid:s.address&&!!r.address}),Object(h.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(i.a.Control.Feedback,{type:"invalid",children:r.address})]})}),Object(h.jsx)(i.a.Row,{children:Object(h.jsxs)(i.a.Group,{as:l.a,md:"4",controlId:"validationFormikHow",children:[Object(h.jsx)(i.a.Label,{children:"\u0643\u064a\u0641 \u0639\u0631\u0641\u062a \u0639\u0646 \u0627\u0644\u0645\u0646\u0635\u0629 \u061f"}),Object(h.jsxs)(i.a.Check,{children:[Object(h.jsx)(i.a.Check.Input,{type:"radio",name:"how",value:"\u0633\u0648\u0634\u0627\u0644 \u0645\u064a\u062f\u064a\u0627",id:"\u0633\u0648\u0634\u0627\u0644 \u0645\u064a\u062f\u064a\u0627",onChange:c,onBlur:a}),Object(h.jsx)(i.a.Check.Label,{children:"\u0633\u0648\u0634\u0627\u0644 \u0645\u064a\u062f\u064a\u0627"})]}),Object(h.jsxs)(i.a.Check,{children:[Object(h.jsx)(i.a.Check.Input,{type:"radio",name:"how",value:"\u0623\u0635\u062f\u0642\u0627\u0621 \u0648 \u0623\u0642\u0627\u0631\u0628",id:"\u0623\u0635\u062f\u0642\u0627\u0621 \u0648 \u0623\u0642\u0627\u0631\u0628",onChange:c,onBlur:a}),Object(h.jsx)(i.a.Check.Label,{children:"\u0623\u0635\u062f\u0642\u0627\u0621 \u0648 \u0623\u0642\u0627\u0631\u0628"})]}),Object(h.jsxs)(i.a.Check,{children:[Object(h.jsx)(i.a.Check.Input,{type:"radio",name:"how",value:"\u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0628\u062d\u062b",id:"\u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0628\u062d\u062b",onChange:c,onBlur:a}),Object(h.jsx)(i.a.Check.Label,{children:"\u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0628\u062d\u062b"})]}),Object(h.jsxs)(i.a.Check,{id:"\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u0645\u062f\u0646\u064a",bsPrefix:!0,children:[Object(h.jsx)(i.a.Check.Input,{type:"radio",name:"how",value:"\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u0645\u062f\u0646\u064a",onChange:c,onBlur:a,bsPrefix:!0,isValid:s.how&&!r.how,isInvalid:s.how&&!!r.how}),Object(h.jsx)(i.a.Check.Label,{children:"\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u0645\u062f\u0646\u064a"}),Object(h.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(i.a.Control.Feedback,{type:"invalid",children:r.how})]})]})}),Object(h.jsx)(o.a,{type:"submit",children:"Submit form"})]})}})},g=function(){return Object(h.jsx)("div",{children:"I am an institution needs halls page"})},v=function(){return Object(h.jsx)("div",{children:"I am an instituion has halls page"})},C=c(68),k=c(112),y=function(){return Object(h.jsx)(k.a,{color:"blue"})},w=function(e){var t=e.href,c=e.children;return Object(h.jsx)(C.a.Item,{action:!0,href:t,className:"border-0",children:c})},I=function(e){var t=e.href,c=e.children;return Object(h.jsxs)(w,{action:!0,href:t,children:[Object(h.jsx)(y,{}),c]})},N=c(113),F=function(){return Object(h.jsx)(N.a,{color:"blue",size:"100px"})},L=c(11),S=function(){var e=Object(L.f)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(j.a,{children:[Object(h.jsx)(l.a,{md:4}),Object(h.jsx)(l.a,{md:"auto",children:Object(h.jsx)("h1",{style:{borderStyle:"solid",borderColor:"blue"},className:"pr-5 pl-5",children:"New User"})})]}),Object(h.jsx)(j.a,{className:"mt-5",children:"Are you?"}),Object(h.jsxs)(C.a,{children:[Object(h.jsx)(I,{href:"#person",children:"Person"}),Object(h.jsx)(I,{href:"#institution-needs-halls",children:"Institution needs halls"}),Object(h.jsx)(I,{href:"#institution-has-halls",children:"Institution has halls"})]}),Object(h.jsxs)(j.a,{className:"mt-3",children:[Object(h.jsx)(l.a,{md:10}),Object(h.jsx)(l.a,{children:Object(h.jsx)(x.b,{to:"".concat(e.pathname,"/").concat(e.hash.substring(1,e.hash.length)),children:Object(h.jsx)(F,{})})})]})]})},q=function(){switch(Object(L.g)().registerType){case"person":return Object(h.jsx)(f,{});case"institution-needs-halls":return Object(h.jsx)(g,{});case"institution-has-halls":return Object(h.jsx)(v,{});default:return Object(h.jsx)(S,{})}},B=function(){return Object(h.jsxs)("div",{style:{textAlign:"center"},children:[Object(h.jsx)(j.a,{className:"mt-5",children:Object(h.jsx)(l.a,{children:Object(h.jsx)("h4",{children:"We will send a verification E-mail to your Email, Please check your Email and Active your account"})})}),Object(h.jsx)(j.a,{className:"mt-5",children:Object(h.jsx)(l.a,{children:Object(h.jsx)("h4",{children:"Thank you"})})})]})},R=c(115),T=function(){var e=Object(L.f)(),t=decodeURI(e.hash.substring(1,e.hash.length));return Object(h.jsxs)("div",{style:{textAlign:"center"},children:[Object(h.jsx)(j.a,{className:"mt-5",children:Object(h.jsx)(l.a,{children:Object(h.jsx)("h1",{children:"".concat(t," questions")})})}),Object(h.jsxs)(j.a,{className:"mt-5",children:[Object(h.jsx)(l.a,{md:10}),Object(h.jsx)(l.a,{children:Object(h.jsx)(x.b,{to:"Institution has halls"===t?"/hall-specifications":"/submitted",children:Object(h.jsx)(F,{})})})]})]})},P=c(16),A=c(17),G=c(57),V=c(64),H=function(){var e=Object(L.f)(),t=Object(a.useState)(""),c=Object(A.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)([]),i=Object(A.a)(r,2),d=i[0],o=i[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(j.a,{children:[Object(h.jsx)(l.a,{md:4}),Object(h.jsx)(l.a,{md:"auto",children:Object(h.jsx)("h1",{style:{borderStyle:"solid",borderRadius:"10px"},className:"pr-5 pl-5",children:"Hall Specifications"})})]}),Object(h.jsxs)(j.a,{className:"mt-5",children:[Object(h.jsx)(l.a,{md:3,children:Object(h.jsx)(G.a,{placeholder:"Hall Name",onChange:function(e){return s(e.target.value)}})}),Object(h.jsx)(l.a,{md:1,children:Object(h.jsx)(b,{onClick:function(){return o([].concat(Object(P.a)(d),[n]))},children:"Add"})}),Object(h.jsx)(l.a,{md:1,children:Object(h.jsx)(b,{onClick:function(){return o(d.filter((function(e){return e!==n})))},children:"Remove"})})]}),Object(h.jsx)(j.a,{className:"mt-5",children:Object(h.jsxs)(V.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Hall Name"}),Object(h.jsx)("th",{children:"Specifications"})]})}),Object(h.jsx)("tbody",{children:d.map((function(t,c){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:c+1}),Object(h.jsx)("td",{children:t}),Object(h.jsx)("td",{children:Object(h.jsx)(x.b,{to:"".concat(e.pathname,"/").concat(c+1),children:Object(h.jsx)(b,{children:"Show"})})})]},c)}))})]})})]})},E=function(){var e=Object(a.useState)(),t=Object(A.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(A.a)(s,2),d=r[0],o=r[1],O=Object(a.useState)(!1),u=Object(A.a)(O,2),m=u[0],p=u[1];return Object(a.useEffect)((function(){p(d.length>=5)}),[d]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(j.a,{children:[Object(h.jsx)(l.a,{md:4}),Object(h.jsx)(l.a,{md:"auto",children:Object(h.jsx)("h1",{style:{borderStyle:"solid",borderRadius:"10px"},className:"pr-5 pl-5",children:"Hall Specifications"})})]}),Object(h.jsx)(j.a,{className:"mt-5",children:Object(h.jsx)(l.a,{children:Object(h.jsxs)("p",{children:["Please provide us with atleast ",Object(h.jsx)("b",{children:"five"})," clear pictures for the hall"]})})}),Object(h.jsxs)(j.a,{className:"mt-5",children:[Object(h.jsx)(l.a,{md:3,children:Object(h.jsx)(i.a.File,{id:"custom-file",label:"Custom file input",custom:!0,onChange:function(e){return n(e.target.value.replace(/.*[/\\]/,""))}})}),Object(h.jsx)(l.a,{md:1,children:Object(h.jsx)(b,{onClick:function(){return o([].concat(Object(P.a)(d),[c]))},children:"Add"})}),Object(h.jsx)(l.a,{md:1,children:Object(h.jsx)(b,{onClick:function(){return o(d.filter((function(e){return e!==c})))},children:"Remove"})}),Object(h.jsx)(l.a,{md:1,children:Object(h.jsx)(x.b,{to:"/submitted",children:Object(h.jsx)(b,{disabled:!m,children:"Upload"})})})]}),Object(h.jsx)(j.a,{className:"mt-5",children:Object(h.jsxs)(V.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Picture"})]})}),Object(h.jsx)("tbody",{children:d.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t+1}),Object(h.jsx)("td",{children:e})]},t)}))})]})})]})},U=function(){return Object(L.h)({path:"/hall-specifications",exact:!0})?Object(h.jsx)(H,{}):Object(h.jsx)(E,{})},Y=function(e){var t=e.children;return Object(h.jsx)(o.a,{variant:"outline-dark",children:t})},z=c(114),M=c(37),W=c(117),D=c(48),J=function(){var e=Object(a.useState)(0),t=Object(A.a)(e,2),c=t[0],n=t[1];return Object(h.jsxs)(D.a,{activeIndex:c,onSelect:function(e,t){n(e)},children:[Object(h.jsx)(D.a.Item,{interval:1e3,children:Object(h.jsx)("img",{style:{width:"800px",height:"400px"},className:"d-block w-100",src:"1.png",alt:"First slide"})}),Object(h.jsx)(D.a.Item,{interval:1e3,children:Object(h.jsx)("img",{style:{width:"800px",height:"400px"},className:"d-block w-100",src:"2.jpg",alt:"Second slide"})}),Object(h.jsx)(D.a.Item,{interval:1e3,children:Object(h.jsx)("img",{style:{width:"800px",height:"400px"},className:"d-block w-100",src:"3.jpg",alt:"Third slide"})})]})},K=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(j.a,{className:"mt-5",children:[Object(h.jsx)(l.a,{md:4,children:Object(h.jsx)(z.a,{src:"logo.png",rounded:!0,style:{width:"200px",height:"50px"}})}),Object(h.jsx)(l.a,{md:6,children:Object(h.jsx)("h1",{children:"Masa7ati | \u0645\u0633\u0627\u062d\u062a\u064a"})}),Object(h.jsx)(l.a,{md:1,children:Object(h.jsxs)("div",{class:"btn-toolbar",children:[Object(h.jsx)(x.b,{to:"/login",children:Object(h.jsx)(b,{className:"btn btn-primary mr-2 mb-2",children:"Login"})}),Object(h.jsx)(x.b,{to:"/register",children:Object(h.jsx)(b,{className:"btn btn-primary mr-2 mb-2",children:"Register"})})]})}),Object(h.jsx)(l.a,{md:1,className:"mt-4",children:Object(h.jsx)(Y,{variant:"outline-dark",children:"Arabic"})})]}),Object(h.jsx)(j.a,{children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(W.a,{bg:"light",variant:"light",children:[Object(h.jsx)(M.a,{className:"mr-auto",children:Object(h.jsx)(M.a.Link,{href:"#home",children:"Who are we?"})}),Object(h.jsx)(M.a,{children:Object(h.jsx)(M.a.Link,{href:"#features",children:"What we do?"})}),Object(h.jsx)(M.a,{className:"ml-auto",children:Object(h.jsx)(M.a.Link,{href:"#pricing",children:"Connect us"})})]})})}),Object(h.jsx)(j.a,{children:Object(h.jsx)(l.a,{children:Object(h.jsx)(J,{})})})]})};var Q=function(){return Object(h.jsx)(R.a,{children:Object(h.jsxs)(L.c,{children:[Object(h.jsx)(L.a,{exact:!0,path:"/",children:Object(h.jsx)(K,{})}),Object(h.jsx)(L.a,{path:"/login",children:Object(h.jsx)(O,{})}),Object(h.jsx)(L.a,{path:"/register/:registerType?",children:Object(h.jsx)(q,{})}),Object(h.jsx)(L.a,{path:"/questions",children:Object(h.jsx)(T,{})}),Object(h.jsx)(L.a,{path:"/submitted",children:Object(h.jsx)(B,{})}),Object(h.jsx)(L.a,{path:"/hall-specifications",children:Object(h.jsx)(U,{})})]})})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,230)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(x.a,{basename:"/masa7ati",children:Object(h.jsx)(Q,{})})}),document.getElementById("root")),X()}},[[228,1,2]]]);
//# sourceMappingURL=main.7f86b2c7.chunk.js.map