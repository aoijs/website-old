"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[42612],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[f]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92797:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>b,default:()=>h,frontMatter:()=>m,metadata:()=>v,toc:()=>g});var r=t(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&u(e,t,n[t]);return e},p=(e,n)=>i(e,a(n)),d=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$findNumbers"},b=void 0,v={unversionedId:"functions/findnumbers",id:"version-5.5.5/functions/findnumbers",title:"$findNumbers",description:"This function filters our numbers from given &lt;string&gt; and returns them alone",source:"@site/versioned_docs/version-5.5.5/functions/findnumbers.md",sourceDirName:"functions",slug:"/functions/findnumbers",permalink:"/tr/docs/5.5.5/functions/findnumbers",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"$findNumbers"},sidebar:"docs",previous:{title:"$findMembers",permalink:"/tr/docs/5.5.5/functions/findmembers"},next:{title:"$findRole",permalink:"/tr/docs/5.5.5/functions/findrole"}},y={},g=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],O={toc:g},k="wrapper";function h(e){var n=e,{components:t}=n,o=d(n,["components"]);return(0,r.kt)(k,p(f(f({},O),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function filters our numbers from given ","<","string",">"," and returns them alone"),(0,r.kt)("h4",f({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"This function  has 1 field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"String ","(","Required",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$findNumbers[string]")),(0,r.kt)("h4",f({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"String - The text we're filtering")),(0,r.kt)("h4",f({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "findNumbers",\ncode: `$findNumbers[fdef243/%kcnv]`\n})\n/*\nBot will return:\n243\n*/\n')))}h.isMDXComponent=!0}}]);