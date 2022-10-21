const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

//   minions.forEach(name => console.log("I'm here!"));

  const capitalizedMinions = minions.map(name => {
      if(name != "kevin"){
          return name.charAt(0).toUpperCase() + name.slice(1)
      } else {
          return "kevin"
      }
  })



const actuallyCapitalizedMinions = capitalizedMinions.filter(name => {
    if (name !== name.charAt(0).toUpperCase() + name.slice(1)){
    } else {return name}
 })
 console.log(actuallyCapitalizedMinions)

 const testingMinions = actuallyCapitalizedMinions.every((name) => {
    return name === name.charAt(0).toUpperCase() + name.slice(1)
 })

//  console.log(testingMinions)
// console.log(capitalizedMinions)

const isCapitalized = (minion) => {
  return minion.charAt(0).toUpperCase() + minion.slice(1) === minion;
}

// console.log(capitalizedMinions.every(isCapitalized));
 console.log(capitalizedMinions.find(isCapitalized));
