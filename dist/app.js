!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var o=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(o);n(4);var i=function(){dataLayer.push(arguments)},a=document.createElement("script");a.src="https://www.googletagmanager.com/gtag/js?id=UA-36460894-6",document.body.appendChild(a),window.dataLayer=window.dataLayer||[],i("js",new Date),i("config","UA-36460894-6"),function(){function e(e){var t=sidebar.querySelector(".section-link.active"),n="string"==typeof e?sidebar.querySelector('.section-link[data-id="'+e+'"]'):e;n!==t&&(t&&t.classList.remove("active"),n.classList.add("active"))}function t(e){for(var t=[],n=e.nextSibling;n&&"H2"!==n.tagName;)"H3"===n.tagName&&t.push(n),n=n.nextSibling;return t}function n(e){var t=document.createElement("ul");return e.forEach(function(e){t.appendChild(o(e))}),t}function o(e){var t=document.createElement("li"),n=e.textContent.replace(/\(.*\)$/,"");return t.setAttribute("class","section-link"),t.setAttribute("data-id",e.id),t.setAttribute("data-hover",n),t.innerHTML='<a data-scroll href="#'+e.id+'">'+n+"</a>",t}function i(e){function t(){var e=document.documentElement.clientWidth<s?.8*document.documentElement.clientWidth:s,t=.8*document.documentElement.clientHeight,n=o.naturalWidth,r=o.naturalHeight,i=n/r;t*i>e?(u.width=e,u.height=e/i):(u.height=t,u.width=t*i)}function n(e){e.parentNode.removeChild(e),window.removeEventListener("resize",t)}var o=e.target,r=o.src,i=document.createElement("div"),a=document.createElement("div");a.className="overlay-background",i.className="overlay",document.body.appendChild(i),a.addEventListener("click",function(){n(i)});var c=document.createElement("div");c.className="image";var l=document.createElement("div");l.className="closeButton",l.innerHTML='<i class="far fa-times-circle"></i>',l.addEventListener("click",function(){n(i)});var u=document.createElement("img");u.src=r,window.addEventListener("resize",t);var s=1100;t(),c.appendChild(l),c.appendChild(u),i.appendChild(a),i.appendChild(c)}function a(){return document.querySelectorAll(".inner .content img")}!function(){function r(){a(),c()}function i(){m=!0;var e=u.getBoundingClientRect().left;u.style.position="fixed",u.style.top=0,u.style.left=Math.round(e)+"px"}function a(){m=!1,u.style.position="absolute",u.style.top="10px",u.style.display="block",u.style.left="-"+u.offsetWidth+"px"}function c(){if(window.innerWidth<=1100)return void(u.style.display="none");if(l){"none"==u.style.display&&(u.style.display="block"),!m&&u.getBoundingClientRect().top<p&&i(),m&&s.getBoundingClientRect().top>p&&a();for(var t,n=0;n<l.length;n++){var o=l[n];if(o.getBoundingClientRect().top>10){t||(t=o);break}t=o}t&&e(t.id)}}var l=[],u=document.getElementById("sidebar"),s=document.getElementById("content"),d=document.createElement("ul");if(null!==u){u.appendChild(d);var f=s.querySelectorAll("h2");f.length?[].forEach.call(f,function(e){d.appendChild(o(e));var r=t(e);console.log(),l.push(e),l.push.apply(l,r),r.length&&d.appendChild(n(r))}):(l=s.querySelectorAll("h3"),[].forEach.call(l,function(e){d.appendChild(o(e)),l.push(e)}));var m=!1;window.addEventListener("scroll",c),window.addEventListener("resize",r),c();var p=20}}(),function(){var e=a();[].forEach.call(e,function(e){e.addEventListener("click",i)})}(),r.default.init()}()},function(e,t,n){"use strict";(function(n){var o,r,i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/*! smooth-scroll v11.0.2 | (c) 2017 Chris Ferdinandi | GPL-3.0 License | http://github.com/cferdinandi/smooth-scroll */
!function(n,a){r=[],o=a(n),void 0!==(i="function"==typeof o?o.apply(t,r):o)&&(e.exports=i)}(void 0!==n?n:(void 0).window||(void 0).global,function(e){var t,n,o,r,i,c,l,u={},s="querySelector"in document&&"addEventListener"in e,d={selector:"[data-scroll]",selectorHeader:null,speed:500,offset:0,easing:"easeInOutCubic",easingPatterns:{},before:function(){},after:function(){}},f=function e(){var t={},n=!1,o=0,r=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],o++);o<r;o++){var i=arguments[o];!function(o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n&&"[object Object]"===Object.prototype.toString.call(o[r])?t[r]=e(!0,t[r],o[r]):t[r]=o[r])}(i)}return t},m=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},p=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},h=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,i="",a=n.charCodeAt(0);++r<o;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=t>=1&&t<=31||127==t||0===r&&t>=48&&t<=57||1===r&&t>=48&&t<=57&&45===a?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+i},g=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.easingPatterns[e.easing]&&(n=e.easingPatterns[e.easing](t)),n||t},v=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0),Math.min(o,b()-y())},y=function(){return Math.max(document.documentElement.clientHeight,e.innerHeight||0)},b=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},E=function(e){return e&&"object"==("undefined"==typeof JSON?"undefined":a(JSON))&&"function"==typeof JSON.parse?JSON.parse(e):{}},w=function(e){return e?m(e)+e.offsetTop:0},S=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))};u.animateScroll=function(n,o,a){var c=E(o?o.getAttribute("data-options"):null),u=f(t||d,a||{},c),s="[object Number]"===Object.prototype.toString.call(n),m=s||!n.tagName?null:n;if(s||m){var p=e.pageYOffset;u.selectorHeader&&!r&&(r=document.querySelector(u.selectorHeader)),i||(i=w(r));var h,y,C=s?n:v(m,i,parseInt("function"==typeof u.offset?u.offset():u.offset,10)),O=C-p,H=b(),L=0,x=function(t,r,i){var a=e.pageYOffset;(t==r||a==r||e.innerHeight+a>=H)&&(clearInterval(i),S(n,r,s),u.after(n,o))},I=function(){L+=16,h=L/parseInt(u.speed,10),h=h>1?1:h,y=p+O*g(u,h),e.scrollTo(0,Math.floor(y)),x(y,C,l)};0===e.pageYOffset&&e.scrollTo(0,0),u.before(n,o),function(){clearInterval(l),l=setInterval(I,16)}()}};var C=function(t){try{h(decodeURIComponent(e.location.hash))}catch(t){h(e.location.hash)}n&&(n.id=n.getAttribute("data-scroll-id"),u.animateScroll(n,o),n=null,o=null)},O=function(r){if(0===r.button&&!r.metaKey&&!r.ctrlKey&&(o=p(r.target,t.selector))&&"a"===o.tagName.toLowerCase()&&o.hostname===e.location.hostname&&o.pathname===e.location.pathname&&/#/.test(o.href)){var i;try{i=h(decodeURIComponent(o.hash))}catch(e){i=h(o.hash)}if("#"===i){r.preventDefault(),n=document.body;var a=n.id?n.id:"smooth-scroll-top";return n.setAttribute("data-scroll-id",a),n.id="",void(e.location.hash.substring(1)===a?C():e.location.hash=a)}(n=document.querySelector(i))&&(n.setAttribute("data-scroll-id",n.id),n.id="",o.hash===e.location.hash&&(r.preventDefault(),C()))}},H=function(e){c||(c=setTimeout(function(){c=null,i=w(r)},66))};return u.destroy=function(){t&&(document.removeEventListener("click",O,!1),e.removeEventListener("resize",H,!1),t=null,n=null,o=null,r=null,i=null,c=null,l=null)},u.init=function(n){s&&(u.destroy(),t=f(d,n||{}),r=t.selectorHeader?document.querySelector(t.selectorHeader):null,i=w(r),document.addEventListener("click",O,!1),e.addEventListener("hashchange",C,!1),r&&e.addEventListener("resize",H,!1))},u})}).call(t,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){}]);