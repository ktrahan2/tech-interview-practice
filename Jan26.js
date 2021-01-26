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

console.log(rotateLeft([1,2,3,4,5], 4)) // 5 1 2 3 4