"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36892],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>k});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>l(e,o(t)),m=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$userBanner",description:"$userBanner will return the profile banner of a specific user.",id:"userBanner"},g=void 0,b={unversionedId:"functions/user-related/userBanner",id:"version-6.4.0/functions/user-related/userBanner",title:"$userBanner",description:"$userBanner will return the profile banner of a specific user.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/userBanner.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/userBanner",permalink:"/es/docs/functions/user-related/userBanner",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$userBanner",description:"$userBanner will return the profile banner of a specific user.",id:"userBanner"},sidebar:"docs",previous:{title:"$userBadges",permalink:"/es/docs/functions/user-related/userBadges"},next:{title:"$userBannerColor",permalink:"/es/docs/functions/user-related/userBannerColor"}},y={},k=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:k},N="wrapper";function O(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(N,d(c(c({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$userBanner")," will return the profile banner of a specific user."),(0,n.kt)("h2",c({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$userBanner[userID?;size?;dynamic?;format?]\n")),(0,n.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"usarioID?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"El ID del usuario."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"size?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"cadena, n\xfamero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The size of the image."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"dynamic?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"booleano"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"1. ",(0,n.kt)("strong",{parentName:"td"},"true")," (default) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"false")),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"format?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The format of the returned image."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"This will return your profile banner:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'userBanner',\n    code: `\n  $userBanner[$authorID;4096;true;webp]\n  `\n});\n")))}O.isMDXComponent=!0}}]);