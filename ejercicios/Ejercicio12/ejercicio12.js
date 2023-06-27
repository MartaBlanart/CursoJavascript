class Estudiante{
    constructor(nombre, asignaturas){
        this.nombre=nombre;
        this.asignaturas= asignaturas
        const asignaturas= new Array["Javascript", "HTML", "CSS"]
    }

    obtenerDatos(){
    return ('Mi nombre es ${nombre} y estudio ${asignaturas}')
    }

}

const estudiante1= new Estudiante("marta", asignaturas);
console.log(estudiante1.obtenerDatos);


//Ejercicio del profesor
/*
class Estudiante {
    nombre = "Gorka"
    asignaturas = ["Javascript", "HTML", "CSS"]

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const estudiante = new Estudiante()

console.log(estudiante.obtenDatos())*/ 