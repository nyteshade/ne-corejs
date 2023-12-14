"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Extension_instances, _Extension_coalesce, _Extension_proxy, _Extension_hasher, _Extension_coalesced, _Extension_enabled;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extension = void 0;
const ne_reflection_1 = require("@nyteshade/ne-reflection");
const hasher_js_1 = require("./hasher.js");
/* The `Extension` class is a JavaScript class that allows you to extend or modify
properties of an object and track changes to its state. */
class Extension {
    /**
     * The constructor function assigns properties to an object and calls the clean()
     * method.
     *
     * @param parent - The `parent` parameter refers to the object that contains the
     * property we want to extend or modify.
     * @param key - The "key" parameter represents the key of the property in the
     * parent object that the constructor is being called on.
     * @param extensions - The `extensions` parameter is a rest parameter that allows
     * you to pass in multiple arguments as an array. In this case, it is used to
     * pass in additional properties or methods that you want to add to the object
     * being constructed.
     */
    constructor(parent, key, ...extensions) {
        _Extension_instances.add(this);
        _Extension_proxy.set(this, null);
        _Extension_hasher.set(this, new hasher_js_1.Hasher());
        _Extension_coalesced.set(this, {});
        _Extension_enabled.set(this, false);
        Object.assign(this, { parent, key, value: parent[key], extensions });
        this.clean();
    }
    /**
     * The clean() function assigns values to the hasher and coalesced properties.
     */
    clean() {
        const [hasher, coalesced] = __classPrivateFieldGet(this, _Extension_instances, "m", _Extension_coalesce).call(this);
        __classPrivateFieldSet(this, _Extension_hasher, hasher, "f");
        __classPrivateFieldSet(this, _Extension_coalesced, coalesced, "f");
    }
    /**
     * The function checks if the current state of an object is different from its
     * previous state.
     *
     * @returns a boolean value indicating whether the current state of the object is
     * dirty or not.
     */
    get isDirty() {
        const { parent, key, value } = this;
        const hasher = new hasher_js_1.Hasher([parent, key, value, __classPrivateFieldGet(this, _Extension_coalesced, "f")]);
        return __classPrivateFieldGet(this, _Extension_hasher, "f").hash !== hasher.hash;
    }
    /**
     * The function returns a proxy object if the data is dirty or if the proxy
     * object doesn't exist.
     *
     * @returns The `get extension()` function returns the `this.#proxy` object.
     */
    get extension() {
        if (this.isDirty || !__classPrivateFieldGet(this, _Extension_proxy, "f")) {
            this.clean();
            __classPrivateFieldSet(this, _Extension_proxy, new ne_reflection_1.GetProxy(this.value, __classPrivateFieldGet(this, _Extension_coalesced, "f")), "f");
        }
        return __classPrivateFieldGet(this, _Extension_proxy, "f");
    }
    /**
     * The function returns the original value.
     *
     * @returns The value of the "value" property of the current object.
     */
    get original() {
        return this.value;
    }
    /**
     * The function returns the value of the private property "enabled".
     *
     * @returns The value of the private property `enabled`.
     */
    get enabled() {
        return __classPrivateFieldGet(this, _Extension_enabled, "f");
    }
    /**
     * The "disable" function checks if the object is enabled and if so, it toggles
     * the state to disabled.
     */
    disable() {
        if (__classPrivateFieldGet(this, _Extension_enabled, "f"))
            this.toggle();
    }
    /**
     * The enable function checks if the object is not already enabled and then
     * toggles it.
     */
    enable() {
        if (!__classPrivateFieldGet(this, _Extension_enabled, "f"))
            this.toggle();
    }
    /**
     * The function toggles between two values and updates the parent object's
     * property accordingly.
     */
    toggle() {
        this.parent[this.key] = __classPrivateFieldGet(this, _Extension_enabled, "f") ? this.original : this.extension;
        __classPrivateFieldSet(this, _Extension_enabled, !__classPrivateFieldGet(this, _Extension_enabled, "f"), "f");
    }
    /**
     * The above function returns the name of the constructor as the value of the
     * Symbol.toStringTag property.
     *
     * @returns The name of the constructor function.
     */
    get [(_Extension_proxy = new WeakMap(), _Extension_hasher = new WeakMap(), _Extension_coalesced = new WeakMap(), _Extension_enabled = new WeakMap(), _Extension_instances = new WeakSet(), _Extension_coalesce = function _Extension_coalesce() {
        const { parent, key, value } = this;
        const hasher = new hasher_js_1.Hasher();
        hasher.add([parent, key, value]);
        const coalesced = this.extensions.reduce((acc, object) => {
            hasher.add(object);
            return { ...acc, ...object };
        }, {});
        return [hasher, coalesced];
    }, Symbol.toStringTag)]() { return this.constructor.name; }
}
exports.Extension = Extension;
