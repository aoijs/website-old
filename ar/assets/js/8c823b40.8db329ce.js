"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),s=r,f=m["".concat(p,".").concat(s)]||m[s]||u[s]||l;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},16773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>C,frontMatter:()=>f,metadata:()=>b,toc:()=>k});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),s=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$deleteApplicationCommand",description:"$deleteApplicationCommand will delete an application command.",id:"deleteApplicationCommand"},g=void 0,b={unversionedId:"functions/interaction-related/deleteApplicationCommand",id:"version-6.4.0/functions/interaction-related/deleteApplicationCommand",title:"$deleteApplicationCommand",description:"$deleteApplicationCommand will delete an application command.",source:"@site/i18n/ar/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/deleteApplicationCommand.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/deleteApplicationCommand",permalink:"/ar/docs/functions/interaction-related/deleteApplicationCommand",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$deleteApplicationCommand",description:"$deleteApplicationCommand will delete an application command.",id:"deleteApplicationCommand"},sidebar:"docs",previous:{title:"$createFile",permalink:"/ar/docs/functions/interaction-related/createFile"},next:{title:"$deleteCommand",permalink:"/ar/docs/functions/interaction-related/deleteCommand"}},y={},k=[{value:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",level:2},{value:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",level:2},{value:"\u0645\u062b\u0627\u0644",id:"\u0645\u062b\u0627\u0644",level:2}],v={toc:k},O="wrapper";function C(e){var t=e,{components:n}=t,r=s(t,["components"]);return(0,a.kt)(O,u(m(m({},v),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$deleteApplicationCommand")," will delete an application command."),(0,a.kt)("h2",m({},{id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"}),"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$deleteApplicationCommand[guildID/global;id]\n")),(0,a.kt)("h2",m({},{id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"}),"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u0627\u0644\u0646\u0648\u0639"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u0627\u0644\u062f\u064a\u0633\u0643\u0628\u0631\u0628\u0634\u064a\u0646"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"\u0645\u0637\u0644\u0648\u0628"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"guildID/global"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string, integer"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Application command type. ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"global")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"specific guildID")),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Application command ID which will be deleted."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h2",m({},{id:"\u0645\u062b\u0627\u0644"}),"\u0645\u062b\u0627\u0644"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'deleteApplicationCommand',\n    code: `\n  $deleteApplicationCommand[$guildID;$getApplicationCommandID[application-command-name;$guildID]]\n  `\n});\n")))}C.isMDXComponent=!0}}]);