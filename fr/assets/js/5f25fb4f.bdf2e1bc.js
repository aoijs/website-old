"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[58895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,y=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>k,toc:()=>b});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const y={title:"$autoPlay",description:"Plays relative songs/musics similar to played track."},f=void 0,k={unversionedId:"functions/autoplay",id:"version-5.5.5/functions/autoplay",title:"$autoPlay",description:"Plays relative songs/musics similar to played track.",source:"@site/versioned_docs/version-5.5.5/functions/autoplay.md",sourceDirName:"functions",slug:"/functions/autoplay",permalink:"/fr/docs/5.5.5/functions/autoplay",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$autoPlay",description:"Plays relative songs/musics similar to played track."}},g={},b=[{value:"Usage",id:"usage",level:3},{value:"Types",id:"types",level:3},{value:"Footnote",id:"footnote",level:6},{value:"Example",id:"example",level:2}],v={toc:b},h="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(h,d(c(c({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$autoPlay")," is an amazing function that adds songs similar to the one you're currently listening to, and there is a queue list for hours to you chill :) ."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Requires ",(0,r.kt)("inlineCode",{parentName:"p"},"@akarui/aoi.music")," package.")),(0,r.kt)("h3",c({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$autoPlay[type]\n")),(0,r.kt)("h3",c({},{id:"types"}),"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"relative"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"Adds tracks that played on last platform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"soundcloud"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"Adds soundcloud tracks similar to current track")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"youtube"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"Adds youtube tracks similar to current track")))),(0,r.kt)("h6",c({},{id:"footnote"}),"Footnote"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"You ",(0,r.kt)("strong",{parentName:"em"},"cannot")," use ",(0,r.kt)("inlineCode",{parentName:"em"},"$autoPlay[soundcloud]")," on Youtube track, same goes for ",(0,r.kt)("inlineCode",{parentName:"em"},"$autoPlay[youtube]")," on Soundcloud track. We recommend you to use ",(0,r.kt)("inlineCode",{parentName:"em"},"$autoPlay[relative]")," if you are thinking to use ",(0,r.kt)("strong",{parentName:"em"},"Soundcloud")," and ",(0,r.kt)("strong",{parentName:"em"},"Youtube")," together on your bot."))),(0,r.kt)("h2",c({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "auto-play",\n  code: `\n  $autoPlay[youtube]\n  `\n//Since we are listening to "[Arknights OST] Shop Theme BGM", it will add songs that related to "[Arknights OST] Shop Theme BGM".\n});\n')),(0,r.kt)("p",null,"Now, keep your bot on Stage Channel and hang out with new users and members!"))}O.isMDXComponent=!0}}]);