// ### Backward String

// Write a function, backwardString, that receives a string. It should log every
// letter in the string, from the last character to the first. Use recursion.

// NOTE: As with the last problem, the tests will check how many times console.log
// is called.

// ```javascript
// backwardString('happy');
// y
// p
// p
// a
// h
// ```
// YOUR CODE BELOW

const backwardString = (str) => {
  if (str.length === 1) {
    console.log(str[0])
  } else {
    console.log(str[str.length - 1])
    backwardString(str.slice(0, -1))
  }
}
