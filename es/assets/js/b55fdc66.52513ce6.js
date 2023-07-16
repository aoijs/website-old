"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5411],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(o),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return o?n.createElement(f,a(a({ref:t},u),{},{components:o})):n.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},54774:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>k,frontMatter:()=>f,metadata:()=>w,toc:()=>v});var n=o(3905),r=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))c.call(t,o)&&u(e,o,t[o]);if(i)for(var o of i(t))s.call(t,o)&&u(e,o,t[o]);return e},p=(e,t)=>l(e,a(t)),m=(e,t)=>{var o={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(o[n]=e[n]);return o};const f={title:"$getCooldownTime"},g=void 0,w={unversionedId:"functions/getcooldowntime",id:"version-5.5.5/functions/getcooldowntime",title:"$getCooldownTime",description:"This function will allow you to get the resting cooldown time for an user/server or globalUser  type of cooldown, for certain user in the requested command.",source:"@site/versioned_docs/version-5.5.5/functions/getcooldowntime.md",sourceDirName:"functions",slug:"/functions/getcooldowntime",permalink:"/es/docs/5.5.5/functions/getcooldowntime",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$getCooldownTime"},sidebar:"docs",previous:{title:"$getChannelVar",permalink:"/es/docs/5.5.5/functions/getchannelvar"},next:{title:"$getCustomStatus",permalink:"/es/docs/5.5.5/functions/getcustomstatus"}},y={},v=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Types of Cooldown",id:"types-of-cooldown",level:4},{value:"Usage",id:"usage",level:4}],h={toc:v},b="wrapper";function k(e){var t=e,{components:o}=t,r=m(t,["components"]);return(0,n.kt)(b,p(d(d({},h),r),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function will allow you to get the resting cooldown time for an user/server or globalUser  type of cooldown, for certain user in the requested command."),(0,n.kt)("h4",d({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 4 required fields"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Time ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Type of cooldown ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Command Name ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"ID ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Return ms  ","(","Optional",")")),(0,n.kt)("p",null,"Raw usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$getCooldownTime[time;typeOfCooldown;command name;ID;return ms (yes/no) (optional)]")),(0,n.kt)("h4",d({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type Of Cooldown - The cooldown used in the command"),(0,n.kt)("li",{parentName:"ul"},"Command Name - The command name of where the cooldown is"),(0,n.kt)("li",{parentName:"ul"},"ID - The user's/server's id we're getting the cooldown for"),(0,n.kt)("li",{parentName:"ul"},"Return ms - Whethor or not the function will return the time in ms")),(0,n.kt)("h4",d({},{id:"types-of-cooldown"}),"Types of Cooldown"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"user - ",(0,n.kt)("a",d({parentName:"li"},{href:"/es/docs/5.5.5/functions/cooldown"}),"$cooldown")),(0,n.kt)("li",{parentName:"ul"},"globalUser - ",(0,n.kt)("a",d({parentName:"li"},{href:"/es/docs/5.5.5/functions/globalcooldown"}),"$globalCooldown")),(0,n.kt)("li",{parentName:"ul"},"server -",(0,n.kt)("a",d({parentName:"li"},{href:"/es/docs/5.5.5/functions/servercooldown"})," $serverCooldown")),(0,n.kt)("li",{parentName:"ul"},"channel - ",(0,n.kt)("a",d({parentName:"li"},{href:"/es/docs/5.5.5/functions/channelcooldown"}),"$channelCooldown"))),(0,n.kt)("h4",d({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"Without optional field"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "cooldown",\n    code: `\n    $description[\nDaily command: $getCooldownTime[1d;globalUser;daily;$authorID]\n]\n    `\n});\n')),(0,n.kt)("p",null,"With optional field"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "cooldown",\n    code: `\n    $description[\nDaily command: $getCooldownTime[1d;globalUser;daily;$authorID;yes]\n] `\n});\n')))}k.isMDXComponent=!0}}]);