(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[687],{4184:function(e,r){var n;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var c=o.apply(null,n);c&&e.push(c)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)t.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(r,[]))||(e.exports=n)}()},2167:function(e,r,n){"use strict";var t=n(3848),o=n(9448);r.default=void 0;var a=o(n(7294)),c=n(9414),i=n(4651),s=n(7426),u={};function l(e,r,n,t){if(e&&(0,c.isLocalURL)(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[r+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,o=(0,i.useRouter)(),d=a.default.useMemo((function(){var r=(0,c.resolveHref)(o,e.href,!0),n=t(r,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),f=d.href,p=d.as,y=e.children,v=e.replace,g=e.shallow,b=e.scroll,B=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var h=(r=a.Children.only(y))&&"object"===typeof r&&r.ref,D=(0,s.useIntersection)({rootMargin:"200px"}),m=t(D,2),I=m[0],O=m[1],w=a.default.useCallback((function(e){I(e),h&&("function"===typeof h?h(e):"object"===typeof h&&(h.current=e))}),[h,I]);(0,a.useEffect)((function(){var e=O&&n&&(0,c.isLocalURL)(f),r="undefined"!==typeof B?B:o&&o.locale,t=u[f+"%"+p+(r?"%"+r:"")];e&&!t&&l(o,f,p,{locale:r})}),[p,f,O,B,n,o]);var j={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&t.indexOf("#")>=0&&(i=!1),r[o?"replace":"push"](n,t,{shallow:a,locale:s,scroll:i}))}(e,o,f,p,v,g,b,B)},onMouseEnter:function(e){(0,c.isLocalURL)(f)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l(o,f,p,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof B?B:o&&o.locale,x=o&&o.isLocaleDomain&&(0,c.getDomainLocale)(p,E,o&&o.locales,o&&o.domainLocales);j.href=x||(0,c.addBasePath)((0,c.addLocale)(p,E,o&&o.defaultLocale))}return a.default.cloneElement(r,j)};r.default=d},7426:function(e,r,n){"use strict";var t=n(3848);r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!c,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=t(u,2),d=l[0],f=l[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=i.get(r);if(n)return n;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return i.set(r,n={id:r,observer:o,elements:t}),n}(n),o=t.id,a=t.observer,c=t.elements;return c.set(e,r),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[n,r,d]);return(0,o.useEffect)((function(){if(!c&&!d){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[d]),[p,d]};var o=n(7294),a=n(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},8:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return d},default:function(){return f}});var t=n(5893),o=(n(7294),n(4184)),a=n.n(o),c=n(8093),i=n(1664);function s(e){var r=e.className,n=e.groupObj,o=(0,c.Z)((function(e){return e.setFilterSearch}));return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("table",{className:a()("table",r),children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"table__heading-group",children:[(0,t.jsx)("th",{className:"table__heading w-full",children:"Ann\xe9e"}),(0,t.jsx)("th",{className:"table__heading pr-3xl",children:"Nombre d'incidents"})]})}),(0,t.jsx)("tbody",{children:n.map((function(e){return(0,t.jsx)(i.default,{href:"/",passHref:!0,children:(0,t.jsxs)("tr",{onClick:function(){return o(e.label)},className:"pointer table__group",children:[(0,t.jsx)("td",{className:"table__item","data-title":"Groupe",children:e.label}),(0,t.jsx)("td",{className:"table__item","data-title":"Incidents",children:e.data})]},e.label)},e.label)}))})]})})}var u=n(6486),l=n(9008),d=!0;function f(e){var r=e.database,n=(0,u.sortBy)((0,u.uniq)(r.map((function(e){return new Date(e.date).getFullYear()})))).map((function(e){var n=r.filter((function(r){return r.date.includes("".concat(e))}));return{label:e.toString(),data:n.length}}));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.default,{children:(0,t.jsx)("title",{children:"CEFIR - Incident par ann\xe9e"})}),(0,t.jsx)("div",{className:"container max-w-xl",children:(0,t.jsxs)("div",{className:"mt-2xl mb-lg",children:[(0,t.jsxs)("h3",{children:["Incidents par ann\xe9e -"," ",0==(null===n||void 0===n?void 0:n.length)?0:n.length," r\xe9sultats"]}),(0,t.jsx)("p",{className:"mt-md mb-lg","aria-label":"Informations sur la recherche",children:"Vous pouvez cliquer sur une ann\xe9e pour appliquer le filtre."}),(0,t.jsx)(s,{groupObj:n})]})})]})}},8093:function(e,r,n){"use strict";n.d(r,{Z:function(){return d}});var t=n(6265),o=n(4671),a=n(6486);function c(e){var r=e.database,n=e.searchValue,t=e.date,o=e.degreViolence,c=e.evenement,i=e.groupeImplique,s=e.type;return r.filter((function(e){var r=(0,a.deburr)(e.evenement.toLowerCase()),u=(0,a.deburr)(e.groupeImplique.toLowerCase()),l=(0,a.deburr)(e.degreViolence.toLowerCase()),d=(0,a.deburr)(e.date.toLowerCase()),f=(0,a.deburr)(e.type.toLowerCase()),p=(0,a.trim)((0,a.deburr)(n.toLowerCase())),y=p.split(",");return y.length>1?y.map((function(e){return c&&r.includes((0,a.trim)(e))||i&&u.includes((0,a.trim)(e))||o&&l.includes((0,a.trim)(e))||t&&d.includes((0,a.trim)(e))||s&&f.includes((0,a.trim)(e))})).reduce((function(e,r){return e&&r})):c&&r.includes(p)||i&&u.includes(p)||o&&l.includes(p)||t&&d.includes(p)||s&&f.includes(p)}))}var i=function(e,r){return{database:[],filteredDatabase:[],loadDatabase:function(r){e({database:r,filteredDatabase:r})},filterByDate:!0,filterByType:!0,filterByDegreeOfViolence:!0,filterByGroupsInvolved:!0,filterByEvents:!0,toggleFilterByDate:function(){return e({filterByDate:!r().filterByDate})},toggleFilterByType:function(){return e({filterByType:!r().filterByType})},toggleFilterByDegreeOfViolence:function(){return e({filterByDegreeOfViolence:!r().filterByDegreeOfViolence})},toggleFilterByGroupsInvolved:function(){return e({filterByGroupsInvolved:!r().filterByGroupsInvolved})},toggleFilterByEvents:function(){return e({filterByEvents:!r().filterByEvents})},filterSearch:"",handleFilterSearch:function(e){r().setFilterSearch(e.target.value)},setFilterSearch:function(r){e({filterSearch:r})},filterDatabase:function(r){e({filteredDatabase:c(r)})},orderDatabase:function(){var n=[],t=[];"none"!==r().orderByDate&&n.push((function(e){return"none"!==r().orderByDegreeOfViolence?new Date(e.date).getFullYear():e.date}))&&t.push(r().orderByDate),"none"!==r().orderByType&&n.push("type")&&t.push(r().orderByType),"none"!==r().orderByEvents&&n.push("evenement")&&t.push(r().orderByEvents),"none"!==r().orderByGroupsInvolved&&n.push("groupeImplique")&&t.push(r().orderByGroupsInvolved),"none"!==r().orderByDegreeOfViolence&&n.push((function(e){return e.degreViolence.replace(/.*\(/gim,"")}))&&t.push(r().orderByDegreeOfViolence),n.length<=0&&t.length<=0?e({filteredDatabase:c({database:r().database,searchValue:r().filterSearch,evenement:r().filterByEvents,date:r().filterByDate,degreViolence:r().filterByDegreeOfViolence,groupeImplique:r().filterByGroupsInvolved,type:r().filterByType})}):e({filteredDatabase:(0,a.orderBy)(r().filteredDatabase,n,t)})},orderByDate:"none",toggleOrderByDate:function(){var n=r().orderByDate;"none"===n?(e({orderByDate:"desc"}),r().orderDatabase()):"desc"===n?(e({orderByDate:"asc"}),r().orderDatabase()):"asc"===n&&(e({orderByDate:"none"}),r().orderDatabase())},orderByType:"none",toggleOrderByType:function(){var n=r().orderByType;"none"===n?(e({orderByType:"desc"}),r().orderDatabase()):"desc"===n?(e({orderByType:"asc"}),r().orderDatabase()):"asc"===n&&(e({orderByType:"none"}),r().orderDatabase())},orderByDegreeOfViolence:"none",toggleOrderByDegreeOfViolence:function(){var n=r().orderByDegreeOfViolence;"none"===n?(e({orderByDegreeOfViolence:"desc"}),r().orderDatabase()):"desc"===n?(e({orderByDegreeOfViolence:"asc"}),r().orderDatabase()):"asc"===n&&(e({orderByDegreeOfViolence:"none"}),r().orderDatabase())},orderByGroupsInvolved:"none",toggleOrderByGroupsInvolved:function(){var n=r().orderByGroupsInvolved;"none"===n?(e({orderByGroupsInvolved:"desc"}),r().orderDatabase()):"desc"===n?(e({orderByGroupsInvolved:"asc"}),r().orderDatabase()):"asc"===n&&(e({orderByGroupsInvolved:"none"}),r().orderDatabase())},orderByEvents:"none",toggleOrderByEvents:function(){var n=r().orderByEvents;"none"===n?(e({orderByEvents:"desc"}),r().orderDatabase()):"desc"===n?(e({orderByEvents:"asc"}),r().orderDatabase()):"asc"===n&&(e({orderByEvents:"none"}),r().orderDatabase())},orderIncidentByYear:"none",toggleOrderIncidentByYear:function(){var n=r().orderIncidentByYear;"none"===n?e({orderIncidentByYear:"desc"}):"desc"===n?e({orderIncidentByYear:"asc"}):"asc"===n&&e({orderIncidentByYear:"none"})},orderYearByIncident:"none",toggleOrderYearByIncident:function(){var n=r().orderYearByIncident;"none"===n?e({orderYearByIncident:"desc"}):"desc"===n?e({orderYearByIncident:"asc"}):"asc"===n&&e({orderYearByIncident:"none"})},orderIncidentByGroup:"none",toggleOrderIncidentByGroup:function(){var n=r().orderIncidentByGroup;"none"===n?e({orderIncidentByGroup:"desc"}):"desc"===n?e({orderIncidentByGroup:"asc"}):"asc"===n&&e({orderIncidentByGroup:"none"})},orderGroupByIncident:"none",toggleOrderGroupByIncident:function(){var n=r().orderGroupByIncident;"none"===n?e({orderGroupByIncident:"desc"}):"desc"===n?e({orderGroupByIncident:"asc"}):"asc"===n&&e({orderGroupByIncident:"none"})},resetFilters:function(){e({filterSearch:"",filterByDate:!0,filterByType:!0,filterByDegreeOfViolence:!0,filterByGroupsInvolved:!0,filterByEvents:!0,filteredDatabase:r().database})},showMoreFilters:!1,toggleShowMoreFilters:function(){e({showMoreFilters:!r().showMoreFilters})}}},s=function(e,r){return{isDark:!1,toggleDarkMode:function(){e({isDark:!r().isDark})}}};function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var d=(0,o.Z)((function(e,r){return l(l({},i(e,r)),s(e,r))}))},5348:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/incidentsParAnnee",function(){return n(8)}])},1664:function(e,r,n){e.exports=n(2167)},4671:function(e,r,n){"use strict";var t=n(7294);function o(e){let r;const n=new Set,t=(e,t)=>{const o="function"===typeof e?e(r):e;if(o!==r){const e=r;r=t?o:Object.assign({},r,o),n.forEach((n=>n(r,e)))}},o=()=>r,a={setState:t,getState:o,subscribe:(e,t,a)=>t||a?((e,t=o,a=Object.is)=>{let c=t(r);function i(){const n=t(r);if(!a(c,n)){const r=c;e(c=n,r)}}return n.add(i),()=>n.delete(i)})(e,t,a):(n.add(e),()=>n.delete(e)),destroy:()=>n.clear()};return r=e(t,o,a),a}const a="undefined"===typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)?t.useEffect:t.useLayoutEffect;r.Z=function(e){const r="function"===typeof e?o(e):e,n=(e=r.getState,n=Object.is)=>{const[,o]=(0,t.useReducer)((e=>e+1),0),c=r.getState(),i=(0,t.useRef)(c),s=(0,t.useRef)(e),u=(0,t.useRef)(n),l=(0,t.useRef)(!1),d=(0,t.useRef)();let f;void 0===d.current&&(d.current=e(c));let p=!1;(i.current!==c||s.current!==e||u.current!==n||l.current)&&(f=e(c),p=!n(d.current,f)),a((()=>{p&&(d.current=f),i.current=c,s.current=e,u.current=n,l.current=!1}));const y=(0,t.useRef)(c);return a((()=>{const e=()=>{try{const e=r.getState(),n=s.current(e);u.current(d.current,n)||(i.current=e,d.current=n,o())}catch(e){l.current=!0,o()}},n=r.subscribe(e);return r.getState()!==y.current&&e(),n}),[]),p?f:d.current};return Object.assign(n,r),n[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const e=[n,r];return{next(){const r=e.length<=0;return{value:e.shift(),done:r}}}},n}}},function(e){e.O(0,[662,774,888,179],(function(){return r=5348,e(e.s=r);var r}));var r=e.O();_N_E=r}]);