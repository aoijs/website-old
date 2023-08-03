"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,f=c["".concat(u,".").concat(d)]||c[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>k,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))m.call(t,n)&&s(e,n,t[n]);return e},p=(e,t)=>o(e,i(t)),d=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$setTimeout",description:"$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).",id:"setTimeout"},g=void 0,k={unversionedId:"functions/misc-related/setTimeout",id:"version-6.4.0/functions/misc-related/setTimeout",title:"$setTimeout",description:"$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/setTimeout.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/setTimeout",permalink:"/uk/docs/functions/misc-related/setTimeout",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691051160,formattedLastUpdatedAt:"3 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$setTimeout",description:"$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).",id:"setTimeout"},sidebar:"docs",previous:{title:"$setCacheData",permalink:"/uk/docs/functions/misc-related/setCacheData"},next:{title:"$shutdown",permalink:"/uk/docs/functions/misc-related/shutdown"}},b={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:y},h="wrapper";function N(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(h,p(c(c({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$setTimeout")," will set a timeout for a given action (which will even continue to run after bot restart)."),(0,r.kt)("h2",c({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$setTimeout[awaitedCmd;duration;timeoutData;returnId?;pulse?]\n")),(0,r.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"awaitedCmd"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Awaited command to execute after duration ends."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"duration"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string, number"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"After how much time it will execute / this cannot go over ",(0,r.kt)("strong",{parentName:"td"},"21 days"),"."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"timeoutData"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"object"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Timeout data."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"returnId?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Return timeout ID."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"pulse?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Pulse."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can retrieve timeout data using ",(0,r.kt)("inlineCode",{parentName:"li"},"$timeoutData[name]"),"."),(0,r.kt)("li",{parentName:"ul"},"Note that the duration may not go over ",(0,r.kt)("strong",{parentName:"li"},"21 days"),".")),(0,r.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,'This will send "Hello!" after 10 seconds in the command execution channel:'),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "setTimeout",\n    code: `\n    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]\n    `\n});\n\nbot.timeoutCommand({\n    name: "timeoutCommand",\n    code: `\n    $channelSendMessage[$timeoutData[channelID];Hello, <@$timeoutData[authorID]>!]\n    `\n});\n')))}N.isMDXComponent=!0}}]);