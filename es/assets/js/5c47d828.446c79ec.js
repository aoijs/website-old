"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50607],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(a),s=r,k=m["".concat(d,".").concat(s)]||m[s]||c[s]||l;return a?n.createElement(k,o(o({ref:e},u),{},{components:a})):n.createElement(k,o({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},35041:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>b,contentTitle:()=>g,default:()=>h,frontMatter:()=>k,metadata:()=>N,toc:()=>f});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&u(t,a,e[a]);if(i)for(var a of i(e))p.call(e,a)&&u(t,a,e[a]);return t},c=(t,e)=>l(t,o(e)),s=(t,e)=>{var a={};for(var n in t)d.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&p.call(t,n)&&(a[n]=t[n]);return a};const k={title:"$editChannel",description:"$editChannel clona un canal.",id:"editChannel"},g=void 0,N={unversionedId:"functions/guild-related/editChannel",id:"version-6.4.0/functions/guild-related/editChannel",title:"$editChannel",description:"$editChannel clona un canal.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/editChannel.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/editChannel",permalink:"/es/docs/functions/guild-related/editChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691406512,formattedLastUpdatedAt:"7 ago 2023",frontMatter:{title:"$editChannel",description:"$editChannel clona un canal.",id:"editChannel"},sidebar:"docs",previous:{title:"$deleteWebhook",permalink:"/es/docs/functions/guild-related/deleteWebhook"},next:{title:"$fetchActiveThreads",permalink:"/es/docs/functions/guild-related/fetchActiveThreads"}},b={},f=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:f},v="wrapper";function h(t){var e=t,{components:a}=e,r=s(e,["components"]);return(0,n.kt)(v,c(m(m({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$editChannel")," clona un canal."),(0,n.kt)("h2",m({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$editChannel[canalID;nombre?;tipo?;posici\xf3n?;tema?;nsfw?;tasa de bits?;l\xedmite de usuario?;padre?;permisos de bloqueo?;permisoSobrescribe?;l\xedmite de tasa por usuario?;predeterminadoAutoArchiveDuration?;regi\xf3n rtc?;razon?]\n")),(0,n.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"canalID"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"El ID del canal que es para clonar."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"s\xed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbfnombre?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"El nuevo nombre del canal."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"tipo?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"El tipo de canal. (listado abajo)"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbfposici\xf3n?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Devuelve la posici\xf3n del canal."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbftema?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"El tipo de canal."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbfnsfw?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Si deber\xeda marcar el canal como NSFW o no."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbftasa de bits?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Tasa de bits del canal de voz."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbfl\xedmite de usuario"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"n\xfamero"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"L\xedmite de usuario del canal de voz."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbfpadre?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"El nuevo padre del canal. (La categor\xeda ID)"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbfbloquear permisos?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Los nuevos canales bloquean los permisos."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbfSobrescribir permisos?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Se sobrescribe el permiso de los nuevos canales."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbfLimitar usuario?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"n\xfamero"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Modo lento del canal editado."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbfdefaultAutoArchiveDuration?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"n\xfamero"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Duraci\xf3n del archivo del hilo/foro. (en ms)"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbfrtcRegi\xf3n?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Regi\xf3n RTC del canal de voz."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbfraz\xf3n?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Raz\xf3n que se mostrar\xe1 en los registros de auditor\xeda del gremio."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota: puede utilizar ",(0,n.kt)("inlineCode",{parentName:"strong"},"$default")," para mantener la propiedad actual.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Tipos de canales"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Tipo de canal"),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Canal de texto"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Canal de voz"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Voice")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Categor\xeda"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Category")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Canal de escenario"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Stage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Hilo privado"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PrivateThread")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Hilo p\xfablico"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PublicThread")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Forum"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Forum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Hilo de anuncio"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"AnnouncementThread")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Canal de anuncio"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Announcement")))),(0,n.kt)("p",null,"Nota: todos los tipos de canal son ",(0,n.kt)("strong",{parentName:"p"},"sensible a may\xfasculas y min\xfasculas"),".")),(0,n.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,'Esto cambiar\xe1 el nombre del canal actual a "i-love-aoijs":'),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'editChannel',\n    code: `\n  $editChannel[$channelID;i-love-aoi-js]\n  `\n});\n")))}h.isMDXComponent=!0}}]);