import { GetProxy } from '@nyteshade/ne-reflection'
import { Hasher } from './hasher.js'

/* The `Extension` class is a JavaScript class that allows you to extend or modify
properties of an object and track changes to its state. */
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
  constructor(parent, key, ...extensions) {
    Object.assign(this, { parent, key, value: parent[key], extensions })
    this.clean()
  }

  /**
   * The clean() function assigns values to the hasher and coalesced properties.
   */
  clean() {
    const [hasher, coalesced] = this.#coalesce()
    this.#hasher = hasher
    this.#coalesced = coalesced
  }

  /**
   * The function checks if the current state of an object is different from its
   * previous state.
   *
   * @returns a boolean value indicating whether the current state of the object is
   * dirty or not.
   */
  get isDirty() {
    const { parent, key, value } = this
    const hasher = new Hasher([parent, key, value, this.#coalesced])
    return this.#hasher.hash !== hasher.hash
  }

  /**
   * The function returns a proxy object if the data is dirty or if the proxy
   * object doesn't exist.
   *
   * @returns The `get extension()` function returns the `this.#proxy` object.
   */
  get extension() {
    if (this.isDirty || !this.#proxy) {
      this.clean()
      this.#proxy = new GetProxy(this.value, this.#coalesced)
    }

    return this.#proxy
  }

  /**
   * The function returns the original value.
   *
   * @returns The value of the "value" property of the current object.
   */
  get original() {
    return this.value
  }

  /**
   * The function returns the value of the private property "enabled".
   *
   * @returns The value of the private property `enabled`.
   */
  get enabled() {
    return this.#enabled
  }

  /**
   * The "disable" function checks if the object is enabled and if so, it toggles
   * the state to disabled.
   */
  disable() {
    if (this.#enabled)
      this.toggle()
  }

  /**
   * The enable function checks if the object is not already enabled and then
   * toggles it.
   */
  enable() {
    if (!this.#enabled)
      this.toggle()
  }

  /**
   * The function toggles between two values and updates the parent object's
   * property accordingly.
   */
  toggle() {
    this.parent[this.key] = this.#enabled ? this.original : this.extension
    this.#enabled = !this.#enabled
  }

  /**
   * The `coalesce()` function takes an object and a list of extensions, and
   * returns a new object that combines the properties of the original object and
   * the extensions.
   *
   * @returns The `coalesce()` function returns an array containing two elements: a
   * `hasher` object and a `coalesced` object.
   */
  #coalesce() {
    const { parent, key, value } = this
    const hasher = new Hasher()

    hasher.add([parent, key, value])

    const coalesced = this.extensions.reduce((acc, object) => {
      hasher.add(object)
      return { ...acc, ...object }
    }, {})

    return [hasher, coalesced]
  }

  /**
   * The above function returns the name of the constructor as the value of the
   * Symbol.toStringTag property.
   *
   * @returns The name of the constructor function.
   */
  get [Symbol.toStringTag]() { return this.constructor.name }

  #proxy = null
  #hasher = new Hasher()
  #coalesced = {}
  #enabled = false
}