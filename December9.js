// Interview Cake in house calendar

//if time ranges over lap then condense them

function mergeMeetingTimes(meetings) {
    const sortedMeetings = meetings.sort((a, b) => a.startTime - b.startTime)
    const mergedMeetings = [sortedMeetings[0]]
    
    for (let i = 1; i < sortedMeetings.length; i++) {
        const currentMeeting = sortedMeetings[i]
        const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]

        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime)
        } else {
            mergedMeetings.push(currentMeeting)
        }
    }
    return mergedMeetings
}

let test1 = [{startTime: 1, endTime: 3}, {startTime: 2, endTime: 4}] //expected output [( 1, 4 )]

console.log(mergeMeetingTimes(test1))

