"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[2797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>O,frontMatter:()=>m,metadata:()=>g,toc:()=>h});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$isMuted",description:"$isMuted will check if a specific user is muted within a voice channel.",id:"isMuted"},y=void 0,g={unversionedId:"functions/util-related/isMuted",id:"version-6.4.0/functions/util-related/isMuted",title:"$isMuted",description:"$isMuted will check if a specific user is muted within a voice channel.",source:"@site/i18n/ar/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isMuted.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isMuted",permalink:"/ar/docs/functions/util-related/isMuted",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$isMuted",description:"$isMuted will check if a specific user is muted within a voice channel.",id:"isMuted"},sidebar:"docs",previous:{title:"$isMentioned",permalink:"/ar/docs/functions/util-related/isMentioned"},next:{title:"$isNumber",permalink:"/ar/docs/functions/util-related/isNumber"}},b={},h=[{value:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",level:2},{value:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",level:2},{value:"\u0645\u062b\u0627\u0644",id:"\u0645\u062b\u0627\u0644",level:2}],k={toc:h},v="wrapper";function O(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(v,d(p(p({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$isMuted")," will check if a specific user is muted within a voice channel."),(0,r.kt)("h2",p({},{id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"}),"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$isMuted[userID?;guildID?]\n")),(0,r.kt)("h2",p({},{id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"}),"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u0627\u0644\u0646\u0648\u0639"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u0627\u0644\u062f\u064a\u0633\u0643\u0628\u0631\u0628\u0634\u064a\u0646"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"\u0645\u0637\u0644\u0648\u0628"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"userID"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID of the user you want to check if they're muted."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"guildID?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID of the guild where the user is muted in."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("h2",p({},{id:"\u0645\u062b\u0627\u0644"}),"\u0645\u062b\u0627\u0644"),(0,r.kt)("p",null,"This will check if you're currently muted in a voice channel and returns either ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isMuted',\n    code: `\n  $isMuted[$authorID;$guildID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);