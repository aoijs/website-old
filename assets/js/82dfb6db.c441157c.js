"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Currency Command Balance",description:"A Simple Currency Balance Command",authors:{name:"@mingweiop",title:"Member - 730782268175679528",userid:"730782268175679528",url:"https://discord.com/users/730782268175679528",image_url:"https://cdn.discordapp.com/avatars/730782268175679528/e090744f6341f2e081bb9a4fa61c19ab.png"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,s={permalink:"/wikis/posts/730782268175679528/c0xpn",source:"@site/forums/posts/730782268175679528/c0xpn.md",title:"Currency Command Balance",description:"A Simple Currency Balance Command",date:"2023-07-02T15:47:37.000Z",formattedDate:"July 2, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@mingweiop",title:"Member - 730782268175679528",userid:"730782268175679528",url:"https://discord.com/users/730782268175679528",image_url:"https://cdn.discordapp.com/avatars/730782268175679528/e090744f6341f2e081bb9a4fa61c19ab.png",imageURL:"https://cdn.discordapp.com/avatars/730782268175679528/e090744f6341f2e081bb9a4fa61c19ab.png"}],frontMatter:{title:"Currency Command Balance",description:"A Simple Currency Balance Command",authors:{name:"@mingweiop",title:"Member - 730782268175679528",userid:"730782268175679528",url:"https://discord.com/users/730782268175679528",image_url:"https://cdn.discordapp.com/avatars/730782268175679528/e090744f6341f2e081bb9a4fa61c19ab.png",imageURL:"https://cdn.discordapp.com/avatars/730782268175679528/e090744f6341f2e081bb9a4fa61c19ab.png"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"randomText advanced",permalink:"/wikis/posts/715852000096419900/xzyzwx"},nextItem:{title:"Simple Moderations Clear",permalink:"/wikis/posts/730782268175679528/j991sn"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\nname: "balance",\naliases: "bal",\ncode: `$author[1;$username[$findUser[$message[1];true]];$userAvatar[$findUser[$message[1];true]]]\n$addField[1;Bank;$numberSeparator[$getGlobalUserVar[bank;$findUser[$message[1];true]]];true]\n$addField[1;Cash;$numberSeparator[$getGlobalUserVar[cash;$findUser[$message[1];true]]];true]\n$color[1;Random]\n$footer[1;Command Executed by: $username]`\n}]\n\n')))}u.isMDXComponent=!0}}]);