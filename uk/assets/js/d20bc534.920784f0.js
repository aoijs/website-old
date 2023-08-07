"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[95814],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,s(s({ref:e},u),{},{components:n})):r.createElement(g,s({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[c]="string"==typeof t?t:a,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61840:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>N,contentTitle:()=>k,default:()=>O,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&u(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&u(t,n,e[n]);return t},d=(t,e)=>l(t,s(e)),m=(t,e)=>{var n={};for(var r in t)o.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n};const g={title:"$setStatus",description:"$setStatus will change the client's status.",id:"setStatus"},k=void 0,f={unversionedId:"functions/client-related/setStatus",id:"version-6.4.0/functions/client-related/setStatus",title:"$setStatus",description:"$setStatus will change the client's status.",source:"@site/versioned_docs/version-6.4.0/functions/client-related/setStatus.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/setStatus",permalink:"/uk/docs/functions/client-related/setStatus",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691406512,formattedLastUpdatedAt:"7 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$setStatus",description:"$setStatus will change the client's status.",id:"setStatus"},sidebar:"docs",previous:{title:"$setClientName",permalink:"/uk/docs/functions/client-related/setClientName"},next:{title:"$alwaysExecute",permalink:"/uk/docs/functions/event-related/alwaysExecute"}},N={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],y={toc:b},v="wrapper";function O(t){var e=t,{components:n}=e,a=m(e,["components"]);return(0,r.kt)(v,d(c(c({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$setStatus")," will change the client's status."),(0,r.kt)("h2",c({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$setStatus[name;type;status;URL;afk?]\n")),(0,r.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"name"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The content of the status."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"type"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string, integer"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"1. ",(0,r.kt)("strong",{parentName:"td"},"PLAYING")," (default) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"WATCHING")," ",(0,r.kt)("br",null)," 3. ",(0,r.kt)("strong",{parentName:"td"},"STREAMING")," ",(0,r.kt)("br",null)," 4. ",(0,r.kt)("strong",{parentName:"td"},"LISTENING")," ",(0,r.kt)("br",null)," 5. ",(0,r.kt)("strong",{parentName:"td"},"COMPETING")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"status"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"1. ",(0,r.kt)("strong",{parentName:"td"},"online")," (default) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"idle")," ",(0,r.kt)("br",null)," 3. ",(0,r.kt)("strong",{parentName:"td"},"dnd")," ",(0,r.kt)("br",null)," 4. ",(0,r.kt)("strong",{parentName:"td"},"invisible")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"URL"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"URL (streaming status)"),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"afk?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"1. ",(0,r.kt)("strong",{parentName:"td"},"true")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"false")," (default)"),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will change the client's status to ",(0,r.kt)("strong",{parentName:"p"},"PLAYING")," and ",(0,r.kt)("strong",{parentName:"p"},"online"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'setStatus',\n    code: `\n   $setStatus[Hello!;PLAYING;online]`\n});\n")))}O.isMDXComponent=!0}}]);