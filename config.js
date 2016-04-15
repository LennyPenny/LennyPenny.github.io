System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  trace: true,

  depCache: {
    "lib/main.js": [
      "systemjs-hot-reloader/default-listener.js",
      "css",
      "../css/main.css!"
    ],
    "github:capaj/systemjs-hot-reloader@0.5.6/default-listener.js": [
      "./hot-reloader.js"
    ],
    "github:systemjs/plugin-css@0.1.20.js": [
      "github:systemjs/plugin-css@0.1.20/css"
    ],
    "github:capaj/systemjs-hot-reloader@0.5.6/hot-reloader.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/core-js/object/keys",
      "babel-runtime/core-js/promise",
      "socket.io-client",
      "weakee",
      "debug"
    ],
    "npm:babel-runtime@5.8.38/helpers/get.js": [
      "../core-js/object/get-own-property-descriptor"
    ],
    "npm:babel-runtime@5.8.38/helpers/inherits.js": [
      "../core-js/object/create",
      "../core-js/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/keys.js": [
      "core-js/library/fn/object/keys"
    ],
    "npm:babel-runtime@5.8.38/helpers/create-class.js": [
      "../core-js/object/define-property"
    ],
    "github:socketio/socket.io-client@1.4.5.js": [
      "github:socketio/socket.io-client@1.4.5/socket.io.js"
    ],
    "npm:weakee@1.0.0.js": [
      "npm:weakee@1.0.0/weakee.js"
    ],
    "npm:debug@2.2.0.js": [
      "npm:debug@2.2.0/browser.js"
    ],
    "npm:babel-runtime@5.8.38/core-js/promise.js": [
      "core-js/library/fn/promise"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/create.js": [
      "core-js/library/fn/object/create"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js": [
      "core-js/library/fn/object/get-own-property-descriptor"
    ],
    "npm:core-js@1.2.6/library/fn/object/keys.js": [
      "../../modules/es6.object.keys",
      "../../modules/$.core"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/define-property.js": [
      "core-js/library/fn/object/define-property"
    ],
    "npm:weakee@1.0.0/weakee.js": [
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/core-js/weak-map"
    ],
    "npm:debug@2.2.0/browser.js": [
      "./debug"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js": [
      "core-js/library/fn/object/set-prototype-of"
    ],
    "npm:core-js@1.2.6/library/fn/promise.js": [
      "../modules/es6.object.to-string",
      "../modules/es6.string.iterator",
      "../modules/web.dom.iterable",
      "../modules/es6.promise",
      "../modules/$.core"
    ],
    "npm:core-js@1.2.6/library/modules/es6.object.keys.js": [
      "./$.to-object",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.6/library/fn/object/create.js": [
      "../../modules/$"
    ],
    "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js": [
      "../../modules/$",
      "../../modules/es6.object.get-own-property-descriptor"
    ],
    "npm:core-js@1.2.6/library/fn/object/define-property.js": [
      "../../modules/$"
    ],
    "npm:babel-runtime@5.8.38/core-js/weak-map.js": [
      "core-js/library/fn/weak-map"
    ],
    "npm:core-js@1.2.6/library/fn/object/set-prototype-of.js": [
      "../../modules/es6.object.set-prototype-of",
      "../../modules/$.core"
    ],
    "npm:core-js@1.2.6/library/modules/es6.string.iterator.js": [
      "./$.string-at",
      "./$.iter-define"
    ],
    "npm:core-js@1.2.6/library/modules/web.dom.iterable.js": [
      "./es6.array.iterator",
      "./$.iterators"
    ],
    "npm:debug@2.2.0/debug.js": [
      "ms"
    ],
    "npm:core-js@1.2.6/library/modules/es6.promise.js": [
      "./$",
      "./$.library",
      "./$.global",
      "./$.ctx",
      "./$.classof",
      "./$.export",
      "./$.is-object",
      "./$.an-object",
      "./$.a-function",
      "./$.strict-new",
      "./$.for-of",
      "./$.set-proto",
      "./$.same-value",
      "./$.wks",
      "./$.species-constructor",
      "./$.microtask",
      "./$.descriptors",
      "./$.redefine-all",
      "./$.set-to-string-tag",
      "./$.set-species",
      "./$.core",
      "./$.iter-detect",
      "process"
    ],
    "npm:ms@0.7.1.js": [
      "npm:ms@0.7.1/index"
    ],
    "npm:core-js@1.2.6/library/modules/$.object-sap.js": [
      "./$.export",
      "./$.core",
      "./$.fails"
    ],
    "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js": [
      "./$.export",
      "./$.set-proto"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-object.js": [
      "./$.defined"
    ],
    "npm:core-js@1.2.6/library/modules/$.string-at.js": [
      "./$.to-integer",
      "./$.defined"
    ],
    "npm:core-js@1.2.6/library/modules/$.iter-define.js": [
      "./$.library",
      "./$.export",
      "./$.redefine",
      "./$.hide",
      "./$.has",
      "./$.iterators",
      "./$.iter-create",
      "./$.set-to-string-tag",
      "./$",
      "./$.wks"
    ],
    "npm:core-js@1.2.6/library/fn/weak-map.js": [
      "../modules/es6.object.to-string",
      "../modules/web.dom.iterable",
      "../modules/es6.weak-map",
      "../modules/$.core"
    ],
    "npm:core-js@1.2.6/library/modules/es6.array.iterator.js": [
      "./$.add-to-unscopables",
      "./$.iter-step",
      "./$.iterators",
      "./$.to-iobject",
      "./$.iter-define"
    ],
    "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js": [
      "./$.to-iobject",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.6/library/modules/$.classof.js": [
      "./$.cof",
      "./$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.ctx.js": [
      "./$.a-function"
    ],
    "npm:core-js@1.2.6/library/modules/$.export.js": [
      "./$.global",
      "./$.core",
      "./$.ctx"
    ],
    "npm:core-js@1.2.6/library/modules/$.an-object.js": [
      "./$.is-object"
    ],
    "npm:core-js@1.2.6/library/modules/$.for-of.js": [
      "./$.ctx",
      "./$.iter-call",
      "./$.is-array-iter",
      "./$.an-object",
      "./$.to-length",
      "./core.get-iterator-method"
    ],
    "npm:core-js@1.2.6/library/modules/$.set-proto.js": [
      "./$",
      "./$.is-object",
      "./$.an-object",
      "./$.ctx"
    ],
    "npm:core-js@1.2.6/library/modules/$.wks.js": [
      "./$.shared",
      "./$.uid",
      "./$.global"
    ],
    "npm:core-js@1.2.6/library/modules/$.species-constructor.js": [
      "./$.an-object",
      "./$.a-function",
      "./$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.microtask.js": [
      "./$.global",
      "./$.task",
      "./$.cof",
      "process"
    ],
    "npm:core-js@1.2.6/library/modules/$.descriptors.js": [
      "./$.fails"
    ],
    "npm:core-js@1.2.6/library/modules/$.redefine-all.js": [
      "./$.redefine"
    ],
    "npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js": [
      "./$",
      "./$.has",
      "./$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.iter-detect.js": [
      "./$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.set-species.js": [
      "./$.core",
      "./$",
      "./$.descriptors",
      "./$.wks"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:core-js@1.2.6/library/modules/$.redefine.js": [
      "./$.hide"
    ],
    "npm:core-js@1.2.6/library/modules/$.hide.js": [
      "./$",
      "./$.property-desc",
      "./$.descriptors"
    ],
    "npm:core-js@1.2.6/library/modules/$.iter-create.js": [
      "./$",
      "./$.property-desc",
      "./$.set-to-string-tag",
      "./$.hide",
      "./$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/es6.weak-map.js": [
      "./$",
      "./$.redefine",
      "./$.collection-weak",
      "./$.is-object",
      "./$.has",
      "./$.collection"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-iobject.js": [
      "./$.iobject",
      "./$.defined"
    ],
    "npm:core-js@1.2.6/library/modules/$.iter-call.js": [
      "./$.an-object"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-length.js": [
      "./$.to-integer"
    ],
    "npm:core-js@1.2.6/library/modules/core.get-iterator-method.js": [
      "./$.classof",
      "./$.wks",
      "./$.iterators",
      "./$.core"
    ],
    "npm:core-js@1.2.6/library/modules/$.is-array-iter.js": [
      "./$.iterators",
      "./$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.shared.js": [
      "./$.global"
    ],
    "npm:core-js@1.2.6/library/modules/$.task.js": [
      "./$.ctx",
      "./$.invoke",
      "./$.html",
      "./$.dom-create",
      "./$.global",
      "./$.cof",
      "process"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "process"
    ],
    "npm:core-js@1.2.6/library/modules/$.collection-weak.js": [
      "./$.hide",
      "./$.redefine-all",
      "./$.an-object",
      "./$.is-object",
      "./$.strict-new",
      "./$.for-of",
      "./$.array-methods",
      "./$.has",
      "./$.uid"
    ],
    "npm:core-js@1.2.6/library/modules/$.iobject.js": [
      "./$.cof"
    ],
    "npm:core-js@1.2.6/library/modules/$.dom-create.js": [
      "./$.is-object",
      "./$.global"
    ],
    "npm:process@0.11.2.js": [
      "npm:process@0.11.2/browser.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.html.js": [
      "./$.global"
    ],
    "npm:core-js@1.2.6/library/modules/$.collection.js": [
      "./$",
      "./$.global",
      "./$.export",
      "./$.fails",
      "./$.hide",
      "./$.redefine-all",
      "./$.for-of",
      "./$.strict-new",
      "./$.is-object",
      "./$.set-to-string-tag",
      "./$.descriptors"
    ],
    "npm:core-js@1.2.6/library/modules/$.array-methods.js": [
      "./$.ctx",
      "./$.iobject",
      "./$.to-object",
      "./$.to-length",
      "./$.array-species-create"
    ],
    "npm:core-js@1.2.6/library/modules/$.array-species-create.js": [
      "./$.is-object",
      "./$.is-array",
      "./$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.is-array.js": [
      "./$.cof"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "clean-css": "npm:clean-css@3.4.12",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.6",
    "github:capaj/systemjs-hot-reloader@0.5.6": {
      "debug": "npm:debug@2.2.0",
      "socket.io-client": "github:socketio/socket.io-client@1.4.5",
      "weakee": "npm:weakee@1.0.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.5.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@6.2.3": {
      "bn.js": "npm:bn.js@4.11.3",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.5.2",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
