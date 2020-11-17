//Clash of code 11.17

let string = "hello world hello world"
let string2 = "hello hello hello"
let string3 = "hello world"

const countRepeatedStrings = (string) => {

    let hashMap = {}
    count = 0 

    string = string.split(" ")

    string.map(word => {
        if (!hashMap[word]) {
            return hashMap[word] = 1
        } else {
            return hashMap[word] = hashMap[word] + 1
        }
    })

    Object.values(hashMap).map(el => {
        el >= 2 ? count += 1 : null
    })
    
    console.log(count)
    return count 
}

countRepeatedStrings(string)
countRepeatedStrings(string2)
countRepeatedStrings(string3)
