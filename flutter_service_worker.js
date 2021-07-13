'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8e5cce9ad5ad747060092e4c8781e872",
".git/config": "1c9d692db700df6f16bcbe884b48e87b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "004c7dd4a0a6c3465a8e83f9ff495e5e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "96931bccbac9fc71f345f9aa9211a140",
".git/logs/refs/heads/master": "96931bccbac9fc71f345f9aa9211a140",
".git/logs/refs/remotes/origin/master": "65d6dc7d8512e8a82299aac8f70c4e46",
".git/objects/01/d09a5dd8cf4cce73a7e1a8a822b77d322df156": "8f9ce3605d96e7f08fd66f3083ee96ca",
".git/objects/03/5eef4553b72e766c12fd0c9903eb1e0a9962bf": "b9fbd5dbe3ce1a9d7ddacf40d8f20472",
".git/objects/03/caff1cad7c97f2a02fd290b7e1a1c1cab73066": "f5d2828d5732a4e36930b222fbd36785",
".git/objects/0e/530505cc89a6aa36cc869ab5cb9acb126b63b0": "0b9c1d85bd8106dee2c90367fe960bc9",
".git/objects/0f/fbdac0efb7c6273020eea123019958dd033aaf": "6f2ce03ee588d75985c560eba38fd408",
".git/objects/15/9e7cb98a33aab9ce21c544b2f6c2cab218db81": "65fd545c9c50da985f7ca799d9e55960",
".git/objects/17/2b0afa90973dc1f3edc23ab6cbfdb7b898584d": "1ca8c44b320010c7511eb9fd749cfd60",
".git/objects/19/7bf583bba297bc331a5e40cd4073c5b3459051": "13e04b8cfc40e0c89c0078ef767b6f79",
".git/objects/1a/14ead1e5318575d099557b0a327ebdeedb782d": "941ac06a4a2f9e0eddc96ed571f6df54",
".git/objects/1a/5188de765985aa088cc1dd4ac9457083a24eaa": "185fe07cc2abf9ebe736106c8bd650ed",
".git/objects/1d/81d2ad84bb55bee128a0acbbe285b0b9901147": "fdd93ec9d4de7028f798d31c81bc2350",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/1c1b472faa9c31bda921c799f124e431418696": "41be116e914bde764a9e4742b13a80e2",
".git/objects/26/681bd9c61437cea09bdc2d0799ae6151b18595": "26cf760e2b813e3e2e565e38294682d0",
".git/objects/28/3169b36fe42c9f5466968db4aa5e90cf37d8a3": "5903fd72847895e3e1da2eb33a0927e6",
".git/objects/29/e0a77af2fbec9a7ac88e34aad6ef93ccc14656": "c70473df664446008f10d853311125bc",
".git/objects/2b/7c0cd2163c86886d998a192b80b83b5b359652": "868e92afb649a7d2cd4e43b21f35d697",
".git/objects/2c/5df021d41fb0a9600a73e827f79c7738d53043": "c9a57a451f2b4830ce51838fad6f9f09",
".git/objects/31/92a004e1d24a3c4d6861f663346bf76b678c8f": "6084ff8b0009aa04adade21c55a486d2",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/1389f0e465c7c5a9b0b4000802e554583d8965": "a056d3b8934fca48aade0d8f71fd911f",
".git/objects/35/4edabeb7580a9ec9ac16a59aff02f345eaf59f": "33e6d34f01d1f5828f0f6519d674793f",
".git/objects/35/8024b08b1cc320713e09c1c4fd317f85d42c17": "eaee918508e5186eddbe3a0f2c037255",
".git/objects/41/8fae3ac70ea7d0227e77cb2166309b67de253f": "485725db0a27d1d5c2706552a6fcfcdf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/7bbecb38453116ba91185a550009079a416460": "21cdee8ee5aea5c5400215745ae194b1",
".git/objects/47/a1f0b29796f4e24170310efb50bf115df91fb3": "0b8553c398119c4edcb322899ed4ef2a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/6e9da002c35795e4ccd2c682a3184d37f0e5c4": "3995f99ad26f2a32afc0ad3fc4ff73e2",
".git/objects/54/0a518406e454943dcf31750885e1c7c15b6615": "8f213a849248a48fdceeca757232fc14",
".git/objects/5b/fd969e26e65b26a3905a53facb7772b8a97b19": "1abf9088b575a4aa3e4567fba998ed2f",
".git/objects/5f/0832fafd8635f943e014c1dcf929e5c12498d3": "775a65b1650cf739e4c52a3f322c334a",
".git/objects/5f/f3b3b4339bbddf3fe3b087593f0e1931ec3a88": "f14cf37f9b79586eb12c725018d0d82a",
".git/objects/60/a498e33c8db2cc9cd50c6b36da31bea049d245": "11fb089b22b52a2f5b82a1b7947885c2",
".git/objects/67/248dae9e32708dba8558ac81da60ed45038829": "65f0fb3ad6041cd1a320908dbad3e654",
".git/objects/68/de680a84e6b55f136502bf56bf6186b016cc02": "f8ed7d4a350cc52a670843da59104d3f",
".git/objects/6a/933c7baa9a0e7aa2afb3dcf1478b9e154d5593": "111fa7d45f2b8dcc9cadaf89a617cd28",
".git/objects/6f/2d1d0542de6b5ea34626a7f17e710d7817ddbd": "715672ec32266bb17a9bbfd58a443329",
".git/objects/70/a872c19dbd4e47c0688c5a822b59b311a81a82": "dbe07d9adf738ab60ab429fcb7e6fa99",
".git/objects/72/4032da8279c799b13b444203c6ef32ec4af60c": "cade8bebd2e94edbac99ef9da544b3a1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/b5fd9edf68470cf373d933d76fbeae31c0380f": "ca41728124b3b86c3d2ef933818678a7",
".git/objects/80/8705624f00bdf45d38da7c603f537ff4dc5b65": "803cf0a6ad4e0df33a4214d0b0c67b56",
".git/objects/81/0323b4cc0ecada88310dc8a1d383e9212693db": "43c33d160f264034e941863fefa3d1d2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/44ce261522c392c3dd1af383b4b4c6f44e94c2": "39c896b35e42006e56bbd05c208f6cac",
".git/objects/8f/02d87967ac280037bc62b9eae9e28d5732cd47": "3677d24e45feab531697096752ee97f2",
".git/objects/91/fe1ee42a12b84bf4bb36edd58cc7605cd09334": "faaf849cb6bb936cc864099f5902d135",
".git/objects/94/9d566559a21da10f88578a295b6a0215345c31": "379912f5cc88240c518f32cdc398b9e8",
".git/objects/96/94f448f32d70a54f65329b714382d94bca5cb0": "037386b4c7f83685d26a0c46598f461f",
".git/objects/9b/e1e8214810b846d30031973ea06facf1f2ae02": "43b0e2a1c26881e0a8f62272cebfa132",
".git/objects/9d/1dcfe283f1247c48cbaac1c483c62a804cf362": "b73f89ab1c4e62b2f144f237cfc2a54d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/d1b8274890e81a1d0361aad0a3bb9321479aa5": "9d6d431aed86e752c292cb1450babb5b",
".git/objects/b2/5cc1d84bf78f7e51cb7ede65db7ffe05365aff": "760feb3e32148fae462a80573dfdbea2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/513fcf8037be41d45a7ad283c056f9ed6ed228": "68c78282e3ea253a8293324c9e4536d5",
".git/objects/bf/0131980ea5d21435a1e52c0e8060f0d3c1ee68": "26668c8ae7a28db881f0b2ceb75d1839",
".git/objects/bf/e8fe80b0f8235a7925929971b8464302417d52": "aff545a483db0b56049aad357b678762",
".git/objects/ca/0fd65765698de273770b52b29300ec6497f9b4": "5ab482f1087ac2440d76f400e38d343a",
".git/objects/cc/9b164a5914c060d3525c357b6cd1c0da5054f3": "89361cbdf8efb721a4b9834f7ca0bba4",
".git/objects/d9/7626c8475758d5a3be38f1b95e737e63052cc6": "127cbbe77bf8520a0345ece893b64b10",
".git/objects/db/b0b91274471003be46590a863ff66ba6b3c049": "142d42465e106799bea430d09e5ebe4b",
".git/objects/e3/8a2724694df391bd6a2e04616d4189a46497c8": "3798b391926a335cdfce9b702e392af6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/be522d29498ccb22a1c3e20c430116e890d9c4": "096d6c19e9bea05ff320653f811616ef",
".git/objects/f0/03d793a1c121ffeecb7f20c7181451a2c7a01c": "4685b627117bb38428a1898554b4710a",
".git/objects/f1/e4ddcf67d6eb70abd4c1faf1cf43522c0f3725": "e36c64385d94f9bd2c0832aec720a4dc",
".git/objects/fd/09457e30721032e02ff4c54700a5a138a51e0b": "82190e6ac0261d5b8cab9c2ecdde9640",
".git/objects/fd/7d53ceea472523ebd7af6939a60e06b3024cda": "7837ef32c6038e7fdbf56a747a051b27",
".git/refs/heads/master": "1121e86de7afdf917af28b31f501a964",
".git/refs/remotes/origin/master": "1121e86de7afdf917af28b31f501a964",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "2e8aece9df7ee35fcb5b472273e991e7",
"assets/assets/sample/aberta/0000.png": "45350a4155c5a9970349f422ab2f42ac",
"assets/assets/sample/aberta/0005.png": "b0deb7da2983d9f5a5e6775082be2317",
"assets/assets/sample/aberta/0010.png": "cadbb4db15f7f84f23f399b4d12444bc",
"assets/assets/sample/aberta/0015.png": "d573095cdf390a48f01270967c8fe7d7",
"assets/assets/sample/aberta/0020.png": "8f2e50fcb61ec113e20fb3aaad37c18a",
"assets/assets/sample/aberta/0025.png": "6484499da1ab22528ddf88235a22b072",
"assets/assets/sample/aberta/0030.png": "a6ff70c71072fcee7015f7f4a5139a44",
"assets/assets/sample/aberta/0035.png": "14f881d6c4c1a2a5d12088a3e63cde42",
"assets/assets/sample/aberta/0040.png": "84121f25b9e418eb4ccd009a80f7dfe3",
"assets/assets/sample/aberta/0045.png": "b69030ebbb0fd5e11b18854cb2971621",
"assets/assets/sample/aberta/0050.png": "a353157ce4c6576279f92169c6ad7eeb",
"assets/assets/sample/aberta/0055.png": "6719e25f5a103ac3a2d4b74aa9b9e468",
"assets/assets/sample/aberta/0060.png": "9cddf4bb29c7a74242394b7c03da7221",
"assets/assets/sample/aberta/0065.png": "d9e19f17141a377507d21223dbfd65fb",
"assets/assets/sample/aberta/0070.png": "00fcf5015526899312c613782d82bce3",
"assets/assets/sample/aberta/0075.png": "6e65e4b9f60f2f439d21f1bf07af2a2f",
"assets/assets/sample/aberta/0080.png": "a8a8929e2b3f7e18fc6edc4a8099a2a3",
"assets/assets/sample/aberta/0085.png": "71f5b3b3937b33942d99675606dd9baf",
"assets/assets/sample/aberta/0090.png": "545c50bbac5ddaf5ba6d1ac4eeb13614",
"assets/assets/sample/aberta/0095.png": "9b2b29f9498f4fd3f151b2cbeb5f1c93",
"assets/assets/sample/fechada/0000.png": "6ea2d19e053d051b68d1b4f365290954",
"assets/assets/sample/fechada/0005.png": "d016da1802fb8e78327bffb7c0e63858",
"assets/assets/sample/fechada/0010.png": "5a9f309a2787b5ab989d22cfadcadf69",
"assets/assets/sample/fechada/0015.png": "0d6570aacbaaac99f093856e718b67e1",
"assets/assets/sample/fechada/0020.png": "9cb8622cd8aa267bdaebf3d44ecdc608",
"assets/assets/sample/fechada/0025.png": "55f0ffad92b8ea33f7814fc4c6f914fe",
"assets/assets/sample/fechada/0030.png": "03475a4bb74bb9bd9901c975636596c5",
"assets/assets/sample/fechada/0035.png": "f29dd1fd9cb1465f180c96905278af8f",
"assets/assets/sample/fechada/0040.png": "0e96cce0bb5ba361c51653a579bafdf0",
"assets/assets/sample/fechada/0045.png": "b1853da87f56ce8450c14659bab0de4a",
"assets/assets/sample/fechada/0050.png": "6978bd317b17de2fc94849d2d451557b",
"assets/assets/sample/fechada/0055.png": "5e0cbddb068fe8285ffe9feda9481653",
"assets/assets/sample/fechada/0060.png": "ccf06486ad6b77e3094fe2f6d05c879a",
"assets/assets/sample/fechada/0065.png": "a766ce8359818cbab7ddbaf1c1266f53",
"assets/assets/sample/fechada/0070.png": "5187fb78cc29125b41d42c645dba14cb",
"assets/assets/sample/fechada/0075.png": "a8a12aa2db639c9b638cfad49a971d90",
"assets/assets/sample/fechada/0080.png": "82059360cf20cc072797edee0254ea05",
"assets/assets/sample/fechada/0085.png": "c59fb217d0e31f44307091df5b64e917",
"assets/assets/sample/fechada/0090.png": "9493a44e1800457494c442f117756135",
"assets/assets/sample/fechada/0095.png": "e4013b239749d53540e3e271e4b5d86e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "785a6d82629466a4f35850a9445bd06c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f558dfadf062596f6553437ad8dcd256",
"/": "f558dfadf062596f6553437ad8dcd256",
"main.dart.js": "4806309772233ed4a90d2b1f094b9329",
"manifest.json": "616d83410f525df0ef2a5efc0dea0ae0",
"version.json": "4f91c28ce402b7978ad9c676c426328e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
