"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[80498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>h,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var a=n(3905),o=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>r(e,l(t)),m=(e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$autoCompleteRespond",description:"El $autoCompleteRespond se utiliza para completar autom\xe1ticamente las opciones de barra.",id:"autoCompleteRespond"},v=void 0,b={unversionedId:"functions/interaction-related/autoCompleteRespond",id:"version-6.4.0/functions/interaction-related/autoCompleteRespond",title:"$autoCompleteRespond",description:"El $autoCompleteRespond se utiliza para completar autom\xe1ticamente las opciones de barra.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/autoCompleteRespond.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/autoCompleteRespond",permalink:"/es/docs/functions/interaction-related/autoCompleteRespond",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$autoCompleteRespond",description:"El $autoCompleteRespond se utiliza para completar autom\xe1ticamente las opciones de barra.",id:"autoCompleteRespond"},sidebar:"docs",previous:{title:"$author",permalink:"/es/docs/functions/interaction-related/author"},next:{title:"$clear",permalink:"/es/docs/functions/interaction-related/clear"}},y={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2},{value:"Ejemplo(s) avanzado",id:"ejemplos-avanzado",level:3}],k={toc:g},O="wrapper";function h(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,a.kt)(O,d(u(u({},k),o),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$autoCompleteRespond")," se utiliza para autocompletar las opciones de barra."),(0,a.kt)("h2",u({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$autoCompleteRespond[objeto]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$autoCompleteRespond[nombre de la opci\xf3n;Opci\xf3nResponder;...]\n")),(0,a.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Nombre de opci\xf3n"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Nombre de la opci\xf3n de autocompletar que se mostrar\xe1 al usuario."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Opci\xf3n de respuesta"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"La respuesta que se enviar\xe1 si la opci\xf3n de autocompletado fue seleccionada, (no visible para el usuario)."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")))),(0,a.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Crea la barra de comandos: (por favor ten en cuenta que necesitas los eventos ",(0,a.kt)("inlineCode",{parentName:"p"},': ["onMessage", "onInteractionCreate"]')," evento en tu archivo principal)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'createSlashCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n  "name": "option",\n  "description": "test",\n  "required": false,\n  "type": 3,\n  "autocomplete": true\n}]\n  `\n});\n')),(0,a.kt)("p",null,"Comando de interacci\xf3n:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "test",\n    prototype: "slash",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[Primera opci\xf3n;Seleccion\xf3 la primera opci\xf3n, por lo tanto estoy respondiendo con esto!;Segunda opci\xf3n;Seleccion\xf3 el primer segundo, por lo tanto, estoy respondiendo con esto!]\n  $else\n  $interactionReply[$slashOption[option];;;;everyone]\n  $endif\n  `\n});\n')),(0,a.kt)("h3",u({},{id:"ejemplos-avanzado"}),"Ejemplo(s) avanzado"),(0,a.kt)("p",null,"Crea la barra de comandos: (por favor ten en cuenta que necesitas los eventos ",(0,a.kt)("inlineCode",{parentName:"p"},': ["onMessage", "onInteractionCreate"]')," evento en tu archivo principal)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'createSlashCommand\',\n    code: `\n  $createApplicationCommand[global;ejemple;Impresionante comando de interacci\xf3n de ejemplo con autocompletar.;true;slash;[{\n  "name": "option",\n  "description": "test",\n  "required": false,\n  "type": 3,\n  "autocomplete": true\n}, {\n  "name": "anotheroption",\n  "description": "test",\n  "required": false,\n  "type": 3\n}]\n  `\n});\n')),(0,a.kt)("p",null,"Comando de interacci\xf3n:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "test",\n    prototype: "slash",\n    $if: "old",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[[{ \n    "name" : "Primera opci\xf3n",\n    "value" : "\xa1Seleccionaste la primera opci\xf3n, por lo tanto respondo con esto!"\n  }, {\n    "name" : "Segunda opci\xf3n",\n    "value" : "\xa1Seleccionaste la segunda opci\xf3n, por lo tanto estoy respondiendo con esto!"\n  }]]\n  $else\n  $interactionReply[$slashOption[option] - autocomplete #SEMI# $slashOption[anotheroption] - false autocomplete;;;;everyone]\n  $endif\n  `\n});\n')))}h.isMDXComponent=!0}}]);