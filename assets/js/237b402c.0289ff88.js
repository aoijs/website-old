"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[42283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"commands list",description:"A djs code to filter and get your commands list",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png"},tags:["Other","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i="Code",s={permalink:"/wikis/posts/715852000096419900/aswziy",source:"@site/forums/posts/715852000096419900/aswziy.md",title:"commands list",description:"A djs code to filter and get your commands list",date:"2023-07-02T15:47:37.000Z",formattedDate:"July 2, 2023",tags:[{label:"Other",permalink:"/wikis/tags/other"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png",imageURL:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png"}],frontMatter:{title:"commands list",description:"A djs code to filter and get your commands list",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png",imageURL:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png"},tags:["Other","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Reloading the Commands ",permalink:"/wikis/posts/693451182617657394/30bbab"},nextItem:{title:"anti swear command",permalink:"/wikis/posts/715852000096419900/cy1ltq"}},l={authorsImageUrls:[void 0]},c=[{value:"Image Example",id:"image-example",level:2},{value:"Ping for help!",id:"ping-for-help",level:4}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"bot.functionManager.createFunction({\n  name: \"$commands\",\n  type: \"djs\",\n  code: async (d) => {\nconst data = d.util.aoiFunc(d);\nconst [arg] = data.inside.splits;\n\nconst type = arg.split(':')[0]\nconst value = arg.split(':')[1]\n\nconst output = d.client.cmd.default\n  .filter(x=> x[type] == value )\n  .map(x => x.name)\n  .filter(x => x !== '$alwaysExecute')\n  .join(\", \")\n\ndata.result = output\n\nreturn { code: d.util.setCode(data) }\n}\n})\n")),(0,r.kt)("h1",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$commands[category:misc]\n")),(0,r.kt)("p",null,"Option and value are separated by :",(0,r.kt)("br",{parentName:"p"}),"\n","Invalid option and value will cause error\nIts CaSeSeNsItIvE"),(0,r.kt)("h2",{id:"image-example"},"Image Example"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/1022533781040672839/1123866753219432508/image0.jpg?raw=true",alt:"example"})),(0,r.kt)("h4",{id:"ping-for-help"},"Ping for help!"))}m.isMDXComponent=!0}}]);