(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8021:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(8767),a=t(3260);function o(){return(0,n.useQuery)("database",a.database,{staleTime:3e4,refetchOnMount:!1}).data||[]}},3260:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return D},database:function(){return m},default:function(){return w}});var n=t(809),a=t.n(n),o=t(5893),s=t(2447),i=t(7294),l=t(5152),u=t(9008),c=t(8093),d=t(9669),f=t.n(d),y=t(8021),p=t(6486);var b=(0,l.default)((function(){return Promise.all([t.e(874),t.e(716)]).then(t.bind(t,111))}),{loadableGenerated:{webpack:function(){return[111]},modules:["index.tsx -> ../components/search-input"]}}),v=(0,l.default)((function(){return Promise.all([t.e(874),t.e(424)]).then(t.bind(t,6033))}),{loadableGenerated:{webpack:function(){return[6033]},modules:["index.tsx -> ../components/database/database-table"]}}),B=(0,l.default)((function(){return t.e(509).then(t.bind(t,1509))}),{loadableGenerated:{webpack:function(){return[1509]},modules:["index.tsx -> ../components/show-more"]}}),g=(0,l.default)((function(){return t.e(523).then(t.bind(t,9523))}),{loadableGenerated:{webpack:function(){return[9523]},modules:["index.tsx -> ../components/show-more-filters"]}}),h=(0,l.default)((function(){return t.e(2).then(t.bind(t,4002))}),{loadableGenerated:{webpack:function(){return[4002]},modules:["index.tsx -> ../components/tags"]}}),D=!0;function m(){return O.apply(this,arguments)}function O(){return(O=(0,s.Z)(a().mark((function e(){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().get("https://server-exd.herokuapp.com/database");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){var e=(0,c.Z)((function(e){return e.filteredDatabase})),r=(0,c.Z)((function(e){return e.loadDatabase})),t=(0,y.Z)();(0,i.useEffect)((function(){return r(t)}),[t,r]);!function(){var e=(0,c.Z)(),r=e.filterByEvents,t=e.filterByType,n=e.filterByDate,a=e.filterSearch,o=e.filterByGroupsInvolved,s=e.filterByDegreeOfViolence,l=e.filterDatabase,u=e.database,d=e.filteredDatabase,f=(0,i.useCallback)((0,p.debounce)((function(){l({type:t,groupeImplique:o,date:n,searchValue:a,evenement:r,degreViolence:s,database:u}),console.log(d)}),300),[a,n,t,r,o,s,u]);(0,i.useEffect)((function(){f()}),[f])}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.default,{children:(0,o.jsx)("title",{children:"CEFIR - Accueil"})}),(0,o.jsx)("div",{className:"container max-w-xl",children:(0,o.jsxs)("div",{className:"mt-2xl mb-lg",children:[(0,o.jsxs)("h3",{children:[(0,o.jsxs)("span",{role:"img","aria-label":"Un pictogramme de recherche",children:["\ud83d\udd0d"," "]}),"Rechercher - ",0==(null===e||void 0===e?void 0:e.length)?0:e.length," r\xe9sultats"]}),(0,o.jsx)("p",{className:"mt-md mb-lg","aria-label":"Informations sur la recherche",children:"Par d\xe9faut, la recherche va inclure toutes les colonnes. Vous pouvez cliquer sur les balises pour les exclure."}),(0,o.jsx)(h,{}),(0,o.jsx)(b,{className:"mt-md"}),(0,o.jsx)(B,{}),(0,o.jsx)(g,{}),(0,o.jsx)(v,{database:e.slice(0,50),className:"mb-2xl"})]})})]})}},8093:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(6265),a=t(4671),o=t(6486);function s(e){var r=e.database,t=e.searchValue,n=e.date,a=e.degreViolence,s=e.evenement,i=e.groupeImplique,l=e.type;return r.filter((function(e){var r=(0,o.deburr)(e.evenement.toLowerCase()),u=(0,o.deburr)(e.groupeImplique.toLowerCase()),c=(0,o.deburr)(e.degreViolence.toLowerCase()),d=(0,o.deburr)(e.date.toLowerCase()),f=(0,o.deburr)(e.type.toLowerCase()),y=(0,o.trim)((0,o.deburr)(t.toLowerCase())),p=y.split(",");return p.length>1?p.map((function(e){return s&&r.includes((0,o.trim)(e))||i&&u.includes((0,o.trim)(e))||a&&c.includes((0,o.trim)(e))||n&&d.includes((0,o.trim)(e))||l&&f.includes((0,o.trim)(e))})).reduce((function(e,r){return e&&r})):s&&r.includes(y)||i&&u.includes(y)||a&&c.includes(y)||n&&d.includes(y)||l&&f.includes(y)}))}var i=function(e,r){return{database:[],filteredDatabase:[],loadDatabase:function(r){e({database:r,filteredDatabase:r})},filterByDate:!0,filterByType:!0,filterByDegreeOfViolence:!0,filterByGroupsInvolved:!0,filterByEvents:!0,toggleFilterByDate:function(){return e({filterByDate:!r().filterByDate})},toggleFilterByType:function(){return e({filterByType:!r().filterByType})},toggleFilterByDegreeOfViolence:function(){return e({filterByDegreeOfViolence:!r().filterByDegreeOfViolence})},toggleFilterByGroupsInvolved:function(){return e({filterByGroupsInvolved:!r().filterByGroupsInvolved})},toggleFilterByEvents:function(){return e({filterByEvents:!r().filterByEvents})},filterSearch:"",handleFilterSearch:function(e){r().setFilterSearch(e.target.value)},setFilterSearch:function(r){e({filterSearch:r})},filterDatabase:function(r){e({filteredDatabase:s(r)})},orderDatabase:function(){var t=[],n=[];"none"!==r().orderByDate&&t.push((function(e){return"none"!==r().orderByDegreeOfViolence?new Date(e.date).getFullYear():e.date}))&&n.push(r().orderByDate),"none"!==r().orderByType&&t.push("type")&&n.push(r().orderByType),"none"!==r().orderByEvents&&t.push("evenement")&&n.push(r().orderByEvents),"none"!==r().orderByGroupsInvolved&&t.push("groupeImplique")&&n.push(r().orderByGroupsInvolved),"none"!==r().orderByDegreeOfViolence&&t.push((function(e){return e.degreViolence.replace(/.*\(/gim,"")}))&&n.push(r().orderByDegreeOfViolence),t.length<=0&&n.length<=0?e({filteredDatabase:s({database:r().database,searchValue:r().filterSearch,evenement:r().filterByEvents,date:r().filterByDate,degreViolence:r().filterByDegreeOfViolence,groupeImplique:r().filterByGroupsInvolved,type:r().filterByType})}):e({filteredDatabase:(0,o.orderBy)(r().filteredDatabase,t,n)})},orderByDate:"none",toggleOrderByDate:function(){var t=r().orderByDate;"none"===t?(e({orderByDate:"desc"}),r().orderDatabase()):"desc"===t?(e({orderByDate:"asc"}),r().orderDatabase()):"asc"===t&&(e({orderByDate:"none"}),r().orderDatabase())},orderByType:"none",toggleOrderByType:function(){var t=r().orderByType;"none"===t?(e({orderByType:"desc"}),r().orderDatabase()):"desc"===t?(e({orderByType:"asc"}),r().orderDatabase()):"asc"===t&&(e({orderByType:"none"}),r().orderDatabase())},orderByDegreeOfViolence:"none",toggleOrderByDegreeOfViolence:function(){var t=r().orderByDegreeOfViolence;"none"===t?(e({orderByDegreeOfViolence:"desc"}),r().orderDatabase()):"desc"===t?(e({orderByDegreeOfViolence:"asc"}),r().orderDatabase()):"asc"===t&&(e({orderByDegreeOfViolence:"none"}),r().orderDatabase())},orderByGroupsInvolved:"none",toggleOrderByGroupsInvolved:function(){var t=r().orderByGroupsInvolved;"none"===t?(e({orderByGroupsInvolved:"desc"}),r().orderDatabase()):"desc"===t?(e({orderByGroupsInvolved:"asc"}),r().orderDatabase()):"asc"===t&&(e({orderByGroupsInvolved:"none"}),r().orderDatabase())},orderByEvents:"none",toggleOrderByEvents:function(){var t=r().orderByEvents;"none"===t?(e({orderByEvents:"desc"}),r().orderDatabase()):"desc"===t?(e({orderByEvents:"asc"}),r().orderDatabase()):"asc"===t&&(e({orderByEvents:"none"}),r().orderDatabase())},resetFilters:function(){e({filterSearch:"",filterByDate:!0,filterByType:!0,filterByDegreeOfViolence:!0,filterByGroupsInvolved:!0,filterByEvents:!0,filteredDatabase:r().database})},showMoreFilters:!1,toggleShowMoreFilters:function(){e({showMoreFilters:!r().showMoreFilters})}}},l=function(e,r){return{isDark:!1,toggleDarkMode:function(){e({isDark:!r().isDark})}}};function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=(0,a.Z)((function(e,r){return c(c({},i(e,r)),l(e,r))}))},5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3260)}])}},function(e){e.O(0,[662,322,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);