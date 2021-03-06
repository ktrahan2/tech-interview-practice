//Problem - repeated string

//you are given a string s, which is repeated infinitely
//find the number of a's in the first n letters of that string

function findNCharacters(s, n) {
    
    let aCount = 0
    s = makeStringNLength(s, n)

    for (let i = 0; i < n; i++) {
        s[i] === "a" ? aCount += 1 : null
    }
    
    return aCount
}
 
function makeStringNLength(s, n) {
    while (s.length < n) {
        s = s + s
    }
    return s
}

let test1s = 'abcac'
let test1n = 10

let test2s = "bca"
let test2n = 20

console.log(findNCharacters(test1s, test1n))
console.log(findNCharacters(test2s, test2n))
