//given m and n the number of words int he magazine and note
//given an array of the words in the magazine
//given an array of the words in the note

//determine whether or not all of the words in the note are also in the magazine
//the amount of times the word shows up matters

//return 'Yes' if possible, otherwise 'No'

//create  hashmap of the words in the magazine and then loop through the words in the note and see if you can find them

const matchNoteToMagazine = ( magazine, note ) => {

    let wordCount = 0
    
    let magazineHash = createWordHash(magazine)
    for ( let i = 0; i < note.length; i ++) {
        let currentWord = note[i]
        if ( magazineHash[currentWord] > 0 ) {
            magazineHash[currentWord] -= 1
            wordCount++
        } else {
            console.log('No')
            break
        }
    }
    
    if ( wordCount === note.length ) {
        return console.log('Yes')
    }
}

const createWordHash = ( array ) => {

    let newHash = {}

    array.forEach(word => {
        if ( newHash[word] ) {
            newHash[word] += 1
        } else {
            newHash[word] = 1
        }
    })

    return newHash
}

let magazineArray = ["give", "me", "one", "grand", "today", "night"]
let noteArray = ["give", "one", "grand", "today"]

console.log(matchNoteToMagazine(magazineArray, noteArray))