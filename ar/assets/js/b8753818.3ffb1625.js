"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12540],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},v=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),v=o,d=u["".concat(c,".").concat(v)]||u[v]||f[v]||s;return n?t.createElement(d,a(a({ref:r},p),{},{components:n})):t.createElement(d,a({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=v;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}v.displayName="MDXCreateElement"},56158:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>b,contentTitle:()=>m,default:()=>x,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var t=n(3905),o=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,n)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))c.call(r,n)&&p(e,n,r[n]);if(i)for(var n of i(r))l.call(r,n)&&p(e,n,r[n]);return e},f=(e,r)=>s(e,a(r)),v=(e,r)=>{var n={};for(var t in e)c.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))r.indexOf(t)<0&&l.call(e,t)&&(n[t]=e[t]);return n};const d={title:"$serverChannelExists",description:"Checks if channels exists in the current server. Returns boolean"},m=void 0,y={unversionedId:"functions/serverchannelexists",id:"version-5.5.5/functions/serverchannelexists",title:"$serverChannelExists",description:"Checks if channels exists in the current server. Returns boolean",source:"@site/versioned_docs/version-5.5.5/functions/serverchannelexists.md",sourceDirName:"functions",slug:"/functions/serverchannelexists",permalink:"/ar/docs/5.5.5/functions/serverchannelexists",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$serverChannelExists",description:"Checks if channels exists in the current server. Returns boolean"},sidebar:"docs",previous:{title:"$serverBoostLevel",permalink:"/ar/docs/5.5.5/functions/serverboostlevel"},next:{title:"$serverContentFilter",permalink:"/ar/docs/5.5.5/functions/servercontentfilter"}},b={},h=[],O={toc:h},g="wrapper";function x(e){var r=e,{components:n}=r,o=v(r,["components"]);return(0,t.kt)(g,f(u(u({},O),o),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This function checks if a channel exists in the current server. Returns Boolean"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$serverChannelExists[channelID]\n")),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "serverChannelExists",\ncode: `Does Channel Exist: $serverChannelExists[773361206496329728]`\n})\n')))}x.isMDXComponent=!0}}]);