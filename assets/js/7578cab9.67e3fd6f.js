"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[67237],{3905:(e,r,o)=>{o.d(r,{Zo:()=>p,kt:()=>g});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=t.createContext({}),c=function(e){var r=t.useContext(i),o=r;return e&&(o="function"==typeof e?e(r):s(s({},r),e)),o},p=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),d=n,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return o?t.createElement(g,s(s({ref:r},p),{},{components:o})):t.createElement(g,s({ref:r},p))}));function g(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<a;c++)s[c]=o[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9e4:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=o(87462),n=(o(67294),o(3905));const a={},s="aoiError",l={unversionedId:"class/aoiError",id:"version-5.5.5/class/aoiError",title:"aoiError",description:"AoiError",source:"@site/versioned_docs/version-5.5.5/class/aoiError.md",sourceDirName:"class",slug:"/class/aoiError",permalink:"/docs/5.5.5/class/aoiError",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688312857,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{}},i={},c=[{value:"AoiError",id:"aoierror-1",level:2},{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"makeMessageError()",id:"makemessageerror",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Example",id:"example",level:4},{value:"consoleError()",id:"consoleerror",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Example",id:"example-1",level:4}],p={toc:c},u="wrapper";function m(e){let{components:r,...o}=e;return(0,n.kt)(u,(0,t.Z)({},p,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aoierror"},"aoiError"),(0,n.kt)("h2",{id:"aoierror-1"},"AoiError"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},' A Custom Error Class Utilised By "aoi.js".\n')),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"bot.aoiError = aoijs.AoiError")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"makemessageerror"},"makeMessageError()"),(0,n.kt)("h4",{id:"usage-1"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"AoiError.makeMessageError(client:Bot,channel:TextChannel | ThreadChannel | NewsChannel ,message:MessageOptions,extraOption:MessageExtraOptions)\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/5.5.5/options/messageOptions"},(0,n.kt)("strong",{parentName:"a"},"MessageOptions"))),(0,n.kt)("h4",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},' const aoijs = require(\'aoi.js\');\n const bot = new aoijs.Bot({\n   token: "Your Bot Token",\n   prefix: ".",\n   intents: "all"\n});\n\n bot.AoiError = aoijs.AoiError;\n\n bot.command({\n   name: "custom-error",\n   code: `$djsEval[client.AoiError.makeMessageError(client,channel,{\n          content:"An Error Occurred",\n          embeds:"{newEmbed:{title:This is An Error}{description:Yup This Is An Error}}"\n.         })]`\n});\n')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"consoleerror"},"consoleError()"),(0,n.kt)("h4",{id:"usage-2"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"AoiError.consoleError(ErrorName:string,ErrorMessage:any)\n")),(0,n.kt)("h4",{id:"example-1"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},' const aoijs = require(\'aoi.js\')\n const bot = new aoijs.Bot({\n   token: "Your Bot Token",\n   prefix: "Your Prefix",\n   intents: "all"\n})\n\n bot.AoiError = aoijs.AoiError \n\n bot.command({\n   name: "console-error",\n   code: `$djsEval[client.AoiError.consoleError("CustomError","This Is A Custom Error")]`\n})\n')))}m.isMDXComponent=!0}}]);