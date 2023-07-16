"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[84596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>v,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&m(e,n,t[n]);return e},d=(e,t)=>l(e,o(t)),u=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$interactionReply",description:"Send an interaction message."},k=void 0,y={unversionedId:"functions/interactionreply",id:"version-5.5.5/functions/interactionreply",title:"$interactionReply",description:"Send an interaction message.",source:"@site/versioned_docs/version-5.5.5/functions/interactionreply.md",sourceDirName:"functions",slug:"/functions/interactionreply",permalink:"/ar/docs/5.5.5/functions/interactionreply",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$interactionReply",description:"Send an interaction message."},sidebar:"docs",previous:{title:"$interactionModal",permalink:"/ar/docs/5.5.5/functions/interactionmodal"},next:{title:"$interactionUpdate",permalink:"/ar/docs/5.5.5/functions/interactionupdate"}},N={},g=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Property Types",id:"property-types",level:3},{value:"Footnotes",id:"footnotes",level:6},{value:"Examples",id:"examples",level:2}],b={toc:g},h="wrapper";function v(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(h,d(c(c({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$interactionReply")," allows you to send an interaction message reply for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Application commands"),(0,a.kt)("li",{parentName:"ul"},"Button replies"),(0,a.kt)("li",{parentName:"ul"},"Select menu replies"),(0,a.kt)("li",{parentName:"ul"},"Modal replies")),(0,a.kt)("h3",c({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$interactionReply[content;embeds?;components?;files?;allowed mentions?;ephemeral?]\n")),(0,a.kt)("h3",c({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",c({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",c({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"content"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"A content message for reply"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"embeds"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"Send embed messages for reply"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"components"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"Adds components for reply"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"files"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"Send file & attachment for reply"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"allowed mentions"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),'Allowing to "x" mentions for reply'),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"ephemeral"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"Makes the reply ephemeral, which is only you can see"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h3",c({},{id:"property-types"}),"Property Types"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CONTENT")," \u2014 ",(0,a.kt)("em",{parentName:"li"},"just text would be enough :)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EMBEDS")," \u2014 ",(0,a.kt)("em",{parentName:"li"},"embed-errors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"COMPONENTS")," \u2014 ",(0,a.kt)("em",{parentName:"li"},"buttons, selection menus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FILES")," \u2014 ",(0,a.kt)("em",{parentName:"li"},"files & attachment embed-errors should be used in here.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ALLOWED_MENTIONS")," \u2014 ",(0,a.kt)("em",{parentName:"li"},'"USERS,ROLES,EVERYONE" choose, like, use :)')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EPHEMERAL")," \u2014 ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"em"},"yes")," or ",(0,a.kt)("inlineCode",{parentName:"em"},"no")," (either you can leave it blank \ud83e\udd2b)")))),(0,a.kt)("h6",c({},{id:"footnotes"}),"Footnotes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},'If you want to make only embed message(s), you can just pass "content" property.')),(0,a.kt)("li",{parentName:"ul"},"Don't forget to add this callback on your main file!")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'events: ["onMessage", "onInteractionCreate"]\n')),(0,a.kt)("h2",c({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,"Let's start with ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," message only."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'//After we used "hello" slash command, client will respond with "Hello, world!"\nbot.interactionCommand({\n  name: "hello",\n  prototype: \'slash\',\n  code: `\n  $interactionReply[\n    Hello, world!\n  ]\n  `\n});\n')),(0,a.kt)("p",null,"Now let's add ",(0,a.kt)("inlineCode",{parentName:"p"},"embeds")," on it, and remove ",(0,a.kt)("inlineCode",{parentName:"p"},"content"),"!"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'//Do not forget to add "SEMI-COLON" to pass next property.\nbot.interactionCommand({\n  name: "hello",\n  prototype: \'slash\',\n  code: `\n  $interactionReply[\n    ;{newEmbed:\n      {description:Hello, world!}\n    }\n  ]\n  `\n});\n')),(0,a.kt)("p",null,"Adding components with files and allowed mentions doesn't sound bad, right?"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.interactionCommand({\n  name: \"hello\",\n  prototype: 'slash',\n  code: `\n  $interactionReply[\n    <@$interactionData[author.id]>\n    ;{newEmbed:\n      {description:Hello, world!}\n    }\n    ;{actionRow:\n      {button:Hi!:1:hiButtonID}\n    }\n    ;{files:Hi $username!:Hello.txt}\n    ;users\n  ]\n  `\n});\n")),(0,a.kt)("p",null,"And lastly, ephemeral:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.interactionCommand({\n  name: \"hello\",\n  prototype: 'slash',\n  code: `\n  $interactionReply[\n    I'm your new waifu, no one can see us.\n    ;\n    ;\n    ;\n    ;\n    ;yes\n  ]\n  `\n});\n")),(0,a.kt)("p",null,"And, that's it! Now you know how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"$interactionReply"),"'s properties!"))}v.isMDXComponent=!0}}]);