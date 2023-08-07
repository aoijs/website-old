"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,f=s["".concat(c,".").concat(u)]||s[u]||p[u]||o;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>w,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))d.call(t,n)&&m(e,n,t[n]);return e},p=(e,t)=>o(e,l(t)),u=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$deleteCommand",description:"$deleteCommand will delete the initial command message.",id:"deleteCommand"},y=void 0,g={unversionedId:"functions/interaction-related/deleteCommand",id:"version-6.4.0/functions/interaction-related/deleteCommand",title:"$deleteCommand",description:"$deleteCommand will delete the initial command message.",source:"@site/versioned_docs/version-6.4.0/functions/interaction-related/deleteCommand.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/deleteCommand",permalink:"/docs/functions/interaction-related/deleteCommand",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691406512,formattedLastUpdatedAt:"Aug 7, 2023",frontMatter:{title:"$deleteCommand",description:"$deleteCommand will delete the initial command message.",id:"deleteCommand"},sidebar:"docs",previous:{title:"$deleteApplicationCommand",permalink:"/docs/functions/interaction-related/deleteApplicationCommand"},next:{title:"$deleteStageInstance",permalink:"/docs/functions/interaction-related/deleteStageInstance"}},v={},b=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:b},C="wrapper";function w(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(C,p(s(s({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$deleteCommand")," will delete the initial command message."),(0,r.kt)("h2",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$deleteCommand\n")),(0,r.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will delete the initial command message:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'deleteCommand',\n    code: `\n  Hello!\n  $deleteCommand\n  `\n});\n")))}w.isMDXComponent=!0}}]);