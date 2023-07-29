"use strict";(self.webpackChunk_lavashark_website=self.webpackChunk_lavashark_website||[]).push([[3396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),v=a,f=d["".concat(s,".").concat(v)]||d[v]||u[v]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},7234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},i="FAQ",c={unversionedId:"FAQ",id:"version-1.2.0/FAQ",title:"FAQ",description:"Node can't connect",source:"@site/versioned_docs/version-1.2.0/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/docs/1.2.0/FAQ",draft:!1,editUrl:"https://github.com/hmes98318/LavaShark/blob/main/apps/website/versioned_docs/version-1.2.0/FAQ.md",tags:[],version:"1.2.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/1.2.0/getting-started"},next:{title:"Classes",permalink:"/docs/1.2.0/category/classes"}},s={},p=[{value:"Node can&#39;t connect",id:"node-cant-connect",level:3},{value:"The bot joined the voice channel, but there was no sound playing.",id:"the-bot-joined-the-voice-channel-but-there-was-no-sound-playing",level:3}],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"node-cant-connect"},"Node can't connect"),(0,a.kt)("p",null,"If your node is unable to connect, please check the version of your Lavalink node.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"LavaShark v1")," does not support ",(0,a.kt)("strong",{parentName:"p"},"Lavalink v3")," nodes without ",(0,a.kt)("strong",{parentName:"p"},"REST API"),".",(0,a.kt)("br",{parentName:"p"}),"\n","It is only compatible with Lavalink nodes of version ",(0,a.kt)("strong",{parentName:"p"},"3.7.x"),".  "),(0,a.kt)("h3",{id:"the-bot-joined-the-voice-channel-but-there-was-no-sound-playing"},"The bot joined the voice channel, but there was no sound playing."),(0,a.kt)("p",null,"Check if you have registered the ",(0,a.kt)("a",{parentName:"p",href:"https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits"},(0,a.kt)("inlineCode",{parentName:"a"},"GuildVoiceStates"))," gateway intent",(0,a.kt)("br",{parentName:"p"}),"\n","and if you have registered the ",(0,a.kt)("inlineCode",{parentName:"p"},"raw")," event on the Discord client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"client.on('raw', (packet) => client.lavashark.handleVoiceUpdate(packet));\n")))}u.isMDXComponent=!0}}]);