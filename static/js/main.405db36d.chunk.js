(this.webpackJsonpmasa7ati=this.webpackJsonpmasa7ati||[]).push([[0],{122:function(e,t,i){},228:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),r=i(43),s=i.n(r),l=(i(122),i(123),i(3)),c=i(11),o=i(6),d=i(84),j=i(38),h=i(2),u=function(e){return Object(h.jsx)(j.a,Object(d.a)(Object(d.a)({variant:"primary",style:{color:"black",borderColor:"white",boxShadow:"0px 0px 10px 4px rgba(0,0,0,0.3)",height:"38px",width:"83px"}},e),{},{children:e.children}))},b=i(13),m=function(){return Object(h.jsxs)("div",{style:{textAlign:"center"},children:[Object(h.jsx)(c.a,{className:"mt-5",children:Object(h.jsx)(o.a,{children:Object(h.jsx)("h1",{style:{backgroundColor:"orange",display:"inline"},children:"Masa7ati | \u0645\u0633\u0627\u062d\u062a\u064a"})})}),Object(h.jsx)(c.a,{className:"mt-5",children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(l.a,{children:[Object(h.jsxs)(l.a.Group,{as:c.a,className:"mb-3",controlId:"formHorizontalUsername",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)(l.a.Label,{column:!0,sm:2,children:"Username:"}),Object(h.jsx)(o.a,{sm:7,children:Object(h.jsx)(l.a.Control,{type:"text"})})]}),Object(h.jsxs)(l.a.Group,{as:c.a,className:"mb-3",controlId:"formHorizontalPassword",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)(l.a.Label,{column:!0,sm:2,children:"Password:"}),Object(h.jsx)(o.a,{sm:7,children:Object(h.jsx)(l.a.Control,{type:"password"})})]}),Object(h.jsx)(l.a.Group,{as:c.a,className:"mb-3",children:Object(h.jsx)(o.a,{sm:{span:10,offset:2},children:Object(h.jsx)(b.b,{to:"/",children:Object(h.jsx)(u,{children:"Login"})})})})]})})})]})},x=i(41),O=i(9),v=function(e){var t=e.label,i=e.name,n=e.value,a=e.onChange,r=e.onBlur,s=e.isValid,c=e.isInvalid,o=e.error;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(l.a.Label,{children:t}),Object(h.jsx)(l.a.Control,{type:"text",placeholder:"Your answer",name:i,value:n,onChange:a,onBlur:r,isValid:s,isInvalid:c}),Object(h.jsx)(l.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(l.a.Control.Feedback,{type:"invalid",children:o})]})},p=function(e){var t=e.label,i=e.name,n=e.value,a=e.onChange,r=e.onBlur,s=e.isValid,c=e.isInvalid,o=e.error;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(l.a.Label,{children:t}),Object(h.jsx)(l.a.Control,{type:"date",name:i,value:n,onChange:a,onBlur:r,isValid:s,isInvalid:c}),Object(h.jsx)(l.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(l.a.Control.Feedback,{type:"invalid",children:o})]})},g=function(e){var t=e.name,i=e.value,n=e.onChange,a=e.onBlur;return Object(h.jsxs)(l.a.Check,{id:i,style:{marginTop:"5px"},children:[Object(h.jsx)(l.a.Check.Input,{type:"radio",name:t,value:i,onChange:n,onBlur:a}),Object(h.jsx)(l.a.Check.Label,{children:i})]})},f=function(e){var t=e.name,i=e.value,n=e.onChange,a=e.onBlur,r=e.isValid,s=e.isInvalid,c=e.error;return Object(h.jsxs)(l.a.Check,{id:i,bsPrefix:!0,style:{marginTop:"5px"},children:[Object(h.jsx)(l.a.Check.Input,{type:"radio",name:t,value:i,onChange:n,onBlur:a,bsPrefix:!0,isValid:r,isInvalid:s}),Object(h.jsx)(l.a.Check.Label,{children:i}),Object(h.jsx)(l.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(l.a.Control.Feedback,{type:"invalid",children:c})]})},C=function(e){var t=e.name,i=e.value,n=e.onChange,a=e.onBlur,r=e.isValid,s=e.isInvalid,c=e.error;return Object(h.jsxs)(l.a.Check,{id:"radio_other",bsPrefix:!0,style:{marginTop:"5px"},children:[Object(h.jsx)(l.a.Check.Input,{type:"radio",name:t,value:"radio_other",onChange:n,onBlur:a,bsPrefix:!0,isValid:r,isInvalid:s}),Object(h.jsx)(l.a.Check.Label,{style:{paddingLeft:"8px"},children:"Other:"}),Object(h.jsx)(l.a.Check.Input,{style:{marginLeft:"10px",marginTop:"-2px",borderStyle:"none none solid none"},type:"text",name:"radio_other",value:i,onChange:n,onBlur:a}),Object(h.jsx)(l.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(l.a.Control.Feedback,{type:"invalid",children:c})]})},k=i(12),q=i(113),I=function(){return Object(h.jsx)(q.a,{color:"blue",size:"100px"})},N=function(){return Object(h.jsx)(j.a,{as:"button",style:{border:"none",backgroundColor:"transparent"},children:Object(h.jsx)(I,{})})},y=O.c().shape({name:O.d().required("This is a required question"),date:O.b().required("This is a required question"),phone:O.d().required("This is a required question"),email:O.d().email().required("This is a required question"),address:O.d().required("This is a required question"),how:O.d().required("This is a required question"),why:O.d().required("This is a required question"),radio_other:O.d().when("why",{is:"radio_other",then:O.d().required("This is a required question")})});var w=function(){var e=Object(k.f)();return Object(h.jsx)(x.a,{validationSchema:y,onSubmit:function(){return e.push("/submitted")},initialValues:{name:"",date:"",phone:"",email:"",address:"",how:"",why:"",radio_other:""},children:function(e){var t=e.handleSubmit,i=e.handleChange,n=e.handleBlur,a=e.values,r=e.touched,s=e.errors;return Object(h.jsxs)(l.a,{noValidate:!0,onSubmit:t,children:[Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikName",children:Object(h.jsx)(v,{label:"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062b\u0644\u0627\u062b\u064a",name:"name",value:a.name,onChange:i,onBlur:n,isValid:r.name&&!s.name,isInvalid:r.name&&!!s.name,error:s.name})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikDate",children:Object(h.jsx)(p,{label:"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u064a\u0644\u0627\u062f",name:"date",value:a.date,onChange:i,onBlur:n,isValid:r.date&&!s.date,isInvalid:r.date&&!!s.date,error:s.date})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikPhone",children:Object(h.jsx)(v,{label:"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",name:"phone",value:a.phone,onChange:i,onBlur:n,isValid:r.phone&&!s.phone,isInvalid:r.phone&&!!s.phone,error:s.phone})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikEmail",children:Object(h.jsx)(v,{label:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",name:"email",value:a.email,onChange:i,onBlur:n,isValid:r.email&&!s.email,isInvalid:r.email&&!!s.email,error:s.email})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikAddress",children:Object(h.jsx)(v,{label:"\u0645\u0643\u0627\u0646 \u0627\u0644\u0633\u0643\u0646",name:"address",value:a.address,onChange:i,onBlur:n,isValid:r.address&&!s.address,isInvalid:r.address&&!!s.address,error:s.address})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsxs)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikHow",children:[Object(h.jsx)(l.a.Label,{children:"\u0643\u064a\u0641 \u0639\u0631\u0641\u062a \u0639\u0646 \u0627\u0644\u0645\u0646\u0635\u0629 \u061f"}),Object(h.jsx)(g,{name:"how",value:"\u0633\u0648\u0634\u0627\u0644 \u0645\u064a\u062f\u064a\u0627",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"how",value:"\u0623\u0635\u062f\u0642\u0627\u0621 \u0648 \u0623\u0642\u0627\u0631\u0628",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"how",value:"\u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0628\u062d\u062b",onChange:i,onBlur:n}),Object(h.jsx)(f,{name:"how",value:"\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u0645\u062f\u0646\u064a",onChange:i,onBlur:n,isValid:r.how&&!s.how,isInvalid:r.how&&!!s.how,error:s.how})]})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsxs)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikWhy",children:[Object(h.jsx)(l.a.Label,{children:"\u0645\u0627 \u0633\u0628\u0628 \u062a\u0633\u062c\u064a\u0644\u0643 \u0628\u0627\u0644\u0645\u0646\u0635\u0629"}),Object(h.jsx)(g,{name:"why",value:"\u0645\u0624\u0633\u0633 \u0645\u0628\u0627\u062f\u0631\u0629",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"why",value:"\u0644\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u062d\u0627\u062a",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"why",value:"\u0627\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0629",onChange:i,onBlur:n}),Object(h.jsx)(C,{name:"why",value:a.radio_other,onChange:i,onBlur:n,isValid:(r.why||r.radio_other)&&!s.why&&!s.radio_other,isInvalid:(r.why||r.radio_other)&&(!!s.why||!!s.radio_other),error:s.why||s.radio_other})]})}),Object(h.jsxs)(l.a.Row,{className:"mt-3",children:[Object(h.jsx)(o.a,{md:10}),Object(h.jsx)(o.a,{children:Object(h.jsx)(N,{})})]})]})}})},B=O.c().shape({institutionName:O.d().required("This is a required question"),representativeName:O.d().required("This is a required question"),institutionPhone:O.d().required("This is a required question"),representativePhone:O.d().required("This is a required question"),institutionEmail:O.d().email().required("This is a required question"),representativeEmail:O.d().email().required("This is a required question"),field:O.d().required("This is a required question"),radio_other:O.d().when("field",{is:"radio_other",then:O.d().required("This is a required question")})});var P=function(){var e=Object(k.f)();return Object(h.jsx)(x.a,{validationSchema:B,onSubmit:function(){return e.push("/submitted")},initialValues:{institutionName:"",representativeName:"",institutionPhone:"",representativePhone:"",institutionEmail:"",representativeEmail:"",field:"",radio_other:""},children:function(e){var t=e.handleSubmit,i=e.handleChange,n=e.handleBlur,a=e.values,r=e.touched,s=e.errors;return Object(h.jsxs)(l.a,{noValidate:!0,onSubmit:t,children:[Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikInstitutionName",children:Object(h.jsx)(v,{label:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \\ \u0627\u0644\u0645\u0646\u0638\u0645\u0629",name:"institutionName",value:a.institutionName,onChange:i,onBlur:n,isValid:r.institutionName&&!s.institutionName,isInvalid:r.institutionName&&!!s.institutionName,error:s.institutionName})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsxs)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikField",children:[Object(h.jsx)(l.a.Label,{children:"\u0645\u062c\u0627\u0644 \u0627\u0644\u0639\u0645\u0644"}),Object(h.jsx)(g,{name:"field",value:"\u0627\u062c\u062a\u0645\u0627\u0639\u064a",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"field",value:"\u062b\u0642\u0627\u0641\u064a",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"field",value:"\u062a\u0646\u0645\u0648\u064a",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"field",value:"\u062e\u064a\u0631\u064a",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"field",value:"\u0633\u064a\u0627\u0633\u064a",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"field",value:"\u0631\u0642\u0645\u064a",onChange:i,onBlur:n}),Object(h.jsx)(C,{name:"field",value:a.radio_other,onChange:i,onBlur:n,isValid:(r.field||r.radio_other)&&!s.field&&!s.radio_other,isInvalid:(r.field||r.radio_other)&&(!!s.field||!!s.radio_other),error:s.field||s.radio_other})]})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikInstitutionPhone",children:Object(h.jsx)(v,{label:"\u0631\u0642\u0645 \u0647\u0627\u062a\u0641 \u0627\u0644\u0645\u0624\u0633\u0633\u0629",name:"institutionPhone",value:a.institutionPhone,onChange:i,onBlur:n,isValid:r.institutionPhone&&!s.institutionPhone,isInvalid:r.institutionPhone&&!!s.institutionPhone,error:s.institutionPhone})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikInstitutionEmail",children:Object(h.jsx)(v,{label:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0627\u0644\u062e\u0627\u0635 \u0628\u0627\u0644\u0645\u0624\u0633\u0633\u0629",name:"institutionEmail",value:a.institutionEmail,onChange:i,onBlur:n,isValid:r.institutionEmail&&!s.institutionEmail,isInvalid:r.institutionEmail&&!!s.institutionEmail,error:s.institutionEmail})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikRepresentativeName",children:Object(h.jsx)(v,{label:"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062b\u0644\u0627\u062b\u064a \u0644\u0644\u0645\u0633\u0624\u0648\u0644",name:"representativeName",value:a.representativeName,onChange:i,onBlur:n,isValid:r.representativeName&&!s.representativeName,isInvalid:r.representativeName&&!!s.representativeName,error:s.representativeName})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikRepresentativePhone",children:Object(h.jsx)(v,{label:"\u0631\u0642\u0645 \u0647\u0627\u062a\u0641 \u0627\u0644\u0645\u0633\u0624\u0648\u0644",name:"representativePhone",value:a.representativePhone,onChange:i,onBlur:n,isValid:r.representativePhone&&!s.representativePhone,isInvalid:r.representativePhone&&!!s.representativePhone,error:s.representativePhone})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikRepresentativeEmail",children:Object(h.jsx)(v,{label:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0627\u0644\u062e\u0627\u0635 \u0628\u0627\u0644\u0645\u0624\u0633\u0633\u0629",name:"representativeEmail",value:a.representativeEmail,onChange:i,onBlur:n,isValid:r.representativeEmail&&!s.representativeEmail,isInvalid:r.representativeEmail&&!!s.representativeEmail,error:s.representativeEmail})})}),Object(h.jsxs)(l.a.Row,{className:"mt-3",children:[Object(h.jsx)(o.a,{md:10}),Object(h.jsx)(o.a,{children:Object(h.jsx)(N,{})})]})]})}})},F=function(e){var t=e.name,i=e.value,n=e.onChange,a=e.onBlur;return Object(h.jsxs)(l.a.Check,{id:i,style:{marginTop:"5px"},children:[Object(h.jsx)(l.a.Check.Input,{type:"checkbox",name:t,value:i,onChange:n,onBlur:a}),Object(h.jsx)(l.a.Check.Label,{children:i})]})},E=function(e){var t=e.name,i=e.value,n=e.onChange,a=e.onBlur,r=e.isValid,s=e.isInvalid,c=e.error;return Object(h.jsxs)(l.a.Check,{id:"checkbox_other",bsPrefix:!0,style:{marginTop:"5px"},children:[Object(h.jsx)(l.a.Check.Input,{type:"checkbox",name:t,value:"checkbox_other",onChange:n,onBlur:a,bsPrefix:!0,isValid:r,isInvalid:s}),Object(h.jsx)(l.a.Check.Label,{style:{paddingLeft:"8px"},children:"Other:"}),Object(h.jsx)(l.a.Check.Input,{style:{marginLeft:"10px",marginTop:"-2px",borderStyle:"none none solid none"},type:"text",name:"checkbox_other",value:i,onChange:n,onBlur:a}),Object(h.jsx)(l.a.Control.Feedback,{children:"Looks good!"}),Object(h.jsx)(l.a.Control.Feedback,{type:"invalid",children:c})]})},T=O.c().shape({institutionName:O.d().required("This is a required question"),representativeName:O.d().required("This is a required question"),institutionPhone:O.d().required("This is a required question"),representativePhone:O.d().required("This is a required question"),institutionEmail:O.d().email().required("This is a required question"),representativeEmail:O.d().email().required("This is a required question"),field:O.d().required("This is a required question"),hallNumber:O.d().required("This is a required question"),capacity:O.d().required("This is a required question"),time:O.d().required("This is a required question"),logistic:O.a().min(1,"This is a required question"),radio_other:O.d().when("field",{is:"radio_other",then:O.d().required("This is a required question")}),checkbox_other:O.d().when("logistic",{is:function(e){return 1===e.length&&"checkbox_other"===e[0]},then:O.d().required("This is a required question")})});var _=function(){var e=Object(k.f)();return Object(h.jsx)(x.a,{validationSchema:T,onSubmit:function(){return e.push("/submitted")},initialValues:{institutionName:"",representativeName:"",institutionPhone:"",representativePhone:"",institutionEmail:"",representativeEmail:"",field:"",hallNumber:"",capacity:"",time:"",logistic:[],radio_other:"",checkbox_other:""},children:function(e){var t=e.handleSubmit,i=e.handleChange,n=e.handleBlur,a=e.values,r=e.touched,s=e.errors;return Object(h.jsxs)(l.a,{noValidate:!0,onSubmit:t,children:[Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikInstitutionName",children:Object(h.jsx)(v,{label:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \\ \u0627\u0644\u0645\u0646\u0638\u0645\u0629",name:"institutionName",value:a.institutionName,onChange:i,onBlur:n,isValid:r.institutionName&&!s.institutionName,isInvalid:r.institutionName&&!!s.institutionName,error:s.institutionName})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsxs)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikField",children:[Object(h.jsx)(l.a.Label,{children:"\u0645\u062c\u0627\u0644 \u0627\u0644\u0639\u0645\u0644"}),Object(h.jsx)(g,{name:"field",value:"\u0627\u062c\u062a\u0645\u0627\u0639\u064a",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"field",value:"\u062b\u0642\u0627\u0641\u064a",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"field",value:"\u062a\u0646\u0645\u0648\u064a",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"field",value:"\u062e\u064a\u0631\u064a",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"field",value:"\u0633\u064a\u0627\u0633\u064a",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"field",value:"\u0631\u0642\u0645\u064a",onChange:i,onBlur:n}),Object(h.jsx)(C,{name:"field",value:a.radio_other,onChange:i,onBlur:n,isValid:(r.field||r.radio_other)&&!s.field&&!s.radio_other,isInvalid:(r.field||r.radio_other)&&(!!s.field||!!s.radio_other),error:s.field||s.radio_other})]})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikInstitutionPhone",children:Object(h.jsx)(v,{label:"\u0631\u0642\u0645 \u0647\u0627\u062a\u0641 \u0627\u0644\u0645\u0624\u0633\u0633\u0629",name:"institutionPhone",value:a.institutionPhone,onChange:i,onBlur:n,isValid:r.institutionPhone&&!s.institutionPhone,isInvalid:r.institutionPhone&&!!s.institutionPhone,error:s.institutionPhone})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikInstitutionEmail",children:Object(h.jsx)(v,{label:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0627\u0644\u062e\u0627\u0635 \u0628\u0627\u0644\u0645\u0624\u0633\u0633\u0629",name:"institutionEmail",value:a.institutionEmail,onChange:i,onBlur:n,isValid:r.institutionEmail&&!s.institutionEmail,isInvalid:r.institutionEmail&&!!s.institutionEmail,error:s.institutionEmail})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikRepresentativeName",children:Object(h.jsx)(v,{label:"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062b\u0644\u0627\u062b\u064a \u0644\u0644\u0645\u0633\u0624\u0648\u0644",name:"representativeName",value:a.representativeName,onChange:i,onBlur:n,isValid:r.representativeName&&!s.representativeName,isInvalid:r.representativeName&&!!s.representativeName,error:s.representativeName})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikRepresentativePhone",children:Object(h.jsx)(v,{label:"\u0631\u0642\u0645 \u0647\u0627\u062a\u0641 \u0627\u0644\u0645\u0633\u0624\u0648\u0644",name:"representativePhone",value:a.representativePhone,onChange:i,onBlur:n,isValid:r.representativePhone&&!s.representativePhone,isInvalid:r.representativePhone&&!!s.representativePhone,error:s.representativePhone})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikRepresentativeEmail",children:Object(h.jsx)(v,{label:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0627\u0644\u062e\u0627\u0635 \u0628\u0627\u0644\u0645\u0624\u0633\u0633\u0629",name:"representativeEmail",value:a.representativeEmail,onChange:i,onBlur:n,isValid:r.representativeEmail&&!s.representativeEmail,isInvalid:r.representativeEmail&&!!s.representativeEmail,error:s.representativeEmail})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsxs)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikHallNumber",children:[Object(h.jsx)(l.a.Label,{children:"\u0639\u062f\u062f \u0627\u0644\u0642\u0627\u0639\u0627\u062a \u0627\u0644\u062a\u064a \u0633\u0648\u0641 \u062a\u0624\u0645\u0646 \u0644\u0644\u0634\u0628\u0627\u0628"}),Object(h.jsx)(g,{name:"hallNumber",value:"\u0642\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"hallNumber",value:"\u0642\u0627\u0639\u062a\u064a\u0646",onChange:i,onBlur:n}),Object(h.jsx)(g,{name:"hallNumber",value:"\u062b\u0644\u0627\u062b\u0629 \u0642\u0627\u0639\u0627\u062a",onChange:i,onBlur:n}),Object(h.jsx)(f,{name:"hallNumber",value:"\u0623\u0631\u0628\u0639 \u0642\u0627\u0639\u0627\u062a",onChange:i,onBlur:n,isValid:r.hallNumber&&!s.hallNumber,isInvalid:r.hallNumber&&!!s.hallNumber,error:s.hallNumber})]})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikCapacity",children:Object(h.jsx)(v,{label:"\u0627\u0644\u0633\u0639\u0629 \u0627\u0644\u0643\u0628\u0631\u0649 \u0644\u0644\u0642\u0627\u0639\u0629 \u061f",name:"capacity",value:a.capacity,onChange:i,onBlur:n,isValid:r.capacity&&!s.capacity,isInvalid:r.capacity&&!!s.capacity,error:s.capacity})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsx)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikTime",children:Object(h.jsx)(v,{label:"\u0623\u064a\u0627\u0645 \u0648\u0623\u0648\u0642\u0627\u062a \u0627\u0644\u062f\u0648\u0627\u0645",name:"time",value:a.time,onChange:i,onBlur:n,isValid:r.time&&!s.time,isInvalid:r.time&&!!s.time,error:s.time})})}),Object(h.jsx)(l.a.Row,{children:Object(h.jsxs)(l.a.Group,{as:o.a,md:"4",controlId:"validationFormikLogistic",children:[Object(h.jsx)(l.a.Label,{children:"\u0645\u062c\u0627\u0644 \u0627\u0644\u0639\u0645\u0644"}),Object(h.jsx)(F,{name:"logistic",value:"\u062a\u062f\u0641\u0626\u0629",onChange:i,onBlur:n}),Object(h.jsx)(F,{name:"logistic",value:"\u0634\u0627\u0634\u0629",onChange:i,onBlur:n}),Object(h.jsx)(F,{name:"logistic",value:"\u0642\u0631\u0637\u0627\u0633\u064a\u0629",onChange:i,onBlur:n}),Object(h.jsx)(F,{name:"logistic",value:"Coffee break",onChange:i,onBlur:n}),Object(h.jsx)(E,{name:"logistic",value:a.checkbox_other,onChange:i,onBlur:n,isValid:(r.logistic||r.checkbox_other)&&!s.logistic&&!s.checkbox_other,isInvalid:(r.logistic||r.checkbox_other)&&(!!s.logistic||!!s.checkbox_other),error:s.logistic||s.checkbox_other})]})}),Object(h.jsxs)(l.a.Row,{className:"mt-3",children:[Object(h.jsx)(o.a,{md:10}),Object(h.jsx)(o.a,{children:Object(h.jsx)(N,{})})]})]})}})},V=i(69),R=i(114),L=function(){return Object(h.jsx)(R.a,{color:"blue"})},S=function(e){var t=e.href,i=e.children;return Object(h.jsx)(V.a.Item,{action:!0,href:t,className:"border-0",children:i})},G=function(e){var t=e.href,i=e.children;return Object(h.jsxs)(S,{action:!0,href:t,children:[Object(h.jsx)(L,{}),i]})},A=function(){var e=Object(k.g)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(c.a,{children:[Object(h.jsx)(o.a,{md:4}),Object(h.jsx)(o.a,{md:"auto",children:Object(h.jsx)("h1",{style:{borderStyle:"solid",borderColor:"blue"},className:"pr-5 pl-5",children:"New User"})})]}),Object(h.jsx)(c.a,{className:"mt-5",children:"Are you?"}),Object(h.jsxs)(V.a,{children:[Object(h.jsx)(G,{href:"#person",children:"Person"}),Object(h.jsx)(G,{href:"#institution-needs-halls",children:"Institution needs halls"}),Object(h.jsx)(G,{href:"#institution-has-halls",children:"Institution has halls"})]}),Object(h.jsxs)(c.a,{className:"mt-3",children:[Object(h.jsx)(o.a,{md:10}),Object(h.jsx)(o.a,{children:Object(h.jsx)(b.b,{to:"".concat(e.pathname,"/").concat(e.hash.substring(1,e.hash.length)),children:Object(h.jsx)(I,{})})})]})]})},H=function(){switch(Object(k.h)().registerType){case"person":return Object(h.jsx)(w,{});case"institution-needs-halls":return Object(h.jsx)(P,{});case"institution-has-halls":return Object(h.jsx)(_,{});default:return Object(h.jsx)(A,{})}},U=function(){return Object(h.jsxs)("div",{style:{textAlign:"center"},children:[Object(h.jsx)(c.a,{className:"mt-5",children:Object(h.jsx)(o.a,{children:Object(h.jsx)("h4",{children:"We will send a verification E-mail to your Email, Please check your Email and Active your account"})})}),Object(h.jsx)(c.a,{className:"mt-5",children:Object(h.jsx)(o.a,{children:Object(h.jsx)("h4",{children:"Thank you"})})})]})},W=i(116),z=function(){var e=Object(k.g)(),t=decodeURI(e.hash.substring(1,e.hash.length));return Object(h.jsxs)("div",{style:{textAlign:"center"},children:[Object(h.jsx)(c.a,{className:"mt-5",children:Object(h.jsx)(o.a,{children:Object(h.jsx)("h1",{children:"".concat(t," questions")})})}),Object(h.jsxs)(c.a,{className:"mt-5",children:[Object(h.jsx)(o.a,{md:10}),Object(h.jsx)(o.a,{children:Object(h.jsx)(b.b,{to:"Institution has halls"===t?"/hall-specifications":"/submitted",children:Object(h.jsx)(I,{})})})]})]})},M=i(17),D=i(18),J=i(58),Y=i(65),K=function(){var e=Object(k.g)(),t=Object(n.useState)(""),i=Object(D.a)(t,2),a=i[0],r=i[1],s=Object(n.useState)([]),l=Object(D.a)(s,2),d=l[0],j=l[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(c.a,{children:[Object(h.jsx)(o.a,{md:4}),Object(h.jsx)(o.a,{md:"auto",children:Object(h.jsx)("h1",{style:{borderStyle:"solid",borderRadius:"10px"},className:"pr-5 pl-5",children:"Hall Specifications"})})]}),Object(h.jsxs)(c.a,{className:"mt-5",children:[Object(h.jsx)(o.a,{md:3,children:Object(h.jsx)(J.a,{placeholder:"Hall Name",onChange:function(e){return r(e.target.value)}})}),Object(h.jsx)(o.a,{md:1,children:Object(h.jsx)(u,{onClick:function(){return j([].concat(Object(M.a)(d),[a]))},children:"Add"})}),Object(h.jsx)(o.a,{md:1,children:Object(h.jsx)(u,{onClick:function(){return j(d.filter((function(e){return e!==a})))},children:"Remove"})})]}),Object(h.jsx)(c.a,{className:"mt-5",children:Object(h.jsxs)(Y.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Hall Name"}),Object(h.jsx)("th",{children:"Specifications"})]})}),Object(h.jsx)("tbody",{children:d.map((function(t,i){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:i+1}),Object(h.jsx)("td",{children:t}),Object(h.jsx)("td",{children:Object(h.jsx)(b.b,{to:"".concat(e.pathname,"/").concat(i+1),children:Object(h.jsx)(u,{children:"Show"})})})]},i)}))})]})})]})},Q=function(){var e=Object(n.useState)(),t=Object(D.a)(e,2),i=t[0],a=t[1],r=Object(n.useState)([]),s=Object(D.a)(r,2),d=s[0],j=s[1],m=Object(n.useState)(!1),x=Object(D.a)(m,2),O=x[0],v=x[1];return Object(n.useEffect)((function(){v(d.length>=5)}),[d]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(c.a,{children:[Object(h.jsx)(o.a,{md:4}),Object(h.jsx)(o.a,{md:"auto",children:Object(h.jsx)("h1",{style:{borderStyle:"solid",borderRadius:"10px"},className:"pr-5 pl-5",children:"Hall Specifications"})})]}),Object(h.jsx)(c.a,{className:"mt-5",children:Object(h.jsx)(o.a,{children:Object(h.jsxs)("p",{children:["Please provide us with atleast ",Object(h.jsx)("b",{children:"five"})," clear pictures for the hall"]})})}),Object(h.jsxs)(c.a,{className:"mt-5",children:[Object(h.jsx)(o.a,{md:3,children:Object(h.jsx)(l.a.File,{id:"custom-file",label:"Custom file input",custom:!0,onChange:function(e){return a(e.target.value.replace(/.*[/\\]/,""))}})}),Object(h.jsx)(o.a,{md:1,children:Object(h.jsx)(u,{onClick:function(){return j([].concat(Object(M.a)(d),[i]))},children:"Add"})}),Object(h.jsx)(o.a,{md:1,children:Object(h.jsx)(u,{onClick:function(){return j(d.filter((function(e){return e!==i})))},children:"Remove"})}),Object(h.jsx)(o.a,{md:1,children:Object(h.jsx)(b.b,{to:"/submitted",children:Object(h.jsx)(u,{disabled:!O,children:"Upload"})})})]}),Object(h.jsx)(c.a,{className:"mt-5",children:Object(h.jsxs)(Y.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Picture"})]})}),Object(h.jsx)("tbody",{children:d.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t+1}),Object(h.jsx)("td",{children:e})]},t)}))})]})})]})},X=function(){return Object(k.i)({path:"/hall-specifications",exact:!0})?Object(h.jsx)(K,{}):Object(h.jsx)(Q,{})},Z=function(e){var t=e.children;return Object(h.jsx)(j.a,{variant:"outline-dark",children:t})},$=i(115),ee=i(37),te=i(117),ie=i(49),ne=function(){var e=Object(n.useState)(0),t=Object(D.a)(e,2),i=t[0],a=t[1];return Object(h.jsxs)(ie.a,{activeIndex:i,onSelect:function(e,t){a(e)},children:[Object(h.jsx)(ie.a.Item,{interval:1e3,children:Object(h.jsx)("img",{style:{width:"800px",height:"400px"},className:"d-block w-100",src:"1.png",alt:"First slide"})}),Object(h.jsx)(ie.a.Item,{interval:1e3,children:Object(h.jsx)("img",{style:{width:"800px",height:"400px"},className:"d-block w-100",src:"2.jpg",alt:"Second slide"})}),Object(h.jsx)(ie.a.Item,{interval:1e3,children:Object(h.jsx)("img",{style:{width:"800px",height:"400px"},className:"d-block w-100",src:"3.jpg",alt:"Third slide"})})]})},ae=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(c.a,{className:"mt-5",children:[Object(h.jsx)(o.a,{md:4,children:Object(h.jsx)($.a,{src:"logo.png",rounded:!0,style:{width:"200px",height:"50px"}})}),Object(h.jsx)(o.a,{md:6,children:Object(h.jsx)("h1",{children:"Masa7ati | \u0645\u0633\u0627\u062d\u062a\u064a"})}),Object(h.jsx)(o.a,{md:1,children:Object(h.jsxs)("div",{class:"btn-toolbar",children:[Object(h.jsx)(b.b,{to:"/login",children:Object(h.jsx)(u,{className:"btn btn-primary mr-2 mb-2",children:"Login"})}),Object(h.jsx)(b.b,{to:"/register",children:Object(h.jsx)(u,{className:"btn btn-primary mr-2 mb-2",children:"Register"})})]})}),Object(h.jsx)(o.a,{md:1,className:"mt-4",children:Object(h.jsx)(Z,{variant:"outline-dark",children:"Arabic"})})]}),Object(h.jsx)(c.a,{children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(te.a,{bg:"light",variant:"light",children:[Object(h.jsx)(ee.a,{className:"mr-auto",children:Object(h.jsx)(ee.a.Link,{href:"#home",children:"Who are we?"})}),Object(h.jsx)(ee.a,{children:Object(h.jsx)(ee.a.Link,{href:"#features",children:"What we do?"})}),Object(h.jsx)(ee.a,{className:"ml-auto",children:Object(h.jsx)(ee.a.Link,{href:"#pricing",children:"Connect us"})})]})})}),Object(h.jsx)(c.a,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(ne,{})})})]})};var re=function(){return Object(h.jsx)(W.a,{children:Object(h.jsxs)(k.c,{children:[Object(h.jsx)(k.a,{exact:!0,path:"/",children:Object(h.jsx)(ae,{})}),Object(h.jsx)(k.a,{path:"/login",children:Object(h.jsx)(m,{})}),Object(h.jsx)(k.a,{path:"/register/:registerType?",children:Object(h.jsx)(H,{})}),Object(h.jsx)(k.a,{path:"/questions",children:Object(h.jsx)(z,{})}),Object(h.jsx)(k.a,{path:"/submitted",children:Object(h.jsx)(U,{})}),Object(h.jsx)(k.a,{path:"/hall-specifications",children:Object(h.jsx)(X,{})})]})})},se=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,230)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;i(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(b.a,{basename:"/masa7ati",children:Object(h.jsx)(re,{})})}),document.getElementById("root")),se()}},[[228,1,2]]]);
//# sourceMappingURL=main.405db36d.chunk.js.map