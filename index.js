//tech interview practice 11/13/2020

//add two arrays together. 
//[1, 2, 3] + [1, 2, 3]
//if index doesn't exist then its value is 0

const array1 = [1, 2, 3]
const array2 = [1, 2, 3, 4]

const sumArrays = (array1, array2) => {

    let summedArray = []
    let biggestArray 
    //don't set variable to string unless its a string
    let sum = 0

    if (array1.length > array2.length) {
        biggestArray = array1
    } else {
        biggestArray = array2
    }   
   
    for (let i = 0; i < biggestArray.length; i++) {
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