"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[803],{1294:function(n,e,t){t.d(e,{$:function(){return a}});var r=t(3329);function a(n){var e=n.title,t=n.children;return(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:e}),t]})}},355:function(n,e,t){t.d(e,{v:function(){return i}});var r=t(1686),a=t.n(r),i=function(n){a().Report.warning("Warning",n)};a().Report.init({svgSize:"50px",messageFontSize:"20px",warning:{svgColor:"#44728f",buttonBackground:"#44728f",backOverlayColor:"rgba(0,0, 0,0.2)"}})},2803:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r=t(9434),a=function(n){return n.contacts},i=function(n){return n.filter},s=t(6382),c=t(208),o=t(355),u=t(3329);function l(){var n=(0,r.v9)(a).contactsItem,e=(0,r.I0)();return(0,u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.target,a=r.elements,i=a.name,u=a.number,l={id:(0,s.x0)(),name:i.value,number:u.value};n.some((function(n){return n.name===i.value}))?(0,o.v)("".concat(i.value," is already in contacts.")):e((0,c.uK)(l)),r.reset()},children:[(0,u.jsxs)("label",{children:["Name",(0,u.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\\s]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{children:["Number",(0,u.jsx)("input",{type:"tel",name:"number",pattern:"\\+?[0-9\\s\\-\\(\\)]+",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{type:"submit",children:"Add contact"})]})}var d=t(2791);function h(){var n=(0,r.v9)(i),e=(0,r.I0)(),t=(0,r.v9)(a),s=t.contactsItem,o=t.isLoading,l=t.error;(0,d.useEffect)((function(){e((0,c.yF)())}),[e]);var h=function(){var e=n.toLowerCase().trim();return s.filter((function(n){return n.name.toLowerCase().includes(e)}))}();return(0,u.jsxs)("ul",{children:[o&&(0,u.jsx)("p",{children:"Loading contacts..."}),l&&(0,u.jsx)("p",{children:l}),s.length>0?h.map((function(n){var t=n.id,r=n.name,a=n.number;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("p",{children:[(0,u.jsxs)("span",{children:[r,": "]}),(0,u.jsx)("span",{children:a})]}),(0,u.jsx)("button",{type:"button",onClick:function(){return e((0,c.GK)(t))},children:(0,u.jsx)("span",{children:"Delete"})})]},t)})):(0,u.jsx)("li",{children:"Oops, contact list is empty. Add new contact"})]})}var m=t(6895);function p(){var n=(0,r.v9)(i),e=(0,r.I0)();return(0,u.jsx)("div",{children:(0,u.jsxs)("label",{children:["Find contact by name",(0,u.jsx)("input",{type:"text",onChange:function(n){e((0,m.Tv)(n.target.value))},value:n})]})})}var v=t(1294),x=function(){var n=(0,r.v9)(a),e=n.isLoading,t=n.error;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v.$,{title:"Add new contact",children:(0,u.jsx)(l,{})}),e&&!t&&(0,u.jsx)("b",{children:"Request in progress..."}),(0,u.jsxs)(v.$,{title:"My contacts",children:[(0,u.jsx)(p,{}),(0,u.jsx)(h,{})]})]})}}}]);
//# sourceMappingURL=803.90a70785.chunk.js.map