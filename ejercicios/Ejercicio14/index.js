/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//Creamos una función con un error
const miFuncion = nombre=>{
    if(typeof nombre==="string"){
        return console.log("hola ${nombre}")
    } throw new console.error("No está bien indicado el nombre")
}

//Capturamos dicho error

try{
    console.log("Se está ejecutando de manera correcta")
    const saludar= miFuncion
    console.log(saludar)
} catch (e){
    console.error("No se esta ejecutando correctamente:${e}")
} finally {
    console.log("Esto se ejecuta siempre")
}

var nombre= "marta"