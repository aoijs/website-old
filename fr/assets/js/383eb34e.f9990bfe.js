"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,y=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return r?a.createElement(y,l(l({ref:t},p),{},{components:r})):a.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8058:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>b,toc:()=>h});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r};const y={title:"$arrayForEach",description:"$arrayForEach ex\xe9cutera une commande attendue pour chaque \xe9l\xe9ment du tableau.",id:"arrayForEach"},f=void 0,b={unversionedId:"functions/array-related/arrayForEach",id:"version-6.4.0/functions/array-related/arrayForEach",title:"$arrayForEach",description:"$arrayForEach ex\xe9cutera une commande attendue pour chaque \xe9l\xe9ment du tableau.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayForEach.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayForEach",permalink:"/fr/docs/functions/array-related/arrayForEach",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691051160,formattedLastUpdatedAt:"3 ao\xfbt 2023",frontMatter:{title:"$arrayForEach",description:"$arrayForEach ex\xe9cutera une commande attendue pour chaque \xe9l\xe9ment du tableau.",id:"arrayForEach"},sidebar:"docs",previous:{title:"$arrayFind",permalink:"/fr/docs/functions/array-related/arrayFind"},next:{title:"$arrayIncludes",permalink:"/fr/docs/functions/array-related/arrayIncludes"}},g={},h=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2}],v={toc:h},k="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(k,s(d(d({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayForEach")," ex\xe9cutera une commande attendue pour chaque \xe9l\xe9ment du tableau."),(0,a.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$arrayForEach[nom;commandeAttendue;donn\xe9esAttendues?]\n")),(0,a.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Nom du tableau."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"commandeAttendue"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"La commande \xe0 ex\xe9cuter."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"donn\xe9esAttendues?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Donn\xe9es attendues."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")))))}O.isMDXComponent=!0}}]);