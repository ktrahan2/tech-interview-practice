// Inflight entertainment system
//choose two movies who's runtime matches the flight time

//given flightLength, array of movieLengths(in minutes), return boolean refelecting wether or not there is a match in the list

//dont repeat movies, exactly two movies, runtime over memory. 

function canTwoMoviesFillFlight(movieLengths, flightLength) {
    const movieLengthSeen = new Set()

    for (let i = 0; i < movieLengths.length; i++) {
        const firstMovieLength = movieLengths[i]

        const matchingSecondMovieLength = flightLength - firstMovieLength
        if (movieLengthSeen.has(matchingSecondMovieLength)) {
            return true
        }
        movieLengthSeen.add(firstMovieLength)
        console.log(movieLengthSeen)
    }
    return false
}

let movieLengths = [45, 60, 30, 15 ]
let movieLengths2 = [30, 45, 45]
let movieLengths3 = [30, 45, 30]
let flightLength = 60

// console.log(canTwoMoviesFillFlight(movieLengths, flightLength))
// console.log(canTwoMoviesFillFlight(movieLengths2, flightLength))
// console.log(canTwoMoviesFillFlight(movieLengths3, flightLength))


//