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

