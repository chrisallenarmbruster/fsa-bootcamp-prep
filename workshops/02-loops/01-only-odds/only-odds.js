// YOUR CODE BELOW
// Define a function, `onlyOdds`, that accepts a number as an argument. `onlyOdds`
// should should return the sum of all the odd numbers between the given number
// and 1.

// If `onlyOdds` receives an argument less than 1, it should return 0.

// ```javascript
// onlyOdds(6); // => 9 (5 + 3 + 1)
// ```

const onlyOdds = (num1) => {
  let osum = 0
  for (let i = num1; i > 0; i--) {
    osum += i % 2 === 0 ? 0 : i
  }
  return osum
}
