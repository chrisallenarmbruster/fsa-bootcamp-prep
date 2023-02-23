// Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice()
// array method. However, mySplice should accept the array to operate on as an
// argument, rather than being invoked as a method on that array.

// mySplice only needs to take one element to add to the array (the .splice method
// can actually take any number of values to add).

// Do not use .splice in your function.

// ```javascript
// let myArray = [1, 2, 3];

// mySplice(myArray, 1, 1, 'apples')) // => [2]

// console.log(myArray)    // [1,'apples', 3]
// ```

// YOUR CODE BELOW

const mySplice = (arr, idx, howManyRmv, item) => {
  let tempArr = []
  let rmvArr = []
  // Remove right side of array and store in temp
  for (let i = idx + howManyRmv - 1; i < arr.length; i++) {
    tempArr.push(arr.pop())
  }

  // Remove items to delete from array and save to return
  for (let i = idx; i < idx + howManyRmv; i++) {
    rmvArr.unshift(arr.pop())
  }

  // If an item was provided, insert it
  if (item) arr.push(item)

  // Re-append right hand side of array
  for (let i = tempArr.length - 1; i >= 0; i--) {
    arr.push(tempArr[i])
  }

  return rmvArr
}
