"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[63094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||r;return n?o.createElement(g,i(i({ref:t},m),{},{components:n})):o.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},35060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"bot.onReactionRemove",description:"An event that gets executed, if the bot sees a user removing a reaction on a message. To let the bot listen to the event, add one bot.onReactionRemove() callback inside your mainfile."},i=void 0,c={unversionedId:"events/bot.onreactionremove",id:"version-5.5.5/events/bot.onreactionremove",title:"bot.onReactionRemove",description:"An event that gets executed, if the bot sees a user removing a reaction on a message. To let the bot listen to the event, add one bot.onReactionRemove() callback inside your mainfile.",source:"@site/versioned_docs/version-5.5.5/events/bot.onreactionremove.md",sourceDirName:"events",slug:"/events/bot.onreactionremove",permalink:"/docs/5.5.5/events/bot.onreactionremove",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688885720,formattedLastUpdatedAt:"Jul 9, 2023",frontMatter:{title:"bot.onReactionRemove",description:"An event that gets executed, if the bot sees a user removing a reaction on a message. To let the bot listen to the event, add one bot.onReactionRemove() callback inside your mainfile."},sidebar:"docs",previous:{title:"bot.onReactionAdd",permalink:"/docs/5.5.5/events/bot.onreactionadd"},next:{title:"bot.readyCommand",permalink:"/docs/5.5.5/events/bot.onready"}},s={},l=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Functions:",id:"functions",level:4}],m={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This callback logs ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"every time"))," a user un-reacts to a message"),(0,a.kt)("h4",{id:"usage"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.reactionRemoveCommand({ //command\nchannel: "channel id", //channel where it logs\ncode: `your code` // Message that will be sent to <channel>\n}) \n')),(0,a.kt)("h4",{id:"example-command"},"Example Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.reactionRemoveCommand({\nchannel: "772414449839636490", \ncode: `\n$username has unreacted with $emojiToString\n`\n}) \n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Here&#39;s an example",src:n(50159).Z,width:"264",height:"36"})),(0,a.kt)("h4",{id:"functions"},"Functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/usermessageid"},"$messageID")," => to get the messageID the user reacted"),(0,a.kt)("li",{parentName:"ul"},"$authorMessage => to get the authorID of the messagte the user reacted to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/channelid"},"$channelID "),"=> to get the channelID of the message"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/authorid"},"$authorID")," => the ID of the user that reacted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/username"},"$username")," => the username of the user that reacted")),(0,a.kt)("p",null,"You can use functions like $onlyForChannels or the following functions inside an ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/onlyif"},"$onlyIf")," limiter at the bottom of the code to limit your code to specific reactions etc:"))}d.isMDXComponent=!0},50159:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);