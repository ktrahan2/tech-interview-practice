//11.19.2020 Fibonacci Number by index

let number = 7
let number2 = 32

function findFibonacciNumberByIndex(number) {
  //fibonacci number is f(n) = f(n-1) + f(n-2)

  let fibonacciNumber = 0

  fibonacciNumber = (number - 1 ) + (number - 2)

  return fibonacciNumber
}

// console.log(findFibonacciNumberByIndex(number))
// console.log(findFibonacciNumberByIndex(number2))