// YOUR CODE BELOW
// Define a function, `compareObjects`, that accepts two objects as arguments.

// `compareObjects` should return true if both objects have exactly the same
// key/value pairs. Otherwise, `compareObjects` should return false. Assume the
// objects are not nested.

// ```javascript
// compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true

// compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
// ```

const compareObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  for (key in obj1) {
    if (!(key in obj2)) return false
    if (obj1[key] !== obj2[key]) return false
  }
  return true
}
