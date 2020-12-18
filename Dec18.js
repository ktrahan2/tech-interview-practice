//product of all ints except at index
//returns an array of the products
//input [1, 7, 3, 4] // output [84, 12, 28, 21]

//cant use division

const getProducstOfAllIntsExceptAtIndex = ( array ) => {
    
    const productsOfAllIntsExceptAtIndex = []
    let productSoFar = 1

    for (let i = 0; i < array.length; i++) {
        
        productsOfAllIntsExceptAtIndex[i] = productSoFar
        productSoFar *= array[i]
    }

    productSoFar = 1
    for (let j = array.length - 1; j >= 0; j--) {
        productsOfAllIntsExceptAtIndex[j] *= productSoFar
        productSoFar *= array[j]
    }

    return productsOfAllIntsExceptAtIndex
    
}

let array1 = [ 1, 7, 3, 4]
let array2 = [ 1, 7, 3, 4, 5]

console.log(getProducstOfAllIntsExceptAtIndex( array1 )) // [84, 12, 28, 21]
console.log(getProducstOfAllIntsExceptAtIndex( array2 )) // [420, 60, 140, 105, 84]