// return the number of valleys walked through

//given int steps, and string path 

//input = 'DDUUDU' / ouput = 2
//when i is U sea level + 1, when D -1. 
//number of steps doesnt matteR?
function countValleys(path) {
    let seaLevel = 0
    let valleys = 0 

    for (let i = 0; i < path.length; i++) {
        path[i] === "U" ? seaLevel += 1 : seaLevel -= 1
        if (seaLevel === 0 && path[i] == "U") {
            valleys += 1
        }
    }
    return valleys
}


let test1path = "UDDDUDUU"
let test2path = "DUDUDUDU"
let test3path = "UDUDUDUD"


console.log(countValleys(test1path))
console.log(countValleys(test2path))
console.log(countValleys(test3path))

