"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[16185],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=r,b=u["".concat(i,".").concat(p)]||u[p]||m[p]||o;return t?a.createElement(b,l(l({ref:n},c),{},{components:t})):a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},44999:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const o={title:"bot.onBanAdd",description:"An event that gets executed, if a user was banned on a server. To let the bot listen to the event, add one bot.onBanAdd() callback inside your main file."},l=void 0,s={unversionedId:"events/bot.onbanadd",id:"version-5.5.5/events/bot.onbanadd",title:"bot.onBanAdd",description:"An event that gets executed, if a user was banned on a server. To let the bot listen to the event, add one bot.onBanAdd() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onbanadd.md",sourceDirName:"events",slug:"/events/bot.onbanadd",permalink:"/docs/5.5.5/events/bot.onbanadd",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687303456,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"bot.onBanAdd",description:"An event that gets executed, if a user was banned on a server. To let the bot listen to the event, add one bot.onBanAdd() callback inside your main file."},sidebar:"docs",previous:{title:"bot.loopCommand",permalink:"/docs/5.5.5/events/bot.loopcommand"},next:{title:"bot.onBanRemove",permalink:"/docs/5.5.5/events/bot.onbanremove"}},i={},d=[{value:"Usage:",id:"usage",level:4},{value:"Example Commands:",id:"example-commands",level:4}],c={toc:d},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback allows the bot to log every time someone gets banned from a server."),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.banAddCommand({ //command\nchannel: "channel id", //channel where it\'ll be logged\ncode: `your code` // your code\n})\n')),(0,r.kt)("h4",{id:"example-commands"},"Example Commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.banAddCommand({ \nchannel: "772414449839636490",\ncode: `$username was banned in $serverName`\n})\n')),(0,r.kt)("p",null,"If you have a server variable for logs, you can add this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.banAddCommand({ \nchannel: "$getServerVar[variable]", //Add getServerVar to get the servers log channel (if they set it ofcourse)\ncode: `\n$username was banned in $serverName\n`\n})\n')),(0,r.kt)("p",null,"You can use amongst other functions these functions inside your banAddCommand to return data of the user that got banned and the server that banned the user:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/username"},"$username")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/authorid"},"$authorID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/usertag"},"$userTag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/servername"},"$serverName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/guildid"},"$guildID"))))}m.isMDXComponent=!0}}]);