"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[28],{6028:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var r=t(1413),a=t(9434),c=t(7689),o=t(184),i=function(e){return function(n){var t=(0,a.v9)((function(e){return e.user.userData}));return console.log("userData",t),t?(0,o.jsx)(e,(0,r.Z)({},n)):(0,o.jsx)(c.Fg,{to:"/login"})}},l=t(2791),s={form_contacts:"ContactForm_form_contacts__e25ZD",input:"ContactForm_input__Bl93P"},u=t(186),m=function(e){var n=e.onAdd,t=e.onCheckUnique;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("form",{className:s.form_contacts,onSubmit:function(e){e.preventDefault();var r=e.currentTarget.elements.name.value,a=e.currentTarget.elements.phone.value;return r&&a?t(r)?void n({name:r,number:a}):(alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454"),!1):(alert("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0443\u0441\u0456 \u043f\u043e\u043b\u044f"),!1)},children:[(0,o.jsx)("label",{htmlFor:"name",children:"Name"}),(0,o.jsx)("input",{id:"name",className:s.input,type:"text",required:!0,name:"name"}),(0,o.jsx)("label",{htmlFor:"phone",children:"Phone"}),(0,o.jsx)("input",{className:s.input,type:"tel",required:!0,name:"phone",onChange:function(e){var n=e.target,t=n.value.replace(/\D/g,"");t.length>6&&(t="".concat(t.slice(0,3),"-").concat(t.slice(3,5),"-").concat(t.slice(5,7))),n.value=t}}),(0,o.jsx)(u.Z,{variant:"outlined",className:s.button_logOut,sx:{color:"#fff"},type:"submit",children:"Add contact"})]})})},f="ContactList_contacts__jDmyV",h=function(e){var n=e.name,t=e.number,r=e.onRemove,a=e.id;return(0,o.jsxs)("li",{className:f,children:[n," : ",t," ",(0,o.jsx)(u.Z,{variant:"outlined",onClick:function(){r(a)},children:"Delete"})]})},d=function(e){var n=e.contacts,t=e.onRemove;return 0===n.length?null:(0,o.jsx)("ul",{children:n.map((function(e){return(0,o.jsx)(h,(0,r.Z)((0,r.Z)({},e),{},{onRemove:t}),e.id)}))})},_={inputFilter:"Filter_inputFilter__8QMOp",subTitle:"Filter_subTitle__ntO3U"},p=function(e){var n=e.filter,t=e.onChange;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{className:"".concat(_.subTitle," ").concat(_.filter),children:"Filter"}),(0,o.jsx)("input",{className:_.inputFilter,type:"text",name:"filter",value:n,onChange:function(e){var n=e.target;return t(n.value)},placeholder:"Please enter a name to search"})]})},v="Contacts_subTitle__SSb6n",x="Contacts_form_wrapper__2GOBZ",j="Contacts_in_wrapper__FIeTp",C=t(9993),g=t(5048),F=i((function(){var e=(0,a.v9)(C.KJ),n=(0,a.v9)(C.AD),t=(0,a.I0)(),r=(0,a.v9)(C.xU),c=n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e;return(0,l.useEffect)((function(){t((0,g.nQ)())}),[t]),(0,o.jsx)("div",{className:x,children:r?(0,o.jsx)("h1",{children:"DATA IS LOADING FROM SERVER..."}):(0,o.jsxs)("div",{className:j,children:[(0,o.jsx)("h2",{className:v,children:"CONTACT BOOK"}),(0,o.jsx)(m,{onAdd:function(e){return t((0,g.Hq)(e))},onCheckUnique:function(n){var t=!!e.find((function(e){return e.name===n}));return t&&alert("Contact is already exist"),!t}}),(0,o.jsx)(p,{filter:n,onChange:function(e){return t((0,C.Tv)(e))}}),(0,o.jsx)("h2",{className:v,children:"Contacts"}),(0,o.jsx)(d,{contacts:c,onRemove:function(e){t((0,g.xX)(e))}})]})})}))}}]);
//# sourceMappingURL=28.04cabfec.chunk.js.map