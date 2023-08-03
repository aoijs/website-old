"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5035],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7002:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>O,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const g={title:"$createSticker",description:"$createSticker cr\xe9era un autocollant.",id:"createSticker"},k=void 0,f={unversionedId:"functions/guild-related/createSticker",id:"version-6.4.0/functions/guild-related/createSticker",title:"$createSticker",description:"$createSticker cr\xe9era un autocollant.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/createSticker.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/createSticker",permalink:"/fr/docs/functions/guild-related/createSticker",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691051160,formattedLastUpdatedAt:"3 ao\xfbt 2023",frontMatter:{title:"$createSticker",description:"$createSticker cr\xe9era un autocollant.",id:"createSticker"},sidebar:"docs",previous:{title:"$createStageInstance",permalink:"/fr/docs/functions/guild-related/createStageInstance"},next:{title:"$createThread",permalink:"/fr/docs/functions/guild-related/createThread"}},y={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],N={toc:b},v="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(v,s(d(d({},N),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$createSticker")," cr\xe9era un autocollant."),(0,a.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$createSticker[IDserveur;URL;nom;renvoyerAutocollant?;tags;description?;raison?]\n")),(0,a.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"IDserveur"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"ID du serveur o\xf9 l'autocollant sera cr\xe9\xe9."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"URL"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Lien d'une image (",(0,a.kt)("strong",{parentName:"td"},"format png seulement"),")."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Le nom de l'autocollant."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"renvoyerAutocollant?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"bool\xe9en"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Renvoie l'autocollant apr\xe8s sa cr\xe9ation. ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"true")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"false")," (par d\xe9faut)"),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"tags?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Tags de l'autocollant."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"description?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"La description de l'autocollant."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"raison?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Raison qui sera affich\xe9e dans les logs du serveur."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")))),(0,a.kt)("h2",d({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("p",null,"Cela va cr\xe9er un autocollant appel\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Imagine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'cr\xe9erAutocollant',\n    code: `\n  $createSticker[$guildID;https://cdn.discordapp.com/attachments/1061712111052521493/1066397675278323734/692445926480150611.png;Imagine;true;monnaie;Autocollant al\xe9atoire;Test.]\n  `\n});\n")))}O.isMDXComponent=!0}}]);