//given a range of numbers, and a value, k, determine how many beautiful days are in the range
//a beautiful day is described by the number being evenly divisible by k

//input 20...23, k = 6
//output 2
//20 - 02 / 6 = 3 beautiful
//21- 12 / 6 = 1.5 not beautiful
//22 - 22 / 6 = 0 beautiful
// 23 - 32 / 6 = 1.5 not beautiful

// write a function to reverse a number
// find the difference between number and reverse number then divide by k
// check if that number is an integer, if so count++

const beautifulDays = (low, high, k) => {
    let count = 0
    for ( let i = low; i <= high; i++ ) {
        Number.isInteger((i - reverseNumber(i)) / k ) ? count++ : null
    }
    return count
}

const reverseNumber = (number) => {
    return parseInt(number.toString().split('').reverse().join(''))
}

// console.log(reverseNumber(26)) // should return 62 // passing

console.log(beautifulDays(20, 23, 6)) // 2