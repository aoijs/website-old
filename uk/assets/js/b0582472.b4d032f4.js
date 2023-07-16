"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[17372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>O,frontMatter:()=>m,metadata:()=>h,toc:()=>y});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$checkCondition",description:"Checks if the given condition is true or false"},k=void 0,h={unversionedId:"functions/checkcondition",id:"version-5.5.5/functions/checkcondition",title:"$checkCondition",description:"Checks if the given condition is true or false",source:"@site/versioned_docs/version-5.5.5/functions/checkcondition.md",sourceDirName:"functions",slug:"/functions/checkcondition",permalink:"/uk/docs/5.5.5/functions/checkcondition",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$checkCondition",description:"Checks if the given condition is true or false"},sidebar:"docs",previous:{title:"$charCount",permalink:"/uk/docs/5.5.5/functions/charcount"},next:{title:"$checkContains",permalink:"/uk/docs/5.5.5/functions/checkcontains"}},v={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Conditional Operators",id:"conditional-operators",level:4},{value:"Example",id:"example",level:2}],g={toc:y},b="wrapper";function O(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(b,u(d(d({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will check if given condition is true or false."),(0,r.kt)("h3",d({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$checkCondition[condition]\n")),(0,r.kt)("h3",d({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"condition"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"Whether the provided condition is met"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h4",d({},{id:"conditional-operators"}),"Conditional Operators"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"== - Equal"),(0,r.kt)("li",{parentName:"ol"},"!= - Unequal"),(0,r.kt)("li",{parentName:"ol"},">","= - Greater than or equal to"),(0,r.kt)("li",{parentName:"ol"},"<","= - Less than or equal to"),(0,r.kt)("li",{parentName:"ol"},"<"," - Less than"),(0,r.kt)("li",{parentName:"ol"},">"," - Greater than"),(0,r.kt)("li",{parentName:"ol"},"|| - Or "),(0,r.kt)("li",{parentName:"ol"},"&& - And")),(0,r.kt)("h2",d({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "condition",\n  code: `Given condition: 1>2\n  The given condition is $checkCondition[1>2]`\n  //Returns false\n});\n\n')))}O.isMDXComponent=!0}}]);