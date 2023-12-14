/**
 * The Singleton class is a design pattern that ensures only one instance of a
 * class is created and provides a way to access that instance.
 */
export class Singleton {
    /**
     * Static map of all instances of the Singleton. Any class that extends Singleton
     * and has its `shared` property retrieved will be stored here with the class
     * as the key and the single shared instance as the value.
     */
    static __instanceMap: Map<any, any>;
    /**
     * The function returns a shared instance of a class, creating a new instance if
     * one does not already exist.
     *
     * @returns The shared instance of the Singleton class.
     */
    static get shared(): any;
    /**
     * The above function returns the constructor function of the current object.
     * This is crucial to allow other classes that are to extend from Singleton to
     * have their
     *
     * @returns The `this` keyword is being returned.
     */
    static get [Symbol.species](): typeof Singleton;
}
