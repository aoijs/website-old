"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[3912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var o=n(3905),r=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&d(e,n,t[n]);return e},m=(e,t)=>l(e,a(t)),u=(e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&p.call(e,o)&&(n[o]=e[o]);return n};const f={title:"bot.onRoleDelete",description:"An event that gets executed, if the bot sees a role deletion in one of it's servers. To let the bot listen to the event, add one bot.onRoleDelete() callback inside your main file."},h=void 0,b={unversionedId:"events/bot.onroledelete",id:"version-5.5.5/events/bot.onroledelete",title:"bot.onRoleDelete",description:"An event that gets executed, if the bot sees a role deletion in one of it's servers. To let the bot listen to the event, add one bot.onRoleDelete() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onroledelete.md",sourceDirName:"events",slug:"/events/bot.onroledelete",permalink:"/hi/docs/5.5.5/events/bot.onroledelete",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"bot.onRoleDelete",description:"An event that gets executed, if the bot sees a role deletion in one of it's servers. To let the bot listen to the event, add one bot.onRoleDelete() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onRoleCreate",permalink:"/hi/docs/5.5.5/events/bot.onrolecreate"},next:{title:"bot.onRoleUpdate",permalink:"/hi/docs/5.5.5/events/bot.onroleupdate"}},v={},y=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Options:",id:"options",level:4}],k={toc:y},g="wrapper";function O(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,o.kt)(g,m(c(c({},k),r),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This callback triggers everytime a role gets deleted in a server."),(0,o.kt)("h4",c({},{id:"usage"}),"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.roleDeleteCommand({ //Command\nchannel: "channel ID", //Channel where its being logged\ncode: `your code` //Code sent to <channel>\n})\n')),(0,o.kt)("h4",c({},{id:"example-command"}),"Example Command:"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.roleDeleteCommand({ \nchannel: "772414449839636490", \ncode: `\nRole Deleted:\nOld Name: $oldRole[name]\n`\n})\n')),(0,o.kt)("h4",c({},{id:"options"}),"Options:"),(0,o.kt)("p",null,"You can use these functions ",(0,o.kt)("a",c({parentName:"p"},{href:"/hi/docs/5.5.5/functions/oldrole"}),"$oldRole","[","]")," with the options below to return old  role data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," =",">"," The ID of the role"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),' "The name of the role'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"position")," =",">"," The position of this role"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rawPosition")," =",">"," The position of this role given by the API"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hexColor")," =",">"," The hex color for this role"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"color")," =",">"," The color of this role"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hoist")," =",">"," Whether the role is hoisted or not"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mentionable")," =",">"," Whether the role is mentionable or not"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"guildID")," =",">"," The ID of the guild the role belongs to"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"editable")," =",">"," Whether the role is editable by the client or not"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"managed:")," =",">"," Whether this role is managed by discord or not ","(","bot- & booster-roles",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deleted:")," =",">"," Whether the role was deleted or not"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"permissions")," =",">"," The permissions for this role")))}O.isMDXComponent=!0}}]);