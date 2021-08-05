(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7169:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return C},database:function(){return S},default:function(){return E}});var n=r(809),l=r.n(n),i=r(5893),a=r(2447),s=r(7294),c=r(9008),o=r(6265),u=r(4671),d=r(6486);function f(e){var t=e.database,r=e.searchValue,n=e.date,l=e.degreViolence,i=e.evenement,a=e.groupeImplique,s=e.type;return t.filter((function(e){var t=(0,d.deburr)(e.evenement.toLowerCase()),c=(0,d.deburr)(e.groupeImplique.toLowerCase()),o=(0,d.deburr)(e.degreViolence.toLowerCase()),u=(0,d.deburr)(e.date.toLowerCase()),f=(0,d.deburr)(e.type.toLowerCase()),h=(0,d.trim)((0,d.deburr)(r.toLowerCase())),g=h.split(",");return g.length>1?g.map((function(e){return i&&t.includes((0,d.trim)(e))||a&&c.includes((0,d.trim)(e))||l&&o.includes((0,d.trim)(e))||n&&u.includes((0,d.trim)(e))||s&&f.includes((0,d.trim)(e))})).reduce((function(e,t){return e&&t})):i&&t.includes(h)||a&&c.includes(h)||l&&o.includes(h)||n&&u.includes(h)||s&&f.includes(h)}))}var h=function(e,t){return{database:[],filteredDatabase:[],loadDatabase:function(t){e({database:t,filteredDatabase:t})},filterByDate:!0,filterByType:!0,filterByDegreeOfViolence:!0,filterByGroupsInvolved:!0,filterByEvents:!0,toggleFilterByDate:function(){return e({filterByDate:!t().filterByDate})},toggleFilterByType:function(){return e({filterByType:!t().filterByType})},toggleFilterByDegreeOfViolence:function(){return e({filterByDegreeOfViolence:!t().filterByDegreeOfViolence})},toggleFilterByGroupsInvolved:function(){return e({filterByGroupsInvolved:!t().filterByGroupsInvolved})},toggleFilterByEvents:function(){return e({filterByEvents:!t().filterByEvents})},filterSearch:"",handleFilterSearch:function(t){e({filterSearch:t.target.value})},filterDatabase:function(t){e({filteredDatabase:f(t)})},resetFilters:function(){e({filterSearch:"",filterByDate:!0,filterByType:!0,filterByDegreeOfViolence:!0,filterByGroupsInvolved:!0,filterByEvents:!0,filteredDatabase:t().database})},showMoreFilters:!1,toggleShowMoreFilters:function(){e({showMoreFilters:!t().showMoreFilters})}}};function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var m=(0,u.Z)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},h(e,t))})),p=r(4184),b=r.n(p);function x(e){var t=e.children,r=e.onClick,n=e.isSelected,l=b()("rounded px-sm py-3xs tag pointer",{"bg-contrast-100":n,"tag--selected":!n,"bg-error-200":!n});return(0,i.jsx)("li",{"aria-label":"Tag pour exclure ".concat(t),children:(0,i.jsx)("button",{onClick:r,className:l,children:t})})}function v(){var e=m(),t=e.toggleFilterByDate,r=e.filterByDate,n=e.toggleFilterByType,l=e.toggleFilterByEvents,a=e.toggleFilterByGroupsInvolved,s=e.toggleFilterByDegreeOfViolence,c=e.filterByType,o=e.filterByGroupsInvolved,u=e.filterByEvents,d=e.filterByDegreeOfViolence;return(0,i.jsxs)("ul",{className:"flex gap-x-md gap-y-xs flex-wrap font-bold","aria-label":"La liste de boutons pour pouvoir exclure certaines colonnes de la recherche",children:[(0,i.jsx)(x,{onClick:t,isSelected:r,children:"Date"}),(0,i.jsx)(x,{onClick:n,isSelected:c,children:"Type d\u2019\xe9v\xe9nement"}),(0,i.jsx)(x,{onClick:s,isSelected:d,children:"Degr\xe9 de violence"}),(0,i.jsx)(x,{onClick:a,isSelected:o,children:"Groupe(s) impliqu\xe9(s)"}),(0,i.jsx)(x,{onClick:l,isSelected:u,children:"\xc9v\xe9nement"})]})}var y=r(9669),j=r.n(y),_=r(8767);function B(){return(0,_.useQuery)("database",S,{staleTime:3e4}).data||[]}var D=r(7516);function N(e){var t=e.className,r=m((function(e){return e.filterSearch})),n=m((0,s.useCallback)((function(e){return e.handleFilterSearch}),[]));return(0,i.jsxs)("div",{className:t,children:[(0,i.jsx)(D.wTD,{className:"icon-search"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"filterSearch",children:"Barre de recherche"}),(0,i.jsx)("input",{type:"text",className:"form__control pl-xl mt-2xs",onChange:n,value:r,id:"filterSearch"})]})]})}function w(e){var t=e.database,r=b()("table__item",{"text-success-800":t.degreViolence.includes("Aucune"),"text-warning-800":t.degreViolence.includes("faible"),"text-caution-800":t.degreViolence.includes("moyenne"),"text-error-800":t.degreViolence.includes("\xc9lev\xe9e")}),n=b()("circle","mr-sm",{"bg-success-500":t.degreViolence.includes("Aucune"),"bg-warning-500":t.degreViolence.includes("faible"),"bg-caution-500":t.degreViolence.includes("moyenne"),"bg-error-500":t.degreViolence.includes("\xc9lev\xe9e")}),l=(0,s.useMemo)((function(){return t.groupeImplique.split("\n")}),[t.groupeImplique]);return(0,i.jsxs)("tr",{className:"table__group",children:[(0,i.jsx)("td",{className:"table__item","data-title":"Date",children:t.date}),(0,i.jsx)("td",{className:"table__item","data-title":"Type",children:t.type}),(0,i.jsxs)("td",{"data-title":"Degr\xe9",className:r,children:[(0,i.jsx)("div",{className:n}),t.degreViolence]}),(0,i.jsx)("td",{className:"table__item","data-title":"Groupes",children:l.map((function(e,t){return(0,i.jsx)("div",{className:b()({"font-italic":0===t}),children:e},t)}))}),(0,i.jsx)("td",{className:"table__item","data-title":"\xc9v\xe9nement",children:t.evenement})]})}function O(e){var t=e.className,r=e.database;return(0,i.jsxs)("table",{className:b()("table",t),children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{className:"table__heading-group",children:[(0,i.jsx)("th",{className:"table__heading",children:"Date"}),(0,i.jsx)("th",{className:"table__heading",children:"Type d\u2019\xe9v\xe9nement"}),(0,i.jsx)("th",{className:"table__heading",children:"Degr\xe9 de violence"}),(0,i.jsx)("th",{className:"table__heading",children:"Groupe(s) impliqu\xe9(s)"}),(0,i.jsx)("th",{className:"table__heading",children:"\xc9v\xe9nement"})]})}),(0,i.jsx)("tbody",{children:r.map((function(e){return(0,i.jsx)(w,{database:e},e._id)}))})]})}function F(){var e=m((function(e){return e.showMoreFilters})),t=m((function(e){return e.toggleShowMoreFilters})),r=(0,s.useMemo)((function(){return e?"Cacher les options de filtre":"Afficher d'autre options de filtre"}),[e]);return(0,i.jsx)("div",{className:"flex space-between flex-wrap@sm gap-y-xs mb-lg",children:(0,i.jsx)("button",{className:"button-reset text-bg-fx text-bg-fx--scale-y",onClick:t,children:r})})}function V(){return m((function(e){return e.showMoreFilters}))?(0,i.jsx)("div",{className:"flex gap-md flex-wrap@sm bg-primary-50 p-lg rounded mb-lg",children:(0,i.jsx)("div",{className:"flex-1",children:"test"})}):null}var C=!0;function S(){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)(l().mark((function e(){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j().get("https://server-exd.herokuapp.com/database");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){var e=m((0,s.useCallback)((function(e){return e.filteredDatabase}),[])),t=m((function(e){return e.loadDatabase})),r=B();(0,s.useEffect)((function(){return t(r)}),[r,t]);(function(){var e=m(),t=e.filterByEvents,r=e.filterByType,n=e.filterByDate,l=e.filterSearch,i=e.filterByGroupsInvolved,a=e.filterByDegreeOfViolence,c=e.filterDatabase,o=e.database,u=e.filteredDatabase,f=(0,s.useCallback)((0,d.debounce)((function(){c({type:r,groupeImplique:i,date:n,searchValue:l,evenement:t,degreViolence:a,database:o}),console.log(u)}),300),[l,n,r,t,i,a,o]);(0,s.useEffect)((function(){f()}),[f])})(),m((function(e){return e.toggleShowMoreFilters}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.default,{children:(0,i.jsx)("title",{children:"CEFIR - M\xe9thodologie"})}),(0,i.jsx)("div",{className:"container max-w-xl",children:(0,i.jsxs)("div",{className:"mt-2xl mb-lg",children:[(0,i.jsxs)("h3",{children:[(0,i.jsxs)("span",{role:"img","aria-label":"Un pictogramme de recherche",children:["\ud83d\udd0d"," "]}),"Rechercher - ",null===e||void 0===e?void 0:e.length," r\xe9sultats"]}),(0,i.jsx)("p",{className:"mt-md mb-lg","aria-label":"Informations sur la recherche",children:"Par d\xe9faut, la recherche va inclure toutes les colonnes. Vous pouvez cliquer sur les balises pour les exclure."}),(0,i.jsx)(v,{}),(0,i.jsx)(N,{className:"mt-md"}),(0,i.jsx)("div",{className:"mt-sm mb-lg",children:"Date"}),(0,i.jsx)(F,{}),(0,i.jsx)(V,{}),(0,i.jsx)(O,{database:e.slice(0,50),className:"mb-2xl"})]})})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7169)}])}},function(e){e.O(0,[874,662,453,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);