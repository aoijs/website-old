"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,v=m["".concat(c,".").concat(u)]||m[u]||f[u]||i;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[m]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>h,frontMatter:()=>v,metadata:()=>y,toc:()=>O});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(a)for(var n of a(t))p.call(t,n)&&s(e,n,t[n]);return e},f=(e,t)=>i(e,l(t)),u=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const v={title:"$removeTextSplitElement",description:"Removes element from given index"},d=void 0,y={unversionedId:"functions/removetextsplitelement",id:"version-5.5.5/functions/removetextsplitelement",title:"$removeTextSplitElement",description:"Removes element from given index",source:"@site/versioned_docs/version-5.5.5/functions/removetextsplitelement.md",sourceDirName:"functions",slug:"/functions/removetextsplitelement",permalink:"/hi/docs/5.5.5/functions/removetextsplitelement",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$removeTextSplitElement",description:"Removes element from given index"},sidebar:"docs",previous:{title:"$removeSplitTextElement",permalink:"/hi/docs/5.5.5/functions/removesplittextelement"},next:{title:"$repeatMessage",permalink:"/hi/docs/5.5.5/functions/repeatmessage"}},b={},O=[],g={toc:O},x="wrapper";function h(e){var t=e,{components:n}=t,o=u(t,["components"]);return(0,r.kt)(x,f(m(m({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function removes values from $textSplit via the given index"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$removeTextSplitElement[index]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "removing",\ncode: `$removeTextSplitElement[2]\n$textSplit[hi/bye/hello;/]`\n})\n//Removes bye completely from the list of values in $textSplit\n')))}h.isMDXComponent=!0}}]);