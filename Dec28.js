//sorting scores
//given an unsorted array and highest possible score, returns a sorted array with O(n lg n) time

function sortScores( scoresArray, highestScore ) {
    let scoresHash = {}

    scoresArray.forEach( score => {
        if ( !scoresHash[score] ) {
            scoresHash[score] = 1
        } else {
            scoresHash[score] += 1
        }
    })
    return Object.keys(scoresHash).reverse()
}

let scoresArray = [ 37, 89, 41, 65, 91, 53 ]
let highestScore = 100

console.log(sortScores( scoresArray, highestScore )) // [ 91, 89, 65, 53, 41, 37 ]