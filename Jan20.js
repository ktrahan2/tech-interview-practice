// determine if two kangroos starting position x will ever be on the same spot with y jump length

//set their positions. while those positions are not the same add their jump length to their current spot

const kangarooSong = (x1, v1, x2, v2) => {
    
    for ( let amountOfJumps = 0; amountOfJumps < 10000; amountOfJumps++ ) {
        if ( x1 + v1 * amountOfJumps === x2 + v2 * amountOfJumps ) {
            return "YES"
        } 
    }
    return "NO"
}

const x1 = 0
const v1 = 2
const x2 = 5
const v2 = 3

console.log(kangarooSong(x1, v1, x2, v2)) //no