(this["webpackJsonpexpense-app"]=this["webpackJsonpexpense-app"]||[]).push([[0],{115:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},1671:function(e,t,a){},1673:function(e,t,a){},1674:function(e,t,a){},1676:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(58),s=a.n(r),i=(a(160),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,1745)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))}),o=a(28),l=a(18),d=(a(161),a(31)),j=a.n(d),u=a(44),b=a(7),m=a(1740),x=a(1741),p=a(1734),h=a(1742),O=a(1743),g=a(1738),f=a(1739),v=(a(115),a(85)),y=a.n(v),N=a(84),C=a.n(N),w=a(1),S=function(){var e=Object(l.f)(),t=Object(n.useState)(null),a=Object(b.a)(t,2),c=(a[0],a[1]),r=Object(n.useState)(""),s=Object(b.a)(r,2),i=s[0],d=s[1],v=Object(n.useState)(""),N=Object(b.a)(v,2),S=N[0],E=N[1],k=function(){var t=Object(u.a)(j.a.mark((function t(a){var n,r,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,a.target;case 3:if(n=t.sent,""!==i&&""!==S){t.next=8;break}alert("Unvalid email or password! Please try again."),t.next=19;break;case 8:return t.next=10,fetch("http://ec2-3-96-201-188.ca-central-1.compute.amazonaws.com/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,password:S})});case 10:return r=t.sent,t.next=13,r.json();case 13:s=t.sent,console.log(s),s.token?(localStorage.setItem("access-token",s.token),e("/overview")):n.error&&c(n.error),alert(s.message),d(""),E("");case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(f.a,{className:"signin-container",sx:{display:"flex",alignItems:"flex-end",m:5},children:Object(w.jsxs)("form",{onSubmit:k,className:"signin-form",children:[Object(w.jsx)("div",{className:"sign-title",children:Object(w.jsx)(m.a,{variant:"h6",gutterBottom:!0,component:"div",sx:{m:5,px:5},children:"Sign In"})}),Object(w.jsxs)(x.a,{className:"sign-input",variant:"standard",sx:{m:5},children:[Object(w.jsx)(p.a,{htmlFor:"email",children:"Email:"}),Object(w.jsx)(h.a,{startAdornment:Object(w.jsx)(O.a,{position:"start",children:Object(w.jsx)(C.a,{})}),type:"email",value:i,onChange:function(e){return d(e.target.value)},placeholder:"Email"})]}),Object(w.jsxs)(x.a,{variant:"standard",sx:{m:5},children:[Object(w.jsx)(p.a,{htmlFor:"password",children:"Password:"}),Object(w.jsx)(h.a,{startAdornment:Object(w.jsx)(O.a,{position:"start",children:Object(w.jsx)(y.a,{})}),type:"password",value:S,onChange:function(e){return E(e.target.value)},placeholder:"Password"})]}),Object(w.jsx)(g.a,{type:"submit",value:"Login",variant:"contained",sx:{m:2,px:8},children:"Sign In"}),Object(w.jsxs)(m.a,{className:"signin-member",variant:"subtitle1",gutterBottom:!0,component:"div",sx:{m:2},children:["Not A Member yet?",Object(w.jsx)(o.b,{to:"/signUp",children:" Sign Up "})]})]})})})},E=a(134),k=a.n(E),U=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(b.a)(r,2),i=s[0],l=s[1],d=Object(n.useState)(""),v=Object(b.a)(d,2),N=v[0],S=v[1],E=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==a&&""!==i&&""!==N){e.next=5;break}alert("Something went wrong! Please fill up the form."),e.next=15;break;case 5:return e.next=7,fetch("http://ec2-3-96-201-188.ca-central-1.compute.amazonaws.com/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,email:i,password:N})});case 7:return n=e.sent,e.next=10,n.json();case 10:r=e.sent,console.log(r),c(""),l(""),S("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(f.a,{className:"signin-container",sx:{display:"flex",alignItems:"flex-end",m:5},children:Object(w.jsxs)("form",{onSubmit:E,className:"signin-form",children:[Object(w.jsx)("div",{className:"sign-title",children:Object(w.jsx)(m.a,{variant:"h6",gutterBottom:!0,component:"div",sx:{m:5,px:5},children:"Sign Up"})}),Object(w.jsxs)(x.a,{variant:"standard",sx:{m:5},children:[Object(w.jsx)(p.a,{htmlFor:"name",children:"Name:"}),Object(w.jsx)(h.a,{startAdornment:Object(w.jsx)(O.a,{position:"start",children:Object(w.jsx)(k.a,{})}),type:"text",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Name"})]}),Object(w.jsxs)(x.a,{variant:"standard",sx:{m:5},children:[Object(w.jsx)(p.a,{htmlFor:"email",children:"Email:"}),Object(w.jsx)(h.a,{startAdornment:Object(w.jsx)(O.a,{position:"start",children:Object(w.jsx)(C.a,{})}),type:"email",value:i,onChange:function(e){return l(e.target.value)},placeholder:"Email"})]}),Object(w.jsxs)(x.a,{variant:"standard",sx:{m:5},children:[Object(w.jsx)(p.a,{htmlFor:"password",children:"Password:"}),Object(w.jsx)(h.a,{startAdornment:Object(w.jsx)(O.a,{position:"start",children:Object(w.jsx)(y.a,{})}),type:"password",value:N,onChange:function(e){return S(e.target.value)},placeholder:"Password"})]}),Object(w.jsx)(g.a,{type:"submit",value:"Signup",variant:"contained",sx:{m:5,px:8},children:"Sing Up"}),Object(w.jsxs)(m.a,{variant:"subtitle1",gutterBottom:!0,component:"div",sx:{m:2},children:["Already A Member?",Object(w.jsx)(o.b,{to:"/",children:" Sign In "})]})]})})})},D=a(1737),F=(a(171),a(172),a(135)),P=a.n(F),T=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"header-container",children:Object(w.jsx)(P.a,{className:"header-menuIcon"})})})},A=(a(173),a(136)),I=a.n(A),B=a(137),M=a.n(B),G=a(138),L=a.n(G),Y=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"navbar-container",children:[Object(w.jsx)(o.b,{className:"navbar-icon active",to:"/overview",children:Object(w.jsx)(I.a,{})}),Object(w.jsx)(o.b,{className:"navbar-icon",to:"/AddPayment",children:Object(w.jsx)(M.a,{})}),Object(w.jsx)(o.b,{className:"navbar-icon",to:"/report",children:Object(w.jsx)(L.a,{})})]})})},J=a(61),W=a.n(J),z=a(10),R=function(e,t){switch(t.type){case"DELETE":var a=e.findIndex((function(e){return e.id===t.payload}));return-1!==a&&e.splice(a,1),e;case"ADD":return[].concat(Object(z.a)(e),[t.payload]);case"UPDATE":var n=e.map((function(e){return e.id===t.payload.id&&(e.text=t.payload.text,e.amount=t.payload.amount),e}));return console.log(n,"NEW STATE"),n;default:return e}},V=function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useContext)(H);return Object(n.useEffect)(Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==localStorage.getItem("access-token")){e.next=4;break}alert("Please login first!"),e.next=11;break;case 4:return e.next=6,fetch("http://ec2-3-96-201-188.ca-central-1.compute.amazonaws.com/api/post/getTransactions",{method:"GET",headers:{"x-access-token":localStorage.getItem("access-token")}});case 6:return t=e.sent,e.next=9,t.json();case 9:(a=e.sent).data.length>0&&c(a.data);case 11:case"end":return e.stop()}}),e)}))),[r]),a},$=[{id:1,name:"Dinner",date:"2021-12-08",categories:"Food",amount:-15},{id:2,name:"Lunch",date:"2021-12-09",categories:"Food",amount:-25},{id:3,name:"Light",date:"2021-12-10",categories:"Bill",amount:-75},{id:4,name:"Water",date:"2021-12-11",categories:"Bill",amount:-135},{id:5,name:"Game",date:"2021-12-12",categories:"Entertainment",amount:-79},{id:6,name:"Freelance",date:"2021-12-13",categories:"Food",amount:500},{id:7,name:"Grocery",date:"2021-12-14",categories:"Groceries",amount:-105},{id:8,name:"Salary",date:"2021-12-15",categories:"Entertainment",amount:3500},{id:9,name:"Cinema",date:"2021-12-16",categories:"Entertainment",amount:-35},{id:11,name:"PC",date:"2022-01-17",categories:"Entertainment",amount:-778},{id:12,name:"PC",date:"2022-02-17",categories:"Entertainment",amount:-778},{id:13,name:"PC",date:"2022-03-17",categories:"Entertainment",amount:-778},{id:14,name:"PC",date:"2022-04-17",categories:"Entertainment",amount:-778},{id:15,name:"PC",date:"2022-05-17",categories:"Entertainment",amount:-778},{id:16,name:"PC",date:"2022-06-17",categories:"Entertainment",amount:-778}],H=Object(n.createContext)($),K=function(e){var t=e.children,a=Object(n.useReducer)(R,$),c=Object(b.a)(a,2),r=c[0],s=c[1];return Object(w.jsx)(H.Provider,{value:{history:r,deleteTransaction:function(e){s({type:"DELETE",payload:e})},addTransaction:function(e){s({type:"ADD",payload:e})},updateTransaction:function(e){console.log(e,"updated Transaction"),s({type:"UPDATE",payload:{id:e.id,text:e.text,amount:e.amount}})}},children:t})},_=(a(179),a(139)),q=a.n(_),Q=function(){var e=Object(n.useContext)(H).history.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h4",{className:"balance-text",children:"Total balance"}),Object(w.jsxs)("span",{className:"balance-amunt",children:[Object(w.jsx)(q.a,{className:"balance-icon"}),e]})]})},X=(a(180),a(140)),Z=a.n(X),ee=function(e){console.log("pop up",e);var t=Object(n.useState)(""),a=Object(b.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),i=Object(b.a)(s,2),o=i[0],l=i[1],d=function(){var t=Object(u.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.delete(e.popUpData.id),t.next=3,fetch("http://ec2-3-96-201-188.ca-central-1.compute.amazonaws.com/api/post//delete/".concat(e.popUpData.id),{method:"DELETE"});case 3:a=t.sent,console.log(a),m();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){e.close()};return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"popUp-wrap ",children:Object(w.jsxs)("div",{className:"popUp",children:[Object(w.jsx)(Z.a,{onClick:m,className:"popUp-btn"}),Object(w.jsx)("div",{className:"popUp-newPost",children:Object(w.jsx)("p",{children:"Update Transaction"})}),Object(w.jsx)("div",{className:"popUp-container",children:Object(w.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===c||""===o)alert("ERROR! Please put some value");else{var a={text:c,amount:parseInt(o),id:e.popUpData.id};e.update(a),m()}},children:[Object(w.jsxs)("div",{className:"popUp-inputContainer",children:[Object(w.jsx)("div",{className:"popUp-text",children:Object(w.jsx)("label",{children:"New name: "})}),Object(w.jsx)("input",{value:c,type:"text",placeholder:"New name here...",onChange:function(e){return r(e.target.value)}})]}),Object(w.jsxs)("div",{className:"popUp-inputContainer",children:[Object(w.jsx)("div",{className:"popUp-text",children:Object(w.jsx)("label",{children:"New amount: "})}),Object(w.jsx)("input",{value:o,type:"text",placeholder:"New amount here...",onChange:function(e){return l(e.target.value)}})]}),Object(w.jsxs)("div",{className:"popUp-btnContainer",children:[Object(w.jsx)(g.a,{type:"submit",className:"popUp-btnUpdate",variant:"contained",children:"Update"}),Object(w.jsx)(g.a,{onClick:d,className:"popUp-btnUpdate delete",variant:"contained",children:"Delete"})]})]})})]})})})},te=(a(181),a(89)),ae=a.n(te),ne=function(){var e=Object(n.useContext)(H).history,t=Object(n.useContext)(H).deleteTransaction,a=Object(n.useContext)(H).updateTransaction,c=Object(n.useState)({open:!1}),r=Object(b.a)(c,2),s=r[0],i=r[1],o=W()(),l=W()(o._d).format("YYYY-MM-DD"),d=e.filter((function(e){return e.amount<0})).filter((function(e){return e.date>l})),j=function(){i({open:!1})};return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"comingUp-container",children:[Object(w.jsx)("h4",{className:"comingUp-text",children:"Coming Up"}),Object(w.jsx)("div",{className:"comingUp-cardContainer",children:d.length>0?d.map((function(e){return Object(w.jsxs)("div",{className:"comingUp-card ".concat(e.amount>0?"comingUp-positive":"comingUp-negative"),children:[Object(w.jsxs)("div",{className:"comingUp-header",children:[Object(w.jsx)("span",{className:"comingUp-itemName",children:e.name}),Object(w.jsx)(ae.a,{onClick:function(){return t=e.id,void i({open:!s,id:t});var t},className:"comingUp-details"})]}),Object(w.jsx)("p",{className:"comingUp-date",children:W()(e.date).format("MMM DD")}),Object(w.jsxs)("p",{className:"comingUp-amount",children:["$ ",e.amount]}),s.id===e.id?Object(w.jsx)(ee,{close:j,delete:t,update:a,popUpData:s}):null]},e.id)})):Object(w.jsx)("div",{className:"comingUp-noExpense",children:Object(w.jsx)("h5",{children:"Nothing to show here..."})})})]})})};a(182);function ce(e){var t=Object(n.useContext)(H).history;console.log(t,"history");var a=Object(n.useContext)(H).deleteTransaction,c=Object(n.useContext)(H).updateTransaction,r=Object(n.useState)({open:!1}),s=Object(b.a)(r,2),i=s[0],l=s[1],d=(V(),function(){l({open:!1})});return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(f.a,{sx:{flexGrow:1},children:Object(w.jsx)(D.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:1,sm:9,md:12},className:"overview-historyContainer",children:t.length>0?t.map((function(e){return Object(w.jsxs)(D.a,{item:!0,xs:1,sm:4,md:5,className:"overview-transaction ".concat(e.amount>0?"positive":"negative"),children:[Object(w.jsxs)("li",{className:"overview-list",children:[Object(w.jsxs)("div",{className:"overview-text",children:[Object(w.jsx)("span",{children:e.name}),Object(w.jsx)("br",{}),Object(w.jsx)("span",{children:W()(e.date).format("MMM-DD-YYYY")})]}),Object(w.jsx)("div",{className:"overview-amount",children:Object(w.jsxs)("span",{children:[e.amount>0?"+":"-"," ",Math.abs(e.amount)]})}),Object(w.jsx)("div",{className:"detailsIcon",children:Object(w.jsx)(ae.a,{onClick:function(){return t=e.id,void l({open:!i,id:t});var t}})})]}),i.id===e.id?Object(w.jsx)(ee,{close:d,delete:a,update:c,popUpData:i}):null]},e.id)})):Object(w.jsxs)("div",{className:"history-noExpense",children:[Object(w.jsx)("h3",{children:"No expense to show"}),Object(w.jsx)(o.b,{to:"/AddPayment",className:"history-link",children:"Click here to add one"})]})})})})}var re=a(19),se=a(57),ie=a(109),oe=a.n(ie);re.c.register(re.b,re.g,re.h,re.f,re.j,re.k,re.e);var le={redraw:!0,responsive:!0,interaction:{mode:"index",intersect:!1},stacked:!1,plugins:{title:{display:!0,text:"Chart.js Line Chart - Multi Axis"}},scales:{y:{type:"linear",display:!0,position:"left"},y1:{type:"linear",display:!0,position:"right",grid:{drawOnChartArea:!1}}}},de=["January","February","March","April","May","June","July"],je={labels:de,datasets:[{label:"Dataset 1",data:de.map((function(){return oe.a.datatype.number({min:-1e3,max:1e3})})),borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)",yAxisID:"y"},{label:"Dataset 2",data:de.map((function(){return oe.a.datatype.number({min:-1e3,max:1e3})})),borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)",yAxisID:"y1"}]};function ue(){return Object(w.jsx)(se.b,{redraw:!0,options:le,data:je})}re.c.register(re.i,re.h,re.f,re.d,re.k,re.e);var be={labels:["Groceries","Food","Entertainment","Travel","Bill","Fuel"],datasets:[{label:"# of Votes",data:[2,9,3,5,2,3],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1}]};function me(){return Object(w.jsx)(se.d,{redraw:!0,data:be})}var xe=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(f.a,{sx:{flexGrow:1},children:[Object(w.jsxs)(D.a,{xs:0,className:"overview-container",children:[Object(w.jsx)(T,{}),Object(w.jsx)(Q,{}),Object(w.jsx)("h6",{className:"overview-historyText",children:"History"}),Object(w.jsx)(ce,{})]}),Object(w.jsx)(ne,{}),Object(w.jsx)(ue,{}),Object(w.jsx)(me,{}),Object(w.jsx)(Y,{})]})})},pe=(a(1671),a(1733)),he=a(1731),Oe=a(142),ge=a.n(Oe),fe=a(143),ve=a.n(fe),ye=a(145),Ne=a.n(ye),Ce=a(141),we=a.n(Ce),Se=a(144),Ee=a.n(Se),ke=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(b.a)(r,2),i=s[0],l=s[1],d=Object(n.useState)(""),v=Object(b.a)(d,2),y=v[0],N=v[1],C=Object(n.useState)(0),S=Object(b.a)(C,2),E=S[0],k=S[1],U=(Object(n.useContext)(H).addTransaction,function(){var e=Object(u.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==a&&""!==i&&""!==E&&""!==y){e.next=5;break}alert("You must complete all fields!"),e.next=18;break;case 5:return e.next=7,fetch("http://ec2-3-96-201-188.ca-central-1.compute.amazonaws.com/api/post",{method:"POST",headers:{"x-access-token":localStorage.getItem("access-token")},body:JSON.stringify({name:a,date:i,categories:y,amount:+E})});case 7:return n=e.sent,console.log(n),e.next=11,n.json();case 11:r=e.sent,console.log(r.data[0],"data"),alert(r.message),c(""),l(""),k(""),N("");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"addPayment-header",children:Object(w.jsx)(o.b,{to:"/overview",className:"addPayment-backBtn",children:Object(w.jsx)(we.a,{fontSize:"small"})})}),Object(w.jsx)("div",{className:"addPayment",children:Object(w.jsx)(m.a,{className:"addPayment-title",variant:"h6",gutterBottom:!0,component:"div",sx:{m:5,px:5},children:"Add a Bill"})}),Object(w.jsx)(f.a,{className:"addPayment-boxContainer",sx:{display:"flex",alignItems:"flex-end",m:5},children:Object(w.jsxs)("form",{className:"addPayment-formContainer",onSubmit:U,children:[Object(w.jsxs)(x.a,{variant:"standard",sx:{m:5},children:[Object(w.jsx)(p.a,{htmlFor:"name",children:"Name"}),Object(w.jsx)(h.a,{type:"text",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..",id:"input-with-icon-purchaseditem",startAdornment:Object(w.jsx)(O.a,{position:"start",children:Object(w.jsx)(ge.a,{})})})]}),Object(w.jsxs)(x.a,{variant:"standard",sx:{m:5},children:[Object(w.jsx)(p.a,{htmlFor:"date",children:"Date"}),Object(w.jsx)(h.a,{id:"input-with-icon-autowidth",startAdornment:Object(w.jsx)(O.a,{position:"start",children:Object(w.jsx)(ve.a,{})}),input:!0,type:"date",value:i,onChange:function(e){return l(e.target.value)},placeholder:"Enter Date..."})]}),Object(w.jsxs)(x.a,{variant:"standard",sx:{m:5},children:[Object(w.jsx)(p.a,{id:"demo-simple-select-standard-label",children:"Categories"}),Object(w.jsxs)(he.a,{startAdornment:Object(w.jsx)(O.a,{position:"start",children:Object(w.jsx)(Ee.a,{})}),labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:y,onChange:function(e){return N(e.target.value)},label:"Categories",children:[Object(w.jsx)(pe.a,{value:"Groceries",children:"Groceries"}),Object(w.jsx)(pe.a,{value:"Food",children:"Food"}),Object(w.jsx)(pe.a,{value:"Entertainment",children:"Entertainment"}),Object(w.jsx)(pe.a,{value:"Travel",children:"Travel"}),Object(w.jsx)(pe.a,{value:"Bill",children:"Bill"}),Object(w.jsx)(pe.a,{value:"Fuel",children:"Fuel"})]})]}),Object(w.jsxs)(x.a,{variant:"standard",sx:{m:5},children:[Object(w.jsx)(p.a,{htmlFor:"amount",children:"Amount"}),Object(w.jsx)(h.a,{id:"input-with-icon-calender-autowidth",startAdornment:Object(w.jsx)(O.a,{position:"start",children:Object(w.jsx)(Ne.a,{})}),input:!0,type:"number",value:E,onChange:function(e){return k(e.target.value)},placeholder:"Enter amount..."})]}),Object(w.jsx)(g.a,{type:"submit",variant:"contained",sx:{m:2},children:"Add Bill"})]})})]})},Ue=a(1744),De=(a(1673),function(){var e=Object(n.useContext)(H).history.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),a=-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(Ue.a,{elevation:3,className:"SpentEarned",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"Spent"}),Object(w.jsxs)("p",{children:["$",a]})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"Earned"}),Object(w.jsxs)("p",{children:["$",t]})]})]})})});re.c.register(re.i,re.a,re.k,re.e);var Fe={labels:["Dribble","Netflix","Skillshare","Spotify","Sketch","Ivnision"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],borderWidth:1}]};function Pe(){var e=Object(n.useContext)(H).history,t=Object(n.useState)([]),a=Object(b.a)(t,2),c=(a[0],a[1]);return Object(n.useEffect)((function(){var t=e.filter((function(e){return e.amount<0})),a={label:t.map((function(e){return e.name})),datasets:[{label:"# of Votes",data:[25,6,2,7,8,24],backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],borderWidth:1}]};console.log(a,"Data"),c(a),console.log(t,"expense")}),[e]),Object(w.jsx)(se.c,{data:Fe})}function Te(){var e=Object(n.useContext)(H).history.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),a={labels:["Spent","Earned"],datasets:[{label:"# of Votes",data:[-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0),t],borderColor:["rgba(65, 110, 238, 0.5 )","rgba(255, 187, 86, 0.5 )"],backgroundColor:["rgba(65, 110, 238, 0.8)","rgba(255, 187, 86, 0.8)"],borderWidth:1,bordershadow:1}]};return Object(w.jsx)(se.a,{data:a})}re.c.register(re.a,re.k,re.e);a(1674);var Ae=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(f.a,{sx:{display:"flex",alignItems:"center",m:5},children:Object(w.jsxs)(D.a,{className:"report-container",children:[Object(w.jsx)("h1",{className:"text-left",children:"Report"}),Object(w.jsx)(Te,{}),Object(w.jsx)(De,{}),Object(w.jsx)("h5",{className:"text-left",children:"SPENDING BREAKDOWN"}),Object(w.jsx)(Pe,{})]})})})},Ie=function(){return Object(w.jsx)("div",{className:"container",children:Object(w.jsx)(o.a,{children:Object(w.jsxs)(l.c,{children:[Object(w.jsx)(l.a,{path:"/",element:Object(w.jsx)(S,{}),exact:!0}),Object(w.jsx)(l.a,{path:"/signUp",element:Object(w.jsx)(U,{})}),Object(w.jsx)(l.a,{path:"/overview",element:Object(w.jsx)(xe,{})}),Object(w.jsx)(l.a,{path:"/AddPayment",element:Object(w.jsx)(ke,{})}),Object(w.jsx)(l.a,{path:"/report",element:Object(w.jsx)(Ae,{})})]})})})};s.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(K,{children:Object(w.jsx)(Ie,{})})}),document.getElementById("root")),i()},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){}},[[1676,1,2]]]);
//# sourceMappingURL=main.d97fb31d.chunk.js.map