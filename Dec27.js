//find a duplicate space edition

//integers are in range 1..n
//the array has a length of n + 1

//has atleast one integer that appears at least twice 

//write a function that finds an integer that appears more than once

//optimize for space
//O(n) space and time
function findRepeatedInteger( array ) {
    
    let numberSet = new Set()

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i]
        if (numberSet.has(currentNumber)) {
            return currentNumber
        } 
        numberSet.add(currentNumber)
    }
}

function binaryRepeatedInteger( array ) {

    let floor = 1
    let ceiling = array.length - 1

    while ( floor < ceiling ) {
        let midPoint = Math.floor(floor + ((ceiling - floor) / 2 ))
        let lowerRangeFloor = floor
        let lowerRangeCeiling = midPoint
        let upperRangeFloor = midPoint + 1
        let upperRangeCeiling = ceiling

        const distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1

        let itemsInLowerRange = 0

        array.forEach( number => {
            console.log("LRF", lowerRangeFloor, "LRC", lowerRangeCeiling)
            if ( number >= lowerRangeFloor && number <= lowerRangeCeiling) {
                itemsInLowerRange += 1
            }
        })
        if ( itemsInLowerRange > distinctPossibleIntegersInLowerRange ) {
            floor = lowerRangeFloor
            ceiling = lowerRangeCeiling
        } else {
            floor = upperRangeFloor
            ceiling = upperRangeCeiling
        }
        return array[floor] //returns the actual repeating number, floor is the index that repeats. 
    }
    
}

let numbersArray = [ 7, 1, 2, 7, 1, 4 ]

// console.log(findRepeatedInteger( numbersArray )) // 1
console.log(binaryRepeatedInteger( numbersArray )) // 1