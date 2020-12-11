//cafe order checker
//2 registers, one combined kitchen orders list
//takeout orders, dineinorders, servedorders
//write a function to make sure they are being served first come, first serve

//example take out orders : [1, 3, 5]
//dine in order: [2, 4, 6]
//served orders: [1, 2, 4, 6, 5, 3] - not first come first serve

let takeOutOrders = [1, 3, 5]
let dineInOrders = [2, 4 ,6]
let servedOrders = [1, 2 , 4, 6, 5, 3] //false
let servedOrders2 = [1, 2, 4, 3, 6, 5] //
let TakeOut = [17, 8, 24]
let DineIn = [12, 19, 2]
let Served = [17, 8, 12, 19, 24, 2] //should be true
//check the order of served orders. The first index should be either the first index of dineinorder or takeoutorders.

function checkFirstComeFirstServe(takeOutOrders, dineInOrders, servedOrders) {
    let currentTakeOutOrder = 0
    let currentDineInOrder = 0
   
    for (let i = 0; i < servedOrders.length; i++) {
        if ( servedOrders[i] === takeOutOrders[currentTakeOutOrder] ) {
            currentTakeOutOrder++
        } else {
            currentDineInOrder++
        }
    }
    return currentTakeOutOrder >= takeOutOrders.length && currentDineInOrder >= dineInOrders.length ? true : false
}

console.log(checkFirstComeFirstServe(takeOutOrders, dineInOrders, servedOrders))
console.log(checkFirstComeFirstServe(takeOutOrders, dineInOrders, servedOrders2))
console.log(checkFirstComeFirstServe(TakeOut, DineIn, Served))

