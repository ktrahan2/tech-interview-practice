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

console.log(recordBreaker(scoresArray))