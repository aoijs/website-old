"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1227],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return t?n.createElement(f,l(l({ref:r},d),{},{components:t})):n.createElement(f,l({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80073:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={title:"$handleError",description:"$handleError will return information about an occurred error.",id:"handleError"},l=void 0,i={unversionedId:"functions/event-related/handleError",id:"version-6.2.6/functions/event-related/handleError",title:"$handleError",description:"$handleError will return information about an occurred error.",source:"@site/versioned_docs/version-6.2.6/functions/event-related/handleError.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/handleError",permalink:"/docs/functions/event-related/handleError",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687348344,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$handleError",description:"$handleError will return information about an occurred error.",id:"handleError"},sidebar:"docs",previous:{title:"$channelUsed",permalink:"/docs/functions/event-related/channelUsed"},next:{title:"$interactionData",permalink:"/docs/functions/event-related/interactionData"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:u},p="wrapper";function s(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$handleError")," will return information about an occurred error."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$handleError[option]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"option"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"What to return the data of. ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"function")," - function name ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"command")," - command name ",(0,a.kt)("br",null)," 3. ",(0,a.kt)("strong",{parentName:"td"},"error")," - error that occurred"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You require ",(0,a.kt)("inlineCode",{parentName:"strong"},'events: ["onFunctionError"]')," in your main file in order to use this function!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.functionErrorCommand({\n    channel: "channelID (optional)",\n    code: `Something went wrong in your "$handleError[command]" command! The function "$handleError[function]" returned the error "$handleError[error]"!`\n});\n')))}s.isMDXComponent=!0}}]);