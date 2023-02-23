// YOUR CODE BELOW
// Define a function, `crazyCaps`, that accepts a string as an argument.
// `crazyCaps` should return a string in which every other character is
// capitalized. The first letter should be lower-cased.

// ```javascript
// crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!
// ```

const crazyCaps = (str) => {
  result = ""
  for (let i = 0; i < str.length; i++) {
    result += i % 2 === 0 ? str[i].toLowerCase() : str[i].toUpperCase()
  }

  return result
}
