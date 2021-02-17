//roman numeral decoder

//given a roman numeral return the integer value of the numeral

//input XXI == 21
//MMVIII == 2008

const romanToNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const decodeTheRomans = ( string ) => {
    
    let total = 0

    for (let i = 0; i < string.length; i++) {

        let currentRomanLetter = string[i]
        let nextRomanLetter = string[i + 1]
        
        if ( romanToNumber[currentRomanLetter] < romanToNumber[nextRomanLetter] ) {
            total += romanToNumber[nextRomanLetter] - romanToNumber[currentRomanLetter]
            i++
        } else {
            total += romanToNumber[currentRomanLetter]
        }
    }
    return total
}

let string = "XXI" // 21
let string2 = "MMVIII" // 2008
let string3 = "IV" // 4

console.log(decodeTheRomans(string))
console.log(decodeTheRomans(string2))
console.log(decodeTheRomans(string3))
