//racists can jump a certain height, given a list of hurtle heights
//given a magic potion then can jump +1
//how many doses of the potion do they need to finish the race

//find the max number in the list then return difference between the max hurdle and the jump

const hurdleRace = (k, height) => {
    if ( Math.max(...height) < k ) return 0
    
    return (Math.max(...height)) - k 
}

// console.log(hurdleRace(4, [1, 6, 3, 5, 2])) // passing all hackerrank