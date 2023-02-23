// YOUR CODE BELOW
// Define a function `lastCharacter` that accepts two strings as arguments.
// `lastCharacter` should return true if both strings end with the same character.
// Otherwise, `lastCharacter` should return false.

// ```javascript
// lastCharacter('apples', 'pumpkins'); // => true

// lastCharacter('marker', 'pen'); // => false
// ```

const lastCharacter = (str1, str2) => {
  return str1.slice(-1) === str2.slice(-1) ? true : false
}
