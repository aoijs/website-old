"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[f]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>k});var r=n(3905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>a(e,l(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$fileExists",description:"$fileExists will check if a given file exists.",id:"fileExists"},y=void 0,v={unversionedId:"functions/misc-related/fileExists",id:"version-6.4.0/functions/misc-related/fileExists",title:"$fileExists",description:"$fileExists will check if a given file exists.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/fileExists.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/fileExists",permalink:"/uk/docs/functions/misc-related/fileExists",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$fileExists",description:"$fileExists will check if a given file exists.",id:"fileExists"},sidebar:"docs",previous:{title:"$executionTime",permalink:"/uk/docs/functions/misc-related/executionTime"},next:{title:"$fileSize",permalink:"/uk/docs/functions/misc-related/fileSize"}},b={},k=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],g={toc:k},x="wrapper";function O(e){var t=e,{components:n}=t,i=d(t,["components"]);return(0,r.kt)(x,u(f(f({},g),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$fileExists")," will check if a given file exists."),(0,r.kt)("h2",f({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$fileExists[path]\n")),(0,r.kt)("h2",f({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,r.kt)("th",f({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"path"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"File path."),(0,r.kt)("td",f({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))),(0,r.kt)("h2",f({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,r.kt)("p",null,"This will check if a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," exists in your directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "fileExists",\n    code: `\n  $fileExists[./index.js]\n  `\n});\n')))}O.isMDXComponent=!0}}]);