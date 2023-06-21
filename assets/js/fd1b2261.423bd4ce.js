"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7856],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?o.createElement(d,i(i({ref:t},l),{},{components:r})):o.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9239:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"Roblox group info command",description:"Displays info about a roblox group",authors:"supreme",tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,p={permalink:"/wikis/posts/roblox-group-info-command-ebigj",source:"@site/forums/posts/roblox-group-info-command-ebigj.md",title:"Roblox group info command",description:"Displays info about a roblox group",date:"2023-06-21T11:52:24.000Z",formattedDate:"June 21, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@supreme supreme",tags:["Staff"],title:"Moderator",url:"https://discord.com/users/964024743172915220",imageURL:"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif",key:"supreme"}],frontMatter:{title:"Roblox group info command",description:"Displays info about a roblox group",authors:"supreme",tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"randomText advanced",permalink:"/wikis/posts/randomtext-advanced-xzyzwx"},nextItem:{title:"Serverinfo command",permalink:"/wikis/posts/serverinfo-command-6bdeo"}},s={authorsImageUrls:[void 0]},c=[],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    name: "groupinfo",\n    code: `\n    $title[1;Success!] \n    $description[> Group ID: $getobjectproperty[id]\n    > **Group Name:** $getobjectproperty[name]\n    > **Group Description:** $getobjectproperty[description] $if[$getobjectproperty[description]==;undefined;]\n    > **Group OwnerId:** $getobjectproperty[owner.username]\n    > **Group Latest Shout:** $getobjectproperty[shout.body] $if[$getobjectproperty[shout.body]==;undefined;]\n]\n    $color[1;#C3A78E]\n    $footer[1;bob]\n    $createObject[$jsonRequest[https://groups.roblox.com/v1/groups/$message[1]]]\n    $argscheck[1;Group id?]\n    `\n}\n')))}m.isMDXComponent=!0}}]);