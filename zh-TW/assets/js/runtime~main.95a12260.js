(()=>{"use strict";var e,a,d,b,c,f={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var d=t[e]={id:e,loaded:!1,exports:{}};return f[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=f,r.c=t,e=[],r.O=(a,d,b,c)=>{if(!d){var f=1/0;for(i=0;i<e.length;i++){d=e[i][0],b=e[i][1],c=e[i][2];for(var t=!0,o=0;o<d.length;o++)(!1&c||f>=c)&&Object.keys(r.O).every((e=>r.O[e](d[o])))?d.splice(o--,1):(t=!1,c<f&&(f=c));if(t){e.splice(i--,1);var n=b();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[d,b,c]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var f={};a=a||[null,d({}),d([]),d(d)];for(var t=2&b&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,r.d(c,f),c},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>"assets/js/"+({32:"eeb1a351",57:"420db411",83:"b7c534ac",153:"00913a6b",177:"bcac4612",186:"66a8a315",248:"975ef0cb",268:"0c8ff3c2",271:"b286ccec",282:"17906b0b",364:"330bb724",368:"d663ddc9",371:"22773599",385:"c642ec9d",534:"6dfac3cc",580:"69939b3d",602:"b257e8b4",694:"7d23a7d1",697:"09dc45b7",700:"f47c5189",705:"eee6274c",717:"a103fc11",763:"227a7eb2",777:"6dfbfe25",801:"dd895c32",856:"f3a69fcc",935:"feaad18d",938:"7aa112a9",954:"e69d7f3a",967:"118e2ec9",972:"c8a03237",988:"105a6219",1041:"0713e16e",1097:"9aa54785",1103:"60bdd6b8",1321:"c1b1b3ce",1528:"dbcc8c08",1545:"e91adbf6",1558:"bdf31067",1617:"e7a06dc6",1690:"1e9771dc",1784:"b5ad889d",1787:"8d43d8fa",2002:"5f1e8a2e",2011:"12bb0c02",2039:"0b7b8f98",2100:"0b6b0922",2131:"d5dd8b14",2138:"1a4e3797",2177:"b23f85ec",2308:"dcc833dc",2381:"df3144d4",2479:"1c809920",2487:"d360db75",2563:"675db3a0",2609:"4b2c141e",2682:"1e0df2ba",2736:"c6fbd215",2760:"e6ec2b68",2776:"81b96f7d",2802:"055b225f",2809:"e17e5858",2834:"8975b50c",2856:"66acd88c",2871:"e7bde8d1",2874:"c754d938",2894:"d0c485a2",2999:"dde650ae",3011:"0ae90fb7",3073:"3f9a811e",3086:"ad47d8cd",3100:"94a3591e",3130:"cc3b4480",3144:"9c64bfa6",3145:"33df444f",3231:"6c5fad50",3239:"42bed092",3281:"ef2a3f87",3322:"24644614",3437:"513088af",3467:"e9bc5007",3619:"dbd42699",3655:"c6132c2d",3688:"d069a43f",3698:"89a6286a",3713:"e9fba577",3723:"ff13bd8b",3732:"aa5d6141",3745:"a642ea2e",3947:"45935c34",4104:"63503174",4134:"393be207",4152:"708636e8",4157:"d19c13b9",4205:"61282bf5",4213:"77cca878",4216:"f93ba6aa",4231:"d40da968",4271:"634f9084",4328:"ef4a069b",4336:"fb190e7a",4455:"d71940f7",4469:"766cacf6",4537:"02c96cde",4538:"2abc01cc",4583:"1df93b7f",4594:"acb1bb1a",4601:"7b36a3ee",4644:"b7021212",4843:"edff38e9",4868:"49ffbb9a",4874:"f1ce0433",4891:"8f98e644",4955:"58908189",4963:"7f70e391",5014:"a0a6a260",5026:"7f3542fb",5048:"1db0eebf",5087:"9899985e",5166:"369db1f4",5218:"a1922d5c",5288:"b9adef15",5295:"be3ec828",5306:"1285a323",5323:"7f936df7",5365:"9dc5e78a",5377:"36cc98c9",5406:"7180e671",5408:"7ffceedc",5420:"e5264c59",5481:"4782b66e",5488:"97b960ea",5499:"19ffbce0",5550:"298f6bca",5560:"b1b3dfa8",5584:"f0de1cd4",5608:"83de26a6",5622:"65642983",5636:"5ea70478",5701:"43b36bd0",5742:"81b1abd6",5751:"6a0c6aed",5793:"d4f1d0eb",5818:"b4e0d69a",5848:"64a31437",5861:"5dfc5869",5868:"6bf8de1c",6009:"892d6f0a",6016:"16c16f95",6045:"61d0d539",6061:"1f391b9e",6080:"6ea7564e",6085:"69cee40b",6152:"1d5df6a8",6160:"f55d9b9a",6176:"4fffad20",6177:"03fcd38c",6289:"6df02787",6295:"2e3323ac",6313:"447e95bf",6322:"566ec5a0",6338:"5d124f5b",6380:"35a537b1",6426:"099f568d",6427:"92af0cb9",6429:"ea73d499",6433:"78a3a9d9",6470:"b1acb6b4",6515:"38cb0510",6536:"17261c58",6548:"a917b5e5",6563:"cfd012c3",6667:"557d5cb5",6685:"5285962a",6885:"822e4432",6918:"a4766d44",6961:"f0a3627e",6969:"14eb3368",6990:"55c01d05",7001:"a64a0ca6",7022:"6f31f8ba",7100:"7d1167ab",7196:"86b28e62",7222:"43195b9f",7226:"9b66d3be",7306:"fcba4a3c",7330:"bd69894a",7369:"b9a9bc82",7375:"c485c193",7378:"a5c7a662",7382:"4d7d0d35",7442:"aeb9ace7",7473:"bd94d1d2",7605:"41b56aad",7632:"4244d647",7646:"5676b37c",7687:"ca877248",7841:"6a2e0576",8099:"9f131792",8147:"db309db6",8153:"708c3fcf",8293:"86294a82",8328:"3f438748",8344:"9207215a",8401:"17896441",8431:"feb29d88",8460:"57933899",8471:"2ddd3490",8486:"cd46224b",8658:"bad86a45",8674:"2aa4a7d9",8675:"1f80322d",8680:"a56be7eb",8699:"5fc6a75e",8714:"1be78505",8734:"c02576ca",8766:"5bde8719",8819:"1de846db",8841:"26f4de56",8847:"a9f6a427",8851:"51d99527",8880:"01c5149b",8889:"9e5916dc",9222:"1113a5eb",9273:"8abb08be",9452:"4e5e6828",9497:"f19c809b",9523:"d8d1eaad",9532:"f77983c8",9585:"ea06a500",9591:"a28ca892",9603:"1e1a20bd",9616:"fe028c34",9704:"514fd379",9778:"38ebbbef",9841:"ab1d278a",9851:"d3feb3ef",9862:"ce472765",9877:"2e244b8a",9922:"c04aa9f9",9947:"1e390594",9966:"9f75c19c",9988:"52dc2f3d"}[e]||e)+"."+{32:"ce0a6c7e",57:"f9701588",83:"08313e61",153:"f4c9e7c3",177:"a5b63f7d",186:"ef4fb741",248:"0fb97153",268:"d9e4bdbd",271:"ba04a9bd",282:"0763a594",364:"6e6c5d99",368:"b14d1915",371:"2a49ba96",385:"540eefc8",416:"876eb3ae",534:"083c2ebc",580:"a27d7f6f",602:"2e62ef58",694:"076ecb56",697:"e5b13ed8",700:"f222d2de",705:"87c51235",717:"6b4c6141",763:"7fc0a2f6",777:"082b1cff",801:"e91cad56",856:"cec76087",935:"fabbf40c",938:"530ce4a3",954:"4ccc0841",967:"d52b5b9e",972:"26aea077",988:"fbfe1415",1041:"f4abecd3",1097:"7733972d",1103:"359d7ba6",1321:"560d38aa",1528:"cd27186e",1545:"8567fe82",1558:"565d30b4",1617:"e1db7462",1690:"0385423d",1774:"b8d02cbe",1784:"350c122d",1787:"bd6c2fb5",2002:"68a35eb6",2011:"08db0000",2039:"390a96a5",2100:"a1a971f6",2131:"6994e33f",2138:"92406153",2177:"7b55d124",2308:"b3fc3ec3",2381:"cd86299e",2479:"0f56e971",2487:"5a13be5f",2563:"c28c44f0",2609:"547cf4bd",2682:"4902f1ec",2736:"61d86a06",2760:"1692b13c",2776:"32c4afd7",2802:"5a634776",2809:"44af7197",2834:"cbe2a7dd",2856:"0dba7773",2871:"3a99c8cd",2874:"b827f490",2894:"774e3a56",2999:"655af846",3011:"61ce5b39",3073:"382cecd2",3086:"75e2a806",3100:"13fa8b0d",3130:"78dcd28f",3144:"528f60f4",3145:"e17deb22",3231:"372ee0e9",3239:"698bdff5",3281:"b18688e0",3322:"1d2d0990",3437:"e61e9adb",3467:"db76d0e6",3619:"9426a616",3655:"0e63e7e6",3688:"d51addcc",3698:"f06e467e",3713:"8234a566",3723:"41c94caf",3732:"466aa664",3745:"255d2e48",3947:"dd4c7c06",4104:"a0cb87e4",4134:"dcc0a8d8",4152:"96bacd3f",4157:"a5943c65",4205:"74fd0a00",4213:"0f801b98",4216:"84057882",4231:"bfa7ffd2",4271:"0f4e7b0e",4328:"b72521cf",4336:"46e1d153",4455:"26cb93aa",4469:"8dc3193d",4537:"af103ffb",4538:"678b867e",4583:"bfc4d779",4594:"7ab17be6",4601:"2b764f97",4644:"426eb6f3",4843:"3094fdc9",4868:"abba3fbd",4874:"bced92fc",4891:"b0a38f9d",4955:"eb6360eb",4963:"2ad404ec",5014:"baa17858",5026:"d1bd2a6c",5048:"70b75ba8",5087:"d904027c",5166:"5a352efc",5218:"0b83ceb2",5288:"9feb42c0",5295:"354bda55",5306:"ac87bd41",5323:"15abf2fe",5365:"0776959b",5377:"5093a3d7",5406:"481c01b6",5408:"3b720a01",5420:"9dc81514",5481:"0872d703",5488:"b62d5e14",5499:"afd4b499",5550:"321cbc28",5560:"ddae247a",5584:"e17efb0f",5608:"7f6cbe64",5622:"73237b1f",5636:"aefb5791",5701:"05925b16",5742:"792efd67",5751:"8cd3ab4c",5793:"ff36f8e6",5818:"8b7afc2b",5848:"2f61a9e6",5861:"3e1d7002",5868:"d5fbcf91",6009:"738b0ff5",6016:"373c4a9d",6045:"ff3b8075",6061:"c01dbdb5",6080:"1da6796a",6085:"1a7e425c",6152:"7b59a194",6160:"fb90b36a",6176:"bf05e840",6177:"8954b257",6289:"82eb92f7",6295:"532fe351",6313:"75e323fb",6322:"fadb4962",6338:"fe7ceea5",6380:"a1c2099d",6426:"8089c2e4",6427:"9acb1f81",6429:"8d9af1ae",6433:"29eaf2ff",6470:"61660838",6515:"e403ba9e",6536:"96332d88",6548:"764dc7d9",6563:"fe841c15",6667:"907a6179",6685:"0fbe5d0e",6885:"a615357a",6918:"f73fad81",6961:"912d2ead",6969:"114be37e",6990:"eb24221b",7001:"d8b56e08",7022:"b264ada0",7100:"c9297c2e",7196:"19948b70",7222:"867eee53",7226:"42e29f11",7306:"0ae17693",7330:"05c0c2eb",7369:"ce4d2060",7375:"b8643c22",7378:"a44b8373",7382:"ec77c879",7442:"890dd908",7473:"f6f06f44",7605:"1b630060",7632:"60d09026",7646:"d685f8d6",7687:"ea92fcdb",7841:"41caac79",8099:"37f4ee31",8147:"c2045fef",8153:"fcf4e0e0",8293:"fef69d62",8328:"dd500522",8344:"7c42c943",8401:"285576ac",8431:"a9b4e7ce",8460:"99408c4e",8471:"ce5048ef",8486:"78c8004d",8658:"bf7a86e0",8674:"cc129e7c",8675:"b862dfb0",8680:"fdf023ad",8699:"ae449173",8714:"664251f9",8734:"a6d27d68",8766:"cc9488ba",8819:"488aa426",8841:"722d4148",8847:"ad1fdb42",8851:"71750597",8880:"75fd14fe",8889:"925e4041",8913:"05e77992",9222:"97f48cea",9273:"0309d7cf",9304:"e9c4b205",9452:"6f9df411",9462:"ba8b4350",9497:"a501b384",9523:"307dfb66",9532:"4f3a3975",9585:"f9572b99",9591:"e53aa7c5",9603:"2a9f9d97",9616:"1371fd65",9704:"f880c31c",9778:"0bb7aa29",9841:"b709b738",9851:"ae7c2aa1",9862:"47accb74",9877:"590f3b18",9922:"8ceb3f32",9947:"ed37821d",9966:"0b7bb157",9988:"5cdf6818"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),b={},c="@lavashark/website:",r.l=(e,a,d,f)=>{if(b[e])b[e].push(a);else{var t,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==c+d){t=l;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+d),t.src=e),b[e]=[a];var u=(a,d)=>{t.onerror=t.onload=null,clearTimeout(s);var c=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(d))),a)return a(d)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/zh-TW/",r.gca=function(e){return e={17896441:"8401",22773599:"371",24644614:"3322",57933899:"8460",58908189:"4955",63503174:"4104",65642983:"5622",eeb1a351:"32","420db411":"57",b7c534ac:"83","00913a6b":"153",bcac4612:"177","66a8a315":"186","975ef0cb":"248","0c8ff3c2":"268",b286ccec:"271","17906b0b":"282","330bb724":"364",d663ddc9:"368",c642ec9d:"385","6dfac3cc":"534","69939b3d":"580",b257e8b4:"602","7d23a7d1":"694","09dc45b7":"697",f47c5189:"700",eee6274c:"705",a103fc11:"717","227a7eb2":"763","6dfbfe25":"777",dd895c32:"801",f3a69fcc:"856",feaad18d:"935","7aa112a9":"938",e69d7f3a:"954","118e2ec9":"967",c8a03237:"972","105a6219":"988","0713e16e":"1041","9aa54785":"1097","60bdd6b8":"1103",c1b1b3ce:"1321",dbcc8c08:"1528",e91adbf6:"1545",bdf31067:"1558",e7a06dc6:"1617","1e9771dc":"1690",b5ad889d:"1784","8d43d8fa":"1787","5f1e8a2e":"2002","12bb0c02":"2011","0b7b8f98":"2039","0b6b0922":"2100",d5dd8b14:"2131","1a4e3797":"2138",b23f85ec:"2177",dcc833dc:"2308",df3144d4:"2381","1c809920":"2479",d360db75:"2487","675db3a0":"2563","4b2c141e":"2609","1e0df2ba":"2682",c6fbd215:"2736",e6ec2b68:"2760","81b96f7d":"2776","055b225f":"2802",e17e5858:"2809","8975b50c":"2834","66acd88c":"2856",e7bde8d1:"2871",c754d938:"2874",d0c485a2:"2894",dde650ae:"2999","0ae90fb7":"3011","3f9a811e":"3073",ad47d8cd:"3086","94a3591e":"3100",cc3b4480:"3130","9c64bfa6":"3144","33df444f":"3145","6c5fad50":"3231","42bed092":"3239",ef2a3f87:"3281","513088af":"3437",e9bc5007:"3467",dbd42699:"3619",c6132c2d:"3655",d069a43f:"3688","89a6286a":"3698",e9fba577:"3713",ff13bd8b:"3723",aa5d6141:"3732",a642ea2e:"3745","45935c34":"3947","393be207":"4134","708636e8":"4152",d19c13b9:"4157","61282bf5":"4205","77cca878":"4213",f93ba6aa:"4216",d40da968:"4231","634f9084":"4271",ef4a069b:"4328",fb190e7a:"4336",d71940f7:"4455","766cacf6":"4469","02c96cde":"4537","2abc01cc":"4538","1df93b7f":"4583",acb1bb1a:"4594","7b36a3ee":"4601",b7021212:"4644",edff38e9:"4843","49ffbb9a":"4868",f1ce0433:"4874","8f98e644":"4891","7f70e391":"4963",a0a6a260:"5014","7f3542fb":"5026","1db0eebf":"5048","9899985e":"5087","369db1f4":"5166",a1922d5c:"5218",b9adef15:"5288",be3ec828:"5295","1285a323":"5306","7f936df7":"5323","9dc5e78a":"5365","36cc98c9":"5377","7180e671":"5406","7ffceedc":"5408",e5264c59:"5420","4782b66e":"5481","97b960ea":"5488","19ffbce0":"5499","298f6bca":"5550",b1b3dfa8:"5560",f0de1cd4:"5584","83de26a6":"5608","5ea70478":"5636","43b36bd0":"5701","81b1abd6":"5742","6a0c6aed":"5751",d4f1d0eb:"5793",b4e0d69a:"5818","64a31437":"5848","5dfc5869":"5861","6bf8de1c":"5868","892d6f0a":"6009","16c16f95":"6016","61d0d539":"6045","1f391b9e":"6061","6ea7564e":"6080","69cee40b":"6085","1d5df6a8":"6152",f55d9b9a:"6160","4fffad20":"6176","03fcd38c":"6177","6df02787":"6289","2e3323ac":"6295","447e95bf":"6313","566ec5a0":"6322","5d124f5b":"6338","35a537b1":"6380","099f568d":"6426","92af0cb9":"6427",ea73d499:"6429","78a3a9d9":"6433",b1acb6b4:"6470","38cb0510":"6515","17261c58":"6536",a917b5e5:"6548",cfd012c3:"6563","557d5cb5":"6667","5285962a":"6685","822e4432":"6885",a4766d44:"6918",f0a3627e:"6961","14eb3368":"6969","55c01d05":"6990",a64a0ca6:"7001","6f31f8ba":"7022","7d1167ab":"7100","86b28e62":"7196","43195b9f":"7222","9b66d3be":"7226",fcba4a3c:"7306",bd69894a:"7330",b9a9bc82:"7369",c485c193:"7375",a5c7a662:"7378","4d7d0d35":"7382",aeb9ace7:"7442",bd94d1d2:"7473","41b56aad":"7605","4244d647":"7632","5676b37c":"7646",ca877248:"7687","6a2e0576":"7841","9f131792":"8099",db309db6:"8147","708c3fcf":"8153","86294a82":"8293","3f438748":"8328","9207215a":"8344",feb29d88:"8431","2ddd3490":"8471",cd46224b:"8486",bad86a45:"8658","2aa4a7d9":"8674","1f80322d":"8675",a56be7eb:"8680","5fc6a75e":"8699","1be78505":"8714",c02576ca:"8734","5bde8719":"8766","1de846db":"8819","26f4de56":"8841",a9f6a427:"8847","51d99527":"8851","01c5149b":"8880","9e5916dc":"8889","1113a5eb":"9222","8abb08be":"9273","4e5e6828":"9452",f19c809b:"9497",d8d1eaad:"9523",f77983c8:"9532",ea06a500:"9585",a28ca892:"9591","1e1a20bd":"9603",fe028c34:"9616","514fd379":"9704","38ebbbef":"9778",ab1d278a:"9841",d3feb3ef:"9851",ce472765:"9862","2e244b8a":"9877",c04aa9f9:"9922","1e390594":"9947","9f75c19c":"9966","52dc2f3d":"9988"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,d)=>{var b=r.o(e,a)?e[a]:void 0;if(0!==b)if(b)d.push(b[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var c=new Promise(((d,c)=>b=e[a]=[d,c]));d.push(b[2]=c);var f=r.p+r.u(a),t=new Error;r.l(f,(d=>{if(r.o(e,a)&&(0!==(b=e[a])&&(e[a]=void 0),b)){var c=d&&("load"===d.type?"missing":d.type),f=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+c+": "+f+")",t.name="ChunkLoadError",t.type=c,t.request=f,b[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,d)=>{var b,c,f=d[0],t=d[1],o=d[2],n=0;if(f.some((a=>0!==e[a]))){for(b in t)r.o(t,b)&&(r.m[b]=t[b]);if(o)var i=o(r)}for(a&&a(d);n<f.length;n++)c=f[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},d=self.webpackChunk_lavashark_website=self.webpackChunk_lavashark_website||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();