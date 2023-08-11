"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,b=c["".concat(u,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>O,frontMatter:()=>b,metadata:()=>g,toc:()=>k});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&d(e,n,t[n]);return e},p=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const b={title:"$boostingSince",description:"$boostingSince renvoie la date de d\xe9but du boost de d'un membre d'un serveur sp\xe9cifique.",id:"boostingSince"},f=void 0,g={unversionedId:"functions/info-related/boostingSince",id:"version-6.4.0/functions/info-related/boostingSince",title:"$boostingSince",description:"$boostingSince renvoie la date de d\xe9but du boost de d'un membre d'un serveur sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/boostingSince.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/boostingSince",permalink:"/fr/docs/functions/info-related/boostingSince",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715885,formattedLastUpdatedAt:"11 ao\xfbt 2023",frontMatter:{title:"$boostingSince",description:"$boostingSince renvoie la date de d\xe9but du boost de d'un membre d'un serveur sp\xe9cifique.",id:"boostingSince"},sidebar:"docs",previous:{title:"$banCount",permalink:"/fr/docs/functions/info-related/banCount"},next:{title:"$botCount",permalink:"/fr/docs/functions/info-related/botCount"}},v={},k=[{value:"Usage",id:"usage",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:k},N="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(N,p(c(c({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$boostingSince")," renvoie la date de d\xe9but du boost de d'un membre d'un serveur sp\xe9cifique."),(0,r.kt)("h2",c({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$boostingSince[IDserveur?;IDutilisateur?;format?]\n")),(0,r.kt)("h2",c({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"IDserveur?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"L'ID de la guilde o\xf9 vous voulez v\xe9rifier combien de temps quelqu'un a boost\xe9."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"Faux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"IDutilisateur?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"L'identifiant d'utilisateur dont vous voulez v\xe9rifier la date de d\xe9but de boost."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"Faux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"format?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Le format dans lequel la date sera retourn\xe9e, list\xe9 ci-dessous."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"Faux")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Formater"),(0,r.kt)("th",c({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ms"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"1652643158052")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"date"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Sun May 15 2022 20:32:38 GMT+0100 (Heure d'\xe9t\xe9 britannique)")))),(0,r.kt)("h2",c({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela retournera la date \xe0 laquelle vous avez commenc\xe9 \xe0 booster (ne fonctionnera pas lorsque vous ne boosterez pas) :"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'boostingSince',\n    code: `\n  $boostingSince[$guildID;$authorID;date]\n  `\n});\n")))}O.isMDXComponent=!0}}]);