//Your task is to make a function that can take any non-negative integer as an argument
// and return it with its digits in descending order. Essentially, rearrange the digits
// to create the highest possible number.


function descendingOrder(n){
  const checkNumber = Number.isInteger(n)
  const intArr = Array.from(String(n)).sort().reverse().join('')
  const result = parseInt(intArr)

  return (checkNumber ? result : null )
  
}
  module.exports = descendingOrder