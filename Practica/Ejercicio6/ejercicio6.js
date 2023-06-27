/**Factorial */

var numero;

numero= prompt('Ingresa el numero');

var total=1;
for( let i=1; i<=numero; i++){
    total= total*i;
}

document.write('El factorial de tu número es:'+ total);