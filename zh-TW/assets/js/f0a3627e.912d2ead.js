"use strict";(self.webpackChunk_lavashark_website=self.webpackChunk_lavashark_website||[]).push([[6961],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),y=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=y(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=y(n),g=r,u=d["".concat(l,".").concat(g)]||d[g]||c[g]||p;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var y=2;y<p;y++)o[y]=n[y];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>y});var a=n(8168),r=(n(6540),n(5680));const p={},o="@types/Node.PlayerEventPayload",i={unversionedId:"types/interfaces/Node.types.PlayerEventPayload",id:"version-1.3.3/types/interfaces/Node.types.PlayerEventPayload",title:"@types/Node.PlayerEventPayload",description:"@types/Node.types.PlayerEventPayload",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-1.3.3/types/interfaces/Node.types.PlayerEventPayload.md",sourceDirName:"types/interfaces",slug:"/types/interfaces/Node.types.PlayerEventPayload",permalink:"/zh-TW/docs/1.3.3/types/interfaces/Node.types.PlayerEventPayload",draft:!1,editUrl:"https://github.com/hmes98318/LavaShark/blob/main/apps/website/versioned_docs/version-1.3.3/types/interfaces/Node.types.PlayerEventPayload.md",tags:[],version:"1.3.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"enums/RepeatMode",permalink:"/zh-TW/docs/1.3.3/types/enums/enums.RepeatMode"},next:{title:"@types/Node.TrackEndEvent",permalink:"/zh-TW/docs/1.3.3/types/interfaces/Node.types.TrackEndEvent"}},l={},y=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"guildId",id:"guildid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"op",id:"op",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-2",level:4}],s={toc:y},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"typesnodeplayereventpayload"},"@types/Node.PlayerEventPayload"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/zh-TW/docs/1.3.3/types/Node.types"},"@types/Node.types"),".PlayerEventPayload"),(0,r.yg)("p",null,"Lavalink node incoming payloads"),(0,r.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"PlayerEventPayload"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/zh-TW/docs/1.3.3/types/interfaces/Node.types.TrackStartEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"TrackStartEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/zh-TW/docs/1.3.3/types/interfaces/Node.types.TrackEndEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"TrackEndEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/zh-TW/docs/1.3.3/types/interfaces/Node.types.TrackExceptionEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"TrackExceptionEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/zh-TW/docs/1.3.3/types/interfaces/Node.types.TrackStuckEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"TrackStuckEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/zh-TW/docs/1.3.3/types/interfaces/Node.types.WebSocketClosedEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"WebSocketClosedEvent"))))),(0,r.yg)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh-TW/docs/1.3.3/types/interfaces/Node.types.PlayerEventPayload#guildid"},"guildId")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh-TW/docs/1.3.3/types/interfaces/Node.types.PlayerEventPayload#op"},"op")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh-TW/docs/1.3.3/types/interfaces/Node.types.PlayerEventPayload#type"},"type"))),(0,r.yg)("h2",{id:"properties-1"},"Properties"),(0,r.yg)("h3",{id:"guildid"},"guildId"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"guildId"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("h4",{id:"defined-in"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Node.types.ts#L109"},"@types/Node.types.ts:109")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"op"},"op"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"op"),": ",(0,r.yg)("inlineCode",{parentName:"p"},'"event"')),(0,r.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Node.types.ts#L107"},"@types/Node.types.ts:107")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"type"},"type"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"type"),": ",(0,r.yg)("inlineCode",{parentName:"p"},'"TrackStartEvent"')," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},'"TrackEndEvent"')," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},'"TrackExceptionEvent"')," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},'"TrackStuckEvent"')," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},'"WebSocketClosedEvent"')),(0,r.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Node.types.ts#L108"},"@types/Node.types.ts:108")))}c.isMDXComponent=!0}}]);