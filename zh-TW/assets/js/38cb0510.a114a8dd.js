"use strict";(self.webpackChunk_lavashark_website=self.webpackChunk_lavashark_website||[]).push([[699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=o(n),m=r,h=k["".concat(d,".").concat(m)]||k[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[k]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={},l="Node",s={unversionedId:"classes/Node",id:"version-1.2.1/classes/Node",title:"Node",description:"Table of contents",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-1.2.1/classes/Node.md",sourceDirName:"classes",slug:"/classes/Node",permalink:"/zh-TW/docs/classes/Node",draft:!1,editUrl:"https://github.com/hmes98318/LavaShark/blob/main/apps/website/versioned_docs/version-1.2.1/classes/Node.md",tags:[],version:"1.2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LavaShark",permalink:"/zh-TW/docs/classes/LavaShark"},next:{title:"Player",permalink:"/zh-TW/docs/classes/Player"}},d={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Accessors",id:"accessors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"options",id:"options",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"rest",id:"rest",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"retryAttempts",id:"retryattempts",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"state",id:"state",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"stats",id:"stats",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"version",id:"version",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"Accessors",id:"accessors-1",level:2},{value:"identifier",id:"identifier",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"totalPenalties",id:"totalpenalties",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods-1",level:2},{value:"connect",id:"connect",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"disconnect",id:"disconnect",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"getInfo",id:"getinfo",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"getRoutePlannerStatus",id:"getrouteplannerstatus",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"getStats",id:"getstats",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"getVersion",id:"getversion",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"unmarkAllFailedAddress",id:"unmarkallfailedaddress",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"unmarkFailedAddress",id:"unmarkfailedaddress",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"updateStats",id:"updatestats",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"checkOptions",id:"checkoptions",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-18",level:4}],p={toc:o},k="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node"},"Node"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#constructor"},"constructor"))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#options"},"options")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#rest"},"rest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#retryattempts"},"retryAttempts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#state"},"state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#stats"},"stats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#version"},"version"))),(0,r.kt)("h3",{id:"accessors"},"Accessors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#identifier"},"identifier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#totalpenalties"},"totalPenalties"))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#connect"},"connect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#disconnect"},"disconnect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#getinfo"},"getInfo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#getrouteplannerstatus"},"getRoutePlannerStatus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#getstats"},"getStats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#getversion"},"getVersion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#unmarkallfailedaddress"},"unmarkAllFailedAddress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#unmarkfailedaddress"},"unmarkFailedAddress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#updatestats"},"updateStats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/classes/Node#checkoptions"},"checkOptions"))),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Node"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"lavashark"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),")"),(0,r.kt)("p",null,"\u5275\u5efa\u4e00\u500b Node \u5be6\u4f8b"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"lavashark")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh-TW/docs/classes/LavaShark"},(0,r.kt)("inlineCode",{parentName:"a"},"LavaShark"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"LavaShark \u5be6\u4f8b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh-TW/docs/types/Node.types#nodeoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeOptions"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Node \u9078\u9805")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L112"},"lib/Node.ts:112")),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"options"},"options"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"options"),": ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/types/Node.types#nodeoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeOptions"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L34"},"lib/Node.ts:34")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rest"},"rest"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"rest"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"RESTController")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L41"},"lib/Node.ts:41")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"retryattempts"},"retryAttempts"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"retryAttempts"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L43"},"lib/Node.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"state"},"state"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"state"),": ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/types/enums/enums.NodeState"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeState"))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L45"},"lib/Node.ts:45")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stats"},"stats"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"stats"),": ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/types/Node.types#nodestats"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeStats"))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L46"},"lib/Node.ts:46")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"version"},"version"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"version"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L48"},"lib/Node.ts:48")),(0,r.kt)("h2",{id:"accessors-1"},"Accessors"),(0,r.kt)("h3",{id:"identifier"},"identifier"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"identifier"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L149"},"lib/Node.ts:149")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"totalpenalties"},"totalPenalties"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"totalPenalties"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L153"},"lib/Node.ts:153")),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"connect"},"connect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"connect"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L178"},"lib/Node.ts:178")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disconnect"},"disconnect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"disconnect"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L207"},"lib/Node.ts:207")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getinfo"},"getInfo"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getInfo"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/types/Node.types#info"},(0,r.kt)("inlineCode",{parentName:"a"},"Info")),">"),(0,r.kt)("p",null,"\u7372\u53d6 Lavalink \u7bc0\u9ede\u8cc7\u8a0a"),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/types/Node.types#info"},(0,r.kt)("inlineCode",{parentName:"a"},"Info")),">"),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L227"},"lib/Node.ts:227")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getrouteplannerstatus"},"getRoutePlannerStatus"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getRoutePlannerStatus"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/types/Node.types#routeplannerstatus"},(0,r.kt)("inlineCode",{parentName:"a"},"RoutePlannerStatus")),">"),(0,r.kt)("p",null,"\u7372\u53d6\u8def\u5f91\u898f\u5283\u5668\u72c0\u614b"),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/types/Node.types#routeplannerstatus"},(0,r.kt)("inlineCode",{parentName:"a"},"RoutePlannerStatus")),">"),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L246"},"lib/Node.ts:246")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getstats"},"getStats"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getStats"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/types/Node.types#nodestats"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeStats")),">"),(0,r.kt)("p",null,"\u7372\u53d6 Lavalink \u7bc0\u9ede\u7d71\u8a08\u4fe1\u606f"),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/types/Node.types#nodestats"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeStats")),">"),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L236"},"lib/Node.ts:236")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getversion"},"getVersion"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getVersion"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"\u7372\u53d6 Lavalink \u7bc0\u9ede\u7248\u672c"),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L217"},"lib/Node.ts:217")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unmarkallfailedaddress"},"unmarkAllFailedAddress"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"unmarkAllFailedAddress"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Unmarks all failed address"),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L261"},"lib/Node.ts:261")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unmarkfailedaddress"},"unmarkFailedAddress"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"unmarkFailedAddress"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Unmarks a failed address"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address to unmark")))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L254"},"lib/Node.ts:254")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updatestats"},"updateStats"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"updateStats"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L489"},"lib/Node.ts:489")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"checkoptions"},"checkOptions"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"checkOptions"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh-TW/docs/types/Node.types#nodeoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeOptions")))))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Node.ts#L50"},"lib/Node.ts:50")))}u.isMDXComponent=!0}}]);