function countPizza(s) {
    let charHash = {}
    let pizzaArray = ["p", "i", "z", "a"]
    let pizzaCount = 0

    if ( s !== "" ) {
        for (let i = 0; i < s.length; i++) {
            let currentLetter = s[i]
            if ( pizzaArray.includes(currentLetter) ) {
                if (!charHash[currentLetter]) {
                    charHash[currentLetter] = 1
                } else {
                    charHash[currentLetter] += 1
                }
            }
        }
        pizzaCount = Math.floor(Math.min(charHash["p"], charHash["i"], charHash["a"], charHash["z"] / 2)) || 0
    }
    return pizzaCount
}

let s = "izzpa"
let s2 = "pihzzapizza"
let s3 = "ppppz"
let s4 = ""

// console.log("pizzaCount", countPizza(s)) // 1
// console.log("pizzaCount", countPizza(s2)) // 2
// console.log("pizzaCount", countPizza(s3)) // 0
// console.log("pizzaCount", countPizza(s4)) // 0

// ------------------------- //

