
//Listas, arreglos o arrays (conjunto de datos en datos)

const lista1=[1, "hola", undefined, null, true];
console.log(lista1);


const lista2= new Array();


//Objetos 
const movil = {
    altura:10,
    anchura: 5,
    marca: "Apple",
    tarjeta: {
        numero: 1234,
        pin:123,
    }

}

console.log(movil.altura);


//Fechas
//Librerias para ayudarte Moment.js

const ahora=new Date();
const milis= new Date(10); //utilizando milisegundos
const fechaCadena= new Date ("25 marzo 2022");
console.log(fechaCadena);
const fecha_valores= new Date(2022,0,23); //año, mes(empieza desde el 0), día
console.log(dia, mes, anyo);