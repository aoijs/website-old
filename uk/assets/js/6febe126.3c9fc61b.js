"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[29812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>k,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$addCmdReactions",description:"$addCmdReactions will react with given emojis to the author's message.",id:"addCmdReactions"},g=void 0,v={unversionedId:"functions/interaction-related/addCmdReactions",id:"version-6.4.0/functions/interaction-related/addCmdReactions",title:"$addCmdReactions",description:"$addCmdReactions will react with given emojis to the author's message.",source:"@site/versioned_docs/version-6.4.0/functions/interaction-related/addCmdReactions.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/addCmdReactions",permalink:"/uk/docs/functions/interaction-related/addCmdReactions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715885,formattedLastUpdatedAt:"11 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$addCmdReactions",description:"$addCmdReactions will react with given emojis to the author's message.",id:"addCmdReactions"},sidebar:"docs",previous:{title:"$addClientReactions",permalink:"/uk/docs/functions/interaction-related/addClientReactions"},next:{title:"$addField",permalink:"/uk/docs/functions/interaction-related/addField"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],h={toc:b},O="wrapper";function k(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(O,u(p(p({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$addCmdReactions")," will react with given emojis to the author's message."),(0,r.kt)("h2",p({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$addCmdReactions[...reactions]\n")),(0,r.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"reactions"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Reactions to add."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,'This will add the given emojis to the author\'s response ("Hello!"):'),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'addCmdReactions',\n    code: `\nHello!\n$addCmdReactions[\ud83e\udde1;\u2764]\n  `\n});\n")))}k.isMDXComponent=!0}}]);