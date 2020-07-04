/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["SW.js","217831ce146245f3698ff2757b302c33"],["assets/bootstrap/css/bootstrap.min.css","a21e006029afb326c87916a0c8786e5a"],["assets/bootstrap/js/bootstrap.min.js","7fd2f04e75bd7ab1a79d80cdd4c33085"],["assets/css/styles.min.css","d2a6dd2eee8ca5b623401e95d9895da2"],["assets/fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["assets/fonts/fa-brands-400.eot","088a34f78f530102fd9661173b4a4f26"],["assets/fonts/fa-brands-400.svg","d72293118cda50ec50c39957d9d836d0"],["assets/fonts/fa-brands-400.ttf","273dc9bf9778fd37fa61357645d46a28"],["assets/fonts/fa-brands-400.woff","f4920c94c0861c537f72ba36590f6362"],["assets/fonts/fa-brands-400.woff2","822d94f19fe57477865209e1242a3c63"],["assets/fonts/fa-regular-400.eot","3ac49cb33f43a6471f21ab3df40d1b1e"],["assets/fonts/fa-regular-400.svg","d2e53334c22a9a4937bc26e84b36e1e0"],["assets/fonts/fa-regular-400.ttf","ece54318791c51b52dfdc689efdb6271"],["assets/fonts/fa-regular-400.woff","a57bcf76c178aee452db7a57b75509b6"],["assets/fonts/fa-regular-400.woff2","9efb86976bd53e159166c12365f61e25"],["assets/fonts/fa-solid-900.eot","7fb1cdd9c3b889161216a13267b55fe2"],["assets/fonts/fa-solid-900.svg","7a5de9b08012e4da40504f2cf126a351"],["assets/fonts/fa-solid-900.ttf","2aa6edf8f296a43b32df35f330b7c81c"],["assets/fonts/fa-solid-900.woff","93f284548b42ab76fe3fd03a9d3a2180"],["assets/fonts/fa-solid-900.woff2","f6121be597a72928f54e7ab5b95512a1"],["assets/fonts/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["assets/fonts/fontawesome-all.min.css","e0076d9b1984448e1b530d5b1a419c7a"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["assets/fonts/fontawesome5-overrides.min.css","efc9f7da67e38b107d16395fa0a2ee63"],["assets/img/1.jpg","ef100253f92efc36edde437621365bf2"],["assets/img/10.jpg","c589f976c5ad517831fa58ce8dfc5533"],["assets/img/11.jpg","032a82ceaa304d17912ba6ec04f83baf"],["assets/img/12.jpg","b7244ada8a27b270a746865feb5151cb"],["assets/img/13.jpg","777e987fa7f19e1f78a8354141196c44"],["assets/img/14.jpg","4600302d4d447d38eb72aef0aa08af1c"],["assets/img/15.jpg","62f5a1ea721cfd944daed899e515d2d0"],["assets/img/16.jpg","0abbb0a66b93f07d8eb93be4f93d9427"],["assets/img/17.jpg","0fd59520424c8e2381bc98fad0c78341"],["assets/img/18.jpg","02127524f37f4806ad604d6fec2ac0cc"],["assets/img/19.jpg","f5faaaff38c759ddc34687ff9efb28eb"],["assets/img/2.jpg","b23593f974ba47abe356515a58fe05a1"],["assets/img/20.jpg","807ad547d8d47e7d367a5601d553a037"],["assets/img/21.jpg","996974e3575e5b0dd3f5c73553eb01a3"],["assets/img/22.jpg","e586934757a50af365fa8ed55746dbb6"],["assets/img/23.jpg","03856a49886cd7642d2b9888c336e649"],["assets/img/24.jpg","bf3523fa1c4ec57287f74d51b9d235f7"],["assets/img/25.jpg","4d8bcd8115d0ff76e957127b307fae0d"],["assets/img/26.jpg","00ab8d3a11897d400772449d8000484b"],["assets/img/27.jpg","0e02f4739a32057ec49b6d4d863a45c2"],["assets/img/28.jpg","2e173c628c1b09dbac56f01ddb2f412a"],["assets/img/29.jpg","496018be0b82b93012304a3766522c48"],["assets/img/3.jpg","d0db827d09d78c1dcae3631f6a5b2ee9"],["assets/img/30.jpg","e09dc13d636d453ebaef1a04cba73bcd"],["assets/img/31.jpg","248f25dbf75ce08199681744de92e513"],["assets/img/32.jpg","58e46f09cefe9a2a8b096352326b0538"],["assets/img/33.jpg","8f064f260a2a41204518061a2daf6c90"],["assets/img/34.jpg","e7cfd69fb08d2585c9bc1dfbeb57e95f"],["assets/img/4.jpg","39542f65e61baf7699285d0619457118"],["assets/img/5.jpg","78a69b0a73111b125af6f76388ee035e"],["assets/img/6.jpg","914dea43ec51487e74f3f6df937fb6ed"],["assets/img/7.jpg","6d0e95f0e37b33bf658d0ee315ad9e05"],["assets/img/8.jpg","1bb92bbbf734daa1d86ec1033ec8e455"],["assets/img/9.jpg","f82e593ca91ebd1de8e9b75bb7bdaa6f"],["assets/img/Analytics_SVG.svg","eb5c9f1499f3cbc59582fea35d529b40"],["assets/img/Books_SVG.svg","a7c9060e635c9f009c744a5a0c45cdc5"],["assets/img/Chat_SVG.svg","479c75145ea71db6615672eca1d46cb1"],["assets/img/Creative_process_SVG.svg","002c7f52a81f811a9065509d64da4e94"],["assets/img/Data_analysis_SVG.svg","781c725f24dfa9e280da0428dae59db2"],["assets/img/Instagram_SVG.svg","d317ebd19d865a735486692403c6e23f"],["assets/img/SEO_SVG.svg","eb467d062ccbfbb874bc1fd3c85f4f0b"],["assets/img/Search_SVG.svg","5cd3b123d5ce02691ab9213ed6ff7d29"],["assets/img/bg-pattern.png","3c6467278a66af3216348e8588a69062"],["assets/img/biru.png","33f8b03254846f31eaded3bcd3ba619b"],["assets/img/fitness_SVG.svg","dd811f39cf810f00f3e22dbce0832373"],["assets/img/icons/icon-128x128.png","b0451e4d6a65742d77448a2cae2a8278"],["assets/img/icons/icon-144x144.png","ccb52434644af605b7ad5a67f6f55fa0"],["assets/img/icons/icon-152x152.png","4b04ed62d028da5b63e7f6708128a487"],["assets/img/icons/icon-192x192.png","ba51bfb8a5c2390938a314a34f869f06"],["assets/img/icons/icon-384x384.png","020150dbd95a924634025da19e826e04"],["assets/img/icons/icon-512x512.png","45d065f01276826df9d5641bf29c5718"],["assets/img/icons/icon-72x72.png","03cabab4fad71d772c8ac021689c73eb"],["assets/img/icons/icon-96x96.png","6dcd52718e645faccba267987a7bff3d"],["assets/img/logo.png","4b757aef7034b916ea9c4593ef2232ce"],["assets/img/smartmockups_kaz7gkvh.png","1adf123ec814023f64d854a40bc595d9"],["assets/js/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["assets/js/script.min.js","1c582d9c3d8a8528c5a4bd8e7fc3f5aa"],["desain.html","b38ddea00d032ad7af577e1647ef7a5e"],["favicon.ico","27c7f9e11d2d5e43e9cdfdaa4bacffe5"],["index.html","1432622ef8d4571116d22e43997a7f61"],["manifest.json","ea910826893117e0e056b43de40ed25c"],["promo/index.html","80ae737ed2f16ee3232b4c7930ed15b0"],["sitemap.xml","3c6d2d9fae438619d812095a024e46fe"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







