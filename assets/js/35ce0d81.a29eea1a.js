"use strict";(self.webpackChunk_lavashark_website=self.webpackChunk_lavashark_website||[]).push([[5258],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),y=r,m=c["".concat(s,".").concat(y)]||c[y]||d[y]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},8617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(8168),r=(t(6540),t(5680));const o={sidebar_position:2},i="Server configuration",l={unversionedId:"server-config",id:"version-1.3.3/server-config",title:"Server configuration",description:"you need to download the Lavalink server (lavalink-devs/Lavalink) and run it, or use other public nodes.",source:"@site/versioned_docs/version-1.3.3/server-config.md",sourceDirName:".",slug:"/server-config",permalink:"/docs/1.3.3/server-config",draft:!1,editUrl:"https://github.com/hmes98318/LavaShark/blob/main/apps/website/versioned_docs/version-1.3.3/server-config.md",tags:[],version:"1.3.3",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"LavaShark",permalink:"/docs/1.3.3/"},next:{title:"Getting started",permalink:"/docs/1.3.3/getting-started"}},s={},u=[{value:"Deploying with Binary",id:"deploying-with-binary",level:2},{value:"Deploying with Docker",id:"deploying-with-docker",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"server-configuration"},"Server configuration"),(0,r.yg)("p",null,"you need to download the Lavalink server (",(0,r.yg)("a",{parentName:"p",href:"https://github.com/lavalink-devs/Lavalink"},"lavalink-devs/Lavalink"),") and run it, or use other public nodes.  "),(0,r.yg)("p",null,"If you need public nodes, you can refer to the following repository.  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/DarrenOfficial/lavalink-list"},"DarrenOfficial/lavalink-list")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/brblacky/lavalink-list"},"brblacky/lavalink-list"))),(0,r.yg)("h2",{id:"deploying-with-binary"},"Deploying with Binary"),(0,r.yg)("p",null,"Download binaries from the ",(0,r.yg)("a",{parentName:"p",href:"https://repo.arbjerg.dev/artifacts/lavalink/"},"Download Server"),", ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/lavalink-devs/Lavalink/releases"},"GitHub releases")," or ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/lavalink-devs/Lavalink/actions"},"GitHub actions"),"."),(0,r.yg)("p",null,"Put an ",(0,r.yg)("inlineCode",{parentName:"p"},"application.yml")," file in your working directory. (",(0,r.yg)("a",{parentName:"p",href:"https://github.com/lavalink-devs/Lavalink/blob/master/LavalinkServer/application.yml.example"},"Example here"),")  "),(0,r.yg)("p",null,"Run with ",(0,r.yg)("inlineCode",{parentName:"p"},"java -jar Lavalink.jar")," from the same directory.  "),(0,r.yg)("h2",{id:"deploying-with-docker"},"Deploying with Docker"),(0,r.yg)("p",null,"Docker images can be found under ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/lavalink-devs/Lavalink/pkgs/container/lavalink"},"packages")," with old builds prior to ",(0,r.yg)("inlineCode",{parentName:"p"},"v3.7.4")," being available on ",(0,r.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/fredboat/lavalink/"},"Docker Hub"),".  "),(0,r.yg)("p",null,"Install ",(0,r.yg)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker")," & ",(0,r.yg)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose"),"  "),(0,r.yg)("p",null,"Create a ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," with the following content:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},'version: "3.8"\n\nservices:\n    lavalink:\n        image: fredboat/lavalink:3.7.11 # pin the image version to Lavalink v3\n        container_name: lavalink_v3\n        restart: unless-stopped\n        environment:\n            - _JAVA_OPTIONS=-Xmx6G # set Java options here\n            - SERVER_PORT=2333 # set lavalink server port\n            - LAVALINK_SERVER_PASSWORD=youshallnotpass # set password for lavalink\n        volumes:\n            - ./application.yml:/opt/Lavalink/application.yml # mount application.yml from the same directory or use environment variables\n            - ./plugins/:/opt/Lavalink/plugins/ # persist plugins between restarts, make sure to set the correct permissions (user: 322, group: 322)\n        networks:\n            - lavalink\n        expose:\n            - 2333 # lavalink exposes port 2333 to connect to for other containers (this is for documentation purposes only)\n        ports:\n            - 2333:2333 # you only need this if you want to make your lavalink accessible from outside of containers\nnetworks:\n    lavalink: # create a lavalink network you can add other containers to, to give them access to Lavalink\n        name: lavalink\n')),(0,r.yg)("p",null,"Place the ",(0,r.yg)("inlineCode",{parentName:"p"},"application.yml")," in the same directory as ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose.yml"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},'server: # REST and WS server\n  port: 2333\n  address: 0.0.0.0\nplugins:\n#  name: # Name of the plugin\n#    some_key: some_value # Some key-value pair for the plugin\n#    another_key: another_value\nlavalink:\n  plugins:\n#    - dependency: "group:artifact:version"\n#      repository: "repository"\n  server:\n    password: "youshallnotpass"\n    sources:\n      youtube: true\n      bandcamp: true\n      soundcloud: true\n      twitch: true\n      vimeo: true\n      http: true\n      local: false\n    filters: # All filters are enabled by default\n      volume: true\n      equalizer: true\n      karaoke: true\n      timescale: true\n      tremolo: true\n      vibrato: true\n      distortion: true\n      rotation: true\n      channelMix: true\n      lowPass: true\n    bufferDurationMs: 400 # The duration of the NAS buffer. Higher values fare better against longer GC pauses. Duration <= 0 to disable JDA-NAS. Minimum of 40ms, lower values may introduce pauses.\n    frameBufferDurationMs: 5000 # How many milliseconds of audio to keep buffered\n    opusEncodingQuality: 10 # Opus encoder quality. Valid values range from 0 to 10, where 10 is best quality but is the most expensive on the CPU.\n    resamplingQuality: LOW # Quality of resampling operations. Valid values are LOW, MEDIUM and HIGH, where HIGH uses the most CPU.\n    trackStuckThresholdMs: 10000 # The threshold for how long a track can be stuck. A track is stuck if does not return any audio data.\n    useSeekGhosting: true # Seek ghosting is the effect where whilst a seek is in progress, the audio buffer is read from until empty, or until seek is ready.\n    youtubePlaylistLoadLimit: 6 # Number of pages at 100 each\n    playerUpdateInterval: 5 # How frequently to send player updates to clients, in seconds\n    youtubeSearchEnabled: true\n    soundcloudSearchEnabled: true\n    gc-warnings: true\n    #ratelimit:\n      #ipBlocks: ["1.0.0.0/8", "..."] # list of ip blocks\n      #excludedIps: ["...", "..."] # ips which should be explicit excluded from usage by lavalink\n      #strategy: "RotateOnBan" # RotateOnBan | LoadBalance | NanoSwitch | RotatingNanoSwitch\n      #searchTriggersFail: true # Whether a search 429 should trigger marking the ip as failing\n      #retryLimit: -1 # -1 = use default lavaplayer value | 0 = infinity | >0 = retry will happen this numbers times\n    #youtubeConfig: # Required for avoiding all age restrictions by YouTube, some restricted videos still can be played without.\n      #email: "" # Email of Google account\n      #password: "" # Password of Google account\n    #httpConfig: # Useful for blocking bad-actors from ip-grabbing your music node and attacking it, this way only the http proxy will be attacked\n      #proxyHost: "localhost" # Hostname of the proxy, (ip or domain)\n      #proxyPort: 3128 # Proxy port, 3128 is the default for squidProxy\n      #proxyUser: "" # Optional user for basic authentication fields, leave blank if you don\'t use basic auth\n      #proxyPassword: "" # Password for basic authentication\n\nmetrics:\n  prometheus:\n    enabled: false\n    endpoint: /metrics\n\nsentry:\n  dsn: ""\n  environment: ""\n#  tags:\n#    some_key: some_value\n#    another_key: another_value\n\nlogging:\n  file:\n    path: ./logs/\n\n  level:\n    root: INFO\n    lavalink: INFO\n\n  request:\n    enabled: true\n    includeClientInfo: true\n    includeHeaders: false\n    includeQueryString: true\n    includePayload: true\n    maxPayloadLength: 10000\n\n\n  logback:\n    rollingpolicy:\n      max-file-size: 1GB\n      max-history: 30\n')))}d.isMDXComponent=!0}}]);