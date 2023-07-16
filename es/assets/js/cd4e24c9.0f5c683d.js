"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[42555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,d=c["".concat(s,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>b,toc:()=>v});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(a)for(var n of a(t))p.call(t,n)&&m(e,n,t[n]);return e},u=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$modifyRolePerms"},y=void 0,b={unversionedId:"functions/modifyroleperms",id:"version-5.5.5/functions/modifyroleperms",title:"$modifyRolePerms",description:"This function allows the bot to modify the given roles permissions",source:"@site/versioned_docs/version-5.5.5/functions/modifyroleperms.md",sourceDirName:"functions",slug:"/functions/modifyroleperms",permalink:"/es/docs/5.5.5/functions/modifyroleperms",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689503057,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$modifyRolePerms"},sidebar:"docs",previous:{title:"$modifyRole",permalink:"/es/docs/5.5.5/functions/modifyrole"},next:{title:"$modifyWebhook",permalink:"/es/docs/5.5.5/functions/modifywebhook"}},g={},v=[],k={toc:v},O="wrapper";function h(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(O,u(c(c({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function allows the bot to modify the given roles permissions"),(0,r.kt)("p",null,"Fields"),(0,r.kt)("p",null,"This function has 2 required fields"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Role ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Permission 1 ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Permission 2 ","(","Optional",")"),(0,r.kt)("li",{parentName:"ol"},"Etc")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$modifyRolePerms[roleID;permission1;permission2 (optional);etc]")),(0,r.kt)("p",null,"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Role ID - The role we're modifying the permissions"),(0,r.kt)("li",{parentName:"ul"},"Permission","(","s",")"," - The permissions that are being modified. "),(0,r.kt)("li",{parentName:"ul"},"+perm = Allow the permission"),(0,r.kt)("li",{parentName:"ul"},"-perm = Deny the permission"),(0,r.kt)("li",{parentName:"ul"},"+/-all - Allows or denies all the permissions")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("p",null,"Allowing a permission"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "modifyRolePerms",\ncode: `$modifyRolePerms[$mentionedRoles[1];+admin]`\n})\n')),(0,r.kt)("p",null,"Denying a permission"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "modifyRolePerms",\ncode: `$modifyRolePerms[$mentionedRoles[1];-admin]`\n})\n')),(0,r.kt)("p",null,"Allowing all permissions"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "modifyRolePerms",\ncode: `$modifyRolePerms[$mentionedRoles[1];+all]`\n})\n')))}h.isMDXComponent=!0}}]);