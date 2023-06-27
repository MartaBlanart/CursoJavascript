function Coche(marca, caballos, color){
    this.marca=marca;
    this.caballos= caballos;
    this.color= color;
}

const coche1= new Coche("mercedes", 180, "negro");
const coche2= new Coche("bmv", 150, "gris");
const coche3= new Coche("citroen", 200, "verde");

var coches= new Array(coche1, coche2, coche3);



for (i=0; i<coches.length; i++){
    console.log(coches[i]);
}



document.write('Coches:');