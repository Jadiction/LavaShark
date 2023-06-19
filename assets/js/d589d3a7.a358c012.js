"use strict";(self.webpackChunk_lavashark_website=self.webpackChunk_lavashark_website||[]).push([[162],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=r,m=p["".concat(i,".").concat(g)]||p[g]||u[g]||s;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=g;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const s={sidebar_position:2},o="Getting started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"Initializing the LavaShark and discord.js library",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/LavaShark/docs/getting-started",draft:!1,editUrl:"https://github.com/hmes98318/LavaShark/blob/main/apps/website/docs/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"LavaShark",permalink:"/LavaShark/docs/"},next:{title:"Server configuration",permalink:"/LavaShark/docs/server-config"}},i={},c=[],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"Initializing the LavaShark and discord.js library  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Client, GatewayIntentBits } = require('discord.js');\nconst { LavaShark } = require('lavashark');\n\nconst TOKEN = 'your_token'; // Discord bot token\nconst prefix = '-';         // Command prefix\n\n\nconst client = new Client({\n    intents: [\n        GatewayIntentBits.Guilds,\n        GatewayIntentBits.GuildMessages,\n        GatewayIntentBits.MessageContent,\n        GatewayIntentBits.GuildVoiceStates,\n    ]\n});\n\nconst lavashark = new LavaShark({\n    nodes: [\n        {\n            id: 'Node 1',\n            hostname: 'localhost',\n            port: 2333,\n            password: 'youshallnotpass'\n        }\n    ],\n    sendWS: (guildId, payload) => { client.guilds.cache.get(guildId)?.shard.send(payload); }\n});\n\nclient.lavashark = lavashark;\nclient.login(TOKEN);\n")),(0,r.kt)("p",null,"Registering events  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// -- LavaShark events --\n\n// Fired when a track starts playing\nclient.lavashark.on('trackStart', (player, track) => {\n    const channel = client.channels.cache.get(player.textChannelId);\n    channel.send(`Now playing \\`${track.title}\\``);\n});\n\n// Fired when the queue ends\nclient.lavashark.on('queueEnd', (player) => {\n    const channel = client.channels.cache.get(player.textChannelId);\n    channel.send(`Queue ended`);\n    player.destroy();\n});\n\n// This event is needed to catch any errors that occur on LavaShark\nclient.lavashark.on('error', (node, err) => {\n    console.error('[LavaShark]', `Error on node ${node.identifier}`, err.message);\n});\n\n\n// -- Client events --\n\nclient.on('ready', () => {\n    console.log('Ready!');\n\n    // Starts the lavashark & connects to all lavalink nodes\n    client.lavashark.start(client.user.id);\n});\n\n// -- REQUIRED --\nclient.on('raw', (packet) => client.lavashark.handleVoiceUpdate(packet));\n\n")),(0,r.kt)("p",null,"Command configuration  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"client.on('messageCreate', async message => {\n    if (message.author.bot) return;\n    if (message.content.indexOf(prefix) !== 0) return;\n\n\n    const args = message.content.slice(prefix.length).trim().split(/ +/g);\n    const command = args.shift().toLowerCase();\n\n    if (!message.member.voice.channel)\n        return message.reply('\u274c | You are not connected to an audio channel.');\n\n    if (message.guild.members.me.voice.channel && message.member.voice.channelId !== message.guild.members.me.voice.channelId)\n        return message.reply('\u274c | You are not on the same audio channel as me.');\n\n\n    console.log('--', command);\n\n    if (command === 'play') {\n        const track = args[0];\n\n        const res = await client.lavashark.search(track);\n\n        if (res.loadType === \"LOAD_FAILED\") {\n            console.log(`Search Error: ${res.exception.message}`);\n            return message.reply('\u274c | Not found music.');\n        }\n        else if (res.loadType === \"NO_MATCHES\") {\n            console.log(`Search Error: NO_MATCHES`);\n            return message.reply('\u274c | No matches.');\n        }\n\n        // Creates the audio player\n        const player = client.lavashark.createPlayer({\n            guildId: message.guild.id,\n            voiceChannelId: message.member.voice.channelId,\n            textChannelId: message.channel.id,\n            selfDeaf: true\n        });\n\n        // Connects to the voice channel\n        try {\n            player.connect();\n        } catch (error) {\n            console.log(error);\n            return message.reply('\u274c | I can\\'t join voice channel.');\n        }\n\n        if (res.loadType === 'PLAYLIST_LOADED') {\n            for (const track of res.tracks) {\n                track.setRequester(message.user);\n                player.queue.add(track);\n            }\n\n            message.reply(`Playlist \\`${res.playlistInfo.name}\\` loaded!`);\n        }\n        else {\n            const track = res.tracks[0];\n            track.setRequester(message.user);\n\n            player.queue.add(track);\n            message.reply(`Queued \\`${track.title}\\``);\n        }\n\n        if (!player.playing) player.play();\n    }\n});\n")))}u.isMDXComponent=!0}}]);