//Your task is to make a function that can take any non-negative integer as an argument
// and return it with its digits in descending order. Essentially, rearrange the digits
// to create the highest possible number.


function descendingOrder(n){

  const specialChars = /[ a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const intArr = Array.from(String(n)).sort().reverse().join('')
  const result = parseInt(intArr)
  // how do you get it to look through containing specialChars?
    if (n === null || n === specialChars) {
      return null
    } else {
    return result }
  }

  module.exports = descendingOrder
