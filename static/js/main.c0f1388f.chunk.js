(this.webpackJsonpmasa7ati=this.webpackJsonpmasa7ati||[]).push([[0],{122:function(e,t,c){},228:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(42),r=c.n(s),i=(c(122),c(123),c(5)),l=c(10),j=c(8),d=c(83),h=c(38),o=c(2),b=function(e){return Object(o.jsx)(h.a,Object(d.a)(Object(d.a)({variant:"primary",style:{color:"black",borderColor:"white",boxShadow:"0px 0px 10px 4px rgba(0,0,0,0.3)",height:"38px",width:"83px"}},e),{},{children:e.children}))},x=c(14),O=function(){return Object(o.jsxs)("div",{style:{textAlign:"center"},children:[Object(o.jsx)(l.a,{className:"mt-5",children:Object(o.jsx)(j.a,{children:Object(o.jsx)("h1",{style:{backgroundColor:"orange",display:"inline"},children:"Masa7ati | \u0645\u0633\u0627\u062d\u062a\u064a"})})}),Object(o.jsx)(l.a,{className:"mt-5",children:Object(o.jsx)(j.a,{children:Object(o.jsxs)(i.a,{children:[Object(o.jsxs)(i.a.Group,{as:l.a,className:"mb-3",controlId:"formHorizontalUsername",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(o.jsx)(i.a.Label,{column:!0,sm:2,children:"Username:"}),Object(o.jsx)(j.a,{sm:7,children:Object(o.jsx)(i.a.Control,{type:"text"})})]}),Object(o.jsxs)(i.a.Group,{as:l.a,className:"mb-3",controlId:"formHorizontalPassword",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(o.jsx)(i.a.Label,{column:!0,sm:2,children:"Password:"}),Object(o.jsx)(j.a,{sm:7,children:Object(o.jsx)(i.a.Control,{type:"password"})})]}),Object(o.jsx)(i.a.Group,{as:l.a,className:"mb-3",children:Object(o.jsx)(j.a,{sm:{span:10,offset:2},children:Object(o.jsx)(x.b,{to:"/",children:Object(o.jsx)(b,{children:"Login"})})})})]})})})]})},u=c(116),m=c(21),p=m.b().shape({name:m.c().required("This is a required question"),date:m.a().required("This is a required question"),phone:m.c().required("This is a required question"),email:m.c().email().required("This is a required question"),address:m.c().required("This is a required question"),how:m.c().required("This is a required question"),why:m.c().required("This is a required question"),other:m.c().when("why",{is:"Other",then:m.c().required("hahahaha")})});var f=function(){return Object(o.jsx)(u.a,{validationSchema:p,onSubmit:function(){return console.log("amego")},initialValues:{name:"",date:"",phone:"",email:"",address:"",how:"",why:"",other:""},children:function(e){var t=e.handleSubmit,c=e.handleChange,a=e.handleBlur,n=e.values,s=e.touched,r=e.errors;return Object(o.jsxs)(i.a,{noValidate:!0,onSubmit:t,children:[Object(o.jsx)(i.a.Row,{children:Object(o.jsxs)(i.a.Group,{as:j.a,md:"4",controlId:"validationFormikName",children:[Object(o.jsx)(i.a.Label,{children:"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062b\u0644\u0627\u062b\u064a"}),Object(o.jsx)(i.a.Control,{type:"text",placeholder:"Your answer",name:"name",value:n.name,onChange:c,onBlur:a,isValid:s.name&&!r.name,isInvalid:s.name&&!!r.name}),Object(o.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(o.jsx)(i.a.Control.Feedback,{type:"invalid",children:r.name})]})}),Object(o.jsx)(i.a.Row,{children:Object(o.jsxs)(i.a.Group,{as:j.a,md:"4",controlId:"validationFormikDate",children:[Object(o.jsx)(i.a.Label,{children:"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u064a\u0644\u0627\u062f"}),Object(o.jsx)(i.a.Control,{type:"date",name:"date",value:n.date,onChange:c,onBlur:a,isValid:s.date&&!r.date,isInvalid:s.date&&!!r.date}),Object(o.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(o.jsx)(i.a.Control.Feedback,{type:"invalid",children:r.date})]})}),Object(o.jsx)(i.a.Row,{children:Object(o.jsxs)(i.a.Group,{as:j.a,md:"4",controlId:"validationFormikPhone",children:[Object(o.jsx)(i.a.Label,{children:"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"}),Object(o.jsx)(i.a.Control,{type:"text",placeholder:"Your answer",name:"phone",value:n.phone,onChange:c,onBlur:a,isValid:s.phone&&!r.phone,isInvalid:s.phone&&!!r.phone}),Object(o.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(o.jsx)(i.a.Control.Feedback,{type:"invalid",children:r.phone})]})}),Object(o.jsx)(i.a.Row,{children:Object(o.jsxs)(i.a.Group,{as:j.a,md:"4",controlId:"validationFormikEmail",children:[Object(o.jsx)(i.a.Label,{children:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),Object(o.jsx)(i.a.Control,{type:"text",placeholder:"Your answer",name:"email",value:n.email,onChange:c,onBlur:a,isValid:s.email&&!r.email,isInvalid:s.email&&!!r.email}),Object(o.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(o.jsx)(i.a.Control.Feedback,{type:"invalid",children:r.email})]})}),Object(o.jsx)(i.a.Row,{children:Object(o.jsxs)(i.a.Group,{as:j.a,md:"4",controlId:"validationFormikAddress",children:[Object(o.jsx)(i.a.Label,{children:"\u0645\u0643\u0627\u0646 \u0627\u0644\u0633\u0643\u0646"}),Object(o.jsx)(i.a.Control,{type:"text",placeholder:"Your answer",name:"address",value:n.address,onChange:c,onBlur:a,isValid:s.address&&!r.address,isInvalid:s.address&&!!r.address}),Object(o.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(o.jsx)(i.a.Control.Feedback,{type:"invalid",children:r.address})]})}),Object(o.jsx)(i.a.Row,{children:Object(o.jsxs)(i.a.Group,{as:j.a,md:"4",controlId:"validationFormikHow",children:[Object(o.jsx)(i.a.Label,{children:"\u0643\u064a\u0641 \u0639\u0631\u0641\u062a \u0639\u0646 \u0627\u0644\u0645\u0646\u0635\u0629 \u061f"}),Object(o.jsxs)(i.a.Check,{id:"\u0633\u0648\u0634\u0627\u0644 \u0645\u064a\u062f\u064a\u0627",children:[Object(o.jsx)(i.a.Check.Input,{type:"radio",name:"how",value:"\u0633\u0648\u0634\u0627\u0644 \u0645\u064a\u062f\u064a\u0627",onChange:c,onBlur:a}),Object(o.jsx)(i.a.Check.Label,{children:"\u0633\u0648\u0634\u0627\u0644 \u0645\u064a\u062f\u064a\u0627"})]}),Object(o.jsxs)(i.a.Check,{id:"\u0623\u0635\u062f\u0642\u0627\u0621 \u0648 \u0623\u0642\u0627\u0631\u0628",children:[Object(o.jsx)(i.a.Check.Input,{type:"radio",name:"how",value:"\u0623\u0635\u062f\u0642\u0627\u0621 \u0648 \u0623\u0642\u0627\u0631\u0628",onChange:c,onBlur:a}),Object(o.jsx)(i.a.Check.Label,{children:"\u0623\u0635\u062f\u0642\u0627\u0621 \u0648 \u0623\u0642\u0627\u0631\u0628"})]}),Object(o.jsxs)(i.a.Check,{id:"\u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0628\u062d\u062b",children:[Object(o.jsx)(i.a.Check.Input,{type:"radio",name:"how",value:"\u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0628\u062d\u062b",onChange:c,onBlur:a}),Object(o.jsx)(i.a.Check.Label,{children:"\u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0628\u062d\u062b"})]}),Object(o.jsxs)(i.a.Check,{id:"\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u0645\u062f\u0646\u064a",bsPrefix:!0,children:[Object(o.jsx)(i.a.Check.Input,{type:"radio",name:"how",value:"\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u0645\u062f\u0646\u064a",onChange:c,onBlur:a,bsPrefix:!0,isValid:s.how&&!r.how,isInvalid:s.how&&!!r.how}),Object(o.jsx)(i.a.Check.Label,{children:"\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u0645\u062f\u0646\u064a"}),Object(o.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(o.jsx)(i.a.Control.Feedback,{type:"invalid",children:r.how})]})]})}),Object(o.jsx)(i.a.Row,{children:Object(o.jsxs)(i.a.Group,{as:j.a,md:"4",controlId:"validationFormikWhy",children:[Object(o.jsx)(i.a.Label,{children:"\u0645\u0627 \u0633\u0628\u0628 \u062a\u0633\u062c\u064a\u0644\u0643 \u0628\u0627\u0644\u0645\u0646\u0635\u0629"}),Object(o.jsxs)(i.a.Check,{id:"\u0645\u0624\u0633\u0633 \u0645\u0628\u0627\u062f\u0631\u0629",children:[Object(o.jsx)(i.a.Check.Input,{type:"radio",name:"why",value:"\u0645\u0624\u0633\u0633 \u0645\u0628\u0627\u062f\u0631\u0629",onChange:c,onBlur:a}),Object(o.jsx)(i.a.Check.Label,{children:"\u0645\u0624\u0633\u0633 \u0645\u0628\u0627\u062f\u0631\u0629"})]}),Object(o.jsxs)(i.a.Check,{id:"\u0644\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u062d\u0627\u062a",children:[Object(o.jsx)(i.a.Check.Input,{type:"radio",name:"why",value:"\u0644\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u062d\u0627\u062a",onChange:c,onBlur:a}),Object(o.jsx)(i.a.Check.Label,{children:"\u0644\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u062d\u0627\u062a"})]}),Object(o.jsxs)(i.a.Check,{id:"\u0627\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0629",children:[Object(o.jsx)(i.a.Check.Input,{type:"radio",name:"why",value:"\u0627\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0629",onChange:c,onBlur:a}),Object(o.jsx)(i.a.Check.Label,{children:"\u0627\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0629"})]}),Object(o.jsxs)(i.a.Check,{id:"Other",bsPrefix:!0,children:[Object(o.jsx)(i.a.Check.Input,{type:"radio",name:"why",value:"Other",onChange:c,onBlur:a,bsPrefix:!0,isValid:s.why&&!r.why,isInvalid:s.why&&!!r.why}),Object(o.jsx)(i.a.Check.Label,{style:{paddingLeft:"8px"},children:"Other:"}),Object(o.jsx)(i.a.Check.Input,{style:{marginLeft:"10px",marginTop:"-2px",borderStyle:"none none solid none"},type:"text",name:"other",value:n.other,onChange:c,onBlur:a,isValid:s.other&&!r.other,isInvalid:s.other&&!!r.other}),Object(o.jsx)(i.a.Control.Feedback,{children:"Looks good!"}),Object(o.jsx)(i.a.Control.Feedback,{type:"invalid",children:r.why||r.other})]})]})}),Object(o.jsx)(h.a,{type:"submit",children:"Submit form"})]})}})},g=function(){return Object(o.jsx)("div",{children:"I am an institution needs halls page"})},C=function(){return Object(o.jsx)("div",{children:"I am an instituion has halls page"})},v=c(68),y=c(112),k=function(){return Object(o.jsx)(y.a,{color:"blue"})},w=function(e){var t=e.href,c=e.children;return Object(o.jsx)(v.a.Item,{action:!0,href:t,className:"border-0",children:c})},I=function(e){var t=e.href,c=e.children;return Object(o.jsxs)(w,{action:!0,href:t,children:[Object(o.jsx)(k,{}),c]})},L=c(113),N=function(){return Object(o.jsx)(L.a,{color:"blue",size:"100px"})},F=c(11),q=function(){var e=Object(F.f)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(l.a,{children:[Object(o.jsx)(j.a,{md:4}),Object(o.jsx)(j.a,{md:"auto",children:Object(o.jsx)("h1",{style:{borderStyle:"solid",borderColor:"blue"},className:"pr-5 pl-5",children:"New User"})})]}),Object(o.jsx)(l.a,{className:"mt-5",children:"Are you?"}),Object(o.jsxs)(v.a,{children:[Object(o.jsx)(I,{href:"#person",children:"Person"}),Object(o.jsx)(I,{href:"#institution-needs-halls",children:"Institution needs halls"}),Object(o.jsx)(I,{href:"#institution-has-halls",children:"Institution has halls"})]}),Object(o.jsxs)(l.a,{className:"mt-3",children:[Object(o.jsx)(j.a,{md:10}),Object(o.jsx)(j.a,{children:Object(o.jsx)(x.b,{to:"".concat(e.pathname,"/").concat(e.hash.substring(1,e.hash.length)),children:Object(o.jsx)(N,{})})})]})]})},S=function(){switch(Object(F.g)().registerType){case"person":return Object(o.jsx)(f,{});case"institution-needs-halls":return Object(o.jsx)(g,{});case"institution-has-halls":return Object(o.jsx)(C,{});default:return Object(o.jsx)(q,{})}},B=function(){return Object(o.jsxs)("div",{style:{textAlign:"center"},children:[Object(o.jsx)(l.a,{className:"mt-5",children:Object(o.jsx)(j.a,{children:Object(o.jsx)("h4",{children:"We will send a verification E-mail to your Email, Please check your Email and Active your account"})})}),Object(o.jsx)(l.a,{className:"mt-5",children:Object(o.jsx)(j.a,{children:Object(o.jsx)("h4",{children:"Thank you"})})})]})},T=c(115),P=function(){var e=Object(F.f)(),t=decodeURI(e.hash.substring(1,e.hash.length));return Object(o.jsxs)("div",{style:{textAlign:"center"},children:[Object(o.jsx)(l.a,{className:"mt-5",children:Object(o.jsx)(j.a,{children:Object(o.jsx)("h1",{children:"".concat(t," questions")})})}),Object(o.jsxs)(l.a,{className:"mt-5",children:[Object(o.jsx)(j.a,{md:10}),Object(o.jsx)(j.a,{children:Object(o.jsx)(x.b,{to:"Institution has halls"===t?"/hall-specifications":"/submitted",children:Object(o.jsx)(N,{})})})]})]})},R=c(16),G=c(17),V=c(57),A=c(64),H=function(){var e=Object(F.f)(),t=Object(a.useState)(""),c=Object(G.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)([]),i=Object(G.a)(r,2),d=i[0],h=i[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(l.a,{children:[Object(o.jsx)(j.a,{md:4}),Object(o.jsx)(j.a,{md:"auto",children:Object(o.jsx)("h1",{style:{borderStyle:"solid",borderRadius:"10px"},className:"pr-5 pl-5",children:"Hall Specifications"})})]}),Object(o.jsxs)(l.a,{className:"mt-5",children:[Object(o.jsx)(j.a,{md:3,children:Object(o.jsx)(V.a,{placeholder:"Hall Name",onChange:function(e){return s(e.target.value)}})}),Object(o.jsx)(j.a,{md:1,children:Object(o.jsx)(b,{onClick:function(){return h([].concat(Object(R.a)(d),[n]))},children:"Add"})}),Object(o.jsx)(j.a,{md:1,children:Object(o.jsx)(b,{onClick:function(){return h(d.filter((function(e){return e!==n})))},children:"Remove"})})]}),Object(o.jsx)(l.a,{className:"mt-5",children:Object(o.jsxs)(A.a,{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:"Hall Name"}),Object(o.jsx)("th",{children:"Specifications"})]})}),Object(o.jsx)("tbody",{children:d.map((function(t,c){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:c+1}),Object(o.jsx)("td",{children:t}),Object(o.jsx)("td",{children:Object(o.jsx)(x.b,{to:"".concat(e.pathname,"/").concat(c+1),children:Object(o.jsx)(b,{children:"Show"})})})]},c)}))})]})})]})},E=function(){var e=Object(a.useState)(),t=Object(G.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(G.a)(s,2),d=r[0],h=r[1],O=Object(a.useState)(!1),u=Object(G.a)(O,2),m=u[0],p=u[1];return Object(a.useEffect)((function(){p(d.length>=5)}),[d]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(l.a,{children:[Object(o.jsx)(j.a,{md:4}),Object(o.jsx)(j.a,{md:"auto",children:Object(o.jsx)("h1",{style:{borderStyle:"solid",borderRadius:"10px"},className:"pr-5 pl-5",children:"Hall Specifications"})})]}),Object(o.jsx)(l.a,{className:"mt-5",children:Object(o.jsx)(j.a,{children:Object(o.jsxs)("p",{children:["Please provide us with atleast ",Object(o.jsx)("b",{children:"five"})," clear pictures for the hall"]})})}),Object(o.jsxs)(l.a,{className:"mt-5",children:[Object(o.jsx)(j.a,{md:3,children:Object(o.jsx)(i.a.File,{id:"custom-file",label:"Custom file input",custom:!0,onChange:function(e){return n(e.target.value.replace(/.*[/\\]/,""))}})}),Object(o.jsx)(j.a,{md:1,children:Object(o.jsx)(b,{onClick:function(){return h([].concat(Object(R.a)(d),[c]))},children:"Add"})}),Object(o.jsx)(j.a,{md:1,children:Object(o.jsx)(b,{onClick:function(){return h(d.filter((function(e){return e!==c})))},children:"Remove"})}),Object(o.jsx)(j.a,{md:1,children:Object(o.jsx)(x.b,{to:"/submitted",children:Object(o.jsx)(b,{disabled:!m,children:"Upload"})})})]}),Object(o.jsx)(l.a,{className:"mt-5",children:Object(o.jsxs)(A.a,{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:"Picture"})]})}),Object(o.jsx)("tbody",{children:d.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t+1}),Object(o.jsx)("td",{children:e})]},t)}))})]})})]})},U=function(){return Object(F.h)({path:"/hall-specifications",exact:!0})?Object(o.jsx)(H,{}):Object(o.jsx)(E,{})},W=function(e){var t=e.children;return Object(o.jsx)(h.a,{variant:"outline-dark",children:t})},Y=c(114),z=c(37),M=c(117),D=c(48),J=function(){var e=Object(a.useState)(0),t=Object(G.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)(D.a,{activeIndex:c,onSelect:function(e,t){n(e)},children:[Object(o.jsx)(D.a.Item,{interval:1e3,children:Object(o.jsx)("img",{style:{width:"800px",height:"400px"},className:"d-block w-100",src:"1.png",alt:"First slide"})}),Object(o.jsx)(D.a.Item,{interval:1e3,children:Object(o.jsx)("img",{style:{width:"800px",height:"400px"},className:"d-block w-100",src:"2.jpg",alt:"Second slide"})}),Object(o.jsx)(D.a.Item,{interval:1e3,children:Object(o.jsx)("img",{style:{width:"800px",height:"400px"},className:"d-block w-100",src:"3.jpg",alt:"Third slide"})})]})},K=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(l.a,{className:"mt-5",children:[Object(o.jsx)(j.a,{md:4,children:Object(o.jsx)(Y.a,{src:"logo.png",rounded:!0,style:{width:"200px",height:"50px"}})}),Object(o.jsx)(j.a,{md:6,children:Object(o.jsx)("h1",{children:"Masa7ati | \u0645\u0633\u0627\u062d\u062a\u064a"})}),Object(o.jsx)(j.a,{md:1,children:Object(o.jsxs)("div",{class:"btn-toolbar",children:[Object(o.jsx)(x.b,{to:"/login",children:Object(o.jsx)(b,{className:"btn btn-primary mr-2 mb-2",children:"Login"})}),Object(o.jsx)(x.b,{to:"/register",children:Object(o.jsx)(b,{className:"btn btn-primary mr-2 mb-2",children:"Register"})})]})}),Object(o.jsx)(j.a,{md:1,className:"mt-4",children:Object(o.jsx)(W,{variant:"outline-dark",children:"Arabic"})})]}),Object(o.jsx)(l.a,{children:Object(o.jsx)(j.a,{children:Object(o.jsxs)(M.a,{bg:"light",variant:"light",children:[Object(o.jsx)(z.a,{className:"mr-auto",children:Object(o.jsx)(z.a.Link,{href:"#home",children:"Who are we?"})}),Object(o.jsx)(z.a,{children:Object(o.jsx)(z.a.Link,{href:"#features",children:"What we do?"})}),Object(o.jsx)(z.a,{className:"ml-auto",children:Object(o.jsx)(z.a.Link,{href:"#pricing",children:"Connect us"})})]})})}),Object(o.jsx)(l.a,{children:Object(o.jsx)(j.a,{children:Object(o.jsx)(J,{})})})]})};var Q=function(){return Object(o.jsx)(T.a,{children:Object(o.jsxs)(F.c,{children:[Object(o.jsx)(F.a,{exact:!0,path:"/",children:Object(o.jsx)(K,{})}),Object(o.jsx)(F.a,{path:"/login",children:Object(o.jsx)(O,{})}),Object(o.jsx)(F.a,{path:"/register/:registerType?",children:Object(o.jsx)(S,{})}),Object(o.jsx)(F.a,{path:"/questions",children:Object(o.jsx)(P,{})}),Object(o.jsx)(F.a,{path:"/submitted",children:Object(o.jsx)(B,{})}),Object(o.jsx)(F.a,{path:"/hall-specifications",children:Object(o.jsx)(U,{})})]})})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,230)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(x.a,{basename:"/masa7ati",children:Object(o.jsx)(Q,{})})}),document.getElementById("root")),X()}},[[228,1,2]]]);
//# sourceMappingURL=main.c0f1388f.chunk.js.map