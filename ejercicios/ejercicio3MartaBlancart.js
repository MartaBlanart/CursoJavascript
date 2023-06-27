//Calcular factorial de un número usando bucle for

function calcularFactorial (numero){
    let fact=1;
    for(let i=1; i<numero;i++){
        fact= fact*i;
    }
}

console.log(calcularFactorial(6));


//Calcular factorial con while

function calculoFactorial (numero){
    let factorial=1;
    while(numero>1){
        factorial=factorial*1;
        numero--;
    }
    return factorial;
}

console.log(calculoFactorial(6));