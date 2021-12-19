  /* MIT https://github.com/swissarmybud/microCash */
  (function(){
    'use strict';var e=document,h=window,k=e.createElement("div"),l=Array.prototype,m=l.filter,p=l.indexOf,r=l.push,t=l.reverse,u=l.slice,w=l.some,x=l.splice,aa=/^#[\w-]*$/,ba=/^\.[\w-]*$/,ca=/<.+>/,da=/^\w+$/;function y(a,b){void 0===b&&(b=e);return b&&9===b.nodeType||b&&1===b.nodeType?ba.test(a)?b.getElementsByClassName(a.slice(1)):da.test(a)?b.getElementsByTagName(a):b.querySelectorAll(a):[]}
    var z=function(){function a(a,c){void 0===c&&(c=e);if(a){if(a instanceof z)return a;var b=a;if(A(a)){if(b=c instanceof z?c[0]:c,b=aa.test(a)?b.getElementById(a.slice(1)):ca.test(a)?B(a):y(a,b),!b)return}else if(C(a))return this.ready(a);if(b.nodeType||b===h)b=[b];this.length=b.length;a=0;for(c=this.length;a<c;a++)this[a]=b[a]}}a.prototype.init=function(b,c){return new a(b,c)};return a}(),D=z.prototype.init;D.fn=D.prototype=z.prototype;z.prototype.length=0;z.prototype.splice=x;
    "function"===typeof Symbol&&(z.prototype[Symbol.iterator]=Array.prototype[Symbol.iterator]);z.prototype.get=function(a){return void 0===a?u.call(this):this[0>a?a+this.length:a]};z.prototype.slice=function(){return D(u.apply(this,arguments))};var ea=/-([a-z])/g;function fa(a,b){return b.toUpperCase()}function E(a){return a.replace(ea,fa)}D.camelCase=E;function F(a,b){for(var c=0,d=a.length;c<d&&!1!==b.call(a[c],c,a[c]);c++);}D.each=F;z.prototype.each=function(a){F(this,a);return this};D.guid=1;
    function G(a,b){var c=a&&(a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector);return!!c&&c.call(a,b)}D.matches=G;function H(a,b,c){for(var d=[],f=0,g=a.length;f<g;f++)for(var n=a[f][b];null!=n;){d.push(n);if(!c)break;n=n[b]}return d}function C(a){return"function"===typeof a}function A(a){return"string"===typeof a}function I(a){return!isNaN(parseFloat(a))&&isFinite(a)}var J=Array.isArray;D.isWindow=function(a){return!!a&&a===a.window};D.isFunction=C;
    D.isString=A;D.isNumeric=I;D.isArray=J;function K(a){return A(a)?function(b,c){return G(c,a)}:C(a)?a:a instanceof z?function(b,c){return a.is(c)}:function(b,c){return c===a}}z.prototype.filter=function(a){if(!a)return D();var b=K(a);return D(m.call(this,function(a,d){return b.call(a,d,a)}))};function L(a,b){return b&&a.length?a.filter(b):a}var ha=/\S+/g;function M(a){return A(a)?a.match(ha)||[]:[]}z.prototype.hasClass=function(a){return a&&w.call(this,function(b){return b.classList.contains(a)})};
    z.prototype.removeAttr=function(a){var b=M(a);return b.length?this.each(function(a,d){F(b,function(a,b){d.removeAttribute(b)})}):this};z.prototype.attr=function(a,b){if(a){if(A(a)){if(2>arguments.length){if(!this[0])return;var c=this[0].getAttribute(a);return null===c?void 0:c}return void 0===b?this:null===b?this.removeAttr(a):this.each(function(c,f){f.setAttribute(a,b)})}for(c in a)this.attr(c,a[c]);return this}};
    z.prototype.toggleClass=function(a,b){var c=M(a),d=void 0!==b;return c.length?this.each(function(a,g){F(c,function(a,c){d?b?g.classList.add(c):g.classList.remove(c):g.classList.toggle(c)})}):this};z.prototype.addClass=function(a){return this.toggleClass(a,!0)};z.prototype.removeClass=function(a){return arguments.length?this.toggleClass(a,!1):this};function N(a){return 1<a.length?m.call(a,function(a,c,d){return p.call(d,a)===c}):a}D.unique=N;
    z.prototype.add=function(a,b){return D(N(this.get().concat(D(a,b).get())))};function O(a,b,c){if(a&&1===a.nodeType&&b)return a=h.getComputedStyle(a,null),b?c?a.getPropertyValue(b)||void 0:a[b]:a}var P=/^--/,Q={},ia=k.style,ja=["webkit","moz","ms","o"];function R(a,b){void 0===b&&(b=P.test(a));if(b)return a;if(!Q[a]){b=E(a);var c=""+b.charAt(0).toUpperCase()+b.slice(1);b=(b+" "+ja.join(c+" ")+c).split(" ");F(b,function(b,c){if(c in ia)return Q[a]=c,!1})}return Q[a]}D.prefixedProp=R;
    var ka={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function la(a,b,c){void 0===c&&(c=P.test(a));return c||ka[a]||!I(b)?b:b+"px"}
    z.prototype.css=function(a,b){if(A(a)){var c=P.test(a);a=R(a,c);if(2>arguments.length)return this[0]&&O(this[0],a,c);if(!a)return this;b=la(a,b,c);return this.each(function(d,g){g&&1===g.nodeType&&(c?g.style.setProperty(a,b):g.style[a]=b)})}for(var d in a)this.css(d,a[d]);return this};var S={};
    z.prototype.toggle=function(a){return this.each(function(b,c){if(void 0!==a?a:"none"===O(c,"display")){if(c.style.display="","none"===O(c,"display")){b=c.style;c=c.tagName;if(S[c])c=S[c];else{var d=e.createElement(c);e.body.appendChild(d);var f=O(d,"display");e.body.removeChild(d);c=S[c]="none"!==f?f:"block"}b.display=c}}else c.style.display="none"})};z.prototype.hide=function(){return this.toggle(!1)};z.prototype.show=function(){return this.toggle(!0)};
    function T(a,b){return!b||!w.call(b,function(b){return 0>a.indexOf(b)})}var U={focus:"focusin",blur:"focusout"},V={mouseenter:"mouseover",mouseleave:"mouseout"},ma=/^(?:mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function na(a,b,c,d,f){f.guid=f.guid||D.guid++;var g=a.__cashEvents=a.__cashEvents||{};g[b]=g[b]||[];g[b].push([c,d,f]);a.addEventListener(b,f)}function W(a){a=a.split(".");return[a[0],a.slice(1).sort()]}
    function X(a,b,c,d,f){var g=a.__cashEvents=a.__cashEvents||{};if(b)g[b]&&(g[b]=g[b].filter(function(g){var n=g[0],oa=g[1];g=g[2];if(f&&g.guid!==f.guid||!T(n,c)||d&&d!==oa)return!0;a.removeEventListener(b,g)}));else{for(b in g)X(a,b,c,d,f);delete a.__cashEvents}}z.prototype.off=function(a,b,c){var d=this;void 0===a?this.each(function(a,b){return X(b)}):(C(b)&&(c=b,b=""),F(M(a),function(a,g){a=W(V[g]||U[g]||g);var f=a[0],v=a[1];d.each(function(a,d){return X(d,f,v,b,c)})}));return this};
    z.prototype.on=function(a,b,c,d){var f=this;if(!A(a)){for(var g in a)this.on(g,b,a[g]);return this}C(b)&&(c=b,b="");F(M(a),function(a,g){a=W(V[g]||U[g]||g);var n=a[0],v=a[1];f.each(function(a,f){a=function pa(a){if(!a.namespace||T(v,a.namespace.split("."))){var g=f;if(b){for(var q=a.target;!G(q,b);){if(q===f)return;q=q.parentNode;if(!q)return}g=q;a.__delegate=!0}a.__delegate&&Object.defineProperty(a,"currentTarget",{configurable:!0,get:function(){return g}});q=c.call(g,a,a.data);d&&X(f,n,v,b,pa);
    !1===q&&(a.preventDefault(),a.stopPropagation())}};a.guid=c.guid=c.guid||D.guid++;na(f,n,v,b,a)})});return this};z.prototype.ready=function(a){function b(){return a(D)}"loading"!==e.readyState?setTimeout(b):e.addEventListener("DOMContentLoaded",b);return this};
    z.prototype.trigger=function(a,b){if(A(a)){var c=W(a);a=c[0];c=c[1];var d=ma.test(a)?"MouseEvents":"HTMLEvents";var f=e.createEvent(d);f.initEvent(a,!0,!0);f.namespace=c.join(".")}else f=a;f.data=b;var g=f.type in U;return this.each(function(a,b){if(g&&C(b[f.type]))b[f.type]();else b.dispatchEvent(f)})};function Y(a){return a.multiple&&a.options?H(m.call(a.options,function(a){return a.selected&&!a.disabled&&!a.parentNode.disabled}),"value"):a.value||""}
    var qa=/%20/g,ra=/file|reset|submit|button|image/i,sa=/radio|checkbox/i;z.prototype.serialize=function(){var a="";this.each(function(b,c){F(c.elements||[c],function(b,c){c.disabled||!c.name||"FIELDSET"===c.tagName||ra.test(c.type)||sa.test(c.type)&&!c.checked||(b=Y(c),void 0!==b&&(b=J(b)?b:[b],F(b,function(b,d){b=a;d="&"+encodeURIComponent(c.name)+"="+encodeURIComponent(d).replace(qa,"+");a=b+d})))})});return a.substr(1)};
    z.prototype.val=function(a){return void 0===a?this[0]&&Y(this[0]):this.each(function(b,c){if("SELECT"===c.tagName){var d=J(a)?a:null===a?[]:[a];F(c.options,function(a,b){b.selected=0<=d.indexOf(b.value)})}else c.value=null===a?"":a})};z.prototype.detach=function(){return this.each(function(a,b){b.parentNode&&b.parentNode.removeChild(b)})};var ta=/^\s*<(\w+)[^>]*>/,ua=/^\s*<(\w+)\s*\/?>(?:<\/\1>)?\s*$/,Z;
    function B(a){if(!Z){var b=e.createElement("table"),c=e.createElement("tr");Z={"*":k,tr:e.createElement("tbody"),td:c,th:c,thead:b,tbody:b,tfoot:b}}if(!A(a))return[];if(ua.test(a))return[e.createElement(RegExp.$1)];b=ta.test(a)&&RegExp.$1;b=Z[b]||Z["*"];b.innerHTML=a;return D(b.childNodes).detach().get()}D.parseHTML=B;z.prototype.empty=function(){return this.each(function(a,b){for(;b.firstChild;)b.removeChild(b.firstChild)})};
    z.prototype.html=function(a){return void 0===a?this[0]&&this[0].innerHTML:this.each(function(b,c){c.innerHTML=a})};z.prototype.insertAfter=function(a){var b=this;D(a).each(function(a,d){var c=d.parentNode;c&&b.each(function(b,f){b=a?f.cloneNode(!0):f;c.insertBefore(b,d.nextSibling)})});return this};z.prototype.after=function(){var a=this;F(t.apply(arguments),function(b,c){t.apply(D(c).slice()).insertAfter(a)});return this};
    z.prototype.insertBefore=function(a){var b=this;D(a).each(function(a,d){var c=d.parentNode;c&&b.each(function(b,f){b=a?f.cloneNode(!0):f;c.insertBefore(b,d)})});return this};z.prototype.before=function(){var a=this;F(arguments,function(b,c){D(c).insertBefore(a)});return this};z.prototype.replaceWith=function(a){return this.before(a).detach().off()};z.prototype.text=function(a){return void 0===a?this[0]?this[0].textContent:"":this.each(function(b,c){c.textContent=a})};
    z.prototype.children=function(a){var b=[];this.each(function(a,d){r.apply(b,d.children)});return L(D(N(b)),a)};z.prototype.find=function(a){for(var b=[],c=0,d=this.length;c<d;c++){var f=y(a,this[c]);f.length&&r.apply(b,f)}return D(N(b))};z.prototype.has=function(a){var b=A(a)?function(b,d){return!!y(a,d).length}:function(b,d){return d.contains(a)};return this.filter(b)};z.prototype.is=function(a){if(!a||!this[0])return!1;var b=K(a),c=!1;this.each(function(a,f){c=b.call(f,a,f);return!c});return c};
    z.prototype.next=function(a,b){return L(D(N(H(this,"nextElementSibling",b))),a)};z.prototype.nextAll=function(a){return this.next(a,!0)};z.prototype.not=function(a){if(!a||!this[0])return this;var b=K(a);return this.filter(function(a,d){return!b.call(d,a,d)})};z.prototype.parent=function(a,b){void 0===b&&(b=!1);return L(D(N(H(this,"parentNode",b))),a)};z.prototype.prev=function(a,b){return L(D(N(H(this,"previousElementSibling",b))),a)};z.prototype.prevAll=function(a){return this.prev(a,!0)};
    z.prototype.siblings=function(a){var b=[];this.each(function(a,d){r.apply(b,D(d).parent().children(function(a,b){return b!==d}))});return L(D(N(b)),a)};"undefined"!==typeof exports?module.exports=D:h.cash=h.$=D;
    })();