"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79604],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(r),g=a,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},39400:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>O,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>l(e,i(t)),g=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$guildShard",description:"$guildShard renverra le nombre de serveurs dans un shard sp\xe9cifique.",id:"guildShard"},f=void 0,h={unversionedId:"functions/guild-related/guildShard",id:"version-6.4.0/functions/guild-related/guildShard",title:"$guildShard",description:"$guildShard renverra le nombre de serveurs dans un shard sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildShard.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildShard",permalink:"/fr/docs/functions/guild-related/guildShard",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691051160,formattedLastUpdatedAt:"3 ao\xfbt 2023",frontMatter:{title:"$guildShard",description:"$guildShard renverra le nombre de serveurs dans un shard sp\xe9cifique.",id:"guildShard"},sidebar:"docs",previous:{title:"$guildSafetyChannelID",permalink:"/fr/docs/functions/guild-related/guildSafetyChannelID"},next:{title:"$guildShardID",permalink:"/fr/docs/functions/guild-related/guildShardID"}},v={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Notez que cela ne fonctionnera pas sans sharding. Si vous n&#39;\xeates pas s\xfbr, consultez le guide sharding.",id:"notez-que-cela-ne-fonctionnera-pas-sans-sharding-si-vous-n\xeates-pas-s\xfbr-consultez-le-guide-sharding",level:4},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:b},k="wrapper";function O(e){var t=e,{components:r}=t,a=g(t,["components"]);return(0,n.kt)(k,c(p(p({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildShard")," renverra le nombre de serveurs dans un shard sp\xe9cifique."),(0,n.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$guildShard[option?;s\xe9parateur?;IDshard]\n")),(0,n.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"option?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Comment renvoyer les serveurs? ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"id")," (par d\xe9faut) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"name")),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"s\xe9parateur?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"S\xe9parateur pour s\xe9parer les serveurs qui seront renvoy\xe9s."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"IDshard"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"L'ID du shard."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")))),(0,n.kt)("h4",p({},{id:"notez-que-cela-ne-fonctionnera-pas-sans-sharding-si-vous-n\xeates-pas-s\xfbr-consultez-le-guide-sharding"}),"Notez que cela ne fonctionnera pas sans sharding. Si vous n'\xeates pas s\xfbr, consultez ",(0,n.kt)("a",p({parentName:"h4"},{href:"/fr/docs/guides/client/sharding"}),"le guide sharding"),"."),(0,n.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela renverra le nombre de serveurs d'un shard:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'serveurShard',\n    code: `\n  $guildShard[name;, ;$shardID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);