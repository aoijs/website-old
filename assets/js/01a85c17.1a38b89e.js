"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64013],{12462:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(67294),s=a(86010),l=a(7452),n=a(9322);function r(e){const{sidebar:t,toc:a,children:r,...m}=e,c=t&&t.items.length>0;return i.createElement(l.Z,m,i.createElement("div",{className:"container margin-vert--lg"},i.createElement("div",{className:"row"},i.createElement(n.Z,{sidebar:t}),i.createElement("main",{className:(0,s.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},r),a&&i.createElement("div",{className:"col col--2"},a))))}},13008:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(67294),s=a(86010),l=a(39960);const n={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function r(e){let{permalink:t,label:a,count:r}=e;return i.createElement(l.Z,{href:t,className:(0,s.Z)(n.tag,r?n.tagWithCount:n.tagRegular)},a,r&&i.createElement("span",null,r))}},44057:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(67294),s=a(30143);const l=()=>i.createElement(s.ZP,{acceptOnScroll:!0,acceptOnScrollPercentage:150,buttonStyle:{backgroundColor:"var(--ifm-color-primary)",color:"#fff",padding:"10px 20px",border:"none",borderRadius:"6px",cursor:"pointer"}},"This website uses cookies to enhance the user experience.")},9322:(e,t,a)=>{a.d(t,{Z:()=>k});var i=a(67294),s=a(87524),l=a(86010),n=a(39960),r=a(95999);const m={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};function c(e){let{sidebar:t}=e;const a=["/wikis/submit","/wikis/guidelines","/wikis/tags"];return i.createElement("aside",{className:"col col--3"},i.createElement("nav",{className:(0,l.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,r.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},i.createElement("div",{className:(0,l.Z)(m.sidebarItemTitle,"margin-bottom--md")},"Introduction"),i.createElement("ul",{className:(0,l.Z)(m.sidebarItemList,"clean-list")},i.createElement("li",{key:"/wikis/guidelines",className:m.sidebarItem},i.createElement(n.Z,{isNavLink:!0,to:"/wikis/guidelines",className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},"Wiki Guidelines")),i.createElement("li",{key:"/wikis/submit",className:m.sidebarItem},i.createElement(n.Z,{isNavLink:!0,to:"/wikis/submit",className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},"Submit Wiki")),i.createElement("li",{key:"/wikis/tags",className:m.sidebarItem},i.createElement(n.Z,{isNavLink:!0,to:"/wikis/tags",className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},"Tags"))),i.createElement("div",{className:(0,l.Z)(m.sidebarItemTitle,"margin-bottom--md")},"Wikis"),i.createElement("ul",{className:(0,l.Z)(m.sidebarItemList,"clean-list")},t.items.map((e=>a.includes(e.permalink)?null:i.createElement("li",{key:e.permalink,className:m.sidebarItem},i.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var o=a(13102);function u(e){var t;let{sidebar:a}=e;return i.createElement("ul",{className:"menu__list"},i.createElement("div",{className:"menu__title"},"Introduction"),i.createElement("li",{key:"/wikis/guidelines",className:"menu__list-item"},i.createElement(n.Z,{isNavLink:!0,to:"/wikis/guidelines",className:"menu__link",activeClassName:"menu__link--active"},"Wiki Guidelines")),i.createElement("li",{key:"/wikis/submit",className:"menu__list-item"},i.createElement(n.Z,{isNavLink:!0,to:"/wikis/submit",className:"menu__link",activeClassName:"menu__link--active"},"Submit Wiki")),i.createElement("li",{key:"/wikis/tags",className:"menu__list-item"},i.createElement(n.Z,{isNavLink:!0,to:"/wikis/tags",className:"menu__link",activeClassName:"menu__link--active"},"Tags")),i.createElement("div",{className:"menu__title",style:{marginTop:"30px"}},"Wikis"),null==a||null==(t=a.items)?void 0:t.map((e=>i.createElement("li",{key:e.permalink,className:"menu__list-item"},i.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function d(e){var t;let{sidebar:a}=e;const s=["/wikis/submit","/wikis/guidelines","/wikis/tags"];return i.createElement(o.Zo,{component:u,props:{sidebar:{...a,items:null==a||null==(t=a.items)?void 0:t.filter((e=>!s.includes(e.permalink)))}}})}function k(e){let{sidebar:t}=e;const a=(0,s.i)();return null!=t&&t.items.length?"mobile"===a?i.createElement(d,{sidebar:t}):i.createElement(c,{sidebar:t}):null}},38119:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var i=a(67294),s=a(86010),l=a(95999);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var r=a(10833),m=a(35281),c=a(44057),o=a(12462),u=a(13008);const d={tag:"tag_Nnez"};function k(e){let{letterEntry:t}=e;return i.createElement("article",null,i.createElement("h2",null,t.letter),i.createElement("ul",{className:"padding--none"},t.tags.map((e=>i.createElement("li",{key:e.permalink,className:d.tag},i.createElement(u.Z,e))))),i.createElement("hr",null))}function b(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[i]=t;return a.localeCompare(i)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return i.createElement("section",{className:"margin-vert--lg"},a.map((e=>i.createElement(k,{key:e.letter,letterEntry:e}))))}var g=a(90197);function E(e){let{tags:t,sidebar:a}=e;const l=n();return i.createElement(r.FG,{className:(0,s.Z)(m.k.wrapper.blogPages,m.k.page.blogTagsListPage)},i.createElement("div",null,i.createElement(c.Z,null)),i.createElement(r.d,{title:l}),i.createElement(g.Z,{tag:"blog_tags_list"}),i.createElement(o.Z,{sidebar:a},i.createElement("h2",null,l),i.createElement(b,{tags:t})))}}}]);