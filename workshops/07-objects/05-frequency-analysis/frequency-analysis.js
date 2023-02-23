// YOUR CODE BELOW
// Define a function `frequencyAnalysis` that accepts a string of lower-case
// letters.

// `frequencyAnalysis` should return an object containing the count for each letter
// in the string.

// ```javascript
// frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
// ```

const frequencyAnalysis = (str) => {
  sArr = str.split("")
  console.log(sArr)
  result = {}
  for (el of sArr) {
    if (el in result) {
      result[el]++
    } else {
      result[el] = 1
    }
  }
  return result
}
