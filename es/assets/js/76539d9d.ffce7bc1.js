"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>k,frontMatter:()=>f,metadata:()=>b,toc:()=>h});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&d(e,n,t[n]);return e},s=(e,t)=>l(e,o(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$deleteChannel",description:"$deleteChannel eliminar\xe1 un canal espec\xedfico.",id:"deleteChannel"},g=void 0,b={unversionedId:"functions/guild-related/deleteChannel",id:"version-6.4.0/functions/guild-related/deleteChannel",title:"$deleteChannel",description:"$deleteChannel eliminar\xe1 un canal espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/deleteChannel.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/deleteChannel",permalink:"/es/docs/functions/guild-related/deleteChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691406512,formattedLastUpdatedAt:"7 ago 2023",frontMatter:{title:"$deleteChannel",description:"$deleteChannel eliminar\xe1 un canal espec\xedfico.",id:"deleteChannel"},sidebar:"docs",previous:{title:"$createWebhook",permalink:"/es/docs/functions/guild-related/createWebhook"},next:{title:"$deleteChannels",permalink:"/es/docs/functions/guild-related/deleteChannels"}},y={},h=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:h},O="wrapper";function k(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(O,s(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$deleteChannel")," clona un canal."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$deleteChannel[canalID]\n")),(0,r.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"canalID"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"El ID del canal que se eliminar\xe1."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadera")))),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto crear\xe1 una invitaci\xf3n del canal donde se ejecuta el comando en:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'deleteChannel',\n    code: `\n  $deleteChannel[$channelID]\n  `\n});\n")))}k.isMDXComponent=!0}}]);