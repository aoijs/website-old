"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[99730],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36215:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const l={title:"$channelPermissionsFor",description:"$channelPermissionsFor will return the channel permissions of a specific user or role.",id:"channelPermissionsFor"},i=void 0,o={unversionedId:"functions/guild-related/channelPermissionsFor",id:"version-6.3.0/functions/guild-related/channelPermissionsFor",title:"$channelPermissionsFor",description:"$channelPermissionsFor will return the channel permissions of a specific user or role.",source:"@site/versioned_docs/version-6.3.0/functions/guild-related/channelPermissionsFor.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/channelPermissionsFor",permalink:"/docs/functions/guild-related/channelPermissionsFor",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689003254,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$channelPermissionsFor",description:"$channelPermissionsFor will return the channel permissions of a specific user or role.",id:"channelPermissionsFor"},sidebar:"docs",previous:{title:"$ban",permalink:"/docs/functions/guild-related/ban"},next:{title:"$cloneChannel",permalink:"/docs/functions/guild-related/cloneChannel"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$channelPermissionsFor")," will return the channel permissions of a specific user or role."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$channelPermissionsFor[userOrRoleID?;channelID?;sep?]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userOrRoleID"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The user or role ID whose permissions shall be returned."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"channelID"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The channel ID of the channel of which the permissions should be returned of."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sep?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},'The separator which will be used to separate the permissions, by default ",".'),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will return your permissions in the channel where you execute the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'channelPermissionsFor',\n    code: `\n  $channelPermissionsFor[$authorID;$channelID;, ]\n  `\n});\n")))}m.isMDXComponent=!0}}]);