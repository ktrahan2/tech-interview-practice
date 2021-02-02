const wordToHash = ( word ) => {
    
    let letterHash = {}
    let letterArray = word.split('')
    
    letterArray.forEach( letter => {
        if ( !letterHash[letter] ) {
            letterHash[letter] = 1
        }
    })
    return letterHash
}

function numKeypadSolutions(wordlist, keypads) { 
    //loop each word and turn into a letterHash
    //check that letterHash against the current keypad
        //if the first letter of the keypad is not included in the letterHash, disregard the keypad for that word
        //otherwise check each letter on the keypad and remove it from the currentLetterHash
        //after the loop if the letterHash is empty then add one to the current keypads wordCount
         
    let wordCount = new Array(keypads.length)
    wordCount = wordCount.fill(0, 0)
    
    for ( let word = 0; word < wordlist.length; word++ ) {
       
        let currentWord = wordlist[word]
        
        for ( let keypad = 0; keypad < keypads.length; keypad++ ) {
            
            let currentKeypad = keypads[keypad]
            let currentWordLetterHash = wordToHash(currentWord)
            
            if ( !currentWord.includes(currentKeypad[0]) ) {
                break
            } else {
                let keypadLetterArray = currentKeypad.split("")
                //keypad never more than 7 letters
                keypadLetterArray.forEach( letter => {
                    if ( currentWordLetterHash[letter] ) {
                        delete currentWordLetterHash[letter]
                    } 
                })
            }
            if ( Object.keys(currentWordLetterHash).length < 1 ) {
                wordCount[keypad] += 1
            }
        }
    }
    return wordCount
}

// ------------------------------ //

//find the missing number
// 1 to n 
const numberArray = [3,7,1,2,8,4,5]
const n = 8
//answer 6

const numberArray2 = [1, 3, 4, 6, 5]
const n2 = 6
//2

const findMissingNumber = ( numberArray, n ) => {

    let fullSum = 0
    let startingNumber = 0

    while ( startingNumber <= n ) {
        fullSum += startingNumber
        startingNumber++
    }

    let missingNumber = fullSum - sumArray(numberArray)

    return missingNumber
}

const sumArray = ( array) => {
    return array.reduce((acc, sum) => acc += sum)
}

// console.log(findMissingNumber( numberArray, n)) // 6
// console.log(findMissingNumber( numberArray2, n2)) // 2

// ---------------------- //

//input
let stringToReverse = "Hello World"
//output 
// "World Hello"

const reverseString = ( string ) => {
    
    let stringArray = string.split(" ")
    let leftIndex = 0
    let rightIndex = stringArray.length - 1

    while ( leftIndex < rightIndex ) {

        let temp = stringArray[leftIndex]
        stringArray[leftIndex] = stringArray[rightIndex]
        stringArray[rightIndex] = temp

        leftIndex++
        rightIndex--
        
    }

    return stringArray.join(" ")
    
}

console.log(reverseString(stringToReverse)) // "World Hello"