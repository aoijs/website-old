"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,f=m["".concat(d,".").concat(u)]||m[u]||s[u]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>N,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e},s=(e,t)=>a(e,l(t)),u=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$commandInfo",description:"$commandInfo devolver\xe1 el texto dado de una propiedad.",id:"commandInfo"},v=void 0,b={unversionedId:"functions/info-related/commandInfo",id:"version-6.4.0/functions/info-related/commandInfo",title:"$commandInfo",description:"$commandInfo devolver\xe1 el texto dado de una propiedad.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/commandInfo.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/commandInfo",permalink:"/es/docs/functions/info-related/commandInfo",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572827,formattedLastUpdatedAt:"13 sept 2023",frontMatter:{title:"$commandInfo",description:"$commandInfo devolver\xe1 el texto dado de una propiedad.",id:"commandInfo"},sidebar:"docs",previous:{title:"$commandCode",permalink:"/es/docs/functions/info-related/commandCode"},next:{title:"$commandName",permalink:"/es/docs/functions/info-related/commandName"}},y={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:g},O="wrapper";function N(e){var t=e,{components:n}=t,o=u(t,["components"]);return(0,r.kt)(O,s(m(m({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$commandInfo")," devolver\xe1 el texto dado de una propiedad."),(0,r.kt)("h2",m({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$commandInfo[nombre;opci\xf3n]\n")),(0,r.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"nombre"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Nombre del comando o alias."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"opci\xf3n"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Propiedad a recuperar."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")))),(0,r.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 el uso (definido por las propiedades a\xf1adidas) del comando:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Puedes a\xf1adir lo que quieras, por ejemplo "uso" como se indica a continuaci\xf3n.'),(0,r.kt)("li",{parentName:"ul"},"Puede utilizar alias o el nombre del comando para obtener su informaci\xf3n.")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'commandInfo\',\n    aliases: ["ci", "cmdInfo"],\n    uso: "commandInfo [command]",\n    code: `\n  Uso: $commandInfo[ci;uso]\n  `\n});\n')))}N.isMDXComponent=!0}}]);