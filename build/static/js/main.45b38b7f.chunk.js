(this.webpackJsonpportfolio_react=this.webpackJsonpportfolio_react||[]).push([[0],[,,,,,function(e,t,n){},,,function(e,t,n){e.exports=n.p+"static/media/menu.41c270db.png"},function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),l=(n(14),n(15),n(1)),i=n(2),u=n(4),s=n(3),m=(n(5),n(8)),d=n.n(m),h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={toggled:!1,current:".nothomebutton"},e.toggle=function(){var t=document.querySelector(e.state.current),n=document.querySelectorAll(".nav-item");e.state.toggled?(n.forEach((function(e){e.style.animation="none"})),e.setState({toggled:!1,current:".nothomebutton"}),t.className="nothomebutton"):(n.forEach((function(e,t){e.style.animation="comein ".concat((t+3)/7,"s")})),e.setState({toggled:!0,current:".nothomebutton-active"}),t.className="nothomebutton-active")},e.idrfunction=function(t){e.props.Changer({name:t})},e}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"homebutton"},c.a.createElement("button",{onClick:this.idrfunction.bind(this,0)},"Home")),c.a.createElement("div",{className:"nothomebutton"},c.a.createElement("button",{onClick:this.idrfunction.bind(this,1),className:"nav-item"},"Projects"),c.a.createElement("button",{onClick:this.idrfunction.bind(this,2),className:"nav-item"},"Education"),c.a.createElement("button",{onClick:this.idrfunction.bind(this,3),className:"nav-item"},"Skills"),c.a.createElement("button",{onClick:this.idrfunction.bind(this,4),className:"nav-item"},"About")),c.a.createElement("div",{className:"toggle-menu"},c.a.createElement("button",{onClick:this.toggle},c.a.createElement("img",{src:d.a,height:"30px",alt:""}))))}}]),n}(c.a.Component),b=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).postion=function(e){var t=e.clientX,n=e.clientY;document.querySelector(".home").childNodes.forEach((function(e,a){e.style.marginLeft="".concat(t/(150*(a+1)),"px"),e.style.marginTop="".concat(n/(150*(a+1)),"px")}))},e}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{onMouseMove:this.postion,className:"home"},c.a.createElement("h1",null,"Basit ",c.a.createElement("br",null)," Saeed "),c.a.createElement("div",{className:"description"},c.a.createElement("h2",{className:"white"},"Front-End "),c.a.createElement("h2",{className:"brown"},"Dev"),c.a.createElement("h2",{className:"white"}," & Open Source"),c.a.createElement("h2",{className:"brown"}," Contributor")))}}]),n}(c.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"skillswhole"},c.a.createElement("div",{className:"languages"},c.a.createElement("h1",null,"Skills"),c.a.createElement("ul",null,c.a.createElement("li",null,"HTML"),c.a.createElement("li",null,"CSS"),c.a.createElement("li",null,"Javascript"),c.a.createElement("li",null,"React"),c.a.createElement("li",null,"C++"))),c.a.createElement("div",{className:"tools"},c.a.createElement("h1",null,"Tools"),c.a.createElement("ul",null,c.a.createElement("li",null,"VS Code"),c.a.createElement("li",null,"Github"))))}}]),n}(c.a.Component),E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"educationwhole"},c.a.createElement("h1",null,"Education"),c.a.createElement("h2",null,"BS Computer Science At Fast-NU (Currently Enrolled)."),c.a.createElement("h2",null,"CS50 Web With Javascript And Python By Harvard at edx."))}}]),n}(c.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"educationwhole"},c.a.createElement("h1",null,"No Projects Right Now :(("))}}]),n}(c.a.Component),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={idxx:e.props.idx},e.updateProp=function(t){e.state.idxx!=t&&e.setState({idxx:t})},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){this.updateProp(this.props.idx)}},{key:"render",value:function(){return 0===this.state.idxx?c.a.createElement(b,null):3===this.state.idxx?c.a.createElement(v,null):2===this.state.idxx?c.a.createElement(E,null):1===this.state.idxx?c.a.createElement(f,null):void 0}}]),n}(c.a.Component),y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={idx:0},e.changeCurrent=function(t){var n=document.querySelector(".yeet");n.style.animation="comeoutfrombottom 0.3s",n.addEventListener("animationend",(function(){e.setState({idx:t.name}),n.style.animation="comeinfrombottom 0.3s"}))},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){0!==this.state.idx?document.querySelector(".black-layer-activate").style.background="rgba(0,0,0,0.7)":document.querySelector(".black-layer-activate").style.background="rgba(0,0,0,0.1)"}},{key:"render",value:function(){return c.a.createElement("div",{className:"background"},c.a.createElement("div",{className:"black-layer-activate"},c.a.createElement(h,{Changer:this.changeCurrent.bind(this)}),c.a.createElement("div",{className:"yeet"},c.a.createElement(p,{idx:this.state.idx}))))}}]),n}(c.a.Component);var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.45b38b7f.chunk.js.map