export class Extension {
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
    constructor(parent: any, key: any, ...extensions: any[]);
    /**
     * The clean() function assigns values to the hasher and coalesced properties.
     */
    clean(): void;
    /**
     * The function checks if the current state of an object is different from its
     * previous state.
     *
     * @returns a boolean value indicating whether the current state of the object is
     * dirty or not.
     */
    get isDirty(): boolean;
    /**
     * The function returns a proxy object if the data is dirty or if the proxy
     * object doesn't exist.
     *
     * @returns The `get extension()` function returns the `this.#proxy` object.
     */
    get extension(): null;
    /**
     * The function returns the original value.
     *
     * @returns The value of the "value" property of the current object.
     */
    get original(): any;
    /**
     * The function returns the value of the private property "enabled".
     *
     * @returns The value of the private property `enabled`.
     */
    get enabled(): boolean;
    /**
     * The "disable" function checks if the object is enabled and if so, it toggles
     * the state to disabled.
     */
    disable(): void;
    /**
     * The enable function checks if the object is not already enabled and then
     * toggles it.
     */
    enable(): void;
    /**
     * The function toggles between two values and updates the parent object's
     * property accordingly.
     */
    toggle(): void;
    /**
     * The above function returns the name of the constructor as the value of the
     * Symbol.toStringTag property.
     *
     * @returns The name of the constructor function.
     */
    get [Symbol.toStringTag](): string;
    #private;
}
