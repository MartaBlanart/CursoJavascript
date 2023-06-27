/*Ejercicio de las Notas*/


/**
 * Creo un Array
 */

var notas= new Array(6.5, 8.9, 10, 7.2);



/*Calcular la nota media*/ 

function notaMedia(notas){
    var acumulador=0;
    for (let i = 0; i < notas.length; i++) {
        acumulador += notas[i];
    }
    console.log(acumulador/4);
}
notaMedia(notas);

/*Clasificación de las notas*/



for (let i = 0; i < notas.length; i++) {
    var nota = notas[i];
    if(nota<5){
        console.log("Suspenso")
    } else if (nota<7){
        console.log("Aprobado")
    } else if (nota<9) {
        console.log("Notable")
    } else if (nota<=10){
        console.log("Sobresaliente")
    } else{
        console.log("La nota está fuera de parámetros")
    }
   

}