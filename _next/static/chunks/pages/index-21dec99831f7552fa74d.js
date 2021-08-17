(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,r=36e5,n="millisecond",s="second",a="minute",i="hour",o="day",u="week",l="month",c="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},m={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),s=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(s,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),s=t.clone().add(n,l),a=r-s<0,i=t.clone().add(n+(a?-1:1),l);return+(-(n+(r-s)/(a?s-i:i-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:u,d:o,D:f,h:i,m:a,s:s,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",D={};D[g]=v;var B=function(e){return e instanceof O},$=function(e,t,r){var n;if(!e)return g;if("string"==typeof e)D[e]&&(n=e),t&&(D[e]=t,n=e);else{var s=e.name;D[s]=e,n=s}return!r&&n&&(g=n),n||!r&&g},x=function(e,t){if(B(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new O(r)},w=m;w.l=$,w.i=B,w.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function v(e){this.$L=$(e.locale,null,!0),this.parse(e)}var b=v.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var s=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return w},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var r=x(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return x(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<x(e)},b.$g=function(e,t,r){return w.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!w.u(t)||t,c=w.p(e),h=function(e,t){var s=w.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?s:s.endOf(o)},p=function(e,t){return w.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},y=this.$W,v=this.$M,b=this.$D,m="set"+(this.$u?"UTC":"");switch(c){case d:return n?h(1,0):h(31,11);case l:return n?h(1,v):h(0,v+1);case u:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return h(n?b-D:b+(6-D),v);case o:case f:return p(m+"Hours",0);case i:return p(m+"Minutes",1);case a:return p(m+"Seconds",2);case s:return p(m+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,u=w.p(e),c="set"+(this.$u?"UTC":""),h=(r={},r[o]=c+"Date",r[f]=c+"Date",r[l]=c+"Month",r[d]=c+"FullYear",r[i]=c+"Hours",r[a]=c+"Minutes",r[s]=c+"Seconds",r[n]=c+"Milliseconds",r)[u],p=u===o?this.$D+(t-this.$W):t;if(u===l||u===d){var y=this.clone().set(f,1);y.$d[h](p),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[w.p(e)]()},b.add=function(n,c){var f,h=this;n=Number(n);var p=w.p(c),y=function(e){var t=x(h);return w.w(t.date(t.date()+Math.round(e*n)),h)};if(p===l)return this.set(l,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===o)return y(1);if(p===u)return y(7);var v=(f={},f[a]=t,f[i]=r,f[s]=e,f)[p]||1,b=this.$d.getTime()+n*v;return w.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),a=this.$H,i=this.$m,o=this.$M,u=r.weekdays,l=r.months,c=function(e,r,s,a){return e&&(e[r]||e(t,n))||s[r].substr(0,a)},d=function(e){return w.s(a%12||12,e,"0")},f=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:c(r.monthsShort,o,l,3),MMMM:c(l,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,u,2),ddd:c(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(a),HH:w.s(a,2,"0"),h:d(1),hh:d(2),a:f(a,i,!0),A:f(a,i,!1),m:String(i),mm:w.s(i,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return n.replace(y,(function(e,t){return t||p[e]||s.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,f,h){var p,y=w.p(f),v=x(n),b=(v.utcOffset()-this.utcOffset())*t,m=this-v,g=w.m(this,v);return g=(p={},p[d]=g/12,p[l]=g,p[c]=g/3,p[u]=(m-b)/6048e5,p[o]=(m-b)/864e5,p[i]=m/r,p[a]=m/t,p[s]=m/e,p)[y]||m,h?g:w.a(g)},b.daysInMonth=function(){return this.endOf(l).$D},b.$locale=function(){return D[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=$(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return w.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},v}(),S=O.prototype;return x.prototype=S,[["$ms",n],["$s",s],["$m",a],["$H",i],["$W",o],["$M",l],["$y",d],["$D",f]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,O,x),e.$i=!0),x},x.locale=$,x.isDayjs=B,x.unix=function(e){return x(1e3*e)},x.en=D[g],x.Ls=D,x.p={},x}()},2562:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return b},default:function(){return m}});var n=r(5893),s=r(7294),a=r(5152),i=r(9008),o=r(7748),u=r(374),l=r(2669),c=(0,a.default)((function(){return Promise.all([r.e(874),r.e(111)]).then(r.bind(r,111))}),{loadableGenerated:{webpack:function(){return[111]},modules:["index.tsx -> ../components/search-input"]}}),d=(0,a.default)((function(){return Promise.all([r.e(874),r.e(33)]).then(r.bind(r,6033))}),{loadableGenerated:{webpack:function(){return[6033]},modules:["index.tsx -> ../components/database/database-table"]}}),f=(0,a.default)((function(){return r.e(509).then(r.bind(r,1509))}),{loadableGenerated:{webpack:function(){return[1509]},modules:["index.tsx -> ../components/show-more"]}}),h=(0,a.default)((function(){return r.e(523).then(r.bind(r,9523))}),{loadableGenerated:{webpack:function(){return[9523]},modules:["index.tsx -> ../components/show-more-filters"]}}),p=(0,a.default)((function(){return r.e(652).then(r.bind(r,7652))}),{loadableGenerated:{webpack:function(){return[7652]},modules:["index.tsx -> ../components/tags"]}}),y=function(e){return{filteredDatabase:e.filteredDatabase,loadDatabase:e.loadDatabase,database:e.database,id:e.id}},v=function(e){return{viewedIds:e.viewedIds}},b=!0;function m(e){var t=e.database,r=(0,o.Z)(y,u.Z),a=r.filteredDatabase,b=r.loadDatabase,m=r.database,g=r.id,D=(0,l.Z)(v,u.Z).viewedIds;(0,s.useEffect)((function(){return b(t)}),[]),(0,s.useEffect)((function(){var e=""!==g&&document.getElementById("".concat(g));console.log(e),e&&e.scrollIntoView()}),[g]);var B=(0,s.useMemo)((function(){return D.length/t.length*100}),[D.length,t.length]);return m.length>0&&t.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.default,{children:(0,n.jsx)("title",{children:"CEFIR - Accueil"})}),(0,n.jsx)("div",{className:"container max-w-xl",children:(0,n.jsxs)("div",{className:"mt-2xl mb-lg",children:[(0,n.jsxs)("h3",{children:[(0,n.jsxs)("span",{role:"img","aria-label":"Un pictogramme de recherche",children:["\ud83d\udd0d"," "]}),"Rechercher"," ",(0,n.jsxs)("span",{className:"resultat",children:[null===a||void 0===a?void 0:a.length," r\xe9sultats!"]})]}),(0,n.jsxs)("p",{className:"mt-md mb-lg max-w-sm","aria-label":"Informations sur les balises",children:["Cliquer sur les balises pour exclure les colonnes dans la recherche. ",B>0&&(0,n.jsxs)("span",{className:"block mt-xs",children:["Vous avez vu"," ",(0,n.jsxs)("span",{className:"text-primary-600",children:[B.toFixed(2).replace(".",",")," %"]})," ","soit ",(0,n.jsxs)("span",{className:"text-primary-600",children:[D.length," sur ",t.length]})," \xe9v\xe9nements"]})]}),(0,n.jsx)(p,{}),(0,n.jsx)(c,{className:"mt-md"}),(0,n.jsxs)("p",{className:"font-italic mt-lg mb-sm","aria-label":"Informations sur les balises",children:[(0,n.jsx)("span",{role:"img","aria-label":"Une ic\xf4ne de punaise",children:"\ud83d\udccc"})," ","s\xe9parer les mots par des virgules pour faire des recherches complexes. Ajouter un point d'exclamation avant les mots pour les exclure."]}),(0,n.jsx)(f,{}),(0,n.jsx)(h,{}),(0,n.jsx)("p",{className:"font-italic mt-lg mb-sm","aria-label":"Informations sur les balises",children:"Cliquer sur une colonne pour l'ordonner."}),(0,n.jsx)(d,{database:a.slice(0,50),className:"mb-2xl"})]})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.default,{children:(0,n.jsx)("title",{children:"CEFIR - Accueil"})}),(0,n.jsx)("div",{className:"container max-w-xl",children:(0,n.jsxs)("div",{className:"mt-2xl mb-lg",children:[(0,n.jsxs)("h3",{children:[(0,n.jsxs)("span",{role:"img","aria-label":"Un pictogramme de recherche",children:["\ud83d\udd0d"," "]}),"Rechercher ",(0,n.jsxs)("span",{className:"resultat",children:[null===t||void 0===t?void 0:t.length," r\xe9sultats"]})]}),(0,n.jsx)("p",{className:"mt-md mb-lg","aria-label":"Informations sur la recherche",children:"Par d\xe9faut, la recherche va inclure toutes les colonnes. Vous pouvez cliquer sur les balises pour les exclure."}),(0,n.jsx)(p,{}),(0,n.jsx)(c,{className:"mt-md"}),(0,n.jsx)(f,{}),(0,n.jsx)(h,{}),(0,n.jsx)(d,{database:t.slice(0,50),className:"mb-2xl"})]})})]})}},7748:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(6265),s=r(4671),a=function(e,t){return{isDark:!1,toggleDarkMode:function(){e({isDark:!t().isDark})}}};var i=r(6486);function o(e,t){return{database:[],filteredDatabase:[],databaseByGroups:[],filteredDatabaseByGroups:[],setDatabaseByGroups:function(t){var r=function(e){return(0,i.uniq)((0,i.flatten)(e.map((function(e){return e.groupeImplique.split("\n")}))).map((function(e){return(0,i.trim)(e)})))}(t).map((function(e){return{data:(0,i.orderBy)(t.filter((function(t){return t.groupeImplique.includes(e)})),"data").length,label:e}}));e({databaseByGroups:r})},loadDatabase:function(t){return e({database:t,filteredDatabase:t})}}}function u(e){var t=e.database,r=e.filterSearch,n=e.date,s=e.degreeOfViolence,a=e.events,o=e.groupsInvolved,u=e.type;return t.filter((function(e){var t=(0,i.deburr)(e.evenement.toLowerCase()),l=(0,i.deburr)(e.groupeImplique.toLowerCase()),c=(0,i.deburr)(e.degreViolence.toLowerCase()),d=(0,i.deburr)(e.date.toLowerCase()),f=(0,i.deburr)(e.type.toLowerCase()),h=(0,i.trim)((0,i.deburr)(r.toLowerCase())),p=h.split(","),y=h.startsWith("!"),v=y?h.replace("!",""):h;return""===v||(p.length>1?p.map((function(e){var r=(0,i.deburr)((0,i.trim)(e)),h=r.startsWith("!"),p=h?r.replace("!",""):r;return""===p||(h?!t.includes(p)&&!l.includes(p)&&!c.includes(p)&&!d.includes(p)&&!f.includes(p):a&&t.includes(p)||o&&l.includes(p)||s&&c.includes(p)||n&&d.includes(p)||u&&f.includes(p))})).reduce((function(e,t){return e&&t})):y?!t.includes(v)&&!l.includes(v)&&!c.includes(v)&&!d.includes(v)&&!f.includes(v):a&&t.includes(v)||o&&l.includes(v)||s&&c.includes(v)||n&&d.includes(v)||u&&f.includes(v))}))}var l=r(7484),c=r.n(l);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=(0,s.Z)((function(e,t){return f(f(f(f(f(f(f(f({},a(e,t)),function(e,t){return{filterSearch:"",setFilterSearch:function(t){e({filterSearch:t})},handleFilterSearch:function(e){t().setFilterSearch(e.target.value)},groupsFilterSearch:"",setGroupsFilterSearch:function(t){e({groupsFilterSearch:t})},handleGroupsFilterSearch:function(e){t().setGroupsFilterSearch(e.target.value)}}}(e,t)),o(e)),function(e,t){return{filterByDate:!0,filterByDegreeOfViolence:!0,filterByEvents:!0,filterByGroupsInvolved:!0,filterByType:!0,toggleFilterByDate:function(){return e({filterByDate:!t().filterByDate})},toggleFilterByDegreeOfViolence:function(){return e({filterByDegreeOfViolence:!t().filterByDegreeOfViolence})},toggleFilterByEvents:function(){return e({filterByEvents:!t().filterByEvents})},toggleFilterByGroupsInvolved:function(){return e({filterByGroupsInvolved:!t().filterByGroupsInvolved})},toggleFilterByType:function(){return e({filterByType:!t().filterByType})},filterDatabase:function(r){return e({filteredDatabase:t().orderDatabase(u(r))})},filterSubDatabase:function(){var r=t().groupsFilterSearch,n=t().databaseByGroups.filter((function(e){var t=(0,i.deburr)((0,i.trim)(e.label.toLowerCase())),n=(0,i.deburr)((0,i.trim)(r.toLowerCase()));return t.includes(n)}));e({filteredDatabaseByGroups:t().orderSubDatabase(n)})}}}(e,t)),function(e,t){return{resetFilters:function(){e({filterSearch:"",filterByDate:!0,filterByType:!0,filterByDegreeOfViolence:!0,filterByGroupsInvolved:!0,filterByEvents:!0,filteredDatabase:t().database,orderByDate:"none",orderByEvents:"none",orderByType:"none",orderByDegreeOfViolence:"none",orderByGroupsInvolved:"none"})}}}(e,t)),function(e,t){return{showMoreFilters:!1,toggleShowMoreFilters:function(){return e({showMoreFilters:!t().showMoreFilters})}}}(e,t)),function(e,t){return{orderByDate:"none",toggleOrderByDate:function(){e({orderByDate:"none"===t().orderByDate?"desc":"desc"===t().orderByDate?"asc":(t().orderByDate,"none")}),e({filteredDatabase:t().orderDatabase(t().filteredDatabase)})},orderByDegreeOfViolence:"none",toggleOrderByDegreeOfViolence:function(){e({orderByDegreeOfViolence:"none"===t().orderByDegreeOfViolence?"desc":"desc"===t().orderByDegreeOfViolence?"asc":(t().orderByDegreeOfViolence,"none")}),e({filteredDatabase:t().orderDatabase(t().filteredDatabase)})},orderByEvents:"none",toggleOrderByEvents:function(){e({orderByEvents:"none"===t().orderByEvents?"desc":"desc"===t().orderByEvents?"asc":(t().orderByEvents,"none")}),e({filteredDatabase:t().orderDatabase(t().filteredDatabase)})},orderByGroupsInvolved:"none",toggleOrderByGroupsInvolved:function(){e({orderByGroupsInvolved:"none"===t().orderByGroupsInvolved?"desc":"desc"===t().orderByGroupsInvolved?"asc":(t().orderByGroupsInvolved,"none")}),e({filteredDatabase:t().orderDatabase(t().filteredDatabase)})},orderByType:"none",toggleOrderByType:function(){e({orderByType:"none"===t().orderByType?"desc":"desc"===t().orderByType?"asc":(t().orderByType,"none")}),e({filteredDatabase:t().orderDatabase(t().filteredDatabase)})},orderEventsByGroupsInvolved:"none",toggleOrderEventsByGroupsInvolved:function(){e({orderEventsByGroupsInvolved:"none"===t().orderEventsByGroupsInvolved?"desc":"desc"===t().orderEventsByGroupsInvolved?"asc":(t().orderEventsByGroupsInvolved,"none")}),e({filteredDatabaseByGroups:t().orderSubDatabase(t().filteredDatabaseByGroups)})},orderEventsByData:"none",toggleOrderEventsByData:function(){e({orderEventsByData:"none"===t().orderEventsByData?"desc":"desc"===t().orderEventsByData?"asc":(t().orderEventsByData,"none")}),e({filteredDatabaseByGroups:t().orderSubDatabase(t().filteredDatabaseByGroups)})},orderSubDatabase:function(e){var r=[],n=[],s=t().orderEventsByGroupsInvolved,a=t().orderEventsByData;return"none"===a&&"none"===s&&r.push("data")&&n.push("desc"),"none"!==a&&r.push("data")&&n.push(a),"none"!==s&&r.push((function(e){return(0,i.deburr)(e.label)}))&&n.push(s),(0,i.orderBy)(e,r,n)},orderDatabase:function(e){var r=[],n=[],s=t().orderByDate,a=t().orderByDegreeOfViolence,o=t().orderByEvents,u=t().orderByGroupsInvolved,l=t().orderByType;return"none"===s&&"none"===a&&"none"===o&&"none"===u&&"none"===l&&r.push("date")&&n.push("asc"),"none"!==s&&r.push((function(e){return"none"!==a||"none"!==o||"none"!==u||"none"!==l?c()(e.date).format("YYYY-MM"):e.date}))&&n.push(s),"none"!==a&&r.push((function(e){return e.degreViolence.replace(/.*\(/gim,"")}))&&n.push(a),"none"!==o&&r.push((function(e){return(0,i.deburr)(e.evenement)}))&&n.push(o),"none"!==u&&r.push((function(e){return e.groupeImplique.split("\n").map((function(e){return(0,i.deburr)(e)}))}))&&n.push(u),"none"!==l&&r.push((function(e){return(0,i.deburr)(e.type)}))&&n.push(l),n.length>1&&n.push("asc")&&r.push("_id"),(0,i.orderBy)(e,r,n)}}}(e,t)),function(e,t){return{id:"",setId:function(t){e({id:t})}}}(e))}))},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2562)}])}},function(e){e.O(0,[662,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);