// YOUR CODE BELOW
// Define a function `greeting` that accepts an optional string argument called
// name. `greeting` should return a personalized string if the name is present.

// ```javascript
// greeting('Sadie'); // => Hello Sadie!
// greeting(); // => Hello!
// ```

const greeting = (name = "") => {
  return name.length > 0 ? `Hello ${name}!` : "Hello!"
}
