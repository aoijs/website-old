"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[69339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var m=2;m<o;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>k,frontMatter:()=>f,metadata:()=>y,toc:()=>h});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))m.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>o(e,s(t)),d=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$message",description:"Returns the message, from the Author."},g=void 0,y={unversionedId:"functions/message",id:"version-5.5.5/functions/message",title:"$message",description:"Returns the message, from the Author.",source:"@site/versioned_docs/version-5.5.5/functions/message.md",sourceDirName:"functions",slug:"/functions/message",permalink:"/hi/docs/5.5.5/functions/message",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$message",description:"Returns the message, from the Author."},sidebar:"docs",previous:{title:"$mentionType",permalink:"/hi/docs/5.5.5/functions/mentiontype"},next:{title:"$messageAttachment",permalink:"/hi/docs/5.5.5/functions/messageattachment"}},b={},h=[{value:"Example Commands:",id:"example-commands",level:4}],v={toc:h},O="wrapper";function k(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(O,u(p(p({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns/repeats the author's message ","(","the content of the command's message",")","."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$message[arg (optional)]")),(0,r.kt)("h4",p({},{id:"example-commands"}),"Example Commands:"),(0,r.kt)("p",null,"Without optional argument: If I do: ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello Aoijs is awesome")," behind the command the bot would return ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello Aoijs is awesome"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "say",\ncode: `\n$message\n`\n})\n')),(0,r.kt)("p",null,"With argument: If I do: ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello Aoijs is awesome")," behind my command the bot would return: ",(0,r.kt)("inlineCode",{parentName:"p"},"Aoijs")," , because it's the second argument of my message."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "say",\ncode: `\n$message[2]\n`\n})\n')),(0,r.kt)("p",null,"Getting the last argument ","(","last word",")"," of the message: ",(0,r.kt)("inlineCode",{parentName:"p"},"$message[last]")," would return the last argument of the author's message.  If I do: ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello Aoijs is awesome")," behind my command the bot would return: ",(0,r.kt)("inlineCode",{parentName:"p"},"awesome")," , because it's the lastargument of my message."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "say",\ncode: `\n$message[last]\n`\n})\n')))}k.isMDXComponent=!0}}]);