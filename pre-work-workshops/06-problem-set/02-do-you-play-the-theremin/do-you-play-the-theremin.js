// YOUR CODE BELOW
// Define a function `doYouPlayTheTheremin` that accepts a string as an argument.
// `doYouPlayTheTheremin` should return true if the inputted string starts with the
// letters `s` or `S`. Otherwise, `doYouPlayTheTheremin` should return false.

// ```javascript
// doYouPlayTheTheremin('Griffin'); // => false
// doYouPlayTheTheremin('Scott'); // => true
// ```

const doYouPlayTheTheremin = (str) => {
  return str[0].toUpperCase() === "S" ? true : false
}
