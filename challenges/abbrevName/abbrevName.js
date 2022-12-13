// //Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// //The output should be two capital letters with a dot separating them.
// //It should look like this:
// //Sam Harris => S.H
// //patrick feeney => P.F

// function abbrevName(name){

//     //ATTEMPT 3 - Kata Solution
//     // return name.split(' ').map(i => i[0].toUpperCase()).join('.')

//     //ATTEMPT 2
//     var letter = /[a-zA-Z]/;
//     const newName = name.toUpperCase().split(" ")
//     const initials = newName.map(word => word[0]).join('.');

//         if (name.match(letter)){
//             return initials;
//         } else {
//             return 'error';
//         };
    
    
   
    

//     //ATTEMPT 1
//     // let newName = name.toUpperCase();
//     // let updateName = newName.split(" ")
//     // let initials = updateName.map(word => word[0]).join('.');
//     // let abbrev = initials.join('.')
//     // console.log(newName)
//     // console.log(updateName)
//     // console.log(initials)
//     // console.log(abbrev)

    
// }

// // abbrevName('Sophie Kneeshaw')

// module.exports = abbrevName;