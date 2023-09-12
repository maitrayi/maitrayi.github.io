'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "fd4ace8dc02a2f86be5103b8bf5efc28",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4e20875d09b1b82b58e1139099e9cc10",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1a04f4ed81a39eedb54f1428c5c1dbb2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "415949834b5710a908428de65883b733",
".git/logs/refs/heads/main": "abf3a18d6e83e14c470df302eea59206",
".git/logs/refs/remotes/origin/main": "703acd21b2eb845307dd97a2d52e0656",
".git/objects/00/0a197b38944bd12e0d1f250dc9a18f1d79a29c": "eb5bbd3736226142eb778011b143de71",
".git/objects/02/668a572d3d5ba6871f97e4a8f2f94e45fac412": "7d504cfa1187429d739b6917cae9aed5",
".git/objects/05/25b828f7ddca0960b2a39fa94aa7468d9cf3dc": "760f8b5513056052cca71f0c6cdfbbb0",
".git/objects/09/39b445649c44b9a38a2602a9a44c384359e251": "627258076e3297d9b1ad0e8c38f7ec77",
".git/objects/0d/bacb0912f333b10f911906b9cc9fb57965c8cb": "8a8cc82e2ec71f43ec454753e92bacf7",
".git/objects/15/a43d17511e8725ca5f5cfa700318b8a1c1061d": "69d541e99402ea150ad25b72dcf25fe2",
".git/objects/19/69af6b36b4fa5b8f310144df7246ca7d5dcd72": "7db0f8973b9b5efc331e5aeed7a8dd6e",
".git/objects/1c/ad69d08ee29acd25674506f5d40b5ebc31d714": "151ed556ddb5774ead13b7cd339a2588",
".git/objects/27/5d4d49aac4d7f5572a4d14fd119dbed45ababd": "155ac332abfaed7d80ce2b64388333a4",
".git/objects/32/f15792df266dce69ea899d5ba01cc7b2c85ced": "c3f464f564459a5438cfc4506e822fa0",
".git/objects/34/d642122bc503a7af8a4c386be9cd6b84c6c544": "f417d123e16a6a6d7362160c39bc4b7d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/c2ca66026dbc89504220e3a4f6ad4568012c95": "389dae2d7980af07563118aeec317514",
".git/objects/39/0d10748df327a45051a65e403fbb197e29d1f7": "1c793539dd0884be621d25e1f21a21d0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/ae28e0c44bea52a064c814bb5a26a72aff38e2": "69c5749633af7f9244fcd16b87277782",
".git/objects/56/7f1e9e5f8fd9b7bfd2009d94c6d553e213777b": "84117ae7e6ff7b61a3803cc739e1dc36",
".git/objects/6e/6b5457545ebcf798674894719d8488091a891a": "8fb10b6072083211c94270f2f21dee0d",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/70/f44a382e4bdeb18484b70cd0e4c4075306e60e": "103b1cceec7d66c8ccc71eb67e0ec1b5",
".git/objects/71/f2d6e88e5fdaec62a148cddc349415b50c7085": "0604c2016b230b1097d09e47ad5ca41c",
".git/objects/7e/9c574912eccf36200750368472cc3fac49f7c8": "c220aa72c989d9665721f1033e8f616f",
".git/objects/7f/27c9e5ca8ac832f6907ce5da02e468e169f813": "9d72c56d43590fa0addbccc61c18703e",
".git/objects/83/98058df2065c5c9b2bc9e9af7c568a5f91dd33": "29c3793db55ade59aca2bf88d23b6de0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/4bff1c3e5038f5fe12d3a29af2d9635c732fb8": "953fd15bd253e71af83247442b6f7c66",
".git/objects/92/a211c354764ab73430940fe4350c2fd9b6fc59": "5e83657b7f80bb52553472bd93712756",
".git/objects/92/fc9e8a75316c1386f770787d052c193b150f47": "287280691a6868925e10e0943fe21ae5",
".git/objects/93/7c5f9ce43162238173a4f00ac55a8c4070cf0d": "f22108f42c1dd5d8ff7e591f7363e671",
".git/objects/94/f334c77097ed256b5ecd3636147ba8a43a9200": "31e3f8f8cc44d6df2d01b16da37fe24c",
".git/objects/95/5b193545f0a52c474055f838fc0e95efe56620": "71180d2406043931a7e6018160a866ec",
".git/objects/9c/fd5ed16fe4087a6cef1d9c6a70fb3dad99f91f": "5ceaacf6826a6ebdd6b428ad5817fa1f",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a0/b9e3a8e8b28c88ee0f9af540f5af71e66f03e1": "812ecf5d6fa8a65be66292ed93b9e930",
".git/objects/af/06ebb2908d914d666d93857ba38f18ea9fb082": "6025203177715ded6af698a318afd492",
".git/objects/b4/6e67a5d4e530ae9765903bb7366d39f461558d": "d00d992779638d0f60e73f6d4084d69c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/da8ec889f424a78603e4efa1f780a3047f0921": "09d5fa09d208fea18526e81eebe975f2",
".git/objects/c0/2a064af5e5bf00307cb24a76e149ac7ec536be": "29a30b03ee71c70ef1ccbcb10713c9e6",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c5/3e9fecba9b834cab221a217f204f45b6daf80e": "c61d886f845eaa05532ff3c77437d5a2",
".git/objects/c5/5a3ff0a65d6f4a5d38907bff117e2435330e5b": "bd47761c34968d6153a39667d361ea9b",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/c9/a6302973e14d3de5ee8fb9d13375e84859c6f2": "2747e470b5697159c424e82e946e94e7",
".git/objects/cc/869cb51d0d10e190ea4fac04e9b9d02310b429": "fd9e7a2db3cd50cd9d9afa154473d9aa",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/61df27cc0383e310908e26917d1d5bc5915367": "0b82b343eeed406055d0515b633fe3e6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/40ef64f8004d9ed4f8cd7be272ea427d88e540": "df76ea1a33bd24107a542b712598b85d",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e5/d56c53c12bdd84a8cf52cfde3334d4401dfde2": "171372012533e92140e14b3936126341",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/322e8c70a5fd515c6943efd0eaf24a85aab31e": "73ac9f1fe0cdbce76247814e1e03c841",
".git/objects/e8/bfa4bf7968e9521a2ce05e467261210f6a6c9b": "fc04e5d2eb43ca8e82a1d19a60258e77",
".git/objects/e9/2edfdf649e714cc4d3b8b9e84188b3e0514798": "c1a931299c2bdda9f2c4c0a3ecda9def",
".git/objects/ea/dc217e8bb7e55c79a0259e7e748c792bc2317e": "c49d70b02d57b7f056cb0327606a8ad3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ad0f176b8d9971548771e13e9f53cdbe5208c4": "8f20fde143f568b93de3e8e6155f9c85",
".git/objects/f1/38c052a43c49d37940044b360a9f9a4b076aa0": "d128d25d7cfeba658464e944a6c838ee",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/main": "79e508ccfcb883e3d9d9d1d3ce495d3e",
".git/refs/remotes/origin/main": "79e508ccfcb883e3d9d9d1d3ce495d3e",
"assets/asset/images/BI.png": "d4ca19922207d2dbd875333949717f45",
"assets/asset/images/code.png": "99d89767f9e303b814b51b83096f46e6",
"assets/asset/images/git.png": "e613372679ab303563431324b23f96f6",
"assets/asset/images/Google.png": "9b66feba5baa9b1e7a3c91a04f5a84a3",
"assets/asset/images/google_logo.png": "7d2d2829908381956605cdfe7a3af976",
"assets/asset/images/home.png": "6669edefe6a09c196e42176b34b8c35e",
"assets/asset/images/kpmg.png": "b62eaa19da138d020f939da0a1eac411",
"assets/asset/images/kpmg_logo.png": "5a48587c197bb5c4bb869e5c664bf9af",
"assets/asset/images/linkedin.png": "ce8b477f330f3fc4ef9e5e6209ab2cb9",
"assets/asset/images/logo.png": "5e28db8b3b89054566e2650d409d02b6",
"assets/asset/images/logo2.png": "c62fdec819a9b7dc2ef1709c40f518a7",
"assets/asset/images/mail.png": "a97274d9f2c673c84de3a18004a74417",
"assets/asset/images/matplotlib.png": "240697a04a084cae746ab5ea71788f49",
"assets/asset/images/notebook.png": "2a1dbddc3ac576f10fbc75e0859e37fe",
"assets/asset/images/numpy.png": "bcf7b3c74d00d6ed1601f4bc7bcc015d",
"assets/asset/images/pandas.png": "7d4e730dddaf54577109334ebcf85161",
"assets/asset/images/profile.png": "5532019a955f7a7246421409e971841a",
"assets/asset/images/profile2.png": "2206d2f0e317301a41ba04e316d7f8bc",
"assets/asset/images/Python.png": "e60218a4aa695f8c3033486d6246131d",
"assets/asset/images/pythonMono.png": "0349a16acf772376fd0bf3b4b37649cd",
"assets/asset/images/R.png": "b3aa8d01d3ecc4ee356deefa72ee21d4",
"assets/asset/images/scikit.png": "162448f6709c1c64122bf1a247e29343",
"assets/asset/images/sql.png": "bfe53b320da1f423bb7953efd2d5fdf7",
"assets/asset/images/tableau.png": "33a6f0cc15b7acbb5e65929eb9f64a2f",
"assets/asset/images/v1.png": "d4ebd5412349f7166a22648780ba9c46",
"assets/AssetManifest.bin": "9daf4f706d927963cd33eb23146aaf63",
"assets/AssetManifest.json": "d67f8094d6e84342ec37808771a2ac3a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "8b582b7c9efe2bcb940475424f505c8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9fbb2a630578421b68e4a7c228c4ffc0",
"/": "9fbb2a630578421b68e4a7c228c4ffc0",
"main.dart.js": "4313c66196aa32d6a73692b63122e275",
"manifest.json": "a4d7cc80282455583c81ede270bb1a17",
"version.json": "701cf18a05c8fb80bb8e16dcd1f8164b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
