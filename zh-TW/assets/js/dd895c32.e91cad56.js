"use strict";(self.webpackChunk_lavashark_website=self.webpackChunk_lavashark_website||[]).push([[801],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,g=u["".concat(p,".").concat(m)]||u[m]||y[m]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5276:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(8168),n=(r(6540),r(5680));const i={sidebar_position:1},o="LavaShark",l={unversionedId:"README",id:"version-1.2.2/README",title:"LavaShark",description:"\u4f7f\u7528 Node.js \u69cb\u5efa\u7684\u8f15\u91cf\u7d1a Lavalink \u5ba2\u6236\u7aef\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-1.2.2/README.md",sourceDirName:".",slug:"/",permalink:"/zh-TW/docs/1.2.2/",draft:!1,editUrl:"https://github.com/hmes98318/LavaShark/blob/main/apps/website/versioned_docs/version-1.2.2/README.md",tags:[],version:"1.2.2",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u4f3a\u670d\u5668\u914d\u7f6e",permalink:"/zh-TW/docs/1.2.2/server-config"}},p={},s=[{value:"\u7279\u9ede",id:"\u7279\u9ede",level:3},{value:"Installation",id:"installation",level:2},{value:"\u5176\u4ed6\u8cc7\u6e90",id:"\u5176\u4ed6\u8cc7\u6e90",level:2}],c={toc:s},u="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"lavashark"},"LavaShark"),(0,n.yg)("p",null,"\u4f7f\u7528 Node.js \u69cb\u5efa\u7684\u8f15\u91cf\u7d1a Lavalink \u5ba2\u6236\u7aef\u3002  "),(0,n.yg)("h3",{id:"\u7279\u9ede"},"\u7279\u9ede"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u7a69\u5b9a  ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u7269\u4ef6\u5c0e\u5411  ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5feb\u901f\u9ad8\u6548  "))),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"\u50c5\u5c0d\u652f\u6301 REST API\uff08\u7248\u672c 3.7.x\uff09\u7684 Lavalink \u7bc0\u9ede\u517c\u5bb9\u3002")),(0,n.yg)("h2",{id:"installation"},"Installation"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"\u9700\u8981 Node.js 16.9 \u6216\u66f4\u9ad8\u7248\u672c\u3002  "),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"\u4f60\u9700\u8981\u81f3\u5c11\u4e00\u500b ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/lavalink-devs/Lavalink"},"Lavalink \u4f3a\u670d\u5668"),"\u7bc0\u9ede\u624d\u80fd\u904b\u884c\u3002\u8acb\u53c3\u8003\u300c",(0,n.yg)("a",{parentName:"li",href:"/zh-TW/docs/1.2.2/server-config"},"\u4f3a\u670d\u5668\u914d\u7f6e"),"\u300d\u90e8\u5206\u9032\u884c\u914d\u7f6e\u8a2d\u7f6e\u3002"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"$ npm install lavashark\n# or\n$ yarn add lavashark\n")),(0,n.yg)("h2",{id:"\u5176\u4ed6\u8cc7\u6e90"},"\u5176\u4ed6\u8cc7\u6e90"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/hmes98318/LavaShark"},"Github repository")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/lavashark"},"NPM page")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://discord.gg/7rQEx7SPGr"},"Discord server"))))}y.isMDXComponent=!0}}]);