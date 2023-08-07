"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>C,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),m=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$addCmdReactions",description:"$addCmdReactions r\xe9agira avec des \xe9motic\xf4nes donn\xe9es au message de l'auteur.",id:"addCmdReactions"},g=void 0,y={unversionedId:"functions/interaction-related/addCmdReactions",id:"version-6.4.0/functions/interaction-related/addCmdReactions",title:"$addCmdReactions",description:"$addCmdReactions r\xe9agira avec des \xe9motic\xf4nes donn\xe9es au message de l'auteur.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/addCmdReactions.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/addCmdReactions",permalink:"/fr/docs/functions/interaction-related/addCmdReactions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691406512,formattedLastUpdatedAt:"7 ao\xfbt 2023",frontMatter:{title:"$addCmdReactions",description:"$addCmdReactions r\xe9agira avec des \xe9motic\xf4nes donn\xe9es au message de l'auteur.",id:"addCmdReactions"},sidebar:"docs",previous:{title:"$addClientReactions",permalink:"/fr/docs/functions/interaction-related/addClientReactions"},next:{title:"$addField",permalink:"/fr/docs/functions/interaction-related/addField"}},v={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],O={toc:b},k="wrapper";function C(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(k,u(p(p({},O),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$addCmdReactions")," r\xe9agira avec des \xe9motic\xf4nes donn\xe9es au message de l'auteur."),(0,a.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$addCmdReactions[...r\xe9actions]\n")),(0,a.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"r\xe9actions"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"R\xe9actions \xe0 ajouter."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")))),(0,a.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("p",null,"Cela ajoutera les \xe9motic\xf4nes donn\xe9es au message de l'auteur :"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'addCmdReactions',\n    code: `\nR\xe9actions ajout\xe9es !\n$addCmdReactions[\ud83e\udde1;\u2764]\n  `\n});\n")))}C.isMDXComponent=!0}}]);