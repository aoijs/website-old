"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[16230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>j,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$isBot",description:"$isBot comprobar\xe1 si el usuario dado es un bot.",id:"isBot"},b=void 0,y={unversionedId:"functions/util-related/isBot",id:"version-6.4.0/functions/util-related/isBot",title:"$isBot",description:"$isBot comprobar\xe1 si el usuario dado es un bot.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isBot.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isBot",permalink:"/es/docs/functions/util-related/isBot",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715885,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$isBot",description:"$isBot comprobar\xe1 si el usuario dado es un bot.",id:"isBot"},sidebar:"docs",previous:{title:"$isBoosting",permalink:"/es/docs/functions/util-related/isBoosting"},next:{title:"$isChannelManageable",permalink:"/es/docs/functions/util-related/isChannelManageable"}},v={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:g},k="wrapper";function j(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(k,d(c(c({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$isBot")," comprobar\xe1 si el usuario dado es un bot."),(0,n.kt)("h2",c({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$isBot[userID?]\n")),(0,n.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"usarioID?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Id de usuario para comprobar si son bot."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 ",(0,n.kt)("inlineCode",{parentName:"p"},"verdadero")," como tu bot es, obviamente, un bot:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isBot',\n    code: `\n  $isBot[$clientID]\n  `\n});\n")))}j.isMDXComponent=!0}}]);