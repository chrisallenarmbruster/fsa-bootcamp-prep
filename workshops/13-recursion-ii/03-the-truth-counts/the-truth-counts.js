// Write a function, theTruthCounts, that accepts a multi-dimensional array of
// values. theTruthCounts should return the count of all truthy values inside the
// multidimesional array.

// ```javascript
// theTruthCounts([0, [true, ['yes']]]); // => 2
// ```

// YOUR CODE BELOW

const theTruthCounts = (arr) => {
  count = 0

  for (el of arr) {
    if (Array.isArray(el)) {
      count += theTruthCounts(el)
    } else {
      count += el ? 1 : 0
    }
  }

  return count
}
