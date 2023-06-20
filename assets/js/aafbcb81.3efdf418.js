"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28340],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=o(r),g=a,h=p["".concat(u,".").concat(g)]||p[g]||c[g]||i;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d[p]="string"==typeof e?e:a,l[1]=d;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},29012:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const i={title:"$guildShard",description:"$guildShard will return the guilds of a specific shard.",id:"guildShard"},l=void 0,d={unversionedId:"functions/guild-related/guildShard",id:"version-6.2.6/functions/guild-related/guildShard",title:"$guildShard",description:"$guildShard will return the guilds of a specific shard.",source:"@site/versioned_docs/version-6.2.6/functions/guild-related/guildShard.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildShard",permalink:"/docs/functions/guild-related/guildShard",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687300626,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$guildShard",description:"$guildShard will return the guilds of a specific shard.",id:"guildShard"},sidebar:"docs",previous:{title:"$guildRulesChannelID",permalink:"/docs/functions/guild-related/guildRulesChannelID"},next:{title:"$guildShardID",permalink:"/docs/functions/guild-related/guildShardID"}},u={},o=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Note that this won&#39;t work without sharding. If you&#39;re unsure, review the sharding guide.",id:"note-that-this-wont-work-without-sharding-if-youre-unsure-review-the-sharding-guide",level:4},{value:"Example(s)",id:"examples",level:2}],s={toc:o},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$guildShard")," will return the guilds of a specific shard."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$guildShard[option?;sep?;shardId]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"option?"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Option to return the guilds in ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"id")," (default) ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"name")),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sep?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Separator to separate multiple returned values."),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shardId"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The shard ID."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,a.kt)("h4",{id:"note-that-this-wont-work-without-sharding-if-youre-unsure-review-the-sharding-guide"},"Note that this won't work without sharding. If you're unsure, review the ",(0,a.kt)("a",{parentName:"h4",href:"/docs/guides/sharding"},"sharding guide"),"."),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will return the amount guilds of a shard:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'guildShard',\n    code: `\n  $guildShard[name;, ;$shardID]\n  `\n});\n")))}c.isMDXComponent=!0}}]);