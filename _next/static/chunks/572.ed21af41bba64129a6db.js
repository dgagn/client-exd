(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{8572:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var l=n(5893),i=n(7294),c=n(4184),a=n.n(c);function s(e){var t=e.database,n=a()("table__item",{"text-success-800":t.degreViolence.includes("Aucune"),"text-warning-800":t.degreViolence.includes("faible"),"text-caution-800":t.degreViolence.includes("moyenne"),"text-error-800":t.degreViolence.includes("\xc9lev\xe9e")}),c=a()("circle","mr-sm",{"bg-success-500":t.degreViolence.includes("Aucune"),"bg-warning-500":t.degreViolence.includes("faible"),"bg-caution-500":t.degreViolence.includes("moyenne"),"bg-error-500":t.degreViolence.includes("\xc9lev\xe9e")}),s=(0,i.useMemo)((function(){return t.groupeImplique.split("\n")}),[t.groupeImplique]);return(0,l.jsxs)("tr",{className:"table__group",children:[(0,l.jsx)("td",{className:"table__item","data-title":"Date",children:t.date}),(0,l.jsx)("td",{className:"table__item","data-title":"Type",children:t.type}),(0,l.jsxs)("td",{"data-title":"Degr\xe9",className:n,children:[(0,l.jsx)("div",{className:c}),t.degreViolence]}),(0,l.jsx)("td",{className:"table__item","data-title":"Groupes",children:s.map((function(e,t){return(0,l.jsx)("div",{className:a()({"font-italic":0===t}),children:e},t)}))}),(0,l.jsx)("td",{className:"table__item","data-title":"\xc9v\xe9nement",children:t.evenement})]})}}}]);