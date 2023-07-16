"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96154],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=s(n),c=r,b=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(b,o(o({ref:e},d),{},{components:n})):a.createElement(b,o({ref:e},d))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86590:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>k,default:()=>v,frontMatter:()=>b,metadata:()=>f,toc:()=>N});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&d(t,n,e[n]);if(i)for(var n of i(e))s.call(e,n)&&d(t,n,e[n]);return t},m=(t,e)=>l(t,o(e)),c=(t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&s.call(t,a)&&(n[a]=t[a]);return n};const b={title:"DatabaseOptions"},k=void 0,f={unversionedId:"options/databaseOptions",id:"version-5.5.5/options/databaseOptions",title:"DatabaseOptions",description:"Available Options Are:",source:"@site/versioned_docs/version-5.5.5/options/databaseOptions.md",sourceDirName:"options",slug:"/options/databaseOptions",permalink:"/hi/docs/5.5.5/options/databaseOptions",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"DatabaseOptions"}},g={},N=[],y={toc:N},O="wrapper";function v(t){var e=t,{components:n}=e,r=c(e,["components"]);return(0,a.kt)(O,m(u(u({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Available Options Are:")),(0,a.kt)("table",{parentName:"blockquote"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"options"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"optional"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"description"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"usage"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},'"default"')," ","|"," ",(0,a.kt)("strong",{parentName:"td"},'"dbdts.db"')," ","|"," ",(0,a.kt)("strong",{parentName:"td"},'"dbdjs-api"')," ","|"," ",(0,a.kt)("strong",{parentName:"td"},'"custom"')),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"false"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Defines The Type Of Database"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'type:"default"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"db"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"module")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"true"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Defines The Database To Be Used"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"db: require('dbdts.db')")," // ",(0,a.kt)("inlineCode",{parentName:"td"},"db: require('quick.db')")," ",(0,a.kt)("strong",{parentName:"td"},"(quickdb is taken as example)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"path"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"string")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"true"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Defines The Path Database Will Store The Data //(note:Not all Database Supports Path)"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'path:"./database/"')," ",(0,a.kt)("strong",{parentName:"td"},"(quick.db doesn't support path)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"tables"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Array\\<string",">")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"true"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Creates The Tables"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'tables:["main"]'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"promisify"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"boolean")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"true"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Promisifies A Non Promised Database"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"promisify:false")," ",(0,a.kt)("strong",{parentName:"td"},'for "quick.db"')," , ",(0,a.kt)("inlineCode",{parentName:"td"},"promisify:true"))))),(0,a.kt)("hr",{parentName:"blockquote"})))}v.isMDXComponent=!0}}]);