// YOUR CODE BELOW
// Define a function, `defaultGreet`, that takes a first and a last name.
// `defaultGreet` should return a string greeting for the given names. If the user
// does not define a last name, assume the last name is 'Doe'.

// ```javascript
// defaultGreet('Chaka', 'Khan'); // => 'Hi Chaka Khan!'
// defaultGreet('John'); // => 'Hi John Doe!'
// ```

function defaultGreet(first, last = "Doe") {
  return `Hi ${first} ${last}!`
}
