// Bucles For

// i = i + 1
// i += 1
// i++

for (let i = 0; i < 10; i++) {
    // Esto es el bucle
    console.log(i)
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2)
}

// Estructura for...of
for (let valor of lista) {
    console.log(valor)
}

// Estructura forEach
lista.forEach(valor => {
    console.log(valor)
})

// Estructura for...in
let persona = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    isDeveloper: true
}
console.log(persona.nombre)

let prop = "edad";
console.log(persona[prop])

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}

// Bucles While

let i = 0;
let max = 10;
while (i < max) {
    console.log(i);
    i++;
}

i = 15;
// Do...while
do {
    console.log("Estoy en el do while")
} while (i < max)

// break y continue
// labels

let unidades = 0
let decenas = 0

bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log(`El número actual es: ${decenas}${unidades}`)
        unidades++
        if (unidades === 10) {
            unidades = 0
            break bucleUnidades
        }
        if (decenas === 2) {
            break bucleDecenas
        }
    }
    decenas++
}
console.log("Ya hemos terminado")

// Casos muy específicos - break, continue
let lista1 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue;
    }
    let j = 50;
    const k = 100;
    console.log(lista[i]);
    console.log(j);
    console.log(k);

    if (lista[i] > 5) {
        break;
    }
}


// Bifurcaciones if...else
let saldo = 50;
let efectivo = 100;

if (efectivo < saldo) {
    console.log("Puedes sacar dinero")
}

if (efectivo < saldo) {
    console.log("Puedes sacar dinero")
} else {
    console.log("Saldo insuficiente")
}

let nota = 200;

if (nota === 5) {
    console.log("Enhorabuena, has obtenido un sobresaliente");
} else if (nota === 4) {
    console.log("Buen trabajo, pero podrías haberlo hecho mejor");
} else if (nota === 3) {
    console.log("Has obtenido un suficiente");
} else if (nota === 2) {
    console.log("No has aprobado por poco");
} else if (nota === 1) {
    console.log("No has estudiado nada, trabaja un poquito más para la próxima");
} else {
    console.log("Error, introduce una nota entre el 1 y el 5");
}
// Sentencias Switch
let nota1 = 3;

switch (nota) {
    case 5:
        console.log("Buen trabajo, ¡sobresaliente!");
        break;
    case 4:
        console.log("Buen trabajo, pero podrías haberlo hecho mejor");
        break;
    case 3:
        console.log("Has obtenido un suficiente");
        break;
    case 2:
        console.log("No has aprobado por poco");
        break;
    case 1:
        console.log("No has estudiado nada, trabaja un poquito más para la próxima");
        break;
    default:
        console.log("Error")
        break;
}