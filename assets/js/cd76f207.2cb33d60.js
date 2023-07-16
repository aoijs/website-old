"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[76079],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>O,frontMatter:()=>d,metadata:()=>g,toc:()=>b});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$stringStartsWith",description:"Determines whether given message starts by another text or not."},y=void 0,g={unversionedId:"functions/stringstartswith",id:"version-5.5.5/functions/stringstartswith",title:"$stringStartsWith",description:"Determines whether given message starts by another text or not.",source:"@site/versioned_docs/version-5.5.5/functions/stringstartswith.md",sourceDirName:"functions",slug:"/functions/stringstartswith",permalink:"/docs/5.5.5/functions/stringstartswith",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$stringStartsWith",description:"Determines whether given message starts by another text or not."},sidebar:"docs",previous:{title:"$stringEndsWith",permalink:"/docs/5.5.5/functions/stringendswith"},next:{title:"$sub",permalink:"/docs/5.5.5/functions/sub"}},h={},b=[],w={toc:b},v="wrapper";function O(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(v,f(u(u({},w),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function will return ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," depending if given text starts with the requested content."),(0,n.kt)("p",null,"Raw usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$stringStartsWith[message;text]")),(0,n.kt)("p",null,"Example usage to return ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," as result:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-text"}),'bot.command({\n    name: "startswith",\n    code: `Does \\`Hey, how are you?\\` start with Hey?\n$stringStartsWith[Hey, how are you?;Hey] // returns true\n    `\n});\n')),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-text"}),'bot.command({\n    name: "startswith",\n    code: `Does \\`Hey, how are you?\\` start with Hello?\n$stringStartsWith[Hey, how are you?;Hey] // returns false\n    `\n});\n')),(0,n.kt)("p",null,"Of course you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"$message")," as definition of the message field to check if the command's message starts with a special content."))}O.isMDXComponent=!0}}]);