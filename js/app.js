!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=n.n(o);!function(){function e(e){var t=sidebar.querySelector(".section-link.active"),n="string"==typeof e?sidebar.querySelector('.section-link[href="#'+e+'"]'):e;n!==t&&(t&&t.classList.remove("active"),n.classList.add("active"))}function t(e){for(var t=[],n=e.nextSibling;n&&"H2"!==n.tagName;)"H3"===n.tagName&&t.push(n),n=n.nextSibling;return t}function n(e){const t=document.createElement("ul");return e.forEach(function(e){t.appendChild(o(e))}),t}function o(e){const t=document.createElement("li"),n=e.textContent.replace(/\(.*\)$/,"");return t.innerHTML='<a class="section-link" data-scroll href="#'+e.id+'">'+n+"</a>",t}!function(){function r(){a(),c()}function i(){h=!0;var e=u.getBoundingClientRect().left;u.style.position="fixed",u.style.top=0,u.style.left=Math.round(e)+"px"}function a(){h=!1,u.style.position="absolute",u.style.top="10px",u.style.left="-"+(u.offsetWidth+15)+"px"}function c(){if(window.innerWidth<=1100)return void(u.style.display="none");if(l){"none"==u.style.display&&(u.style.display="block");var t=u.getBoundingClientRect().top;!h&&t<10&&i(),h&&s.getBoundingClientRect().top>10&&a();for(var n,o=0;o<l.length;o++){var r=l[o];if(r.getBoundingClientRect().top>10){n||(n=r);break}n=r}n&&e(n.id)}}var l=[],u=document.getElementById("sidebar"),s=document.getElementById("content"),f=document.createElement("ul");u.appendChild(f);var d=s.querySelectorAll("h2");d.length?[].forEach.call(d,function(e){f.appendChild(o(e));const r=t(e);console.log(),l.push(e),l.push.apply(l,r),r.length&&f.appendChild(n(r))}):(l=s.querySelectorAll("h3"),[].forEach.call(l,function(e){f.appendChild(o(e)),l.push(e)}));var h=!1;window.addEventListener("scroll",c),window.addEventListener("resize",r)}(),r.a.init()}()},function(e,t){},function(e,t,n){(function(n){var o,r,i;/*! smooth-scroll v11.0.2 | (c) 2017 Chris Ferdinandi | GPL-3.0 License | http://github.com/cferdinandi/smooth-scroll */
!function(n,a){r=[],o=a(n),void 0!==(i="function"==typeof o?o.apply(t,r):o)&&(e.exports=i)}(void 0!==n?n:this.window||this.global,function(e){"use strict";var t,n,o,r,i,a,c,l={},u="querySelector"in document&&"addEventListener"in e,s={selector:"[data-scroll]",selectorHeader:null,speed:500,offset:0,easing:"easeInOutCubic",easingPatterns:{},before:function(){},after:function(){}},f=function(){var e={},t=!1,n=0,o=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);n<o;n++){var r=arguments[n];!function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=f(!0,e[o],n[o]):e[o]=n[o])}(r)}return e},d=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},h=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},p=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,i="",a=n.charCodeAt(0);++r<o;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=t>=1&&t<=31||127==t||0===r&&t>=48&&t<=57||1===r&&t>=48&&t<=57&&45===a?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+i},m=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.easingPatterns[e.easing]&&(n=e.easingPatterns[e.easing](t)),n||t},g=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0),Math.min(o,v()-y())},y=function(){return Math.max(document.documentElement.clientHeight,e.innerHeight||0)},v=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},b=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},E=function(e){return e?d(e)+e.offsetTop:0},S=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))};l.animateScroll=function(n,o,a){var l=b(o?o.getAttribute("data-options"):null),u=f(t||s,a||{},l),d="[object Number]"===Object.prototype.toString.call(n),h=d||!n.tagName?null:n;if(d||h){var p=e.pageYOffset;u.selectorHeader&&!r&&(r=document.querySelector(u.selectorHeader)),i||(i=E(r));var y,O,w=d?n:g(h,i,parseInt("function"==typeof u.offset?u.offset():u.offset,10)),x=w-p,C=v(),H=0,I=function(t,r,i){var a=e.pageYOffset;(t==r||a==r||e.innerHeight+a>=C)&&(clearInterval(i),S(n,r,d),u.after(n,o))},M=function(){H+=16,y=H/parseInt(u.speed,10),y=y>1?1:y,O=p+x*m(u,y),e.scrollTo(0,Math.floor(O)),I(O,w,c)};0===e.pageYOffset&&e.scrollTo(0,0),u.before(n,o),function(){clearInterval(c),c=setInterval(M,16)}()}};var O=function(t){try{p(decodeURIComponent(e.location.hash))}catch(t){p(e.location.hash)}n&&(n.id=n.getAttribute("data-scroll-id"),l.animateScroll(n,o),n=null,o=null)},w=function(r){if(0===r.button&&!r.metaKey&&!r.ctrlKey&&(o=h(r.target,t.selector))&&"a"===o.tagName.toLowerCase()&&o.hostname===e.location.hostname&&o.pathname===e.location.pathname&&/#/.test(o.href)){var i;try{i=p(decodeURIComponent(o.hash))}catch(e){i=p(o.hash)}if("#"===i){r.preventDefault(),n=document.body;var a=n.id?n.id:"smooth-scroll-top";return n.setAttribute("data-scroll-id",a),n.id="",void(e.location.hash.substring(1)===a?O():e.location.hash=a)}(n=document.querySelector(i))&&(n.setAttribute("data-scroll-id",n.id),n.id="",o.hash===e.location.hash&&(r.preventDefault(),O()))}},x=function(e){a||(a=setTimeout(function(){a=null,i=E(r)},66))};return l.destroy=function(){t&&(document.removeEventListener("click",w,!1),e.removeEventListener("resize",x,!1),t=null,n=null,o=null,r=null,i=null,a=null,c=null)},l.init=function(n){u&&(l.destroy(),t=f(s,n||{}),r=t.selectorHeader?document.querySelector(t.selectorHeader):null,i=E(r),document.addEventListener("click",w,!1),e.addEventListener("hashchange",O,!1),r&&e.addEventListener("resize",x,!1))},l})}).call(t,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(1),e.exports=n(0)}]);