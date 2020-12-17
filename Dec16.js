// Coder Workshop - Algorithms and Whiteboards

//fixed points, find the first number that matches its index return it, if not return false

const fixedPoint = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === i) {
            return i
        } 
    }
    return false
}

let array1 = [ -6, 0, 2, 40 ]
let array2 = [ 1, 5, 7, 8 ]

// console.log(fixedPoint(array1)) // 2
// console.log(fixedPoint(array2)) // false

// -------------------- //

// shifting strings 

//check to see if string a can be shifted to fit into string b. 
// For example, if A is `abcde` and B is `cdeab`, return `true`. If A is `abc` and B is `acb`, return `false`.
// shift and push a until it matches b
function canAShift(a, b) {
    if ( a.length === b.length && a !== b ) {
        for (let i = 0; i < a.length; i++) {
            if ( a[i] === b[0]) {
                let indexSlicePoint = i
                aFront = a.slice(indexSlicePoint, a.length)
                aBack = a.slice(0, indexSlicePoint)
                aFinal = aFront.concat(aBack)
                return aFinal === b ? true : false
            }   
        }
    }
    return false
    
        
}

let a = 'abcde'
let b = 'cdeab'
let a2 = 'abc'
let b2 = 'acb'

// console.log(canAShift(a, b))
// console.log(canAShift(a2, b2))

// -------------------- //

// collatz sequence 

// A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer `n`:
// If `n` is even, the next number in the sequence is `n / 2`
// If `n` is odd, the next number in the sequence is `(3 * n) + 1`
// It is conjectured that every such sequence eventually reaches the number `1`.
// Write a function that, given `n`, returns the number of elements in the sequence starting with `n` and ending with `1`.

// to find even n % 2 === 0, 

function collatzCount(n) {
    let count = 1
    while (n !== 1) {
        n = ( n % 2 ) === 0 ? n/2 : (3 * n) + 1
        count++
    }
    return count
}

console.log(collatzCount(1))
