"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[52395],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),i=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=i(t),m=r,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return t?a.createElement(g,s(s({ref:n},d),{},{components:t})):a.createElement(g,s({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>g,metadata:()=>h,toc:()=>y});var a=t(3905),r=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&d(e,t,n[t]);if(o)for(var t of o(n))i.call(n,t)&&d(e,t,n[t]);return e},u=(e,n)=>l(e,s(n)),m=(e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))n.indexOf(a)<0&&i.call(e,a)&&(t[a]=e[a]);return t};const g={title:"$channelSendMessage",description:"$channelSendMessage will send a message in a specific channel.",id:"channelSendMessage"},f=void 0,h={unversionedId:"functions/message-related/channelSendMessage",id:"version-6.4.0/functions/message-related/channelSendMessage",title:"$channelSendMessage",description:"$channelSendMessage will send a message in a specific channel.",source:"@site/i18n/ar/docusaurus-plugin-content-docs/version-6.4.0/functions/message-related/channelSendMessage.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/channelSendMessage",permalink:"/ar/docs/functions/message-related/channelSendMessage",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$channelSendMessage",description:"$channelSendMessage will send a message in a specific channel.",id:"channelSendMessage"},sidebar:"docs",previous:{title:"$addMessageReactions",permalink:"/ar/docs/functions/message-related/addMessageReactions"},next:{title:"$deleteMessage",permalink:"/ar/docs/functions/message-related/deleteMessage"}},b={},y=[{value:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",level:2},{value:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",level:2},{value:"\u0645\u062b\u0627\u0644",id:"\u0645\u062b\u0627\u0644",level:2},{value:"Embeds",id:"embeds",level:3}],k={toc:y},v="wrapper";function O(e){var n=e,{components:t}=n,r=m(n,["components"]);return(0,a.kt)(v,u(p(p({},k),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$channelSendMessage")," will send a message in a specific channel."),(0,a.kt)("h2",p({},{id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"}),"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$channelSendMessage[channelID;content;returnID?]\n")),(0,a.kt)("h2",p({},{id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"}),"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u0627\u0644\u0646\u0648\u0639"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u0627\u0644\u062f\u064a\u0633\u0643\u0628\u0631\u0628\u0634\u064a\u0646"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u0645\u0637\u0644\u0648\u0628"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"channelID"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Where the messages shall be sent to."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"content"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"What the content of the message should be."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"returnID?"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"If the message ID should be returned or not. ",(0,a.kt)("br",null)," 1. true. false (default)"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("h2",p({},{id:"\u0645\u062b\u0627\u0644"}),"\u0645\u062b\u0627\u0644"),(0,a.kt)("p",null,'This will send "Hello!" to the current channel:'),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelSendMessage',\n    code: `\n  $channelSendMessage[$channelID;Hello!;false]\n  `\n});\n")),(0,a.kt)("h3",p({},{id:"embeds"}),"Embeds"),(0,a.kt)("p",null,"This will send an embed with description and footer to the current channel:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelSendMessage',\n    code: `\n  $channelSendMessage[$channelID;{newEmbed:{title:Hello}{footer:Bye}};false]\n  `\n});\n")))}O.isMDXComponent=!0}}]);