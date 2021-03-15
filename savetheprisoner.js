//given x number of prisoner, y pieces of candy
//candy is passed out starting at a random seat number s, and then distributed in a circle until all are gone
//return the position of the chair number of the prisoner that will get the bad piece of candy


const saveThePrisoner = (prisonerNumber, piecesOfCandy, startingSeat) => {
    return startingSeat + (piecesOfCandy % prisonerNumber) - 1
}

console.log(saveThePrisoner(4, 6, 2)) // passing
console.log(saveThePrisoner(7, 19, 2)) // passing
console.log(saveThePrisoner(352926151, 380324688, 94730870)) //passing, but fails on hackerrank test

