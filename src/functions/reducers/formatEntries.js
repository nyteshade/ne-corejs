/**
 * The function `formatEntries` takes an array of key-value pairs and returns an
 * object with the keys and values from the input array.
 *
 * @returns an array containing two elements. The first element is an arrow
 * function that takes an accumulator and an array containing a key-value pair.
 * Inside the arrow function, the key-value pair is added to the accumulator object
 * and the updated accumulator is returned. The second element is an empty object,
 * which serves as the initial value for the accumulator.
 */
export function formatEntries() {
  return [
    (accumulator, [key, value]) => {
      accumulator[key] = value
      return accumulator
    }, {}
  ]
}
