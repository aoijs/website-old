"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>j,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var r=n(3905),l=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e},p=(e,t)=>a(e,o(t)),m=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$clientMutualGuilds",description:"$clientMutualGuilds devolver\xe1 los servidores mutuos con un usuario dado y el bot.",id:"clientMutualGuilds"},v=void 0,y={unversionedId:"functions/client-related/clientMutualGuilds",id:"version-6.4.0/functions/client-related/clientMutualGuilds",title:"$clientMutualGuilds",description:"$clientMutualGuilds devolver\xe1 los servidores mutuos con un usuario dado y el bot.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/client-related/clientMutualGuilds.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/clientMutualGuilds",permalink:"/es/docs/functions/client-related/clientMutualGuilds",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715885,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$clientMutualGuilds",description:"$clientMutualGuilds devolver\xe1 los servidores mutuos con un usuario dado y el bot.",id:"clientMutualGuilds"},sidebar:"docs",previous:{title:"$clientLeave",permalink:"/es/docs/functions/client-related/clientLeave"},next:{title:"$clientOwnerIDs",permalink:"/es/docs/functions/client-related/clientOwnerIDs"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:g},k="wrapper";function j(e){var t=e,{components:n}=t,l=m(t,["components"]);return(0,r.kt)(k,p(d(d({},O),l),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$clientMutualGuilds")," devolver\xe1 los servidores mutuos con un usuario dado y el bot."),(0,r.kt)("h2",d({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$clientMutualGuilds[usarioID?;sep?]\n")),(0,r.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"usarioID?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"El ID del usuario."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"sep?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"El separador para separar los valores devueltos."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"no")))),(0,r.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 los servidores mutuos de usted y el bot:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'clientMutualGuilds',\n    code: `\n  $clientMutualGuilds[$authorID;, ]\n  `\n});\n")))}j.isMDXComponent=!0}}]);