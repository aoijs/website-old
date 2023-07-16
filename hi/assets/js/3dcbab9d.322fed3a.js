"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[98142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>k,frontMatter:()=>f,metadata:()=>h,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$getAttachments",description:"Gets attachment info of the provided Message."},g=void 0,h={unversionedId:"functions/getattachments",id:"version-5.5.5/functions/getattachments",title:"$getAttachments",description:"Gets attachment info of the provided Message.",source:"@site/versioned_docs/version-5.5.5/functions/getattachments.md",sourceDirName:"functions",slug:"/functions/getattachments",permalink:"/hi/docs/5.5.5/functions/getattachments",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$getAttachments",description:"Gets attachment info of the provided Message."},sidebar:"docs",previous:{title:"$getApplicationCommandID",permalink:"/hi/docs/5.5.5/functions/getapplicationcommandid"},next:{title:"$getAuditLogs",permalink:"/hi/docs/5.5.5/functions/getauditlogs"}},y={},v=[{value:"Properties:",id:"properties",level:4},{value:"Example Command:",id:"example-command",level:4}],b={toc:v},O="wrapper";function k(e){var t=e,{components:a}=t,o=d(t,["components"]);return(0,r.kt)(O,u(m(m({},b),o),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With this function you can get information about message attachments, e.g. the name or url of an image."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$getAttachments[channelid;messageid;position;properties]")),(0,r.kt)("h4",m({},{id:"properties"}),"Properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," => the name of the attachment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," => the attachment ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," => the url of tha attachment (e.g. image url)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"size")," => the size of the file/image"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"width")," => the width of the attachment")),(0,r.kt)("h4",m({},{id:"example-command"}),"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),'bot.command({\nname: "get-file",\ncode: `\n$getAttachments[$channelID;838701159710720001;1;name]\n`\n})\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example usage to get the image name of a message&#39;s first attachment.",src:n(5168).Z,width:"802",height:"222"})))}k.isMDXComponent=!0},5168:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (15)-7180092e77ea2e247dce6afdd38dde56.png"}}]);