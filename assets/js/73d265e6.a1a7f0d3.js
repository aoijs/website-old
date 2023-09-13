"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[19369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>h,toc:()=>k});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$ordinal",description:"$ordinal adds st, nd, rd, th to a number such as 1st, 2nd, 3rd, 4th.",id:"ordinal"},b=void 0,h={unversionedId:"functions/math-related/ordinal",id:"version-6.4.0/functions/math-related/ordinal",title:"$ordinal",description:"$ordinal adds st, nd, rd, th to a number such as 1st, 2nd, 3rd, 4th.",source:"@site/versioned_docs/version-6.4.0/functions/math-related/ordinal.md",sourceDirName:"functions/math-related",slug:"/functions/math-related/ordinal",permalink:"/docs/functions/math-related/ordinal",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572827,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{title:"$ordinal",description:"$ordinal adds st, nd, rd, th to a number such as 1st, 2nd, 3rd, 4th.",id:"ordinal"},sidebar:"docs",previous:{title:"$multi",permalink:"/docs/functions/math-related/multi"},next:{title:"$round",permalink:"/docs/functions/math-related/round"}},y={},k=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:k},g="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(g,u(c(c({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$ordinal")," adds ",(0,r.kt)("inlineCode",{parentName:"p"},"st"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"th")," to a number such as ",(0,r.kt)("inlineCode",{parentName:"p"},"1st"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2nd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"3rd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"4th"),"."),(0,r.kt)("h2",c({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$ordinal[number]\n")),(0,r.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Number which will add ",(0,r.kt)("inlineCode",{parentName:"td"},"st"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nd"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"rd"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"th")," to it."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'ordinal',\n    code: `\n  $ordinal[12] -> Returns 12nd \n  $ordinal[50] -> Returns 50th\n  $ordinal[11] -> Returns 11st\n  $ordinal[88] -> Returns 88th\n  `\n});\n")))}O.isMDXComponent=!0}}]);