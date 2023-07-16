"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60828],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[f]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56676:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>b,contentTitle:()=>h,default:()=>w,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var t=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,f=(e,n)=>{for(var r in n||(n={}))l.call(n,r)&&p(e,r,n[r]);if(c)for(var r of c(n))s.call(n,r)&&p(e,r,n[r]);return e},u=(e,n)=>o(e,i(n)),d=(e,n)=>{var r={};for(var t in e)l.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&c)for(var t of c(e))n.indexOf(t)<0&&s.call(e,t)&&(r[t]=e[t]);return r};const m={title:"$referenceChannelID",description:"The ID of the channel where this user replied in"},h=void 0,y={unversionedId:"functions/referencechannelid",id:"version-5.5.5/functions/referencechannelid",title:"$referenceChannelID",description:"The ID of the channel where this user replied in",source:"@site/versioned_docs/version-5.5.5/functions/referencechannelid.md",sourceDirName:"functions",slug:"/functions/referencechannelid",permalink:"/hi/docs/5.5.5/functions/referencechannelid",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$referenceChannelID",description:"The ID of the channel where this user replied in"},sidebar:"docs",previous:{title:"$reboot",permalink:"/hi/docs/5.5.5/functions/reboot"},next:{title:"$referenceGuildID",permalink:"/hi/docs/5.5.5/functions/referenceguildid"}},b={},v=[{value:"Example",id:"example",level:3}],O={toc:v},g="wrapper";function w(e){var n=e,{components:a}=n,o=d(n,["components"]);return(0,t.kt)(g,u(f(f({},O),o),{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This function returns the channel ID the user replied in"),(0,t.kt)("h3",f({},{id:"example"}),"Example"),(0,t.kt)("pre",null,(0,t.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "referencechannel",\ncode: `Reply Channel ID: $referenceChannelID`\n})\n')),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Heres an example (I know it says MessageID but its basically the same)",src:r(60101).Z,width:"473",height:"71"})))}w.isMDXComponent=!0},60101:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/image (14) (4) (4) (3) (1) (3)-cef0d06a2da4aeb13ae75c8043c7977d.png"}}]);