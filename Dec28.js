//sorting scores
//given an unsorted array and highest possible score, returns a sorted array with O(n lg n) time

function sortScores( scoresArray, highestScore ) {
    let scoresHash = {}

    scoresArray.forEach( score => {
        if ( !scoresHash[score] ) {
            scoresHash[score] = 1
        } else {
            scoresHash[score] += 1
        }
    })
    return Object.keys(scoresHash).reverse()
}

let scoresArray = [ 37, 89, 41, 65, 91, 53 ]
let highestScore = 100

// console.log(sortScores( scoresArray, highestScore )) // [ 91, 89, 65, 53, 41, 37 ]

// ---------------------------- //

//takes an array of meeting time objects and returns an array of overlapping meeting times
//dont assume the meetings are in order

function mergeRanges( meetingTimes ) {

    meetingTimes = meetingTimes.sort( (a, b) => a.startTime - b.startTime)
    
    let mergedMeetings = [meetingTimes[0]]

    for ( let i = 0; i < meetingTimes.length; i++ ) {
        let currentMeeting = meetingTimes[i]
        let lastMergeMeeting = mergedMeetings[mergedMeetings.length - 1]

        if ( currentMeeting.startTime <= lastMergeMeeting.endTime ) {
            lastMergeMeeting.endTime = Math.max(currentMeeting.endTime, lastMergeMeeting.endTime)
        } else {
            mergedMeetings.push(currentMeeting)
        }
        console.log("merged", mergedMeetings)
    }
    return mergedMeetings
    
}

let meetingTime =   [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
] 

// console.log(mergeRanges( meetingTime )) 
 //   [
//     { startTime: 0, endTime: 1 },
//     { startTime: 3, endTime: 8 },
//     { startTime: 9, endTime: 12 },
//    ]

// --------------------------------- //

class Solution {
    solve(n) {
        let clapArray = []
        let i = 1
        while ( i <= n ) {
            let div = parseInt( i / 3 )
            if ( i === div * 3 ) {
                    clapArray.push("clap")
            } else if ( i.toString().match(/[3,6,9]/)) {
                    clapArray.push("clap")
            } else {
                clapArray.push(i.toString())
            }
            i++
        }
        return clapArray
    }
}