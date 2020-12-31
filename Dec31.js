//persistence 

//given a mumber continuously multiple them until you receive a single digit

//input 39 output 3. 
//3*9 = 27, 2*7 = 14, 1*4 = 4, takes 3 times to get to a single digit
// 
const persistence = ( num ) => {

    let splitNumber = num.toString().split("")
    let timesMultiplied = 0

    while ( splitNumber.length > 1 ) {
        splitNumber = splitNumber.reduce( (acc, sum ) => (
            acc *= sum
        )).toString().split("")
        timesMultiplied++
    }
    return timesMultiplied
}

let num = 39
let num2 = 0
let num3 = 999
let num4 = 9999

console.log(persistence(num)) // 3, pass
console.log(persistence(num2)) // 0, pass
console.log(persistence(num3)) // 4, pass
console.log(persistence(num4)) // 3, pass

