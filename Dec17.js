// apple stocks

//figure out how much money you could of made the day before, if trading stocks all day

//indices are the time after trading opened (930), values are the price 
//so index 60 is 1030am

//find ONE purchase and the best sale of one stock.

const stockPrices = [10, 7, 5, 8, 11, 9] //returns 6, buying for 5 and selling for 11. profit was $6

const getMaxProfit = (stockPrices) => {

    let maxProfit = stockPrices[1] - stockPrices[0]
    let minPrice = stockPrices[0] 

    for (let i = 0; i < stockPrices.length; i++) {
        let currentPrice = stockPrices[i]
        if ( currentPrice < minPrice) {
            minPrice = currentPrice
        } else if ( currentPrice - minPrice > maxProfit ) {
            maxProfit = currentPrice - minPrice
        }
    }
    return maxProfit
}

// ---------------------- //

// find highest product of 3
// array will have atleast 3 integer

const findHighestProductOfThreeNumbers = ( array ) => {
    if ( array.length >= 3 ) {
        
        let highestProductof3 = array[0] * array[1] * array[2]
        let highestProductof2 = array[0] * array[1]
        let highest = Math.max(array[0], array[1])
        let lowerProductof2 = array[0] * array[1]
        let lowest = Math.min(array[0], array[1])
        
        for (let i = 2; i < array.length; i++) {
            let currentNumber = array[i]

            highestProductof3 = Math.max(
                highestProductof3,
                currentNumber * highestProductof2,
                currentNumber * lowerProductof2
            )

            highestProductof2 = Math.max(
                highestProductof2,
                currentNumber * highest,
                currentNumber * lowest
            )

            lowerProductof2 = Math.min(
                lowerProductof2,
                currentNumber * highest,
                currentNumber * lowest
            )

            highest = Math.max(highest, currentNumber)

            lower = Math.min(lowest, currentNumber)
        }    
    return highestProductof3
    }
}

let numberArray = [1, 2, 3, 4] // 24
let numberArray2 = [2, 7, 5, 3] // 105

// console.log(findHighestProductOfThreeNumbers( numberArray ) )
// console.log(findHighestProductOfThreeNumbers( numberArray2 ))

// --------------------//


