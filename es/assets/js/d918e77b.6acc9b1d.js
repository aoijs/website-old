"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24974],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(r),c=o,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>N,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))d.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>a(e,l(t)),c=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$removeRoles",description:"$removeRoles eliminar\xe1 un rol dado de un miembro determinado.",id:"removeRoles"},v=void 0,g={unversionedId:"functions/interaction-related/removeRoles",id:"version-6.4.0/functions/interaction-related/removeRoles",title:"$removeRoles",description:"$removeRoles eliminar\xe1 un rol dado de un miembro determinado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/removeRoles.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/removeRoles",permalink:"/es/docs/functions/interaction-related/removeRoles",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715885,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$removeRoles",description:"$removeRoles eliminar\xe1 un rol dado de un miembro determinado.",id:"removeRoles"},sidebar:"docs",previous:{title:"$removeRole",permalink:"/es/docs/functions/interaction-related/removeRole"},next:{title:"$reply",permalink:"/es/docs/functions/interaction-related/reply"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},O="wrapper";function N(e){var t=e,{components:r}=t,o=c(t,["components"]);return(0,n.kt)(O,u(m(m({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$removeRoles")," eliminar\xe1 uno o varios roles de un miembro determinado."),(0,n.kt)("h2",m({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$removeRoles[servidorID;ID de usuario;razon?;...rolesIDs]\n")),(0,n.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"servidorID"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"El ID del gremio donde se encuentra el usuario y el rol."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"usarioID"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"El identificador de usuario del usuario cuyas reacciones ser\xe1n eliminadas."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbfraz\xf3n?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"raz\xf3n que se mostrar\xe1 en los registros de auditor\xeda del gremio."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"...rolesIDs"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Los IDs de los roles que ser\xe1n eliminados."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")))),(0,n.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto eliminar\xe1 un rol dado de ti (el rol debe estar por debajo del rol m\xe1s alto del bot):"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'removeRoles',\n    code: `\n   $removeRoles[$guildID;$authorID;Some reason..;roleID;roleID;...]`\n});\n")))}N.isMDXComponent=!0}}]);