"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8524],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>w,frontMatter:()=>d,metadata:()=>y,toc:()=>O});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$roleMembersCount",description:"Returns the amount of users with given role ID."},b=void 0,y={unversionedId:"functions/rolememberscount",id:"version-5.5.5/functions/rolememberscount",title:"$roleMembersCount",description:"Returns the amount of users with given role ID.",source:"@site/versioned_docs/version-5.5.5/functions/rolememberscount.md",sourceDirName:"functions",slug:"/functions/rolememberscount",permalink:"/es/docs/5.5.5/functions/rolememberscount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$roleMembersCount",description:"Returns the amount of users with given role ID."},sidebar:"docs",previous:{title:"$roleID",permalink:"/es/docs/5.5.5/functions/roleid"},next:{title:"$roleName",permalink:"/es/docs/5.5.5/functions/rolename"}},v={},O=[],g={toc:O},h="wrapper";function w(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(h,f(p(p({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function will return the amount of users who have the given role using the role ID."),(0,n.kt)("p",null,"Raw usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$roleMembersCount[Role ID]")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "users",\n    code: `\nThere are $roleMembersCount[773353338854572073] users with mod role in dbd.js\n    `\n})\n')),(0,n.kt)("p",null,"This count could not be exact, since this data is get from the cache and not the Discord API, this meaning if some user is not cached, the user will not count."))}w.isMDXComponent=!0}}]);