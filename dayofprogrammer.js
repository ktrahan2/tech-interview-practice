//day of the programmer 256th day of the year
//travel to this day in the inclusive year range of 1700 2700

//julian calendar 1700 - 1917 
    //leap years divisible by 4 so year % 4 = 0 then its a leap year in julian calendar
//started gregorian calendar 1918
    //from jan 31st it hops to feb 14 
//1919 - 2700 normal gregorian calendar
    //leap year divisible by 400, or divisible by 4 and not 100

//given a year find the date of the 256th day, print it in format dd.mm.yyyy

//input 1984
//output 12.09.1984 (september 12 1984)

// console.log(1984 % 400 === 0 || 1984 % 4 === 0 && 1984 % 100 !== 0) //gregorian

// check if its gregorian or julian
// check if its a leap year
// find the day
    // 256 day of a normal year is 13.09.year
    // 256 day of a leap year is 12.10.year
    // 256 day of 1918 is 26.09.1918
    
//if its a normal year before 

const dayOfProgrammer = ( year ) => {
    if ( year > 1918 ) {
        if ( year % 400 === 0 || year % 4 === 0 && year % 100 !== 0 ) {
            return `12.09.${year}`
        } else {
            return `13.09.${year}`
        }
    } else if ( year < 1918 ) {
        if ( year % 4 === 0 ) {
            return `12.09.${year}`
        } else {
            return `13.09.${year}`
        }
    } else {
        return `26.09.${year}`
    }
}

console.log(dayOfProgrammer(1984)) // 12.09.1984
console.log(dayOfProgrammer(1918)) // 12.09.1984
