// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Good Luck!

//ATTEMPT 2
function doubleChar(str) {
  
    let text = ""
    
    for (let i = 0; i < str.length; i++){
      text += str[i].repeat(2)
    }
    
    return text
    }
  
  
  
  //ATTEMPT 1
  function doubleChar(str) {
    
  let array = []
    
  for (let i = 0; i < str.length; i++) {
    const addition = str[i].repeat(2)
    array.push(addition)
    
  }
   let text = array.join("")
  
   return text
  }