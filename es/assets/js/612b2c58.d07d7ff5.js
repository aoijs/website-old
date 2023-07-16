"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[43413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>P,frontMatter:()=>f,metadata:()=>g,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$setApplicationCommandPermissions",description:"$setApplicationCommandPermissions establecer\xe1 los permisos de un comando espec\xedfico de la aplicaci\xf3n.",id:"setApplicationCommandPermissions"},b=void 0,g={unversionedId:"functions/interaction-related/setApplicationCommandPermissions",id:"version-6.4.0/functions/interaction-related/setApplicationCommandPermissions",title:"$setApplicationCommandPermissions",description:"$setApplicationCommandPermissions establecer\xe1 los permisos de un comando espec\xedfico de la aplicaci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/setApplicationCommandPermissions.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/setApplicationCommandPermissions",permalink:"/es/docs/functions/interaction-related/setApplicationCommandPermissions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$setApplicationCommandPermissions",description:"$setApplicationCommandPermissions establecer\xe1 los permisos de un comando espec\xedfico de la aplicaci\xf3n.",id:"setApplicationCommandPermissions"},sidebar:"docs",previous:{title:"$sendTTS",permalink:"/es/docs/functions/interaction-related/sendTTS"},next:{title:"$slowmode",permalink:"/es/docs/functions/interaction-related/slowmode"}},y={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2}],k={toc:v},O="wrapper";function P(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(O,d(m(m({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"$setApplicationCommandPermissions establecer\xe1 los permisos de un comando espec\xedfico de la aplicaci\xf3n."),(0,r.kt)("h2",m({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$setApplicationCommandPermissions[servidorID/global;ID;...perms]\n")),(0,r.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"servidorID/global"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"entero, cadena"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Tipo de comando de aplicaci\xf3n. ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"global")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"un guildID espec\xedfico")),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ID"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ID del comando de aplicaci\xf3n."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"...permisos"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Permisos para modificar."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")))))}P.isMDXComponent=!0}}]);