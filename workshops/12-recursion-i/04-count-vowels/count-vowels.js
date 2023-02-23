// Write a function, countVowels, that accepts a string and returns the number of
// vowels in that string. Use recursion.

// ```javascript
// countVowels('Four score and seven years'); // => 9
// ```

// YOUR CODE BELOW

// Working alternative using added argument
// const countVowels = (str, count = 0) => {
//   if (str.length === 1) {
//     return ["a", "e", "i", "o", "u"].includes(str[0].toLowerCase())
//       ? count + 1
//       : count
//   } else {
//     count += ["a", "e", "i", "o", "u"].includes(str[0].toLowerCase()) ? 1 : 0
//     return countVowels(str.slice(1), count)
//   }
// }

const countVowels = (str) => {
  if (str.length === 1) {
    return ["a", "e", "i", "o", "u"].includes(str[0].toLowerCase()) ? 1 : 0
  } else {
    return (
      (["a", "e", "i", "o", "u"].includes(str[0].toLowerCase()) ? 1 : 0) +
      countVowels(str.slice(1))
    )
  }
}
