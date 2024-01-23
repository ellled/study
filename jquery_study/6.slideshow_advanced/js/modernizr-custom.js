/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csscolumns-setclasses !*/
!function(e,n,t){function r(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?S.className.baseVal=n:S.className=n)}function o(e,n){return typeof e===n}function s(){var e,n,t,r,s,i,l;for(var a in _)if(_.hasOwnProperty(a)){if(e=[],n=_[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=r:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=r),C.push((r?"":"no-")+l.join("-"))}}function i(e,n){return function(){return e.apply(n,arguments)}}function l(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?i(r,t||n):r);return!1}function a(e,n){return!!~(""+e).indexOf(n)}function u(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=n.body;return e||(e=u(w?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var s,i,l,a,f="modernizr",c=u("div"),d=p();if(parseInt(r,10))for(;r--;)l=u("div"),l.id=o?o[r]:f+(r+1),c.appendChild(l);return s=u("style"),s.type="text/css",s.id="s"+f,(d.fake?d:c).appendChild(s),d.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=f,d.fake&&(d.style.background="",d.style.overflow="hidden",a=S.style.overflow,S.style.overflow="hidden",S.appendChild(d)),i=t(c,e),d.fake?(d.parentNode.removeChild(d),S.style.overflow=a,S.offsetHeight):c.parentNode.removeChild(c),!!i}function y(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function h(e,n,r,s){function i(){c&&(delete E.style,delete E.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var l=y(e,r);if(!o(l,"undefined"))return l}for(var c,d,p,m,h,v=["modernizr","tspan","samp"];!E.style&&v.length;)c=!0,E.modElem=u(v.shift()),E.style=E.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],h=E.style[m],a(m,"-")&&(m=f(m)),E.style[m]!==t){if(s||o(r,"undefined"))return i(),"pfx"==n?m:!0;try{E.style[m]=r}catch(g){}if(E.style[m]!=h)return i(),"pfx"==n?m:!0}return i(),!1}function v(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+k.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?h(a,n,r,s):(a=(e+" "+P.join(i+" ")+i).split(" "),l(a,n,t))}function g(e,n,r){return v(e,t,t,n,r)}var C=[],S=n.documentElement,w="svg"===S.nodeName.toLowerCase(),_=[],b={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){_.push({name:e,fn:n,options:t})},addAsyncTest:function(e){_.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr;var x="Moz O ms Webkit",k=b._config.usePrefixes?x.split(" "):[];b._cssomPrefixes=k;var P=b._config.usePrefixes?x.toLowerCase().split(" "):[];b._domPrefixes=P;var z={elem:u("modernizr")};Modernizr._q.push(function(){delete z.elem});var E={style:z.elem.style};Modernizr._q.unshift(function(){delete E.style}),b.testAllProps=v,b.testAllProps=g,function(){Modernizr.addTest("csscolumns",function(){var e=!1,n=g("columnCount");try{e=!!n,e&&(e=new Boolean(e))}catch(t){}return e});for(var e,n,t=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<t.length;r++)e=t[r].toLowerCase(),n=g("column"+t[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(n=n||g(t[r])),Modernizr.addTest("csscolumns."+e,n)}(),s(),r(C),delete b.addTest,delete b.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);