"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=l,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},21927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>N,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var r=n(3905),l=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>a(e,o(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$setRoleIcon",description:"$setRoleIcon d\xe9finira l'ic\xf4ne d'un r\xf4le sp\xe9cifique.",id:"setRoleIcon"},g=void 0,y={unversionedId:"functions/guild-related/setRoleIcon",id:"version-6.4.0/functions/guild-related/setRoleIcon",title:"$setRoleIcon",description:"$setRoleIcon d\xe9finira l'ic\xf4ne d'un r\xf4le sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/setRoleIcon.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/setRoleIcon",permalink:"/fr/docs/functions/guild-related/setRoleIcon",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572827,formattedLastUpdatedAt:"13 sept. 2023",frontMatter:{title:"$setRoleIcon",description:"$setRoleIcon d\xe9finira l'ic\xf4ne d'un r\xf4le sp\xe9cifique.",id:"setRoleIcon"},sidebar:"docs",previous:{title:"$setRoleColor",permalink:"/fr/docs/functions/guild-related/setRoleColor"},next:{title:"$setRolePosition",permalink:"/fr/docs/functions/guild-related/setRolePosition"}},b={},v=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:v},O="wrapper";function N(e){var t=e,{components:n}=t,l=f(t,["components"]);return(0,r.kt)(O,d(s(s({},k),l),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$setRoleIcon")," d\xe9finira l'ic\xf4ne d'un r\xf4le sp\xe9cifique."),(0,r.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$setRoleIcon[IDserveur;IDr\xf4le;ic\xf4ne]\n")),(0,r.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"IDserveur"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"L'ID du serveur o\xf9 le r\xf4le existe."),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"faux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"IDr\xf4le"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"L'ID du r\xf4le."),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"faux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"ic\xf4ne"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"L'URL de l'ic\xf4ne."),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"faux")))),(0,r.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Ceci changera l'ic\xf4ne d'un r\xf4le donn\xe9 en l'ic\xf4ne sp\xe9cifi\xe9e:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'd\xe9inirR\xf4leIc\xf4ne',\n    code: `\n  $setRoleIcon[$guildID;IDr\xf4le;URLic\xf4ne]\n  `\n});\n")))}N.isMDXComponent=!0}}]);