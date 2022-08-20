'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "9a807189c402ebfbc72b19984c581ea0",
"index.html": "99e88a974944f8338352e58e7c5dd22e",
"/": "99e88a974944f8338352e58e7c5dd22e",
"pkg/minimint_bridge.d.ts": "90a37a46c7d8c14b1417980e5331ecab",
"pkg/minimint_bridge_bg.wasm": "e0842ec29f94387d2ff2b43d77da415d",
"pkg/minimint_bridge_bg.wasm.d.ts": "90424674e041e4407e865ab2c01808a2",
"pkg/minimint_bridge_bg.js": "19bb58e084e7da4f27013da12312f2cb",
"pkg/minimint_bridge.js": "a353ef7967ce6ddd18a26558640ca0dc",
"pkg/package.json": "596c855a05599937de24f8abe20217bb",
"version.json": "3a54a7db23e9fb8dfc98a45798d6dd59",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/index": "10c2bc5f70373ad1b796ce64c70ec0ac",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/HEAD": "664eda392ecff102bbc058e2fef65554",
".git/logs/refs/heads/master": "0f8f36dc4d2bd1835d322f8387dc7760",
".git/logs/refs/remotes/orgin/master": "f64f430523820a351b26310d028f1d6f",
".git/ORIG_HEAD": "7f0b30994b9306941f9528a9e1f5f1ac",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "125aec841bae87fd70c549b1430a37b5",
".git/objects/fd/aae25ab34b17a329b2328848b26a5e39f15844": "7feba51207d7de7237baf6bfe3747565",
".git/objects/41/3573af137329f386443b1759a64cfccf7b4f36": "d842cf2418219f6f3c9a1be0ff0879f4",
".git/objects/cf/6962d15ccbc8387cc97896b4bded3c6ea7522c": "71767bd2595b93663263465698404f57",
".git/objects/64/c9cd38f8c3a1b39512ebf93b324c480bae82e2": "5b3f0e1ab4a2b3d042b07ef3b723e1aa",
".git/objects/51/2ce70a7801772195c70a5e3d47557799c9a924": "9164e0521372297b98cb41cc86d625df",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ed/5b675eaad39dec2bf43d5a3678b54aae420781": "0a65c250d93500575297d1fda3cc5363",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/c4/a34543fa2f7ba122c5b45ab87a96faf53ed596": "cd7bf2d80ff00709af128b456f58510b",
".git/objects/99/208ab42239022f1ee4bfb615f13dc489e402c3": "577f80eef08af10a0d7f873ff44d9eb3",
".git/objects/49/ce1e3722edcce618972ee4d44edf131185fcbb": "1fcd2be9ec5b543677e4f00419971da3",
".git/objects/06/4b6fcbf15a9713349bec54a062e95e8481e598": "d8d1439d4495bfa7f981682944876455",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/3fb7e0d8f9f1a7d182e0aa894867b4228196f3": "273abb37774d01d150e1e39444c1b2db",
".git/objects/7e/18b561d82384b5236d5fc79a80d565ae2fe0de": "3e4f82216646f6c44ae9e538323202cf",
".git/objects/45/fbad17667fc2c2a51c97a55ff5061093f559c2": "295239646e4117b9f07265f759e6dd1d",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/4551987502dd54ebd2f4cf4fafee6dd8d1282a": "93b444dc5c2697a386a6ac6e5e231fab",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/fe/d95aa5a329b62edb26f1cfa1db9a65839132fd": "8d1dc327d868c58964a8015e04729a1a",
".git/objects/3b/0ccc0d16e976cc121e53bd8305c256f0a76074": "c2b5e6bfd2f170d5498dd1aa81de5899",
".git/objects/35/81bb2c2243f47cb611ff58489c342d76b0a32c": "77ccf6fbfffddf7daa9dcbe4a802387e",
".git/objects/a8/7638dc4c9e490419e3ada812e426068504eb71": "aae1a7c4b8353f44e43097bc2ef722d9",
".git/objects/20/8a960c1074cb2ebce37a450037f7a82c7df13f": "6fcf221f9411348b87208a61b38d5396",
".git/objects/20/3b36cf8694b351d533bb556a12663c8475a904": "2deec852adceef495071c05cef15fe96",
".git/objects/3a/a79a2c58763736b4b1192da3cb2059faa8e0d1": "3686e5df60b4e4814c77e5dfcd031bed",
".git/objects/1f/975cc065fbed6ffb6b37c5316b532b46e08969": "108f4fccd97eda078c5847f84e87381e",
".git/objects/9c/e33c561e4cd7d52054dc61b05e2ab55ce5244c": "4005a1158dfd8762eeaedfce3f231d65",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/85fe238ef5c0790956c6ea77971e138de4a3c2": "bc99f0d88683538482366a0320875c5d",
".git/objects/f1/7b596c9d7919ffa8ad101511d25b5c6ec6efcb": "3f2ed6d38944dee940b594f294f5a31c",
".git/objects/3d/6ae11786fb63672dd69c535cc530903c32dbd2": "c08f3ab4ad1950d76036a941592029f9",
".git/objects/c0/de27d89b87e8dee8725e383f6bbfa46a5c681e": "8be164f506dd8953ecfc805c5a282ece",
".git/objects/0b/c7740a1d4fe7863bb18d06bcefc8457e8e185e": "606c5ed8bfecf1876bb4ef59e16fa599",
".git/objects/ff/27de6807c2f343446c694f65cd8e744c00dbd2": "40c42f6375b81c02900667f222874bf0",
".git/objects/d1/b4edae4f81014efc7d3fbaa16be60e81194f8a": "6ff6a1ca90a6a96b66e71e96bd434c08",
".git/objects/d1/9cd9bd42f595b38537381990bec26ff3d68ed0": "8a732500e02e16fd6186ee58a7173a10",
".git/objects/83/1a6f2ad74f2aa8514fd6d9a2c415044b7f38d1": "2715a1c98306da8fe7fe77a11f28a5f8",
".git/objects/4e/9c071f90b8439e0437e9769dbcf1bdf82b65ff": "b6523344e5a016bfac4afec6ebb03fbf",
".git/objects/4e/7879d3dd9f9ae8fb3d72f46f2ffaa4878a7cde": "662d335efc6e8b0501412aa3c449a928",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/b0/47fddfddbbc9bd5cefa3d4e8e7fa66ed9ec651": "f561a5948cfb68dde364a214ca317a82",
".git/objects/1c/b4c659270cb0d1d0f2c49a0b011fb8c4a7f686": "26610915b248354b2b30c0a1a36fb223",
".git/objects/30/eb6e6ea46addd0fecbe7e76478c07ec184357f": "ab915a1d63dcebd5d7b394cc74c4b022",
".git/objects/5d/06f974974370175a9359bd5c2a5cb3925911b1": "6347792607017d11a5ade3972c81ea23",
".git/objects/59/3ee497ea653f6c71e799483a694f816f9403e4": "665d89d6f5c61aff656426d9e50ca6c7",
".git/objects/b2/ecfd45f706e6b2f2bdf0bb111f3100c98c8a81": "12fd20e33acbfc53605ef0b9a68c6b4e",
".git/objects/b2/891ca233c7f19340a3e8450d0f902848dd96d8": "0f99f949b9dc290f55e983ddb875308b",
".git/objects/53/6e58a418ff91214d57b35700d52355d69577a7": "b77b398027976407f803ebf3fc77a835",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/80/62455931c14e9513d44a9e892aa77434887a2c": "a6cb2239e1a3761c8a185d2288867614",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/5c/d95356693d6c41d41eca8a48f0e17deb842ed1": "acd87e93079b8bc7194e4314d28e0964",
".git/objects/b1/231fa3659dcfb4dbf2183c2e2e375da7c40fdd": "32027fd1599deb5836e1ae3e66813eb9",
".git/objects/cc/0b7b934895748fa8fa170db76348fdcd1eb0f0": "122b519535147801c2068a92939c5e83",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/d5/e3f945e965cd3d51f811de4e23daf55ff0834c": "e7d36da4a942e7293068213e6d236110",
".git/objects/7c/72396bf5c3f8933f88c776f3150c63890642aa": "dbf83daab2061ea5501fafd1486e1331",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/90/a00577fe22b00f4d545122bebbec2f32cce997": "9bb970f0752d70dfe0f21f0ee1c3fb27",
".git/objects/90/0cd17f50cfc68a284acc1f2a562eed857f4b6e": "cd1f9c96a0bfce052b2067c41e3b8161",
".git/objects/73/41bba4b702fba4a65b14171a2ea9f9742074ce": "5fbb33fba58b974a11c1a46677101982",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/43/ee723bc956bd58a7b65f749778cbdf5c4bd884": "595382a4d98782303ef5617c8a8adfb6",
".git/objects/60/90368fff873ac4a6bcfbce064f4942db5d618e": "bee07c2623ee093458007d67a10161b4",
".git/objects/cd/8fee0d9ff4cb07ee7439fbde340cdc2d9037da": "7d423ac60a9acf1d9bbb19c523eb1eca",
".git/objects/f0/df27392fd05ca7417af2ebb7db862eb62708af": "867000398c85fb5337219813ddce2dbe",
".git/objects/03/9dc144b87e95a0f8371f9d843cea8f0cb3067c": "89e4cd887bd51dd064ebcbbe9d1c468e",
".git/objects/5f/de9cc034cb01bf288ce5a70a3455c0fd5b5f5d": "9f73fc06c706291887320236433ae1f6",
".git/objects/23/1b39631239df00f7669aab108ba61937548a4c": "dac512ed7c8f3a2b0926cc6e2e632e05",
".git/objects/bf/bd8a310bcaaf66bcf6b60abcde350444b140fd": "57c1bba23861a1f6c769673dbff2ca37",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/42/be283318c3e8d30a93e2878037f8b9b34994db": "c1488cda1efabaabe959d7cb599f3afd",
".git/objects/ac/ec4fd7f3730a2be3057f66158d667956deb96b": "71bda253b024a5ccd3a6a7ef29d834e9",
".git/objects/00/620b5848aba61f9c1249e392918ace0cf57b06": "64d5faa636c6141d927f693dbae76965",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/15/189985b6e886d102a46a9aa0f47dbdf2c9685a": "ae2a268d9e5f25cb0bced8edf94705f8",
".git/objects/e7/ea18d152e115726c1492c063c9ef0c111d521c": "ab09b7ec4d67dfda9cb12f15273bac50",
".git/objects/e7/1ff9aea79b4089850548ae06f2d52734c3b4b9": "e5047e5c1e91c749da366b1ded5aeae7",
".git/objects/47/b596b046c35d86fff083539704eeb0e8e340ff": "1cb2b90c2bb82de2a2cc154b58ce1757",
".git/objects/4b/0d964fdb4d6fdb903f214a71cfc6056e861cd0": "064658ebfa8b3ddb7acecbe34289d192",
".git/objects/8b/d91145e85b6c22e92eba841d3a7e733d530de9": "bec14865b54b17040de8da9bf509095e",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/98/0ea366e0590547d7b8df69bb9aad54cf3b7e5d": "42daace4afc7d07f74273103d276d9a1",
".git/objects/d3/c9c8fb957a279093a41dfea319bd50d456aa5b": "9f3561180667e9ea211dcfda2a38ea12",
".git/refs/heads/master": "b91aff37d355958323f55e4a89fc33fd",
".git/refs/remotes/orgin/master": "b91aff37d355958323f55e4a89fc33fd",
".git/config": "5a0ce3e09d1e0d979dbe0e04114dce28",
"manifest.json": "bb9176104c3b74c1bbdd622cc94fedb1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.d.ts": "76ada6a0e92c16726145a662ed30ce2e",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"index.js": "f2cea338a3485096fb166875ad70cef8",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"index.ts": "680496ae8ed5f01af48ad630206c0915",
"assets/AssetManifest.json": "cf91af3a8b15519e1fccbd4259ca727f",
"assets/NOTICES": "b0d1683e3a501e5fac7ad07ebf39d15a",
"assets/FontManifest.json": "74490eb8070c9a8c8bd1865b2b151682",
"assets/fonts/Archivo_Expanded-ExtraBold.ttf": "3faedabcb95e285d0d80fb73f3a8b5a7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Archivo_Expanded-Bold.ttf": "f2382e6e321b3d5eadbc2ee12acc53de",
"assets/fonts/Archivo-SemiBold.ttf": "c690e6fd48af9806f63605fb830ca06e",
"assets/fonts/Archivo-ExtraBold.ttf": "361ffd657efcbccc396ba5016e8a139a",
"assets/fonts/Archivo_Expanded-Light.ttf": "499ab029cf7a7c32cd030d989a28bea1",
"assets/fonts/Archivo-Regular.ttf": "6605bf394691b0215a07167db60cefa7",
"assets/fonts/Archivo_Expanded-Medium.ttf": "57a4bfbc7a800223ea6fdc89aecdd398",
"assets/fonts/Archivo-Medium.ttf": "e57575f198356256cd5659a67998693e",
"assets/fonts/Archivo_Expanded-Thin.ttf": "27ad3884438a8a17d85aac5b63005924",
"assets/fonts/Archivo-Black.ttf": "b9715d8c3c4c1864cfbb121f21d5b18e",
"assets/fonts/Archivo-ExtraLight.ttf": "22c0ee13bfb822d18b4ba33ea020063a",
"assets/fonts/Archivo_Expanded-Regular.ttf": "dfcf0c3a85fb17e4abe323084f471c98",
"assets/fonts/Archivo_Expanded-ExtraLight.ttf": "144ecb55d9940ac28f08173e1130e2fa",
"assets/fonts/Archivo_Expanded-Black.ttf": "235e1691d50acb8b917b460e5a02cbf8",
"assets/fonts/Archivo_Expanded-SemiBold.ttf": "173aad87b04c25f21809ad77f598e1f9",
"assets/fonts/Archivo-Bold.ttf": "bcd0dc6438407a683457809c9b4468de",
"assets/fonts/Inter-Regular.ttf": "851660f90f21dba5ec35b1765fdd426a",
"assets/fonts/Archivo-Light.ttf": "e88eeb4ca41d2b0c7cc325eec2255b8e",
"assets/fonts/Archivo-Thin.ttf": "1c96f11746cca595a3c6610ad5eecdc2",
"assets/assets/spinny_globe.riv": "d8abae6223d726b63283e18e89c1d923",
"assets/images/fed-graphic.png": "f934a497caf1f39c6ef89acbf9ac78f2",
"assets/images/polygon.png": "f57cb139487fb0f6d2c7be9b0211e6c3",
"assets/images/dirtyqr.png": "2c20734bcbe3ea06bb366605785ba85b",
"assets/images/bg-dark.png": "6de7e2fc30cc1d98ac49be4edd3124a3",
"assets/images/bolt-circle.png": "8c56c633c3bef912d9d45f45d2ee8a05",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
