// YOUR CODE BELOW
// Write a function `myMnemonic` that accepts up to four strings. `myMnemonic`
// should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// ```javascript
// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE
// ```

function myMnemonic() {
  let mnemonic = ""
  for (str of arguments) {
    if (str.length > 0) {
      mnemonic += str[0].toUpperCase()
    }
  }
  console.log(typeof mnemonic)
  return mnemonic
}
