"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[58196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,g=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},64185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>x,contentTitle:()=>f,default:()=>b,frontMatter:()=>g,metadata:()=>k,toc:()=>h});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&s(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>l(e,i(t)),u=(e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const g={title:"$replaceTextWithRegex",description:"$replaceTextWithRegex will replace specific regex in a text. This works similar as $replaceText.",id:"replaceTextWithRegex"},f=void 0,k={unversionedId:"functions/util-related/replaceTextWithRegex",id:"version-6.4.0/functions/util-related/replaceTextWithRegex",title:"$replaceTextWithRegex",description:"$replaceTextWithRegex will replace specific regex in a text. This works similar as $replaceText.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/replaceTextWithRegex.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/replaceTextWithRegex",permalink:"/ru/docs/functions/util-related/replaceTextWithRegex",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691406512,formattedLastUpdatedAt:"7 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"$replaceTextWithRegex",description:"$replaceTextWithRegex will replace specific regex in a text. This works similar as $replaceText.",id:"replaceTextWithRegex"},sidebar:"docs",previous:{title:"$replaceText",permalink:"/ru/docs/functions/util-related/replaceText"},next:{title:"$resolveColor",permalink:"/ru/docs/functions/util-related/resolveColor"}},x={},h=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2},{value:"Advanced Example",id:"advanced-example",level:3}],y={toc:h},N="wrapper";function b(e){var t=e,{components:r}=t,n=u(t,["components"]);return(0,a.kt)(N,d(m(m({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$replaceTextWithRegex")," will replace specific segments of text."),(0,a.kt)("h2",m({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$replaceTextWithRegex[text;reg;flags;newText]\n")),(0,a.kt)("h2",m({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Text you want to modify."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"reg"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The regex that will be replaced."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"flags"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"#flags"}),"Flags"),"."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"newText"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The text that will replace ",(0,a.kt)("inlineCode",{parentName:"td"},"reg"),"."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h2",null," Flags ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"Flags"),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"g"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Replace all matches (case-sensitive)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"m"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Multiline matching")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"i"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Replace all matches (case-insensitive)"))))),(0,a.kt)("h2",m({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will replace ",(0,a.kt)("inlineCode",{parentName:"p"},"more")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"less"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceTextWithRegex',\n    code: `\n  $replaceTextWithRegex[This function is more complicated than it looks.;more;g;less]\n  `\n});  \n")),(0,a.kt)("h3",m({},{id:"advanced-example"}),"Advanced Example"),(0,a.kt)("p",null,"This will replace ",(0,a.kt)("inlineCode",{parentName:"p"},"less")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"more"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceTextWithRegex',\n    code: `\n  $replaceTextWithRegex[This function is more complicated than it looks.;lESs;i;more]\n  `\n});  \n")))}b.isMDXComponent=!0}}]);