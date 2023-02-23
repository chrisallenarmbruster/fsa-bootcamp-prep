// YOUR CODE BELOW
// Write a function `zeroDarkThirty` that accepts a number as an arguemnt.

// `zeroDarkThirty` should return a number with all of the zeroes removed:

// ```javascript
// zeroDarkThirty(102302) // => 1232
// zeroDarkThirty(606.203) // => 66.23
// ```

// If the number 0 is passed in as the argument, return [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

// ```javascript
// zeroDarkThirty(0) // => NaN
// ```

const zeroDarkThirty = (num1) => {
  if (num1 === 0) return NaN
  str = String(num1)
  str = str.replace(/[0]/g, "")
  return Number(str)
}
