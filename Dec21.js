// in-place shuffle of an array

//each item in the array must have the same probability of ending up in each spot in the final array
//take the array and rearrange it in a random order
function shuffleArray( array ) {
    
    if ( array.length <= 1) return array

    for ( let indexWeAreChoosingFor = 0;
        indexWeAreChoosingFor < array.length - 1;
        indexWeAreChoosingFor++) {

            const randomChoiceIndex = getRandom(indexWeAreChoosingFor, array.length - 1)

            if ( randomChoiceIndex !== indexWeAreChoosingFor ) {
                const valueAtIndexWeChoseFor = array[indexWeAreChoosingFor]
                array[indexWeAreChoosingFor] = array[randomChoiceIndex]
                array[randomChoiceIndex] = valueAtIndexWeChoseFor
            }
        }
    return array
}

//gets random number >= floor, and <= ceiling
function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1) + floor)
}

let array1 = [ 1, 2, 3, 4, 5 ]
let array2 = [ 1 ]

// console.log(shuffleArray(array1))

//both working
// console.log(getRandom(0, 100)) 
// console.log(getRandom(0, 200))

// ------------------------ //

//binary search can only be used if already sorted. Looks at the total length of an array, chooses the middle point and sees if that index is
// greater or lower than the target. If the current index is greater than the target, then move the ceiling down to the current index. 
// If the current index is less than the target, move the floor up to the current index. Then repeat your process

//Find Rotating Point
//given a list find out where it rotates. goes z-a-z (find a) or a-z-a (find z)
//find the word that starts with a.
//char code a = 97, z = 122

const findRotationPoint = ( array ) => {
    let floorIndex = 0
    let ceilingIndex = array.length -1 
    let target = "a"

    while ( floorIndex + 1 < ceilingIndex ) {

        let totalLength = ceilingIndex - floorIndex
        let halfWayPoint = Math.floor( totalLength/2 )
        let currentPoint = array[halfWayPoint][0]
    
        if ( array[halfWayPoint][0] === target ) {
            return halfWayPoint
        } else if ( currentPoint < array[0] ) {
            ceilingIndex = halfWayPoint
        } else {
            floorIndex = halfWayPoint
        }
    }
    
}

const words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
  ];

let test1 = ["z", "a", "b", "c", "d"]

console.log(findRotationPoint( words ))
console.log(findRotationPoint( test1 ))