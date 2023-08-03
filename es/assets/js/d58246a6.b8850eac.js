"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>w,frontMatter:()=>f,metadata:()=>v,toc:()=>y});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>a(e,l(t)),m=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$getChannelSlowmode",description:"$getChannelSlowmode devolver\xe1 el modo pausado de un canal en segundos.",id:"getChannelSlowmode"},g=void 0,v={unversionedId:"functions/info-related/getChannelSlowmode",id:"version-6.4.0/functions/info-related/getChannelSlowmode",title:"$getChannelSlowmode",description:"$getChannelSlowmode devolver\xe1 el modo pausado de un canal en segundos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/getChannelSlowmode.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getChannelSlowmode",permalink:"/es/docs/functions/info-related/getChannelSlowmode",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691051160,formattedLastUpdatedAt:"3 ago 2023",frontMatter:{title:"$getChannelSlowmode",description:"$getChannelSlowmode devolver\xe1 el modo pausado de un canal en segundos.",id:"getChannelSlowmode"},sidebar:"docs",previous:{title:"$getBanReason",permalink:"/es/docs/functions/info-related/getBanReason"},next:{title:"$getEmbed",permalink:"/es/docs/functions/info-related/getEmbed"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:y},O="wrapper";function w(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(O,u(p(p({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getChannelSlowmode")," devolver\xe1 el modo pausado de un canal en segundos."),(0,r.kt)("h2",p({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$getChannelSlowmode[canalID?]\n")),(0,r.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"canalID?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID del canal del que quieres que se devuelva el modo pausado del canal."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"no")))),(0,r.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 el modo pausado del canal en el que se ejecuta el comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getChannelSlowmode',\n    code: `\n  El modo pausado del canal actual es: $getChannelSlowmode[$channelID] segundos\n  `\n});\n")))}w.isMDXComponent=!0}}]);