// Write a function, deeperCopy, that, unlike .slice, will deeply copy a two-
// dimensional array.

// ```javascript
// let myArray = [1, [2, 3]];

// let copy = deeperCopy(myArray);
// copy[1].push(4);

// console.log(myArray); // [1, [2, 3]]

// let copy2 = myArray.slice();
// copy2[1].push(4);

// console.log(myArray); // [1, [2, 3, 4]]
// ```

// YOUR CODE BELOW

const deeperCopy = (arr) => {
  let copy = []
  for (el of arr) {
    if (Array.isArray(el)) {
      copy.push(el.slice())
    } else {
      copy.push(el)
    }
  }
  return copy
}
