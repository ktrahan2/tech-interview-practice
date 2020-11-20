//Clash of code 11.17, return the amount of repeated strings

let string = "hello world hello world"
let string2 = "hello hello hello"
let string3 = "hello world"

const countRepeatedStrings = (string) => {

    let count = 0 
    let stringArray = []

    stringArray = string.split(" ")

    let hashMap = mapStringToHash(stringArray)
   
    Object.values(hashMap).map(el => {
        el >= 2 ? count += 1 : null
    })
    
    return count 
}

const mapStringToHash = (array) => {

    let hashMap = {}

    array.map(word => {
        if (!hashMap[word]) {
            return hashMap[word] = 1
        } else {
            return hashMap[word] = hashMap[word] + 1
        }
    })
    
    return hashMap
}


console.log("test1", countRepeatedStrings(string))
// console.log("test2", countRepeatedStrings(string2))
// console.log("test3", countRepeatedStrings(string3))

//Melissa code challenge

const bracketString = '{[]}';

function isValidBrackets ( bracketString ) {
  
  const stack = [];
  const openingBrackets = [ "[", "{", "(" ]
  
  if ( bracketString.length % 2 != 0 ) {
    return false
  } else {
    for ( let i = 0; i < bracketString.length; i++ ) {
      if ( openingBrackets.includes(bracketString[i]) ) {
       stack.push( bracketString[i] )
      } else {
        let lastOpenBracket = stack.pop()
        if ( lastOpenBracket == "[" && bracketString[i] != "]" ) {
          return false
        } else if ( lastOpenBracket == "{" && bracketString[i] != "}" ) {
          return false
        } else if ( lastOpenBracket == "(" && bracketString[i] != ")" ) {
          return false
        } 
      }
    }
    if ( stack.length === 0 ) {
        return true
    }
  }
};

// console.log(isValidBrackets( bracketString ))

