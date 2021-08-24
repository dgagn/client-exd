(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[860],{7484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,r=36e5,n="millisecond",s="second",a="minute",o="hour",i="day",u="week",l="month",c="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},b={s:g,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),s=r%60;return(t<=0?"+":"-")+g(n,2,"0")+":"+g(s,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),s=t.clone().add(n,l),a=r-s<0,o=t.clone().add(n+(a?-1:1),l);return+(-(n+(r-s)/(a?s-o:o-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:u,d:i,D:f,h:o,m:a,s:s,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},D="en",m={};m[D]=y;var B=function(e){return e instanceof E},$=function(e,t,r){var n;if(!e)return D;if("string"==typeof e)m[e]&&(n=e),t&&(m[e]=t,n=e);else{var s=e.name;m[s]=e,n=s}return!r&&n&&(D=n),n||!r&&D},O=function(e,t){if(B(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new E(r)},S=b;S.l=$,S.i=B,S.w=function(e,t){return O(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e)}var g=y.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var s=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return S},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(e,t){var r=O(e);return this.startOf(t)<=r&&r<=this.endOf(t)},g.isAfter=function(e,t){return O(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<O(e)},g.$g=function(e,t,r){return S.u(e)?this[t]:this.set(r,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var r=this,n=!!S.u(t)||t,c=S.p(e),h=function(e,t){var s=S.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?s:s.endOf(i)},p=function(e,t){return S.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},v=this.$W,y=this.$M,g=this.$D,b="set"+(this.$u?"UTC":"");switch(c){case d:return n?h(1,0):h(31,11);case l:return n?h(1,y):h(0,y+1);case u:var D=this.$locale().weekStart||0,m=(v<D?v+7:v)-D;return h(n?g-m:g+(6-m),y);case i:case f:return p(b+"Hours",0);case o:return p(b+"Minutes",1);case a:return p(b+"Seconds",2);case s:return p(b+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var r,u=S.p(e),c="set"+(this.$u?"UTC":""),h=(r={},r[i]=c+"Date",r[f]=c+"Date",r[l]=c+"Month",r[d]=c+"FullYear",r[o]=c+"Hours",r[a]=c+"Minutes",r[s]=c+"Seconds",r[n]=c+"Milliseconds",r)[u],p=u===i?this.$D+(t-this.$W):t;if(u===l||u===d){var v=this.clone().set(f,1);v.$d[h](p),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[S.p(e)]()},g.add=function(n,c){var f,h=this;n=Number(n);var p=S.p(c),v=function(e){var t=O(h);return S.w(t.date(t.date()+Math.round(e*n)),h)};if(p===l)return this.set(l,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===i)return v(1);if(p===u)return v(7);var y=(f={},f[a]=t,f[o]=r,f[s]=e,f)[p]||1,g=this.$d.getTime()+n*y;return S.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),a=this.$H,o=this.$m,i=this.$M,u=r.weekdays,l=r.months,c=function(e,r,s,a){return e&&(e[r]||e(t,n))||s[r].substr(0,a)},d=function(e){return S.s(a%12||12,e,"0")},f=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:i+1,MM:S.s(i+1,2,"0"),MMM:c(r.monthsShort,i,l,3),MMMM:c(l,i),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,u,2),ddd:c(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(a),HH:S.s(a,2,"0"),h:d(1),hh:d(2),a:f(a,o,!0),A:f(a,o,!1),m:String(o),mm:S.s(o,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:s};return n.replace(v,(function(e,t){return t||p[e]||s.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,f,h){var p,v=S.p(f),y=O(n),g=(y.utcOffset()-this.utcOffset())*t,b=this-y,D=S.m(this,y);return D=(p={},p[d]=D/12,p[l]=D,p[c]=D/3,p[u]=(b-g)/6048e5,p[i]=(b-g)/864e5,p[o]=b/r,p[a]=b/t,p[s]=b/e,p)[v]||b,h?D:S.a(D)},g.daysInMonth=function(){return this.endOf(l).$D},g.$locale=function(){return m[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=$(e,t,!0);return n&&(r.$L=n),r},g.clone=function(){return S.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},y}(),M=E.prototype;return O.prototype=M,[["$ms",n],["$s",s],["$m",a],["$H",o],["$W",i],["$M",l],["$y",d],["$D",f]].forEach((function(e){M[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),O.extend=function(e,t){return e.$i||(e(t,E,O),e.$i=!0),O},O.locale=$,O.isDayjs=B,O.unix=function(e){return O(1e3*e)},O.en=m[D],O.Ls=m,O.p={},O}()},2167:function(e,t,r){"use strict";var n=r(3848),s=r(9448);t.default=void 0;var a=s(r(7294)),o=r(9414),i=r(4651),u=r(7426),l={};function c(e,t,r,n){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var s=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(s?"%"+s:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,s=(0,i.useRouter)(),d=a.default.useMemo((function(){var t=(0,o.resolveHref)(s,e.href,!0),r=n(t,2),a=r[0],i=r[1];return{href:a,as:e.as?(0,o.resolveHref)(s,e.as):i||a}}),[s,e.href,e.as]),f=d.href,h=d.as,p=e.children,v=e.replace,y=e.shallow,g=e.scroll,b=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var D=(t=a.Children.only(p))&&"object"===typeof t&&t.ref,m=(0,u.useIntersection)({rootMargin:"200px"}),B=n(m,2),$=B[0],O=B[1],S=a.default.useCallback((function(e){$(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[D,$]);(0,a.useEffect)((function(){var e=O&&r&&(0,o.isLocalURL)(f),t="undefined"!==typeof b?b:s&&s.locale,n=l[f+"%"+h+(t?"%"+t:"")];e&&!n&&c(s,f,h,{locale:t})}),[h,f,O,b,r,s]);var E={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,s,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[s?"replace":"push"](r,n,{shallow:a,locale:u,scroll:i}))}(e,s,f,h,v,y,g,b)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c(s,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof b?b:s&&s.locale,j=s&&s.isLocaleDomain&&(0,o.getDomainLocale)(h,M,s&&s.locales,s&&s.domainLocales);E.href=j||(0,o.addBasePath)((0,o.addLocale)(h,M,s&&s.defaultLocale))}return a.default.cloneElement(t,E)};t.default=d},7426:function(e,t,r){"use strict";var n=r(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,u=(0,s.useRef)(),l=(0,s.useState)(!1),c=n(l,2),d=c[0],f=c[1],h=(0,s.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:s,elements:n}),r}(r),s=n.id,a=n.observer,o=n.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),i.delete(s))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,d]);return(0,s.useEffect)((function(){if(!o&&!d){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[d]),[h,d]};var s=r(7294),a=r(3447),o="undefined"!==typeof IntersectionObserver;var i=new Map},1256:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return D},default:function(){return m}});var n=r(5893),s=r(7294),a=r(4184),o=r.n(a),i=r(6411),u=r(1664),l=r(7516),c=r(374),d=function(e){return{setFilterSearch:e.setFilterSearch,toggleOrderEventsByData:e.toggleOrderEventsByData,toggleOrderEventsByGroupsInvolved:e.toggleOrderEventsByGroupsInvolved,orderEventsByGroupsInvolved:e.orderEventsByGroupsInvolved,orderEventsByData:e.orderEventsByData,setId:e.setId}};function f(e){var t=e.className,r=e.groupObj,a=(0,i.Z)(d,c.Z),f=a.setFilterSearch,h=a.toggleOrderEventsByData,p=a.toggleOrderEventsByGroupsInvolved,v=a.orderEventsByGroupsInvolved,y=a.orderEventsByData,g=a.setId;return(0,s.useEffect)((function(){g("")}),[g]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("table",{className:o()("table",t),children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"table__heading-group",children:[(0,n.jsxs)("th",{className:"table__heading w-full",onClick:p,children:["Groupe",(0,n.jsx)("span",{children:"desc"===v?(0,n.jsx)(l.jRD,{className:"icon"}):"asc"===v?(0,n.jsx)(l.OrA,{className:"icon"}):(0,n.jsx)(l.jRD,{className:"hidden"})})]}),(0,n.jsxs)("th",{className:"table__heading pr-3xl",onClick:h,children:["Nombre d'\xe9v\xe9nements"," ",(0,n.jsx)("span",{children:"desc"===y?(0,n.jsx)(l.jRD,{className:"icon"}):"asc"===y?(0,n.jsx)(l.OrA,{className:"icon"}):(0,n.jsx)(l.jRD,{className:"hidden"})})]})]})}),(0,n.jsx)("tbody",{children:r.map((function(e){return(0,n.jsx)(u.default,{href:"/",passHref:!0,children:(0,n.jsxs)("tr",{onClick:function(){return f(e.label)},className:"pointer table__group",children:[(0,n.jsx)("td",{className:"table__item","data-title":"Groupe",children:e.label}),(0,n.jsx)("td",{className:"table__item","data-title":"\xc9v\xe9nement",children:e.data})]},e.label)},e.label)}))})]})})}var h=r(9008);function p(e){var t=e.className,r=e.value,s=e.onChange,a=e.id;return(0,n.jsxs)("div",{className:t,children:[(0,n.jsx)(l.wTD,{className:"icon-search"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:a,children:"Barre de recherche"}),(0,n.jsx)("input",{type:"text",className:"form__control pl-xl mt-2xs",onChange:s,value:r,id:a})]})]})}var v=function(e){return{groupsFilterSearch:e.groupsFilterSearch,handleGroupsFilterSearch:e.handleGroupsFilterSearch}};function y(e){var t=e.className,r=(0,i.Z)(v,c.Z),s=r.handleGroupsFilterSearch,a=r.groupsFilterSearch;return(0,n.jsx)(p,{className:t,value:a,onChange:s,id:"groupsFilter"})}var g=function(e){return{groupsFilterSearch:e.groupsFilterSearch,filterSubDatabase:e.filterSubDatabase}};var b=function(e){return{setDatabaseByGroups:e.setDatabaseByGroups,filteredDatabaseByGroups:e.filteredDatabaseByGroups}},D=!0;function m(e){var t=e.database,r=(0,i.Z)(b,c.Z),a=r.setDatabaseByGroups,o=r.filteredDatabaseByGroups;return(0,s.useEffect)((function(){a(t)}),[t,a]),function(){var e=(0,i.Z)(g,c.Z),t=e.filterSubDatabase,r=e.groupsFilterSearch,n=(0,s.useCallback)((function(){return t()}),[t,r]);(0,s.useEffect)((function(){n()}),[n])}(),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.default,{children:(0,n.jsx)("title",{children:"CEFIR - \xc9v\xe9nements par groupe"})}),(0,n.jsx)("div",{className:"container max-w-xl mb-xl",children:(0,n.jsxs)("div",{className:"mt-xl mb-lg",children:[(0,n.jsxs)("h3",{children:["\xc9v\xe9nements par groupe"," ",(0,n.jsxs)("span",{className:"resultat",children:[null===o||void 0===o?void 0:o.length," r\xe9sultats"]})]}),(0,n.jsx)("p",{className:"mt-md mb-lg","aria-label":"Informations sur la recherche",children:"Vous pouvez cliquer sur un groupe pour appliquer le filtre."}),(0,n.jsx)(y,{className:"mb-xl"}),(0,n.jsx)("p",{className:"font-italic mt-lg mb-sm","aria-label":"Informations sur les balises",children:"Cliquer sur une colonne pour l'ordonner."}),(0,n.jsx)(f,{groupObj:o})]})})]})}},6411:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(6265),s=r(4671);var a=r(6486);function o(e,t){return{database:[],filteredDatabase:[],databaseByGroups:[],filteredDatabaseByGroups:[],setDatabaseByGroups:function(t){var r=function(e){return(0,a.uniq)((0,a.flatten)(e.map((function(e){return e.groupeImplique.split("\n")}))).map((function(e){return(0,a.trim)(e)})))}(t).map((function(e){return{data:(0,a.orderBy)(t.filter((function(t){return t.groupeImplique.includes(e)})),"data").length,label:e}}));e({databaseByGroups:r})},loadDatabase:function(t){return e({database:t,filteredDatabase:t})}}}function i(e){var t=e.database,r=e.filterSearch,n=e.date,s=e.degreeOfViolence,o=e.events,i=e.groupsInvolved,u=e.type;return t.filter((function(e){var t=(0,a.deburr)(e.evenement.toLowerCase()),l=(0,a.deburr)(e.groupeImplique.toLowerCase()),c=(0,a.deburr)(e.degreViolence.toLowerCase()),d=(0,a.deburr)(e.date.toLowerCase()),f=(0,a.deburr)(e.type.toLowerCase()),h=(0,a.trim)((0,a.deburr)(r.toLowerCase())),p=h.split(","),v=h.startsWith("!"),y=v?h.replace("!",""):h;return""===y||(p.length>1?p.map((function(e){var r=(0,a.deburr)((0,a.trim)(e)),h=r.startsWith("!"),p=h?r.replace("!",""):r;return""===p||(h?!t.includes(p)&&!l.includes(p)&&!c.includes(p)&&!d.includes(p)&&!f.includes(p):o&&t.includes(p)||i&&l.includes(p)||s&&c.includes(p)||n&&d.includes(p)||u&&f.includes(p))})).reduce((function(e,t){return e&&t})):v?!t.includes(y)&&!l.includes(y)&&!c.includes(y)&&!d.includes(y)&&!f.includes(y):o&&t.includes(y)||i&&l.includes(y)||s&&c.includes(y)||n&&d.includes(y)||u&&f.includes(y))}))}var u=r(7484),l=r.n(u);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=(0,s.Z)((function(e,t){return d(d(d(d(d(d(d({},function(e,t){return{filterSearch:"",setFilterSearch:function(t){e({filterSearch:t})},handleFilterSearch:function(e){t().setFilterSearch(e.target.value)},groupsFilterSearch:"",setGroupsFilterSearch:function(t){e({groupsFilterSearch:t})},handleGroupsFilterSearch:function(e){t().setGroupsFilterSearch(e.target.value)}}}(e,t)),o(e)),function(e,t){return{filterByDate:!0,filterByDegreeOfViolence:!0,filterByEvents:!0,filterByGroupsInvolved:!0,filterByType:!0,toggleFilterByDate:function(){return e({filterByDate:!t().filterByDate})},toggleFilterByDegreeOfViolence:function(){return e({filterByDegreeOfViolence:!t().filterByDegreeOfViolence})},toggleFilterByEvents:function(){return e({filterByEvents:!t().filterByEvents})},toggleFilterByGroupsInvolved:function(){return e({filterByGroupsInvolved:!t().filterByGroupsInvolved})},toggleFilterByType:function(){return e({filterByType:!t().filterByType})},filterDatabase:function(r){return e({filteredDatabase:t().orderDatabase(i(r))})},filterSubDatabase:function(){var r=t().groupsFilterSearch,n=t().databaseByGroups.filter((function(e){var t=(0,a.deburr)((0,a.trim)(e.label.toLowerCase())),n=(0,a.deburr)((0,a.trim)(r.toLowerCase()));return t.includes(n)}));e({filteredDatabaseByGroups:t().orderSubDatabase(n)})}}}(e,t)),function(e,t){return{resetFilters:function(){e({filterSearch:"",filterByDate:!0,filterByType:!0,filterByDegreeOfViolence:!0,filterByGroupsInvolved:!0,filterByEvents:!0,filteredDatabase:t().database,orderByDate:"none",orderByEvents:"none",orderByType:"none",orderByDegreeOfViolence:"none",orderByGroupsInvolved:"none"})}}}(e,t)),function(e,t){return{showMoreFilters:!1,toggleShowMoreFilters:function(){return e({showMoreFilters:!t().showMoreFilters})}}}(e,t)),function(e,t){return{orderByDate:"none",toggleOrderByDate:function(){e({orderByDate:"none"===t().orderByDate?"desc":"desc"===t().orderByDate?"asc":(t().orderByDate,"none")}),e({filteredDatabase:t().orderDatabase(t().filteredDatabase)})},orderByDegreeOfViolence:"none",toggleOrderByDegreeOfViolence:function(){e({orderByDegreeOfViolence:"none"===t().orderByDegreeOfViolence?"desc":"desc"===t().orderByDegreeOfViolence?"asc":(t().orderByDegreeOfViolence,"none")}),e({filteredDatabase:t().orderDatabase(t().filteredDatabase)})},orderByEvents:"none",toggleOrderByEvents:function(){e({orderByEvents:"none"===t().orderByEvents?"desc":"desc"===t().orderByEvents?"asc":(t().orderByEvents,"none")}),e({filteredDatabase:t().orderDatabase(t().filteredDatabase)})},orderByGroupsInvolved:"none",toggleOrderByGroupsInvolved:function(){e({orderByGroupsInvolved:"none"===t().orderByGroupsInvolved?"desc":"desc"===t().orderByGroupsInvolved?"asc":(t().orderByGroupsInvolved,"none")}),e({filteredDatabase:t().orderDatabase(t().filteredDatabase)})},orderByType:"none",toggleOrderByType:function(){e({orderByType:"none"===t().orderByType?"desc":"desc"===t().orderByType?"asc":(t().orderByType,"none")}),e({filteredDatabase:t().orderDatabase(t().filteredDatabase)})},orderEventsByGroupsInvolved:"none",toggleOrderEventsByGroupsInvolved:function(){e({orderEventsByGroupsInvolved:"none"===t().orderEventsByGroupsInvolved?"desc":"desc"===t().orderEventsByGroupsInvolved?"asc":(t().orderEventsByGroupsInvolved,"none")}),e({filteredDatabaseByGroups:t().orderSubDatabase(t().filteredDatabaseByGroups)})},orderEventsByData:"none",toggleOrderEventsByData:function(){e({orderEventsByData:"none"===t().orderEventsByData?"desc":"desc"===t().orderEventsByData?"asc":(t().orderEventsByData,"none")}),e({filteredDatabaseByGroups:t().orderSubDatabase(t().filteredDatabaseByGroups)})},orderSubDatabase:function(e){var r=[],n=[],s=t().orderEventsByGroupsInvolved,o=t().orderEventsByData;return"none"===o&&"none"===s&&r.push("data")&&n.push("desc"),"none"!==o&&r.push("data")&&n.push(o),"none"!==s&&r.push((function(e){return(0,a.deburr)(e.label)}))&&n.push(s),(0,a.orderBy)(e,r,n)},orderDatabase:function(e){var r=[],n=[],s=t().orderByDate,o=t().orderByDegreeOfViolence,i=t().orderByEvents,u=t().orderByGroupsInvolved,c=t().orderByType;return"none"===s&&"none"===o&&"none"===i&&"none"===u&&"none"===c&&r.push("date")&&n.push("asc"),"none"!==s&&r.push((function(e){return"none"!==o||"none"!==i||"none"!==u||"none"!==c?l()(e.date).format("YYYY-MM"):e.date}))&&n.push(s),"none"!==o&&r.push((function(e){return e.degreViolence.replace(/.*\(/gim,"")}))&&n.push(o),"none"!==i&&r.push((function(e){return(0,a.deburr)(e.evenement)}))&&n.push(i),"none"!==u&&r.push((function(e){return e.groupeImplique.split("\n").map((function(e){return(0,a.deburr)(e)}))}))&&n.push(u),"none"!==c&&r.push((function(e){return(0,a.deburr)(e.type)}))&&n.push(c),n.length>1&&n.push("asc")&&r.push("_id"),(0,a.orderBy)(e,r,n)}}}(e,t)),function(e,t){return{id:"",setId:function(t){e({id:t})}}}(e))}))},5669:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/evenementsParGroupe",function(){return r(1256)}])},1664:function(e,t,r){e.exports=r(2167)}},function(e){e.O(0,[874,774,888,179],(function(){return t=5669,e(e.s=t);var t}));var t=e.O();_N_E=t}]);