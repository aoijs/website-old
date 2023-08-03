"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46246],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),u=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(i.Provider,{value:r},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),y=n,f=d["".concat(i,".").concat(y)]||d[y]||s[y]||l;return t?a.createElement(f,o(o({ref:r},p),{},{components:t})):a.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=y;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[d]="string"==typeof e?e:n,o[1]=c;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},13039:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>m,default:()=>N,frontMatter:()=>f,metadata:()=>b,toc:()=>k});var a=t(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&p(e,t,r[t]);if(c)for(var t of c(r))u.call(r,t)&&p(e,t,r[t]);return e},s=(e,r)=>l(e,o(r)),y=(e,r)=>{var t={};for(var a in e)i.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&c)for(var a of c(e))r.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t};const f={title:"$arrayIncludes",description:"$arrayIncludes \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043b\u0438 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442.",id:"arrayIncludes"},m=void 0,b={unversionedId:"functions/array-related/arrayIncludes",id:"version-6.4.0/functions/array-related/arrayIncludes",title:"$arrayIncludes",description:"$arrayIncludes \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043b\u0438 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayIncludes.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayIncludes",permalink:"/ru/docs/functions/array-related/arrayIncludes",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691051160,formattedLastUpdatedAt:"3 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"$arrayIncludes",description:"$arrayIncludes \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043b\u0438 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442.",id:"arrayIncludes"},sidebar:"docs",previous:{title:"$arrayForEach",permalink:"/ru/docs/functions/array-related/arrayForEach"},next:{title:"$arrayIndexOf",permalink:"/ru/docs/functions/array-related/arrayIndexOf"}},g={},k=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],v={toc:k},O="wrapper";function N(e){var r=e,{components:t}=r,n=y(r,["components"]);return(0,a.kt)(O,s(d(d({},v),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayIncludes")," \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435."),(0,a.kt)("h2",d({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$arrayIncludes[name;query]\n")),(0,a.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Nbg"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0437\u0430\u043f\u0440\u043e\u0441"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u042d\u043b\u0435\u043c\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0436\u0434\u0430\u0442\u044c \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,a.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-includes",\n    \u043a\u043e\u0434: `\n  $arrayIncludes[array;Leref]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n    // \u041e\u043d \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c "false", \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043d \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043b\u043e\u0432\u0430 "Leref".\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-includes",\n    code: `\n  $arrayIncludes[array;akarui]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n    // \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 "true", \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043b\u043e\u0432\u043e "akarui".\n});\n')))}N.isMDXComponent=!0}}]);