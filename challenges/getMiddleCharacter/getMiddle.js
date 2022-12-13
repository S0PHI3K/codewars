//You are going to be given a word. Your job is to return the middle character of the word. 
//If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.

function getMiddle(str) {

    var position;
    var length;

    //measuring the the length of the strength to see if it is an odd number
    if(str.length % 2 == 1) {
        //if that is the case, you are placing the position variable in the string length
        //divided by two. e.g. 5/2 - place it in 3
        position = str.length / 2;
        //this length is a vairable and not the same as the property variable
        length = 1;
    } else {
        //this is testing to see if the length is an even number. If so, you minus 1
        //in order to get the middle two numbers
        position = str.length / 2 - 1;
        //this will then create the 
        length = 2;
    }
    //using substring allows you to return characters between an indices e.g. position, position + length 
    return str.substring(position, position + length)

}

module.exports = getMiddle


//coding kata results

// return s.slice((s.length-1)/2, s.length/2+1);

// return s.length % 2 ? s.charAt(Math.floor(s.length/2)) : s.substr(s.length/2-1, 2);



