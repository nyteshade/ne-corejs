"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = exports.ExtensionManager = exports.Extension = exports.Hasher = void 0;
__exportStar(require("@nyteshade/ne-pubsub"), exports);
__exportStar(require("@nyteshade/ne-reflection"), exports);
var hasher_js_1 = require("./classes/hasher.js");
Object.defineProperty(exports, "Hasher", { enumerable: true, get: function () { return hasher_js_1.Hasher; } });
var extension_js_1 = require("./classes/extension.js");
Object.defineProperty(exports, "Extension", { enumerable: true, get: function () { return extension_js_1.Extension; } });
var extensionManager_js_1 = require("./classes/extensionManager.js");
Object.defineProperty(exports, "ExtensionManager", { enumerable: true, get: function () { return extensionManager_js_1.ExtensionManager; } });
var singleton_js_1 = require("./classes/singleton.js");
Object.defineProperty(exports, "Singleton", { enumerable: true, get: function () { return singleton_js_1.Singleton; } });
// export { BabelPlugin } from './classes/babelPlugin.js'
// export { ObjectExtension } from './extensions/object.js'
__exportStar(require("./functions/reducers/index.js"), exports);
__exportStar(require("./functions/trimUndefined.js"), exports);
