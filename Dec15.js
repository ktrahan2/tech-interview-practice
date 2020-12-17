//players receive score between 0 and 100
//rank highest to lowest

//take an array of unsortedScores and highestPossibleScore, sort faster than O(n lg n)
//take the object key and insert it into an array x its value 
//my solutions takes a lot more time, going to revisit and try to do their solution.
//ive also sorted the wrong direction lol, used shift instead of push to fix this. 
function sortScores(unsortedScores, highestPossibleScore) {
    let scoresHash = {}
    let sortedScores = []

    unsortedScores.map(el => {
        if (scoresHash[el]) {
            scoresHash[el] += 1
        } else {
            scoresHash[el] = 1
        }
    })

    for (let score in scoresHash) {
        let times = scoresHash[score]
        for (let j = 0; j < times; j++) {
            sortedScores.unshift(score)
        }
    }
    return sortedScores
}

const unsortedScores = [37, 37, 89, 41, 65, 91, 53]; //works with hash maps if scores dont repeat
const highestPossibleScore = 100;

console.log(sortScores(unsortedScores, highestPossibleScore))
