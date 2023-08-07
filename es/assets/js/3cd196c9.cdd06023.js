"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,g=u["".concat(i,".").concat(s)]||u[s]||c[s]||l;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[u]="string"==typeof e?e:r,o[1]=d;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},62962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>h,frontMatter:()=>g,metadata:()=>b,toc:()=>f});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&m(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&m(e,n,t[n]);return e},c=(e,t)=>l(e,o(t)),s=(e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const g={title:"$getEmbed",description:"$getEmbed devolver\xe1 propiedades sobre un embed dado.",id:"getEmbed"},k=void 0,b={unversionedId:"functions/info-related/getEmbed",id:"version-6.4.0/functions/info-related/getEmbed",title:"$getEmbed",description:"$getEmbed devolver\xe1 propiedades sobre un embed dado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/getEmbed.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getEmbed",permalink:"/es/docs/functions/info-related/getEmbed",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691406512,formattedLastUpdatedAt:"7 ago 2023",frontMatter:{title:"$getEmbed",description:"$getEmbed devolver\xe1 propiedades sobre un embed dado.",id:"getEmbed"},sidebar:"docs",previous:{title:"$getChannelSlowmode",permalink:"/es/docs/functions/info-related/getChannelSlowmode"},next:{title:"$getMessage",permalink:"/es/docs/functions/info-related/getMessage"}},N={},f=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:f},v="wrapper";function h(e){var t=e,{components:n}=t,r=s(t,["components"]);return(0,a.kt)(v,c(u(u({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$getEmbed")," devolver\xe1 propiedades sobre un embed dado."),(0,a.kt)("h2",u({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$getEmbed[canalID?;mensajeID?;\xedndice?;opci\xf3n?]\n")),(0,a.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"canalID"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ID del canal en el que se encuentra el mensaje."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"s\xed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ID de mensaje"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"El ID del mensaje que tiene un embed."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"s\xed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\xedndice"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"El \xedndice del embed."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"s\xed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"opci\xf3n"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"La opci\xf3n a recuperar."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"s\xed")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",null," Opciones ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"title"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T\xedtulo del embed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"description"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Descripci\xf3n del embed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"URL"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"La URL del t\xedtulo.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"color"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Color del embed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"timestamp"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Timestamp situado en el footer del embed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"field<index",">",".name / field1.name"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Titulo del campo.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"field<index",">",".value / field1.value"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Descripci\xf3n del campo.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"thumbnail"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Miniatura (imagen superior derecha).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"image"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Imagen grande en la parte inferior.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"video"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"V\xeddeo/GIF.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"author"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Autor, encima del campo del t\xedtulo.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"footer"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Footer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"files"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Archivos adjuntos.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"createdAt"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Fecha de creaci\xf3n del embed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"hexColor"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Color hexadecimal del embed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"length"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Longitud del embed."))))),(0,a.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto devolver\xe1 la descripci\xf3n de un embed:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getEmbed',\n    code: `\n$getEmbed[$channelID;messageID;1;description] \n  ` // aseg\xfarese de sustituir messageID por el ID real del mensaje \n});\n")))}h.isMDXComponent=!0}}]);