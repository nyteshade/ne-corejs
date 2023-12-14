import { formatEntries, keysToDescriptorEntries } from "./reducers"

export function trimUndefined(value) {
  const isClass = String(value?.constructor ?? "").includes('class')
  const isArray = Array.isArray(value)
  const isObject = typeof value === 'object'

  if (isArray) {
    return (
      value
        .map(element => ( Array.isArray(element) ? trimUndefined(element) : element ))
        .filter(element => element !== undefined)
    )
  }

  if (!isObject) return value

  let descs = Reflect.ownKeys(value).reduce(...keysToDescriptorEntries(value))

  if (isClass) {
    const prototype = value.constructor.prototype ?? {}
    descs = descs.concat(Reflect.ownKeys(prototype)
      .reduce(...keysToDescriptorEntries(value))
    )
  }

  descs = descs.filter(([key, descriptor]) => {
    if (Reflect.has(descriptor, 'value') && descriptor.value === undefined)
      return false

    if (Reflect.has(descriptor, 'get') || Reflect.has(descriptor, 'set')) {
      if (descriptor.get === undefined && descriptor.set === undefined) {
        return false
      }
    }

    return true
  })

  const descriptors = descs.reduce(...formatEntries())
  const result = Object.create(Object.getPrototypeOf(value))
  return Object.defineProperties(result, descriptors)
}