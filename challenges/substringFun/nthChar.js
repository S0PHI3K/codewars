// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

function nthChar(words){
    let count = 0;
    let newWord = [];
    
   for (let i = 0; i < words.length; i++){
     let letter = words[i].charAt(count)
     newWord.push(letter)
     count += 1
   }
     return newWord.join('')
   }

// ALTERNATIVE SOLUTIONS

const nthChar = (words) => words.map((word, index)=>word[index]).join('');

function nthChar(words){
    return words.map((str, i) => str.charAt(i)).join("");
   }