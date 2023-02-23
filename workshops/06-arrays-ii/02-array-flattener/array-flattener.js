// YOUR CODE BELOW
// Define a function, `arrayFlattener`, that accepts a two-dimensional array as an
// argument.

// `arrayFlattener` should return a new, one-dimensional array.

// ```javascript
// arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]
// ```

const arrayFlattener = (tArr) => {
  oArr = []
  for (el of tArr) {
    if (!Array.isArray(el)) {
      oArr.push(el)
    } else {
      for (tEl of el) {
        oArr.push(tEl)
      }
    }
  }
  return oArr
}
