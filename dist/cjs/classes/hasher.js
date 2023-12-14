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
var _Hasher_hash, _Hasher_seed;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hasher = void 0;
/**
* A simple Hasher implementation in JavaScript. This mimics the behavior of Swift's
* Hasher to some extent. It uses the djb2 algorithm for hashing.
*/
class Hasher {
    /**
     * The constructor function takes in multiple values, flattens them into a single
     * array, and then calls the combine method on each value.
     *
     * @param values - The "values" parameter is a rest parameter that allows you to
     * pass in multiple arguments to the constructor. It can accept any number of
     * arguments, and each argument can be of any type. The arguments are passed as
     * an array-like object called "arguments" within the constructor function.
     */
    constructor(...values) {
        _Hasher_hash.set(this, 0);
        _Hasher_seed.set(this, 5381);
        this.reset();
        values.forEach((value) => this.add(value));
    }
    /**
     * Adds the given value into the hasher.
     *
     * @param {number|string} value - The value to hash. If the value is not a number
     * nor a string, then it will be converted into a string
     */
    add(...values) {
        values.forEach((value) => {
            if (!value)
                return this.add(String(value));
            if (!["string", "number", "object"].includes(typeof value))
                return this.add(String(value));
            if (Hasher.hasSymbols(value))
                return this.add(value.map(entry => String(entry)));
            if (typeof value === "string") {
                [...value].forEach((c) => (__classPrivateFieldSet(this, _Hasher_hash, (__classPrivateFieldGet(this, _Hasher_hash, "f") << 5) + __classPrivateFieldGet(this, _Hasher_hash, "f") + c.charCodeAt(0), "f")));
            }
            else if (typeof value === "number") {
                __classPrivateFieldSet(this, _Hasher_hash, (__classPrivateFieldGet(this, _Hasher_hash, "f") << 5) + __classPrivateFieldGet(this, _Hasher_hash, "f") + value, "f");
            }
            else if (typeof value === "object") {
                return this.add(...Hasher.toKeys(value));
            }
        });
        return this.hash;
    }
    /**
     * The function returns the absolute value of a hash code as a base-36 string.
     *
     * @returns The method is returning the absolute value of the private property
     * `hash` converted to a base-36 string.
     */
    get hash() {
        return Math.abs(__classPrivateFieldGet(this, _Hasher_hash, "f")).toString(36);
    }
    /**
    * The function "reset" sets the value of the private property "hash" to 5381.
    */
    reset() {
        __classPrivateFieldSet(this, _Hasher_hash, __classPrivateFieldGet(this, _Hasher_seed, "f"), "f");
    }
    /**
     * The function "toKeys" converts the keys of an object into an array of strings.
     * @param object - The `object` parameter is the object for which we want to get
     * the keys.
     * @returns an array of strings that represent the keys of the input object.
     */
    static toKeys(object) {
        if (!object || typeof object !== "object")
            return "";
        return Reflect.ownKeys(object).map((s) => String(s));
    }
    /**
     * The function "hasSymbols" checks if an array contains any symbols and
     * returns true if it does, false otherwise.
     *
     * @param array - The parameter "array" is expected to be an array.
     * @returns a boolean value. It returns true if the input array contains at
     * least one symbol, and false otherwise.
     */
    static hasSymbols(array) {
        if (!Array.isArray(array))
            return false;
        return (array
            .map(value => (typeof value))
            .some(value => value === 'symbol'));
    }
    /**
     * The above function returns the value of the private variable "seed".
     *
     * @returns The seed value of the object.
     */
    get seed() {
        return __classPrivateFieldGet(this, _Hasher_seed, "f");
    }
    /**
     * The above function sets the value of the seed property.
     *
     * @param newValue - newValue is the new value that will be assigned to the seed
     * property.
     */
    set seed(newValue) {
        __classPrivateFieldSet(this, _Hasher_seed, newValue, "f");
    }
}
exports.Hasher = Hasher;
_Hasher_hash = new WeakMap(), _Hasher_seed = new WeakMap();
