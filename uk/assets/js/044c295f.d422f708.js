"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[22858],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>w});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=m(a),u=r,w=s["".concat(c,".").concat(u)]||s[u]||p[u]||i;return a?n.createElement(w,o(o({ref:t},d),{},{components:a})):n.createElement(w,o({ref:t},d))}));function w(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3107:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>N,frontMatter:()=>w,metadata:()=>g,toc:()=>y});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))m.call(t,a)&&d(e,a,t[a]);return e},p=(e,t)=>i(e,o(t)),u=(e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a};const w={title:"$awaitCmdReactions",description:"$awaitCmdReactions will respond when a user reacts to the initial command message with a specific emoji.",id:"awaitCmdReactions"},f=void 0,g={unversionedId:"functions/awaited-related/awaitCmdReactions",id:"version-6.4.0/functions/awaited-related/awaitCmdReactions",title:"$awaitCmdReactions",description:"$awaitCmdReactions will respond when a user reacts to the initial command message with a specific emoji.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/awaited-related/awaitCmdReactions.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/awaitCmdReactions",permalink:"/uk/docs/functions/awaited-related/awaitCmdReactions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$awaitCmdReactions",description:"$awaitCmdReactions will respond when a user reacts to the initial command message with a specific emoji.",id:"awaitCmdReactions"},sidebar:"docs",previous:{title:"$deleteArray",permalink:"/uk/docs/functions/array-related/deleteArray"},next:{title:"$awaitComponents",permalink:"/uk/docs/functions/awaited-related/awaitComponents"}},k={},y=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],b={toc:y},h="wrapper";function N(e){var t=e,{components:a}=t,r=u(t,["components"]);return(0,n.kt)(h,p(s(s({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$awaitCmdReactions")," will respond when a user reacts to the initial command message with a specific emoji."),(0,n.kt)("h2",s({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$awaitCmdReactions[userFilter;time;reactions;commands;errorMsg?;awaitData?]\n")),(0,n.kt)("h2",s({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"userFilter"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"To what the bot will reply ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"everyone")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"specific user ID")," - any user ID"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"time"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"How long the command will last / when the command expires."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"reactions"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Reactions the bot will be listening to, you can separate multiple emojis with a comma ( ",(0,n.kt)("inlineCode",{parentName:"td"},",")," )"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"commands"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Commands that will be executed, you can separate multiple emojis with a comma ( ",(0,n.kt)("inlineCode",{parentName:"td"},",")," )"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"errorMsg?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Error message when command expires."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"awaitData?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u041e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0456 \u0414\u0430\u043d\u0456."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Make sure you have ",(0,n.kt)("inlineCode",{parentName:"strong"},"GuildMessageReactions")," as intent in your main file.")),(0,n.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,n.kt)("p",null,'This will reply to you when you react with the "\u2764\ufe0f" emoji to your initial command message:'),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "awaitCmdReaction",\n    code: `\n  React with "\u2764\ufe0f" for a surprise! \n  $awaitCmdReactions[$authorID;10s;\u2764\ufe0f;awaitedCommandExample;Whoops! You didn\'t react in time..]\n  `\n});\n\nbot.awaitedCommand({\n    name: "awaitedCommandExample",\n    code: `\n  Nice, you reacted with \u2764\ufe0f.\n  `\n});\n')))}N.isMDXComponent=!0}}]);