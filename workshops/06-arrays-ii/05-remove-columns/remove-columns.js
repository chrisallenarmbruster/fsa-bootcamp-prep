// YOUR CODE BELOW
// Write a function `removeColumns` that accepts two arguments
// 1. originalGrid (two-dimensional array)
// 2. numColums (number)

// `removeColumns` should return a new grid with the correct number of columns removed.

// ```javascript
// removeColumns([[1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3]], 2);
/* => [[1],
       [1],
       [1],
       [1]]
*/
//```

const removeColumns = (oGrid, cols) => {
  let nGrid = []
  for (el of oGrid) {
    nGrid.push(el.slice(0, -cols))
  }
  return nGrid
}
