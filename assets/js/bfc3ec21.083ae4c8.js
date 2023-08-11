"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40260],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91942:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>i(e,l(t)),m=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$userReacted",description:"$userReacted will check if a specified user reacted with a specific emoji to a specific message and return either true or false.",id:"userReacted"},g=void 0,k={unversionedId:"functions/user-related/userReacted",id:"version-6.4.0/functions/user-related/userReacted",title:"$userReacted",description:"$userReacted will check if a specified user reacted with a specific emoji to a specific message and return either true or false.",source:"@site/versioned_docs/version-6.4.0/functions/user-related/userReacted.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/userReacted",permalink:"/docs/functions/user-related/userReacted",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715885,formattedLastUpdatedAt:"Aug 11, 2023",frontMatter:{title:"$userReacted",description:"$userReacted will check if a specified user reacted with a specific emoji to a specific message and return either true or false.",id:"userReacted"},sidebar:"docs",previous:{title:"$userPlatform",permalink:"/docs/functions/user-related/userPlatform"},next:{title:"$userRoleColor",permalink:"/docs/functions/user-related/userRoleColor"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],h={toc:b},v="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(v,d(p(p({},h),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$userReacted")," will check if a specified user reacted with a specific emoji to a specific message and return either true\nor false."),(0,a.kt)("h2",p({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$userReacted[channelID;messageID;userID;emoji]\n")),(0,a.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"guildID"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The guild ID."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"messageID"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The message ID."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userID"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The user ID."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"emoji"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Emoji to check for."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," as the bot reacted to the initial command message:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'userReacted',\n    code: `\n$userReacted[$channelID;$messageID;$clientID;\ud83d\ude29]\n$addCmdReactions[\ud83d\ude29]\n  `\n});\n")))}O.isMDXComponent=!0}}]);