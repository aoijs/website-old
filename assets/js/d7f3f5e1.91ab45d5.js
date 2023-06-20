"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37822],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d[u]="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={title:"randomText advanced",description:"A custom function to get random/specified number of words.",authors:{name:"@ahoemi",title:"Member",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"},tags:["v6","Other"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,d={permalink:"/wikis/posts/randomtext-advanced-xzyzwx",source:"@site/forums/posts/randomtext-advanced-xzyzwx.md",title:"randomText advanced",description:"A custom function to get random/specified number of words.",date:"2023-06-20T22:37:06.000Z",formattedDate:"June 20, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"Other",permalink:"/wikis/tags/other"}],hasTruncateMarker:!1,authors:[{name:"@ahoemi",title:"Member",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png",imageURL:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"}],frontMatter:{title:"randomText advanced",description:"A custom function to get random/specified number of words.",authors:{name:"@ahoemi",title:"Member",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png",imageURL:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"},tags:["v6","Other"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Ping Command",permalink:"/wikis/posts/ping"},nextItem:{title:"Roblox group info command",permalink:"/wikis/posts/roblox-group-info-command-ebigj"}},c={authorsImageUrls:[void 0]},s=[{value:"Code",id:"code",level:2},{value:"Usage",id:"usage",level:3},{value:"Where do i use it?",id:"where-do-i-use-it",level:3}],l={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'bot.functionManager.createFunction({\n  name: "$randomWord",\n  type: "djs",\n  code: async (d) => {\n  const functionName = "$randomWord";\n  const data = d.util.aoiFunc(d);\n  const [ words, numb = 1 ] = data.inside.splits;\n\nif (!words || words === "") {\n let error = `\\`\\`\\`elixir\\nRei.js Error\\n${functionName}: Words were not provided!\\`\\`\\``\n  data.result = error\n} else {\n  let wordArr = words.split(\':\');\n  let num = numb > wordArr.length ? wordArr.length : numb;\n  var randWords = [];\n  for (let i = 0; i < num; i++) {\n    let newRandom;\n    do {\n      let rand = Math.floor(Math.random() * wordArr.length);\n      newRandom = wordArr[rand];\n    } while (randWords.includes(newRandom));\n    randWords.push(newRandom);\n  }\nconst output = randWords.join(\', \')\ndata.result = output\n}\n    return {\n      code: d.util.setCode(data),\n    };\n  }\n})\n')),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$randomWord[Hi:Hello:Bye:Sayonara;2]"),"\nwill return 2 random words from Hi, Hello, Bye and Sayonara"),(0,a.kt)("h3",{id:"where-do-i-use-it"},"Where do i use it?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Paste it at bottom of your main file."),(0,a.kt)("li",{parentName:"ul"},"You can also edit it and use in handler\nMention me in support server for any help.")))}p.isMDXComponent=!0}}]);