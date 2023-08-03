"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[90825],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},74082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>h,frontMatter:()=>y,metadata:()=>m,toc:()=>O});var r=t(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&p(e,t,n[t]);return e},u=(e,n)=>i(e,a(n)),f=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const y={title:"$isEveryoneMentioned",description:"$isEveryoneMentioned will check if everyone or here is mentioned.",id:"isEveryoneMentioned"},v=void 0,m={unversionedId:"functions/util-related/isEveryoneMentioned",id:"version-6.4.0/functions/util-related/isEveryoneMentioned",title:"$isEveryoneMentioned",description:"$isEveryoneMentioned will check if everyone or here is mentioned.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/isEveryoneMentioned.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isEveryoneMentioned",permalink:"/fr/docs/functions/util-related/isEveryoneMentioned",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691051160,formattedLastUpdatedAt:"3 ao\xfbt 2023",frontMatter:{title:"$isEveryoneMentioned",description:"$isEveryoneMentioned will check if everyone or here is mentioned.",id:"isEveryoneMentioned"},sidebar:"docs",previous:{title:"$isDeafen",permalink:"/fr/docs/functions/util-related/isDeafen"},next:{title:"$isGuildDeafened",permalink:"/fr/docs/functions/util-related/isGuildDeafened"}},b={},O=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],g={toc:O},E="wrapper";function h(e){var n=e,{components:t}=n,o=f(n,["components"]);return(0,r.kt)(E,u(d(d({},g),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$isEveryoneMentioned")," will check if everyone or here is mentioned."),(0,r.kt)("h2",d({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$isEveryoneMentioned\n")),(0,r.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will check if you mentioned ",(0,r.kt)("inlineCode",{parentName:"p"},"@here")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@everyone"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isEveryoneMentioned',\n    code: `\n  You did not mention @ everyone!\n  $onlyIf[$isEveryoneMentioned==false;You tried to mention @ everyone!]\n  `\n});\n")))}h.isMDXComponent=!0}}]);