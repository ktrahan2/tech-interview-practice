//given p which is how many test cases you will receive
//given two strings see if they share a common substring
//may be as small as one character
//return YES or NO
//for each pair of strings answer yes or no

//check to see if the two strings have the same letter

const p = 2
const string = "hello"
const string2 = "world"
const string3 = "hi"
const string4 = "world"

//breaking on time
// const twoStrings = ( string, string2 ) => {

//     let string1SubStrings = findAllSubstrings(string)
//     let string2SubStrings = findAllSubstrings(string2)
    
//     let string1Hash = createHashMap(string1SubStrings)

//     for ( let i = 0; i < string2SubStrings.length; i++ ) {
//         let currentWord = string2SubStrings[i]
//         if ( string1Hash[currentWord] ) {
//             return "YES"
//         } 
//     }
//     return "NO"
// }

// const createHashMap = ( array ) => {
    
//     let hashMap = {}

//     array.forEach(word => {
//         if ( hashMap[word] ) {
//             hashMap[word] += 1
//         } else {
//             hashMap[word] = 1
//         }
//     })

//     return hashMap
// }

// const findAllSubstrings = ( string ) => {
//     let i, j, result = [];

//     for (i = 0; i < string.length; i++) {
//         for (j = i + 1; j < string.length + 1; j++) {
//             result.push(string.slice(i, j));
//         }
//     }
//   return result;
// }

//doesnt really match using dictionaries/objects ?? its in hackerrank prep for that
const twoStrings = (s1, s2) => {
    let result = "NO";
             
    result = (
        s1.split('')
        .filter((el, key) => s2.indexOf(el) > -1)
        .length > 0) ? "YES" : "NO";

    return result;
}

console.log(twoStrings( string, string2 ))
console.log(twoStrings( string3, string4 ))