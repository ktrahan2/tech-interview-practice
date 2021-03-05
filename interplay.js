//Given a non-negative integer, write a function to return the minimum number of steps to 
//reduce it to zero if you can only divide by 2 or subtract by 1.

const reduceToZero = ( number, count ) => {
    
    if ( number % 2 === 0 ) {
        number /= 2
        count++
    } else {
        number -= 1
        count++
    }

    if ( number !== 0 ) {
        return reduceToZero(number, count)
    }
    return count
}

let number = 14 

console.log(reduceToZero(number, 0)) // return 6