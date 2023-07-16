"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[67156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>k,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var o=n(3905),r=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>s(e,a(t)),m=(e,t)=>{var n={};for(var o in e)l.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n};const f={title:"bot.onMessage",description:"This event is needed to let your bot see messages so It's needed to respond to commands."},b=void 0,y={unversionedId:"events/bot.onmessage",id:"version-5.5.5/events/bot.onmessage",title:"bot.onMessage",description:"This event is needed to let your bot see messages so It's needed to respond to commands.",source:"@site/versioned_docs/version-5.5.5/events/bot.onmessage.md",sourceDirName:"events",slug:"/events/bot.onmessage",permalink:"/ar/docs/5.5.5/events/bot.onmessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"bot.onMessage",description:"This event is needed to let your bot see messages so It's needed to respond to commands."},sidebar:"docs",previous:{title:"bot.onMemberUpdate",permalink:"/ar/docs/5.5.5/events/bot.onmemberupdate"},next:{title:"bot.onMessageDelete",permalink:"/ar/docs/5.5.5/events/bot.onmessagedelete"}},v={},g=[],O={toc:g},w="wrapper";function k(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,o.kt)(w,d(u(u({},O),r),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This callback is the base to running commands. It will track every message sent. You can NOT use it as an xp system. Instead, use ",(0,o.kt)("a",u({parentName:"p"},{href:"/ar/docs/5.5.5/functions/alwaysexecute"}),"$alwaysExecute"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'const Aoi = require("aoi.js") //allows the use of Aoi.js\n\nconst bot = new Aoi.Bot({ //makes your new bot client\ntoken: "token", \nprefix: "prefix"\n})\n\nbot.onMessage() //allows commands to be made\n')),(0,o.kt)("p",null,"This will allow all the commands and events ","(","bot.command, bot.updateCommand, etc",")"," to run"),(0,o.kt)("p",null,"Hey, did you know you could allow commands to work in dms? Just do this"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'const Aoijs = require("aoi.js") //allows the use of Aoi.js\n\nconst bot = new Aoijs.Bot({ //makes your new bot client\ntoken: "token", \nprefix: "prefix"\n})\n\nbot.onMessage({\n  guildOnly: false //Allows commands to be ran in DMs\n})\n')),(0,o.kt)("p",null,"bot.onMessage","(",")"," is necessary to make your bot work"))}k.isMDXComponent=!0}}]);