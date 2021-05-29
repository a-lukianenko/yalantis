(this.webpackJsonpyalantis=this.webpackJsonpyalantis||[]).push([[0],{48:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),o=n.n(r),i=(n(48),n(24)),s=n.n(i),l=n(37),u=n(17),d=n(20),j=n(38),b=n.n(j),p=n(13),m=n(39),f=n(15),h=function(e){return Object(m.cloneDeep)(e).sort((function(e,t){return e.lastName.localeCompare(t.lastName)}))},O=Object(f.compose)((function(e){return e.reduce((function(e,t){var n=t.lastName[0].toLocaleLowerCase();return e[n]||(e[n]=[]),e[n].push(t),e}),{})}),h),y=Object(f.compose)((function(e){return e.reduce((function(e,t){var n=new Date(t.dob).getMonth();return e[n]||(e[n]=[]),e[n].push(t),e}),{})}),h),x=function(){var e=Object(p.a)(Array(12).keys()),t=(new Date).getMonth(),n=e.indexOf(t);return[].concat(Object(p.a)(e.slice(n)),Object(p.a)(e.slice(0,n)))},v={employees:JSON.parse(localStorage.getItem("employees"))||[]},g=Object(u.b)("employees/fetchByIdStatus",Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("employees")){e.next=4;break}return e.abrupt("return",JSON.parse(localStorage.getItem("employees")));case 4:return e.next=6,b.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users");case 6:return t=e.sent,e.abrupt("return",t.data);case 8:case"end":return e.stop()}}),e)})))),N=Object(u.c)({name:"employees",initialState:v,reducers:{selectEmployee:function(e,t){e.employees.find((function(e){return e.id===t.payload.id})).status="active"},deselectEmployee:function(e,t){e.employees.find((function(e){return e.id===t.payload.id})).status="inactive"}},extraReducers:function(e){e.addCase(g.fulfilled,(function(e,t){if("status"in t.payload[0])e.employees=t.payload;else{var n=t.payload.map((function(e){return e.status="inactive",e}));e.employees=n}}))}}),S=N.actions,C=S.selectEmployee,w=S.deselectEmployee,k=function(e){return e.employees.employees},D=Object(d.a)(k,(function(e){return O(e)})),E=Object(d.a)((function(e){return e.employees.employees.filter((function(e){return"active"===e.status}))}),(function(e){return y(e)})),I=N.reducer,L=n(16),F=function(){return Object(L.b)()},J=L.c,M="abcdefghijklmnopqrstuvwxyz".split(""),T=n(43),B=n(12),z=n(42),A=n.n(z),H=n(2),P=function(e){var t=e.labelTitle,n=e.name,a=e.value,c=e.isChecked,r=e.onChange;return Object(H.jsxs)("label",{style:{display:"block"},children:[t,Object(H.jsx)("input",{type:"radio",name:n,value:a,checked:c,onChange:r})]})},R=Object(B.a)((function(e){return{employeeName:{fontWeight:"bold",color:"blue"},card:{padding:10,marginBottom:8,borderRadius:6,boxShadow:"0 1px 6px 0 rgb(32 33 36 / 28%)"}}})),q=function(e){var t=e.employee,n=R(),c=A.a.bind(n),r=F(),o=Object(a.useState)(t.status),i=Object(T.a)(o,2),s=i[0],l=i[1],u=function(e){var n=e.target.value;r("active"===n?C(t):w(t)),l(e.target.value)},d=t.firstName,j=t.lastName,b=c({employeeName:"active"===s});return Object(H.jsxs)("div",{className:n.card,children:[Object(H.jsxs)("span",{className:b,children:[d," ",j]}),Object(H.jsxs)("form",{children:[Object(H.jsx)(P,{labelTitle:"Active",name:"status",value:"active",isChecked:"active"===s,onChange:u}),Object(H.jsx)(P,{labelTitle:"Not active",name:"status",value:"inactive",isChecked:"inactive"===s,onChange:u})]})]})},U=function(e){var t=e.employees.map((function(e){return Object(H.jsx)(q,{employee:e},e.id)}));return Object(H.jsx)("div",{children:t})},W=function(e){var t=e.alphabet,n=e.groupedData;return Object(H.jsxs)("div",{children:[Object(H.jsx)("h3",{children:"Employees"}),t.map((function(e){var t=n[e];return Object(H.jsxs)("div",{children:[Object(H.jsx)("h3",{children:e.toUpperCase()}),t?Object(H.jsx)(U,{employees:n[e]}):"-----"]},e)}))]})},G=function(e){var t=e.employees;return Object(H.jsx)("div",{children:t.map((function(e){var t,n=e.id,a=e.firstName,c=e.lastName,r=e.dob;return Object(H.jsxs)("div",{children:[a," ",c," - ",(t=r,new Date(t).toLocaleDateString("default",{year:"numeric",month:"long",day:"numeric"}))]},n)}))})},K=function(){var e=J(E);if(Object(f.keys)(e).length<1)return Object(H.jsx)("div",{children:Object(H.jsx)("h3",{children:"Employees List is empty"})});var t=function(e){var t=(new Date).getMonth(),n=new Date(e).getMonth(),a=new Date(e).toLocaleString("default",{month:"long"});return t===n?a+" (current)":a};return Object(H.jsxs)("div",{children:[Object(H.jsx)("h3",{children:"Employees birthdays"}),x().map((function(n){var a=e[n];return Object(H.jsxs)("div",{children:[Object(H.jsxs)("h3",{children:[a&&t(a[0].dob)," "]}),a&&Object(H.jsx)(G,{employees:a})]},n.toString())}))]})},Q=Object(B.a)((function(e){return{container:{display:"flex",justifyContent:"space-around"}}})),V=function(){var e=J(k),t=J(D),n=F(),c=Q();return Object(a.useEffect)((function(){n(g())}),[n]),Object(a.useEffect)((function(){window.addEventListener("beforeunload",(function(){localStorage.setItem("employees",JSON.stringify(e))}))}),[e]),Object(H.jsxs)("div",{className:c.container,children:[Object(H.jsx)(W,{alphabet:M,groupedData:t}),Object(H.jsx)(K,{})]})},X=n(3),Y=function(){var e=Z(),t=Object(X.g)();return Object(H.jsxs)("div",{className:e.root,children:[Object(H.jsx)("h1",{className:e.h1,children:"404"}),Object(H.jsx)("h2",{className:e.h2,children:"Not Found"}),Object(H.jsx)("button",{onClick:function(){return t.push("/")},children:"Home"})]})},Z=Object(B.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",backgroundImage:"linear-gradient( 135.9deg,  rgba(109,25,252,1) 16.4%, rgba(125,31,165,1) 56.1% )",color:"#e0e0e0",textShadow:"5px 0px 6px #101010e3"},h1:{margin:0,lineHeight:1,fontSize:152},h2:{margin:0,fontSize:50}}}));n(83);var $=function(){return Object(H.jsxs)(X.d,{children:[Object(H.jsx)(X.a,{exact:!0,from:"/",to:"/employees"}),Object(H.jsx)(X.b,{exact:!0,path:"/employees",component:V}),Object(H.jsx)(X.b,{path:"*",component:Y})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},ee=Object(u.a)({reducer:{employees:I}}),te=n(21);o.a.render(Object(H.jsx)(c.a.StrictMode,{children:Object(H.jsx)(L.a,{store:ee,children:Object(H.jsx)(te.a,{basename:"/yalantis/",children:Object(H.jsx)($,{})})})}),document.getElementById("root")),_()}},[[84,1,2]]]);
//# sourceMappingURL=main.da745055.chunk.js.map