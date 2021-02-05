// Better.com codility test

const solution = ( N ) => {

    N = N.toString().split('')
    const originalLength = N.length

    if ( N[0] === "-") {
        for ( let i = 1; i < N.length; i++ ) {
            let currentNumber = N[i]
            if ( currentNumber > 5 ) {
                N.splice(i, 0, 5)
                break
            }
        }
        if ( N.length === originalLength ) { 
            N.push("5")
        }
    } else {
        for ( let i = 0; i < N.length; i++ ) {
            let currentNumber = N[i]
            if ( currentNumber < 5 ) {
                N.splice(i, 0, 5)
                break
            } 
        }
        if ( N.length === originalLength ) { 
            N.push("5")
        }
    }
    return parseInt(N.join(""))
}

let N = 268
let N2 = 670
let N3 = 0
let N4 = -897
// console.log(solution(N))
// console.log(solution(N2))
// console.log(solution(N3))
// console.log(solution(N4))
//all passing

// -------------------- //

const balancedString = ( string ) => {
    
    if ( checkIfSetsMatch(string) ) {
        return string.length
    } else {
        return findLargestSubstring(string)
    }

}

const checkIfSetsMatch = ( string ) => {
    
    let upperCaseSet = new Set()
    let lowerCaseSet = new Set()
    
    for ( let i = 0; i < string.length; i++ ) {
        let currentLetter = string[i]

        if ( currentLetter === currentLetter.toLowerCase() ) {
            lowerCaseSet.add(currentLetter)
        } else if ( currentLetter === currentLetter.toUpperCase() ) {
            upperCaseSet.add(currentLetter.toLowerCase())
        }
    }
    
    if ( upperCaseSet.size === lowerCaseSet.size && ( [...lowerCaseSet].every(value => upperCaseSet.has(value)))) {
        return true
    } else {
        return false
    }
}

//if the original string doesn't match we go through all of the substrings to find the largest one that matches our criteria
const findLargestSubstring = ( string ) => {
    
    let allSubstrings = getAllSubstrings(string)
    let largestCorrectSubstring = 0
    //could possibly sort by largest string, then whenever you find one that matches you could break the iteration. Sort might take more time though
    allSubstrings.forEach( subString => {
        if ( checkIfSetsMatch(subString) && subString.length > largestCorrectSubstring ) {
            largestCorrectSubstring = subString.length
        }
    })
    return largestCorrectSubstring > 0 ? largestCorrectSubstring : -1
}

//function to check all subsets of the string
const getAllSubstrings = ( string ) => {

    let allSubstrings = []

    for ( let i = 0; i < string.length; i++ ) {
        for ( j = i + 1; j < string.length; j++ ) {
            allSubstrings.push(string.slice(i, j))
        }
    }

    return allSubstrings
}

let string = "azABaabza" // 5
let string2 = "AcZCbaBz" // 8
let string3 = "acbadfd" // -1
let string4 = "TacoCat" // -1

console.log(balancedString(string)) //failing
console.log(balancedString(string2)) // passing
console.log(balancedString(string3)) // passing
console.log(balancedString(string4)) // passing

// ---------------- //

const findDayOfTheWeek = ( S, K ) => {
    
    let dayMap = {
        "Sun": 0,
        "Mon": 1,
        "Tue": 2,
        "Wed": 3,
        "Thu": 4,
        "Fri": 5,
        "Sat": 6
    }
    
    let newDay = (dayMap[S] + K) % 7
    
    return findDayByNumber( dayMap, newDay)
}

const findDayByNumber = ( object, number ) => {
    return Object.keys(object).find( key => object[key] === number ) 
}

let S = "Sat"
let K = 23
let S2 = "Wed"
let K2 = 2

// console.log(findDayOfTheWeek(S, K)) // return "Mon" //passing
// console.log(findDayOfTheWeek(S2, K2)) // return "Fri" // passing