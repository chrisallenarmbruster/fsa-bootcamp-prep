// Remember the dog breeder question from an earlier workshop? It assumed that the
// default name for a dog should be 'Steve', and the default age should be 0.

// Define a function, getDogBreeder, that takes a default name and age, and returns
// a dogBreeder function. The returned dogBreeder function should use the default
// values defined when dogBreeder was called.

// You can copy over the solution code from dogBreeder if you'd like.

// ```javascript
// let puppyFarm = getDogBreeder('Snoopy', 0);
// let rescueShelter = getDogBreeder('Odie', 3);

// puppyFarm('Olaf', 3); // => {name: 'Olaf', age: 3};
// puppyFarm(2); // => {name: 'Snoopy', age: 2}

// rescueShelter(); // => {'Odie', 3}
// ```

// YOUR CODE BELOW

const getDogBreeder = (defName, defAge) => {
  const dogBreeder = (...args) => {
    if (args.length === 2) return { name: args[0], age: args[1] }
    if (typeof args[0] === "string") {
      return { name: args[0], age: defAge }
    }
    if (typeof args[0] === "number") {
      return { name: defName, age: args[0] }
    }
    return { name: defName, age: defAge }
  }
  return dogBreeder
}
