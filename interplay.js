//Given a non-negative integer, write a function to return the minimum number of steps to 
//reduce it to zero if you can only divide by 2 or subtract by 1.

const reduceToZero = ( number ) => {
    
    let count = 0
    
    while ( number != 0 ) {
        if ( number % 2 === 0 ) {
            number = number / 2
            count++
        } else {
            number = number - 1
            count++
        }
    }
    return count
}

let number = 14 

console.log(reduceToZero(number))