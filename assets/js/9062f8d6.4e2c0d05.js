"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),o=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(r),c=a,f=d["".concat(m,".").concat(c)]||d[c]||p[c]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const l={title:"$findMembers",description:"$findMembers will return all members with similar username.",id:"findMembers"},i=void 0,s={unversionedId:"functions/user/findMembers",id:"functions/user/findMembers",title:"$findMembers",description:"$findMembers will return all members with similar username.",source:"@site/docs/functions/user/findMembers.md",sourceDirName:"functions/user",slug:"/functions/user/findMembers",permalink:"/docs/functions/user/findMembers",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1684354560,formattedLastUpdatedAt:"May 17, 2023",frontMatter:{title:"$findMembers",description:"$findMembers will return all members with similar username.",id:"findMembers"},sidebar:"docs",previous:{title:"$findMember",permalink:"/docs/functions/user/findMember"},next:{title:"$memberAvatar",permalink:"/docs/functions/user/memberAvatar"}},m={},o=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Parameters for the <code>format</code> argument",id:"parameters-for-the-format-argument",level:3},{value:"Example(s)",id:"examples",level:2}],u={toc:o};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$findMembers")," will return all members with similar username."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$findMembers[userResolver;limit?;type?;force?;format?]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userResolver"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Query of the username the bot will search for."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit?"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of results the bot will return."),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the search query."),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"force?"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"1. ",(0,a.kt)("strong",{parentName:"td"},"true")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"false")," (default)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"format?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The format the bot will return the found users (listed below)."),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,a.kt)("h3",{id:"parameters-for-the-format-argument"},"Parameters for the ",(0,a.kt)("inlineCode",{parentName:"h3"},"format")," argument"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"{position} -> returns the position"),(0,a.kt)("li",{parentName:"ul"},"{id} -> returns the user ID"),(0,a.kt)("li",{parentName:"ul"},"{username} -> returns the username"),(0,a.kt)("li",{parentName:"ul"},"{nick} -> returns the nickname"),(0,a.kt)("li",{parentName:"ul"},"{tag} -> returns the user discriminator")),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will return twenty members with ",(0,a.kt)("inlineCode",{parentName:"p"},"Leref")," in their username:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'findMembers',\n    code: `\n  $findMembers[Leref;20;startsWith;true;{position}) {username}#{tag}]\n  `\n});\n")))}p.isMDXComponent=!0}}]);