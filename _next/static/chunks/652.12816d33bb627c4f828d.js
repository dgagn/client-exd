(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[652],{908:function(e,l,t){"use strict";t.d(l,{Z:function(){return o}});var r=t(5893),i=(t(7294),t(4184)),n=t.n(i);function o(e){var l=e.children,t=e.onClick,i=e.isSelected,o=n()("rounded px-sm py-xs tag pointer",{"tag--selected":!i});return(0,r.jsx)("li",{"aria-label":"Tag pour exclure ".concat(l),className:"mb-sm",children:(0,r.jsx)("button",{onClick:t,className:o,children:l})})}},7652:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return f}});var r=t(5893),i=t(7294),n=t(908),o=t(6411),c=t(6486);var s=t(374),a=function(e){return{filterByDate:e.filterByDate,toggleFilterByDate:e.toggleFilterByDate,toggleFilterByType:e.toggleFilterByType,toggleFilterByEvents:e.toggleFilterByEvents,toggleFilterByGroupsInvolved:e.toggleFilterByGroupsInvolved,toggleFilterByDegreeOfViolence:e.toggleFilterByDegreeOfViolence,filterByType:e.filterByType,filterByGroupsInvolved:e.filterByGroupsInvolved,filterByEvents:e.filterByEvents,filterByDegreeOfViolence:e.filterByDegreeOfViolence}};function f(){var e=(0,o.Z)(a,s.Z),l=e.toggleFilterByDate,t=e.filterByDate,f=e.toggleFilterByType,g=e.toggleFilterByEvents,y=e.toggleFilterByGroupsInvolved,u=e.toggleFilterByDegreeOfViolence,d=e.filterByType,B=e.filterByGroupsInvolved,v=e.filterByEvents,p=e.filterByDegreeOfViolence;return function(){var e=(0,o.Z)(),l=e.filterByEvents,t=e.filterByType,r=e.filterByDate,n=e.filterSearch,s=e.filterByGroupsInvolved,a=e.filterByDegreeOfViolence,f=e.filterDatabase,g=e.database,y=(0,i.useCallback)((0,c.debounce)((function(){f({type:t,groupsInvolved:s,date:r,filterSearch:n,events:l,degreeOfViolence:a,database:g})}),50),[n,r,t,l,s,a,g]);(0,i.useEffect)((function(){y()}),[y])}(),(0,r.jsxs)("ul",{className:"tag-list flex@md gap-x-md gap-y-xs flex-wrap font-bold","aria-label":"La liste de boutons pour pouvoir exclure certaines colonnes de la recherche",children:[(0,r.jsx)(n.Z,{onClick:l,isSelected:t,children:"Date"}),(0,r.jsx)(n.Z,{onClick:f,isSelected:d,children:"Type d\u2019\xe9v\xe9nement"}),(0,r.jsx)(n.Z,{onClick:u,isSelected:p,children:"Degr\xe9 de violence"}),(0,r.jsx)(n.Z,{onClick:y,isSelected:B,children:"Groupe(s) impliqu\xe9(s)"}),(0,r.jsx)(n.Z,{onClick:g,isSelected:v,children:"\xc9v\xe9nement"})]})}}}]);