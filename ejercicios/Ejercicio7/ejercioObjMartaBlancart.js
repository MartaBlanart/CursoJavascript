
//Creamos un objeto
let marta={

    nombre: "Marta",
     apellido: "Blancart Aguilar",
      edad:26,
       altura:1.60,
        eresDesarrollador:true
}

console.log(marta);

//Para obtener datos de un objeto

marta.edad;
marta.altura;

//y así...

let obtenerEdad= marta.edad;

console.log(obtenerEdad);

//Crear una lista dentro de otra lista
const lista = [
    {
        ...marta
    },{
        nombre: "Pedro",
        apellido: "Angulo",
        edad: 35,
        altura: 180,
        eresDesarrollador: true
    },{
        nombre: "Amaia",
        apellido: "Etxeberria",
        edad: 30,
        altura: 165,
        eresDesarrollador: false
    }
]

//Ordenar listas

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)

console.log(listaOrdenada)

