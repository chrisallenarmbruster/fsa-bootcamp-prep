// YOUR CODE BELOW
// Define a function, `myOr`, that accepts three arguments of any type.

// `myOr` should return the same result as the buit-in `||` operator:

// ```javascript
// myOr(true, true, false) === (true || true || false); // => true
// ```

// Then, define a function, `myAnd`, that accepts three arguments of any type.

// `myAnd` should return the same result as the buit-in `&&` operator:

// ```javascript
// myAnd(1, 'apples', true) === (1 && 'apples' && true); // => true
// ```

const myOr = (arg1, arg2, arg3) => {
  return arg1 || arg2 || arg3
}

const myAnd = (arg1, arg2, arg3) => {
  return arg1 && arg2 && arg3
}
