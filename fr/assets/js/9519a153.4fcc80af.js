"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[3285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,m=s["".concat(d,".").concat(f)]||s[f]||c[f]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>m,metadata:()=>b,toc:()=>k});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>l(e,i(t)),f=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$deleteThread",description:"$deleteThread supprimera le fil donn\xe9 d'un salon.",id:"deleteThread"},g=void 0,b={unversionedId:"functions/guild-related/deleteThread",id:"version-6.4.0/functions/guild-related/deleteThread",title:"$deleteThread",description:"$deleteThread supprimera le fil donn\xe9 d'un salon.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/deleteThread.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/deleteThread",permalink:"/fr/docs/functions/guild-related/deleteThread",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715885,formattedLastUpdatedAt:"11 ao\xfbt 2023",frontMatter:{title:"$deleteThread",description:"$deleteThread supprimera le fil donn\xe9 d'un salon.",id:"deleteThread"},sidebar:"docs",previous:{title:"$deleteSticker",permalink:"/fr/docs/functions/guild-related/deleteSticker"},next:{title:"$deleteWebhook",permalink:"/fr/docs/functions/guild-related/deleteWebhook"}},y={},k=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],h={toc:k},v="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(v,c(s(s({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$deleteThread")," supprimera le fil donn\xe9 d'un salon."),(0,n.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$deleteThread[IDsalon;IDfil;raison?]\n")),(0,n.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type de texte"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"IDsalon"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"L'ID du salon dans lequel le fil se situe."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"IDfil"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"L'ID du fil de discussion."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"raison?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"La raison qui sera affich\xe9e dans les journaux d'audit de la guilde."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"faux")))),(0,n.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Ceci supprimera le fil du salon dans lequel la commande est ex\xe9cut\xe9 (assurez-vous de remplacer IDfil par un actuel ID de fil ):"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'supprimerFil',\n    code: `\n  $deleteThread[$channelID;IDfil;Test.]\n  `\n});\n")))}O.isMDXComponent=!0}}]);