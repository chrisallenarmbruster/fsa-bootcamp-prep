// Write a function, arraySum, that accepts an array of numbers and returns the sum
// of all the numbers in the array (no matter how nested!).

// ```javascript
// arraySum([1, [2, 3, [4]]]) // => 10
// ```

// YOUR CODE BELOW

const arraySum = (arr) => {
  let sum = 0

  for (el of arr) {
    if (Array.isArray(el)) {
      sum += arraySum(el)
    } else {
      sum += el
    }
  }

  return sum
}
