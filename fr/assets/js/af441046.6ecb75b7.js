"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),u=a,d=g["".concat(o,".").concat(u)]||g[u]||m[u]||s;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>O,frontMatter:()=>d,metadata:()=>b,toc:()=>v});var r=n(3905),a=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>s(e,i(t)),u=(e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$pinMessage",description:"$pinMessage will pin a given message.",id:"pinMessage"},f=void 0,b={unversionedId:"functions/message-related/pinMessage",id:"version-6.4.0/functions/message-related/pinMessage",title:"$pinMessage",description:"$pinMessage will pin a given message.",source:"@site/versioned_docs/version-6.4.0/functions/message-related/pinMessage.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/pinMessage",permalink:"/fr/docs/functions/message-related/pinMessage",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691406512,formattedLastUpdatedAt:"7 ao\xfbt 2023",frontMatter:{title:"$pinMessage",description:"$pinMessage will pin a given message.",id:"pinMessage"},sidebar:"docs",previous:{title:"$messageWebhookID",permalink:"/fr/docs/functions/message-related/messageWebhookID"},next:{title:"$sendCrosspostingMessage",permalink:"/fr/docs/functions/message-related/sendCrosspostingMessage"}},y={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:v},h="wrapper";function O(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(h,m(g(g({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$pinMessage")," will pin a given message."),(0,r.kt)("h2",g({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-php"}),"$pinMessage[messageID?;channelID?]\n")),(0,r.kt)("h2",g({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",g({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"messageID"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"The ID of the message that will be pinned."),(0,r.kt)("td",g({parentName:"tr"},{align:"center"}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"channelID"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"The channel ID of where the message is located in."),(0,r.kt)("td",g({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",g({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will pin the bot's message:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'pinMessage',\n    code: `\n  $pinMessage[$get[id]]\n  $let[id;$sendMessage[Hello!;true]\n  ` // using $let & $get to save the message ID\n});\n")))}O.isMDXComponent=!0}}]);