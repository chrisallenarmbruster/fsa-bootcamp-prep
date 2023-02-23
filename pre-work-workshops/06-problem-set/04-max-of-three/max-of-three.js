// YOUR CODE BELOW
// Write a function `maxOfThree` that accepts three number arguments. `maxOfThree`
// should return largest number of the three.

// ```javascript
// maxOfThree(5, 4, 10); // => 10

// maxOfThree(7, 7, 4); // => 7
// ```

const maxOfThree = (x, y, z) => {
  let max = x
  if (y > max) {
    max = y
  }
  if (z > max) {
    max = z
  }
  return max
}
