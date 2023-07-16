"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[18445],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>b});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(o),f=r,b=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return o?n.createElement(b,l(l({ref:t},s),{},{components:o})):n.createElement(b,l({ref:t},s))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},12306:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>O,frontMatter:()=>b,metadata:()=>m,toc:()=>y});var n=o(3905),r=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&s(e,o,t[o]);if(i)for(var o of i(t))c.call(t,o)&&s(e,o,t[o]);return e},d=(e,t)=>a(e,l(t)),f=(e,t)=>{var o={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(o[n]=e[n]);return o};const b={title:"$deleteWebhook",description:"Deletes a webhook"},k=void 0,m={unversionedId:"functions/deletewebhook",id:"version-5.5.5/functions/deletewebhook",title:"$deleteWebhook",description:"Deletes a webhook",source:"@site/versioned_docs/version-5.5.5/functions/deletewebhook.md",sourceDirName:"functions",slug:"/functions/deletewebhook",permalink:"/ar/docs/5.5.5/functions/deletewebhook",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$deleteWebhook",description:"Deletes a webhook"},sidebar:"docs",previous:{title:"$deleteUserVar",permalink:"/ar/docs/5.5.5/functions/deleteuservar"},next:{title:"$description",permalink:"/ar/docs/5.5.5/functions/description"}},h={},y=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4},{value:"Webhook Info",id:"webhook-info",level:4}],v={toc:y},w="wrapper";function O(e){var t=e,{components:o}=t,r=f(t,["components"]);return(0,n.kt)(w,d(u(u({},v),r),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function allows the bot to delete a webhook"),(0,n.kt)("h4",u({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 2 fields"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Webhook ID ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Webhook Token ","(","Required",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$deleteWebhook[webhookID;webhookToken]")),(0,n.kt)("h4",u({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Webhook ID - The ID of the webhook we're deleting"),(0,n.kt)("li",{parentName:"ul"},"Webhook Token - The Token of the webhook we're deleting")),(0,n.kt)("h4",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "deleteWebhook",\ncode: `$deleteWebhook[793312378162642975;paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA]\n`\n})\n')),(0,n.kt)("h4",u({},{id:"webhook-info"}),"Webhook Info"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"URL - ",(0,n.kt)("a",u({parentName:"p"},{href:"https://ptb.discordapp.com/api/webhooks/793312378162642975/paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA"}),"https://ptb.discordapp.com/api/webhooks/793312378162642975/paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ID - 793312378162642975")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Token - paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA"))))}O.isMDXComponent=!0}}]);