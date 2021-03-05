//given an array of string digits, and another array of string digits aka pattern
//determine if the pattern is found within the grid  
let grid = [
    "7283455864",
    "6731158619",
    "8988242643",
    "3830589324",
    "2229505813",
    "5633845374",
    "6473530293",
    "7053106601",
    "0834282956",
    "4607924137"
]

let pattern = [
    "9505",
    "3845",
    "3530"
]

let grid2 = [
    "1234",
    "4321",
    "9999",
    "9999"
]

let pattern2 = [
    "12",
    "22"
]
//loop through the grid and check to see if the first pattern is in it, if so then check the next number to see if the 2nd pattern is it in etc

//need to make sure the indexes are the same starting/ending points
// didnt account for repeats of the numbers
const gridSearch = ( grid, pattern ) => {
    
    let currentPatternRow = 0
    let prevIndex = -1
    let startingIndex = 0
    grid.forEach((line, index) => {
        
        if ( currentPatternRow === 0 && line.includes(pattern[currentPatternRow])) {
            startingIndex = line.indexOf(pattern[currentPatternRow])
            currentPatternRow++
            prevIndex = index
        } else if ( line.includes(pattern[currentPatternRow]) && index - prevIndex === 1 && line.indexOf(pattern[currentPatternRow] === startingIndex) ) {
            currentPatternRow++
            prevIndex = index
        } 
        
    })
    console.log(currentPatternRow, pattern.length)
    return currentPatternRow === pattern.length ? "YES" : "NO"
    
}

console.log(gridSearch(grid, pattern)) 
console.log(gridSearch(grid2, pattern2)) 
