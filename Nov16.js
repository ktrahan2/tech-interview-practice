//tech interview practice 11/13/2020
//add two arrays together. 
//[1, 2, 3] + [1, 2, 3] == [2, 4 , 6]
//if index doesn't exist then its value is 0
//[1, 2, 3] + [1, 2, 3, 4] == [2, 4, 6, 4]

const array1 = [1, 2, 3]
const array2 = [1, 2, 3, 4]

const sumArrays = (array1, array2) => {

    let summedArray = []
    let longestArray 
    //don't set variable to string unless its a string
    let sum = 0
    //make separate function to find longest array, use sort 
    if (array1.length > array2.length) {
        longestArray = array1
    } else {
        longestArray = array2
    }   
   
    for (let i = 0; i < longestArray.length; i++) {
        if (array1[i] && array2[i]) {

            sum = array1[i] + array2[i]
            summedArray.push(sum)

        } else if (!array1[i]) {

            array1[i] = 0
            sum = array1[i] + array2[i]
            summedArray.push(sum)

        } else if (!array2[i]) {

            array2[i] = 0
            sum = array1[i] + array2[i]
            summedArray.push(sum)

        }
    }
    return summedArray
}

console.log(sumArrays(array1, array2))