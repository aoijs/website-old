"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[21680],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$userReacted",description:"Returns boolean of user reacted to message, or not."},g=void 0,y={unversionedId:"functions/userreacted",id:"version-5.5.5/functions/userreacted",title:"$userReacted",description:"Returns boolean of user reacted to message, or not.",source:"@site/versioned_docs/version-5.5.5/functions/userreacted.md",sourceDirName:"functions",slug:"/functions/userreacted",permalink:"/docs/5.5.5/functions/userreacted",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$userReacted",description:"Returns boolean of user reacted to message, or not."},sidebar:"docs",previous:{title:"$userPerms",permalink:"/docs/5.5.5/functions/userperms"},next:{title:"$userRoleColor",permalink:"/docs/5.5.5/functions/userrolecolor"}},k={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],h={toc:b},v="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(v,d(u(u({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function will return ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," depending if the user reacted with given emoji to given message ID."),(0,n.kt)("h3",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$userReacted[channelID;messageID;userID;emoji]\n")),(0,n.kt)("h3",u({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"channelID"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"The ID of the channel"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"messageID"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"The ID of the message"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"userID"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"The ID of the user"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"emoji"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"The emoji of the message we will check"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")))),(0,n.kt)("h2",u({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "users-reacted",\n  code: `\n  $userReacted[784626845059383316;808044141048627260;$authorID;<:checkmark:805116425345302528>]\n  `\n// This will check if the user reacted with the :checkmark: emoji to one of my tips.\n});\n')))}O.isMDXComponent=!0}}]);