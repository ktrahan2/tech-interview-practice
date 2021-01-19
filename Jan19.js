// write a function to return how many times the player breaks their highest and lowest scores. 

let scoresArray = [10, 5, 20, 20, 4, 5, 2, 25, 1]

const recordBreaker = (scoresArray) => {
    
    let maxRecordBroken = 0
    let minRecordBroken = 0
    let maxScore = scoresArray[0]
    let minScore = scoresArray[0]

    for ( let i = 1; i < scoresArray.length; i++ ) {
        
        const currentScore = scoresArray[i]
        
        if ( currentScore > maxScore ) {
            maxScore = currentScore
            maxRecordBroken++
        } else if ( currentScore < minScore ) {
            minScore = currentScore
            minRecordBroken++
        }
    }
    return [maxRecordBroken, minRecordBroken]
}

// console.log(recordBreaker(scoresArray))

// -------------------- //

//Bigger is Greater
//return the word that is greater, but the smallest possible number to be greater than the current word. 
//you can only rearrange the letters

//input abcd,
// next biggest is abdc

//will only contain letters a-z
//look at the last two letters and see if you can swap them to make a bigger string. if the last index is greater than the 2nd to last then yes
//if not then move down two letters. 
const biggerIsGreater = ( string ) => {
    
    string = string.split('')

    let pivotPoint = string.length - 1

    while ( pivotPoint > 0 && string[pivotPoint - 1 ] >= string[pivotPoint] ) {
        pivotPoint--

        if ( pivotPoint <= 0 ) {
            return 'no answer'
        } 
    }
    //at this point pivotPoint - 1 is the index to change
    let replacement = string.length - 1

    while ( string[replacement] <= string[pivotPoint - 1] ) {
        replacement--

    }
    const temp = string[pivotPoint - 1]
    
    string[pivotPoint - 1] = string[replacement]
    string[replacement] = temp

    //string now has the lowest point at the start, need to sort the rest of them smallest to largest

    replacement = string.length - 1

    while ( pivotPoint < replacement ) {
        const temp = string[pivotPoint]
        string[pivotPoint] = string[replacement]
        string[replacement] = temp
        pivotPoint++
        replacement--
    }
    return string.join('')
}

// console.log(biggerIsGreater("ab")) //ba
// console.log(biggerIsGreater("bb")) //no answer
console.log(biggerIsGreater("dkhc")) //hcdk
