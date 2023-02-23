// YOUR CODE BELOW
// Write a function `onlyOne` that accepts three arguments of any type.

// `onlyOne` should return true only if exactly one of the three arguments are
// truthy. Otherwise, it should return false.

// Do not use the equality operators (`==` and `===`) in your solution.

// ```javascript
// onlyOne(false, false, true); // => true
// onlyOne(0, 1, 2) // => false
// ```

function onlyOne(arg1, arg2, arg3) {
  if (arg1 && !arg2 && !arg3) return true
  if (!arg1 && arg2 && !arg3) return true
  if (!arg1 && !arg2 && arg3) return true
  return false
}

//ALTERNATIVE APPROACH
// const onlyOne = function (arg1, arg2, arg3) {
//   let count = 0
//   for (let argument of arguments) {
//     if (!!argument) count++
//   }
//   return count === 1
// }

//Doesn't Work
// const onlyOne = (arg1, arg2, arg3) => {
//   let count = 0
//   for (let argument of arguments) {
//     if (!!argument) count++
//   }
//   return count === 1
// }

//This approach does work
// const onlyOne = (...arguments) => {
//   let count = 0
//   for (let argument of arguments) {
//     if (!!argument) count++
//   }
//   return count === 1
// }
