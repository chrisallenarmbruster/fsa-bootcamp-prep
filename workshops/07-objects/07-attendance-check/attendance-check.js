// Define a function, `attendanceCheck`, that accepts a day of the week as a string.

// Using the globally-defined classRoom array, `attendanceCheck` should return a
// new array with only the names of the students present on the inputted day of
// the week.

// ```javascript

// classCheck('Monday'); // => ['Marnie', 'Shoshanna']

// classCheck('Wednesday'); // => ['Marnie', 'Lena']
// ```

let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
]

// YOUR CODE BELOW
const attendanceCheck = (day) => {
  let result = []
  switch (day) {
    case "Monday":
      idx = 0
      break
    case "Tuesday":
      idx = 1
      break
    case "Wednesday":
      idx = 2
      break
    case "Thursday":
      idx = 3
      break
    case "Friday":
      idx = 4
      break
  }
  for (el of classRoom) {
    if (el[Object.keys(el)[0]][idx][day]) result.push(Object.keys(el)[0])
  }
  return result
}
