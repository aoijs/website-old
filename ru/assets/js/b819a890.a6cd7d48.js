"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>i(e,o(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$joinSplitText",description:"$joinSplitText \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0432\u0441\u0435 \u0442\u0435\u043a\u0441\u0442\u044b, \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u043c.",id:"joinSplitText"},y=void 0,b={unversionedId:"functions/misc-related/joinSplitText",id:"version-6.4.0/functions/misc-related/joinSplitText",title:"$joinSplitText",description:"$joinSplitText \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0432\u0441\u0435 \u0442\u0435\u043a\u0441\u0442\u044b, \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u043c.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/joinSplitText.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/joinSplitText",permalink:"/ru/docs/functions/misc-related/joinSplitText",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691051160,formattedLastUpdatedAt:"3 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"$joinSplitText",description:"$joinSplitText \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0432\u0441\u0435 \u0442\u0435\u043a\u0441\u0442\u044b, \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u043c.",id:"joinSplitText"},sidebar:"docs",previous:{title:"$isTicket",permalink:"/ru/docs/functions/misc-related/isTicket"},next:{title:"$lerefAvatar",permalink:"/ru/docs/functions/misc-related/lerefAvatar"}},v={},g=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],j={toc:g},O="wrapper";function k(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(O,d(s(s({},j),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$joinSplitText")," \u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442 \u0432\u0441\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0442\u0435\u043a\u0441\u0442\u0430, \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u043c."),(0,r.kt)("h2",s({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$joinSplitText[sep?]\n")),(0,r.kt)("h2",s({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"sep?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u0434\u043b\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")))),(0,r.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u0412\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u044b \u0437\u0430\u043f\u044f\u0442\u044b\u043c\u0438:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "joinSplitText",\n    code: `\n    $joinSplitText[, ]\n    $textSplit[Hello:Bye:Leref;:]\n    `\n});\n')))}k.isMDXComponent=!0}}]);