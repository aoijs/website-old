"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4813],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),m=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=m(r),f=n,u=c["".concat(i,".").concat(f)]||c[f]||s[f]||l;return r?a.createElement(u,o(o({ref:t},p),{},{components:r})):a.createElement(u,o({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=f;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[c]="string"==typeof e?e:n,o[1]=d;for(var m=2;m<l;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},55641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>O,frontMatter:()=>u,metadata:()=>g,toc:()=>y});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(d)for(var r of d(t))m.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>l(e,o(t)),f=(e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&m.call(e,a)&&(r[a]=e[a]);return r};const u={title:"$addThreadMember",description:"Add a member to thread.",id:"addthreadmember"},b=void 0,g={unversionedId:"functions/addthreadmember",id:"version-5.5.5/functions/addthreadmember",title:"$addThreadMember",description:"Add a member to thread.",source:"@site/versioned_docs/version-5.5.5/functions/addthreadmember.md",sourceDirName:"functions",slug:"/functions/addthreadmember",permalink:"/es/docs/5.5.5/functions/addthreadmember",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$addThreadMember",description:"Add a member to thread.",id:"addthreadmember"},sidebar:"docs",previous:{title:"$addSelectMenu",permalink:"/es/docs/5.5.5/functions/addselectmenu"},next:{title:"$addTimestamp",permalink:"/es/docs/5.5.5/functions/addtimestamp"}},h={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],k={toc:y},v="wrapper";function O(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,a.kt)(v,s(c(c({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function will add a member to a channel's thread."),(0,a.kt)("h2",c({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$addThreadMember[channelID;threadID;memberID;reason?]\n")),(0,a.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",c({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",c({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"channelID"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"ID of the channel"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"threadID"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"ID of the channel's thread"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"memberID"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"The member's ID"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"reason?"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"A reason for adding member to a thread"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h2",c({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "add-thread-member",\n  code: `\n  Added the user successfully!\n  \n  $addThreadMember[722031482163560499;938078671095365693;721032593511940177;Hello!]\n  `\n});\n')))}O.isMDXComponent=!0}}]);