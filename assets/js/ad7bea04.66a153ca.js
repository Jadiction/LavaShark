"use strict";(self.webpackChunk_lavashark_website=self.webpackChunk_lavashark_website||[]).push([[5341],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),y=a,h=d["".concat(l,".").concat(y)]||d[y]||u[y]||o;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(8168),a=(t(6540),t(5680));const o={sidebar_position:4},i="FAQ",c={unversionedId:"FAQ",id:"version-1.3.3/FAQ",title:"FAQ",description:"Node can't connect",source:"@site/versioned_docs/version-1.3.3/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/docs/1.3.3/FAQ",draft:!1,editUrl:"https://github.com/hmes98318/LavaShark/blob/main/apps/website/versioned_docs/version-1.3.3/FAQ.md",tags:[],version:"1.3.3",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/1.3.3/getting-started"},next:{title:"Classes",permalink:"/docs/1.3.3/category/classes"}},l={},s=[{value:"Node can&#39;t connect",id:"node-cant-connect",level:3},{value:"The bot joined the voice channel, but there was no sound playing.",id:"the-bot-joined-the-voice-channel-but-there-was-no-sound-playing",level:3},{value:"Executed Player.connect(), but the bot didn&#39;t join the voice channel.",id:"executed-playerconnect-but-the-bot-didnt-join-the-voice-channel",level:3}],p={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"faq"},"FAQ"),(0,a.yg)("h3",{id:"node-cant-connect"},"Node can't connect"),(0,a.yg)("p",null,"If your node is unable to connect, please check the version of your Lavalink node.",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"LavaShark v1")," does not support ",(0,a.yg)("strong",{parentName:"p"},"Lavalink v3")," nodes without ",(0,a.yg)("strong",{parentName:"p"},"REST API"),".",(0,a.yg)("br",{parentName:"p"}),"\n","It is only compatible with Lavalink nodes of version ",(0,a.yg)("strong",{parentName:"p"},"3.7.x"),".  "),(0,a.yg)("h3",{id:"the-bot-joined-the-voice-channel-but-there-was-no-sound-playing"},"The bot joined the voice channel, but there was no sound playing."),(0,a.yg)("p",null,"Check if you have registered the ",(0,a.yg)("a",{parentName:"p",href:"https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits"},(0,a.yg)("inlineCode",{parentName:"a"},"GuildVoiceStates"))," gateway intent",(0,a.yg)("br",{parentName:"p"}),"\n","and if you have registered the ",(0,a.yg)("inlineCode",{parentName:"p"},"raw")," event on the Discord client."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"client.on('raw', (packet) => client.lavashark.handleVoiceUpdate(packet));\n")),(0,a.yg)("h3",{id:"executed-playerconnect-but-the-bot-didnt-join-the-voice-channel"},"Executed Player.connect(), but the bot didn't join the voice channel."),(0,a.yg)("p",null,"Check if you're using ",(0,a.yg)("strong",{parentName:"p"},"await")," when calling ",(0,a.yg)("inlineCode",{parentName:"p"},"Player.connect()")," and ensure that you've initialized ",(0,a.yg)("inlineCode",{parentName:"p"},"sendWS()")," when creating the LavaShark instance.  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"client.lavashark = new LavaShark({\n    nodes: nodeList,\n    sendWS: (guildId, payload) => { client.guilds.cache.get(guildId)?.shard.send(payload); }\n});\n")))}u.isMDXComponent=!0}}]);