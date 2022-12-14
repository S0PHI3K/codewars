// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram (str){
    const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?~]/;
    const check = specialChars.test(str) ? true: false
    // console.log('check:', check)
    const checkNumber = Number.isInteger(str) ? true : false
    // console.log('checkNumber:', checkNumber)
    
    // console.log('word:', word)
    
    let decision 
        const word = str.toLowerCase()
            for (let i = 0; i < word.length - 1; i++) {
                for (let j = i + 1; j < word.length; j++) {
                    if (word[i] === word[j]) {
                        false;
                        } else {
                            true
                            }     
    }
  }


    if (check === true || checkNumber === true) {
         return 'error'
    } else {
        return decision
    }
};


module.exports = isIsogram;
  