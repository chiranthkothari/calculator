(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),r=t(4),l=t.n(r),s=(t(9),t(10),t(2)),i=(t(11),t(0));var o=function(e){var c;return Object(i.jsx)("div",{className:(c=e.children,"+"===c||"-"===c||"x"===c||"\xf7"===c?"button button_operators":"button"),onClick:function(){return e.onClick(e.children)},children:e.children})};t(13);var j=function(e){return Object(i.jsxs)("div",{className:"display",children:[Object(i.jsx)("div",{children:e.display}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{children:e.result})]})};t(14);var u=function(){var e=Object(n.useState)(""),c=Object(s.a)(e,2),t=c[0],a=c[1],r=Object(n.useState)(""),l=Object(s.a)(r,2),u=l[0],b=l[1],d=Object(n.useState)(""),O=Object(s.a)(d,2),h=O[0],x=O[1],f=Object(n.useState)(""),p=Object(s.a)(f,2),k=p[0],C=p[1],F=Object(n.useState)(""),v=Object(s.a)(F,2),m=v[0],_=v[1],N=Object(n.useState)(""),S=Object(s.a)(N,2),w=S[0],g=S[1],y=Object(n.useState)(0),E=Object(s.a)(y,2),P=E[0],B=E[1],I=function(e){_(m+e),g(w+e)},J=function(e){""!==w&&(""===t&&(g(w+e),a(m),x(e),_("")),""!==t&&""===h&&(g(w+e),x(e),b(m)),""!==t&&""!==h&&(g(w+e),C(e),b(m)))},L=function(){_(""),x(""!==k?k:""),b("")};return Object(n.useEffect)((function(){if(""!==t&&""!==u&&""!==h)switch(h){case"+":B(parseFloat(t)+parseFloat(u)),a(parseFloat(t)+parseFloat(u)),L();break;case"-":B(parseFloat(t)-parseFloat(u)),a(parseFloat(t)-parseFloat(u)),L();break;case"x":B(parseFloat(t)*parseFloat(u)),a(parseFloat(t)*parseFloat(u)),L();break;case"/":B(parseFloat(t)/parseFloat(u)),a(parseFloat(t)/parseFloat(u)),L();break;default:B("Error. Please click on clear")}}),[u]),Object(i.jsxs)("div",{className:"calculator",children:[Object(i.jsx)(j,{display:w,result:P}),Object(i.jsxs)("div",{className:"calculator__row",children:[Object(i.jsx)(o,{onClick:I,children:"7"}),Object(i.jsx)(o,{onClick:I,children:"8"}),Object(i.jsx)(o,{onClick:I,children:"9"}),Object(i.jsx)(o,{onClick:function(){return J("+")},children:"+"})]}),Object(i.jsxs)("div",{className:"calculator__row",children:[Object(i.jsx)(o,{onClick:I,children:"4"}),Object(i.jsx)(o,{onClick:I,children:"5"}),Object(i.jsx)(o,{onClick:I,children:"6"}),Object(i.jsx)(o,{onClick:function(){return J("-")},children:"-"})]}),Object(i.jsxs)("div",{className:"calculator__row",children:[Object(i.jsx)(o,{onClick:I,children:"1"}),Object(i.jsx)(o,{onClick:I,children:"2"}),Object(i.jsx)(o,{onClick:I,children:"3"}),Object(i.jsx)(o,{onClick:function(){return J("x")},children:"x"})]}),Object(i.jsxs)("div",{className:"calculator__row",children:[Object(i.jsx)(o,{onClick:I,children:"."}),Object(i.jsx)(o,{onClick:I,children:"0"}),Object(i.jsx)(o,{onClick:function(){0!==t&&""!==h&&b(m)},children:"="}),Object(i.jsx)(o,{onClick:function(){return J("/")},children:"\xf7"})]}),Object(i.jsx)("p",{className:"calculator__clear",onClick:function(){g(""),_(""),x(""),a(""),b(""),B(0)},children:"Clear"})]})};var b=function(){return Object(i.jsx)("div",{className:"app",children:Object(i.jsx)(u,{})})},d=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,r=c.getLCP,l=c.getTTFB;t(e),n(e),a(e),r(e),l(e)}))};l.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),d()}],[[15,1,2]]]);
//# sourceMappingURL=main.9094b3bf.chunk.js.map