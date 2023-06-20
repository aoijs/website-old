"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28850],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,f=l["".concat(s,".").concat(m)]||l[m]||p[m]||a;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93153:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const a={title:"$randomUserID",description:"Return a random User ID from the current Guild/Server"},i=void 0,c={unversionedId:"functions/randomuserid",id:"version-5.5.5/functions/randomuserid",title:"$randomUserID",description:"Return a random User ID from the current Guild/Server",source:"@site/versioned_docs/version-5.5.5/functions/randomuserid.md",sourceDirName:"functions",slug:"/functions/randomuserid",permalink:"/docs/5.5.5/functions/randomuserid",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687303456,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$randomUserID",description:"Return a random User ID from the current Guild/Server"},sidebar:"docs",previous:{title:"$randomText",permalink:"/docs/5.5.5/functions/randomtext"},next:{title:"$rateLimit",permalink:"/docs/5.5.5/functions/ratelimit"}},s={},u=[],d={toc:u},l="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(l,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns a random user ID from the current guild"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname:"randomuserid",\ncode:`$randomUserID - A random user ID from this Guild`\n})\n')))}p.isMDXComponent=!0}}]);