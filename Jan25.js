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

// console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])) // 2
// console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2, 3, 2])) // 4

// ------------------ //

//Sherlock and anagrams

// determine how many anagram pairs there are. So a substring of characters that can be rearranged to match another substring of characters

//input abba
// output 4
// a,a . b,b. ab,ba. abb,bba

//works ok in time because the limit is 100 characters, O(n2)

const findAllSubstrings = ( string ) => {

    let i, j, result = []

    for ( i = 0; i < string.length; i++ ) {
        for ( j = i + 1; j <= string.length; j++) {
            result.push(string.slice(i, j))
        }
    }
    return result
}

const isAnagram = ( str1, str2 ) => {

    const hist = {}
    
    for ( let i = 0; i < str1.length; i++ ) {

        const char = str1[i]

        if ( hist[char] ) {
            hist[char]++
        } else {
            hist[char] = 1
        }
    }
   
    for ( let j = 0; j < str2.length; j++ ) {
        const char = str2[j]
        
        if ( hist[char] ) {
            hist[char]--
        } else {
            return false
        }
    }
    return true
}

const countAnagrams = ( currentIndex, arr ) => {
    const currentElement = arr[currentIndex]
    const arrRest = arr.slice(currentIndex + 1)
    let counter = 0

    for ( let i = 0; i < arrRest.length; i++ ) {
        if ( currentElement.length === arrRest[i].length && isAnagram(currentElement, arrRest[i])) {
            counter++
        }
    }
    return counter
}

const sherlockAndAnagrams = ( string ) => {
    const duplicatesCount = string.split('').filter( ( v, i ) => string.indexOf(v) !== i).length

    if ( !duplicatesCount ) return 0
    let anagramsCount = 0

    const arr = findAllSubstrings(string)

    for ( let i = 0; i < arr.length; i++ ) {
        anagramsCount += countAnagrams(i, arr)
    }

    return anagramsCount
}

// console.log(findAllSubstrings("abba")) // an array of substrings
// console.log(isAnagram("ifa", "afi")) //true
// console.log(sherlockAndAnagrams("abba")) // 

// ---------------------- //

// return the sum of an hour glass inside a matrix. 

// 1 1 1 
// 1 0 1
// 1 1 1
// output sum = 1+1+1+0+1+1+1 = 6
// don't include the first and last arrays as the middle "connector" index. 
// also skip the first and last index of an array when considering "connector point"
// start on the 2nd array, 1st index. 

const hourGlassSum = ( matrix ) => {

    let highestSum = -Infinity
    let currentArray = 1
    let currentIndex = 1
    
    while ( currentArray < 5 ) {
        
        let connectorPointStart = matrix[currentArray][currentIndex]
        let topSlice = matrix[currentArray - 1].slice(currentIndex - 1, currentIndex + 2)
        let bottomSlice = matrix[currentArray + 1].slice(currentIndex - 1, currentIndex + 2)

        let hourGlassTotal = sumHourGlass(connectorPointStart, topSlice, bottomSlice)

        highestSum = Math.max(highestSum, hourGlassTotal)
        
        currentIndex++
        
        if ( currentIndex == 5 ) {
            currentArray++
            currentIndex = 1
        }
    }
    return highestSum
}

const sumHourGlass = ( connectorPointStart, topSlice, bottomSlice ) => (
    connectorPointStart + addThree(topSlice) + addThree(bottomSlice)
)

const addThree = ( array ) => array.reduce( (acc, sum) => acc += sum )

const matrix = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],   
]

const matrix2 = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2,],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

console.log(hourGlassSum(matrix)) // 7
console.log(hourGlassSum(matrix2)) // 28

// console.log(addThree([0, 0, 0])) // 0 - pass