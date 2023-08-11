"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[85497],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>C,contentTitle:()=>v,default:()=>g,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&c(e,t,n[t]);return e},p=(e,n)=>a(e,l(n)),m=(e,n)=>{var t={};for(var r in e)d.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$mentionedChannelsCount",description:"$mentionedChannelsCount devolver\xe1 la cantidad de menciones del canal dentro de un mensaje.",id:"mentionedChannelsCount"},v=void 0,y={unversionedId:"functions/util-related/mentionedChannelsCount",id:"version-6.4.0/functions/util-related/mentionedChannelsCount",title:"$mentionedChannelsCount",description:"$mentionedChannelsCount devolver\xe1 la cantidad de menciones del canal dentro de un mensaje.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/mentionedChannelsCount.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentionedChannelsCount",permalink:"/es/docs/functions/util-related/mentionedChannelsCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715885,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$mentionedChannelsCount",description:"$mentionedChannelsCount devolver\xe1 la cantidad de menciones del canal dentro de un mensaje.",id:"mentionedChannelsCount"},sidebar:"docs",previous:{title:"$mentionedChannels",permalink:"/es/docs/functions/util-related/mentionedChannels"},next:{title:"$mentionedRoles",permalink:"/es/docs/functions/util-related/mentionedRoles"}},C={},b=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:b},h="wrapper";function g(e){var n=e,{components:t}=n,o=m(n,["components"]);return(0,r.kt)(h,p(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$mentionedChannelsCount")," devolver\xe1 la cantidad de menciones del canal dentro de un mensaje."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$mentionedChannelsCount\n")),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 la cantidad de menciones de canal en el texto dado:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'mentionedChannelsCount',\n    code: `\n  $mentionedChannelsCount\n  <#837531672341381190> <#869210515065426012> <#805852932938661900>\n  `\n});\n")))}g.isMDXComponent=!0}}]);