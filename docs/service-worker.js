"use strict";var precacheConfig=[["./index.html","89ba1b4b97e5e8a44167124c04517de2"],["./static/css/main.236bec85.css","30d2e2420b1fb8373b3fb487f5a7a81c"],["./static/js/main.aa706f27.js","c4382bad40f62cab75c42657fea7f6c3"],["./static/media/GothamBold.0ef4e118.eot","0ef4e1187cf602dd6d855e068b13a386"],["./static/media/GothamBold.15dafe1e.woff2","15dafe1ed96a019cd350162bc5ae148f"],["./static/media/GothamBold.2df7d7b1.woff","2df7d7b1ca03697a8dcd0abd43ea5467"],["./static/media/GothamBold.71190f73.svg","71190f731a7b60d45beb4478aa90c4e9"],["./static/media/GothamBold.cdecb667.ttf","cdecb667fa64c568482c21fa9798dbbf"],["./static/media/GothamBook.143b4034.woff2","143b4034d45c8c3ad50bf40265c9d6a7"],["./static/media/GothamBook.382be539.woff","382be5394b2ca04910b60365ed67b816"],["./static/media/GothamBook.89ce456b.eot","89ce456b37adc4e6a49be2ee21378c09"],["./static/media/GothamBook.9583bbf2.svg","9583bbf2b76612dc59d2750934bd5a8d"],["./static/media/GothamBook.ffab4dbd.ttf","ffab4dbd6b7091a3c47dbabc9c36a52b"],["./static/media/GothamBookItalic.2be3e649.woff2","2be3e64918fb196b131e453a82872334"],["./static/media/GothamBookItalic.4ab19d6a.svg","4ab19d6ab3d743c768ff32c6030cc416"],["./static/media/GothamBookItalic.598ee431.woff","598ee431573638d8d9a832d5c5a0591f"],["./static/media/GothamBookItalic.8d860054.ttf","8d8600542d90be85aec41a5f144c2952"],["./static/media/GothamBookItalic.9a6d4697.eot","9a6d4697228d0ed9dca5bd1b4bdce9d3"],["./static/media/GothamLight.0a6f1e94.eot","0a6f1e948d7b56ca9c07b454fc77061d"],["./static/media/GothamLight.78348b6e.woff","78348b6e87f1432405aa1ae6a5e4882c"],["./static/media/GothamLight.89319c47.woff2","89319c47f37590ebdc40e2a503ecf417"],["./static/media/GothamLight.bd8a8177.ttf","bd8a8177e9c7dc5802435532a9079c48"],["./static/media/GothamLight.f7165e00.svg","f7165e00e4b09bbc38d269b1ea806c11"],["./static/media/GothamLightItalic.52f606f9.woff","52f606f9e29e54343a9c41934c59d718"],["./static/media/GothamLightItalic.8d703773.ttf","8d703773c4b62a9457a7e50d133d95c3"],["./static/media/GothamLightItalic.c97bcc8c.woff2","c97bcc8ca68a4cfd1be0c1f9309ad9c7"],["./static/media/GothamLightItalic.f09ce1b7.eot","f09ce1b7a1393eb535d50c6137b134e1"],["./static/media/GothamLightItalic.f4129972.svg","f41299725557e878b5922991bb8a5838"],["./static/media/REDapi.9fe3096d.png","9fe3096de189ce2b2283cc9fb71586b6"],["./static/media/aci-logo.733f3f49.png","733f3f49c39ec4c6f2ba8da92e3e5952"],["./static/media/excel.da7d3afa.png","da7d3afa81ca3f0769fb85f58e55b47c"],["./static/media/mipim-logo.9db6cb9e.png","9db6cb9edbaae56358c68c6c3145350d"],["./static/media/odine-logo.9c87a6fd.png","9c87a6fd2a5d06df7fbf6e604e7827b4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),i=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var i="./index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(i,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});