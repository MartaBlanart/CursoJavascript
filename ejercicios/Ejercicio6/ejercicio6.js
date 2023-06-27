//Creamos lista 
let listaCompra=["tomates", "peras","patatas", "salsa", "macarrones"];
//Añadimos un elemento
listaCompra.push("Aceite de girasol");
console.log(listaCompra);
//Eliminamos un elemento
listaCompra.pop("Aceite de girasol");
console.log(listaCompra);

//Añadimos lista de objetos

let peliculasFavoritas= [
{titulo:"Spiderman", director:"Marta Blancart", fecha : new Date (2008,01,23),
titulo:"Ahora o nunca", director:"Steven Spilberg", fecha: new Date (2018,03,15),
titulo:"Para siempre jamás", director:" Sergio Pérez", fecha:new Date (2022,06,08)
}
]

//Nueva lista utilizando filter

const peliculasModernas= peliculasFavoritas.filter(peliculas=> peliculas.fecha> new Date (2010,11,01));
console.log(peliculasModernas);

//Directores de la lista

const directores= peliculasFavoritas.map(pelicula=>{return pelicula.director});
console.log(directores);


//Nombres de peliculas originales

const titulos= peliculasFavoritas.map(pelicula=>{return pelicula.titulo});
console.log(titulos);

//Nueva lista que concatene la lista de directores y la lista de los títulos 

const newList= (directores.concat(titulos));

//Nueva lista que concatene la lista de directores y la lista de los títulos

const newList2= [...directores, ...titulos];


