// YOUR CODE BELOW
// Define a function, `mostVowels`, that accepts one argument, a string of words.

// `mostVowels` should return the word that has the most vowels.

// ```javascript
// mostVowels('I am a keeper with some real rhythms'); // => keeper
// ```

// If none of the words have any vowels, return an empty string.

// ```javascript
// mostVowels('try my gym'); // => ''
// ```

const mostVowels = (str) => {
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  arr = str.split(" ")
  maxVowelCount = 0
  maxWord = ""
  for (el of arr) {
    let lCount = 0
    for (i = 0; i < el.length; i++) {
      if (["a", "e", "i", "o", "u"].includes(el[i])) lCount++
    }
    if (lCount > maxVowelCount) {
      maxVowelCount = lCount
      maxWord = el
    }
  }
  return maxWord
}
