(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);i(2);var l=i(6),n=i.n(l),c=(i(11),i(1));var d=function(){return Object(c.jsxs)("div",{className:"parentdiv",style:{display:"felx",width:"100%",overflowY:"hidden"},children:[Object(c.jsx)("header",{style:{border:"0%",margin:"0%"}}),Object(c.jsx)("div",{style:{textAlign:"center",marginTop:"10%",fontSize:"larger",fontFamily:"fantasy"},children:"\u269b\ufe0f \ud83d\udd25 \ud83d\udcac Your ToDo List:"}),Object(c.jsxs)("form",{onSubmit:function(e){var t=e.target.elements;if(""!==t.input.value){var i=document.querySelector("#div"),l=document.querySelector(".childdiv1"),n=document.querySelector(".childdiv2"),c=document.querySelector(".child1"),d=document.querySelector(".child2"),a=document.createElement("div"),r=document.createElement("div");r.className="newdiv",r.style.backgroundColor="black";var s=document.createElement("input"),o=document.createElement("a");s.id="checkbox",s.type="checkbox",s.addEventListener("change",(function(){if(!0===s.checked){m.checked=!1,s.parentElement.style.visibility="hidden",m.parentElement.style.visibility="visible";var e=s.parentElement.parentElement;e.style.backgroundColor="red",m.parentElement.parentElement.remove(),a.appendChild(e),n.appendChild(a),d.style.visibility="visible"}}));var m=document.createElement("input");m.id="removebox",m.type="checkbox",m.title="Delete",m.addEventListener("change",(function(){if(!0===m.checked){s.checked=!1,m.parentElement.style.visibility="hidden",s.parentElement.style.visibility="visible";var e=m.parentElement.parentElement;e.style.backgroundColor="green",m.parentElement.parentElement.remove(),a.appendChild(e),l.appendChild(a),c.style.visibility="visible"}}));var p=document.createElement("i"),h=document.createElement("i");p.style.color="green",h.style.color="red",h.className="fa fa-times-circle-o ",p.className="fa fa-check-circle-o fa-x3",p.style.marginRight="5%",p.style.fontSize="xx-large",h.style.fontSize="xx-large";var v=document.createElement("label");v.appendChild(m),v.appendChild(p),v.className="removeIcon";var u=document.createElement("label");u.appendChild(s),u.appendChild(h),u.className="completeIcon",r.appendChild(u),r.appendChild(v),o.innerText=t.input.value,r.appendChild(o),i.appendChild(r),t.input.value="",e.preventDefault()}else e.preventDefault()},children:[Object(c.jsx)("input",{type:"text",id:"input"}),Object(c.jsxs)("button",{type:"submit",className:"btnui",children:[" ",Object(c.jsx)("a",{children:"Add ToDo"})," "]})]}),Object(c.jsx)("div",{id:"div",style:{overflowY:"hidden"}}),Object(c.jsxs)("div",{className:"parent",children:[Object(c.jsxs)("div",{className:"childdiv1",children:[" ",Object(c.jsx)("a",{className:"child1",style:{color:"green",visibility:"hidden"},children:" Compleated Tasks:"})]}),Object(c.jsxs)("div",{className:"childdiv2",children:[" ",Object(c.jsx)("a",{className:"child2",style:{color:"red",visibility:"hidden"},children:"   Deleated Tasks: "})]})]})]})};i(18);n.a.render(Object(c.jsx)(d,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2c2b6978.chunk.js.map