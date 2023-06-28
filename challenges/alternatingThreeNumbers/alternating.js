// Alternating Among Three Values
// Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

// What is the most efficient way to cycle among three values? Write a function f so that it satisfies

//   f(a) = b
//   f(b) = c
//   f(c) = a
// EXAMPLE
//   f( 3, { a:3, b:4, c:5 } ) => 4

function f(x, cc) { 

    //ATTEMPT ONE
  //   const info = Object.values(cc)
  //   console.log('Info', info)
    
  //   const newValue = x + 1
  //   console.log('New Value', newValue)
    
    
  //   const search = info.find(num => num === newValue)
  //    console.log('Result', search)
    
  //   return search === newValue ? newValue : info[0]
    
  // ATTEMPT TWO
    const info = Object.values(cc)
    const search = info.indexOf(x)
    console.log('Search', search)
    
    if (search === 0){
      return info[1]
    } else if (search === 1){
      return info[2]
    } else {
      return info[0]
    }
    
   }

//    codewars solutions
// function f(value, {a, b, c}) { 
//     return {
//       [a]: b,
//       [b]: c,
//       [c]: a,
//     }[value]
//   }

//   function f(x, cc) { 
//     switch (x) {
//       case cc.a: return cc.b;
//       case cc.b: return cc.c;
//       case cc.c: return cc.a;
//     }
//   }