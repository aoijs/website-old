"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[84006],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57020:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>h,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,l(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$onlyPerms",description:"$onlyPerms will check if the user has the listed permission and return a error message if not.",id:"onlyPerms"},y=void 0,h={unversionedId:"functions/util-related/onlyPerms",id:"version-6.4.0/functions/util-related/onlyPerms",title:"$onlyPerms",description:"$onlyPerms will check if the user has the listed permission and return a error message if not.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/onlyPerms.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/onlyPerms",permalink:"/uk/docs/functions/util-related/onlyPerms",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$onlyPerms",description:"$onlyPerms will check if the user has the listed permission and return a error message if not.",id:"onlyPerms"},sidebar:"docs",previous:{title:"$onlyNSFW",permalink:"/uk/docs/functions/util-related/onlyNSFW"},next:{title:"$parseDate",permalink:"/uk/docs/functions/util-related/parseDate"}},k={},g=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],b={toc:g},v="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(v,m(u(u({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$onlyPerms")," will check if the user has the listed permission and return a error message if not."),(0,n.kt)("h2",u({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$onlyPerms[...perms;error]\n")),(0,n.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"...perms"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Permission the user requires."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"error"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Error to return when the user has not the listed permissions."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))),(0,n.kt)("p",null,"You can find all permissions ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",u({parentName:"strong"},{href:"../../guides/client/2permissionsintents.md"}),"here")),"."),(0,n.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,n.kt)("p",null,"This will limit the command to work only when the user has administrator permissions:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "onlyPerms",\n    code: `\n    Ok.\n    $onlyPerms[administrator;You don\'t have administrator permissions!]\n    `\n});\n')))}O.isMDXComponent=!0}}]);