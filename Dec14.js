// Inflight entertainment system
//choose two movies who's runtime matches the flight time

//given flightLength, array of movieLengths(in minutes), return boolean refelecting wether or not there is a match in the list

//dont repeat movies, exactly two movies, runtime over memory. 

function canTwoMoviesFillFlight(movieLengths, flightLength) {
    const movieLengthSeen = new Set()

    for (let i = 0; i < movieLengths.length; i++) {
        const firstMovieLength = movieLengths[i]

        const matchingSecondMovieLength = flightLength - firstMovieLength
        if (movieLengthSeen.has(matchingSecondMovieLength)) {
            return true
        }
        movieLengthSeen.add(firstMovieLength)
        console.log(movieLengthSeen)
    }
    return false
}

let movieLengths = [45, 60, 30, 15 ]
let movieLengths2 = [30, 45, 45]
let movieLengths3 = [30, 45, 30]
let flightLength = 60

// console.log(canTwoMoviesFillFlight(movieLengths, flightLength))
// console.log(canTwoMoviesFillFlight(movieLengths2, flightLength))
// console.log(canTwoMoviesFillFlight(movieLengths3, flightLength))


//find out if any permutation is a palindrome
//can the letters a string be organized in a way to create a palindrome
//put all letters into a hash, check length, if they are all even and 1 odd then its a palindrome

//real solution, use a set to narrow down, if theres only one value left than its a palindrome
function isItAPalindrome( string ) {
    let unPairedCharacters = new Set()

    for (let char of string) {
        if (unPairedCharacters.has(char)) {
            unPairedCharacters.delete(char)
        } else {
            unPairedCharacters.add(char)
        }
    }
    return unPairedCharacters.size <= 1
}

// let string = "civic" //true
// let string1 = "ivicc" //true
// let string2 = "purple" //false
// let string3 = "elrppu" //false

// console.log(isItAPalindrome(string))
// console.log(isItAPalindrome(string1))
// console.log(isItAPalindrome(string2))
// console.log(isItAPalindrome(string3))