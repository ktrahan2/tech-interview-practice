// determine if two kangroos starting position x will ever be on the same spot with y jump length

//set their positions. while those positions are not the same add their jump length to their current spot

const kangarooSong = (x1, v1, x2, v2) => {
    
    for ( let amountOfJumps = 0; amountOfJumps < 10000; amountOfJumps++ ) {
        if ( x1 + v1 * amountOfJumps === x2 + v2 * amountOfJumps ) {
            return "YES"
        } 
    }
    return "NO"
}

const x1 = 0
const v1 = 2
const x2 = 5
const v2 = 3

console.log(kangarooSong(x1, v1, x2, v2)) //no

// -------------- //

//Time in words
//return the numbered time in words

//given an hour and minute
// example input 7, 15
// output - quarter past seven

const timeInWords = (hour, minute) => {

    const timeInWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"]

    if ( minute === 00 ) {
        return `${hour} o'clock`
    } else if ( minute === 30 ) {
        return `half past ${timeInWords[hour]}`
    } else if ( minute === 15 ) {
        return `quarter past ${timeInWords[hour]}`
    } else if ( minute === 45 ) {
        hour = hour + 1
        return `quarter to ${timeInWords[hour]}`
    } else if ( minute > 0 && minute < 15 || minute > 15 && minute < 30 ) {
        return `${timeInWords[minute]} minutes past ${timeInWords[hour]}`
    }
}

const covertNumberToWord = ( number ) => {

}

const hour = 7
const minute = 15

console.log(timeInWords(hour, minute)) // quarter past seven