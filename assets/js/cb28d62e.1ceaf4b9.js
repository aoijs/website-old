"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[92639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={title:"$findMembers"},l=void 0,a={unversionedId:"functions/findmembers",id:"version-5.5.5/functions/findmembers",title:"$findMembers",description:"This function will find multiple members from the current guild through a given query",source:"@site/versioned_docs/version-5.5.5/functions/findmembers.md",sourceDirName:"functions",slug:"/functions/findmembers",permalink:"/docs/5.5.5/functions/findmembers",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688312857,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$findMembers"},sidebar:"docs",previous:{title:"$findMember",permalink:"/docs/5.5.5/functions/findmember"},next:{title:"$findNumbers",permalink:"/docs/5.5.5/functions/findnumbers"}},s={},p=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Properties",id:"properties",level:4},{value:"Usage",id:"usage",level:4}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function will find multiple members from the current guild through a given query"),(0,i.kt)("h4",{id:"fields"},"Fields"),(0,i.kt)("p",null,"This function has 1 required field"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Query ","(","Required",")"),(0,i.kt)("li",{parentName:"ol"},"Limit ","(","Optional",")"),(0,i.kt)("li",{parentName:"ol"},"Properties ","(","Optional",")"),(0,i.kt)("li",{parentName:"ol"},"Get ID ","(","optional",")")),(0,i.kt)("p",null,"Raw Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"$findMembers[query;limit (optional);properties (optional);getID (optional)]")),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Query - The query to list possible members"),(0,i.kt)("li",{parentName:"ul"},"Limit - The limit of the member list"),(0,i.kt)("li",{parentName:"ul"},"Properties - The properties showing the list"),(0,i.kt)("li",{parentName:"ul"},"Get ID -")),(0,i.kt)("h4",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"position - The ","#"," position of the member "),(0,i.kt)("li",{parentName:"ul"},"username - The user's username"),(0,i.kt)("li",{parentName:"ul"},"id - The user's id")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Without optional fields"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "fetchMembers",\ncode: `Heres a list:\n$findMembers[$message]\n`\n})\n')),(0,i.kt)("p",null,"With optional fields"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "fetchMembers",\ncode: `Heres a list:\n$findMembers[$message;10;{position} - {username}:{id};no]\n`\n})\n')))}c.isMDXComponent=!0}}]);