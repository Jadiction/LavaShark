"use strict";(self.webpackChunk_lavashark_website=self.webpackChunk_lavashark_website||[]).push([[4216],{5680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>y});var t=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?t.createElement(y,i(i({ref:n},p),{},{components:a})):t.createElement(y,i({ref:n},p))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8433:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=a(8168),r=(a(6540),a(5680));const o={sidebar_position:2},i="\u4f3a\u670d\u5668\u914d\u7f6e",l={unversionedId:"server-config",id:"version-2.0.0/server-config",title:"\u4f3a\u670d\u5668\u914d\u7f6e",description:"\u60a8\u9700\u8981\u4e0b\u8f09 Lavalink \u7bc0\u9ede (lavalink-devs/Lavalink) \u4e26\u904b\u884c\u5b83\uff0c\u6216\u8005\u4f7f\u7528\u5176\u4ed6\u516c\u5171\u7bc0\u9ede\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-2.0.0/server-config.md",sourceDirName:".",slug:"/server-config",permalink:"/zh-TW/docs/server-config",draft:!1,editUrl:"https://github.com/hmes98318/LavaShark/blob/main/apps/website/versioned_docs/version-2.0.0/server-config.md",tags:[],version:"2.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"LavaShark",permalink:"/zh-TW/docs/"},next:{title:"\u5165\u9580",permalink:"/zh-TW/docs/getting-started"}},s={},u=[{value:"\u4f7f\u7528\u4e8c\u9032\u5236\u90e8\u7f72",id:"\u4f7f\u7528\u4e8c\u9032\u5236\u90e8\u7f72",level:2},{value:"\u4f7f\u7528Docker\u90e8\u7f72",id:"\u4f7f\u7528docker\u90e8\u7f72",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...a}=e;return(0,r.yg)(c,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u4f3a\u670d\u5668\u914d\u7f6e"},"\u4f3a\u670d\u5668\u914d\u7f6e"),(0,r.yg)("p",null,"\u60a8\u9700\u8981\u4e0b\u8f09 Lavalink \u7bc0\u9ede (",(0,r.yg)("a",{parentName:"p",href:"https://github.com/lavalink-devs/Lavalink"},"lavalink-devs/Lavalink"),") \u4e26\u904b\u884c\u5b83\uff0c\u6216\u8005\u4f7f\u7528\u5176\u4ed6\u516c\u5171\u7bc0\u9ede\u3002  "),(0,r.yg)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u516c\u5171\u7bc0\u9ede\uff0c\u53ef\u4ee5\u53c3\u8003\u4ee5\u4e0b\u5b58\u5132\u5eab\u3002  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/DarrenOfficial/lavalink-list"},"DarrenOfficial/lavalink-list")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/brblacky/lavalink-list"},"brblacky/lavalink-list"))),(0,r.yg)("h2",{id:"\u4f7f\u7528\u4e8c\u9032\u5236\u90e8\u7f72"},"\u4f7f\u7528\u4e8c\u9032\u5236\u90e8\u7f72"),(0,r.yg)("p",null,"\u5f9e",(0,r.yg)("a",{parentName:"p",href:"https://repo.arbjerg.dev/artifacts/lavalink/"},"\u4e0b\u8f09\u4f3a\u670d\u5668"),"\u3001",(0,r.yg)("a",{parentName:"p",href:"https://github.com/lavalink-devs/Lavalink/releases"},"GitHub releases")," \u6216 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/lavalink-devs/Lavalink/actions"},"GitHub actions")," \u4e0b\u8f09\u4e8c\u9032\u5236\u6587\u4ef6\u3002"),(0,r.yg)("p",null,"\u5728\u60a8\u7684\u5de5\u4f5c\u76ee\u9304\u4e2d\u653e\u7f6e\u4e00\u500b ",(0,r.yg)("inlineCode",{parentName:"p"},"application.yml")," \u6587\u4ef6\u3002\uff08",(0,r.yg)("a",{parentName:"p",href:"https://github.com/lavalink-devs/Lavalink/blob/master/LavalinkServer/application.yml.example"},"\u7bc4\u4f8b\u5728\u9019\u88e1"),"\uff09 "),(0,r.yg)("p",null,"\u5f9e\u76f8\u540c\u76ee\u9304\u4e2d\u904b\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"java -jar Lavalink.jar"),"  "),(0,r.yg)("h2",{id:"\u4f7f\u7528docker\u90e8\u7f72"},"\u4f7f\u7528Docker\u90e8\u7f72"),(0,r.yg)("p",null,"Docker \u93e1\u50cf\u53ef\u4ee5\u5728",(0,r.yg)("a",{parentName:"p",href:"https://github.com/lavalink-devs/Lavalink/pkgs/container/lavalink"},"Github packages")," \u6216 ",(0,r.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/fredboat/lavalink/"},"Docker Hub")," \u4e2d\u627e\u5230\u3002  "),(0,r.yg)("p",null,"\u5b89\u88dd ",(0,r.yg)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker")," & ",(0,r.yg)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose"),"  "),(0,r.yg)("p",null,"\u5efa\u7acb\u4e00\u500b\u540d\u70ba ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u7684\u6a94\u6848\uff0c\u4e26\u5305\u542b\u4ee5\u4e0b\u5167\u5bb9\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},'version: "3.8"\n\nservices:\n    lavalink:\n        image: fredboat/lavalink:4.0.7 # pin the image version to Lavalink v4\n        container_name: lavalink_v4\n        restart: unless-stopped\n        environment:\n            - _JAVA_OPTIONS=-Xmx6G # set Java options here\n            - SERVER_PORT=2333 # set lavalink server port\n            - LAVALINK_SERVER_PASSWORD=youshallnotpass # set password for lavalink\n        volumes:\n            - ./application.yml:/opt/Lavalink/application.yml # mount application.yml from the same directory or use environment variables\n            - ./plugins/:/opt/Lavalink/plugins/ # persist plugins between restarts, make sure to set the correct permissions (user: 322, group: 322)\n        networks:\n            - lavalink\n        expose:\n            - 2333 # lavalink exposes port 2333 to connect to for other containers (this is for documentation purposes only)\n        ports:\n            - 2333:2333 # you only need this if you want to make your lavalink accessible from outside of containers\nnetworks:\n    lavalink: # create a lavalink network you can add other containers to, to give them access to Lavalink\n        name: lavalink\n')),(0,r.yg)("p",null,"\u5c07 ",(0,r.yg)("inlineCode",{parentName:"p"},"application.yml")," \u8207 ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u653e\u5728\u540c\u4e00\u76ee\u9304\u4e2d\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},'server: # REST and WS server\n  port: 2333\n  address: 0.0.0.0\nplugins:\n#  name: # Name of the plugin\n#    some_key: some_value # Some key-value pair for the plugin\n#    another_key: another_value\nlavalink:\n  plugins:\n      # https://github.com/lavalink-devs/youtube-source\n    - dependency: "dev.lavalink.youtube:youtube-plugin:1.4.0"\n      repository: "https://maven.lavalink.dev/releases"\n  server:\n    password: "youshallnotpass"\n    sources:\n      youtube: false\n      bandcamp: true\n      soundcloud: true\n      twitch: true\n      vimeo: true\n      http: true\n      local: false\n    filters: # All filters are enabled by default\n      volume: true\n      equalizer: true\n      karaoke: true\n      timescale: true\n      tremolo: true\n      vibrato: true\n      distortion: true\n      rotation: true\n      channelMix: true\n      lowPass: true\n    bufferDurationMs: 400 # The duration of the NAS buffer. Higher values fare better against longer GC pauses. Duration <= 0 to disable JDA-NAS. Minimum of 40ms, lower values may introduce pauses.\n    frameBufferDurationMs: 5000 # How many milliseconds of audio to keep buffered\n    opusEncodingQuality: 10 # Opus encoder quality. Valid values range from 0 to 10, where 10 is best quality but is the most expensive on the CPU.\n    resamplingQuality: LOW # Quality of resampling operations. Valid values are LOW, MEDIUM and HIGH, where HIGH uses the most CPU.\n    trackStuckThresholdMs: 10000 # The threshold for how long a track can be stuck. A track is stuck if does not return any audio data.\n    useSeekGhosting: true # Seek ghosting is the effect where whilst a seek is in progress, the audio buffer is read from until empty, or until seek is ready.\n    youtubePlaylistLoadLimit: 6 # Number of pages at 100 each\n    playerUpdateInterval: 5 # How frequently to send player updates to clients, in seconds\n    youtubeSearchEnabled: true\n    soundcloudSearchEnabled: true\n    gc-warnings: true\n    #ratelimit:\n      #ipBlocks: ["1.0.0.0/8", "..."] # list of ip blocks\n      #excludedIps: ["...", "..."] # ips which should be explicit excluded from usage by lavalink\n      #strategy: "RotateOnBan" # RotateOnBan | LoadBalance | NanoSwitch | RotatingNanoSwitch\n      #searchTriggersFail: true # Whether a search 429 should trigger marking the ip as failing\n      #retryLimit: -1 # -1 = use default lavaplayer value | 0 = infinity | >0 = retry will happen this numbers times\n    #youtubeConfig: # Required for avoiding all age restrictions by YouTube, some restricted videos still can be played without.\n      #email: "" # Email of Google account\n      #password: "" # Password of Google account\n    #httpConfig: # Useful for blocking bad-actors from ip-grabbing your music node and attacking it, this way only the http proxy will be attacked\n      #proxyHost: "localhost" # Hostname of the proxy, (ip or domain)\n      #proxyPort: 3128 # Proxy port, 3128 is the default for squidProxy\n      #proxyUser: "" # Optional user for basic authentication fields, leave blank if you don\'t use basic auth\n      #proxyPassword: "" # Password for basic authentication\n\nmetrics:\n  prometheus:\n    enabled: false\n    endpoint: /metrics\n\nsentry:\n  dsn: ""\n  environment: ""\n#  tags:\n#    some_key: some_value\n#    another_key: another_value\n\nlogging:\n  file:\n    path: ./logs/\n\n  level:\n    root: INFO\n    lavalink: INFO\n\n  request:\n    enabled: true\n    includeClientInfo: true\n    includeHeaders: false\n    includeQueryString: true\n    includePayload: true\n    maxPayloadLength: 10000\n\n\n  logback:\n    rollingpolicy:\n      max-file-size: 1GB\n      max-history: 30\n')))}d.isMDXComponent=!0}}]);