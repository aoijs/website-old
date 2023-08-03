"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>k});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$boostingSince",description:"$boostingSince devolver\xe1 la fecha en la que alguien empez\xf3 a mejorar un servidor espec\xedfico.",id:"boostingSince"},b=void 0,g={unversionedId:"functions/info-related/boostingSince",id:"version-6.4.0/functions/info-related/boostingSince",title:"$boostingSince",description:"$boostingSince devolver\xe1 la fecha en la que alguien empez\xf3 a mejorar un servidor espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/boostingSince.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/boostingSince",permalink:"/es/docs/functions/info-related/boostingSince",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691051160,formattedLastUpdatedAt:"3 ago 2023",frontMatter:{title:"$boostingSince",description:"$boostingSince devolver\xe1 la fecha en la que alguien empez\xf3 a mejorar un servidor espec\xedfico.",id:"boostingSince"},sidebar:"docs",previous:{title:"$banCount",permalink:"/es/docs/functions/info-related/banCount"},next:{title:"$botCount",permalink:"/es/docs/functions/info-related/botCount"}},v={},k=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:k},N="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(N,d(u(u({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$boostingSince")," devolver\xe1 la fecha en la que alguien empez\xf3 a mejorar un servidor espec\xedfico."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$boostingSince[servidorID?;usarioID?;formato?]\n")),(0,r.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"servidorID?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"El ID del servidor en el que quieres comprobar cu\xe1nto tiempo lleva una persona haciendo mejora."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"usarioID?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"El ID de usuario del que desea comprobar la fecha de inicio de la mejora."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"formato?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"El formato en el que se devolver\xe1 la fecha, que se indica a continuaci\xf3n."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Formato"),(0,r.kt)("th",u({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ms"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"1652643158052")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"date"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Sun May 15 2022 20:32:38 GMT+0100 (Horario de verano brit\xe1nico)")))),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 la fecha en la que empezaste a mejorar (no funcionar\xe1 cuando no est\xe9s mejorando):"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'boostingSince',\n    code: `\n  $boostingSince[$guildID;$authorID;date]\n  `\n});\n")))}O.isMDXComponent=!0}}]);