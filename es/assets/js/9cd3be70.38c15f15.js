"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[20554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>w,frontMatter:()=>b,metadata:()=>g,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e},s=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const b={title:"$globalCooldown",description:"$globalCooldown establecer\xe1 un tiempo de reutilizaci\xf3n global para un comando.",id:"globalCooldown"},f=void 0,g={unversionedId:"functions/variables-related/globalCooldown",id:"version-6.4.0/functions/variables-related/globalCooldown",title:"$globalCooldown",description:"$globalCooldown establecer\xe1 un tiempo de reutilizaci\xf3n global para un comando.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/globalCooldown.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/globalCooldown",permalink:"/es/docs/functions/variables-related/globalCooldown",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572827,formattedLastUpdatedAt:"13 sept 2023",frontMatter:{title:"$globalCooldown",description:"$globalCooldown establecer\xe1 un tiempo de reutilizaci\xf3n global para un comando.",id:"globalCooldown"},sidebar:"docs",previous:{title:"$getVar",permalink:"/es/docs/functions/variables-related/getVar"},next:{title:"$globalUserLeaderBoard",permalink:"/es/docs/functions/variables-related/globalUserLeaderBoard"}},k={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:v},N="wrapper";function w(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(N,s(u(u({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$globalCooldown")," establecer\xe1 un tiempo de recarga global para un comando."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$globalCooldown[time;errorMessage]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Puedes recuperar el tiempo de enfriamiento restante en la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"li"},"$globalCooldown")," usando ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"%time%"))," o cualquiera de los siguientes a continuaci\xf3n.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%time%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%year%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%month%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%week%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%day%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%hour%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%min%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%sec%")," ",(0,r.kt)("inlineCode",{parentName:"li"},"%ms%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%fullTime%"))))),(0,r.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"tiempo"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"La duraci\xf3n del enfriamiento."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"mensaje de error"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Mensaje de error dado cuando queda tiempo del tiempo de enfriamiento."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")))),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"Hola")," y evitar\xe1 que cualquiera ejecute el comando de nuevo durante otros cinco minutos:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'globalCooldown',\n    code: `\n  Hola\n  $globalCooldown[5m;Please wait %time% to execute this command again.]\n  `\n});\n")))}w.isMDXComponent=!0}}]);