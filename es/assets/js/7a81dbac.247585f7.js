"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[68402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>h,frontMatter:()=>d,metadata:()=>y,toc:()=>O});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&u(e,n,t[n]);return e},f=(e,t)=>i(e,a(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$isEmoji"},v=void 0,y={unversionedId:"functions/isemoji",id:"version-5.5.5/functions/isemoji",title:"$isEmoji",description:"This function returns whether or not the content is a valid emoji, Returns Boolean",source:"@site/versioned_docs/version-5.5.5/functions/isemoji.md",sourceDirName:"functions",slug:"/functions/isemoji",permalink:"/es/docs/5.5.5/functions/isemoji",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$isEmoji"},sidebar:"docs",previous:{title:"$isDefeaned",permalink:"/es/docs/5.5.5/functions/isdefeaned"},next:{title:"$isEveryoneMentioned",permalink:"/es/docs/5.5.5/functions/iseveryonementioned"}},b={},O=[{value:"Usage",id:"usage",level:4},{value:"Options",id:"options",level:4},{value:"Or custom content",id:"or-custom-content",level:5}],j={toc:O},g="wrapper";function h(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(g,f(p(p({},j),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns whether or not the content is a valid emoji, Returns Boolean"),(0,r.kt)("h4",p({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"This function has 1 field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Content ","(","Required",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$isEmoji[content]")),(0,r.kt)("h4",p({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Content - The content that is checked to see if it's an emoji or not")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "isEmoji",\ncode: `\n$isEmoji[<:bruh:775189112474173470>]\n`\n})\n')),(0,r.kt)("h5",p({},{id:"or-custom-content"}),"Or custom content"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "isEmoji",\ncode: `\n$isEmoji[$message]\n`\n})\n')))}h.isMDXComponent=!0}}]);