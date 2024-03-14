// Task
// Round the given number n to the nearest multiple of m.

// If n is exactly in the middle of 2 multiples of m, return n instead.

// Example
// For n = 20, m = 3, the output should be 21.

// For n = 19, m = 3, the output should be 18.

// For n = 50, m = 100, the output should be 50.

function rounding(n, m) {
  
    let multiples = Math.ceil(n / m)
    
    let maxNumber = m * multiples
    
    let minNumber = m * (multiples - 1)
    
    let maxNumberDifference = (maxNumber - n)
        
    let minNumberDifference = (n - minNumber)
    
     if (minNumberDifference > maxNumberDifference) {
       return maxNumber
     } else if (minNumberDifference < maxNumberDifference){
       return minNumber
     } else {
       return n
     }
    
  }

  // ALTERNATIVE

  function rounding(n, m) {
    if ((n % m) / m === 0.5) return n;
    return Math.round(n / m) * m;
  }