"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[70211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),v=o,f=d["".concat(c,".").concat(v)]||d[v]||p[v]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},19255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>k,frontMatter:()=>f,metadata:()=>b,toc:()=>h});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e},p=(e,t)=>a(e,i(t)),v=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"bot.onGuildLeave",description:"An event that gets executed, if the bot leaves a server. To let the bot listen to the event, add one bot.onGuildLeave() callback inside your mainfile."},m=void 0,b={unversionedId:"events/bot.onguildleave",id:"version-5.5.5/events/bot.onguildleave",title:"bot.onGuildLeave",description:"An event that gets executed, if the bot leaves a server. To let the bot listen to the event, add one bot.onGuildLeave() callback inside your mainfile.",source:"@site/versioned_docs/version-5.5.5/events/bot.onguildleave.md",sourceDirName:"events",slug:"/events/bot.onguildleave",permalink:"/hi/docs/5.5.5/events/bot.onguildleave",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"bot.onGuildLeave",description:"An event that gets executed, if the bot leaves a server. To let the bot listen to the event, add one bot.onGuildLeave() callback inside your mainfile."},sidebar:"docs",previous:{title:"bot.onGuildJoin",permalink:"/hi/docs/5.5.5/events/bot.onguildjoin"},next:{title:"bot.onInteractionCreate",permalink:"/hi/docs/5.5.5/events/bot.oninteractioncreate"}},g={},h=[{value:"Usage:",id:"usage",level:4},{value:"Example command:",id:"example-command",level:4}],y={toc:h},O="wrapper";function k(e){var t=e,{components:n}=t,o=v(t,["components"]);return(0,r.kt)(O,p(d(d({},y),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback will allow the bot to log a message whenever it leaves a server."),(0,r.kt)("h4",d({},{id:"usage"}),"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.guildLeaveCommand({//command\nchannel: "channel id",//the channel where <code> will be sent to\ncode: `your code`//message sent to <channel>\n})\n')),(0,r.kt)("h4",d({},{id:"example-command"}),"Example command:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.guildLeaveCommand({\nchannel: "772414449839636490",\ncode: `\nI have left $serverName!\n`\n})\n')),(0,r.kt)("p",null,"You can use all guild based functions like ",(0,r.kt)("a",d({parentName:"p"},{href:"/hi/docs/5.5.5/functions/servername"}),"$serverName")," or ",(0,r.kt)("a",d({parentName:"p"},{href:"/hi/docs/5.5.5/functions/guildid"}),"$guildID")," in these commands but functions like ",(0,r.kt)("a",d({parentName:"p"},{href:"/hi/docs/5.5.5/functions/getserverinvite"}),"$getServerInvite")," won't work here."))}k.isMDXComponent=!0}}]);