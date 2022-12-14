//Your task is to make a function that can take any non-negative integer as an argument
// and return it with its digits in descending order. Essentially, rearrange the digits
// to create the highest possible number.


function descendingOrder(n){
  const myFunc = num => Number(num)
  const intArr = Array.from(String(n), myFunc)
  // use the above to lines from the internet, but not fully sure how they work. 
  
  const highToLow = intArr.sort().reverse().join('')
  const result = parseInt(highToLow)
    return result
  }

  module.exports = descendingOrder