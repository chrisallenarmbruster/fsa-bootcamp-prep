// A palindrome is a word that is spelled the same forward and backward. For
// example, "LEVEL", "RACECAR", and "KAYAK" are all palindromes, while "MOTOR",
// "RUDDER", and "DOGGED" are not palidromes.

// Write a recursive function, isPalindrome, to check if a string is a palindrome
// or not.

// ```javascript
// isPalindrome('Kayak'); // => true
// isPalindrome('NEVERODDOREVEN'); // => true
// isPalindrome('Tacocat'); // => true
// isPalindrome('SELFLESS'); // => false
// ```

// YOUR CODE BELOW

const isPalindrome = (word) => {
  if (word.length <= 1) {
    return true
  } else {
    return (
      word.slice(0, 1).toLowerCase() === word.slice(-1).toLowerCase() &&
      isPalindrome(word.slice(1, -1))
    )
  }
}
