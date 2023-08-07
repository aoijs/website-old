"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37407],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>l(e,s(t)),u=(e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$hasEmbeds",description:"$hasEmbeds will check if there are embeds attached to the message.",id:"hasEmbeds"},h=void 0,b={unversionedId:"functions/util-related/hasEmbeds",id:"version-6.4.0/functions/util-related/hasEmbeds",title:"$hasEmbeds",description:"$hasEmbeds will check if there are embeds attached to the message.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/hasEmbeds.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/hasEmbeds",permalink:"/fr/docs/functions/util-related/hasEmbeds",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691406512,formattedLastUpdatedAt:"7 ao\xfbt 2023",frontMatter:{title:"$hasEmbeds",description:"$hasEmbeds will check if there are embeds attached to the message.",id:"hasEmbeds"},sidebar:"docs",previous:{title:"$hasAnyRole",permalink:"/fr/docs/functions/util-related/hasAnyRole"},next:{title:"$hasPerms",permalink:"/fr/docs/functions/util-related/hasPerms"}},g={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:y},v="wrapper";function O(e){var t=e,{components:r}=t,n=u(t,["components"]);return(0,a.kt)(v,m(d(d({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$hasEmbeds")," will check if there are embeds attached to the message."),(0,a.kt)("h2",d({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$hasEmbeds[messageID;channelID]\n")),(0,a.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"messageID"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"ID of the message to check if it contains an embed."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"channelID"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"ID of the channel where the message is located in."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," as there are no embeds attached to your message:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'hasEmbeds',\n    code: `\n  $hasEmbeds[$messageID;$channelID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);