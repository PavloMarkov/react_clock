(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(7),c=n.n(a),o=n(2),s=n(3),i=n(5),r=n(4),l=n(1),u=n.n(l),m=n(0),d=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={date:new Date},t.timerId=0,t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){console.log(t.state.date),t.setState({date:new Date})}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("Renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.date.toLocaleTimeString()})]})}}]),n}(l.Component),h=(n(13),function(){var t=Math.random().toString().slice(2,6);return"Clock-".concat(t)}),v=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={hasClock:!0,clockName:h()},t.intervalName=0,t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("contextmenu",(function(){t.setState({hasClock:!1})})),document.addEventListener("click",(function(){t.setState({hasClock:!0})})),this.intervalName=window.setInterval((function(){t.setState({clockName:h()})}),3300),this.state.hasClock||window.clearInterval(this.intervalName)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(m.jsx)(d,{name:this.state.clockName})]})}}]),n}(u.a.Component);c.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b247f5cb.chunk.js.map