"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>k,toc:()=>v});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$addSelectMenu",description:"$addSelectMenu a\xf1adir\xe1 un men\xfa seleccionado al mensaje del bot.",id:"addSelectMenu"},y=void 0,k={unversionedId:"functions/interaction-related/addSelectMenu",id:"version-6.4.0/functions/interaction-related/addSelectMenu",title:"$addSelectMenu",description:"$addSelectMenu a\xf1adir\xe1 un men\xfa seleccionado al mensaje del bot.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/addSelectMenu.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/addSelectMenu",permalink:"/es/docs/functions/interaction-related/addSelectMenu",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572827,formattedLastUpdatedAt:"13 sept 2023",frontMatter:{title:"$addSelectMenu",description:"$addSelectMenu a\xf1adir\xe1 un men\xfa seleccionado al mensaje del bot.",id:"addSelectMenu"},sidebar:"docs",previous:{title:"$addField",permalink:"/es/docs/functions/interaction-related/addField"},next:{title:"$addTimestamp",permalink:"/es/docs/functions/interaction-related/addTimestamp"}},g={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],b={toc:v},N="wrapper";function O(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(N,u(p(p({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$addSelectMenu")," a\xf1adir\xe1 un men\xfa seleccionado al mensaje del bot."),(0,a.kt)("h2",p({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$addSelectMenu[\xedndice;ID personalizado;titular de lugar;valores m\xednimos\n;valores m\xe1ximos;desactivado?;etiqueta:descripci\xf3n:valor:por defecto?:emoji?;...]\n")),(0,a.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\xedndice"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"En la que actionRow aparece el selectMen\xfa, un selectMenu requiere una fila completa para \xe9l solo."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ID personalizado"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"El ID del componente."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"titular de lugar"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Texto del marcador de posici\xf3n SelectMen\xfa."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"valores m\xednimos"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Seleccione Men\xfa m\xednimo de opciones seleccionables"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"valores m\xe1ximos"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Seleccione Men\xfa m\xednimo de opciones seleccionables"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"desactivado"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"booleano"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Si el selectMenu aparecer\xe1 como deshabilitado- ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"Verdadero")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"falso")," (por defecto)"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"options"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Seleccionar opciones de men\xfa separadas por eachother con ",(0,a.kt)("inlineCode",{parentName:"td"},";")," y ",(0,a.kt)("inlineCode",{parentName:"td"},":"),"."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")))),(0,a.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto a\xf1ade un men\xfa seleccionado con dos funciones:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "add-select-menu",\n    code: `\nSeleccione una opci\xf3n.\n\n  $addSelectMenu[1;yourCustomID;This is a placeholder!;1;1;false;A Option:Description of option B:anotherCustomID:false;B Option:Description of option B:andAnotherCustomID:true]\n  `\n});\n\nbot.interactionCommand({\n    name: "yourCustomID",\n    prototype: "selectMenu",\n    code: `\n  $interactionReply[Hola! :);;;;everyone;false]\n  $onlyIf[$interactionData[values[0]]==anotherCustomID;]\n  `\n});\n\nbot.interactionCommand({\n    name: "yourCustomID",\n    prototype: "selectMenu",\n    code: `\n  $interactionReply[Hola! :);;;;everyone;false]\n  $onlyIf[$interactionData[values[0]]==andAnotherCustomID;]\n  `\n});\n/*\nUsamos "$onlyIf[$interactionData[values[0]]==customID;]" para asegurarnos de que esto solo se activar\xe1 para la opci\xf3n de men\xfa de selecci\xf3n correspondiente.\n\nTambi\xe9n aseg\xfarese de tener el evento "onInteractionCreate" en su archivo principal (index.js en la mayor\xeda de los casos).\n\n*/\n')),(0,a.kt)("p",null,"Ejemplo de Manejador:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),'module.exports = [{\n    name: "add-select-menu",\n    code: `\nSeleccione una opci\xf3n.\n\n     $addSelectMenu[1;yourCustomID;This is a placeholder!;1;1;false;A Option:Description of option B:anotherCustomID:false;B Option:Description of option B:andAnotherCustomID:true]\n  `\n}, {\n    name: "yourCustomID",\n    type: "interaction", // aclarando que este comando es una Interacci\xf3n\n    prototype: "selectMenu",\n    code: `\n     $interactionReply[Hola! :);;;;everyone;false]\n     $onlyIf[$interactionData[values[0]]==anotherCustomID;]`\n}, {\n    name: "yourCustomID",\n    type: "interaction", // aclarando que este comando es una Interacci\xf3n\n    prototype: "selectMenu",\n    code: `\n     $interactionReply[Adios! :(;;;;everyone;false]\n     $onlyIf[$interactionData[values[0]]==andAnotherCustomID;]`\n}]\n')))}O.isMDXComponent=!0}}]);