const digitToLetterHash = {
    "2": ["a","b","c"],
    "3": ["d","e","f"],
    "4": ["g","h","i"],
    "5": ["j","k","l"],
    "6": ["m","n","o"],
    "7": ["p","q","r","s"],
    "8": ["t","u","v"],
    "9": ["w","x","y","z"]
}

//probably a way to do this with recurison but im not sure how.
//currently only works if there is one number before and/or after the word given.  
//to expand past adding multiple numbers before/after the word given,
//I would find all the potential strings for the numbers before the word then add them to all to the word

const findAllPotentialStrings = ( number, word ) => {

    const numberAsString = number.toString()
    const indexStartOfWordInNumber = findWordInPhoneNumber(number, word)
    let leftIndex = indexStartOfWordInNumber - 1
    let rightIndex = indexStartOfWordInNumber + word.length
    let matchingStrings = []
    let tempWord = ""
    
    if ( numberAsString.includes(convertWordToDigits(word)) && numberAsString.length === word.length ) {
        return word
    }

    if ( numberAsString[leftIndex] === '4' ) {
        leftIndex--
        word = "4" + word
    } 

    const currentPotentialLeftLetters = digitToLetterHash[numberAsString[leftIndex]]
    const currentPotentialRightLetters = digitToLetterHash[numberAsString[rightIndex]]

    if ( leftIndex >= 0 && rightIndex < numberAsString.length ) {
        //nested loop but shouldnt matter since phone numbers are small 
        for ( let currentLetter = 0; currentLetter < currentPotentialLeftLetters.length; currentLetter++ ) {
            tempWord = currentPotentialLeftLetters[currentLetter] + word
            for ( let rightLetter = 0; rightLetter < currentPotentialRightLetters.length; rightLetter++ ) {
                let secondTempWord = tempWord + currentPotentialRightLetters[rightLetter]
                matchingStrings.push(secondTempWord)
            }   
        }
    } else if ( leftIndex < 0 && rightIndex < numberAsString.length ) {
        for ( let currentLetter = 0; currentLetter < currentPotentialRightLetters.length; currentLetter++ ) {
            tempWord = word + currentPotentialRightLetters[currentLetter]
            matchingStrings.push(tempWord)
        }
    } else if ( leftIndex >= 0 && rightIndex >= numberAsString.length ) {
        for ( let currentLetter = 0; currentLetter < currentPotentialLeftLetters.length; currentLetter++ ) {
            tempWord = currentPotentialLeftLetters[currentLetter] + word
            matchingStrings.push(tempWord)
        }
    }
    
    return matchingStrings
}

//find the word in the given phone number, returns the starting index of the word
const findWordInPhoneNumber = ( number, word ) => {
    
    const wordToDigits = convertWordToDigits( word )
    const numberAsString = number.toString()

    if ( numberAsString.includes( wordToDigits )) {
        return numberAsString.indexOf( wordToDigits )
    } else {
        return "The word isnt in the number"
    }
}

//given a word, returns the phone number equivalent
const convertWordToDigits = ( word ) => {

    let digitized = "" 
    //On2 worst case time but phone numbers are pretty small
    for ( let letter in word ) {
        for ( let i = 2; i < Object.values(digitToLetterHash).length + 2; i++) {
            if ( digitToLetterHash[i].indexOf(word[letter]) > -1 ) {
                digitized = digitized + i
            }
        }
    }
    return digitized
}

// console.log(findWordInPhoneNumber(228, "cat")) // returns 0, pass
console.log(findAllPotentialStrings(228, 'cat'))// return cat, 
// console.log(findAllPotentialStrings(3228, "cat")) // returns catd cate catf //pass
// console.log(findAllPotentialStrings(34356937, "flower")) // returns d4flower, e4flower, f4flower // pass
// console.log(findAllPotentialStrings(43569378, "flower")) // returns 4flowert, 4floweru, 4flowerv // pass
