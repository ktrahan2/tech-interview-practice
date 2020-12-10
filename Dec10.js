//take an array of characters and reverse them 

function reverseCharacters(array) {
    return array.reverse()
}

test1 = ["k", "y", "l", "e"]

// console.log(reverseCharacters(test1))

//given an array of characters, return the message within. The words are in backwards order
//intended to solve while they remain characters not as words. So I took the easy way out, oops

function reverseWords(array) {
    let wordsArray = array.join("").split(" ")
    let leftIndex = 0
    let rightIndex = wordsArray.length - 1

    while (leftIndex < rightIndex) {
        const temp = wordsArray[leftIndex]
        wordsArray[leftIndex] = wordsArray[rightIndex]
        wordsArray[rightIndex] = temp
        leftIndex++
        rightIndex--
    }
    return wordsArray.join(" ")    
}

reverseWordsTest1 = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ]

// console.log(reverseWords(reverseWordsTest1))

//merge girlscout cookie orders
//take two arrays of IDs and merge them together in order from smallest to largest
//arrays come pre sorted

//this way takes to much time because of the sorting function, O(n lg n) time
// function mergeCookieOrders(array1, array2) {
//     return array1.concat(array2).sort((a, b) => a - b)
// }

//this is O(n) time, so much faster and takes up same space. 
function mergeCookieOrders(array1, array2) {
    let mergedList = []
    //could name i,j,k better to reflect which index they are
    let j = 0
    let k = 0
    for (let i = 0; i < (array1.length + array2.length); i++) {
    
        const headOfArray1 = array1[j]
        const headOfArray2 = array2[k]

        const array1Exhausted = j >= array1.length
        const array2Exhausted = k >= array2.length

        if (!array1Exhausted && (array2Exhausted || headOfArray1 < headOfArray2)) {
            mergedList[i] = headOfArray1
            j++
        } else {
            mergedList[i] = headOfArray2
            k++
        } 
        //this else statement doesnt really work. Refactor to fix if the array index is above its length

    }

    return mergedList
    
}

let array1 = [3, 4, 6, 8, 9]
let array2 = [1, 2, 5, 7]

console.log(mergeCookieOrders(array1, array2))