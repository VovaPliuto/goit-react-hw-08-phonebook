"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[578],{2578:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,i,o,s,d,c,l,u,p,x=t(2791),f=t(9434),h=t(6907),m=t(9439),b=t(3634),j=t(6351),g=t(168),v=t(5867),w=v.zo.form(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 500px;\n  padding: 20px;\n  border: 3px solid #c14646;\n  border-radius: 10px;\n"]))),y=v.zo.input(a||(a=(0,g.Z)(["\n  width: 300px;\n"]))),z=v.zo.label(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin: 0 auto;\n"]))),Z=v.zo.button(o||(o=(0,g.Z)(["\n  padding: 10px;\n  height: 40px;\n\n  font-size: 16px;\n  font-weight: 700;\n  color: #fff;\n  cursor: pointer;\n\n  background-color: #c14646;\n  border: 1px solid #fff;\n  border-radius: 10px;\n  margin: 0 auto;\n"]))),C=t(184),k=function(){var n=(0,x.useState)(""),e=(0,m.Z)(n,2),t=e[0],r=e[1],a=(0,x.useState)(""),i=(0,m.Z)(a,2),o=i[0],s=i[1],d=(0,f.v9)(j.Af),c=(0,f.I0)(),l=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":s(a)}};return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(w,{onSubmit:function(n){n.preventDefault(),function(n){if(d.find((function(e){return e.name===n.name})))return alert("".concat(n.name," is already in contacts"));c((0,b.uK)(n))}({name:t,number:o}),r(""),s("")},children:[(0,C.jsxs)(z,{children:["Name",(0,C.jsx)(y,{onChange:l,value:t,autoComplete:"off",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,C.jsxs)(z,{children:["Phone",(0,C.jsx)(y,{onChange:l,value:o,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,C.jsx)(Z,{type:"submit",children:"Add contact"})]})})},A=v.zo.ul(s||(s=(0,g.Z)(["\n  margin: 0;\n  padding: 20px 2px;\n  list-style: none;\n"]))),F=v.zo.li(d||(d=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 450px;\n  padding: 10px;\n  border: 1px dotted #3700dc;\n\n  & + & {\n    margin-top: 1px;\n  }\n"]))),q=v.zo.span(c||(c=(0,g.Z)(["\n  width: 180px;\n"]))),D=v.zo.i(l||(l=(0,g.Z)(["\n  margin-left: 10px;\n"]))),I=v.zo.button(u||(u=(0,g.Z)(["\n  width: 60px;\n  margin-left: 20px;\n  border-radius: 8px;\n  border: 1px solid #fd7e7e;\n\n  &:active {\n    background-color: #fd7e7e;\n  }\n"]))),_=function(){var n=(0,f.v9)(j.Af),e=(0,f.v9)(j.AD),t=(0,f.I0)(),r=function(n){var e=n.id,r=n.name,a=n.number;return(0,C.jsxs)(F,{children:[(0,C.jsx)(q,{children:(0,C.jsx)("b",{children:r})}),(0,C.jsx)("span",{children:(0,C.jsx)(D,{children:a})}),(0,C.jsx)(I,{type:"button",onClick:function(){return n=e,void t((0,b.GK)(n));var n},children:"Delete"})]},e)};return e?(0,C.jsx)(A,{children:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).map((function(n){return r(n)}))}):(0,C.jsx)(A,{children:n.map((function(n){return r(n)}))})},P=t(1429),S=v.zo.input(p||(p=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n  width: 200px;\n"]))),K=function(){var n=(0,f.v9)(j.AD),e=(0,f.I0)();return(0,C.jsx)("div",{children:(0,C.jsxs)("label",{children:["Find contacts by name",(0,C.jsx)(S,{type:"text",onChange:function(n){e((0,P.s)(n.target.value))},name:"filter",value:n})]})})},L=function(){var n=(0,f.I0)(),e=(0,f.v9)(j.xU),t=(0,f.v9)(j.zh);return(0,x.useEffect)((function(){n((0,b.yF)())}),[n]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h.ql,{children:(0,C.jsx)("title",{children:"Contacts"})}),(0,C.jsx)("h1",{children:"Phonebook"}),(0,C.jsx)(k,{}),(0,C.jsx)("h2",{children:"Contacts"}),(0,C.jsx)(K,{}),e&&!t&&(0,C.jsx)("b",{children:"Request in progress..."}),(0,C.jsx)(_,{})]})}}}]);
//# sourceMappingURL=578.79d3a44c.chunk.js.map