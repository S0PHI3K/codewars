//Given a non-empty array of integers, 
//return the result of multiplying the values together in order.
//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
 return x.reduce((total, num) => {
    return total * num
 })
}

module.exports = grow