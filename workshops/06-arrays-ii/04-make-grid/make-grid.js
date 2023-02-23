// YOUR CODE BELOW
// Write a function `makeGrid` that accepts two arguments:
// 1. numColumns (number)
// 2. numRows (number)

// `makeGrid` should return a two-dimensional array that represents a grid of the
// given dimensions.

// ```javascript
// makeGrid(3,4);
//
/* => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
*/
// ```

const makeGrid = (nCols, nRows) => {
  let rArr = []
  for (let rows = 0; rows < nRows; rows++) {
    let tempArray = []
    for (let cols = 1; cols <= nCols; cols++) {
      tempArray.push(cols)
    }
    rArr.push(tempArray)
  }
  return rArr
}
