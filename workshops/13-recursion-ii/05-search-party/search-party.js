// Write a function, searchParty, that accepts a name and a world object. The keys
// in the world objects describe a location. The values can be any combination of
// strings, arrays, or other objects.

// Search through the whole world for the given name. Return an array with
// directions to the person if you find them. Return null if you can't find them.

// ```javascript
// let world = {
//   'Fullstack': {
//     '11th floor': 'Marge',
//     '25th floor': 'Francis'
//   },
//   'Subway': ['Jackie', 'Grumio']
// };

// searchParty('Francis', world); // => ['Fullsteyack', '25th floor']
// searchParty('Franco', world); // => null
// ```

// YOUR CODE BELOW

function searchParty(nam, obj) {
  // Loop through location object keys
  for (let key in obj) {
    // Base Case # - string value
    if (typeof obj[key] !== "object") {
      if (obj[key] === nam) {
        return [key]
      }
      // This else clause doesn't work as it will return from the recursion before the loop completes
      // else {
      //   return null
      // }
    }

    // Base Case #2 - array of string values
    else if (Array.isArray(obj[key])) {
      if (obj[key].includes(nam)) {
        return [key]
      }
      // This else clause doesn't work as it will return from the recursion before the loop completes
      // else {
      //   return null
      // }
    }

    // Recursive Case
    else {
      let subPath = searchParty(nam, obj[key])
      //Only if a value was returned from the recursion...this means match was found at the end of it
      if (subPath) {
        return [key, ...subPath]
      }
    }
  }
  // Default - no match found in the recursive loop
  return null
}
