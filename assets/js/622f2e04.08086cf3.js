"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,f=p["".concat(l,".").concat(g)]||p[g]||m[g]||s;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={title:"msgAfter function",description:"This will help people to get arguments ($msgAfter[2] --\x3e arg3 arg4 ...)",authors:{name:"@devlordduck2",title:"Member - 1096717977304453160",userid:"1096717977304453160",url:"https://discord.com/users/1096717977304453160",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1096717977304453160.png"},tags:["aoi.js","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,o={permalink:"/wikis/posts/1096717977304453160/v71q0o",source:"@site/forums/posts/1096717977304453160/v71q0o.md",title:"msgAfter function",description:"This will help people to get arguments ($msgAfter[2] --\x3e arg3 arg4 ...)",date:"2023-07-10T15:34:14.000Z",formattedDate:"July 10, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@devlordduck2",title:"Member - 1096717977304453160",userid:"1096717977304453160",url:"https://discord.com/users/1096717977304453160",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1096717977304453160.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1096717977304453160.png"}],frontMatter:{title:"msgAfter function",description:"This will help people to get arguments ($msgAfter[2] --\x3e arg3 arg4 ...)",authors:{name:"@devlordduck2",title:"Member - 1096717977304453160",userid:"1096717977304453160",url:"https://discord.com/users/1096717977304453160",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1096717977304453160.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1096717977304453160.png"},tags:["aoi.js","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Prefix custom function",permalink:"/wikis/posts/1077733015846932530/iitgox"},nextItem:{title:"Cat Command",permalink:"/wikis/posts/1096717977304453160/vwxtre"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This function will make it so that you dont have to use $replaceText[$message;$message","[1]"," ;] to get a string after some argument. ($msgAfter","[3]"," -> arg4 arg5 ...)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'bot.functionManager.createFunction({\n  name: "$msgAfter",\n  type: "djs",\n  code: async (d) => {\n    const data = d.util.aoiFunc(d);\n    const [i, split = " "] = data.inside.splits;\n    \n    const argse = d.args\n      \n    function hiFunction(index) { \n      if (index <= 0 || index > argse.length) { \n        return [];\n      } \n\n      return argse.slice(index).join(split);\n    }\n      \n    data.result = hiFunction(i)\n\n    return {\n      code: d.util.setCode(data)\n    };\n  }\n});\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'module.exports = [{\nname: "$alwaysExecute",\n$if: "old",\ncode: `\n$if[$toLowerCase[$message[2]]==say]\n$msgAfter[2]\n$endif\n$onlyIf[$stringStartsWith[$message;<@$clientID>]==true;]\n`\n}]\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"you can also use $msgAfter[1;-] ($msgAfter[1;-] -> arg2-arg3-...)")))}m.isMDXComponent=!0}}]);