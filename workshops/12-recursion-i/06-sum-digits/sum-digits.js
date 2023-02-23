// Write a function, sumDigits, that sums all the digits of a given integer
// (assume positive). Use recursion.

// ```javascript
// sumDigits(1234) // => 10
// ```

// YOUR CODE BELOW

const sumDigits = (num) => {
  if (String(num).length === 1) {
    return num
  } else {
    strNum = String(num)
    return Number(strNum[0]) + sumDigits(Number(strNum.slice(1)))
  }
}
