(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[147],{4184:function(e,r){var t;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var o=n.apply(null,t);o&&e.push(o)}}else if("object"===i)if(t.toString===Object.prototype.toString)for(var s in t)l.call(t,s)&&t[s]&&e.push(s);else e.push(t.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(r,[]))||(e.exports=t)}()},3147:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var l=t(5893),n=(t(7294),t(4184)),i=t.n(n);function o(e){var r=e.children,t=e.onClick,n=e.isSelected,o=i()("rounded px-sm py-xs tag pointer",{"bg-contrast-100":n,"tag--selected":!n,"bg-error-200":!n});return(0,l.jsx)("li",{"aria-label":"Tag pour exclure ".concat(r),className:"mb-sm",children:(0,l.jsx)("button",{onClick:t,className:o,children:r})})}var s=t(347);function c(){var e=(0,s.Z)(),r=e.toggleFilterByDate,t=e.filterByDate,n=e.toggleFilterByType,i=e.toggleFilterByEvents,c=e.toggleFilterByGroupsInvolved,a=e.toggleFilterByDegreeOfViolence,u=e.filterByType,p=e.filterByGroupsInvolved,d=e.filterByEvents,f=e.filterByDegreeOfViolence;return(0,l.jsxs)("ul",{className:"flex@md gap-x-md gap-y-xs flex-wrap font-bold","aria-label":"La liste de boutons pour pouvoir exclure certaines colonnes de la recherche",children:[(0,l.jsx)(o,{onClick:r,isSelected:t,children:"Date"}),(0,l.jsx)(o,{onClick:n,isSelected:u,children:"Type d\u2019\xe9v\xe9nement"}),(0,l.jsx)(o,{onClick:a,isSelected:f,children:"Degr\xe9 de violence"}),(0,l.jsx)(o,{onClick:c,isSelected:p,children:"Groupe(s) impliqu\xe9(s)"}),(0,l.jsx)(o,{onClick:i,isSelected:d,children:"\xc9v\xe9nement"})]})}}}]);