(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{908:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(5893),s=(t(7294),t(4184)),o=t.n(s);function a(e){var r=e.children,t=e.onClick,s=e.isSelected,a=o()("rounded px-sm py-xs tag pointer",{"bg-contrast-100":s,"tag--selected":!s,"bg-error-200":!s});return(0,n.jsx)("li",{"aria-label":"Tag pour exclure ".concat(r),className:"mb-sm",children:(0,n.jsx)("button",{onClick:t,className:a,children:r})})}},1576:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return x},default:function(){return D}});var n=t(5893),s=t(7294),o=t(1664),a=t(7484),i=t.n(a),c=t(7989),u=t.n(c),l=t(908),d=t(4184),f=t.n(d),p=t(7856),y=t.n(p),v=t(7748),b=t(374),g=t(9008),h=t(9300),m=function(e){return{filteredDatabase:e.filteredDatabase,setId:e.setId}},B=function(e){return{setPersistantViewedIds:e.setPersistantViewedIds}},x=!0;function D(e){var r=e.entry,t=(0,s.useState)(null),a=t[0],c=t[1],d=(0,v.Z)(m,b.Z),p=d.filteredDatabase,x=d.setId,D=(0,h.Z)(B,b.Z).setPersistantViewedIds,j=(0,s.useState)(null),O=j[0],w=j[1],I=(0,s.useState)(null),E=I[0],G=I[1];(0,s.useEffect)((function(){var e=p.findIndex((function(e){return e._id===r._id})),t=p[e+1],n=p[e-1],s=t&&p[e+1]._id,o=n&&p[e-1]._id;w(s||null),G(o||null),x(r._id),D(r._id)}),[p,r._id]);var S=f()("",{"text-success-800":r.degreViolence.includes("Aucune"),"text-warning-800":r.degreViolence.includes("faible"),"text-caution-800":r.degreViolence.includes("moyenne"),"text-error-800":r.degreViolence.includes("\xc9lev\xe9e")}),_=f()("circle","mr-sm",{"bg-success-500":r.degreViolence.includes("Aucune"),"bg-warning-500":r.degreViolence.includes("faible"),"bg-caution-500":r.degreViolence.includes("moyenne"),"bg-error-500":r.degreViolence.includes("\xc9lev\xe9e")}),V=r.source.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim);return(0,s.useEffect)((function(){var e=r.source;V&&V.forEach((function(r){e=e.replace(r,'<a href="'.concat(r,'" target="_blank" rel="noreferrer" class="text-bg-fx text-bg-fx--scale-y">').concat(r,"</a>"))}));var t=y()(window);c({__html:t.sanitize(e,{ADD_ATTR:["target"]})})}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.default,{children:(0,n.jsxs)("title",{children:["\xc9v\xe9nement - ",r.evenement]})}),(0,n.jsx)("div",{className:"p-xl mt-lg bg-article text-center",children:(0,n.jsxs)("div",{className:"blur p-xl max-w-md mx-auto my-auto text-contrast-50 bg-blur",children:[(0,n.jsx)("h2",{className:"text-contrast-50",children:r.evenement}),(0,n.jsx)("p",{className:"text-contrast-50 mt-sm text-center",children:i()(r.date).locale(u()).format("le D MMMM, YYYY")})]})}),(0,n.jsx)("div",{className:"container max-w-xl",children:(0,n.jsx)("div",{className:"mt-2xl mb-2xl",children:(0,n.jsxs)("div",{className:"max-w-prose mx-auto",children:[(0,n.jsxs)("div",{className:"flex space-around gap-y-md mb-2xl",children:[E?(0,n.jsx)(o.default,{href:"/evenement/".concat(E),passHref:!0,children:(0,n.jsxs)("button",{className:"button-reset text-contrast-900 link-fx-3--inverse flex-wrap",children:[(0,n.jsxs)("svg",{className:"icone",viewBox:"0 0 12 12","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("line",{strokeWidth:1.5,x1:"3.5",y1:"6",x2:"9",y2:"11.5"}),(0,n.jsx)("line",{strokeWidth:1.5,x1:"9",y1:"0.5",x2:"3.5",y2:"6"})]}),(0,n.jsx)("span",{children:"\xc9v\xe9nement pr\xe9c\xe9dent"})]})}):(0,n.jsx)("div",{}),O&&(0,n.jsx)(o.default,{href:"/evenement/".concat(O),passHref:!0,children:(0,n.jsxs)("a",{className:"button-reset text-contrast-900 link-fx-3 flex-wrap",href:"#0",children:[(0,n.jsx)("span",{children:"\xc9v\xe9nement suivant"}),(0,n.jsxs)("svg",{className:"icone",viewBox:"0 0 12 12","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("line",{strokeWidth:1.5,x1:"9",y1:"6",x2:"3.5",y2:"11.5"}),(0,n.jsx)("line",{strokeWidth:1.5,x1:"3.5",y1:"0.5",x2:"9",y2:"6"})]})]})})]}),(0,n.jsx)(o.default,{href:"/",passHref:!0,children:(0,n.jsx)("button",{className:"button-reset text-bg-fx text-bg-fx--scale-y",children:"Retour \xe0 l'accueil"})}),(0,n.jsx)("p",{className:"mt-lg",children:r.description}),(0,n.jsx)("ul",{className:"flex gap-x-md flex-wrap mt-md",children:r.groupeImplique.split("\n").map((function(e){return(0,n.jsx)(l.Z,{onClick:function(){},isSelected:!0,children:e},e)}))}),(0,n.jsxs)("div",{className:"my-sm",children:[r.type,""!==r.typeCrime?" / ".concat(r.typeCrime):null]}),(0,n.jsxs)("div",{className:S,children:[(0,n.jsx)("div",{className:_}),r.degreViolence]}),(0,n.jsx)("div",{className:"mt-sm",dangerouslySetInnerHTML:a})]})})})]})}},9300:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(6265),s=t(4671),o=t(8597),a=t(1385);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var c=(0,s.Z)((0,o.tJ)((function(e,r){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},function(e,r){return{viewedIds:[],setPersistantViewedIds:function(t){r().viewedIds.includes(t)||e({viewedIds:[].concat((0,a.Z)(r().viewedIds),[t])})}}}(e,r))}),{name:"cefir-persistant"}))},7748:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var n=t(6265),s=t(4671),o=function(e,r){return{isDark:!1,toggleDarkMode:function(){e({isDark:!r().isDark})}}};var a=t(6486);function i(e,r){return{database:[],filteredDatabase:[],databaseByGroups:[],filteredDatabaseByGroups:[],setDatabaseByGroups:function(r){var t=function(e){return(0,a.uniq)((0,a.flatten)(e.map((function(e){return e.groupeImplique.split("\n")}))).map((function(e){return(0,a.trim)(e)})))}(r).map((function(e){return{data:(0,a.orderBy)(r.filter((function(r){return r.groupeImplique.includes(e)})),"data").length,label:e}}));e({databaseByGroups:t})},loadDatabase:function(r){return e({database:r,filteredDatabase:r})}}}function c(e){var r=e.database,t=e.filterSearch,n=e.date,s=e.degreeOfViolence,o=e.events,i=e.groupsInvolved,c=e.type;return r.filter((function(e){var r=(0,a.deburr)(e.evenement.toLowerCase()),u=(0,a.deburr)(e.groupeImplique.toLowerCase()),l=(0,a.deburr)(e.degreViolence.toLowerCase()),d=(0,a.deburr)(e.date.toLowerCase()),f=(0,a.deburr)(e.type.toLowerCase()),p=(0,a.trim)((0,a.deburr)(t.toLowerCase())),y=p.split(","),v=p.startsWith("!"),b=v?p.replace("!",""):p;return""===b||(y.length>1?y.map((function(e){var t=(0,a.deburr)((0,a.trim)(e)),p=t.startsWith("!"),y=p?t.replace("!",""):t;return""===y||(p?!r.includes(y)&&!u.includes(y)&&!l.includes(y)&&!d.includes(y)&&!f.includes(y):o&&r.includes(y)||i&&u.includes(y)||s&&l.includes(y)||n&&d.includes(y)||c&&f.includes(y))})).reduce((function(e,r){return e&&r})):v?!r.includes(b)&&!u.includes(b)&&!l.includes(b)&&!d.includes(b)&&!f.includes(b):o&&r.includes(b)||i&&u.includes(b)||s&&l.includes(b)||n&&d.includes(b)||c&&f.includes(b))}))}var u=t(7484),l=t.n(u);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p=(0,s.Z)((function(e,r){return f(f(f(f(f(f(f(f({},o(e,r)),function(e,r){return{filterSearch:"",setFilterSearch:function(r){e({filterSearch:r})},handleFilterSearch:function(e){r().setFilterSearch(e.target.value)},groupsFilterSearch:"",setGroupsFilterSearch:function(r){e({groupsFilterSearch:r})},handleGroupsFilterSearch:function(e){r().setGroupsFilterSearch(e.target.value)}}}(e,r)),i(e)),function(e,r){return{filterByDate:!0,filterByDegreeOfViolence:!0,filterByEvents:!0,filterByGroupsInvolved:!0,filterByType:!0,toggleFilterByDate:function(){return e({filterByDate:!r().filterByDate})},toggleFilterByDegreeOfViolence:function(){return e({filterByDegreeOfViolence:!r().filterByDegreeOfViolence})},toggleFilterByEvents:function(){return e({filterByEvents:!r().filterByEvents})},toggleFilterByGroupsInvolved:function(){return e({filterByGroupsInvolved:!r().filterByGroupsInvolved})},toggleFilterByType:function(){return e({filterByType:!r().filterByType})},filterDatabase:function(t){return e({filteredDatabase:r().orderDatabase(c(t))})},filterSubDatabase:function(){var t=r().groupsFilterSearch,n=r().databaseByGroups.filter((function(e){var r=(0,a.deburr)((0,a.trim)(e.label.toLowerCase())),n=(0,a.deburr)((0,a.trim)(t.toLowerCase()));return r.includes(n)}));e({filteredDatabaseByGroups:r().orderSubDatabase(n)})}}}(e,r)),function(e,r){return{resetFilters:function(){e({filterSearch:"",filterByDate:!0,filterByType:!0,filterByDegreeOfViolence:!0,filterByGroupsInvolved:!0,filterByEvents:!0,filteredDatabase:r().database})}}}(e,r)),function(e,r){return{showMoreFilters:!1,toggleShowMoreFilters:function(){return e({showMoreFilters:!r().showMoreFilters})}}}(e,r)),function(e,r){return{orderByDate:"none",toggleOrderByDate:function(){e({orderByDate:"none"===r().orderByDate?"desc":"desc"===r().orderByDate?"asc":(r().orderByDate,"none")}),e({filteredDatabase:r().orderDatabase(r().filteredDatabase)})},orderByDegreeOfViolence:"none",toggleOrderByDegreeOfViolence:function(){e({orderByDegreeOfViolence:"none"===r().orderByDegreeOfViolence?"desc":"desc"===r().orderByDegreeOfViolence?"asc":(r().orderByDegreeOfViolence,"none")}),e({filteredDatabase:r().orderDatabase(r().filteredDatabase)})},orderByEvents:"none",toggleOrderByEvents:function(){e({orderByEvents:"none"===r().orderByEvents?"desc":"desc"===r().orderByEvents?"asc":(r().orderByEvents,"none")}),e({filteredDatabase:r().orderDatabase(r().filteredDatabase)})},orderByGroupsInvolved:"none",toggleOrderByGroupsInvolved:function(){e({orderByGroupsInvolved:"none"===r().orderByGroupsInvolved?"desc":"desc"===r().orderByGroupsInvolved?"asc":(r().orderByGroupsInvolved,"none")}),e({filteredDatabase:r().orderDatabase(r().filteredDatabase)})},orderByType:"none",toggleOrderByType:function(){e({orderByType:"none"===r().orderByType?"desc":"desc"===r().orderByType?"asc":(r().orderByType,"none")}),e({filteredDatabase:r().orderDatabase(r().filteredDatabase)})},orderEventsByGroupsInvolved:"none",toggleOrderEventsByGroupsInvolved:function(){e({orderEventsByGroupsInvolved:"none"===r().orderEventsByGroupsInvolved?"desc":"desc"===r().orderEventsByGroupsInvolved?"asc":(r().orderEventsByGroupsInvolved,"none")}),e({filteredDatabaseByGroups:r().orderSubDatabase(r().filteredDatabaseByGroups)})},orderEventsByData:"none",toggleOrderEventsByData:function(){e({orderEventsByData:"none"===r().orderEventsByData?"desc":"desc"===r().orderEventsByData?"asc":(r().orderEventsByData,"none")}),e({filteredDatabaseByGroups:r().orderSubDatabase(r().filteredDatabaseByGroups)})},orderSubDatabase:function(e){var t=[],n=[],s=r().orderEventsByGroupsInvolved,o=r().orderEventsByData;return"none"===o&&"none"===s&&t.push("data")&&n.push("desc"),"none"!==o&&t.push("data")&&n.push(o),"none"!==s&&t.push((function(e){return(0,a.deburr)(e.label)}))&&n.push(s),(0,a.orderBy)(e,t,n)},orderDatabase:function(e){var t=[],n=[],s=r().orderByDate,o=r().orderByDegreeOfViolence,i=r().orderByEvents,c=r().orderByGroupsInvolved,u=r().orderByType;return"none"===s&&"none"===o&&"none"===i&&"none"===c&&"none"===u&&t.push("date")&&n.push("asc"),"none"!==s&&t.push((function(e){return"none"!==o||"none"!==i||"none"!==c||"none"!==u?l()(e.date).format("YYYY-MM"):e.date}))&&n.push(s),"none"!==o&&t.push((function(e){return e.degreViolence.replace(/.*\(/gim,"")}))&&n.push(o),"none"!==i&&t.push((function(e){return(0,a.deburr)(e.evenement)}))&&n.push(i),"none"!==c&&t.push((function(e){return e.groupeImplique.split("\n").map((function(e){return(0,a.deburr)(e)}))}))&&n.push(c),"none"!==u&&t.push((function(e){return(0,a.deburr)(e.type)}))&&n.push(u),n.length>1&&n.push("asc")&&t.push("_id"),(0,a.orderBy)(e,t,n)}}}(e,r)),function(e,r){return{id:"",setId:function(r){e({id:r})}}}(e))}))},9621:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/evenement/[id]",function(){return t(1576)}])}},function(e){e.O(0,[662,721,774,888,179],(function(){return r=9621,e(e.s=r);var r}));var r=e.O();_N_E=r}]);