"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[92101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>h,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>i(e,l(t)),c=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$modifyChannelPerms",description:"$modifyChannelPerms modifiera les d\xe9rogations de permission d'un salon donn\xe9.",id:"modifyChannelPerms"},g=void 0,y={unversionedId:"functions/guild-related/modifyChannelPerms",id:"version-6.4.0/functions/guild-related/modifyChannelPerms",title:"$modifyChannelPerms",description:"$modifyChannelPerms modifiera les d\xe9rogations de permission d'un salon donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/modifyChannelPerms.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/modifyChannelPerms",permalink:"/fr/docs/functions/guild-related/modifyChannelPerms",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572827,formattedLastUpdatedAt:"13 sept. 2023",frontMatter:{title:"$modifyChannelPerms",description:"$modifyChannelPerms modifiera les d\xe9rogations de permission d'un salon donn\xe9.",id:"modifyChannelPerms"},sidebar:"docs",previous:{title:"$messagePublish",permalink:"/fr/docs/functions/guild-related/messagePublish"},next:{title:"$modifyEmoji",permalink:"/fr/docs/functions/guild-related/modifyEmoji"}},k={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],v={toc:b},N="wrapper";function h(e){var t=e,{components:n}=t,a=c(t,["components"]);return(0,r.kt)(N,u(m(m({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$modifyChannelPerms")," modifiera les d\xe9rogations de permission d'un salon donn\xe9."),(0,r.kt)("h2",m({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$modifyChannelPerms[IDsalon;IDroru;...permissions]\n")),(0,r.kt)("h2",m({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"IDsalon"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"L'ID du salon dont vous essayez de modifier ses permissions."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"IDroru"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"L'ID d'un membre ou d'un r\xf4le. ( ",(0,r.kt)("inlineCode",{parentName:"td"},"$guildID")," repr\xe9sente le r\xf4le ",(0,r.kt)("inlineCode",{parentName:"td"},"@everyone"),". )"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"...permissions"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Les permissions qui seront modifi\xe9es."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"-")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Refuser une permission sp\xe9cifique \xe0 quelqu'un ou quelque chose.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"+")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Autoriser une permission sp\xe9cifique \xe0 quelqu'un ou \xe0 quelque chose.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"/")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"R\xe9initialiser une permission sp\xe9cifique \xe0 son \xe9tat par d\xe9faut.")))),(0,r.kt)("p",null,"Vous pouvez trouver toutes les permissions ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",m({parentName:"strong"},{href:"../../../../../../versioned_docs/version-6.4.0/guides/client/2permissionsintents.md"}),"ici")),"."),(0,r.kt)("h2",m({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela permettra \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@everyone")," d'envoyer des messages et d'ajouter des r\xe9actions dans le salon actuel:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'modifierPermissionSalon',\n    code: `\n  $modifyChannelPerms[$channelID;$guildID;+sendmessages;+addreactions]\n  `\n});\n")))}h.isMDXComponent=!0}}]);