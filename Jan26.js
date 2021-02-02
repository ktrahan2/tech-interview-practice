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

// new year chaos - medium - minimal success

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

// ---------------------- //

// determine the minimum number of swaps to have an array sorted in ascending order - medium - success

// no duplicates
// find the minimum number of swaps to get the array sorted
 
const swapTilYouDrop = ( array ) => {
    
    let swapCount = 0

    for ( let currentNumber = 0; currentNumber < array.length; currentNumber++ ) {
        
        if ( array[currentNumber] !== currentNumber ) {
            for ( let numbersToCheck = currentNumber + 1; numbersToCheck < array.length; numbersToCheck++ ) {
                if ( currentNumber + 1 === array[numbersToCheck] ) {
                    swapIndexes(array, currentNumber, numbersToCheck)
                    swapCount++
                    break
                }
            }
        }
    }
    return swapCount
}

const swapIndexes = ( array, currentIndex, indexToSwap ) => {
    
    let temp = array[currentIndex]
    array[currentIndex] = array[indexToSwap]
    array[indexToSwap] = temp
    
    return array
}

// console.log(swapTilYouDrop([7, 1, 3, 2, 4, 5, 6])) // 5 - pass
//passess all hackerrank problems

// -------------- //

// Array manipulation - hard

// set the indices to equal k between the indices a and b 
// n = the size of the array, start it with 0 so create an array.fill with zeros to length of n. 
// as far as a and b are concerned the 0th index is counted as 1
// so if k is 3, a is 1, and b is 5 the array would look like 
// [3, 3, 3, 3, 3, 0, 0, 0, 0, 0]
// then look at the next set of abk and add onto this array the same way. so if k is 7, a is 4, and b is 8
// [3, 3, 3, 10, 10, 7, 7, 7, 0, 0]

// return the largest value , Math.max(finalarray)
//my solution passes 9/15 test, O(n2) time, fails the rest on timeout

// const arrayManipulation = ( n, queries ) => {
    
//     let startingArray = new Array(n).fill(0)
    
//     let queryArrayIndex = 0 
//     let maxValue = 0
    
//     while ( queryArrayIndex < queries.length ) {
        
//         let startingIndex = queries[queryArrayIndex][0] - 1
//         let finishingIndex = queries[queryArrayIndex][1] - 1
//         let valueToAdd = queries[queryArrayIndex][2]
 
//         for ( let i = startingIndex; i <= finishingIndex; i++ ) {
//             startingArray[i] += valueToAdd
//             if ( startingArray[i] > maxValue) {
//                 maxValue = startingArray[i]
//             }
//         }

//         queryArrayIndex++

//     }
    
//     return maxValue
// }

//solution from online to optimize time

const arrayManipulation = ( n, array ) => {
    
    const arr = Array(n + 1) 
    let maxValue = 0
    let currentNumber = 0

    array.forEach(([startRange, endRange, value]) => {
        
        arr[startRange] = arr[startRange] || { start: 0, end: 0}
        arr[endRange] = arr[endRange] || { start: 0, end: 0}

        arr[startRange].start += value
        arr[endRange].end += value
    })
    
    arr.forEach((cell) => {
        if (cell) {
            currentNumber += cell.start
            if ( currentNumber > maxValue ) {
                maxValue = currentNumber
            }
            currentNumber -= cell.end
        }
    })
    return maxValue
}

const queries = [[ 1, 2, 100], [ 2, 5, 100], [ 3, 4, 100]]

console.log(arrayManipulation(5, queries)) //