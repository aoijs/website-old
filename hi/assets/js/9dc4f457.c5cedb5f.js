"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>h,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e},m=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"Command Types"},y=void 0,b={unversionedId:"options/commandTypes",id:"version-5.5.5/options/commandTypes",title:"Command Types",description:"Available Types Are Listed Below*",source:"@site/versioned_docs/version-5.5.5/options/commandTypes.md",sourceDirName:"options",slug:"/options/commandTypes",permalink:"/hi/docs/5.5.5/options/commandTypes",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"Command Types"}},v={},g=[],O={toc:g},j="wrapper";function h(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(j,m(d(d({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Available Types Are Listed Below")))),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"'default'\n'awaited'\n'messageDelete'\n'messageUpdate'\n'messageDeleteBulk'\n'guildJoin'\n'guildUpdate'\n'guildLeave'\n'guildUnavailable'\n'roleCreate'\n'roleUpdate'\n'roleDelete'\n'channelCreate'\n'channelUpdate'\n'channelDelete'\n'channelPinsUpdate'\n'stageInstanceCreate'\n'stageInstanceUpdate'\n'stageInstanceDelete'\n'stickerCreate'\n'stickerDelete'\n'stickerUpdate'\n'threadCreate'\n'threadDelete'\n'threadListSync'\n'threadMemberUpdate'\n'threadMembersUpdate'\n'threadUpdate'\n'join'\n'leave'\n'memberUpdate'\n'memberAvailable'\n'membersChunk'\n'emojiCreate'\n'emojiUpdate'\n'emojiDelete'\n'banAdd'\n'banRemove'\n'webhookUpdate'\n'inviteCreate'\n'inviteDelete'\n'voiceStateUpdate'\n'presenceUpdate'\n'reactionAdd'\n'reactionRemove'\n'reactionRemoveEmoji'\n'reactionRemoveAll'\n'typingStart'\n'loop'\n'timeout'\n'pulse'\n'ready'\n'variableCreate'\n'variableDelete'\n'variableUpdate'\n'functionError'\n'interaction'\n'applicationCmdCreate'\n'applicationCmdUpdate'\n'applicationCmdDelete'\n'userUpdate'\n'rateLimit'\u200a\n"))))}h.isMDXComponent=!0}}]);