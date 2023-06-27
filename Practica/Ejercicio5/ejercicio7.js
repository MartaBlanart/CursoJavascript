/**Carrera: crear un programa para controlar las vueltas de un deportista */

var cantidadVueltas;
cantidadVueltas=prompt('Introduce el número de vueltas:')
document.write('Cantidad de vueltas:' + cantidadVueltas);


var vueltas=[];
var contador='';
for(let i=0; i<cantidadVueltas; i++){
    var x= prompt('Ingresa el tiempo por vuelta:');
    vueltas[i]=x
}

/**Habría que saber hacer y escribir lo de vuelta 1, vuelta 2... */

/**Hacer el promedio */

    var acumulador;
    for (let i=0; i<vueltas.length;i++){
        acumulador+=vueltas[i];
}
document.write(acumulador/cantidadVueltas);




