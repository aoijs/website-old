"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>b,frontMatter:()=>g,metadata:()=>j,toc:()=>y});var i=n(3905),r=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&c(e,n,t[n]);return e},p=(e,t)=>l(e,a(t)),m=(e,t)=>{var n={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&u.call(e,i)&&(n[i]=e[i]);return n};const g={title:"$guildEmojiExists",description:"$guildEmojiExists will check if the given emoji exists in the given guild.",id:"guildEmojiExists"},f=void 0,j={unversionedId:"functions/guild-related/guildEmojiExists",id:"version-6.4.0/functions/guild-related/guildEmojiExists",title:"$guildEmojiExists",description:"$guildEmojiExists will check if the given emoji exists in the given guild.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildEmojiExists.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildEmojiExists",permalink:"/uk/docs/functions/guild-related/guildEmojiExists",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$guildEmojiExists",description:"$guildEmojiExists will check if the given emoji exists in the given guild.",id:"guildEmojiExists"},sidebar:"docs",previous:{title:"$guildDescription",permalink:"/uk/docs/functions/guild-related/guildDescription"},next:{title:"$guildEmojis",permalink:"/uk/docs/functions/guild-related/guildEmojis"}},v={},y=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],k={toc:y},E="wrapper";function b(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,i.kt)(E,p(d(d({},k),r),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$guildEmojiExists")," will check if the given emoji exists in the given guild."),(0,i.kt)("h2",d({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$guildEmojiExists[emojiResolver;guildId?]\n")),(0,i.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",d({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,i.kt)("th",d({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,i.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,i.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",d({parentName:"tr"},{align:null}),"emojiResolver"),(0,i.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,i.kt)("td",d({parentName:"tr"},{align:null}),"Emoji you want to check if it exists."),(0,i.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",d({parentName:"tr"},{align:null}),"guildID?"),(0,i.kt)("td",d({parentName:"tr"},{align:null}),"integer"),(0,i.kt)("td",d({parentName:"tr"},{align:null}),"ID of the guild where the emoji exists."),(0,i.kt)("td",d({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,i.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,i.kt)("p",null,"This will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," as the ",(0,i.kt)("img",d({parentName:"p"},{src:"https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless",alt:"emoji"}))," emoji exists:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildEmojiExists',\n    code: `\n  $guildEmojiExists[<:LerefMoney:1003365344724910191>;$guildID]\n  `\n});\n")))}b.isMDXComponent=!0}}]);