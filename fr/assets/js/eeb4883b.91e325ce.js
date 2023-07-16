"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[87690],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=i,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},23910:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>b,default:()=>j,frontMatter:()=>d,metadata:()=>y,toc:()=>O});var n=t(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&p(e,t,r[t]);if(s)for(var t of s(r))l.call(r,t)&&p(e,t,r[t]);return e},m=(e,r)=>o(e,a(r)),f=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const d={title:"$memberExists",description:"Checks if given user ID is in the server."},b=void 0,y={unversionedId:"functions/memberexists",id:"version-5.5.5/functions/memberexists",title:"$memberExists",description:"Checks if given user ID is in the server.",source:"@site/versioned_docs/version-5.5.5/functions/memberexists.md",sourceDirName:"functions",slug:"/functions/memberexists",permalink:"/fr/docs/5.5.5/functions/memberexists",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$memberExists",description:"Checks if given user ID is in the server."},sidebar:"docs",previous:{title:"$maximumMembers",permalink:"/fr/docs/5.5.5/functions/maximummembers"},next:{title:"$memberJoinedDate",permalink:"/fr/docs/5.5.5/functions/memberjoineddate"}},v={},O=[],g={toc:O},h="wrapper";function j(e){var r=e,{components:t}=r,i=f(r,["components"]);return(0,n.kt)(h,m(u(u({},g),i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function checks if the given user is in the current guild"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$memberExists[userID;Guild ID (Optional)]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "ismember",\ncode: `$memberExists[535566311942651924]`\n})\n')))}j.isMDXComponent=!0}}]);