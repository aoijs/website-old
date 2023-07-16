"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,u=d["".concat(c,".").concat(m)]||d[m]||h[m]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>C,frontMatter:()=>u,metadata:()=>b,toc:()=>y});var a=n(3905),l=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&p(e,n,t[n]);return e},h=(e,t)=>o(e,r(t)),m=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const u={title:"bot.onChannelDelete",description:"An event that gets executed, if the bot sees a channel deletion. To let the bot listen to the event, add one bot.onChannelDelete() callback inside your main file."},f=void 0,b={unversionedId:"events/bot.onchanneldelete",id:"version-5.5.5/events/bot.onchanneldelete",title:"bot.onChannelDelete",description:"An event that gets executed, if the bot sees a channel deletion. To let the bot listen to the event, add one bot.onChannelDelete() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onchanneldelete.md",sourceDirName:"events",slug:"/events/bot.onchanneldelete",permalink:"/fr/docs/5.5.5/events/bot.onchanneldelete",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"bot.onChannelDelete",description:"An event that gets executed, if the bot sees a channel deletion. To let the bot listen to the event, add one bot.onChannelDelete() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onChannelCreate",permalink:"/fr/docs/5.5.5/events/bot.onchannelcreate"},next:{title:"bot.onChannelUpdate",permalink:"/fr/docs/5.5.5/events/bot.onchannelupdate"}},v={},y=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Options:",id:"options",level:4}],k={toc:y},g="wrapper";function C(e){var t=e,{components:n}=t,l=m(t,["components"]);return(0,a.kt)(g,h(d(d({},k),l),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command gets triggered everytime a channel was deleted on a server."),(0,a.kt)("h4",d({},{id:"usage"}),"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.channelDeleteCommand({ //Command\nchannel: "channel ID", //Channel where its being logged\ncode: `your code` //Code sent to <channel>\n})\n')),(0,a.kt)("h4",d({},{id:"example-command"}),"Example Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.channelDeleteCommand({ \nchannel: "772414449839636490", \ncode: `\nChannel Deleted:\n$oldChannel[name]\n`\n})\n')),(0,a.kt)("h4",d({},{id:"options"}),"Options:"),(0,a.kt)("p",null,"You can use the function ",(0,a.kt)("a",d({parentName:"p"},{href:"/fr/docs/5.5.5/functions/oldchannel"}),"$oldChannel","[","]")," with the options below to return old channel data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," - The ID of the channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," - The name of the channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"topic")," - The topic for this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"position")," - The position of the channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"categoryID")," - The ID of the category this channel belongs to "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"guildID")," - The ID of the guild this channel belongs to "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lastMessageID")," - The ID of the last message sent here ","(","if any",")"," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type")," - The type of this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nsfw")," - Whether the channel is nsfw or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slowmode")," - The slow mode duration for this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rawPosition")," - The raw position for this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deleted")," - Whether the channel was deleted or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"viewable")," - Whether the channel was be seen by the client or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"manageable")," - Whether the client can or not manage this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deleteable")," - Whether this channel can be deleted by the client or not")))}C.isMDXComponent=!0}}]);