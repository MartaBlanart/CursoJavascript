var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i <= 6; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);

//Ejercicio resuelto
/*
function Fibonacci(num) {
    if (num === 1) return [1]
    if (num === 2) return [1, 1]
    let list = [1, 1]
    for (let i = 2; i < num; i++) {
        list.push(list[i - 1] + list[i - 2])
    }
    return list
}

console.log(Fibonacci(12))
*/