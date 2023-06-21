"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[58917],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),d=l,f=s["".concat(m,".").concat(d)]||s[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const a={title:"$removeTextSplitElement",description:"$removeTextSplitElement will remove a specific text split element.",id:"removeTextSplitElement"},i=void 0,o={unversionedId:"functions/misc-related/removeTextSplitElement",id:"version-6.2.6/functions/misc-related/removeTextSplitElement",title:"$removeTextSplitElement",description:"$removeTextSplitElement will remove a specific text split element.",source:"@site/versioned_docs/version-6.2.6/functions/misc-related/removeTextSplitElement.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/removeTextSplitElement",permalink:"/docs/functions/misc-related/removeTextSplitElement",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687348344,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$removeTextSplitElement",description:"$removeTextSplitElement will remove a specific text split element.",id:"removeTextSplitElement"},sidebar:"docs",previous:{title:"$removeSplitTextElement",permalink:"/docs/functions/misc-related/removeSplitTextElement"},next:{title:"$renameFile",permalink:"/docs/functions/misc-related/renameFile"}},m={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"$removeTextSplitElement")," will remove a specific text split element."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$removeTextSplitElement[element]\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"element"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Text split element to remove."),(0,l.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,l.kt)("h2",{id:"examples"},"Example(s)"),(0,l.kt)("p",null,'This will remove the word "bye" from the array:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "removeTextSplitElement",\n    code: `\n    $removeTextSplitElement[bye]\n    $textSplit[hello, bye, aoi.js;, ]\n    `\n});\n')))}u.isMDXComponent=!0}}]);