//Creamos fechas

let fechaHoy= new Date (2022,06,20);
let fechaNacimiento= new Date(1995,10,24);

//Comparar fechas

let compararFechas= fechaHoy>fechaNacimiento;
compararFechas;

//Obtener día nacimiento
let diaNacimiento= fechaNacimiento.getDate();
console.log(diaNacimiento);

//Obtener mes de nacimiento
 let mesNacimiento= fechaNacimiento.getMonth() +1;
 console.log(mesNacimiento);

 //Obtener año de nacimiento

 let añoNacimiento= fechaNacimiento.getFullYear();
 console.log(añoNacimiento);
