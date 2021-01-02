//find the odd number, so a number that appears in the array an odd amount of times

const findOdd = ( numArray ) => {
    return numArray.reduce( ( a, b ) => a ^ b  )
}

let numArray = [ 2, 1, 2, 1, 3 ]

console.log(findOdd(numArray))