// YOUR CODE BELOW
// Define a function `taxCalculator` that accepts the price of an item and a state.
// `taxCalculator` should return the after-tax cost of the item, assuming NY's tax
// is 4% and NJ's sales tax is 6.625%.

// ```javascript
// taxCalculator(100, 'NY'); // => 104
// taxCalculator(100, 'NJ'); // => 106.625

const taxCalculator = (price, state) => {
  switch (state) {
    case "NY":
      return price * 1.04
    case "NJ":
      return price * 1.06625
    default:
      return price
  }
}
