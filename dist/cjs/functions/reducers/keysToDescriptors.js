"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keysToDescriptors = void 0;
/**
 * The function `keysToDescriptors` takes an object and returns an array of
 * key-value pairs, where each key is a property of the object and the value is the
 * descriptor of that property.
 *
 * @example
 * ```
 * const person = { first: 'Brie', last: 'Harrison' }
 * const descs = Reflect.ownKeys(person).reduce(...keysToDescriptors(person))
 * // returns { first: { ... }, last: {...} }
 * ```
 *
 * @param object - The `object` parameter is the object for which you want to get
 * the property descriptors.
 * @returns an array with two elements. The first element is an arrow function that
 * takes two parameters: `accumulator` and `key`. Inside the arrow function, it
 * sets a property on the `accumulator` object using the `key` as the property name
 * and the result of `Object.getOwnPropertyDescriptor(object, key)` as the property
 * descriptor.
 */
function keysToDescriptors(object) {
    return [
        (accumulator, key) => {
            accumulator[key] = Object.getOwnPropertyDescriptor(object, key);
        }, {}
    ];
}
exports.keysToDescriptors = keysToDescriptors;
