// determine how many pairs of socks you can sell. 
// given the number of socks and an array of numbers that represent a color

// input [ 1, 2, 1, 2, 1, 3, 2]
// output 2

// make a hash of all of the socks and find out how many pairs you can make. 

const sockMerchant = (n, array) => {

    let sockHash = arrayToHashMap(array)
    
    let sockCountArray = Object.values(sockHash)
    let count = 0

    sockCountArray.map( sockColorCount => {
        if ( sockColorCount > 1 ) {
            let remainingSocks = sockColorCount % 2
            let pairs = ( sockColorCount - remainingSocks ) / 2
            count += pairs
        }
    })
    return count

}

const arrayToHashMap = ( array ) => {
    let sockHash = {}

    for ( let i = 0; i < array.length; i++ ) {
        if ( sockHash[array[i]] ) {
            sockHash[array[i]] += 1
        } else {
            sockHash[array[i]] = 1
        }
    }

    return sockHash
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])) // 2
console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2, 3, 2])) // 4