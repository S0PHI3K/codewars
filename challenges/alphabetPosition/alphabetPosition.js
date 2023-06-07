// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  //ATTEMPT 1

//   const finalArray = []
  
//   const upperCase = text.toUpperCase()
//   console.log(upperCase)
  
//   const myArray = upperCase.split("")
//   console.log(myArray)
  
//   const array = myArray.map(letter => letter.charCodeAt());
//   console.log(array)
  
//   const filtering = array.filter(num => {
//     if (num > 64 && num < 91) {
//       return num
//     } 
//   })
//   console.log(filtering)
  
//   const subtraction = filtering.map(num => num - 64)
//   console.log(subtraction)
  
//   const removeCommas = subtraction.join(" ")
//   console.log(removeCommas)
  
//   const final = removeCommas.toString()
//   console.log(final)
  
//   return removeCommas

//ATTEMPT 2

const findIndexNumbers = text.toUpperCase().split("").map(letter => letter.charCodeAt());
  
const removeRedundantNumbers = findIndexNumbers.filter(num => {
  if (num > 64 && num < 91) {
    return num
  } 
})

const convertCharToIndex = removeRedundantNumbers.map(num => num - 64).join(" ")

return convertCharToIndex

}

module.exports = alphabetPosition;