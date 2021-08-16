(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[329],{7911:function(e,t,n){"use strict";n.d(t,{ac:function(){return l}});var r=n(7294),o=(n(1296),n(3096),Object.create(null));o.enableHighAccuracy=!1,o.timeout=4294967295,o.maximumAge=0;Object.freeze(o);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,i=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a="object"===("undefined"===typeof window?"undefined":i(window)),f=function(e){return"undefined"!==typeof window&&e in window},l=function(e){if(!a||!f("matchMedia"))return console.warn("matchMedia is not supported, this could happen both because window.matchMedia is not supported by your current browser or you're using the useMediaQuery hook whilst server side rendering."),null;var t=u((0,r.useState)(!!window.matchMedia(e).matches),2),n=t[0],o=t[1];return(0,r.useEffect)((function(){var t=window.matchMedia(e),n=function(){return o(!!t.matches)};try{t.addEventListener("change",n)}catch(r){console.error(r),t.addListener(n)}return n(),function(){try{t.removeEventListener("change",n)}catch(r){console.error(r),t.removeListener(n)}}}),[e]),n},s=function(e){try{return JSON.parse(e)}catch(t){return null}},p=n(4155),d="undefined"!==typeof p&&p.env&&!1,v=function(e){var t="".concat(e,"Storage");return a&&!f(t)&&console.warn("".concat(t," is not supported")),function(e,n){if(!a)return d&&console.warn("Please be aware that ".concat(t," could not be available during SSR")),[JSON.stringify(n),function(){}];var o=window[t],i=u((0,r.useState)(s(o.getItem(e)||JSON.stringify(n))),2),c=i[0],f=i[1];return(0,r.useEffect)((function(){o.setItem(e,JSON.stringify(c))}),[e,c]),[c,f]}};v("local"),v("session")},1296:function(e,t,n){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,l=a||f||Function("return this")(),s=Object.prototype.toString,p=Math.max,d=Math.min,v=function(){return l.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,i,u,c,a,f=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,f=t,u=e.apply(i,n)}function g(e){return f=e,c=setTimeout(T,t),l?b(e):u}function w(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-f>=i}function T(){var e=v();if(w(e))return j(e);c=setTimeout(T,function(e){var n=t-(e-a);return s?d(n,i-(e-f)):n}(e))}function j(e){return c=void 0,m&&r?b(e):(r=o=void 0,u)}function E(){var e=v(),n=w(e);if(r=arguments,o=this,a=e,n){if(void 0===c)return g(a);if(s)return c=setTimeout(T,t),b(a)}return void 0===c&&(c=setTimeout(T,t)),u}return t=h(t)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?p(h(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),E.cancel=function(){void 0!==c&&clearTimeout(c),f=0,r=a=o=c=void 0},E.flush=function(){return void 0===c?u:j(v())},E}},3096:function(e,t,n){var r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),p=Object.prototype.toString,d=Math.max,v=Math.min,y=function(){return s.Date.now()};function h(e,t,n){var o,i,u,c,a,f,l=0,s=!1,p=!1,h=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=o,r=i;return o=i=void 0,l=t,c=e.apply(r,n)}function w(e){return l=e,a=setTimeout(j,t),s?g(e):c}function T(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-l>=u}function j(){var e=y();if(T(e))return E(e);a=setTimeout(j,function(e){var n=t-(e-f);return p?v(n,u-(e-l)):n}(e))}function E(e){return a=void 0,h&&o?g(e):(o=i=void 0,c)}function O(){var e=y(),n=T(e);if(o=arguments,i=this,f=e,n){if(void 0===a)return w(f);if(p)return a=setTimeout(j,t),g(f)}return void 0===a&&(a=setTimeout(j,t)),c}return t=b(t)||0,m(n)&&(s=!!n.leading,u=(p="maxWait"in n)?d(b(n.maxWait)||0,t):u,h="trailing"in n?!!n.trailing:h),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=f=i=a=void 0},O.flush=function(){return void 0===a?c:E(y())},O}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=u.test(e);return n||c.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return m(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),h(e,t,{leading:o,maxWait:t,trailing:i})}},2167:function(e,t,n){"use strict";var r=n(3848),o=n(9448);t.default=void 0;var i=o(n(7294)),u=n(9414),c=n(4651),a=n(7426),f={};function l(e,t,n,r){if(e&&(0,u.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=(0,c.useRouter)(),s=i.default.useMemo((function(){var t=(0,u.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,u.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,y=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var g=(t=i.Children.only(v))&&"object"===typeof t&&t.ref,w=(0,a.useIntersection)({rootMargin:"200px"}),T=r(w,2),j=T[0],E=T[1],O=i.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);(0,i.useEffect)((function(){var e=E&&n&&(0,u.isLocalURL)(p),t="undefined"!==typeof b?b:o&&o.locale,r=f[p+"%"+d+(t?"%"+t:"")];e&&!r&&l(o,p,d,{locale:t})}),[d,p,E,b,n,o]);var S={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:a,scroll:c}))}(e,o,p,d,y,h,m,b)},onMouseEnter:function(e){(0,u.isLocalURL)(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof b?b:o&&o.locale,M=o&&o.isLocaleDomain&&(0,u.getDomainLocale)(d,L,o&&o.locales,o&&o.domainLocales);S.href=M||(0,u.addBasePath)((0,u.addLocale)(d,L,o&&o.defaultLocale))}return i.default.cloneElement(t,S)};t.default=s},7426:function(e,t,n){"use strict";var r=n(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,a=(0,o.useRef)(),f=(0,o.useState)(!1),l=r(f,2),s=l[0],p=l[1],d=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||s||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,u=r.elements;return u.set(e,t),i.observe(e),function(){u.delete(e),i.unobserve(e),0===u.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,s]);return(0,o.useEffect)((function(){if(!u&&!s){var e=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[s]),[d,s]};var o=n(7294),i=n(3447),u="undefined"!==typeof IntersectionObserver;var c=new Map},1664:function(e,t,n){e.exports=n(2167)},4155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,a=[],f=!1,l=-1;function s(){f&&c&&(f=!1,c.length?a=c.concat(a):l=-1,a.length&&p())}function p(){if(!f){var e=u(s);f=!0;for(var t=a.length;t;){for(c=a,a=[];++l<t;)c&&c[l].run();l=-1,t=a.length}c=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new d(e,t)),1!==a.length||f||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}}]);