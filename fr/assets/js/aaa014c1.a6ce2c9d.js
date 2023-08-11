"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>N,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&s(e,r,t[r]);return e},c=(e,t)=>o(e,l(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$removeRole",description:"$removeRole supprimera un r\xf4le donn\xe9 \xe0 un membre donn\xe9.",id:"removeRole"},v=void 0,b={unversionedId:"functions/interaction-related/removeRole",id:"version-6.4.0/functions/interaction-related/removeRole",title:"$removeRole",description:"$removeRole supprimera un r\xf4le donn\xe9 \xe0 un membre donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/removeRole.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/removeRole",permalink:"/fr/docs/functions/interaction-related/removeRole",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715885,formattedLastUpdatedAt:"11 ao\xfbt 2023",frontMatter:{title:"$removeRole",description:"$removeRole supprimera un r\xf4le donn\xe9 \xe0 un membre donn\xe9.",id:"removeRole"},sidebar:"docs",previous:{title:"$removeApplicationCommandPermissions",permalink:"/fr/docs/functions/interaction-related/removeApplicationCommandPermissions"},next:{title:"$removeRoles",permalink:"/fr/docs/functions/interaction-related/removeRoles"}},g={},y=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:y},O="wrapper";function N(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(O,c(m(m({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$removeRole")," supprimera un r\xf4le donn\xe9 \xe0 un membre donn\xe9."),(0,n.kt)("h2",m({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$removeRole[IDserveur;IDutilisateur;IDr\xf4le;raison?]\n")),(0,n.kt)("h2",m({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"IDserveur"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"L'ID du serveur o\xf9 se trouvent l'utilisateur et le r\xf4le."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"IDutilisateur"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"L'ID de l'utilisateur dont le r\xf4le sera supprim\xe9."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"IDr\xf4le"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"L'ID du r\xf4le qui sera supprim\xe9."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"raison?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"La raison qui sera affich\xe9e dans les logs du serveur."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"Faux")))),(0,n.kt)("h2",m({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela supprimera un r\xf4le donn\xe9 de vous-m\xeame (le r\xf4le doit \xeatre en dessous du r\xf4le le plus \xe9lev\xe9 du bot) :"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'removeRole',\n    code: `\n   $removeRole[$guildID;$authorID;IDr\xf4le;Une raison.]`\n});\n")))}N.isMDXComponent=!0}}]);