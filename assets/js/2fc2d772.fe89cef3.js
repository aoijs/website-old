"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57195],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>d});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(r),f=a,d=l["".concat(i,".").concat(f)]||l[f]||m[f]||s;return r?t.createElement(d,o(o({ref:n},p),{},{components:r})):t.createElement(d,o({ref:n},p))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=f;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[l]="string"==typeof e?e:a,o[1]=u;for(var c=2;c<s;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27663:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var t=r(87462),a=(r(67294),r(3905));const s={title:"$username",description:"Returns specified user ID's username, if no argument given, returns author's username"},o=void 0,u={unversionedId:"functions/username",id:"version-5.5.5/functions/username",title:"$username",description:"Returns specified user ID's username, if no argument given, returns author's username",source:"@site/versioned_docs/version-5.5.5/functions/username.md",sourceDirName:"functions",slug:"/functions/username",permalink:"/docs/5.5.5/functions/username",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687348344,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$username",description:"Returns specified user ID's username, if no argument given, returns author's username"},sidebar:"docs",previous:{title:"$messageID",permalink:"/docs/5.5.5/functions/usermessageid"},next:{title:"$userPerms",permalink:"/docs/5.5.5/functions/userperms"}},i={},c=[],p={toc:c},l="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(l,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns the authors/give user id's username"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$username[user ID (optional)]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "username",\ncode: `608358453580136499 username is $username[608358453580136499]!`\n//Returns Leref\n})\n')))}m.isMDXComponent=!0}}]);