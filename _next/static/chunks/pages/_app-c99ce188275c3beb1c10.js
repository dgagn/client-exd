(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},i=r(3398);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,i=e.hasQuery,a=void 0!==i&&i;return r||o&&a}},7999:function(e,t,r){"use strict";var n=r(1682);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e,t){var r=a.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=i(i({},n),e));(n=i(i({},n),t)).loadableGenerated&&delete(n=i(i({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,s(r,n);delete n.ssr}return r(n)};u(r(7294));var a=u(r(7653));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},2775:function(e,t,r){"use strict";var n=r(1682);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),u=(i=r(3244))&&i.__esModule?i:{default:i},s=r(3398),c=r(1165),l=r(6393);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?i=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,c=m.length;s<c;s++){var l=m[s];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?i=!1:r.add(l);else{var f=o.props[l],d=n[l]||new Set;"name"===l&&a||!d.has(f)?(d.add(f),n[l]=d):i=!1}}}return i}}()).reverse().map((function(e,r){var i=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,a.default.cloneElement(e,u)}return a.default.cloneElement(e,{key:i})}))}var y=function(e){var t=e.children,r=(0,a.useContext)(s.AmpStateContext),n=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:v,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)};t.default=y},519:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},7653:function(e,t,r){"use strict";var n=r(1682),o=r(2553),i=r(2012);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var l,f=(l=r(7294))&&l.__esModule?l:{default:l},d=r(7161),p=r(519);var m=[],v=[],y=!1;function h(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var b=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new b(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!y&&"function"===typeof r.webpack){var i=r.webpack();v.push((function(e){var t,r=s(i);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(a){r.e(a)}finally{r.f()}}))}var a=function(e,t){o();var i=f.default.useContext(p.LoadableContext),a=(0,d.useSubscription)(n);return f.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),f.default.useMemo((function(){return a.loading||a.error?f.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return a.preload=function(){return o()},a.displayName="LoadableComponent",f.default.forwardRef(a)}(h,e)}function O(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return O(e,t)}))}g.preloadAll=function(){return new Promise((function(e,t){O(m).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return y=!0,t()};O(v,e).then(r,r)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var w=g;t.default=w},3244:function(e,t,r){"use strict";var n=r(3115),o=r(2553),i=r(2012),a=(r(450),r(9807)),u=r(7690),s=r(9828);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}t.__esModule=!0,t.default=void 0;var l=r(7294),f=function(e){a(r,e);var t=c(r);function r(e){var i;return o(this,r),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=f},4313:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(5893),o=r(6265),i=(r(2954),r(4865)),a=r.n(i),u=r(1163),s=r(9008),c=r(5152),l=r(7294),f=r(4184),d=r.n(f);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({offset:300},t).offset,n=(0,l.useState)(!1),i=n[0],a=n[1],u=(0,l.useState)(!1),s=u[0],c=u[1],f=e.current,d=(0,l.useCallback)((function(){var e=window.scrollY||document.documentElement.scrollTop;c(e>r),a(!1)}),[r]),m=(0,l.useCallback)((function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}),[]),v=(0,l.useCallback)((function(){i||(a(!0),window.requestAnimationFrame?window.requestAnimationFrame(d):setTimeout(d,250),a(!1))}),[d,i]);return(0,l.useEffect)((function(){return window.addEventListener("scroll",v),null===f||void 0===f||f.addEventListener("click",m),function(){null===f||void 0===f||f.removeEventListener("click",m),window.removeEventListener("scroll",v)}}),[m,v,f]),s}var v=r(4405);function y(e){return(0,v.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"}}]})(e)}function h(){var e=(0,l.useRef)(null),t=m(e),r=d()("back-top",{"back-top--visible":t});return(0,n.jsx)("div",{className:r,ref:e,children:(0,n.jsx)(y,{className:"text-contrast-50",style:{width:22,height:22}})})}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=(0,c.default)((function(){return Promise.all([r.e(608),r.e(580)]).then(r.bind(r,5580))}),{loadableGenerated:{webpack:function(){return[5580]},modules:["_app.tsx -> ../components/nav"]}});u.default.events.on("routeChangeStart",(function(){return a().start()})),u.default.events.on("routeChangeComplete",(function(){return a().done()})),u.default.events.on("routeChangeError",(function(){return a().done()}));var w=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.default,{children:[(0,n.jsx)("title",{children:"CEFIR - Accueil"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"})]}),(0,n.jsx)(O,{}),(0,n.jsx)(t,g({},r)),(0,n.jsx)(h,{})]})}},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4313)}])},2954:function(){},5152:function(e,t,r){e.exports=r(7999)},9008:function(e,t,r){e.exports=r(2775)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6265:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,r){var n=r(8164),o=r(7381),i=r(3585),a=r(5725);e.exports=function(e){return n(e)||o(e)||i(e)||a()}},1163:function(e,t,r){e.exports=r(4651)},4865:function(e,t,r){var n,o;void 0===(o="function"===typeof(n=function(){var e={version:"0.2.0"},t=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function r(e,t,r){return e<t?t:e>r?r:e}function n(e){return 100*(-1+e)}function o(e,r,o){var i;return(i="translate3d"===t.positionUsing?{transform:"translate3d("+n(e)+"%,0,0)"}:"translate"===t.positionUsing?{transform:"translate("+n(e)+"%,0)"}:{"margin-left":n(e)+"%"}).transition="all "+r+"ms "+o,i}e.configure=function(e){var r,n;for(r in e)void 0!==(n=e[r])&&e.hasOwnProperty(r)&&(t[r]=n);return this},e.status=null,e.set=function(n){var u=e.isStarted();n=r(n,t.minimum,1),e.status=1===n?null:n;var s=e.render(!u),c=s.querySelector(t.barSelector),l=t.speed,f=t.easing;return s.offsetWidth,i((function(r){""===t.positionUsing&&(t.positionUsing=e.getPositioningCSS()),a(c,o(n,l,f)),1===n?(a(s,{transition:"none",opacity:1}),s.offsetWidth,setTimeout((function(){a(s,{transition:"all "+l+"ms linear",opacity:0}),setTimeout((function(){e.remove(),r()}),l)}),l)):setTimeout(r,l)})),this},e.isStarted=function(){return"number"===typeof e.status},e.start=function(){e.status||e.set(0);var r=function(){setTimeout((function(){e.status&&(e.trickle(),r())}),t.trickleSpeed)};return t.trickle&&r(),this},e.done=function(t){return t||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(t){var n=e.status;return n?("number"!==typeof t&&(t=(1-n)*r(Math.random()*n,.1,.95)),n=r(n+t,0,.994),e.set(n)):e.start()},e.trickle=function(){return e.inc(Math.random()*t.trickleRate)},function(){var t=0,r=0;e.promise=function(n){return n&&"resolved"!==n.state()?(0===r&&e.start(),t++,r++,n.always((function(){0===--r?(t=0,e.done()):e.set((t-r)/t)})),this):this}}(),e.render=function(r){if(e.isRendered())return document.getElementById("nprogress");s(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=t.template;var i,u=o.querySelector(t.barSelector),c=r?"-100":n(e.status||0),l=document.querySelector(t.parent);return a(u,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),t.showSpinner||(i=o.querySelector(t.spinnerSelector))&&f(i),l!=document.body&&s(l,"nprogress-custom-parent"),l.appendChild(o),o},e.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(t.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&f(e)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var i=function(){var e=[];function t(){var r=e.shift();r&&r(t)}return function(r){e.push(r),1==e.length&&t()}}(),a=function(){var e=["Webkit","O","Moz","ms"],t={};function r(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,t){return t.toUpperCase()}))}function n(t){var r=document.body.style;if(t in r)return t;for(var n,o=e.length,i=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((n=e[o]+i)in r)return n;return t}function o(e){return e=r(e),t[e]||(t[e]=n(e))}function i(e,t,r){t=o(t),e.style[t]=r}return function(e,t){var r,n,o=arguments;if(2==o.length)for(r in t)void 0!==(n=t[r])&&t.hasOwnProperty(r)&&i(e,r,n);else i(e,o[1],o[2])}}();function u(e,t){return("string"==typeof e?e:l(e)).indexOf(" "+t+" ")>=0}function s(e,t){var r=l(e),n=r+t;u(r,t)||(e.className=n.substring(1))}function c(e,t){var r,n=l(e);u(e,t)&&(r=n.replace(" "+t+" "," "),e.className=r.substring(1,r.length-1))}function l(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e})?n.call(t,r,t,e):n)||(e.exports=o)},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return n.createElement(l,a({attr:a({},e.attr)},t),s(e.child))}}function l(e){var t=function(t){var r,o=e.attr,i=e.size,s=e.title,c=u(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var r=e.O();_N_E=r}]);