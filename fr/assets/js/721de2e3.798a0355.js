"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60006],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89337:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>b,default:()=>g,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&p(e,t,n[t]);return e},f=(e,n)=>a(e,c(n)),d=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$newChannel"},b=void 0,y={unversionedId:"functions/newchannel",id:"version-5.5.5/functions/newchannel",title:"$newChannel",description:"This function is only useable in onChannelCreate and onChannelUpdate. Examples can be found in the callback pages.",source:"@site/versioned_docs/version-5.5.5/functions/newchannel.md",sourceDirName:"functions",slug:"/functions/newchannel",permalink:"/fr/docs/5.5.5/functions/newchannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$newChannel"},sidebar:"docs",previous:{title:"$mutualServers",permalink:"/fr/docs/5.5.5/functions/mutualservers"},next:{title:"$newMember",permalink:"/fr/docs/5.5.5/functions/newmember"}},v={},O=[],h={toc:O},w="wrapper";function g(e){var n=e,{components:t}=n,o=d(n,["components"]);return(0,r.kt)(w,f(u(u({},h),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function is only useable in ",(0,r.kt)("a",u({parentName:"p"},{href:"/fr/docs/5.5.5/events/bot.onchannelcreate"}),"onChannelCreate")," and ",(0,r.kt)("a",u({parentName:"p"},{href:"/fr/docs/5.5.5/events/bot.onchannelupdate"}),"onChannelUpdate"),". Examples can be found in the callback pages."))}g.isMDXComponent=!0}}]);