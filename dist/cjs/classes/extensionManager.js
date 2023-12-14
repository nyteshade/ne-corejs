"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ExtensionManager_extensions;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionManager = void 0;
const ne_reflection_1 = require("@nyteshade/ne-reflection");
const singleton_js_1 = require("./singleton.js");
/**
 * The ExtensionManager class is responsible for registering and managing
 * extensions.
 */
class ExtensionManager extends singleton_js_1.Singleton {
    constructor() {
        super(...arguments);
        _ExtensionManager_extensions.set(this, new Set());
    }
    /**
     * The `register` function adds an extension to a set, enables it if specified,
     * and returns a function to disable and remove the extension.
     *
     * @param extension - The "extension" parameter is an object that represents a
     * specific extension. It could be an instance of a class or a plain object that
     * contains the necessary properties and methods for the extension to work.
     * @param [enableUponAdd=true] - The enableUponAdd parameter is a boolean value
     * that determines whether the extension should be enabled immediately after it
     * is added to the set of extensions. If enableUponAdd is set to true, the
     * extension will be enabled upon addition. If it is set to false, the extension
     * will not be enabled upon addition
     * @returns a callback function.
     */
    register(extension, enableUponAdd = true) {
        __classPrivateFieldGet(this, _ExtensionManager_extensions, "f").add(extension);
        if (enableUponAdd)
            extension.enable();
        return () => {
            extension.disable();
            __classPrivateFieldGet(this, _ExtensionManager_extensions, "f").delete(extension);
        };
    }
}
exports.ExtensionManager = ExtensionManager;
_ExtensionManager_extensions = new WeakMap();
