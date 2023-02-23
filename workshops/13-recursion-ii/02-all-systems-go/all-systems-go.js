// You are working for NASA because you are super cool! It's up to you to write the
// code that will determine if "all systems are go for launch". Your function will
// receive a deeply nested object. Keys represent the name of a system on the
// spacecraft; values are boolean "true" if the system is "go" for launch and
// "false" otherwise. Your function should return "true" only if every system is
// "go" for launch!

// YOUR CODE BELOW

const allSystemsGo = (obj) => {
  let go = true

  for (key in obj) {
    if (typeof obj[key] === "object") {
      go = go && allSystemsGo(obj[key])
    } else {
      go = go && obj[key]
    }
  }
  return go
}
