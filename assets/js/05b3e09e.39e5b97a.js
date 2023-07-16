"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[27920],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var A=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);n&&(A=A.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,A)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,A,a=function(e,n){if(null==e)return{};var t,A,a={},l=Object.keys(e);for(A=0;A<l.length;A++)t=l[A],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(A=0;A<l.length;A++)t=l[A],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=A.createContext({}),d=function(e){var n=A.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return A.createElement(i.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return A.createElement(A.Fragment,{},n)}},C=A.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=d(t),C=a,p=m["".concat(i,".").concat(C)]||m[C]||c[C]||l;return t?A.createElement(p,o(o({ref:n},s),{},{components:t})):A.createElement(p,o({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=C;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r[m]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<l;d++)o[d]=t[d];return A.createElement.apply(null,o)}return A.createElement.apply(null,t)}C.displayName="MDXCreateElement"},24509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>Q,contentTitle:()=>g,default:()=>I,frontMatter:()=>p,metadata:()=>E,toc:()=>u});var A=t(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&s(e,t,n[t]);if(r)for(var t of r(n))d.call(n,t)&&s(e,t,n[t]);return e},c=(e,n)=>l(e,o(n)),C=(e,n)=>{var t={};for(var A in e)i.call(e,A)&&n.indexOf(A)<0&&(t[A]=e[A]);if(null!=e&&r)for(var A of r(e))n.indexOf(A)<0&&d.call(e,A)&&(t[A]=e[A]);return t};const p={title:"Command Handler",description:"Command Handlers can be used for organizing your commands"},g=void 0,E={unversionedId:"guides/command-handler",id:"version-5.5.5/guides/command-handler",title:"Command Handler",description:"Command Handlers can be used for organizing your commands",source:"@site/versioned_docs/version-5.5.5/guides/command-handler.md",sourceDirName:"guides",slug:"/guides/command-handler",permalink:"/docs/5.5.5/guides/command-handler",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"Command Handler",description:"Command Handlers can be used for organizing your commands"},sidebar:"docs",previous:{title:"Command Aliases",permalink:"/docs/5.5.5/guides/command-aliases"},next:{title:"Custom Functions",permalink:"/docs/5.5.5/advanced-guides/custom-functions"}},Q={},u=[{value:"Normal Method Vs Command Handling",id:"normal-method-vs-command-handling",level:2},{value:"How to make a command handler",id:"how-to-make-a-command-handler",level:2},{value:"Step-1: Setting Up The Handler",id:"step-1-setting-up-the-handler",level:3},{value:"Step-2: Creating the file",id:"step-2-creating-the-file",level:3},{value:"Step-3: Adding the code onto the file",id:"step-3-adding-the-code-onto-the-file",level:3},{value:"Multiple Commands On Same File",id:"multiple-commands-on-same-file",level:2},{value:"Example",id:"example",level:3},{value:"Update commands",id:"update-commands",level:3}],h={toc:u},k="wrapper";function I(e){var n=e,{components:a}=n,l=C(n,["components"]);return(0,A.kt)(k,c(m(m({},h),l),{components:a,mdxType:"MDXLayout"}),(0,A.kt)("h2",m({},{id:"normal-method-vs-command-handling"}),"Normal Method Vs Command Handling"),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"Normal methods are good")," but if there are too many commands, then the main file can get messy and it gets hard to find and update certain commands. "),(0,A.kt)("p",null,"Hence to overcome this issue, ",(0,A.kt)("strong",{parentName:"p"},"Command Handler")," are introduced."),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"Command Handlers")," not only solve this issue it also makes the main file neat and the project more organized."),(0,A.kt)("h2",m({},{id:"how-to-make-a-command-handler"}),"How to make a command handler"),(0,A.kt)("h3",m({},{id:"step-1-setting-up-the-handler"}),"Step-1: Setting Up The Handler"),(0,A.kt)("pre",null,(0,A.kt)("code",m({parentName:"pre"},{className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'}),'const aoijs = require("aoi.js")\n\nconst bot = new aoijs.AoiClient({\n  token: "DISCORD BOT TOKEN",\n  prefix: "DISCORD BOT PREFIX",\n  intents: ["GUILDS", "GUILD_MESSAGES"]\n})\n\nbot.onMessage() //Allows to execute Commands\n\nconst loader = new aoijs.LoadCommands(bot)\nloader.load(bot.cmd,"./commands/")\n\n /*\n bot.cmd is object of Collections where the command data will be stored\n "./commands/" is the path of folder where all the commands\' code will be present\n */\n')),(0,A.kt)("hr",null),(0,A.kt)("h3",m({},{id:"step-2-creating-the-file"}),"Step-2: Creating the file"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"After Setting up the handler in your main file, create a folder with the name ",(0,A.kt)("strong",{parentName:"li"},(0,A.kt)("inlineCode",{parentName:"strong"},"commands"))," ",(0,A.kt)("img",{src:t(40882).Z,width:"495",height:"39"})),(0,A.kt)("li",{parentName:"ul"},"After creating the commands folder, ",(0,A.kt)("strong",{parentName:"li"},"create a new sub folder")," (for example: ",(0,A.kt)("strong",{parentName:"li"},(0,A.kt)("inlineCode",{parentName:"strong"},"moderation")),") ",(0,A.kt)("img",{alt:"Subfolder could be used as a category like a discord category",src:t(99701).Z,width:"806",height:"106"})),(0,A.kt)("li",{parentName:"ul"},"After, ",(0,A.kt)("strong",{parentName:"li"},"Create a JavaScript file")," (for example selfKick.js)")),(0,A.kt)("h3",m({},{id:"step-3-adding-the-code-onto-the-file"}),"Step-3: Adding the code onto the file"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Add the following code onto your new file (",(0,A.kt)("inlineCode",{parentName:"li"},"selfkick.js")," in this example)")),(0,A.kt)("pre",null,(0,A.kt)("code",m({parentName:"pre"},{className:"language-javascript",metastring:'title="/commands/selfKick.js"',title:'"/commands/selfKick.js"'}),'module.exports ={\n  name:"selfkick",\n  aliases:["kickmyself"],\n  code:`\n  $kick[$authorID]`\n}\n')),(0,A.kt)("h2",m({},{id:"multiple-commands-on-same-file"}),"Multiple Commands On Same File"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"LoadCommands.load() accepts arrays in module.exports, which allows to add multiple Commands in same file.")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"LoadCommands has a reserved property named ",(0,A.kt)("strong",{parentName:"p"},'"type"')," which determines the type of the command. (not needed always)"))),(0,A.kt)("h3",m({},{id:"example"}),"Example"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Right now we have two files ",(0,A.kt)("strong",{parentName:"li"},(0,A.kt)("inlineCode",{parentName:"strong"},"deletelog.js"))," and ",(0,A.kt)("strong",{parentName:"li"},(0,A.kt)("inlineCode",{parentName:"strong"},"selfkick.js")))),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"deletelog.js is a new command file, it can be anything you want")),(0,A.kt)("p",null,"Lets Combine Them!"),(0,A.kt)("pre",null,(0,A.kt)("code",m({parentName:"pre"},{className:"language-javascript",metastring:'title="/commands/deletelog.js"',title:'"/commands/deletelog.js"'}),' module.exports = [{\n    channel: "$channeLID",\n    name: "deleteLog", // name property is not necessary it\'s just for logging the command (if this is not present channel property will be used for logging)\n    type: "messageDelete",\n    code:`\n    A message was deleted!!\n    Message: "$message"`\n    },\n    {\n  name: "selfkick",\n  aliases:["kickmyself"],\n  code:`\n  $kick[$authorID]`\n}]\n')),(0,A.kt)("h3",m({},{id:"update-commands"}),"Update commands"),(0,A.kt)("p",null,"Using LoadCommands class also enables a special function: ",(0,A.kt)("strong",{parentName:"p"},(0,A.kt)("inlineCode",{parentName:"strong"},"$updateCommands")),"."),(0,A.kt)("p",null,"This function updates all the new changes to the commands without restarting the Client."))}I.isMDXComponent=!0},40882:(e,n,t)=>{t.d(n,{Z:()=>A});const A="data:image/png;base64,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"},99701:(e,n,t)=>{t.d(n,{Z:()=>A});const A="data:image/png;base64,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"}}]);