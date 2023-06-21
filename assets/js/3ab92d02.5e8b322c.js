"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97383],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=r,v=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return t?a.createElement(v,s(s({ref:n},u),{},{components:t})):a.createElement(v,s({ref:n},u))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},80474:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={title:"bot.onBanRemove",description:"An event that gets executed, if a user was unbanned from a server. To let the bot listen to the event, add one bot.onBanRemove() callback inside your main file."},s=void 0,l={unversionedId:"events/bot.onbanremove",id:"version-5.5.5/events/bot.onbanremove",title:"bot.onBanRemove",description:"An event that gets executed, if a user was unbanned from a server. To let the bot listen to the event, add one bot.onBanRemove() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onbanremove.md",sourceDirName:"events",slug:"/events/bot.onbanremove",permalink:"/docs/5.5.5/events/bot.onbanremove",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687348344,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"bot.onBanRemove",description:"An event that gets executed, if a user was unbanned from a server. To let the bot listen to the event, add one bot.onBanRemove() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onBanAdd",permalink:"/docs/5.5.5/events/bot.onbanadd"},next:{title:"bot.onChannelCreate",permalink:"/docs/5.5.5/events/bot.onchannelcreate"}},i={},c=[{value:"Usage:",id:"usage",level:4},{value:"Example Commands:",id:"example-commands",level:4}],u={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback allows the bot to log every time a user gets unbanned form a server."),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.banRemoveCommand({ //command\nchannel: "channel id", //channel where bot logs\ncode: `your code` //your code\n})\n')),(0,r.kt)("h4",{id:"example-commands"},"Example Commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.banRemoveCommand({ \nchannel: "772414449839636490",\ncode: `\n$username was unbanned in $serverName\n`\n})\n')),(0,r.kt)("p",null,"If you have server log variables, add this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.banRemoveCommand({ \nchannel: "$getServerVar[variable]", //Add getServerVar to get the servers log channel (if they set it ofcourse)\ncode: `\n$username was unbanned in $serverName\n`\n})\n')),(0,r.kt)("p",null,"You can use amongst other functions these functions inside your banAddCommand to return data of the user that got banned and the server that banned the user:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/username"},"$username")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/authorid"},"$authorID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/usertag"},"$userTag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/servername"},"$serverName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/guildid"},"$guildID"))))}m.isMDXComponent=!0}}]);