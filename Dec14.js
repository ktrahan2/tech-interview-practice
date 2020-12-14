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

//build a map of the amount of times a word appears in a string
//need to account for puncuation, remove it probably

//I was able to solved but I used a .split and then a really round about way to remove all the symbols that may occur.
//followed through their solution to add the isLetter and splitWords functions. Super intersting. Revisit this!
function mapWordCount(string) {
    let wordCountHash = {}
    splitWords(string).map(word => {  
        word = word.toLowerCase()
        if (wordCountHash[word]) {
            wordCountHash[word] += 1
        } else {
            wordCountHash[word] = 1
        }
    })
    return wordCountHash
}
//didnt use += because each time you append a letter to the word it creates a new string causing O(n2) time. 
function splitWords(string) {
    const words = []
    let currentWordStartIndex = 0
    let currentWordLength = 0

    for (let i = 0; i < string.length; i++) {
        if ( isLetter(string[i]) ) {
            if ( currentWordLength === 0 ) {
                currentWordStartIndex = i
            } 
            currentWordLength++
        } else {
            let word = string.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength)
            if (word !== "") {
                words.push(word)
            }
            currentWordLength = 0
        }
    }
    return words
}

function isLetter(character) {
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0;
  }

let string = "After beating the eggs, Dana read the next step:"
let string2 = "Add milk and eggs, then add flour and sugar."

console.log(mapWordCount(string))
// console.log(mapWordCount(string2))
