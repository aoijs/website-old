"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={title:"$executionTime",description:"$executionTime will return the execution time.",id:"executionTime"},c=void 0,a={unversionedId:"functions/misc-related/executionTime",id:"version-6.3.0/functions/misc-related/executionTime",title:"$executionTime",description:"$executionTime will return the execution time.",source:"@site/versioned_docs/version-6.3.0/functions/misc-related/executionTime.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/executionTime",permalink:"/docs/functions/misc-related/executionTime",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688885720,formattedLastUpdatedAt:"Jul 9, 2023",frontMatter:{title:"$executionTime",description:"$executionTime will return the execution time.",id:"executionTime"},sidebar:"docs",previous:{title:"$exec",permalink:"/docs/functions/misc-related/exec"},next:{title:"$fileExists",permalink:"/docs/functions/misc-related/fileExists"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$executionTime")," will return the execution time."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$executionTime\n")),(0,i.kt)("h2",{id:"examples"},"Example(s)"),(0,i.kt)("p",null,"This will return the execution time of how long it took to execute this code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "executionTime",\n    code: `\n    This took: $executionTime MS\n  `\n});\n')))}m.isMDXComponent=!0}}]);