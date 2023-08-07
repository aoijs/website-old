"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[88272],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(f,s(s({ref:n},d),{},{components:t})):a.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26491:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>b,default:()=>j,frontMatter:()=>f,metadata:()=>v,toc:()=>O});var a=t(3905),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&d(e,t,n[t]);if(i)for(var t of i(n))l.call(n,t)&&d(e,t,n[t]);return e},u=(e,n)=>o(e,s(n)),m=(e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))n.indexOf(a)<0&&l.call(e,a)&&(t[a]=e[a]);return t};const f={title:"$updateCommands",description:"$updateCommands recargar\xe1 los comandos de tu carpeta de comandos / har\xe1 que los cambios sean efectivos.",id:"updateCommands"},b=void 0,v={unversionedId:"functions/misc-related/updateCommands",id:"version-6.4.0/functions/misc-related/updateCommands",title:"$updateCommands",description:"$updateCommands recargar\xe1 los comandos de tu carpeta de comandos / har\xe1 que los cambios sean efectivos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/updateCommands.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/updateCommands",permalink:"/es/docs/functions/misc-related/updateCommands",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691406512,formattedLastUpdatedAt:"7 ago 2023",frontMatter:{title:"$updateCommands",description:"$updateCommands recargar\xe1 los comandos de tu carpeta de comandos / har\xe1 que los cambios sean efectivos.",id:"updateCommands"},sidebar:"docs",previous:{title:"$timeZone",permalink:"/es/docs/functions/misc-related/timeZone"},next:{title:"$useChannel",permalink:"/es/docs/functions/misc-related/useChannel"}},y={},O=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:O},C="wrapper";function j(e){var n=e,{components:t}=n,r=m(n,["components"]);return(0,a.kt)(C,u(p(p({},g),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$updateCommands")," volver\xe1 a cargar los comandos de tu carpeta de comandos / har\xe1 que los cambios sean efectivos."),(0,a.kt)("h2",p({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$updateCommands\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"S\xf3lo funcionar\xe1 si usas un manejador de comandos, ejemplo a continuaci\xf3n:")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'const { AoiClient, LoadCommands } = require("aoi.js");\n\nconst bot = new AoiClient({\n    token: "DISCORD BOT TOKEN",\n    prefix: "DISCORD BOT PREFIX",\n    intents: ["GuildMessages", "MessageContent", "Guilds"],\n    events: ["onMessage", "onInteractionCreate"],\n    database: {\n        type: "aoi.db",\n        db: require("@akarui/aoi.db"),\n        tables: ["main"],\n        path: "./database/",\n        extraOptions: {\n            dbType: "KeyValue"\n        }\n    }\n});\n\nconst loader = new LoadCommands(bot);\nloader.load(bot.cmd, "./commands/"); // su directorio de comandos.\n')),(0,a.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto actualizar\xe1 los comandos de tu bot sin reiniciarlo:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "updateCommands",\n    code: `\n    $updateCommands\n    `\n});\n')))}j.isMDXComponent=!0}}]);