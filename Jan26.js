//Left rotation

// given an array of integers and a number d, preform d left rotations on the array
// return the updated array

// input - 5, 4 (4 left rotations with 5 integers)
// [ 1, 2, 3, 4, 5]

//output 
// 5 1 2 3 4

// pop/push the array d number of times. 

const rotateLeft = ( integerArray, numberOfRotations ) => {
    
    let rotationCount = 0
    
    while ( rotationCount < numberOfRotations ) {

        let rotatingNumber = integerArray.shift()

        integerArray.push(rotatingNumber)

        rotationCount++
    }

    return integerArray
}

// console.log(rotateLeft([1,2,3,4,5], 4)) // 5 1 2 3 4 - pass
// passed all hackerrank test

// ------------------ //

// new year chaos - medium

// each person wears a sticker 1 to n
// any person can bribe the one in front of them to move forward - maintaing their sticker number
// any person can only bribe at most 2 others
// print the number of bribes based off everyones new position or if a person has bribed more than two people print Too chaotic

// input [4, 1, 2, 3]
// out put too chaotic

//input [1,2,3,5,4]
// person 5 bribed person 4
//output 1


//if the current index is less than the value at that index then add the difference to the bribecount
// if the difference between the two is more than 3 than print too chaotic
//my attempt got 4 test passing on hackerrank

// const countBribes = ( array ) => {
    
//     let bribeCount = 0
//     let i = 0

//     while ( i !== array.length - 1 ) {
//         let currentNumber = array[i]
    
//         if ( (i + 1) < currentNumber ) {
//             if ( currentNumber - (i + 1) > 2) {
//                 bribeCount = "Too chaotic"
//                 break
//             } else {
//                 bribeCount += ( currentNumber - 1 - i)
//             }
//         } else if ( array[i] > array[i+1] || array[i] > array[i + 2]) {
//             bribeCount += 1
//         }
//         i++
//     }
//     console.log(bribeCount)
// }

// console.log(countBribes([1,2,3,5,4])) // 1 - pass
// console.log(countBribes([1,5,2,3,4])) // too chaotic - pass
// console.log(countBribes([2, 1, 5, 3, 4])) // 3 - pass
// console.log(countBribes([2, 5, 1, 3, 4])) // too chaotic - pass
// console.log(countBribes([5, 1, 2, 3, 7, 8, 6, 4])) // too chaotic - pass
// console.log(countBribes([1, 2, 5, 3, 7, 8, 6, 4])) // too chaotic - pass

//answer from online 

const minimumBrides = ( array ) => {
    
    let bribeCount = 0
    let currentPosition = 0

    while ( currentPosition < array.length ) {
        
        let originalPos = array[currentPosition] - 1
        let diff = originalPos - currentPosition
        
        if ( diff > 2 ) {
            return console.log("Too chaotic")
        } 
        
        for ( let i = Math.max(0, originalPos - 1); i < currentPosition; i++) {
            const startPositionOfForwardPerson = array[i] - 1
            if ( startPositionOfForwardPerson > originalPos ) {
                bribeCount++
            }
        }
        currentPosition++
    }
    console.log(bribeCount)
}