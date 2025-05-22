// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7vXoQ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 50619;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7381faf90d8ce6f6";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"9qcUd":[function(require,module,exports) {
var _staggerText = require("./modules/staggerText");
var _staggerElements = require("./modules/staggerElements");
var _setLoadingStates = require("./modules/setLoadingStates");
var _playVideoOnScroll = require("./modules/playVideoOnScroll");
var _menu = require("./modules/menu");
var _setImageMasks = require("./modules/setImageMasks");
var _formSubmit = require("./modules/formSubmit");
// window.addEventListener("beforeunload", () => {
//   console.log('beforeunload');
//   setLoadingStates();
// });
// window.addEventListener("popstate", () => {
//   console.log('popstate');
//   setLoadingStates();
// });
// document.addEventListener("pageshow", (event) => {
//   console.log('pageshow', event);
//   // Check if the page was restored from the bfcache
//   if (event.persisted) {
//     // Re-run your loading animation
//     setLoadingStates();
//   }
// });
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded");
    (0, _playVideoOnScroll.playVideoOnScroll)();
    (0, _staggerElements.setStaggerElements)();
    (0, _setImageMasks.setImageMasks)();
    // setLoadingStates();
    (0, _menu.initMenu)();
});
document.fonts.ready.then(()=>{
    (0, _staggerText.setStaggerText)();
    (0, _formSubmit.initFormSubmit)();
    (0, _formSubmit.initContactFormUi)();
});

},{"./modules/staggerText":"h1EYx","./modules/staggerElements":"aJF8f","./modules/setLoadingStates":"10fje","./modules/playVideoOnScroll":"gWHEb","./modules/menu":"gw7wn","./modules/setImageMasks":"4hIA7","./modules/formSubmit":"6PCS8"}],"h1EYx":[function(require,module,exports) {
// Link timelines to scroll position
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setStaggerText", ()=>setStaggerText);
function createScrollTrigger(triggerElement, elements, start, end, stagger, delay, withScroll) {
    const trigger = {
        trigger: triggerElement,
        scrub: true,
        start,
        fastScrollEnd: 500,
        preventOverlaps: "scroll-text"
    };
    if (!withScroll) {
        trigger.onEnter = ()=>{
            gsap.to(elements, {
                yPercent: 0,
                stagger: stagger,
                ease: "power4.out",
                delay: Number(delay)
            });
        };
        return gsap.timeline({
            scrollTrigger: trigger
        });
    } else {
        trigger.end = end;
        return gsap.timeline({
            scrollTrigger: trigger
        }).to(words, {
            yPercent: 0,
            stagger: stagger,
            ease: "none"
        });
    }
}
function setStaggerText() {
    // Split all words on the brand core section
    const textEls = document.querySelectorAll("[stagger-text]");
    textEls.forEach((el)=>{
        el.classList.add("init");
        const startVal = el.dataset.startPos || "center bottom", endVal = el.dataset.endPos || "bottom center", stagger = el.dataset.stagger || 0.05, delay = el.dataset.delay || 0, withScrollTrigger = el.dataset.withScroll || false;
        if (el.classList.contains("w-richtext")) {
            const staggerTextEls = SplitText.create(el.querySelectorAll("p, li, h2, h3"), {
                type: "lines",
                mask: "lines",
                autoSplit: true,
                onSplit: (self)=>{
                    gsap.set(self.lines, {
                        yPercent: 100
                    });
                    return createScrollTrigger(el, self.lines, startVal, endVal, stagger, delay, withScrollTrigger);
                }
            });
        } else {
            const staggerTextEls = SplitText.create(el, {
                type: "lines",
                mask: "lines",
                autoSplit: true,
                onSplit: (self)=>{
                    gsap.set(self.lines, {
                        yPercent: 100
                    });
                    return createScrollTrigger(el, self.lines, startVal, endVal, stagger, delay, withScrollTrigger);
                }
            });
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aJF8f":[function(require,module,exports) {
// Link timelines to scroll position
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setStaggerElements", ()=>setStaggerElements);
function createScrollList(triggerElement, elements, start, stagger, delay) {
    gsap.set(elements, {
        yPercent: 100,
        opacity: 0
    });
    gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            scrub: true,
            start,
            once: true,
            onEnter: ()=>{
                gsap.to(elements, {
                    yPercent: 0,
                    opacity: 1,
                    stagger,
                    ease: "power4.out",
                    delay: Number(delay)
                });
            }
        }
    });
}
function setStaggerElements() {
    const list = document.querySelectorAll("[stagger-list]");
    if (!list) return;
    list.forEach((el)=>{
        const elements = el.querySelectorAll("[stagger-el]"), startVal = el.dataset.startPos || "top top", stagger = el.dataset.stagger || 0.05, delay = el.dataset.delay || 0;
        if (!elements) return;
        createScrollList(el, elements, startVal, stagger, delay);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"10fje":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setLoadingStates", ()=>setLoadingStates);
function setLoadingStates() {
    const loading = document.querySelector(".loading");
    if (!loading) return;
    const outElements = loading.querySelectorAll(".loading_inner.out");
    const inElements = loading.querySelectorAll(".loading_inner.in");
    gsap.set(inElements, {
        yPercent: 0
    });
    gsap.set(outElements, {
        yPercent: 100
    });
    gsap.to(inElements, {
        yPercent: -100,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
        immediateRender: true,
        onComplete: ()=>{
            loading.style.display = "none";
            gsap.set(inElements, {
                yPercent: 100
            });
        }
    });
    // Loading animation
    const links = document.querySelectorAll("a");
    links.forEach((l)=>{
        l.addEventListener("click", (e)=>{
            // e.preventDefault();
            const href = l.href;
            const url = new URL(href);
            if (window.location.origin === url.origin && window.location.pathname !== url.pathname && l.target !== "_blank") {
                e.preventDefault();
                loading.style.display = "block";
                gsap.to(outElements, {
                    yPercent: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "expo.out",
                    immediateRender: true,
                    onComplete: ()=>{
                    // loading.style.display = "none";
                    }
                });
                setTimeout(()=>{
                    window.location.href = href;
                }, 500);
            }
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gWHEb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "playVideoOnScroll", ()=>playVideoOnScroll);
function playVideoOnScroll() {
    const videos = document.querySelectorAll("video.bg-video");
    if (!videos) return;
    videos.forEach((video)=>{
        const start = video.dataset.start || "top bottom";
        const pauseOutside = video.dataset.pauseOutside === "true";
        const rewind = video.dataset.rewind === "true";
        const loop = video.dataset.loop === "true";
        if (loop) video.loop = true;
        let settings = {
            trigger: video,
            start: start,
            onEnter: ()=>{
                video.play();
            }
        };
        if (pauseOutside) {
            settings.onLeave = ()=>{
                pauseOrRewind(video, rewind);
            };
            settings.onLeaveBack = ()=>{
                pauseOrRewind(video, rewind);
            };
            settings.onEnterBack = ()=>{
                video.play();
            };
        } else settings.once = true;
        ScrollTrigger.create(settings);
    });
}
function pauseOrRewind(video, rewind) {
    video.pause();
    if (rewind) video.currentTime = 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gw7wn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initMenu", ()=>initMenu);
function initMenu() {
    const menuItems = document.querySelectorAll(".menu-link[data-item]");
    if (!menuItems) return;
    const menuWrapper = document.querySelector(".menu-wrapper"), itemsWrapper = menuWrapper.querySelector(".menu-inner"), imgsWrapper = menuWrapper.querySelector(".menu-img-wrapper"), imgsItems = imgsWrapper.querySelectorAll(".menu-img-item"), menuTrigger = document.querySelector(".button.menu");
    gsap.set(itemsWrapper, {
        clipPath: "inset(0% 0% 100% 0%)"
    });
    gsap.set(imgsWrapper, {
        clipPath: "inset(100% 0% 0% 0%)"
    });
    gsap.set(menuItems, {
        opacity: 0,
        yPercent: 100
    });
    const tl = gsap.timeline({
        paused: true
    });
    const buttonTl = gsap.timeline({
        paused: true
    });
    buttonTl.fromTo(menuTrigger.querySelectorAll(".button-label-inner"), {
        xPercent: 0
    }, {
        xPercent: -100,
        ease: "power4.inOut",
        duration: 0.5
    });
    tl.to(menuWrapper, {
        display: "flex",
        duration: 0
    }).to(itemsWrapper, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        duration: 0.75
    }).to(imgsWrapper, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        duration: 0.75
    }, "-=.75").to(menuItems, {
        opacity: 1,
        yPercent: 0,
        stagger: 0.03,
        ease: "power4.out"
    }, "-=0.5");
    menuTrigger.addEventListener("click", ()=>{
        if (menuTrigger.classList.contains("active")) {
            tl.reverse();
            buttonTl.reverse();
            menuTrigger.classList.remove("active");
        } else {
            tl.play();
            buttonTl.play();
            menuTrigger.classList.add("active");
        }
    });
    // set first item on the list as the initial element. If a link is active, select that one instead.
    let currentItem = document.querySelector(".menu-link.w--current[data-item]");
    if (!currentItem) currentItem = document.querySelector(".menu-link[data-item]:first-child");
    let currentItemId = currentItem.dataset.item;
    gsap.set(`.menu-img-item[data-item="${currentItemId}"]`, {
        zIndex: 1
    });
    menuItems.forEach((item)=>{
        item.addEventListener("mouseover", ()=>{
            const itemId = item.dataset.item || null;
            if (!itemId || currentItemId === itemId) return;
            const imgWrapper = document.querySelector(`.menu-img-item[data-item="${itemId}"]`);
            if (!imgWrapper) return;
            const tl = gsap.timeline();
            tl.to(imgsItems, {
                zIndex: 0,
                duration: 0
            }).to(document.querySelector(`.menu-img-item[data-item="${currentItemId}"]`), {
                zIndex: 1,
                duration: 0
            }).to(imgWrapper, {
                zIndex: 2,
                duration: 0
            }).fromTo(imgWrapper, {
                clipPath: "inset(50%)"
            }, {
                clipPath: "inset(0%)",
                duration: 0.75,
                ease: "power4.out"
            }).fromTo(imgWrapper.querySelectorAll(".menu-img"), {
                scale: 1.2
            }, {
                scale: 1,
                duration: 0.75,
                // stagger: 0.1,
                ease: "power4.out"
            }, "-=.75");
            currentItemId = itemId;
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4hIA7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setImageMasks", ()=>setImageMasks);
function setImageMasks() {
    const imageMasks = document.querySelectorAll("[image-mask]");
    if (!imageMasks) return;
    const maskDirectionMap = {
        top: {
            start: "inset(0% 50% 100%)",
            end: "inset(0% 0% 0%)"
        },
        bottom: {
            start: "inset(100% 50% 0%)",
            end: "inset(0% 0% 0%)"
        },
        left: {
            start: "inset(50% 100% 50% 0%)",
            end: "inset(0% 0% 0% 0%)"
        },
        right: {
            start: "inset(50% 0% 50% 100%)",
            end: "inset(0% 0% 0% 0%)"
        },
        center: {
            start: "inset(50%)",
            end: "inset(0%)"
        }
    };
    imageMasks.forEach((el)=>{
        const type = el.getAttribute("image-mask");
        const mask = Object.keys(maskDirectionMap).includes(type) ? maskDirectionMap[type] : maskDirectionMap.center;
        setMask(el, mask);
    });
}
function setMask(el, mask) {
    const start = el.dataset.startPos || "center bottom";
    const loading = el.getAttribute("loading");
    el.style.opacity = 0;
    const imageMaskObserver = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                const el = entry.target;
                if (el.complete) animateImage(el);
                else el.addEventListener("load", ()=>animateImage(el));
                imageMaskObserver.unobserve(el);
            }
        });
    }, {
        threshold: 0.1
    });
    imageMaskObserver.observe(el);
    function animateImage(el) {
        el.style.opacity = 1;
        gsap.fromTo(el, {
            // opacity: 0,
            clipPath: mask.start
        }, {
            // opacity: 1,
            clipPath: mask.end,
            duration: 1,
            ease: "expo.out"
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6PCS8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initFormSubmit", ()=>initFormSubmit);
parcelHelpers.export(exports, "initContactFormUi", ()=>initContactFormUi);
function initFormSubmit() {
    const forms = document.querySelectorAll("form");
    if (!forms) return;
    forms.forEach((form)=>{
        const formSubmitButton = form.querySelector(".button.is-submit");
        const submitButton = form.querySelector(".form_submit");
        const label = form.querySelector(".button-label");
        if (!formSubmitButton || !submitButton) return;
        // add event listener to the form submit button
        formSubmitButton.addEventListener("click", function(e) {
            e.preventDefault(); // prevent the default action
            // check if the form is valid
            if (form.checkValidity()) {
                // if valid, submit the form and change the button text
                submitButton.click();
                label.textContent = submitButton.getAttribute("data-wait");
            } else // if not valid, report validity (this will show the HTML5 validation messages)
            form.reportValidity();
        });
    });
}
function initContactFormUi() {
    const formWrapper = document.querySelector(".contact-component");
    const formTriggers = document.querySelectorAll("[data-contact-trigger]");
    if (!formWrapper || !formTriggers) return;
    const formBody = formWrapper.querySelector(".contact-form_body"), formBackdrop = formWrapper.querySelector(".contact-form_backdrop"), closeBtn = formWrapper.querySelector(".button.is-modal-close");
    gsap.set(formWrapper, {
        display: "none"
    });
    gsap.set(formBody, {
        clipPath: "inset(50%)"
    });
    gsap.set(formBackdrop, {
        opacity: 0
    });
    gsap.set(closeBtn, {
        yPercent: -200
    });
    const tl = gsap.timeline({
        paused: true
    });
    tl.set(formWrapper, {
        display: "flex"
    }).to(formBackdrop, {
        opacity: 1,
        ease: "power4.out",
        duration: 0.75
    }, 0).to(formBody, {
        clipPath: "inset(0%)",
        ease: "power4.out",
        duration: 0.75
    }, 0.25).to(closeBtn, {
        yPercent: 0,
        ease: "power4.out",
        duration: .5
    }, .5);
    closeBtn.addEventListener("click", ()=>{
        tl.reverse();
    });
    formTriggers.forEach((trigger)=>{
        trigger.addEventListener("click", ()=>{
            tl.play();
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7vXoQ","9qcUd"], "9qcUd", "parcelRequire5d03")

//# sourceMappingURL=globals.js.map
