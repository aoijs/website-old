"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,b=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>C,frontMatter:()=>b,metadata:()=>y,toc:()=>g});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e},s=(e,t)=>o(e,l(t)),f=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const b={title:"$banCount",description:"$banCount \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0431\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0433\u0438\u043b\u044c\u0434\u0438\u0438.",id:"banCount"},m=void 0,y={unversionedId:"functions/info-related/banCount",id:"version-6.4.0/functions/info-related/banCount",title:"$banCount",description:"$banCount \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0431\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0433\u0438\u043b\u044c\u0434\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/banCount.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/banCount",permalink:"/ru/docs/functions/info-related/banCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572827,formattedLastUpdatedAt:"13 \u0441\u0435\u043d\u0442. 2023 \u0433.",frontMatter:{title:"$banCount",description:"$banCount \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0431\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0433\u0438\u043b\u044c\u0434\u0438\u0438.",id:"banCount"},sidebar:"docs",previous:{title:"$allMembersCount",permalink:"/ru/docs/functions/info-related/allMembersCount"},next:{title:"$boostingSince",permalink:"/ru/docs/functions/info-related/boostingSince"}},v={},g=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0431\u043e\u0442\u0443 \u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f <code>VIEW_AUDIT_LOG</code>",id:"\u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430-\u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435-\u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435-\u0447\u0442\u043e-\u0431\u043e\u0442\u0443-\u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f-\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f-\u0434\u043b\u044f-view_audit_log",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],O={toc:g},k="wrapper";function C(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(k,s(d(d({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$banCount")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0431\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0433\u0438\u043b\u044c\u0434\u0438\u0438."),(0,r.kt)("h2",d({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$banCount[guildID?]\n")),(0,r.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"ID \u0433\u0438\u043b\u044c\u0434\u0438\u0438?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"ID \u0433\u0438\u043b\u044c\u0434\u0438\u0438 \u043e\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439."),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u043b\u043e\u0436\u044c")))),(0,r.kt)("h4",d({},{id:"\u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430-\u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435-\u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435-\u0447\u0442\u043e-\u0431\u043e\u0442\u0443-\u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f-\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f-\u0434\u043b\u044f-view_audit_log"}),"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0431\u043e\u0442\u0443 \u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f ",(0,r.kt)("inlineCode",{parentName:"h4"},"VIEW_AUDIT_LOG")),(0,r.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0431\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0432 \u0432\u0430\u0448\u0435\u0439 \u0433\u0438\u043b\u044c\u0434\u0438\u0438:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'banCount',\n    code: `\n  $banCount\n  `\n});\n")))}C.isMDXComponent=!0}}]);