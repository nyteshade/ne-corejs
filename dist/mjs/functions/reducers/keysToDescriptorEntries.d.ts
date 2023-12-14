/**
 * The function `keysToDescriptorEntries` takes an object and returns valid parameters
 * to the `Array.reduce()` function. The resultant output of the `reduce` will be an
 * array of arrays with the `[[key, descriptor], [key,descriptor], ...]`. This can
 * then be operated on in the same way as one might the output of `Object.entries()`
 *
 * @example
 * ```
 * const person = { first: 'Brie', last: 'Harrison' }
 * const descs = Reflect.ownKeys(person).reduce(...keysToDescriptorEntries(person))
 * // returns [ ['first', {...}], ['last', {...}] ]
 * ```
 *
 * @param object - The `object` parameter is the object for which you want to get
 * the property descriptors.
 * @returns an array with two elements. The first element is an arrow function that
 * takes two parameters: `accumulator` and `key`. Inside the arrow function, it
 * formats an array to match the contents in a manner matching `Object.entries()`
 */
export function keysToDescriptorEntries(object: any): (((accumulator: any, key: any) => any) | never[])[];
