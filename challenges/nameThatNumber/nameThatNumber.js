// In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:

// nameThatNumber(4)   // returns "four"
// nameThatNumber(19)  // returns "nineteen"
// nameThatNumber(99)  // returns "ninety nine"
// Words should be separated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!

function nameThatNumber(num) {
  
    let numbers = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}
    
    let tens = {
      2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'}
    
  if (num < 20){
    return numbers[num]
    
  } else {
    
    const string = num.toString()
    const firstNumber = string[0]
    const secondNumber = string[1]
    
    if (secondNumber == 0){
      return `${tens[firstNumber]}`
    } else {
    return `${tens[firstNumber]} ${numbers[secondNumber]}`
    }
  }
    }

    // Alternative Solutions

    function nameThatNumber(num) {
        let str = String(num);
        let numberString = [
          "zero",
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "ten",
          "eleven",
          "twelve",
          "thirteen",
          "fourteen",
          "fifteen",
          "sixteen",
          "seventeen",
          "eighteen",
          "nineteen",
        ];
      
        let ty = [
          "teen",
          "twenty",
          "thirty",
          "forty",
          "fifty",
          "sixty",
          "seventy",
          "eighty",
          "ninety",
        ];
      
        if (num < 20) {
          return numberString[num];
        }
      
        if (num >= 20) {
          return str[1] === "0"
            ? ty[Number(str[0] - 1)]
            : ty[Number(str[0] - 1)] + " " + numberString[Number(str[1])];
        }
      }
  