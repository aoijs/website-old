"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[45247],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=l,m=p["".concat(o,".").concat(f)]||p[f]||c[f]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=f;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[p]="string"==typeof e?e:l,i[1]=u;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},54858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>g,default:()=>D,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var r=t(3905),l=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))o.call(n,t)&&d(e,t,n[t]);if(u)for(var t of u(n))s.call(n,t)&&d(e,t,n[t]);return e},c=(e,n)=>a(e,i(n)),f=(e,n)=>{var t={};for(var r in e)o.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&u)for(var r of u(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$guildRulesChannelID",description:"$guildRulesChannelID renverra l'ID du salon de r\xe8glement d\xe9finis d'un serveur donn\xe9.",id:"guildRulesChannelID"},g=void 0,v={unversionedId:"functions/guild-related/guildRulesChannelID",id:"version-6.4.0/functions/guild-related/guildRulesChannelID",title:"$guildRulesChannelID",description:"$guildRulesChannelID renverra l'ID du salon de r\xe8glement d\xe9finis d'un serveur donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildRulesChannelID.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildRulesChannelID",permalink:"/fr/docs/functions/guild-related/guildRulesChannelID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691406512,formattedLastUpdatedAt:"7 ao\xfbt 2023",frontMatter:{title:"$guildRulesChannelID",description:"$guildRulesChannelID renverra l'ID du salon de r\xe8glement d\xe9finis d'un serveur donn\xe9.",id:"guildRulesChannelID"},sidebar:"docs",previous:{title:"$guildRoles",permalink:"/fr/docs/functions/guild-related/guildRoles"},next:{title:"$guildSafetyChannelID",permalink:"/fr/docs/functions/guild-related/guildSafetyChannelID"}},y={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],h={toc:b},O="wrapper";function D(e){var n=e,{components:t}=n,l=f(n,["components"]);return(0,r.kt)(O,c(p(p({},h),l),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$guildRulesChannelID")," renverra l'ID du salon de r\xe8glement d\xe9finis d'un serveur donn\xe9."),(0,r.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$guildRulesChannelID[IDserveur?]\n")),(0,r.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"IDserveur?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"L'ID du serveur."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"faux")))),(0,r.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela renverra l'ID du salon des r\xe8gles du serveur (serveur communautaire seulement):"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'ServeurSalonR\xe8glement',\n    code: `\n  $guildRulesChannelID[$guildID]\n  `\n});\n")))}D.isMDXComponent=!0}}]);