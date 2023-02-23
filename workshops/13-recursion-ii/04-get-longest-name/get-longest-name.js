// Write a function, getLongestName, that takes an object. The object represents
// a family tree. Return the longest name in the family.

// ```javascript
// let family = {
//   'Beverly Marquez': {
//     'Nina Rhone': {
//       'William Rhodes': null,
//       'Paul Nell': null,
//       'Sir Paddington the Fourth, of the county Wilstonshire': null
//     }
//   }
// };

// getLongestName(family); // => 'Sir Paddington the Fourth, of the county Wilstonshire'
// ```

// YOUR CODE BELOW

const getLongestName = (obj) => {
  lName = ""

  for (key in obj) {
    if (obj[key]) {
      nestedlName = getLongestName(obj[key])
      lName = lName.length > nestedlName.length ? lName : nestedlName
    } else {
      lName = lName.length > key.length ? lName : key
    }
  }

  return lName
}
