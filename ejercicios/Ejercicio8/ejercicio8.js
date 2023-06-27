//Una función sin parámetros que devuelva siempre "true"

function siempreVerdadero(esVerdad=true){
    console.log(esVerdad);
}

//Una función asíncrona que utilice un setTimeout y 
//pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const miPromesa= new Promise((resolve, reject)=>{
            setTimeout(resolve, 5000);
        }).then(function() {
            console.log("Hola soy una promesa");
        });

// Una función generadora de índices pares automáticos   

function* generaIdPares(){
    let id=0;
    while (true){
    id+=2;
        if(id===10){
            return id;
        }
    }
    yield id;
}

const gen=generaIdPares();

console.log(gen.next());
console.log(gen.next());


