"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[77406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>w,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$wait",description:"Stops the code execution for given time."},k=void 0,y={unversionedId:"functions/wait",id:"version-5.5.5/functions/wait",title:"$wait",description:"Stops the code execution for given time.",source:"@site/versioned_docs/version-5.5.5/functions/wait.md",sourceDirName:"functions",slug:"/functions/wait",permalink:"/tr/docs/5.5.5/functions/wait",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"$wait",description:"Stops the code execution for given time."},sidebar:"docs",previous:{title:"$volume",permalink:"/tr/docs/5.5.5/functions/volume"},next:{title:"$webhook",permalink:"/tr/docs/5.5.5/functions/webhook"}},b={},v=[{value:"Usage",id:"usage",level:3},{value:"Field",id:"field",level:3},{value:"Suffixes",id:"suffixes",level:4},{value:"Footnote",id:"footnote",level:5},{value:"Examples",id:"examples",level:2}],g={toc:v},h="wrapper";function w(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(h,d(u(u({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function delays the bots response. This can work for the whole code or certain parts of the code. As we know, it code will be read from bottom to top."),(0,r.kt)("h3",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$wait[time]\n")),(0,r.kt)("h3",u({},{id:"field"}),"Field"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"time"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"delaying time"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h4",u({},{id:"suffixes"}),"Suffixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," - Seconds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"m")," - Minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"h")," - Hours"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"d")," - Days"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"w")," - Weeks")),(0,r.kt)("h5",u({},{id:"footnote"}),"Footnote"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"$wait")," is not saved in the database, be aware of that!",(0,r.kt)("sup",u({parentName:"em"},{id:"fnref-1"}),(0,r.kt)("a",u({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")))),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Delaying the whole code:")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "wait",\n  code: `\n  $description[1;Sorry for late reply, eheh :D]\n  \n  $title[1;Hello!]\n  \n  $wait[5s]\n  ` \n// since $wait is at bottom, it will delay whole code\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To delay certain parts of the code:")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n  name: \"wait\",\n  code: `\n  $sendMessage[Bye \ud83d\udc4b]\n  \n  $wait[5s]\n  \n  $sendMessage[Hi \ud83d\ude4c]\n  `\n});\n//'Hi' will respond instantly, but 'Bye' will be delayed for 5 seconds before sending\n")),(0,r.kt)("div",u({},{className:"footnotes"}),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",u({parentName:"ol"},{id:"fn-1"}),"You can go up to 20-24 days, but bot should be still running.",(0,r.kt)("a",u({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}w.isMDXComponent=!0}}]);