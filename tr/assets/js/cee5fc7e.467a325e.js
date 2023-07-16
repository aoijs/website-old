"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[56445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,m=d["".concat(s,".").concat(u)]||d[u]||f[u]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e},f=(e,t)=>o(e,a(t)),u=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$elseif",description:"$elseif is used to create an else statement with condition.",id:"elseif"},y=void 0,b={unversionedId:"functions/misc-related/elseif",id:"version-6.4.0/functions/misc-related/elseif",title:"$elseif",description:"$elseif is used to create an else statement with condition.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/elseif.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/elseif",permalink:"/tr/docs/functions/misc-related/elseif",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"$elseif",description:"$elseif is used to create an else statement with condition.",id:"elseif"},sidebar:"docs",previous:{title:"$editTextSplitElement",permalink:"/tr/docs/functions/misc-related/editTextSplitElement"},next:{title:"$endelseif",permalink:"/tr/docs/functions/misc-related/endelseif"}},v={},g=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:g},w="wrapper";function k(e){var t=e,{components:n}=t,i=u(t,["components"]);return(0,r.kt)(w,f(d(d({},O),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$elseif")," is used to create an else statement with condition."),(0,r.kt)("h2",d({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$elseif[condition]\n")),(0,r.kt)("admonition",d({},{title:"Deprecation",type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},'$if: "old"')," is deprecated and should no longer be used as it will be removed in the future.")),(0,r.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"Example usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"$if: old"),' (will return "Hello" when the condition is true):'),(0,r.kt)("p",null,"You require ",(0,r.kt)("inlineCode",{parentName:"p"},"$endelseif")," to end the ",(0,r.kt)("inlineCode",{parentName:"p"},"$elseIf")," statement."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "if",\n    $if: "old",\n    code: `\n  $if[1==2]\n  Hello!\n  $elseif[2==4]\n  $endelseif\n  $endif\n  `\n});\n')))}k.isMDXComponent=!0}}]);