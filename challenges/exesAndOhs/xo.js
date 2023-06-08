// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
//     ATTEMPT 1

//     countX = 0
//     countO = 0
  
//   string = str.toLowerCase()
  
//   for(let i=0; i < string.length; i++){
//     if(string[i] === 'x'){
//       countX = countX + 1
//     } else if (string[i] === 'o') {
//       countO = countO + 1
//     }
//   }
  
//   return countX === countO 

// ATTEMPT 2

    countX = 0
    countO = 0
  
  string = str.toLowerCase()
  
  for(let i=0; i < string.length; i++){
    string[i] === 'x' ? countX = countX + 1 : null
    string[i] === 'o' ? countO = countO + 1 : null
    }

  return countX === countO 
}