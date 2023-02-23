// Define a function, `dogBreeder`, that accepts up to two optional arguments:
//   1. name (string)
//   2. age (number)

// `dogBreeder` should return an object that represents a new dog! If the user
// doesn't define a name, assume the dog's name is Steve. If the user doesn't
// define the dog's age, assume the dog's age is 0.

// ```javascript
// dogBreeder('Sam', 12)    // => {name: 'Sam', age: 12}

// dogBreeder(15)    // => {name:'Steve', age: 15}
// ```

// YOUR CODE BELOW

const dogBreeder = (...args) => {
  if (args.length === 2) return { name: args[0], age: args[1] }
  if (typeof args[0] === "string") {
    return { name: args[0], age: 0 }
  }
  if (typeof args[0] === "number") {
    return { name: "Steve", age: args[0] }
  }
  return { name: "Steve", age: 0 }
}
