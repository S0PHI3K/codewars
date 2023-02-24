//Ben has a very simple idea to make some profit: he buys something and sells it again. 
//Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. 
//Instead, he's going to buy it for the lowest possible price and sell it at the highest.
//Task
//Write a function that returns both the minimum and maximum number of the given list/array.


function minMax(arr){

    minValue = Math.min(...arr);
    maxValue = Math.max(...arr); 
    
    const result = [minValue, maxValue]

    let numberCheck = arr.every(element => {
      return typeof element === 'number';
    })

    return (numberCheck ? result : 'error')

    //ATTEMPT 1 - passes without considering boundary inputs
  //   minValue = Math.min(...arr)
  // maxValue = Math.max(...arr)
  // return [minValue,maxValue]; 

  };

  module.exports = minMax;

