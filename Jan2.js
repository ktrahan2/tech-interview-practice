//find all the peaks, returmn an object { pos: [index], peaks: [height of peak]}
//my attemp, could only get 2 tests passing, couldnt deal with plateaus
const findPeaks = ( peaks ) => {
    let posArray = []
    let peaksArray = []
    for ( let i = 0; i < peaks.length; i++ ) {
        if ( peaks[ i ] < peaks[ i + 1 ] && peaks[ i + 1 ] > peaks[ i + 2 ]) {
            posArray.push( i + 1 )
            peaksArray.push(peaks[i + 1])
        }
    }
    return { pos: posArray, peaks: peaksArray }
}

let peaks = [0, 1, 2, 5, 1, 0] 
let peaks2 = [3,2,3,6,4,1,2,3,2,1,2,2,2,1]

// console.log(findPeaks( peaks )) // { pos: [3], peak: [5]}
// console.log(findPeaks( peaks2 ))

function pickPeaks(arr) {
    var result = {pos: [], peaks: []}
    if ( arr.length > 2 ) {
        let pos = -1
        for ( let i = 1; i < arr.length; i++ ) {
            if ( arr[i] > arr[ i-1 ]) {
                pos = i
            } else if ( arr[i] < arr[ i-1 ] && pos != -1 ) {
                result.pos.push(pos)
                result.peaks.push(arr[pos])
                pos = -1
            }
        }
    }
    return result
}

console.log(pickPeaks(peaks))
console.log(pickPeaks(peaks2))