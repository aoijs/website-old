"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89592],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,b=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>h,frontMatter:()=>b,metadata:()=>y,toc:()=>k});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&s(e,r,t[r]);return e},m=(e,t)=>l(e,o(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const b={title:"$numberSeparator",description:"$numberSeparator will separate numbers and make them readable.",id:"numberSeparator"},f=void 0,y={unversionedId:"functions/util-related/numberSeparator",id:"version-6.4.0/functions/util-related/numberSeparator",title:"$numberSeparator",description:"$numberSeparator will separate numbers and make them readable.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/numberSeperator.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/numberSeparator",permalink:"/fr/docs/functions/util-related/numberSeparator",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691051160,formattedLastUpdatedAt:"3 ao\xfbt 2023",frontMatter:{title:"$numberSeparator",description:"$numberSeparator will separate numbers and make them readable.",id:"numberSeparator"},sidebar:"docs",previous:{title:"$nonEscape",permalink:"/fr/docs/functions/util-related/nonEscape"},next:{title:"$onlyForCategories",permalink:"/fr/docs/functions/util-related/onlyForCategories"}},g={},k=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:k},O="wrapper";function h(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(O,m(c(c({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$numberSeparator")," will separate numbers and make them readable."),(0,n.kt)("h2",c({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$numberSeparator[num;sep?]\n")),(0,n.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"num"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Number you want to separate."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"sep?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Separator which will be used to separate the numbers, default: ",(0,n.kt)("inlineCode",{parentName:"td"},","),"."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return ",(0,n.kt)("inlineCode",{parentName:"p"},"1,000,000"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'numberSeparator',\n    code: `\n  $numberSeparator[1000000;,]\n  `\n});\n")))}h.isMDXComponent=!0}}]);