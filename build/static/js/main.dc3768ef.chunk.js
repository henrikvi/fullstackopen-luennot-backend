(this.webpackJsonpopetus_state=this.webpackJsonpopetus_state||[]).push([[0],{29:function(e,t,n){e.exports=n(57)},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(25),r=n.n(c),o=n(8),u=n(7),i=function(){return l.a.createElement("ul",{className:"nav-list"},l.a.createElement("li",{className:"nav-element"},l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",{className:"nav-element"},l.a.createElement(o.b,{to:"/basics"},"Basics")),l.a.createElement("li",{className:"nav-element"},l.a.createElement(o.b,{to:"/simplestate"},"Simple State")),l.a.createElement("li",{className:"nav-element"},l.a.createElement(o.b,{to:"/complexstate"},"Complex State")),l.a.createElement("li",{className:"nav-element"},l.a.createElement(o.b,{to:"/notemanager"},"Note Manager")))},m=function(e){var t=e.age,n=e.c,a=e.name;return l.a.createElement("div",null,l.a.createElement("h1",null,"HAALLOO ",a),l.a.createElement("p",null,"olet ",t,"v wanha, ",n," story bro."))},s=function(){var e=new Date,t=(!0).toString();return l.a.createElement("div",{className:"content"},l.a.createElement("p",null,"Hello world"),l.a.createElement("p",null,"Now is ",e.toDateString()),l.a.createElement("p",null,(!1).toString(),", are ",10," and ",5," the same?"),l.a.createElement("div",null,l.a.createElement(m,{name:"PETTERI",age:25,c:t}),l.a.createElement(m,{name:"Alfons",age:5,c:"tyhm\xe4"})))},E=n(5),p=function(e){var t=e.onClick,n=e.label;return l.a.createElement("button",{onClick:t},n)},f=function(e){var t=e.counter;return l.a.createElement("div",null,t)},b=function(e){var t=Object(a.useState)(0),n=Object(E.a)(t,2),c=n[0],r=n[1],o=function(e){return function(){r(e)}};return l.a.createElement("div",{className:"content"},l.a.createElement(f,{counter:c}),l.a.createElement("div",null,l.a.createElement(p,{onClick:o(c+1),label:"Plus"}),l.a.createElement(p,{onClick:o(c-1),label:"Minus"}),l.a.createElement(p,{onClick:o(0),label:"Reset"})))},v=function(e){var t=e.allClicks;return 0===t.length?l.a.createElement("p",null,"Click the buttons maaaan!"):l.a.createElement("p",null,"Clicked buttons: ",t.join(" "))},d=function(e){var t=Object(a.useState)(0),n=Object(E.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(0),u=Object(E.a)(o,2),i=u[0],m=u[1],s=Object(a.useState)([]),f=Object(E.a)(s,2),b=f[0],d=f[1];return l.a.createElement("div",{className:"content"},l.a.createElement("div",null,l.a.createElement("p",null,"Left: ",c),l.a.createElement("p",null,"Right: ",i),l.a.createElement(v,{allClicks:b})),l.a.createElement("div",null,l.a.createElement(p,{onClick:function(){d(b.concat("L")),r(c+1)},label:"left"}),l.a.createElement(p,{onClick:function(){d(b.concat("R")),m(i+1)},label:"right"})))},h=n(28),g=function(e){var t=e.note,n=e.toggleImportance,a=t.important?"Make not important":"Make important";return l.a.createElement("li",null,t.content," ",l.a.createElement(p,{onClick:n,label:a}))},k=n(11),O=n.n(k),S="https://fullstack-open-2020.herokuapp.com/api/notes",j=function(){var e=O.a.get(S),t={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return e.then((function(e){return e.data.concat(t)}))},C=function(e){return O.a.post(S,e).then((function(e){return e.data}))},N=function(e,t){return O.a.put("".concat(S,"/").concat(e),t).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("A new note..."),o=Object(E.a)(r,2),u=o[0],i=o[1],m=Object(a.useState)(!0),s=Object(E.a)(m,2),f=s[0],b=s[1];Object(a.useEffect)((function(){j().then((function(e){return c(e)}))}),[]);var v=f?n:n.filter((function(e){return e.important}));return l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Notes"),l.a.createElement("div",null,l.a.createElement(p,{onClick:function(){return b(!f)},label:f?"Show important":"Show all"}),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={content:u,date:(new Date).toISOString(),important:Math.random()>.5};C(t).then((function(e){c(n.concat(e)),i("A new note...")}))}},l.a.createElement("input",{value:u,onChange:function(e){i(e.target.value)}}),l.a.createElement("button",{type:"submit"},"Save"))),l.a.createElement("ul",null,v.map((function(e){return l.a.createElement(g,{note:e,key:e.id,toggleImportance:function(){return function(e){var t=n.find((function(t){return t.id===e})),a=Object(h.a)({},t,{important:!t.important});N(e,a).then((function(t){c(n.map((function(n){return n.id!==e?n:t})))})).catch((function(){alert('The note "'.concat(t.content,'" was already deleted')),c(n.filter((function(t){return t.id!==e})))}))}(e.id)}})}))))},y=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/basics",component:s}),l.a.createElement(u.a,{path:"/simplestate",component:b}),l.a.createElement(u.a,{path:"/complexstate",component:d}),l.a.createElement(u.a,{path:"/notemanager",component:w}))))};n(56);r.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.dc3768ef.chunk.js.map