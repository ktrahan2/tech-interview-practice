//given an array find out which two numbers sum = the target number
//then return them as (index, index)

function findTargetNumbers(array, target) {
    let answer = `(0, 0)`
    for (let i = 0; i < array.length; i++) {
        let difference = target - array[i]
        let secondIndex = array.indexOf(difference)
        answer = `(${i}, ${secondIndex})`
        return answer
    }

}

let array = [ 1, 2, 3 ]
let target = 4

let array2 = [ 7, 7, 4, 4, 7 ]
let target2 = 14

console.log(findTargetNumbers(array, target)) // (0, 2)
console.log(findTargetNumbers(array2, target2)) // (0, 1)