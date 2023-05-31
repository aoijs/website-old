"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[58510],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(t),u=o,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||r;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13913:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const r={title:"$channelCooldown",description:"$channelCooldown will set a cooldown bound to a specific channel after execution of the command.",id:"channelCooldown"},l=void 0,i={unversionedId:"functions/variables/channelCooldown",id:"functions/variables/channelCooldown",title:"$channelCooldown",description:"$channelCooldown will set a cooldown bound to a specific channel after execution of the command.",source:"@site/docs/functions/variables/channelCooldown.md",sourceDirName:"functions/variables",slug:"/functions/variables/channelCooldown",permalink:"/docs/functions/variables/channelCooldown",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1684354560,formattedLastUpdatedAt:"May 17, 2023",frontMatter:{title:"$channelCooldown",description:"$channelCooldown will set a cooldown bound to a specific channel after execution of the command.",id:"channelCooldown"},sidebar:"docs",previous:{title:"$advanceCooldown",permalink:"/docs/functions/variables/advanceCooldown"},next:{title:"$cooldown",permalink:"/docs/functions/variables/cooldown"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],p={toc:d};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$channelCooldown")," will set a channel-based cooldown."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$channelCooldown[time;errorMessage]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are able to retrieve the remaining cooldown in the ",(0,o.kt)("inlineCode",{parentName:"li"},"$channelCooldown")," function by using ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"%time%"))," or any of the\nfollowing below.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"%time%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%year%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%month%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%week%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%day%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%hour%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%min%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%sec%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%ms%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%fullTime%"))))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"time"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Timer of the cooldown"),(0,o.kt)("td",{parentName:"tr",align:"center"},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"errorMessage"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Error message when given cooldown timer is still active."),(0,o.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,"This will set a cooldown for a command in the channel where the command was executed in and returns the remaining\ncooldown:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'channelCooldown',\n    code: `\n  hello\n  $channelCooldown[2m;Please wait %time% to execute this command again.]\n  `\n});\n")))}s.isMDXComponent=!0}}]);