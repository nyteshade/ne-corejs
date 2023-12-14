/**
* A simple Hasher implementation in JavaScript. This mimics the behavior of Swift's
* Hasher to some extent. It uses the djb2 algorithm for hashing.
*/
export class Hasher {
    /**
     * The function "toKeys" converts the keys of an object into an array of strings.
     * @param object - The `object` parameter is the object for which we want to get
     * the keys.
     * @returns an array of strings that represent the keys of the input object.
     */
    static toKeys(object: any): "" | string[];
    /**
     * The function "hasSymbols" checks if an array contains any symbols and
     * returns true if it does, false otherwise.
     *
     * @param array - The parameter "array" is expected to be an array.
     * @returns a boolean value. It returns true if the input array contains at
     * least one symbol, and false otherwise.
     */
    static hasSymbols(array: any): boolean;
    /**
     * The constructor function takes in multiple values, flattens them into a single
     * array, and then calls the combine method on each value.
     *
     * @param values - The "values" parameter is a rest parameter that allows you to
     * pass in multiple arguments to the constructor. It can accept any number of
     * arguments, and each argument can be of any type. The arguments are passed as
     * an array-like object called "arguments" within the constructor function.
     */
    constructor(...values: any[]);
    /**
     * Adds the given value into the hasher.
     *
     * @param {number|string} value - The value to hash. If the value is not a number
     * nor a string, then it will be converted into a string
     */
    add(...values: any[]): string;
    /**
     * The function returns the absolute value of a hash code as a base-36 string.
     *
     * @returns The method is returning the absolute value of the private property
     * `hash` converted to a base-36 string.
     */
    get hash(): string;
    /**
    * The function "reset" sets the value of the private property "hash" to 5381.
    */
    reset(): void;
    /**
     * The above function sets the value of the seed property.
     *
     * @param newValue - newValue is the new value that will be assigned to the seed
     * property.
     */
    set seed(arg: number);
    /**
     * The above function returns the value of the private variable "seed".
     *
     * @returns The seed value of the object.
     */
    get seed(): number;
    #private;
}
