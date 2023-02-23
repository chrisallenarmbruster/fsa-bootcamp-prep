// Write a function, reverseArray, that accepts an array and returns a reversed
// copy of that array. Use recursion.

// ```javascript
// let arr = [1,2,3,4]
// let reversedArr = reverseArray(arr);

// console.log(reversedArr)    // [4,3,2,1]
// console.log(arr)    // [1,2,3,4]
// ```

// YOUR CODE BELOW

const reverseArray = (arr) => {
  if (arr.length === 1) {
    return arr[0]
  } else {
    return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, -1)))
  }
}
