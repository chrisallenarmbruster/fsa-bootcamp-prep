// YOUR CODE BELOW
// According to the song, Katy Perry "maxed our credit cards".

// Define a function, `lastFridayNight`, takes an array of transactions.

// `lastFridayNight` should return the total amount she spent last Friday night.

// ```javascript
// let transactions = [
//   {
//     name: "Tons of glitter",
//     amount: 70
//   },
//   {
//     name: "Porcelain Pink Flamingos",
//     amount: 92
//   },
//   {
//     name: "Chandelier replacement",
//     amount: 10000,
//   },
//   {
//     name: "Dinner at TGIF x6",
//     amount: 350
//   }
// ];

// sumTransactions(transactions) // => 10512
// ```
const lastFridayNight = (arr) => {
  let tot = 0
  if (!Array.isArray(arr)) arr = [arr]
  for (el of arr) {
    tot += Number(el.amount)
  }
  return tot
}
