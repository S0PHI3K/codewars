// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  
    // let numberToString = String(n);
    // console.log('num2string',numberToString);
    
    // let split = numberToString.split("");
    // console.log('Split', split)
    
    // let reverse = split.reverse();
    // console.log('Reverse', reverse);
    
    // let map = reverse.map(Number);
    // console.log('Map', map);
    
    // return map
    
    let arr = String(n).split("").reverse().map(Number);
    
    return arr
    }

// ALTERNATIVE SOLUTIONS

