
//Calcula factorial de un número con for
let factorial = 1
for (let i = 10; i > 0; i--) {
    factorial *= i
}
console.log(factorial);

//Calcula factorial de un número con while

let factorialWhile = 1
let num = 10
while (num > 1) {
    factorialWhile *= num
    num--
}
console.log(factorialWhile) ;

//Calcula factorial
let factorialBreak = 1
let num2 = 10
while (true) {
    factorialBreak *= num2
    num2--
    if (num === 1) break
}
console.log(factorial);